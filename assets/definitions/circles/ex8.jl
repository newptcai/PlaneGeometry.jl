# This file was generated, do not modify it. # hide
A = Point(0,0); B = Point(1, 3); C = Point(4,2)
c = circumcircle([A, B, C])
scatter(shape([A, B, C]), leg=false, color=:red, 
    series_annotations = text.(["A", "B", "C"], :bottom))
plot!(c, fill=(0, :orange), aspect_ratio=:equal, fillalpha= 0.2) 
savefig(joinpath(@OUTPUT, "ex8.svg")) # hide