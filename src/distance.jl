# ------------------------------------------------------------------------------
# Geometric objects
# -------------------------------------------------------------------------------

"""
    squaredist(A, B)

Compute the square of the euclidean distance between `A` and `B`.

# Examples
```jldoctest
julia> squaredist(Point(0, 0), Point(2,2))
8
```
"""
function squaredist(A, B)
    d = (A.x-B.x)^2+(A.y-B.y)^2
    simplify(Sym(d))
end

"""
    distance(A, B)

Compute the euclidean distance between `A` and `B`.

# Mathematical definition

> Euclidean distance or Euclidean metric is the "ordinary" straight-line distance between two points.

# Examples
```jldoctest
julia> distance(Point(0, 0), Point(3,4))
5
```
"""
function distance(A, B)
    SymPy.sqrt(squaredist(A, B))
end
