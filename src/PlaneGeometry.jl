"A package for some basic plane geometry computations."
module PlaneGeometry

export
    # Geometric objects
    GeoObject, Point, Edge, Triangle, Circle,
    vertices, edges,

    # distances
    distance, squaredist, midpoint, concurrent,

    # triangles
    equipoints, outer_equitri, outer_equitriangles, isequilateral, median,

    # circles
    circumcircle,
    
    # utilities
    does_thmhold, @code_md

include("elementary.jl")
include("distance.jl")
include("triangle.jl")
include("circle.jl")
include("simpy.jl")
include("plots.jl")
include("util.jl")
include("theorem/theorem.jl")

using .Theorems.Napoleon
export 
    napoleon_proof, napoleon_draw, napoleon_rand, napoleon_tri

using .Theorems.Centroid
export 
    centroid_proof, centroid_draw, centroid_rand, centroid

using .GeoPlots
export 
    plot, plot!, shape

using .Theorems.Ceva
export 
    ceva_proof, ceva_draw, ceva_rand, ceva, ceva_check

function __init__()
    global A, B, C, O, tri

    A = Point(0, 0)
    B = Point(1, 3)
    C = Point(4, 2)
    O = Point(2, 2)
    tri = Triangle(A, B, C)
end

end # module
