import type { Ease, MaskingType, MoveDecorationsRelativeTo } from "../attributes";
export interface MoveDecorations {
    floor: number;
    eventType: "MoveDecorations";
    duration: number;
    tag: string;
    visible?: boolean;
    relativeTo?: MoveDecorationsRelativeTo;
    positionOffset?: [number | null, number | null];
    pivotOffset?: [number | null, number | null];
    rotationOffset?: number;
    scale?: [number | null, number | null];
    color?: string;
    opacity?: number;
    depth?: number;
    parallax?: [number, number];
    parallaxOffset?: [number | null, number | null];
    angleOffset: number;
    ease: Ease;
    eventTag: string;
    maskingType?: MaskingType;
    useMaskingDepth?: boolean;
    maskingFrontDepth?: number;
    maskingBackDepth?: number;
}
export function createMoveDecorations(init?: Partial<MoveDecorations>): MoveDecorations {
    return {
        floor: 0,
        eventType: "MoveDecorations",
        duration: 1,
        tag: "sampleTag",
        angleOffset: 0,
        ease: "Linear",
        eventTag: "",
        ...init,
    };
}
