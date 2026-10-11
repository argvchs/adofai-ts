import type { TileType } from "../attributes";
export interface PositionTrack {
    floor: number;
    eventType: "PositionTrack";
    positionOffset?: [number, number];
    relativeTo: [number, TileType];
    rotation?: number;
    scale?: number;
    opacity?: number;
    justThisTile: boolean;
    editorOnly: boolean;
    stickToFloors?: boolean;
}
export function createPositionTrack(init?: Partial<PositionTrack>): PositionTrack {
    return {
        floor: 0,
        eventType: "PositionTrack",
        relativeTo: [0, "ThisTile"],
        justThisTile: false,
        editorOnly: false,
        ...init,
    };
}
