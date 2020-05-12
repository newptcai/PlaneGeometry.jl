# Distances

## Euclidean distance

```@setup 1
using PlaneGeometry, Plots
using PlaneGeometry: A, B, C
```

```@docs
distance
```

### Source Code

```@example 1
@code_md distance(Point(), Point()) # hide
```

## Squared Euclidean distance

```@docs
squaredist
```

### Source Code

```@example 1
@code_md squaredist(Point(), Point()) # hide
```

## Midpoint of an edge

```@docs
midpoint
```

### Source Code

```@example 1
@code_md midpoint(Point(), Point()) # hide
```
### Picture

```@example 1
plot(Edge(A, B), leg=false, color=:orange)
mid = midpoint(A, B)
scatter!(shape([A, B, mid]), leg=false, aspect_ratio=:equal, 
    color=[:red, :red, :green], series_annotations = text.(["A", "B", "mid"], :bottom))
```

## Concurrent Point

```@docs
concurrent(::Vector{Edge})
```

```@docs
concurrent(::Edge, ::Edge)
```

### Source Code

```@example 1
@code_md concurrent(Edge[]) # hide
```
### Picture

```@example 1
elist = map(i->median(circshift([A, B, C], i)...), 0:2)
cpt = concurrent(elist)
plot(Triangle(A, B, C), fill=(0, :green), aspect_ratio=:equal, fillalpha= 0.2)
for e in elist
    plot!(e, leg=false, color=:orange)
end
scatter!(shape([A, B, C, cpt]), 
    leg=false,
    aspect_ratio=:equal, 
    color=[:red, :red, :red, :green], 
    series_annotations = text.(["A", "B", "C", "cpt"], :bottom))
```
