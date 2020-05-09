# ------------------------------------------------------------------------------
# Computations involving triangles
# -------------------------------------------------------------------------------

using SymPy

"""
# Function

    circumcircle(points)

Find the circle that goes through a list of points.
"""
function circumcircle(points)
    ptnum = length(points)
    if ptnum <= 2
        throw(ArgumentError("At least 3 points are needed, but only $(ptnum) are given."))
    end

    x, y = @vars x y
    c = Point(x, y)
    dist = [squaredist(pt, c) for pt in points]
    equations = [Eq(dist[i], dist[i+1]) for i in 1:length(points)-1]
    sol = solve(equations, [x, y])
    center = Point(simplify(sol[x]), simplify(sol[y]))
    radius = distance(center, points[1])
    radius = simplify(radius)
    Circle(center, radius)
end
