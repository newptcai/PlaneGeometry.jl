@def title = "Theorems"
@def hasmath = true

# List of theorems

The following is a list of theorems that can be proved in PlaneGeometry.jl.

```julia:./toc
#hideall
deflist = ("Napoleon", )
println("@@list")
for name in deflist
    println("""
    * [$name](/theorems/$name)
    """)
end
println("@@")
```
\textoutput{./toc}

Will add more in the future. Building this website takes much longer than proving a theorem. 😑️
