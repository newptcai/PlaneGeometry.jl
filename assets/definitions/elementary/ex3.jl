# This file was generated, do not modify it. # hide
tri = Triangle(A, B, C)
plot(tri, leg=false, fill=(0, :green), aspect_ratio=:equal, fillalpha= 0.2)
scatter!(shape([A, B, C]), leg=false,
    color=:red, series_annotations = text.(["A", "B", "C"], :bottom)) 
savefig(joinpath(@OUTPUT, "ex3.svg")) # hide