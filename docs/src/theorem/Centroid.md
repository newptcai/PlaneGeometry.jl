# Centroid Exists Theorem

```@setup 1
using 
    PlaneGeometry, 
    PlaneGeometry.Theorems, 
    PlaneGeometry.Theorems.Centroid,
    Plots
```

```@contents
Pages = ["Centroid.md"]
```

## The Theorem

```@docs
PlaneGeometry.Theorems.Centroid
```

![centroid-plot-1.svg](centroid-plot-1.svg)

## Finding the centroid and medians

```@docs
centroid
```
```@example 1
@code_md centroid(Triangle()) # hide
```

## Examples

```@docs
centroid_draw(::Triangle)
```

```@example 1
A = Point(0,0); B = Point(1, 3); C = Point(4,2)
plt, hold = centroid_draw(A, B, C)
does_thmhold(hold)
savefig("centroid-plot-1.svg"); nothing # hide
```

![centroid-plot-1.svg](centroid-plot-1.svg)

```@docs
centroid_rand()
```

```@example 1
plt, hold = centroid_rand()
does_thmhold(hold)
savefig("centroid-plot-2.svg"); nothing # hide
```
![centroid-plot-2.svg](centroid-plot-2.svg)

```@example 1
plt, hold = centroid_rand()
does_thmhold(hold)
savefig("centroid-plot-3.svg"); nothing # hide
```
![centroid-plot-3.svg](centroid-plot-3.svg)

## Proof

```@example 1
@code_md centroid_proof() # hide
```

```@example 1
does_thmhold(centroid_proof())
```
