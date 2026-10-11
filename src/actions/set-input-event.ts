import type { Target, State } from "../attributes";
export interface SetInputEvent {
    floor: number;
    eventType: "SetInputEvent";
    target: Target;
    state: State;
    ignoreInput: boolean;
    targetEventTag: string;
    angleOffset: number;
    eventTag: string;
}
export function createSetInputEvent(init?: Partial<SetInputEvent>): SetInputEvent {
    return {
        floor: 0,
        eventType: "SetInputEvent",
        target: "Any",
        state: "Down",
        ignoreInput: false,
        targetEventTag: "NONE",
        angleOffset: 0,
        eventTag: "",
        ...init,
    };
}
