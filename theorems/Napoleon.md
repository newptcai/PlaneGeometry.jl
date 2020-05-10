@def title = "Napoleon's theorem"
@def hasmath = true
@def hascode = true

# Napoleon's theorem

```julia:./load
#hideall
using PlaneGeometry
using PlaneGeometry.GeoPlots
using PlaneGeometry.Theorems
using PlaneGeometry.Theorems.Napoleon
using Plots
```

{{doc PlaneGeometry.Theorems.Napoleon}}

## Example

Check if the theorem holds for the triangle $ \Delta ABC $.

\example{napoleon-1}{
A = Point(0,0); B = Point(1, 3); C = Point(4,2)
plt, hold = napoleon_draw(A, B, C)
does_thmhold(hold)
}

Check if the theorem holds for a random triangle.

\example{napoleon-2}{
plt, hold = napoleon_rand()
does_thmhold(hold)
}

Check if the theorem holds for another random triangle.

\example{napoleon-3}{
plt, hold = napoleon_rand()
does_thmhold(hold)
}

## Proof

Of course, examples are not proofs. But what are proofs? Often a proof is just a computation done
with symbols instead of fixed numbers.

Note that symbols, e.g., $x$, is different from Julia's variables. It does not hold any value but is
just a placeholder in a computation. This means if a symbolic computation with $x$ is valid, then
then the computation still holds if we replace $x$ with *any* number.

First, note that we can assume that $A = (0,0)$, $B$ is on the positive half of $y$-axis, and $C$ is
in the right half of the plane. In other words, something like this.


\example{napoleon_proof-1}{
plt, ret = napoleon_draw(0, 0, 0, 3, 3, 1)
plt
}

We can always move a triangle so it satisfies these conditions.

Let's represent their coordinates by symbols and check if the therm holds.

{{doc napoleon_proof}}

{{code napoleon_proof() }}

And the result of running is
```julia:./proof
does_thmhold(napoleon_proof())
```
\show{./proof}
