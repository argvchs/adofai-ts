export interface Hide {
    floor: number;
    eventType: "Hide";
    hideJudgment: boolean;
    hideTileIcon: boolean;
}
export function createHide(init?: Partial<Hide>): Hide {
    return {
        floor: 0,
        eventType: "Hide",
        hideJudgment: false,
        hideTileIcon: false,
        ...init,
    };
}
