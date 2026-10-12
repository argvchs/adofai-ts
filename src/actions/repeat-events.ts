import type { RepeatType } from "../attributes";
export interface RepeatEvents {
    floor: number;
    eventType: "RepeatEvents";
    repeatType: RepeatType;
    repetitions: number;
    floorCount: number;
    interval: number;
    gapLength: number;
    executeOnCurrentFloor: boolean;
    tag: string;
}
export function createRepeatEvents(init?: Partial<RepeatEvents>): RepeatEvents {
    return {
        floor: 0,
        eventType: "RepeatEvents",
        repeatType: "Beat",
        repetitions: 1,
        floorCount: 1,
        interval: 1,
        gapLength: 1,
        executeOnCurrentFloor: false,
        tag: "",
        ...init,
    };
}
