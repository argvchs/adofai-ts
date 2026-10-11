import type { Ease, TileType } from "../attributes";
export interface MoveTrack {
    floor: number;
    eventType: "MoveTrack";
    startTile: [number, TileType];
    endTile: [number, TileType];
    gapLength: number;
    duration: number;
    positionOffset?: [number | null, number | null];
    rotationOffset?: number;
    scale?: [number | null, number | null];
    opacity?: number;
    angleOffset: number;
    ease: Ease;
    eventTag: string;
}
export function createMoveTrack(init?: Partial<MoveTrack>): MoveTrack {
    return {
        floor: 0,
        eventType: "MoveTrack",
        startTile: [0, "ThisTile"],
        endTile: [0, "ThisTile"],
        gapLength: 0,
        duration: 1,
        angleOffset: 0,
        ease: "Linear",
        eventTag: "",
        ...init,
    };
}
