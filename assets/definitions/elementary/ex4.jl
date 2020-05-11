# This file was generated, do not modify it. # hide
c = Circle(A, 1)
plot(c, leg=false, fill=(0, :red), 
    aspect_ratio=:equal, fillalpha= 0.2)
scatter!(shape([A]), leg=false, color=:red, 
    series_annotations = text.(["A"], :bottom)) 
savefig(joinpath(@OUTPUT, "ex4.svg")) # hide