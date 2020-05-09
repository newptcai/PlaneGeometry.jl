# ------------------------------------------------------------------------------
# Computations involving triangles
# -------------------------------------------------------------------------------

using SymPy

"""
# Function

    equipoints(A, B)

Find the two points the can form an equilateral triangle with `A` and `B`
"""
function equipoints(A, B)
    x, y = @vars x y
    pt = Point(x, y)
    dist1 = squaredist(pt, A)
    dist2 = squaredist(pt, B)
    dist3 = squaredist(A, B)
    sol = solve([dist1-dist3, dist2-dist3], [x,y])
    [Point(simplify(s[1]), simplify(s[2])) for s in sol]
end

"""
# Function

    outer_equitri(A, B, C)

Find the outer equilateral triangle of `Triangle(A, B, C)` which is incident to `Edge(A, B)`.
"""
function outer_equitri(A, B, C)
    ptAB = equipoints(A, B)
    dist = map(pt->squaredist(pt, C), ptAB)
    d = simplify(dist[1]-dist[2])
    if simplify(d>=0)
        return Triangle(A, B, ptAB[1])
    else
        return Triangle(A, B, ptAB[2])
    end
end

"""
# Function

    outer_equitriangles(tri)

Find all three outer equilateral triangles of the triangle `tri`.
"""
function outer_equitriangles(tri)
    pts = vertices(tri)
    triangles = map(i->outer_equitri(circshift(pts, i)...), 0:2)
    triangles
end


"""
# Function

    isequilateral(tri)

Check if `tri` is equilateral.
"""
function isequilateral(tri)
    dist = [squaredist(e.src, e.dst) for e in edges(tri)]
    if (dist[1] == dist[2]) && (dist[1] == dist[3])
        return true
    else
        return false
    end
end
