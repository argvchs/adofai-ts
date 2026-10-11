import type { SpeedType } from "../attributes";
export interface SetSpeed {
    floor: number;
    eventType: "SetSpeed";
    speedType: SpeedType;
    beatsPerMinute: number;
    bpmMultiplier: number;
    angleOffset: number;
}
export function createSetSpeed(init?: Partial<SetSpeed>): SetSpeed {
    return {
        floor: 0,
        eventType: "SetSpeed",
        speedType: "Bpm",
        beatsPerMinute: 100,
        bpmMultiplier: 1,
        angleOffset: 0,
        ...init,
    };
}
