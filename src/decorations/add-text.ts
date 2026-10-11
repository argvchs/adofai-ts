import type { Font, AddDecorationRelativeTo } from "../attributes";
export interface AddText {
    floor?: number;
    eventType: "AddText";
    visible?: boolean;
    locked?: boolean;
    decText: string;
    tag: string;
    font: Font;
    position: [number, number];
    relativeTo: AddDecorationRelativeTo;
    pivotOffset: [number, number];
    rotation: number;
    lockRotation: boolean;
    scale: [number, number];
    lockScale: boolean;
    color: string;
    opacity: number;
    depth: number;
    parallax: [number, number];
    parallaxOffset: [number, number];
}
export function createAddText(init?: Partial<AddText>): AddText {
    return {
        eventType: "AddText",
        decText: "Text",
        tag: "",
        font: "Default",
        position: [0, 0],
        relativeTo: "Global",
        pivotOffset: [0, 0],
        rotation: 0,
        lockRotation: false,
        scale: [0, 0],
        lockScale: false,
        color: "ffffff",
        opacity: 100,
        depth: -1,
        parallax: [0, 0],
        parallaxOffset: [0, 0],
        ...init,
    };
}
