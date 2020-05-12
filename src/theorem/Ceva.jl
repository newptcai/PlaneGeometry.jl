"""
[Ceva's theorem](https://en.wikipedia.org/wiki/Ceva%27s_theorem) is a theorem about triangles in
plane geometry. Given a triangle `ABC`, let the lines `AO`, `BO` and `CO` be drawn from the vertices
to a common point `O` (not on one of the sides of `ABC`), to meet opposite sides at `D`, `E` and `F`
respectively.  (The segments `AD`, `BE`, and `CF` are known as
[cevians](https://en.wikipedia.org/wiki/Cevian).) Then, using signed lengths of segments,
```math
BD \\times CE \\times AF = DC \\times EA \\times FB.
```
"""
module Ceva

using Plots
using SymPy
using PlaneGeometry
using PlaneGeometry.GeoPlots

export 
    ceva_proof, ceva_draw, ceva_rand, ceva, ceva_check

"""
    ceva_draw(📐️, O)

Verify Ceva's Theorem for the triangle `📐️`.
"""
function ceva_draw(tri, O)

    plist, elist = ceva(tri, O)
    A, B, C, D, E, F = plist
    push!(plist, O)

    plt = plot(tri, fill=(0, :green), aspect_ratio=:equal, fillalpha= 0.2, leg=false)

    plt = scatter!(shape(plist), 
            leg=false, 
            aspect_ratio=:equal, 
            color=:red,
            series_annotations = text.(['A':'F'..., 'O'], :bottom))

    AD, BE, CF = [Edge(epair...) for epair in zip([A, B, C], [D, E, F])]

    for e in [AD, BE, CF]
        plot!(e, color=:orange, leg=false)
    end

    plt, ceva_check(elist...)
end

"""
    ceva_rand()

Verify Ceva's Theorem for a random triangle.
"""
function ceva_rand()
    pts = rand(0:1//10:1,6);
    A, B, C = [Point(pts[i], pts[i+3]) for i in 1:3]

    # Choose O within ABC so the picture looks nicer
    ptx = [pt.x for pt in [A, B, C]]
    pty = [pt.y for pt in [A, B, C]]
    xmin, xmax = N.([f(ptx...) for f in [min, max]])
    ymin, ymax = N.([f(pty...) for f in [min, max]])

    tri = Triangle(A, B, C)
    AB, BC, CA = edges(tri)

    # Use rejections sampling until the point is in ABC
    while true
        x = rand(xmin:1//100:xmax)
        y = rand(ymin:1//100:ymax)
        O = Point(x, y)

        plist, elist = ceva(tri, O)

        # We are unlucky
        if plist == nothing
            continue
        end

        BD, DC, CE, EA, AF, FB = elist

        if BD > BC || DC > BC || CE > CA || EA > CA || AF > AB || FB > AB
            # This mean O is not in ABC
            continue
        end

        return ceva_draw(Triangle(A, B, C), O)
    end
end

"""
    ceva_proof()

Prove Ceva's Theorem.
"""
function ceva_proof()
    @vars by cx positive=true
    @vars cy ox oy

    A = Point(0, 0); B = Point(0, by); C = Point(cx, cy); O = Point(ox, oy)
    tri = Triangle(A, B, C)

    plist, elist = ceva(tri, O)
    ceva_check(elist...)
end


"""
    ceva(Triangle(A, B, C), O)

Returns `([A, B, C, D, E, F], [BD, DC, CE, EA, AF, FB])`. 
"""
function ceva(tri, O)
    A, B, C = vertices(tri)
    AB, BC, CA = edges(tri)
    AO, BO, CO = [Edge(pt, O) for pt in vertices(tri)]
    D, E, F = [concurrent(epair...) for epair in zip([BC, CA, AB], [AO, BO, CO])]

    # This mean no such points can be found. (This is possible)
    if D == nothing || E == nothing || F == nothing
        return nothing, nothing
    end

    elist = [Edge(pts...) for pts in zip([B, D, C, E, A, F], [D, C, E, A, F, B])]
    ([A, B, C, D, E, F], elist)
end

"""
    ceva_check(BD, DC, CE, EA, AF, FB)

Check if the line segments satisfies Ceva's theorem.
"""
function ceva_check(BD, DC, CE, EA, AF, FB) 
    eq = Eq((BD*CE*AF)^2, (DC*EA*FB)^2)
    N(simplify(eq))
end

end
