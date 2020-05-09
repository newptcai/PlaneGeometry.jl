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
    circumcircle
    

include("elementary.jl")
include("metric.jl")
include("triangle.jl")
include("circle.jl")
include("simpy.jl")
include("plots.jl")
include("theorems/theorems.jl")

using .Theorems: does_thmhold
export 
    does_thmhold

using .Theorems.Napoleon: napoleon_proof, napoleon_draw, napoleon_rand, napoleon_tri
export 
    napoleon_proof, napoleon_draw, napoleon_rand, napoleon_tri

using .GeoPlots: plot, plot!, shape
export 
    plot, plot!, shape


end # module
