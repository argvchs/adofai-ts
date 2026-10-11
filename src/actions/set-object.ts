import type { Ease, TrackColorType, TrackIcon, TrackStyle } from "../attributes";
export interface SetObject {
    floor: number;
    eventType: "SetObject";
    duration: number;
    tag: string;
    planetColor?: string;
    planetTailColor?: string;
    trackAngle?: number;
    trackColorType?: TrackColorType;
    trackColor?: string;
    secondaryTrackColor?: string;
    trackColorAnimDuration?: number;
    trackOpacity?: number;
    trackStyle?: TrackStyle;
    trackIcon?: TrackIcon;
    trackIconAngle?: number;
    trackIconFlipped?: boolean;
    trackRedSwirl?: boolean;
    trackGraySetSpeedIcon?: boolean;
    trackGlowEnabled?: boolean;
    trackGlowColor?: string;
    trackIconOutlines?: boolean;
    angleOffset: number;
    ease: Ease;
    eventTag: string;
}
export function createSetObject(init?: Partial<SetObject>): SetObject {
    return {
        floor: 0,
        eventType: "SetObject",
        duration: 1,
        tag: "sampleTag",
        angleOffset: 0,
        ease: "Linear",
        eventTag: "",
        ...init,
    };
}
