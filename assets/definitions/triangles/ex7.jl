# This file was generated, do not modify it. # hide
tri = Triangle(A, B, C)
tri_out = outer_equitriangles(tri)
scatter(shape([A, B, C]), leg=false, color=:red, 
    series_annotations = text.(["A", "B", "C"], :bottom))
for t in tri_out
    plot!(t, leg=false, fill=(0, :pink), aspect_ratio=:equal, fillalpha= 0.7)
end
plot!(tri, fill=(0, :green), aspect_ratio=:equal, fillalpha= 0.2) 
savefig(joinpath(@OUTPUT, "ex7.svg")) # hide