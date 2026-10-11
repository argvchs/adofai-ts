import type { AngleCorrectionDir } from "../attributes";
export interface Pause {
    floor: number;
    eventType: "Pause";
    duration: number;
    countdownTicks: number;
    angleCorrectionDir: AngleCorrectionDir;
}
export function createPause(init?: Partial<Pause>): Pause {
    return {
        floor: 0,
        eventType: "Pause",
        duration: 1,
        countdownTicks: 0,
        angleCorrectionDir: "Backward",
        ...init,
    };
}
