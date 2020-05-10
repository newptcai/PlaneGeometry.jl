@def title = "Triangle Definitions"
@def hasmath = false
@def hascode = true

# Triangles

\toclist{toc2}{("equipoints", "outer_equitri", "outer_equitriangles", "isequilateral")}

{{doc equipoints}}

\docpic{ex5}{
ptAB = equipoints(A, B)
scatter(shape([A, B]), leg=false, color=:red, 
    series_annotations = text.(["A", "B"], :bottom))
scatter!(shape(ptAB), leg=false, color=:green, 
    series_annotations = text.(["1", "2"], :bottom))
}

{{code equipoints(Point(), Point())}}

{{doc outer_equitri}}

\docpic{ex6}{
tri = Triangle(A, B, C)
tri_out = outer_equitri(A, B, C)
scatter(shape([A, B, C]), leg=false, color=:red, 
    series_annotations = text.(["A", "B", "C"], :bottom))
plot!(tri_out, leg=false, fill=(0, :pink), aspect_ratio=:equal, fillalpha= 0.7)
plot!(tri, fill=(0, :green), aspect_ratio=:equal, fillalpha= 0.2)
}

{{code outer_equitri(Point(), Point(), Point())}}

{{doc outer_equitriangles}}

\docpic{ex7}{
tri = Triangle(A, B, C)
tri_out = outer_equitriangles(tri)
scatter(shape([A, B, C]), leg=false, color=:red, 
    series_annotations = text.(["A", "B", "C"], :bottom))
for t in tri_out
    plot!(t, leg=false, fill=(0, :pink), aspect_ratio=:equal, fillalpha= 0.7)
end
plot!(tri, fill=(0, :green), aspect_ratio=:equal, fillalpha= 0.2)
}

{{code outer_equitriangles(Triangle())}}

{{doc isequilateral}}

{{code isequilateral(Triangle())}}

# Circles

{{doc circumcircle}}

\docpic{ex8}{
c = circumcircle([A, B, C])
scatter(shape([A, B, C]), leg=false, color=:red, 
    series_annotations = text.(["A", "B", "C"], :bottom))
plot!(c, fill=(0, :orange), aspect_ratio=:equal, fillalpha= 0.2)
}

{{code circumcircle([Point(), Point(), Point()])}}
