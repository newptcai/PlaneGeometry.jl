<!--
Add here global page variables to use throughout your
website.
The website_* must be defined for the RSS to work
-->
@def website_title = "Plane Geometry in Julia"
@def website_descr = "A web geometry textbook created in Julia"
@def website_url   = "https://newptcai.github.io/PlaneGeometryInJulia/"
def @def prepath = "PlaneGeometry.jl"

@def author = "Xing Shi Cai"

<!--
Add here global latex commands to use throughout your
pages. It can be math commands but does not need to be.
For instance:
* \newcommand{\phrase}{This is a long phrase to copy.}
-->
\newcommand{\R}{\mathbb R}
\newcommand{\scal}[1]{\langle #1 \rangle}

\newcommand{\example}[2]{
```julia:./!#1 
#2 
savefig(joinpath(@OUTPUT, "!#1.svg")) # hide
```
\output{./!#1}
\fig{./!#1}
}

\newcommand{\docpic}[2]{
@@docstring
@@doc-content
# Picture
```julia:./!#1 
#2 
savefig(joinpath(@OUTPUT, "!#1.svg")) # hide
```
\output{./!#1}
\fig{./!#1}
@@
@@
}

\newcommand{\showcode}[2]{
```julia
!#2
```
```julia:./!#1 
#hideall
print((@code_string !#2))
```
\output{./!#1}
}

\newcommand{\toclist}[2]{
```julia:./!#1
#hideall
println("@@list")
for name in !#2
    println("""
    * [$name](#$name)
    """)
end
println("@@")
```
\textoutput{./!#1}
}
