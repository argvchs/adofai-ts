export interface SetText {
    floor: number;
    eventType: "SetText";
    decText: string;
    tag: string;
    angleOffset: number;
    eventTag: string;
}
export function createSetText(init?: Partial<SetText>): SetText {
    return {
        floor: 0,
        eventType: "SetText",
        decText: "Text",
        tag: "",
        angleOffset: 0,
        eventTag: "",
        ...init,
    };
}
