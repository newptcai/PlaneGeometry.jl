# Circle Related Definitions

```@setup 1
using PlaneGeometry, Plots # hide
```

```@contents
Pages = ["definition/circle.md"]
```

## Circumcircle

```@docs
circumcircle
```

### Source Code

```@example 1
using PlaneGeometry, Plots # hide
@code_md circumcircle([Point(), Point(), Point()]) # hide
```

### Picture

```@example 1
A = Point(0,0); B = Point(1, 3); C = Point(4,2)
c = circumcircle([A, B, C])
scatter(shape([A, B, C]), leg=false, color=:red, 
    series_annotations = text.(["A", "B", "C"], :bottom))
plot!(c, fill=(0, :orange), aspect_ratio=:equal, fillalpha= 0.2)
```
