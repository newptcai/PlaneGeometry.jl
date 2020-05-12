# ------------------------------------------------------------------------------
# Plotting functions for geometric objects
# -------------------------------------------------------------------------------

"Submodule containing functions for plotting geometric objects"
module GeoPlots
export 
    plot, plot!, shape

using PlaneGeometry
using Plots

import Plots: plot, plot!

"""
    shape(ptlist::Vector{Point})

Create a `Plots.Shape` object for a polygon with vertices `ptlist`.
"""
function shape(ptlist::Vector{PlaneGeometry.Point})
    xlist = [pt.x for pt in ptlist]
    ylist = [pt.y for pt in ptlist]
    shape = Shape(xlist, ylist)
end;


"""
    shape(ptlist::Vector{Point})

Create a `Plots.Shape` object for a polygon with vertices `ptlist`.
"""
shape(tri::Triangle) = shape(vertices(tri));

"""
    shape(c::Circle)

Create a `Plots.Shape` object for a circle `c`.
"""
function shape(c::Circle)
    θ = LinRange(0, 2*π, 300)
    c.center.x .+ c.radius*sin.(θ), c.center.y .+ c.radius*cos.(θ)
end;

"""
    shape(e::Edge)

Create a `Plots.Shape` object for an edge `e`.
"""
function shape(e::Edge)
    shape([e.src, e.dst])
end;

"""
    plot(obj::GeoObject, args...; kwargs...)

Plot a geometric object `obj`.
"""
plot(obj::GeoObject, args...; kwargs...) = plot(shape(obj), args...; kwargs...)

"""
    plot!(obj::GeoObject, args...; kwargs...)

Plot a geometric object `obj` on current plot.
"""
plot!(obj::GeoObject, args...; kwargs...) = plot!(shape(obj), args...; kwargs...)

end
