export interface Hold {
    floor: number;
    eventType: "Hold";
    duration: number;
    distanceMultiplier: number;
    landingAnimation: boolean;
}
export function createHold(init?: Partial<Hold>): Hold {
    return {
        floor: 0,
        eventType: "Hold",
        duration: 0,
        distanceMultiplier: 100,
        landingAnimation: false,
        ...init,
    };
}
