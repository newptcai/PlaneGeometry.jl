# This file was generated, do not modify it. # hide
plot(shape(Edge(A, B)), leg=false)
scatter!(shape([A,B]), leg=false, aspect_ratio=:equal, 
    color=:red, series_annotations = text.(["A", "B"], :bottom)) 
savefig(joinpath(@OUTPUT, "ex2.svg")) # hide