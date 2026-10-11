import type {
    BlendMode,
    FailHitboxType,
    Hitbox,
    HitboxDetectTarget,
    HitboxTargetPlanet,
    HitboxTriggerType,
    MaskingType,
    AddDecorationRelativeTo,
} from "../attributes";
export interface AddDecoration {
    floor?: number;
    eventType: "AddDecoration";
    visible?: boolean;
    locked?: boolean;
    decorationImage: string;
    tag: string;
    position: [number, number];
    relativeTo: AddDecorationRelativeTo;
    stickToFloor: boolean;
    pivotOffset: [number, number];
    rotation: number;
    lockRotation: boolean;
    scale: [number, number];
    lockScale: boolean;
    tile: [number, number];
    color: string;
    opacity: number;
    depth: number;
    syncFloorDepth: boolean;
    parallax: [number, number];
    parallaxOffset: [number, number];
    imageSmoothing: boolean;
    blendMode: BlendMode;
    maskingType: MaskingType;
    maskingTarget: string;
    useMaskingDepth: boolean;
    maskingFrontDepth: number;
    maskingBackDepth: number;
    hitbox: Hitbox;
    hitboxTriggerType: HitboxTriggerType;
    hitboxRepeatInterval: number;
    hitboxEventTag: string;
    hitboxDetectTarget: HitboxDetectTarget;
    hitboxTargetPlanet: HitboxTargetPlanet;
    hitboxDecoTag: string;
    failHitboxType: FailHitboxType;
    failHitboxScale: [number, number];
    failHitboxOffset: [number, number];
    failHitboxRotation: number;
    components: string;
}
export function createAddDecoration(init?: Partial<AddDecoration>): AddDecoration {
    return {
        eventType: "AddDecoration",
        decorationImage: "",
        tag: "",
        position: [0, 0],
        relativeTo: "Global",
        stickToFloor: false,
        pivotOffset: [0, 0],
        rotation: 0,
        lockRotation: false,
        scale: [100, 100],
        lockScale: false,
        tile: [1, 1],
        color: "ffffff",
        opacity: 100,
        depth: -1,
        syncFloorDepth: false,
        parallax: [0, 0],
        parallaxOffset: [0, 0],
        imageSmoothing: true,
        blendMode: "None",
        maskingType: "None",
        maskingTarget: "",
        useMaskingDepth: false,
        maskingFrontDepth: -1,
        maskingBackDepth: -1,
        hitbox: "None",
        hitboxTriggerType: "Once",
        hitboxRepeatInterval: 1000,
        hitboxEventTag: "",
        hitboxDetectTarget: "Planet",
        hitboxTargetPlanet: "Any",
        hitboxDecoTag: "",
        failHitboxType: "Box",
        failHitboxScale: [100, 100],
        failHitboxOffset: [0, 0],
        failHitboxRotation: 0,
        components: "",
        ...init,
    };
}
