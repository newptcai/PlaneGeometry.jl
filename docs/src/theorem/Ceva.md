# Ceva's Theorem

See [Napoleon's Theorem](Napoleon.md) for an example with more detailed explanations of how to prove
theorems with Julia.

```@setup 1
using 
    PlaneGeometry, 
    PlaneGeometry.Theorems, 
    PlaneGeometry.Theorems.Ceva,
    Plots
```

```@contents
Pages = ["Ceva.md"]
```

## The Theorem

```@docs
PlaneGeometry.Theorems.Ceva
```

## Finding the ceva and medians

```@docs
ceva
```
```@example 1
@code_md ceva(Triangle(), Point()) # hide
```

## Examples

```@docs
ceva_draw(::Triangle, ::Point)
```

```@example 1
A = Point(0,0); B = Point(1, 3); C = Point(4,2); O = Point(2, 2)
plt, hold = ceva_draw(Triangle(A, B, C), O)
does_thmhold(hold)
savefig("ceva-plot-1.svg"); nothing # hide
```

![ceva-plot-1.svg](ceva-plot-1.svg)

```@docs
ceva_rand()
```

```@example 1
plt, hold = ceva_rand()
does_thmhold(hold)
savefig("ceva-plot-2.svg"); nothing # hide
```
![ceva-plot-2.svg](ceva-plot-2.svg)

```@example 1
plt, hold = ceva_rand()
does_thmhold(hold)
savefig("ceva-plot-3.svg"); nothing # hide
```
![ceva-plot-3.svg](ceva-plot-3.svg)

## Proof

```@example 1
@code_md ceva_proof() # hide
```

```@example 1
does_thmhold(ceva_proof())
```
