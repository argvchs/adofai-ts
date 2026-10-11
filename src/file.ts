import { readFileSync, writeFileSync } from "fs";
import type { Level } from "./level";
export function readLevel(src: string): Level {
    let content = readFileSync(src, "utf8");
    if (content.charCodeAt(0) == 0xfeff) content = content.slice(1);
    return JSON.parse(content);
}
export function writeLevel(dst: string, level: Level) {
    writeFileSync(dst, JSON.stringify(level), "utf8");
}
