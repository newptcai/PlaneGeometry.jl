import Base: isequal, ==, show, *, length, >
using SymPy

"A plane geometric object."
abstract type GeoObject end
abstract type GeoShape <: GeoObject end

show(io::IO, objs::Vector{T}) where T <: GeoObject = print(io, "[", join(objs, ", "), "]")

"""
    Point(x, y)
    
A point at coordinate `(x, y)`.

# Examples
```julia
A = Point(0,0); B = Point(1, 3); C = Point(4,2)
```
"""
struct Point <: GeoObject
    "x cooridnate"
    x::Sym
    "y cooridnate"
    y::Sym

    Point(x, y) = new(Sym(x), Sym(y))
end

"""
# Function

    Point()
    
A point at coordinate `(0, 0)`.
"""
Point() = Point(0, 0)

"Check if two points are at the same coordinate."
(==)(p1::Point, p2::Point) = p1.x==p2.x && p1.y==p2.y

show(io::IO, pt::Point) = print(io, "Point($(pt.x), $(pt.y))")

"""
    Triangle(A, B, C) 

A triangle with vertices `A, B, C`.

# Examples
```julia
A = Point(0,0); B = Point(1, 3); C = Point(4,2)
tri = Triangle(A, B, C)
```
"""
struct Triangle <: GeoShape
    "Vertex A"
    A::Point
    "Vertex B"
    B::Point
    "Vertex C"
    C::Point
end
show(io::IO, tri::Triangle) = print(io, "Triangle($(tri.A), $(tri.B), $(tri.C))")


"""
# Function

    Triangle()
    
A triangle with vertices `(0, 0), (0, 1), (1,1)`.
"""
Triangle() = Triangle(Point(0, 0), Point(0, 1), Point(1,1))

"""
    Triangle(ax, ay, bx, by, cx, cy)    

A triangle with vertices `(ax, ay), (bx, by), (cx, cy)`.

# Examples
```julia
tri = Triangle(0, 0, 1, 3, 4, 2)
```
"""
Triangle(ax, ay, bx, by, cx, cy) = Triangle(Point(ax, ay), Point(bx, by), Point(cx, cy))

"Check if two triangles are the same."
(==)(t1::Triangle, t2::Triangle) = vertices(t1) == vertices(t2)

"Get the list of vertices of the triangle `tri`."
function vertices(tri::Triangle) 
    [tri.A, tri.B, tri.C]
end

"""
    Edge(src, dst) 

An edge from point `src` to point `dst`.

# Examples
```julia
e = Edge(Point(0, 0), Point(1, 3))
```
"""
struct Edge <: GeoShape
    "Starting point of an edge."
    src::Point
    "Ending point of an edge."
    dst::Point
end

"Check if two edges are at the same."
(==)(e1::Edge, e2::Edge) = e1.src==e2.src && e1.dst==e2.dst

"Get the list of edges of the triangle `tri`."
function edges(tri::Triangle)
    elist = Edge[]
    pts = vertices(tri)
    for i in 1:length(pts)-1
        push!(elist, Edge(pts[i], pts[i+1]))
    end
    push!(elist, Edge(pts[length(pts)], pts[1]))
    elist
end

"Mulitpliy the lengths of two edges."
(*)(e1::Edge, e2::Edge) = length(e1) * length(e2)

"Mulitpliy a number and an edges length."
(*)(s1::Sym, e2::Edge) = s1 * length(e2)

"Compare lengths of two edges."
(>)(e1::Edge, e2::Edge) = length(e1) > length(e2)

"Find the length of an edge."
length(e::Edge) = distance(e.src, e.dst)

"""
    Circle(c, r) 
    
A circle with center at `c` and radius `r`.

# Examples
```julia
circle = Circle(Point(0, 0), 1)
```
"""
struct Circle <: GeoShape
    center::Point
    radius::Number
end
show(io::IO, c::Circle) = print(io, "Circle($(c.center), $(c.radius))")

"Check if two circles are the same."
(==)(c1::Circle, c2::Circle) = c1.center == c2.center && c1.radius == c2.radius

"Get the center of a a circle."
center(c::Circle) = c.center
