using PlaneGeometry
using PlaneGeometry.Theorems.Napoleon
using SymPy
using Test

@testset "PlaneGeometry.jl" begin
    A = Point(0,0) 
    B = Point(1, 3) 
    C = Point(4,2)
    tri = Triangle(A, B, C)

    @testset "Napoleon's theorem" begin
        @test vertices(tri) == [A, B, C]
        @test edges(tri) == [Edge(A, B), Edge(B, C), Edge(C, A)]

        c = Circle(A, 2)
        @test PlaneGeometry.center(c) == A

        @test squaredist(A, B) == 10
        @test distance(A, B) == SymPy.sqrt(Sym(10))

        @test midpoint(Point(0, 0), Point(2,4)) == Point(1, 2)
        @test midpoint(A, B) == Point(1//2, 3//2)

        @test median(A, B, C) == Edge(Point(1//2, 3//2), C)

        @test concurrent(edges(tri)) == nothing

        elist = map(i->median(circshift([A, B, C], i)...), 0:2)
        @test concurrent(elist) == Point(5//3, 5//3)

        @test equipoints(A, B) == 
        [
        Point(1//2 - 3*sympy.sqrt(3)//2, sympy.sqrt(3)//2 + 3//2),
        Point(1//2 + 3*sympy.sqrt(3)//2, 3//2 - sympy.sqrt(3)//2)
        ]

        outer_tri = outer_equitriangles(tri)

        @test outer_tri == 
        [
        Triangle(A, B, Point(1//2 - 3*sympy.sqrt(3)//2, sympy.sqrt(3)//2 + 3//2)),
        Triangle(C, A, Point(sympy.sqrt(3) + 2, 1 - 2*sympy.sqrt(3))),
        Triangle(B, C, Point(sympy.sqrt(3)//2 + 5//2, 5//2 + 3*sympy.sqrt(3)//2))
        ]

        @test_throws ArgumentError circumcircle([A, B])

        outer_circles = circumcircle.(vertices.(outer_tri))

        @test outer_circles ==
        [
        Circle(Point(1//2 - sympy.sqrt(3)//2, sympy.sqrt(3)//6 + 3//2), sympy.sqrt(30)//3), 
        Circle(Point(sympy.sqrt(3)//3 + 2, 1 - 2*sympy.sqrt(3)//3), 2*sympy.sqrt(15)//3), 
        Circle(Point(sympy.sqrt(3)//6 + 5//2, sympy.sqrt(3)//2 + 5//2), sympy.sqrt(30)//3)
        ]

        @test isequilateral(tri) == false

        np =  napoleon_tri(tri)

        @test isequilateral(np)

        @vars a1 a2 b1 b2 c1 c2
        tri1 = Triangle(a1, a2, b1, b2, c1, c2)

        # This needs to fail.
        @test !isequilateral(tri1)

        @test np == Triangle(
            Point(1//2 - sympy.sqrt(3)//2, sympy.sqrt(3)//6 + 3//2),
            Point(sympy.sqrt(3)//3 + 2, 1 - 2*sympy.sqrt(3)//3), 
            Point(sympy.sqrt(3)//6 + 5//2, sympy.sqrt(3)//2 + 5//2))

        @test napoleon_proof()

        @test centroid_proof()
    end
end
