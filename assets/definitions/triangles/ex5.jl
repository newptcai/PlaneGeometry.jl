# This file was generated, do not modify it. # hide
A = Point(0,0); B = Point(1, 3); C = Point(4,2)
ptAB = equipoints(A, B)
scatter(shape([A, B]), leg=false, color=:red, 
    series_annotations = text.(["A", "B"], :bottom))
scatter!(shape(ptAB), leg=false, color=:green, 
    series_annotations = text.(["1", "2"], :bottom))
[plot!(Triangle(A, B, pt), leg=false, fill=(0, :pink), 
    aspect_ratio=:equal, fillalpha= 0.7) for pt in ptAB] 
savefig(joinpath(@OUTPUT, "ex5.svg")) # hide