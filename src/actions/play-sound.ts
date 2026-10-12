import type { Hitsound } from "../attributes";
export interface PlaySound {
    floor: number;
    eventType: "PlaySound";
    hitsound: Hitsound | (string & {});
    offset: number;
    playDuration: number;
    pitch: number;
    hitsoundVolume: number;
    angleOffset: number;
    eventTag: string;
}
export function createPlaySound(init?: Partial<PlaySound>): PlaySound {
    return {
        floor: 1,
        eventType: "PlaySound",
        hitsound: "Kick",
        offset: 0,
        playDuration: 0,
        pitch: 100,
        hitsoundVolume: 100,
        angleOffset: 0,
        eventTag: "",
        ...init,
    };
}
