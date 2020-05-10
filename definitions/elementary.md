@def title = "Elementary Definitions"
@def hasmath = true
@def hascode = true

# Elementary

```julia:load
#hideall
using PlaneGeometry
using PlaneGeometry.GeoPlots
using Plots
```

\toclist{toc}{("Point", "Edge", "Triangle", "Circle")}

{{doc Point}}

\docpic{ex1}{
A = Point(0,0); B = Point(1, 3); C = Point(4,2)
scatter(shape([A, B, C]), leg=false, aspect_ratio=:equal, 
    color=:red, series_annotations = text.(["A", "B", "C"], :bottom))
}

{{doc Edge}}

\docpic{ex2}{
plot(shape(Edge(A, B)), leg=false)
scatter!(shape([A,B]), leg=false, aspect_ratio=:equal, 
    color=:red, series_annotations = text.(["A", "B"], :bottom))
}

{{doc Triangle}}

\docpic{ex3}{
tri = Triangle(A, B, C)
plot(tri, leg=false, fill=(0, :green), aspect_ratio=:equal, fillalpha= 0.2)
scatter!(shape([A, B, C]), leg=false,
    color=:red, series_annotations = text.(["A", "B", "C"], :bottom))
}

{{doc Circle}}

\docpic{ex4}{
c = Circle(A, 1)
plot(c, leg=false, fill=(0, :red), 
    aspect_ratio=:equal, fillalpha= 0.2)
scatter!(shape([A]), leg=false, color=:red, 
    series_annotations = text.(["A"], :bottom))
}

