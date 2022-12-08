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
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const lcx = c.x - a.x;
    const lcy = c.y - a.y;

    const dl2 = dx * dx + dy * dy;
    const dp = (dl2 > 0) ? (lcx * dx + lcy * dy) / dl2 : 1;
    const px = dx * dp;
    const py = dy * dp;

    const nearest = { x: a.x + px, y: a.y + py };
    const pl2 = px * px + py * py;
    return pointCircleCol(nearest, c, r) && pl2 <= dl2 && (px * dx + py * dy) >= 0;
}
export function isOutsideSquare(pos: V2, size: number): boolean {
    return pos.x > size || pos.x < 0 || pos.y > size || pos.y < 0;
}