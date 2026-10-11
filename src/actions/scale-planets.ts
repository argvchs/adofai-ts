import type { Ease, TargetPlanet } from "../attributes";
export interface ScalePlanets {
    floor: number;
    eventType: "ScalePlanets";
    duration: number;
    targetPlanet: TargetPlanet;
    scale: number;
    angleOffset: number;
    ease: Ease;
    eventTag: string;
}
export function createScalePlanets(init?: Partial<ScalePlanets>): ScalePlanets {
    return {
        floor: 0,
        eventType: "ScalePlanets",
        duration: 1,
        targetPlanet: "FirePlanet",
        scale: 100,
        angleOffset: 0,
        ease: "Linear",
        eventTag: "",
        ...init,
    };
}
