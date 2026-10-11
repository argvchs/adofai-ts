import type { Action } from "./actions";
import type { Decoration } from "./decorations";
import type { Settings } from "./settings";
export interface Level {
    angleData: number[];
    settings: Settings;
    actions: Action[];
    decorations: Decoration[];
}
