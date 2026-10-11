export interface ScaleRadius {
    floor: number;
    eventType: "ScaleRadius";
    scale: number;
}
export function createScaleRadius(init?: Partial<ScaleRadius>): ScaleRadius {
    return {
        floor: 0,
        eventType: "ScaleRadius",
        scale: 100,
        ...init,
    };
}
