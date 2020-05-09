# ------------------------------------------------------------------------------
# Geometric objects
# -------------------------------------------------------------------------------

"""
    squaredist(A, B)

Compute the square of the euclidean distance between `A` and `B`.
"""
function squaredist(A, B)
    d = (A.x-B.x)^2+(A.y-B.y)^2
    simplify(d)
end

"""
    distance(A, B)

Compute the euclidean distance between `A` and `B`.
"""
function distance(A, B)
    sqrt(squaredist(A, B))
end
