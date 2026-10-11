import type { Planets } from "../attributes";
export interface MultiPlanet {
    floor: number;
    eventType: "MultiPlanet";
    planets: Planets;
}
export function createMultiPlanet(init?: Partial<MultiPlanet>): MultiPlanet {
    return { floor: 0, eventType: "MultiPlanet", planets: "TwoPlanets", ...init };
}
