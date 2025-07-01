/**
 * 判断三点 (ax, ay)、(bx, by)、(cx, cy) 是否构成凸角（通常用于多边形的凸性判断）
*/
export function Convex (ax: number, ay: number, bx: number, by: number, cx: number, cy: number) {
    return (ay - by) * (cx - bx) + (bx - ax) * (cy - by) >= 0
}

/**
 * 判断点p是否在三角形▲abc内部
*/
export function PointInTriangle (px: number, py: number, ax: number, ay: number, bx: number, by: number, cx: number, cy: number) {
    var v0x = cx - ax
    var v0y = cy - ay
    var v1x = bx - ax
    var v1y = by - ay
    var v2x = px - ax
    var v2y = py - ay

    var dot00 = v0x * v0x + v0y * v0y
    var dot01 = v0x * v1x + v0y * v1y
    var dot02 = v0x * v2x + v0y * v2y
    var dot11 = v1x * v1x + v1y * v1y
    var dot12 = v1x * v2x + v1y * v2y

    var invDenom = 1 / (dot00 * dot11 - dot01 * dot01)
    var u = (dot11 * dot02 - dot01 * dot12) * invDenom
    var v = (dot00 * dot12 - dot01 * dot02) * invDenom

    // Check if point is in triangle
    return (u >= 0) && (v >= 0) && (u + v < 1)
}

/**
 * 三角剖分
 * 使用：Triangulate([x1, y1, x2, y2...])
*/
export function Triangulate (polygon: Array<number>) {
    var p = polygon
    var n = p.length >> 1
    if (n < 3) return []
    var tgs: number[] = []
    var avl: number[] = []
    for (var i = 0; i < n; i++) { avl.push(i) }

    var i = 0
    var al = n
    while (al > 3) {
    var i0 = avl[(i + 0) % al]
    var i1 = avl[(i + 1) % al]
    var i2 = avl[(i + 2) % al]

    var ax = p[2 * i0]
    var ay = p[2 * i0 + 1]
    var bx = p[2 * i1]
    var by = p[2 * i1 + 1]
    var cx = p[2 * i2]
    var cy = p[2 * i2 + 1]

    var earFound = false
    if (Convex(ax, ay, bx, by, cx, cy)) {
        earFound = true
        for (var j = 0; j < al; j++) {
        var vi = avl[j]
        if (vi == i0 || vi == i1 || vi == i2) continue
        if (PointInTriangle(p[2 * vi], p[2 * vi + 1], ax, ay, bx, by, cx, cy)) {
            earFound = false
            break
        }
        }
    }
    if (earFound) {
        tgs.push(i0, i1, i2)
        avl.splice((i + 1) % al, 1)
        al--
        i = 0
    } else if (i++ > 3 * al) break    // no convex angles :(
    }
    tgs.push(avl[0], avl[1], avl[2])
    return tgs
}
