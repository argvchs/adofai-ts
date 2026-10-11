import {
    createAddObject,
    createMoveDecorations,
    createSetObject,
    readLevel,
    writeLevel,
    type Action,
    type TrackColorType,
    type TrackStyle,
} from "./src";
import { add, addNullable, deg2rad, div, fromrad, gt, le, lt, mul, rotate, type Vec } from "./math";
const level = readLevel("public/level.adofai");
const { angleData, settings, actions, decorations } = level;
let lastAngle = 0;
let isCCW = false;
let isHidden = false;
// color track
let trackColorType: TrackColorType = "Single";
let trackColor = "debb7b";
let secondaryTrackColor = "ffffff";
let trackColorAnimDuration = 2;
let trackStyle: TrackStyle = "Standard";
// move track
let position: Vec = [0, 0];
let rotation = 0;
let scale = 100;
let opacity = 100;
// scale radius
let radius = 1;
//
const baseBpm = settings.bpm;
let bpm = settings.bpm;
let angleOffset = -180;
let lastRed = -1;
let lastBlue = -1;
const actionBuckets: Action[][] = [];
for (const action of actions) (actionBuckets[action.floor] ??= []).push(action);
let lastRotation = 0;
let lastActualAngle = 0;
let lastPosition: Vec = [0, 0];
let lastAngleOffset = 0;
let lastIsCCW = false;
let lastRedRotation = 0;
let lastBlueRotation = 0;
for (let i = 0; i <= angleData.length; i++) {
    const currentAngle = i < angleData.length ? angleData[i]! : lastAngle;
    const tile = createAddObject({
        tag: `tile_${i} obj`,
        trackColorType,
        trackColor,
        secondaryTrackColor,
        trackColorAnimDuration,
        trackOpacity: opacity,
        trackStyle,
        position: [-15, 0],
        rotation,
        scale: [scale, scale],
        depth: i,
    });
    const lastBpm = bpm;
    let hasIcon = false;
    let hasTwirl = false;
    let isTwirl = false;
    let isSetSpeed = false;
    let currentPosition = position;
    let pauses = 0;
    if (i === angleData.length) {
        hasIcon = true;
        tile.trackIcon = "Portal";
    }
    const currentActions = actionBuckets[i];
    if (currentActions)
        for (const action of currentActions)
            if (action.eventType === "ColorTrack") {
                if (action.trackColorType) tile.trackColorType = action.trackColorType;
                if (action.trackColor) tile.trackColor = action.trackColor;
                if (action.secondaryTrackColor)
                    tile.secondaryTrackColor = action.secondaryTrackColor;
                if (action.trackColorAnimDuration)
                    tile.trackColorAnimDuration = action.trackColorAnimDuration;
                if (action.trackStyle) tile.trackStyle = action.trackStyle;
                if (!action.justThisTile) {
                    if (action.trackColorType) trackColorType = action.trackColorType;
                    if (action.trackColor) trackColor = action.trackColor;
                    if (action.secondaryTrackColor)
                        secondaryTrackColor = action.secondaryTrackColor;
                    if (action.trackColorAnimDuration)
                        trackColorAnimDuration = action.trackColorAnimDuration;
                    if (action.trackStyle) trackStyle = action.trackStyle;
                }
            } else if (action.eventType === "Hide") {
                isHidden = action.hideTileIcon;
            } else if (action.eventType === "Pause") pauses += action.duration;
            else if (action.eventType === "PositionTrack") {
                if (!action.editorOnly) {
                    if (action.positionOffset)
                        currentPosition = addNullable(currentPosition, action.positionOffset);
                    tile.rotation = action.rotation ?? tile.rotation;
                    if (action.scale) tile.scale = [action.scale, action.scale];
                    if (action.opacity) tile.trackOpacity = action.opacity;
                    if (!action.justThisTile) {
                        if (action.positionOffset)
                            position = addNullable(position, action.positionOffset);
                        rotation = action.rotation ?? rotation;
                        if (action.scale) scale = action.scale;
                        if (action.opacity) opacity = action.opacity;
                    }
                }
            } else if (action.eventType === "ScaleRadius") {
                radius = action.scale / 100;
            } else if (action.eventType === "SetSpeed") {
                if (action.speedType === "Bpm") bpm = action.beatsPerMinute;
                else bpm *= action.bpmMultiplier;
                if (!hasIcon) hasIcon = isSetSpeed = true;
            } else if (action.eventType === "Twirl") {
                isCCW = !isCCW;
                hasTwirl = true;
                if (!hasIcon) hasIcon = isTwirl = true;
            }
    if (i < angleData.length && isHidden) hasIcon = isSetSpeed = isTwirl = false;
    if (isSetSpeed) {
        const deltaBpm = bpm / lastBpm;
        if (le(deltaBpm, 0.45)) tile.trackIcon = "DoubleSnail";
        else if (le(deltaBpm, 0.95)) tile.trackIcon = "Snail";
        else if (le(deltaBpm, 1.05)) {
            if (hasTwirl) {
                isSetSpeed = false;
                isTwirl = true;
            } else hasIcon = false;
        } else if (lt(deltaBpm, 2.05)) tile.trackIcon = "Rabbit";
        else tile.trackIcon = "DoubleRabbit";
    }
    if (isSetSpeed) {
        tile.trackSetSpeedIconBpm = bpm;
        actions.push(
            createSetObject({
                floor: 1,
                duration: 0,
                tag: `tile_${i}`,
                trackGraySetSpeedIcon: true,
                angleOffset,
            }),
        );
    }
    if (isTwirl) tile.trackIcon = "Swirl";
    currentPosition = add(currentPosition, mul(fromrad(deg2rad(lastAngle)), radius));
    position = add(position, mul(fromrad(deg2rad(lastAngle)), radius));
    tile.rotation += lastAngle;
    if (i > 0 && angleData[i - 1] !== 999) {
        const planet = createAddObject({
            objectType: "Planet",
            planetColorType: "Custom",
            planetColor: (i - 1) % 2 === 0 ? "0000ff" : "ff0000",
            planetTailColor: "00000000",
            visible: false,
            tag: `planet_${i - 1} obj`,
            position: [-15, 0],
            pivotOffset: add(lastPosition, [-radius, 0]),
            rotation: lastRotation,
            depth: -1,
        });
        decorations.push(planet);
        actions.push(
            createMoveDecorations({
                floor: 1,
                duration: (1 / lastBpm) * baseBpm,
                tag: `planet_${i - 1}`,
                visible: true,
                pivotOffset: [lastPosition[0] + radius, null],
                ease: "InOutSine",
                angleOffset: lastAngleOffset,
            }),
        );
        if (gt(lastActualAngle, 180))
            actions.push(
                createMoveDecorations({
                    floor: 1,
                    duration: (1 / lastBpm) * baseBpm,
                    tag: `planet_${i - 1}`,
                    pivotOffset: [lastPosition[0] - radius, null],
                    ease: "InOutSine",
                    angleOffset: lastAngleOffset + (180 / lastBpm) * baseBpm,
                }),
            );
        actions.push(
            createMoveDecorations({
                floor: 1,
                duration: (0.5 / lastBpm) * baseBpm,
                tag: `planet_${i - 1}`,
                pivotOffset: [null, lastPosition[1] + (lastIsCCW ? -radius : radius)],
                ease: "OutSine",
                angleOffset: lastAngleOffset,
            }),
        );
        if (gt(lastActualAngle, 90))
            actions.push(
                createMoveDecorations({
                    floor: 1,
                    duration: (1 / lastBpm) * baseBpm,
                    tag: `planet_${i - 1}`,
                    pivotOffset: [null, lastPosition[1] + (lastIsCCW ? radius : -radius)],
                    ease: "InOutSine",
                    angleOffset: lastAngleOffset + (90 / lastBpm) * baseBpm,
                }),
            );
        if (gt(lastActualAngle, 270))
            actions.push(
                createMoveDecorations({
                    floor: 1,
                    duration: (0.5 / lastBpm) * baseBpm,
                    tag: `planet_${i - 1}`,
                    pivotOffset: [null, lastPosition[1]],
                    ease: "InSine",
                    angleOffset: lastAngleOffset + (270 / lastBpm) * baseBpm,
                }),
            );
    }
    const rawCurrentPosition = currentPosition;
    currentPosition = rotate(currentPosition, deg2rad(-tile.rotation));
    tile.pivotOffset = div(currentPosition, tile.scale[0] / 100);
    if (currentAngle === 999) {
        tile.trackType = "Midspin";
        if (isTwirl) {
            tile.trackIconAngle = 90;
            if (isCCW) tile.trackIconFlipped = true;
            tile.trackRedSwirl = true;
        } else if (hasIcon) {
            tile.trackIconAngle = -lastAngle;
        }
        lastAngle += 180;
    } else {
        let deltaAngle = (lastAngle - currentAngle + 180) % 360;
        if (le(deltaAngle, 0)) deltaAngle += 360;
        tile.trackAngle = deltaAngle;
        let actualAngle = isCCW ? 360 - deltaAngle : deltaAngle;
        if (le(actualAngle, 0)) actualAngle = 360;
        lastRotation = tile.rotation;
        lastAngleOffset = angleOffset;

        lastRotation += pauses * (lastIsCCW ? -180 : 180);
        actualAngle += pauses * 180;

        lastActualAngle = actualAngle;
        lastPosition = rotate(rawCurrentPosition, deg2rad(-lastRotation));
        lastIsCCW = isCCW;
        if ((i % 2 === 0 ? lastBlue : lastRed) !== -1)
            actions.push(
                createMoveDecorations({
                    floor: 1,
                    visible: false,
                    duration: 0,
                    tag: `planet_${i % 2 === 0 ? lastBlue : lastRed}`,
                    angleOffset,
                }),
            );
        if ((i % 2 === 0 ? lastRed : lastBlue) !== -1)
            actions.push(
                createMoveDecorations({
                    floor: 1,
                    duration: 0,
                    tag: `planet_${i % 2 === 0 ? lastRed : lastBlue}`,
                    pivotOffset: rotate(
                        rawCurrentPosition,
                        deg2rad(i % 2 === 0 ? -lastRedRotation : -lastBlueRotation),
                    ),
                    angleOffset,
                }),
            );
        if (i === 0) {
            const planet = createAddObject({
                objectType: "Planet",
                planetColorType: "Custom",
                planetColor: "ff0000",
                planetTailColor: "00000000",
                visible: false,
                tag: `planet_${-1} obj`,
                position: [-15, 0],
                pivotOffset: lastPosition,
                rotation: lastRotation,
                depth: -1,
            });
            decorations.push(planet);
            actions.push(
                createMoveDecorations({
                    floor: 1,
                    duration: 0,
                    tag: `planet_${-1}`,
                    visible: true,
                    angleOffset: lastAngleOffset,
                }),
            );
            lastRed = -1;
        }
        if (i % 2 === 0) lastBlue = i;
        else lastRed = i;
        if (i % 2 === 0) lastBlueRotation = lastRotation;
        else lastRedRotation = lastRotation;
        if (isTwirl) {
            if (isCCW) {
                tile.trackIconAngle = 90 + actualAngle / 2;
                tile.trackIconFlipped = true;
            } else {
                tile.trackIconAngle = 90 - actualAngle / 2;
            }
            if (lt(actualAngle, 180)) tile.trackRedSwirl = true;
        } else if (hasIcon) {
            tile.trackIconAngle = -lastAngle;
        }
        lastAngle = currentAngle;
        angleOffset += (actualAngle / bpm) * baseBpm;
    }
    decorations.push(tile);
}
writeLevel("public/output.adofai", level);
