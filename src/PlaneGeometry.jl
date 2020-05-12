"A package for some basic plane geometry computations."
module PlaneGeometry

export
    # Geometric objects
    GeoObject, Point, Edge, Triangle, Circle,
    vertices, edges,

    # metrics
    distance, squaredist,

    # triangles
    equipoints, outer_equitri, outer_equitriangles, isequilateral, 

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

using .GeoPlots
export 
    plot, plot!, shape


end # module
