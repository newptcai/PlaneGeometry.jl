var documenterSearchIndex = {"docs":
[{"location":"definition/circle/#Circle-Related-Definitions-1","page":"Circles","title":"Circle Related Definitions","text":"","category":"section"},{"location":"definition/circle/#","page":"Circles","title":"Circles","text":"using PlaneGeometry, Plots # hide","category":"page"},{"location":"definition/circle/#","page":"Circles","title":"Circles","text":"Pages = [\"definition/circle.md\"]","category":"page"},{"location":"definition/circle/#Circumcircle-1","page":"Circles","title":"Circumcircle","text":"","category":"section"},{"location":"definition/circle/#","page":"Circles","title":"Circles","text":"circumcircle","category":"page"},{"location":"definition/circle/#PlaneGeometry.circumcircle","page":"Circles","title":"PlaneGeometry.circumcircle","text":"Function\n\ncircumcircle(points)\n\nFind the circle that goes through a list of points.\n\n\n\n\n\n","category":"function"},{"location":"definition/circle/#Source-Code-1","page":"Circles","title":"Source Code","text":"","category":"section"},{"location":"definition/circle/#","page":"Circles","title":"Circles","text":"using PlaneGeometry, Plots # hide\n@code_md circumcircle([Point(), Point(), Point()]) # hide","category":"page"},{"location":"definition/circle/#Picture-1","page":"Circles","title":"Picture","text":"","category":"section"},{"location":"definition/circle/#","page":"Circles","title":"Circles","text":"A = Point(0,0); B = Point(1, 3); C = Point(4,2)\nc = circumcircle([A, B, C])\nscatter(shape([A, B, C]), leg=false, color=:red, \n    series_annotations = text.([\"A\", \"B\", \"C\"], :bottom))\nplot!(c, fill=(0, :orange), aspect_ratio=:equal, fillalpha= 0.2)","category":"page"},{"location":"definition/elementary/#Elementary-Definitions-1","page":"Elementary","title":"Elementary Definitions","text":"","category":"section"},{"location":"definition/elementary/#","page":"Elementary","title":"Elementary","text":"using PlaneGeometry, Plots # hide","category":"page"},{"location":"definition/elementary/#","page":"Elementary","title":"Elementary","text":"Pages = [\"definition/elementary.md\"]","category":"page"},{"location":"definition/elementary/#Point-1","page":"Elementary","title":"Point","text":"","category":"section"},{"location":"definition/elementary/#","page":"Elementary","title":"Elementary","text":"Point","category":"page"},{"location":"definition/elementary/#PlaneGeometry.Point","page":"Elementary","title":"PlaneGeometry.Point","text":"Point(x, y)\n\nA point at coordinate (x, y).\n\nExamples\n\nA = Point(0,0); B = Point(1, 3); C = Point(4,2)\n\n\n\n\n\n","category":"type"},{"location":"definition/elementary/#Picture-1","page":"Elementary","title":"Picture","text":"","category":"section"},{"location":"definition/elementary/#","page":"Elementary","title":"Elementary","text":"A = Point(0,0); B = Point(1, 3); C = Point(4,2)\nscatter(shape([A, B, C]), leg=false, aspect_ratio=:equal, \n    color=:red, series_annotations = text.([\"A\", \"B\", \"C\"], :bottom))","category":"page"},{"location":"definition/elementary/#Edge-1","page":"Elementary","title":"Edge","text":"","category":"section"},{"location":"definition/elementary/#","page":"Elementary","title":"Elementary","text":"Edge","category":"page"},{"location":"definition/elementary/#PlaneGeometry.Edge","page":"Elementary","title":"PlaneGeometry.Edge","text":"Edge(src, dst)\n\nAn edge from point src to point dst.\n\nExamples\n\ne = Edge(Point(0, 0), Point(1, 3))\n\n\n\n\n\n","category":"type"},{"location":"definition/elementary/#Picture-2","page":"Elementary","title":"Picture","text":"","category":"section"},{"location":"definition/elementary/#","page":"Elementary","title":"Elementary","text":"plot(shape(Edge(A, B)), leg=false)\nscatter!(shape([A,B]), leg=false, aspect_ratio=:equal, \n    color=:red, series_annotations = text.([\"A\", \"B\"], :bottom))","category":"page"},{"location":"definition/elementary/#Triangle-1","page":"Elementary","title":"Triangle","text":"","category":"section"},{"location":"definition/elementary/#","page":"Elementary","title":"Elementary","text":"Triangle","category":"page"},{"location":"definition/elementary/#PlaneGeometry.Triangle","page":"Elementary","title":"PlaneGeometry.Triangle","text":"Triangle(A, B, C)\n\nA triangle with vertices A, B, C.\n\nExamples\n\nA = Point(0,0); B = Point(1, 3); C = Point(4,2)\ntri = Triangle(A, B, C)\n\n\n\n\n\n","category":"type"},{"location":"definition/elementary/#Picture-3","page":"Elementary","title":"Picture","text":"","category":"section"},{"location":"definition/elementary/#","page":"Elementary","title":"Elementary","text":"tri = Triangle(A, B, C)\nplot(tri, leg=false, fill=(0, :green), aspect_ratio=:equal, fillalpha= 0.2)\nscatter!(shape([A, B, C]), leg=false,\n    color=:red, series_annotations = text.([\"A\", \"B\", \"C\"], :bottom))","category":"page"},{"location":"definition/elementary/#Circle-1","page":"Elementary","title":"Circle","text":"","category":"section"},{"location":"definition/elementary/#","page":"Elementary","title":"Elementary","text":"Circle","category":"page"},{"location":"definition/elementary/#PlaneGeometry.Circle","page":"Elementary","title":"PlaneGeometry.Circle","text":"Circle(c, r)\n\nA circle with center at c and radius r.\n\nExamples\n\ncircle = Circle(Point(0, 0), 1)\n\n\n\n\n\n","category":"type"},{"location":"definition/elementary/#Picture-4","page":"Elementary","title":"Picture","text":"","category":"section"},{"location":"definition/elementary/#","page":"Elementary","title":"Elementary","text":"c = Circle(A, 1)\nplot(c, leg=false, fill=(0, :red), \n    aspect_ratio=:equal, fillalpha= 0.2)\nscatter!(shape([A]), leg=false, color=:red, \n    series_annotations = text.([\"A\"], :bottom))","category":"page"},{"location":"theorem/Centroid/#Centroid-Exists-Theorem-1","page":"Centroid","title":"Centroid Exists Theorem","text":"","category":"section"},{"location":"theorem/Centroid/#","page":"Centroid","title":"Centroid","text":"using \n    PlaneGeometry, \n    PlaneGeometry.Theorems, \n    PlaneGeometry.Theorems.Centroid,\n    Plots","category":"page"},{"location":"theorem/Centroid/#","page":"Centroid","title":"Centroid","text":"Pages = [\"Centroid.md\"]","category":"page"},{"location":"theorem/Centroid/#The-Theorem-1","page":"Centroid","title":"The Theorem","text":"","category":"section"},{"location":"theorem/Centroid/#","page":"Centroid","title":"Centroid","text":"PlaneGeometry.Theorems.Centroid","category":"page"},{"location":"theorem/Centroid/#PlaneGeometry.Theorems.Centroid","page":"Centroid","title":"PlaneGeometry.Theorems.Centroid","text":"The centroid of a triangle is the point of intersection of its medians (the lines joining each vertex with the midpoint of the opposite side). The Centroids Exists Theorem states that the three medians indeed intersect at single point.\n\n\n\n\n\n","category":"module"},{"location":"theorem/Centroid/#","page":"Centroid","title":"Centroid","text":"(Image: centroid-plot-1.svg)","category":"page"},{"location":"theorem/Centroid/#Finding-the-centroid-and-medians-1","page":"Centroid","title":"Finding the centroid and medians","text":"","category":"section"},{"location":"theorem/Centroid/#","page":"Centroid","title":"Centroid","text":"centroid","category":"page"},{"location":"theorem/Centroid/#PlaneGeometry.Theorems.Centroid.centroid","page":"Centroid","title":"PlaneGeometry.Theorems.Centroid.centroid","text":"centroid(📐️)\n\nFind the centroid and the three medians of 📐️.\n\n\n\n\n\n","category":"function"},{"location":"theorem/Centroid/#","page":"Centroid","title":"Centroid","text":"@code_md centroid(Triangle()) # hide","category":"page"},{"location":"theorem/Centroid/#Examples-1","page":"Centroid","title":"Examples","text":"","category":"section"},{"location":"theorem/Centroid/#","page":"Centroid","title":"Centroid","text":"centroid_draw(::Triangle)","category":"page"},{"location":"theorem/Centroid/#PlaneGeometry.Theorems.Centroid.centroid_draw-Tuple{Triangle}","page":"Centroid","title":"PlaneGeometry.Theorems.Centroid.centroid_draw","text":"centroid_draw(📐️::Triangle)\n\nVerify Centroid Exists Theorem for the triangle 📐️.\n\n\n\n\n\n","category":"method"},{"location":"theorem/Centroid/#","page":"Centroid","title":"Centroid","text":"A = Point(0,0); B = Point(1, 3); C = Point(4,2)\nplt, hold = centroid_draw(A, B, C)\ndoes_thmhold(hold)\nsavefig(\"centroid-plot-1.svg\"); nothing # hide","category":"page"},{"location":"theorem/Centroid/#","page":"Centroid","title":"Centroid","text":"(Image: centroid-plot-1.svg)","category":"page"},{"location":"theorem/Centroid/#","page":"Centroid","title":"Centroid","text":"centroid_rand()","category":"page"},{"location":"theorem/Centroid/#PlaneGeometry.Theorems.Centroid.centroid_rand-Tuple{}","page":"Centroid","title":"PlaneGeometry.Theorems.Centroid.centroid_rand","text":"centroid_rand()\n\nVerify Centroid Exists Theorem for a random triangle.\n\n\n\n\n\n","category":"method"},{"location":"theorem/Centroid/#","page":"Centroid","title":"Centroid","text":"plt, hold = centroid_rand()\ndoes_thmhold(hold)\nsavefig(\"centroid-plot-2.svg\"); nothing # hide","category":"page"},{"location":"theorem/Centroid/#","page":"Centroid","title":"Centroid","text":"(Image: centroid-plot-2.svg)","category":"page"},{"location":"theorem/Centroid/#","page":"Centroid","title":"Centroid","text":"plt, hold = centroid_rand()\ndoes_thmhold(hold)\nsavefig(\"centroid-plot-3.svg\"); nothing # hide","category":"page"},{"location":"theorem/Centroid/#","page":"Centroid","title":"Centroid","text":"(Image: centroid-plot-3.svg)","category":"page"},{"location":"theorem/Centroid/#Proof-1","page":"Centroid","title":"Proof","text":"","category":"section"},{"location":"theorem/Centroid/#","page":"Centroid","title":"Centroid","text":"@code_md centroid_proof() # hide","category":"page"},{"location":"theorem/Centroid/#","page":"Centroid","title":"Centroid","text":"does_thmhold(centroid_proof())","category":"page"},{"location":"definition/triangle/#Triangle-Related-Definitions-1","page":"Triangles","title":"Triangle Related Definitions","text":"","category":"section"},{"location":"definition/triangle/#","page":"Triangles","title":"Triangles","text":"using PlaneGeometry, Plots # hide","category":"page"},{"location":"definition/triangle/#","page":"Triangles","title":"Triangles","text":"Pages = [\"definition/triangle.md\"]","category":"page"},{"location":"definition/triangle/#Equilateral-Triangles-1","page":"Triangles","title":"Equilateral Triangles","text":"","category":"section"},{"location":"definition/triangle/#","page":"Triangles","title":"Triangles","text":"isequilateral","category":"page"},{"location":"definition/triangle/#PlaneGeometry.isequilateral","page":"Triangles","title":"PlaneGeometry.isequilateral","text":"isequilateral(📐️)\n\nCheck if 📐️ is equilateral, i.e., if the three edges of 📐️ are of the same length.\n\n\n\n\n\n","category":"function"},{"location":"definition/triangle/#Source-Code-1","page":"Triangles","title":"Source Code","text":"","category":"section"},{"location":"definition/triangle/#","page":"Triangles","title":"Triangles","text":"@code_md isequilateral(Triangle()) # hide","category":"page"},{"location":"definition/triangle/#Equilateral-Points-1","page":"Triangles","title":"Equilateral Points","text":"","category":"section"},{"location":"definition/triangle/#","page":"Triangles","title":"Triangles","text":"equipoints","category":"page"},{"location":"definition/triangle/#PlaneGeometry.equipoints","page":"Triangles","title":"PlaneGeometry.equipoints","text":"equipoints(A, B)\n\nFind the two points the can form an equilateral triangle with A and B\n\n\n\n\n\n","category":"function"},{"location":"definition/triangle/#Source-Code-2","page":"Triangles","title":"Source Code","text":"","category":"section"},{"location":"definition/triangle/#","page":"Triangles","title":"Triangles","text":"@code_md equipoints(Point(), Point()) # hide","category":"page"},{"location":"definition/triangle/#Picture-1","page":"Triangles","title":"Picture","text":"","category":"section"},{"location":"definition/triangle/#","page":"Triangles","title":"Triangles","text":"A = Point(0,0); B = Point(1, 3); C = Point(4,2)\nptAB = equipoints(A, B)\nscatter(shape([A, B]), leg=false, color=:red, \n    series_annotations = text.([\"A\", \"B\"], :bottom))\nscatter!(shape(ptAB), leg=false, color=:green, \n    series_annotations = text.([\"1\", \"2\"], :bottom))\n[plot!(Triangle(A, B, pt), leg=false, fill=(0, :pink), \n    aspect_ratio=:equal, fillalpha= 0.7) for pt in ptAB]\ncurrent()","category":"page"},{"location":"definition/triangle/#Outer-Equilateral-Triangle-1","page":"Triangles","title":"Outer Equilateral Triangle","text":"","category":"section"},{"location":"definition/triangle/#","page":"Triangles","title":"Triangles","text":"outer_equitri","category":"page"},{"location":"definition/triangle/#PlaneGeometry.outer_equitri","page":"Triangles","title":"PlaneGeometry.outer_equitri","text":"outer_equitri(A, B, C)\n\nFind the outer equilateral triangle of Triangle(A, B, C) which is incident to Edge(A, B).\n\n\n\n\n\n","category":"function"},{"location":"definition/triangle/#Source-Code-3","page":"Triangles","title":"Source Code","text":"","category":"section"},{"location":"definition/triangle/#","page":"Triangles","title":"Triangles","text":"@code_md outer_equitri(Point(), Point(), Point()) # hide","category":"page"},{"location":"definition/triangle/#Picture-2","page":"Triangles","title":"Picture","text":"","category":"section"},{"location":"definition/triangle/#","page":"Triangles","title":"Triangles","text":"tri = Triangle(A, B, C)\ntri_out = outer_equitri(A, B, C)\nscatter(shape([A, B, C]), leg=false, color=:red, \n    series_annotations = text.([\"A\", \"B\", \"C\"], :bottom))\nplot!(tri_out, leg=false, fill=(0, :pink), aspect_ratio=:equal, fillalpha= 0.7)\nplot!(tri, fill=(0, :green), aspect_ratio=:equal, fillalpha= 0.2)","category":"page"},{"location":"definition/triangle/#All-Three-Outer-Equilateral-Triangles-1","page":"Triangles","title":"All Three Outer Equilateral Triangles","text":"","category":"section"},{"location":"definition/triangle/#","page":"Triangles","title":"Triangles","text":"outer_equitriangles","category":"page"},{"location":"definition/triangle/#PlaneGeometry.outer_equitriangles","page":"Triangles","title":"PlaneGeometry.outer_equitriangles","text":"outer_equitriangles(📐️)\n\nFind all three outer equilateral triangles of the triangle 📐️.\n\n\n\n\n\n","category":"function"},{"location":"definition/triangle/#Source-Code-4","page":"Triangles","title":"Source Code","text":"","category":"section"},{"location":"definition/triangle/#","page":"Triangles","title":"Triangles","text":"@code_md outer_equitriangles(Triangle()) # hide","category":"page"},{"location":"definition/triangle/#Picture-3","page":"Triangles","title":"Picture","text":"","category":"section"},{"location":"definition/triangle/#","page":"Triangles","title":"Triangles","text":"tri_out = outer_equitriangles(tri)\nscatter(shape([A, B, C]), leg=false, color=:red, \n    series_annotations = text.([\"A\", \"B\", \"C\"], :bottom))\nfor t in tri_out\n    plot!(t, leg=false, fill=(0, :pink), aspect_ratio=:equal, fillalpha= 0.7)\nend\nplot!(tri, fill=(0, :green), aspect_ratio=:equal, fillalpha= 0.2)","category":"page"},{"location":"definition/triangle/#Median-1","page":"Triangles","title":"Median","text":"","category":"section"},{"location":"definition/triangle/#","page":"Triangles","title":"Triangles","text":"median","category":"page"},{"location":"definition/triangle/#PlaneGeometry.median","page":"Triangles","title":"PlaneGeometry.median","text":"median(A::Point, B::Point, C::Point)\n\nFind the edge from the midpoint of A and B to C.\n\n\n\n\n\n","category":"function"},{"location":"definition/triangle/#Source-Code-5","page":"Triangles","title":"Source Code","text":"","category":"section"},{"location":"definition/triangle/#","page":"Triangles","title":"Triangles","text":"@code_md median(Point(), Point(), Point()) # hide","category":"page"},{"location":"definition/triangle/#Picture-4","page":"Triangles","title":"Picture","text":"","category":"section"},{"location":"definition/triangle/#","page":"Triangles","title":"Triangles","text":"me = median(A, B, C)\nmid = midpoint(A, B)\nscatter(shape([A, B, C, mid]), leg=false, color=:red, \n    series_annotations = text.([\"A\", \"B\", \"C\", \"mid\"], :bottom))\nplot!(me, color=:orange)\nplot!(tri, fill=(0, :green), aspect_ratio=:equal, fillalpha= 0.2)","category":"page"},{"location":"theorem/Napoleon/#Napoleon's-Theorem-1","page":"Napoleon","title":"Napoleon's Theorem","text":"","category":"section"},{"location":"theorem/Napoleon/#","page":"Napoleon","title":"Napoleon","text":"using \n    PlaneGeometry, \n    PlaneGeometry.Theorems, \n    PlaneGeometry.Theorems.Napoleon,\n    Plots","category":"page"},{"location":"theorem/Napoleon/#","page":"Napoleon","title":"Napoleon","text":"Pages = [\"Napoleon.md\"]","category":"page"},{"location":"theorem/Napoleon/#The-Theorem-1","page":"Napoleon","title":"The Theorem","text":"","category":"section"},{"location":"theorem/Napoleon/#","page":"Napoleon","title":"Napoleon","text":"PlaneGeometry.Theorems.Napoleon","category":"page"},{"location":"theorem/Napoleon/#PlaneGeometry.Theorems.Napoleon","page":"Napoleon","title":"PlaneGeometry.Theorems.Napoleon","text":"Napoleon' theorem  states that if equilateral triangles are constructed on the sides of any triangle, either all outward or all inward, the lines connecting the centres of those equilateral triangles themselves form an equilateral triangle.\n\n\n\n\n\n","category":"module"},{"location":"theorem/Napoleon/#","page":"Napoleon","title":"Napoleon","text":"(Image: napoleon-plot-1.svg)","category":"page"},{"location":"theorem/Napoleon/#Finding-the-Napoleon-Triangle-1","page":"Napoleon","title":"Finding the Napoleon Triangle","text":"","category":"section"},{"location":"theorem/Napoleon/#","page":"Napoleon","title":"Napoleon","text":"Given a triangle, to find its Napoleon triangle, we use the following function.","category":"page"},{"location":"theorem/Napoleon/#","page":"Napoleon","title":"Napoleon","text":"napoleon_tri","category":"page"},{"location":"theorem/Napoleon/#PlaneGeometry.Theorems.Napoleon.napoleon_tri","page":"Napoleon","title":"PlaneGeometry.Theorems.Napoleon.napoleon_tri","text":"napoleon_tri(📐️)\n\nFind the triangle that connects the center of three outer equilateral triangles of 📐️.\n\n\n\n\n\n","category":"function"},{"location":"theorem/Napoleon/#","page":"Napoleon","title":"Napoleon","text":"@code_md napoleon_tri(Triangle()) # hide","category":"page"},{"location":"theorem/Napoleon/#Examples-1","page":"Napoleon","title":"Examples","text":"","category":"section"},{"location":"theorem/Napoleon/#","page":"Napoleon","title":"Napoleon","text":"We can check if the theorem holds a particular triangle with napoleon_draw.","category":"page"},{"location":"theorem/Napoleon/#","page":"Napoleon","title":"Napoleon","text":"napoleon_draw(::Triangle)","category":"page"},{"location":"theorem/Napoleon/#PlaneGeometry.Theorems.Napoleon.napoleon_draw-Tuple{Triangle}","page":"Napoleon","title":"PlaneGeometry.Theorems.Napoleon.napoleon_draw","text":"napoleon_draw(📐️::Triangle, labels='A':'C')\n\nVerify Napoleon's theorem for the triangle 📐️.  The function works the same ways as napoleon_tri but return (🖼️, hold) where 🖼️ is a plot and hold indicates where the theorem holds.\n\n\n\n\n\n","category":"method"},{"location":"theorem/Napoleon/#","page":"Napoleon","title":"Napoleon","text":"A = Point(0,0); B = Point(1, 3); C = Point(4,2)\nplt, hold = napoleon_draw(A, B, C)\ndoes_thmhold(hold)\nsavefig(\"napoleon-plot-1.svg\"); nothing # hide","category":"page"},{"location":"theorem/Napoleon/#","page":"Napoleon","title":"Napoleon","text":"(Image: napoleon-plot-1.svg)","category":"page"},{"location":"theorem/Napoleon/#","page":"Napoleon","title":"Napoleon","text":"To be sure that we are not just lucky, we can check if the theorem also holds for a random triangle with napoleon_rand.","category":"page"},{"location":"theorem/Napoleon/#","page":"Napoleon","title":"Napoleon","text":"napoleon_rand()","category":"page"},{"location":"theorem/Napoleon/#PlaneGeometry.Theorems.Napoleon.napoleon_rand-Tuple{}","page":"Napoleon","title":"PlaneGeometry.Theorems.Napoleon.napoleon_rand","text":"napoleon_rand()\n\nVerify Napoleon's theorem for a random triangle.\n\n\n\n\n\n","category":"method"},{"location":"theorem/Napoleon/#","page":"Napoleon","title":"Napoleon","text":"plt, hold = napoleon_rand()\ndoes_thmhold(hold)\nsavefig(\"napoleon-plot-2.svg\"); nothing # hide","category":"page"},{"location":"theorem/Napoleon/#","page":"Napoleon","title":"Napoleon","text":"(Image: napoleon-plot-2.svg)","category":"page"},{"location":"theorem/Napoleon/#","page":"Napoleon","title":"Napoleon","text":"plt, hold = napoleon_rand()\ndoes_thmhold(hold)\nsavefig(\"napoleon-plot-3.svg\"); nothing # hide","category":"page"},{"location":"theorem/Napoleon/#","page":"Napoleon","title":"Napoleon","text":"(Image: napoleon-plot-3.svg)","category":"page"},{"location":"theorem/Napoleon/#","page":"Napoleon","title":"Napoleon","text":"So it looks like the theorem should be true 😁️!","category":"page"},{"location":"theorem/Napoleon/#Proof-1","page":"Napoleon","title":"Proof","text":"","category":"section"},{"location":"theorem/Napoleon/#","page":"Napoleon","title":"Napoleon","text":"Of course, examples are not proofs. But what are proofs? Often a proof is just a computation done with symbols instead of fixed numbers.","category":"page"},{"location":"theorem/Napoleon/#","page":"Napoleon","title":"Napoleon","text":"Note that symbols, e.g., x, is different from Julia's variables. It does not hold any value but is just a placeholder in a computation. This means if a symbolic computation with x is valid, then then the computation still holds if we replace x with any number.","category":"page"},{"location":"theorem/Napoleon/#","page":"Napoleon","title":"Napoleon","text":"First, note that we can assume that A = (00), B is on the positive half of y-axis, and C is in the right half of the plane. In other words, a triangle looking like this.","category":"page"},{"location":"theorem/Napoleon/#","page":"Napoleon","title":"Napoleon","text":"plt, hold = napoleon_draw(0, 0, 0, 3, 3, 1)\nplt","category":"page"},{"location":"theorem/Napoleon/#","page":"Napoleon","title":"Napoleon","text":"We can always move a triangle so it satisfies these conditions.","category":"page"},{"location":"theorem/Napoleon/#","page":"Napoleon","title":"Napoleon","text":"Then proving the theorem we can create a Triange whose vertices have coordinates which are symbols provided by SymPy. Then we can just use napoleon_tri to find its Napoleon triangle and check if it is equilateral. We put the code in the following function.","category":"page"},{"location":"theorem/Napoleon/#","page":"Napoleon","title":"Napoleon","text":"@code_md napoleon_proof() # hide","category":"page"},{"location":"theorem/Napoleon/#","page":"Napoleon","title":"Napoleon","text":"And the final proof is a simple as one line of code ✌️.","category":"page"},{"location":"theorem/Napoleon/#","page":"Napoleon","title":"Napoleon","text":"does_thmhold(napoleon_proof())","category":"page"},{"location":"thanks/#Acknowledgement-1","page":"Ackowledgement","title":"Acknowledgement","text":"","category":"section"},{"location":"thanks/#","page":"Ackowledgement","title":"Ackowledgement","text":"(Image: Thank you)","category":"page"},{"location":"thanks/#","page":"Ackowledgement","title":"Ackowledgement","text":"In building the package PlaneGeometry.jl and this website, I was helped by many people form the Julia community, in particular, Thibaut Lienart and John Verzani. I want thank them and everyone who has contributed in open source software movement. Your generosity is appreciated!","category":"page"},{"location":"util/#Utility-functions-1","page":"Utitlies","title":"Utility functions","text":"","category":"section"},{"location":"util/#","page":"Utitlies","title":"Utitlies","text":"This section describes utility functions.","category":"page"},{"location":"util/#","page":"Utitlies","title":"Utitlies","text":"Pages = [\"util.md\"]","category":"page"},{"location":"util/#","page":"Utitlies","title":"Utitlies","text":"Modules = [PlaneGeometry]\nPages   = [\"util.jl\"]","category":"page"},{"location":"util/#PlaneGeometry.does_thmhold-Tuple{Any}","page":"Utitlies","title":"PlaneGeometry.does_thmhold","text":"does_thmhold(hold)\n\nCheck if hold is true.\n\nExamples\n\njulia> does_thmhold(true)\nTheorem holds! 😀️\n\njulia> does_thmhold(false)\nTheorem does not holds! 😱️\n\n\n\n\n\n","category":"method"},{"location":"util/#PlaneGeometry.@code_md-Tuple{Any}","page":"Utitlies","title":"PlaneGeometry.@code_md","text":"@code_md(expr)\n\nReturn the source code for evaluating expr in markdown form.\n\n\n\n\n\n","category":"macro"},{"location":"definition/distance/#Distances-1","page":"Distance","title":"Distances","text":"","category":"section"},{"location":"definition/distance/#Euclidean-distance-1","page":"Distance","title":"Euclidean distance","text":"","category":"section"},{"location":"definition/distance/#","page":"Distance","title":"Distance","text":"using PlaneGeometry, Plots\nusing PlaneGeometry: A, B, C","category":"page"},{"location":"definition/distance/#","page":"Distance","title":"Distance","text":"distance","category":"page"},{"location":"definition/distance/#PlaneGeometry.distance","page":"Distance","title":"PlaneGeometry.distance","text":"distance(A, B)\n\nCompute the euclidean distance between A and B, which is the \"ordinary\" straight-line distance between two points.\n\nExamples\n\njulia> distance(Point(0, 0), Point(3,4))\n5\n\n\n\n\n\n","category":"function"},{"location":"definition/distance/#Source-Code-1","page":"Distance","title":"Source Code","text":"","category":"section"},{"location":"definition/distance/#","page":"Distance","title":"Distance","text":"@code_md distance(Point(), Point()) # hide","category":"page"},{"location":"definition/distance/#Squared-Euclidean-distance-1","page":"Distance","title":"Squared Euclidean distance","text":"","category":"section"},{"location":"definition/distance/#","page":"Distance","title":"Distance","text":"squaredist","category":"page"},{"location":"definition/distance/#PlaneGeometry.squaredist","page":"Distance","title":"PlaneGeometry.squaredist","text":"squaredist(A, B)\n\nCompute the square of the euclidean distance between A and B.\n\nExamples\n\njulia> squaredist(Point(0, 0), Point(2,2))\n8\n\n\n\n\n\n","category":"function"},{"location":"definition/distance/#Source-Code-2","page":"Distance","title":"Source Code","text":"","category":"section"},{"location":"definition/distance/#","page":"Distance","title":"Distance","text":"@code_md squaredist(Point(), Point()) # hide","category":"page"},{"location":"definition/distance/#Midpoint-of-an-edge-1","page":"Distance","title":"Midpoint of an edge","text":"","category":"section"},{"location":"definition/distance/#","page":"Distance","title":"Distance","text":"midpoint","category":"page"},{"location":"definition/distance/#PlaneGeometry.midpoint","page":"Distance","title":"PlaneGeometry.midpoint","text":"midpoint(A, B)\n\nFind the midpoint between A and B.\n\nExamples\n\njulia> midpoint(Point(0, 0), Point(2,4))\nPoint(1, 2)\n\n\n\n\n\n","category":"function"},{"location":"definition/distance/#Source-Code-3","page":"Distance","title":"Source Code","text":"","category":"section"},{"location":"definition/distance/#","page":"Distance","title":"Distance","text":"@code_md midpoint(Point(), Point()) # hide","category":"page"},{"location":"definition/distance/#Picture-1","page":"Distance","title":"Picture","text":"","category":"section"},{"location":"definition/distance/#","page":"Distance","title":"Distance","text":"plot(Edge(A, B), leg=false, color=:orange)\nmid = midpoint(A, B)\nscatter!(shape([A, B, mid]), leg=false, aspect_ratio=:equal, \n    color=[:red, :red, :green], series_annotations = text.([\"A\", \"B\", \"mid\"], :bottom))","category":"page"},{"location":"definition/distance/#Concurrent-Point-1","page":"Distance","title":"Concurrent Point","text":"","category":"section"},{"location":"definition/distance/#","page":"Distance","title":"Distance","text":"concurrent(::Vector{Edge})","category":"page"},{"location":"definition/distance/#PlaneGeometry.concurrent-Tuple{Array{Edge,1}}","page":"Distance","title":"PlaneGeometry.concurrent","text":"concurrent(edgelist::Vector{Edge})\n\nFind the point where all edges (lines) in edgelist intersect if such point exists. Return nothing otherwise.\n\nExamples\n\njulia> concurrent([Edge(Point(0,1), Point(1,1)), Edge(Point(0,1), Point(1,0))])\nPoint(0, 1)\n\n\n\n\n\n","category":"method"},{"location":"definition/distance/#","page":"Distance","title":"Distance","text":"concurrent(::Edge, ::Edge)","category":"page"},{"location":"definition/distance/#PlaneGeometry.concurrent-Tuple{Edge,Edge}","page":"Distance","title":"PlaneGeometry.concurrent","text":"concurrent(e1::Edge, e2::Edge)\n\nFind the point the edges e1 and e2 intersect if such point exists. Return nothing otherwise.\n\nExamples\n\njulia> concurrent(Edge(Point(0,1), Point(1,1)), Edge(Point(0,1), Point(1,0)))\nPoint(0, 1)\n\n\n\n\n\n","category":"method"},{"location":"definition/distance/#Source-Code-4","page":"Distance","title":"Source Code","text":"","category":"section"},{"location":"definition/distance/#","page":"Distance","title":"Distance","text":"@code_md concurrent(Edge[]) # hide","category":"page"},{"location":"definition/distance/#Picture-2","page":"Distance","title":"Picture","text":"","category":"section"},{"location":"definition/distance/#","page":"Distance","title":"Distance","text":"elist = map(i->median(circshift([A, B, C], i)...), 0:2)\ncpt = concurrent(elist)\nplot(Triangle(A, B, C), fill=(0, :green), aspect_ratio=:equal, fillalpha= 0.2)\nfor e in elist\n    plot!(e, leg=false, color=:orange)\nend\nscatter!(shape([A, B, C, cpt]), \n    leg=false,\n    aspect_ratio=:equal, \n    color=[:red, :red, :red, :green], \n    series_annotations = text.([\"A\", \"B\", \"C\", \"cpt\"], :bottom))","category":"page"},{"location":"definition/#Geometric-Definitions-1","page":"Summary","title":"Geometric Definitions","text":"","category":"section"},{"location":"definition/#","page":"Summary","title":"Summary","text":"Here are the geometric concepts defined in PlaneGeometry.jl.","category":"page"},{"location":"definition/#","page":"Summary","title":"Summary","text":"Pages = [\n    \"elementary.md\",\n    \"distance.md\",\n    \"triangle.md\",\n    \"circle.md\",\n    ]","category":"page"},{"location":"theorem/Ceva/#Ceva's-Theorem-1","page":"Ceva","title":"Ceva's Theorem","text":"","category":"section"},{"location":"theorem/Ceva/#","page":"Ceva","title":"Ceva","text":"using \n    PlaneGeometry, \n    PlaneGeometry.Theorems, \n    PlaneGeometry.Theorems.Ceva,\n    Plots","category":"page"},{"location":"theorem/Ceva/#","page":"Ceva","title":"Ceva","text":"Pages = [\"Ceva.md\"]","category":"page"},{"location":"theorem/Ceva/#The-Theorem-1","page":"Ceva","title":"The Theorem","text":"","category":"section"},{"location":"theorem/Ceva/#","page":"Ceva","title":"Ceva","text":"PlaneGeometry.Theorems.Ceva","category":"page"},{"location":"theorem/Ceva/#PlaneGeometry.Theorems.Ceva","page":"Ceva","title":"PlaneGeometry.Theorems.Ceva","text":"Ceva's theorem is a theorem about triangles in plane geometry. Given a triangle ABC, let the lines AO, BO and CO be drawn from the vertices to a common point O (not on one of the sides of ABC), to meet opposite sides at D, E and F respectively.  (The segments AD, BE, and CF are known as cevians.) Then, using signed lengths of segments,\n\nBD times CE times AF = DC times EA times FB\n\n\n\n\n\n","category":"module"},{"location":"theorem/Ceva/#","page":"Ceva","title":"Ceva","text":"(Image: ceva-plot-1.svg)","category":"page"},{"location":"theorem/Ceva/#Finding-the-ceva-and-medians-1","page":"Ceva","title":"Finding the ceva and medians","text":"","category":"section"},{"location":"theorem/Ceva/#","page":"Ceva","title":"Ceva","text":"ceva","category":"page"},{"location":"theorem/Ceva/#PlaneGeometry.Theorems.Ceva.ceva","page":"Ceva","title":"PlaneGeometry.Theorems.Ceva.ceva","text":"ceva(Triangle(A, B, C), O)\n\nReturns ([A, B, C, D, E, F], [BD, DC, CE, EA, AF, FB]). \n\n\n\n\n\n","category":"function"},{"location":"theorem/Ceva/#","page":"Ceva","title":"Ceva","text":"@code_md ceva(Triangle(), Point()) # hide","category":"page"},{"location":"theorem/Ceva/#Examples-1","page":"Ceva","title":"Examples","text":"","category":"section"},{"location":"theorem/Ceva/#","page":"Ceva","title":"Ceva","text":"ceva_draw(::Triangle, ::Point)","category":"page"},{"location":"theorem/Ceva/#PlaneGeometry.Theorems.Ceva.ceva_draw-Tuple{Triangle,Point}","page":"Ceva","title":"PlaneGeometry.Theorems.Ceva.ceva_draw","text":"ceva_draw(📐️, O)\n\nVerify Ceva's Theorem for the triangle 📐️.\n\n\n\n\n\n","category":"method"},{"location":"theorem/Ceva/#","page":"Ceva","title":"Ceva","text":"A = Point(0,0); B = Point(1, 3); C = Point(4,2); O = Point(2, 2)\nplt, hold = ceva_draw(Triangle(A, B, C), O)\ndoes_thmhold(hold)\nsavefig(\"ceva-plot-1.svg\"); nothing # hide","category":"page"},{"location":"theorem/Ceva/#","page":"Ceva","title":"Ceva","text":"(Image: ceva-plot-1.svg)","category":"page"},{"location":"theorem/Ceva/#","page":"Ceva","title":"Ceva","text":"ceva_rand()","category":"page"},{"location":"theorem/Ceva/#PlaneGeometry.Theorems.Ceva.ceva_rand-Tuple{}","page":"Ceva","title":"PlaneGeometry.Theorems.Ceva.ceva_rand","text":"ceva_rand()\n\nVerify Ceva's Theorem for a random triangle.\n\n\n\n\n\n","category":"method"},{"location":"theorem/Ceva/#","page":"Ceva","title":"Ceva","text":"plt, hold = ceva_rand()\ndoes_thmhold(hold)\nsavefig(\"ceva-plot-2.svg\"); nothing # hide","category":"page"},{"location":"theorem/Ceva/#","page":"Ceva","title":"Ceva","text":"(Image: ceva-plot-2.svg)","category":"page"},{"location":"theorem/Ceva/#","page":"Ceva","title":"Ceva","text":"plt, hold = ceva_rand()\ndoes_thmhold(hold)\nsavefig(\"ceva-plot-3.svg\"); nothing # hide","category":"page"},{"location":"theorem/Ceva/#","page":"Ceva","title":"Ceva","text":"(Image: ceva-plot-3.svg)","category":"page"},{"location":"theorem/Ceva/#Proof-1","page":"Ceva","title":"Proof","text":"","category":"section"},{"location":"theorem/Ceva/#","page":"Ceva","title":"Ceva","text":"@code_md ceva_proof() # hide","category":"page"},{"location":"theorem/Ceva/#","page":"Ceva","title":"Ceva","text":"does_thmhold(ceva_proof())","category":"page"},{"location":"theorem/#Theorems-1","page":"Summary","title":"Theorems","text":"","category":"section"},{"location":"theorem/#","page":"Summary","title":"Summary","text":"Here are the theorems in plane geometry that can be proved by PlaneGeometry.jl. I will add more in the future 😉️.","category":"page"},{"location":"theorem/#","page":"Summary","title":"Summary","text":"Pages = [\n    \"Napoleon.md\",\n    \"Centroid.md\",\n    \"Ceva.md\",\n    ]","category":"page"},{"location":"#Introduction-1","page":"Introduction","title":"Introduction","text":"","category":"section"},{"location":"#","page":"Introduction","title":"Introduction","text":"This website originated from a blog post I wrote. I have since cleaned up the code and put everything into a Julia package PlaneGeometry.jl.","category":"page"},{"location":"#A-book-from-the-future-1","page":"Introduction","title":"A book from the future","text":"","category":"section"},{"location":"#","page":"Introduction","title":"Introduction","text":"When I first got interested in computer algebra systems (CAS), I came across a book","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"(Image: PLANE GEOMETRY: AN ELEMENTARY TEXTBOOK BY SHALOSH B. EKHAD)","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"Of course, Shalosh is not really a time traveler from a future. He/she/it is the computer of Doron Zeilberger, a mathematician who has been advocating for the use of computers in mathematics for decades. He often writes articles and papers with Shalosh named as a co-author.","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"(Image: Doron Zeilberger)","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"<center>\n    Doron Zeilberge (circa 2005) from <a\n    href=\"https://en.wikipedia.org/wiki/Doron_Zeilberger\">Wikipeida</a>\n</center>","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"The book title is just a joke 😀️. What Zeilberger really wants to say is that in the future, kids won't need to learn to do (at least) plane geometry with pencil and paper any more. Their homework will be writing codes so their computer 🤖️ will do the mathematics for them.","category":"page"},{"location":"#A-new-book-with-Julia-1","page":"Introduction","title":"A new book with Julia","text":"","category":"section"},{"location":"#","page":"Introduction","title":"Introduction","text":"(Image: Julia)","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"Zeilberger's book was created with Maple, a powerful commercial CAS. But in principle, this can be done in any programming languages, e.g., Julia, which is a fast, dynamically and optionally typed, easy-to-use, open-sourced modern programming language. Its syntax is similar to Python, but superior in my opinion 🤓️.  ","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"Admittedly, Julia is not a CAS. But with the package SymPy.jl handling symbolic computation and Plots.jl drawing nice pictures, Julia is a reasonably good choice for writing a book like the one Zeilberger wrote.","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"So I have written a Julia package PlaneGeometry.jl to create Zeilberger's book. The purpose is mainly to demonstrate the use of various Julia packages, and for myself to learn a bit more about programming in Julia.","category":"page"},{"location":"#PlaneGeometry.jl-1","page":"Introduction","title":"PlaneGeometry.jl","text":"","category":"section"},{"location":"#","page":"Introduction","title":"Introduction","text":"(Image: PlaneGeometry)","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"You can learn how to install Julia here. I will assume that you have already done that and learned a bit about how to use Julia.","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"To install PlaneGeometry.jl, open the Julia REPL and run the following code.","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"using Pkg; \nPkg.activate(\".\"); \nPkg.add(PackageSpec(url=\"https://github.com/newptcai/PlaneGeometry.jl\"))","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"After that, you can load PlaneGeometry.jl in to REPL by","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"using PlaneGeometry","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"My original post is about proving Napoleon's theorem. You can find a revised version using PlaneGeometry.jl here.  Other theorems proved in this packaged are list here.  There is also a summary of geometric definitions that we need.","category":"page"}]
}