"""
[Napoleon' theorem](https://en.wikipedia.org/wiki/Napoleon%27s_theorem) 
states that if equilateral triangles are constructed on the sides
of any triangle, either all outward or all inward, the lines connecting the centres of those
equilateral triangles themselves form an equilateral triangle.
"""
module Napoleon

using Plots
using SymPy
using PlaneGeometry
using PlaneGeometry.GeoPlots

export 
    napoleon_proof, napoleon_draw, napoleon_rand, napoleon_tri

"""
    napoleon_draw(📐️::Triangle)

Verify Napoleon's theorem for the triangle `📐️`.  The function works the same ways as
`napoleon_tri` but return `(🖼️, hold)` where `🖼️` is a plot and `hold` indicates where the theorem
holds.
"""
function napoleon_draw(tri::Triangle)
    trishape=shape(tri)

    plot(trishape, leg=false, fill=(0, :green), aspect_ratio=:equal, fillalpha= 0.2)

    scatter!(trishape.x, trishape.y, color=:red, series_annotations = text.(["A", "B", "C"], :bottom))

    outer_tri = outer_equitriangles(tri)
    for t in outer_tri
        plot!(shape(t), leg=false, fill=(0, :pink), aspect_ratio=:equal, fillalpha=0.7)
    end

    outer_circles = circumcircle.(vertices.(outer_tri))

    outer_centers = PlaneGeometry.center.(outer_circles);

    nap_tri = Triangle(outer_centers...);

    plt = plot!(shape(nap_tri), leg=false, fill=(0, :blue), fillalpha=0.7, aspect_ratio=:equal)

    hold = isequilateral(nap_tri)

    plt, hold
end

"""
    napoleon_draw(A, B, C)

Verify Napoleon's theorem.
"""
function napoleon_draw(A, B, C)
    tri = Triangle(A, B, C)

    napoleon_draw(tri)
end

"""
    napoleon_draw(xA, yA, xB, yB, xC, yC)

Verify Napoleon's theorem.
"""
function napoleon_draw(xA, yA, xB, yB, xC, yC)
    A = Point(xA, yA); 
    B = Point(xB, yB); 
    C = Point(xC, yC);

    napoleon_draw(A, B, C)
end

"""
    napoleon_rand()

Verify Napoleon's theorem for a random triangle.
"""
function napoleon_rand()
    pts = rand(0:1//10:1,6);
    plt, hold = napoleon_draw(pts...)
end

"""
    napoleon_proof()

Prove Napoleon's theorem.
"""
function napoleon_proof()
    @vars by cx positive=true;
    @vars cy;

    A = Point(0, 0); B = Point(0, by); C = Point(cx, cy);
    tri = Triangle(A, B, C)

    npt = napoleon_tri(tri)
    isequilateral(npt)
end


"""
    napoleon_tri(📐️)

Find the triangle that connects the center of three outer equilateral triangles of `📐️`.
"""
function napoleon_tri(tri)
    outer_tri = outer_equitriangles(tri);
    outer_circles = circumcircle.(vertices.(outer_tri));
    outer_centers = PlaneGeometry.center.(outer_circles);
    Triangle(outer_centers...)
end

end
