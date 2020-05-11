# This file was generated, do not modify it. # hide
A = Point(0,0); B = Point(1, 3); C = Point(4,2)
scatter(shape([A, B, C]), leg=false, aspect_ratio=:equal, 
    color=:red, series_annotations = text.(["A", "B", "C"], :bottom)) 
savefig(joinpath(@OUTPUT, "ex1.svg")) # hide