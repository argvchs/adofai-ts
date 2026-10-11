import type { TrackColorPulse, TrackColorType, TrackStyle } from "../attributes";
export interface ColorTrack {
    floor: number;
    eventType: "ColorTrack";
    trackColorType?: TrackColorType;
    trackColor?: string;
    secondaryTrackColor?: string;
    trackColorAnimDuration?: number;
    trackColorPulse?: TrackColorPulse;
    trackPulseLength?: number;
    trackStyle?: TrackStyle;
    justThisTile: boolean;
}
export function createColorTrack(init?: Partial<ColorTrack>): ColorTrack {
    return {
        floor: 0,
        eventType: "ColorTrack",
        justThisTile: false,
        ...init,
    };
}
