# Elementary Definitions

```@setup 1
using PlaneGeometry, Plots # hide
```

```@contents
Pages = ["definition/elementary.md"]
```

## Point

```@docs
Point
```

### Picture

```@example 1
A = Point(0,0); B = Point(1, 3); C = Point(4,2)
scatter(shape([A, B, C]), leg=false, aspect_ratio=:equal, 
    color=:red, series_annotations = text.(["A", "B", "C"], :bottom))
```

## Edge

```@docs
Edge
```

### Picture

```@example 1
plot(shape(Edge(A, B)), leg=false)
scatter!(shape([A,B]), leg=false, aspect_ratio=:equal, 
    color=:red, series_annotations = text.(["A", "B"], :bottom))
```

## Triangle

```@docs
Triangle
```

### Picture

```@example 1
tri = Triangle(A, B, C)
plot(tri, leg=false, fill=(0, :green), aspect_ratio=:equal, fillalpha= 0.2)
scatter!(shape([A, B, C]), leg=false,
    color=:red, series_annotations = text.(["A", "B", "C"], :bottom))
```

## Circle

```@docs
Circle
```

### Picture

```@example 1
c = Circle(A, 1)
plot(c, leg=false, fill=(0, :red), 
    aspect_ratio=:equal, fillalpha= 0.2)
scatter!(shape([A]), leg=false, color=:red, 
    series_annotations = text.(["A"], :bottom))
```
