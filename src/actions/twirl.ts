export interface Twirl {
    floor: number;
    eventType: "Twirl";
}
export function createTwirl(init?: Partial<Twirl>): Twirl {
    return {
        floor: 0,
        eventType: "Twirl",
        ...init,
    };
}
