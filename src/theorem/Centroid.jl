"""
The [centroid of a triangle](https://en.wikipedia.org/wiki/Centroid#Of_a_triangle) is the point of
intersection of its medians (the lines joining each vertex with the midpoint of the opposite side).
The [Centroids Exists Theorem](https://sites.math.rutgers.edu/~zeilberg/PG/CentroidExists.html)
states that the three medians indeed intersect at single point.
"""
module Centroid

using Plots
using SymPy
using PlaneGeometry
using PlaneGeometry.GeoPlots

export 
    centroid_proof, centroid_draw, centroid_rand, centroid

"""
    centroid_draw(📐️::Triangle)

Verify Centroid Exists Theorem for the triangle `📐️`.
"""
function centroid_draw(tri::Triangle)
    trishape=shape(tri)

    cpt, medians = centroid(tri)

    if cpt == nothing
        return (nothing, false)
    end

    plt = plot(tri, fill=(0, :green), aspect_ratio=:equal, fillalpha= 0.2, leg=false)

    for e in medians
        plot!(e, leg=false, color=:orange)
    end

    plt = scatter!(shape([vertices(tri)..., cpt]), 
            leg=false, 
            aspect_ratio=:equal, 
            color=[:red, :red, :red, :green], 
            series_annotations = text.(["A", "B", "C", "cpt"], :bottom))

    plt, true
end

"""
    centroid_draw(A, B, C)

Verify Centroid Exists theorem.
"""
function centroid_draw(A, B, C)
    tri = Triangle(A, B, C)

    centroid_draw(tri)
end

"""
    centroid_draw(xA, yA, xB, yB, xC, yC)

Verify Centroid Exists theorem.
"""
function centroid_draw(xA, yA, xB, yB, xC, yC)
    A = Point(xA, yA); 
    B = Point(xB, yB); 
    C = Point(xC, yC);

    centroid_draw(A, B, C)
end

"""
    centroid_rand()

Verify Centroid Exists Theorem for a random triangle.
"""
function centroid_rand()
    pts = rand(0:1//10:1,6);
    plt, hold = centroid_draw(pts...)
end

"""
    centroid_proof()

Prove Centroid Exists Theorem.
"""
function centroid_proof()
    @vars by cx positive=true;
    @vars cy;

    A = Point(0, 0); B = Point(0, by); C = Point(cx, cy);
    tri = Triangle(A, B, C)

    cpt, medians = centroid(tri)
    cpt != nothing
end


"""
    centroid(📐️)

Find the centroid and the three medians of `📐️`.
"""
function centroid(tri)
    medians = map(i->median(circshift(vertices(tri), i)...), 0:2)
    cpt = concurrent(medians)
    cpt, medians 
end

end
