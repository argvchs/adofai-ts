import type { ColorTrack } from "./color-track";
import type { Hide } from "./hide";
import type { Hold } from "./hold";
import type { MoveDecorations } from "./move-decorations";
import type { MoveTrack } from "./move-track";
import type { MultiPlanet } from "./multi-planet";
import type { Pause } from "./pause";
import type { PositionTrack } from "./position-track";
import type { ScalePlanets } from "./scale-planets";
import type { ScaleRadius } from "./scale-radius";
import type { SetInputEvent } from "./set-input-event";
import type { SetObject } from "./set-object";
import type { SetSpeed } from "./set-speed";
import type { SetText } from "./set-text";
import type { Twirl } from "./twirl";
export type Action =
    | ColorTrack
    | Hide
    | Hold
    | MoveDecorations
    | MoveTrack
    | MultiPlanet
    | Pause
    | PositionTrack
    | ScalePlanets
    | ScaleRadius
    | SetInputEvent
    | SetObject
    | SetSpeed
    | SetText
    | Twirl;
export * from "./color-track";
export * from "./hide";
export * from "./hold";
export * from "./move-decorations";
export * from "./move-track";
export * from "./multi-planet";
export * from "./pause";
export * from "./position-track";
export * from "./scale-planets";
export * from "./scale-radius";
export * from "./set-input-event";
export * from "./set-object";
export * from "./set-speed";
export * from "./set-text";
export * from "./twirl";
