@def title = "Introduction"
@def hasmath = true
@def hascode = true
<!-- Note: by default hasmath == true and hascode == false. You can change this in
the config file by setting hasmath = false for instance and just setting it to true
where appropriate -->

<!-- \tableofcontents you can use \toc as well -->

# Introduction

*This website originated from a [blog
post](https://newptcai.github.io/euclidean-plane-geometry-with-julia.html) I wrote. I have since
cleaned up the code and put everything into a Julia package
[PlaneGeometry.jl](https://github.com/newptcai/PlaneGeometry.jl).*

## A book from the future

When I first got interested in computer algebra systems (CAS), I came across a
[book](https://sites.math.rutgers.edu/~zeilberg/GT.html)

\figalt{PLANE GEOMETRY: AN ELEMENTARY TEXTBOOK BY SHALOSH B. EKHAD}{/assets/book.png}


Of course, Shalosh is not really a time traveler from a future. He/she/it is the computer of [Doron
Zeilberger](https://sites.math.rutgers.edu/~zeilberg/), a mathematician who has been
[advocating](https://sites.math.rutgers.edu/~zeilberg/OPINIONS.html) for the use of computers in
mathematics for decades. He often writes articles and papers with Shalosh named as a co-author.

\figalt{Doron Zeilberger}{/assets/Doron_Zeilberger_(circa_2005).jpg}
~~~
<center>
    Doron Zeilberge (circa 2005) from <a
    href="https://en.wikipedia.org/wiki/Doron_Zeilberger">Wikipeida</a>
</center>
~~~

The book title is just a joke 😀️. What Zeilberger really wants to say is that in the future, kids
won't need to learn to do (at least) plane geometry with pencil and paper any more. Their homework
will be writing codes so their computer 🤖️ will do the mathematics for them.

## A new book with Julia

\figalt{Julia}{/assets/julia-logo-color.png}

Zeilberger's book was created with Maple, a powerful commercial CAS. But in principle, this can be done
in any programming languages, e.g., [Julia](https://julialang.org/), which is a *fast,
dynamically and optionally typed, easy-to-use, open-sourced* modern programming language. Its syntax is
similar to `Python`, but superior in my opinion 🤓️.  

Admittedly, Julia is not a CAS. But with the
package [SymPy.jl](https://github.com/JuliaPy/SymPy.jl) handling symbolic computation and
[Plots.jl](https://github.com/JuliaPlots/Plots.jl) drawing nice pictures, Julia is a reasonably
good choice for writing a book like the one Zeilberger wrote.

So I have written a Julia package [PlaneGeometry.jl](https://github.com/newptcai/PlaneGeometry.jl)
to create Zeilberger's book. The purpose is mainly to demonstrate the use of various
Julia packages, and for myself to learn a bit more about programming in Julia.

## PlaneGeometry.jl

![PlaneGeometry](/assets/PlaneGeometry.svg)

You can learn how to install Julia [here](https://julialang.org/downloads/). I will assume that you
have already done that and learned a bit about how to use Julia.

To install PlaneGeometry.jl, open the [Julia REPL](https://docs.julialang.org/en/v1/stdlib/REPL/) and run the following
code.

```julia
using Pkg; 
Pkg.activate("."); 
Pkg.add(PackageSpec(url="https://github.com/newptcai/PlaneGeometry.jl"))
```

After that, you can load PlaneGeometry.jl in to REPL by

```julia:./using
using PlaneGeometry
```

My original [post](https://newptcai.github.io/euclidean-plane-geometry-with-julia.html) is about
proving [Napoleon's theorem](https://en.wikipedia.org/wiki/Napoleon%27s_theorem). You can find a
revised version using PlaneGeometry.jl [here](/theorems/Napoleon).  Other theorems proved in this
packaged are list [here](/theorems).  There is also a [list](/definitions) of geometric definitions
that we need.

## How this website is created?

This website is built using two packages --

* [Franklin.jl](https://github.com/tlienart/Franklin.jl) -- A fast and simple static website
  generator written in Julia. It works very well with Julia packages. I recommend to
  anyone who's already familiar with Julia.
* [CodeTracking.jl](https://github.com/timholy/CodeTracking.jl) -- Most code snippets from
  PlaneGeometry.jl you see here are actually retrieved in this way. I try to avoid copy and paste as
  much as possible.

<!--

The rest of this introduction will demonstrate in details how PlaneGeometry.jl proves [Napoleon's
theorem](https://en.wikipedia.org/wiki/Napoleon%27s_theorem), which, according to Wikipedia,

> ... states that if equilateral triangles are constructed on the sides
> of any triangle, either all outward or all inward, the lines connecting the centres of those
> equilateral triangles themselves form an equilateral triangle.

You can find more theorems that can proved in this way [here](theorems). I will add more from time
to time.

# How to draw a triangle

Some basics geometrics objects such as `Point`, `Triangle` and `Circle` are defined in
PlaneGeometry.jl.  To start proving the theorem, we let's consider a triangle consisting of 3 vertices $A, B,
C$ defined as below:

```julia:./tri.jl
A = Point(0,0); B = Point(1, 3); C = Point(4,2)
tri = Triangle(A, B, C)
```

To draw triangle, we need to create a `Plots.Shape` object for the triangle.

```julia:./shape-tri
using PlaneGeometry.Plots
trishape=shape(tri)

println(trishape) #hide
```
\output{./shape-tri}

```julia:./shape-tri.jl
using Plots

function shape(ptlist::Vector{Point})
    xlist = [pt.x for pt in ptlist]
    ylist = [pt.y for pt in ptlist]
    shape = Shape(xlist, ylist)
end;
shape(tri::Triangle) = shape(vertices(tri));

trishape=shape(tri)

println(trishape) #hide
```

\output{./shape-tri}



Let's consider the following triangle.


Then we can just feed the shape into `plot()`. The `leg=false` argument hides the unnecessary plot legend.


```julia:./fig-1.jl
plot(trishape, leg=false, fill=(0, :green), 
    aspect_ratio=:equal, fillalpha= 0.2)
savefig(joinpath(@OUTPUT, "fig-1.svg")) # hide
```

\fig{./fig-1.svg}



Let's point out where are the 3 points $A$, $B$ and $C$.

```julia:./fig-2.jl
scatter!(trishape.x, trishape.y, color=:red, 
    series_annotations = text.(["A", "B", "C"], :bottom))
savefig(joinpath(@OUTPUT, "fig-2.svg")) # hide
```

\fig{./fig-2.svg}

# Equilateral triangles

There are two points that are can form a equilateral triangle with $A$ and $B$. Let's find them.

First we define a functions that computes the squared euclidean distance between two points.


```julia:./squaredist.jl
function squaredist(A, B)
    (A.x-B.x)^2+(A.y-B.y)^2
end;
```

To find these two points, we need to solve a quadratic equation. For this we use SymPy.jl.

```julia:./equipoints.jl
using SymPy

function equipoints(A, B)
    x, y = @vars x y
    pt = Point(x, y)
    dist1 = squaredist(pt, A)
    dist2 = squaredist(pt, B)
    dist3 = squaredist(A, B)
    sol = solve([dist1-dist3, dist2-dist3], [x,y]) # Soving a quadratic eqaution.
    [Point(s[1], s[2]) for s in sol]
end;
```

These are the two points that can form equilateral triangles with $A$ and $B$.


```julia:./ptAB.jl
ptAB = equipoints(A, B)
print(ptAB) #hide
```

\output{./ptAB}


Let's consider only the outer equilateral triangle. So among the two points we only keep the one that is closer to $C$. The following function does that for us.


```julia:./outer_equitri.jl
function outer_equitri(A, B, C)
    ptAB = equipoints(A, B)
    dist = map(pt->squaredist(pt, C), ptAB)
    if dist[1] >= dist[2]
        return Triangle(A, B, ptAB[1])
    else
        return Triangle(A, B, ptAB[2])
    end
end;
```

And we write function to do this for all the three edges of $\Delta ABC$.


```julia:./outer_equitriangles
function outer_equitriangles(tri)
    pts = vertices(tri)
    map(i->outer_equitri(circshift(pts, i)...), 0:2)
end
```




These are the three outer equilateral triangles for $\Delta ABC$.


```julia:./outer_tri.jl
outer_tri = outer_equitriangles(tri)
print(outer_tri) #hide
```

\output{./outer_tri} 

Let's draw these three triangles to see if we get it correctly.


```julia:./fig-3.jl
for t in outer_tri
    plot!(shape(t), leg=false, fill=(0, :pink), fillalpha=0.7)
end
savefig(joinpath(@OUTPUT, "fig-3.svg")) # hide
```

\fig{./fig-3}



Looks fine!

# Circumcenter

Now we can compute the [orthocenter](https://en.wikipedia.org/wiki/Altitude_(triangle)) of the three triangles.

First a function that computes the circle that goes through several points.


```julia:./circumcircle.jl
function circumcircle(points)
    x, y = @vars x y
    c = Point(x, y)
    dist = [squaredist(pt, c) for pt in points]
    equations = [Eq(dist[i], dist[i+1]) for i in 1:length(points)-1]
    sol = solve(equations, [x, y])
    center = Point(simplify(sol[x]), simplify(sol[y]))
    Circle(center, sqrt(squaredist(center, points[1])))
end;
```

So the circumcircles of the three outer equilateral triangles are


```julia:./outer_circles.jl
outer_circles = circumcircle.(vertices.(outer_tri))
print(outer_circles) #hide
```

\output{./outer_circles}


Let's draw them to see if we computed them correctly. To draw a circle, again we need to create a
`Plot.Shape` object to represent it.


```julia:./shape-circle.jl
function shape(c::Circle)
    θ = LinRange(0, 2*π, 300)
    c.center.x .+ c.radius*sin.(θ), c.center.y .+ c.radius*cos.(θ)
end;
```


```julia:./fig-4.jl
for c in outer_circles
    plot!(shape(c), leg=false, fill=(0, :orange), aspect_ratio=:equal, fillalpha=0.2)
end
savefig(joinpath(@OUTPUT, "fig-4.svg")) # hide
```


\fig{./fig-4}


Now let's draw the triangle formed by the center of these 3 circles.


```julia:./fig-5.jl
outer_centers = ccenter.(outer_circles);
napoleon_tri = Triangle(outer_centers...);
plot!(shape(napoleon_tri), leg=false, fill=(0, :blue), fillalpha=0.7, aspect_ratio=:equal)
savefig(joinpath(@OUTPUT, "fig-5.svg")) # hide
```

\fig{./fig-5}



# A surprise

According to the theorem, this blue triangle is actually equilateral? Is it? A function to check it --


```julia:./isequilateral.jl
function isequilateral(tri)
    dist = [squaredist(e.src, e.dst) for e in edges(tri)]
    if (dist[1] == dist[2]) && (dist[1] == dist[3])
        return true
    else
        return false
    end
end
```


```julia:./isequilateral-1.jl
hold = isequilateral(napoleon_tri)
println(hold) #hide
```

\output{./isequilateral-1}

Wow! The theorem is wrong! 😱️ Of course not. Math tells us the theorem is correct. What is wrong is our computation. Let's check the lengths of each edge of `napoleon_tri`.


```julia:./dist1.jl
dist1 = squaredist(napoleon_tri.A, napoleon_tri.B)
@show dist1
```

\output{./dist1}


```julia:./dist2.jl
dist2 = squaredist(napoleon_tri.B, napoleon_tri.C)
```


\output{./dist2}



Let's compare them numerically.


```julia:./dist12.jl
@show N(dist1) == N(dist2)
```

\output{./dist12}


The problem is, by default, SymPy expressions are not simplified. So to check these two distances are actually equal, we need to do some simplifications. So when we compute distances, we should use `SymPy.simplify()` on the result.


```julia:./squaredist-2.jl
function squaredist(A, B)
    d = (A.x-B.x)^2+(A.y-B.y)^2
    if d isa Sym
        simplify(d)
    else
        d
    end
end;
```

No we can show that the theorem is at least correct in this example. 😀️


```julia:./isequilateral-2.jl
@show isequilateral(napoleon_tri)
```


\output{./isequilateral-2}



# A coincidence?

Maybe we are just lucky and chose a triangle that the theorem holds. To be sure, we can try some more triangles. 

First we put how we draw the picture above in a function.


```julia:./napoleon_draw.jl
function napoleon_draw(xA, yA, xB, yB, xC, yC)
    A = Point(xA, yA); 
    B = Point(xB, yB); 
    C = Point(xC, yC);
    tri = Triangle(A, B, C)

    trishape=shape(tri)

    plot(trishape, leg=false, fill=(0, :green), aspect_ratio=:equal, fillalpha= 0.2)

    scatter!(trishape.x, trishape.y, color=:red, series_annotations = text.(["A", "B", "C"], :bottom))

    outer_tri = outer_equitriangles(tri)
    for t in outer_tri
        plot!(shape(t), leg=false, fill=(0, :pink), aspect_ratio=:equal, fillalpha=0.7)
    end

    outer_circles = circumcircle.(vertices.(outer_tri))

    outer_centers = ccenter.(outer_circles);

    napoleon_tri = Triangle(outer_centers...);

    plt = plot!(shape(napoleon_tri), leg=false, fill=(0, :blue), fillalpha=0.7, aspect_ratio=:equal)

    hold = isequilateral(napoleon_tri)

    plt, hold
end
```




Let's pick a random triangle.


```julia:./napoleon_rand.jl
function napoleon_rand()
    pts = rand(0:1//10:1,6);
    plt, hold = napoleon_draw(pts...)
    if(hold == true)
        println("Theorem holds! 😀️")
    else
        println("Theorem does not holds! 😱️")
    end
    plt
end
```




```julia:./napoleon_rand-1.jl
napoleon_rand()
savefig(joinpath(@OUTPUT, "napoleon_rand-1.svg")) # hide
```
\output{./napoleon_rand-1}
\fig{./napoleon_rand-1}

Let's try again.


```julia:./napoleon_rand-2.jl
napoleon_rand()
savefig(joinpath(@OUTPUT, "napoleon_rand-2.svg")) # hide
```
\output{./napoleon_rand-2}
\fig{./napoleon_rand-2}



# A symbolic proof

Of course, examples are not proofs. But what are proofs? Often a proof is just a computation done
with symbols instead of fixed numbers.

Note that symbols, e.g., $x$, is different from Julia's variables. It does not hold any value but is
just a placeholder in a computation. This means if a symbolic computation with $x$ is valid, then
then the computation still holds if we replace $x$ with *any* number.

First, note that we can assume that $A = (0,0)$, $B$ is on the positive half of $y$-axis, and $C$ is
in the right half of the plane. In other words, something like this.


```julia:./napoleon_draw-2.jl
plt, ret = napoleon_draw(0, 0, 0, 3, 3, 1)
plt
savefig(joinpath(@OUTPUT, "napoleon_draw-2.svg")) # hide
```

\fig{./napoleon_draw-2}

We can always move a triangle so it satisfies these conditions.

Let represent their coordinates by symbols. 


```julia:./symbol
@vars by cx positive=true;
@vars cy;

A = Point(0, 0); B = Point(0, by); C = Point(cx, cy);
tri = Triangle(A, B, C)
@show tri
```

\output{./symbol}


All the computations done before, we can just copy and paste!


```julia:./napoleon_check.jl
function napoleon_check(tri)
    outer_tri = outer_equitriangles(tri);
    outer_circles = circumcircle.(vertices.(outer_tri));
    outer_centers = ccenter.(outer_circles);
    npt = Triangle(outer_centers...)
    isequilateral(npt)
end

@show napoleon_check(tri)
```


\output{./napoleon_check.jl}


We get a false. But again, this is a programming error. The problem is, for `SymPy` to know which of two symbolic expressions is larger, it needs a bit help. So when we choose among the two points which one is for the outer equilateral triangle, we chose the wrong one. We can again fix this by using `simplify()`.


```julia:./outer_equitri-2.jl
function outer_equitri(A, B, C)
    ptAB = equipoints(A, B)
    dist = map(pt->squaredist(pt, C), ptAB)
    d = simplify(dist[1] - dist[2])
    if d >= 0
        return Triangle(A, B, ptAB[1])
    else
        return Triangle(A, B, ptAB[2])
    end
end;
```

This time it works!


```julia:./napoleon_check-3.jl
@show napoleon_check(tri)
```

\output{./napoleon_check-3}


So, Napoleon is right! 😀️ But do you think future kids will actually prove this theorem like this in class? 🤔️

-->
