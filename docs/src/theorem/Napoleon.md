# Napoleon's Theorem

```@setup 1
using 
    PlaneGeometry, 
    PlaneGeometry.Theorems, 
    PlaneGeometry.Theorems.Napoleon,
    Plots
```

```@contents
Pages = ["Napoleon.md"]
```

## The Theorem

```@docs
PlaneGeometry.Theorems.Napoleon
```
![napoleon-plot-1.svg](napoleon-plot-1.svg)

## Finding the Napoleon Triangle

Given a triangle, to find its Napoleon triangle, we use the following function.

```@docs
napoleon_tri
```
```@example 1
@code_md napoleon_tri(Triangle()) # hide
```

## Examples

We can check if the theorem holds a particular triangle with `napoleon_draw`.

```@docs
napoleon_draw(::Triangle)
```

```@example 1
A = Point(0,0); B = Point(1, 3); C = Point(4,2)
plt, hold = napoleon_draw(A, B, C)
does_thmhold(hold)
savefig("napoleon-plot-1.svg"); nothing # hide
```

![napoleon-plot-1.svg](napoleon-plot-1.svg)

To be sure that we are not just lucky, we can check if the theorem also holds for a random triangle
with `napoleon_rand`.

```@docs
napoleon_rand()
```

```@example 1
plt, hold = napoleon_rand()
does_thmhold(hold)
savefig("napoleon-plot-2.svg"); nothing # hide
```
![napoleon-plot-2.svg](napoleon-plot-2.svg)

```@example 1
plt, hold = napoleon_rand()
does_thmhold(hold)
savefig("napoleon-plot-3.svg"); nothing # hide
```
![napoleon-plot-3.svg](napoleon-plot-3.svg)

So it looks like the theorem should be true 😁️!

## Proof

Of course, examples are not proofs. But what are proofs? Often a proof is just a computation done
with symbols instead of fixed numbers.

Note that symbols, e.g., $x$, is different from Julia's variables. It does not hold any value but is
just a placeholder in a computation. This means if a symbolic computation with $x$ is valid, then
then the computation still holds if we replace $x$ with any number.

First, note that we can assume that $A = (0,0)$, $B$ is on the positive half of $y$-axis, and $C$
is in the right half of the plane. In other words, a triangle looking like this.

```@example 1
plt, hold = napoleon_draw(0, 0, 0, 3, 3, 1)
plt
```

We can always move a triangle so it satisfies these conditions.

Then proving the theorem we can create a `Triange` whose vertices have coordinates which are
symbols provided by `SymPy`. Then we can just use `napoleon_tri` to find its Napoleon triangle and
check if it is equilateral. We put the code in the following function.

```@example 1
@code_md napoleon_proof() # hide
```

And the final proof is a simple as one line of code ✌️.

```@example 1
does_thmhold(napoleon_proof())
```
