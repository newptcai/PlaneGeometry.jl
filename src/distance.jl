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

Compute the euclidean distance between `A` and `B`, which is the "ordinary" straight-line distance
between two points.

# Examples
```jldoctest
julia> distance(Point(0, 0), Point(3,4))
5
```
"""
function distance(A, B)
    SymPy.sqrt(squaredist(A, B))
end


"""
    midpoint(A, B)

Find the midpoint between `A` and `B`.

# Examples

```jldoctest
julia> midpoint(Point(0, 0), Point(2,4))
Point(1, 2)
```
"""
function midpoint(A, B)
    x1 = (A.x + B.x)/2
    y1 = (A.y + B.y)/2
    Point(x1, y1)
end


"""
    concurrent(edgelist::Vector{Edge})

Find the point where all edges (lines) in `edgelist` intersect if such point exists. Return nothing otherwise.

# Examples

```jldoctest
julia> concurrent([Edge(Point(0,1), Point(1,1)), Edge(Point(0,1), Point(1,0))])
Point(0, 1)
```
"""
function concurrent(edgelist::Vector{Edge})
    enum = length(edgelist)
    if enum == 1
        throw(ArgumentError("At least two edges are needed. $enum is given."))
    end

    @vars x y

    eqs = Sym[]
    for e in edgelist
        # This should be 0
        eq = (x-e.src.x)*(y-e.dst.y) - (x-e.dst.x)*(y-e.src.y)
        push!(eqs, eq)
    end

    sol = solve(eqs, [x,y])

    if length(sol) == 0
        return nothing
    else
        return Point(simplify(sol[x]), simplify(sol[y]))
    end
end

"""
    concurrent(e1::Edge, e2::Edge)

Find the point the edges `e1` and `e2` intersect if such point exists. Return nothing otherwise.

# Examples

```jldoctest
julia> concurrent(Edge(Point(0,1), Point(1,1)), Edge(Point(0,1), Point(1,0)))
Point(0, 1)
```
"""
function concurrent(e1::Edge, e2::Edge)
    return concurrent([e1, e2])
end
