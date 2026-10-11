import type {
    AddDecorationRelativeTo,
    ObjectType,
    PlanetColorType,
    TrackColorType,
    TrackIcon,
    TrackStyle,
    TrackType,
} from "../attributes";
export interface AddObject {
    floor?: boolean;
    eventType: "AddObject";
    visible?: boolean;
    locked?: boolean;
    objectType: ObjectType;
    bubbleAppearStartOffset: number;
    bubbleAppearEndOffset: number;
    bubbleDisappearOffset: number;
    bubbleSpawnOffset: number;
    tag: string;
    planetColorType: PlanetColorType;
    planetColor: string;
    planetTailColor: string;
    trackType: TrackType;
    trackAngle: number;
    trackColorType: TrackColorType;
    trackColor: string;
    secondaryTrackColor: string;
    trackColorAnimDuration: number;
    trackOpacity: number;
    trackStyle: TrackStyle;
    trackIcon: TrackIcon;
    trackIconAngle: number;
    trackIconFlipped: boolean;
    trackRedSwirl: boolean;
    trackGraySetSpeedIcon: boolean;
    trackSetSpeedIconBpm: number;
    trackGlowEnabled: boolean;
    trackGlowColor: string;
    trackIconOutlines: boolean;
    position: [number, number];
    relativeTo: AddDecorationRelativeTo;
    pivotOffset: [number, number];
    rotation: number;
    lockRotation: boolean;
    scale: [number, number];
    lockScale: boolean;
    depth: number;
    syncFloorDepth: boolean;
    parallax: [number, number];
    parallaxOffset: [number, number];
}
export function createAddObject(init?: Partial<AddObject>): AddObject {
    return {
        eventType: "AddObject",
        objectType: "Floor",
        bubbleAppearStartOffset: 8,
        bubbleAppearEndOffset: 2,
        bubbleDisappearOffset: 4,
        bubbleSpawnOffset: 3,
        tag: "",
        planetColorType: "DefaultRed",
        planetColor: "ff0000",
        planetTailColor: "ff0000",
        trackType: "Normal",
        trackAngle: 180,
        trackColorType: "Single",
        trackColor: "debb7b",
        secondaryTrackColor: "ffffff",
        trackColorAnimDuration: 2,
        trackOpacity: 100,
        trackStyle: "Standard",
        trackIcon: "None",
        trackIconAngle: 0,
        trackIconFlipped: false,
        trackRedSwirl: false,
        trackGraySetSpeedIcon: false,
        trackSetSpeedIconBpm: 100,
        trackGlowEnabled: false,
        trackGlowColor: "ffffff",
        trackIconOutlines: false,
        position: [0, 0],
        relativeTo: "Global",
        pivotOffset: [0, 0],
        rotation: 0,
        lockRotation: false,
        scale: [100, 100],
        lockScale: false,
        depth: -1,
        syncFloorDepth: false,
        parallax: [0, 0],
        parallaxOffset: [0, 0],
        ...init,
    };
}
