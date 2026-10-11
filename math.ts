export type Vec = [number, number];
export function deg2rad(a: number) {
    return (a * Math.PI) / 180;
}
export function rad2deg(a: number) {
    return (a * 180) / Math.PI;
}
export function add(a: Vec, b: Vec): Vec {
    return [a[0] + b[0], a[1] + b[1]];
}
export function neg(a: Vec): Vec {
    return [-a[0], -a[1]];
}
export function sub(a: Vec, b: Vec): Vec {
    return [a[0] - b[0], a[1] - b[1]];
}
export function mul(a: Vec, b: number): Vec {
    return [a[0] * b, a[1] * b];
}
export function div(a: Vec, b: number): Vec {
    return [a[0] / b, a[1] / b];
}
export function dot(a: Vec, b: Vec) {
    return a[0] * b[0] + a[1] * b[1];
}
export function cross(a: Vec, b: Vec) {
    return a[0] * b[1] - a[1] * b[0];
}
export function len2(a: Vec) {
    return a[0] * a[0] + a[1] * a[1];
}
export function len(a: Vec) {
    return Math.sqrt(len2(a));
}
export function normalize(a: Vec): Vec {
    const l2 = len2(a);
    return l2 ? div(a, Math.sqrt(l2)) : [0, 0];
}
export function angle(a: Vec): number {
    return Math.atan2(a[1], a[0]);
}
export function fromrad(a: number): Vec {
    return [Math.cos(a), Math.sin(a)];
}
export function rotate(a: Vec, b: number): Vec {
    const u = fromrad(-b);
    return [dot(u, a), cross(u, a)];
}
const EPS = 1e-6;
export function eq(a: number, b: number) {
    return Math.abs(a - b) < EPS;
}
export function ne(a: number, b: number) {
    return Math.abs(a - b) >= EPS;
}
export function lt(a: number, b: number) {
    return b - a >= EPS;
}
export function gt(a: number, b: number) {
    return a - b >= EPS;
}
export function le(a: number, b: number) {
    return a - b < EPS;
}
export function ge(a: number, b: number) {
    return b - a < EPS;
}
export function eqVec(a: Vec, b: Vec) {
    return eq(a[0], b[0]) && eq(a[1], b[1]);
}
export function neVec(a: Vec, b: Vec) {
    return ne(a[0], b[0]) || ne(a[1], b[1]);
}
export type NullableVec = [number | null, number | null];
export function addNullable(a: Vec, b: NullableVec): Vec {
    return [a[0] + (b[0] ?? 0), a[1] + (b[1] ?? 0)];
}
