export interface V1 {
    x: number;
}
export interface V2 extends V1 {
    y: number;
}
export interface V3 extends V2 {
    z: number;
}

export function getAngle(from: V2, to: V2): number {
    return Math.atan2(to.y - from.y, to.x - from.x);
}
export function getDst2(p1: V2, p2: V2): number {
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    return dx * dx + dy * dy;
}
export function getDst(p1: V2, p2: V2): number {
    return getDst2(p1, p2) ** 0.5;
}
export function pointCircleCol(p1: V2, p2: V2, r: number): boolean {
    return getDst2(p1, p2) < r * r;
}

/**
 * @param {V2} a Pos for the start of the line
 * @param {V2} b Pos for the end of the line
 * @param {V2} c Pos of the circle
 * @param {number} r Radius of the circle
 * @returns {boolean} True if line is colliding with circle
 */
export function lineCircleCol(a: V2, b: V2, c: V2, r: number): boolean {
    if (pointCircleCol(a, c, r) || pointCircleCol(b, c, r))
        return true;
    return pointCircleCol(getClosestPointOnLine(a, b, c), c, r);
}

/**
 * @param {V2} a Pos for the start of the line
 * @param {V2} b Pos for the end of the line
 * @param {V2} c Pos of the point
 * @returns {boolean} Pos on the line a-b closest to c
 */
export function getClosestPointOnLine(a: V2, b: V2, c: V2): V2 {
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const lcx = c.x - a.x;
    const lcy = c.y - a.y;

    const dl2 = dx * dx + dy * dy;
    const dp = (dl2 > 0) ? (lcx * dx + lcy * dy) / dl2 : 1;
    const px = dx * dp;
    const py = dy * dp;

    return { x: a.x + px, y: a.y + py };
}

export function isOutsideSquare(pos: V2, size: number): boolean {
    return pos.x > size || pos.x < 0 || pos.y > size || pos.y < 0;
}
/**
 * Converts a hex color to rgb
 * @param color Color in hex
 * @returns [r, g, b] in range 0-255
 */
export function toRGB(color: number): [number, number, number] {
    const r = (color & 0xff0000) >> 16;
    const g = (color & 0x00ff00) >> 8;
    const b = color & 0x0000ff;
    return [r, g, b];
}