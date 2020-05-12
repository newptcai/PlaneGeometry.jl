# Triangle Related Definitions

```@setup 1
using PlaneGeometry, Plots # hide
```

```@contents
Pages = ["definition/triangle.md"]
```

## Equilateral Triangles

```@docs
isequilateral
```

### Source Code

```@example 1
@code_md isequilateral(Triangle()) # hide
```

## Equilateral Points

```@docs
equipoints
```

### Source Code

```@example 1
@code_md equipoints(Point(), Point()) # hide
```

### Picture

```@example 1
A = Point(0,0); B = Point(1, 3); C = Point(4,2)
ptAB = equipoints(A, B)
scatter(shape([A, B]), leg=false, color=:red, 
    series_annotations = text.(["A", "B"], :bottom))
scatter!(shape(ptAB), leg=false, color=:green, 
    series_annotations = text.(["1", "2"], :bottom))
[plot!(Triangle(A, B, pt), leg=false, fill=(0, :pink), 
    aspect_ratio=:equal, fillalpha= 0.7) for pt in ptAB]
current()
```

## Outer Equilateral Triangle

```@docs
outer_equitri
```

### Source Code

```@example 1
@code_md outer_equitri(Point(), Point(), Point()) # hide
```

### Picture

```@example 1
tri = Triangle(A, B, C)
tri_out = outer_equitri(A, B, C)
scatter(shape([A, B, C]), leg=false, color=:red, 
    series_annotations = text.(["A", "B", "C"], :bottom))
plot!(tri_out, leg=false, fill=(0, :pink), aspect_ratio=:equal, fillalpha= 0.7)
plot!(tri, fill=(0, :green), aspect_ratio=:equal, fillalpha= 0.2)
```

## All Three Outer Equilateral Triangles

```@docs
outer_equitriangles
```

### Source Code

```@example 1
@code_md outer_equitriangles(Triangle()) # hide
```

### Picture

```@example 1
tri_out = outer_equitriangles(tri)
scatter(shape([A, B, C]), leg=false, color=:red, 
    series_annotations = text.(["A", "B", "C"], :bottom))
for t in tri_out
    plot!(t, leg=false, fill=(0, :pink), aspect_ratio=:equal, fillalpha= 0.7)
end
plot!(tri, fill=(0, :green), aspect_ratio=:equal, fillalpha= 0.2)
```
