@def title = "Definitions"
@def hasmath = true
@def hascode = true
<!-- Note: by default hasmath == true and hascode == false. You can change this in
the config file by setting hasmath = false for instance and just setting it to true
where appropriate -->

# Definition Category

```julia:./toc0
#hideall
deflist = ("elementary", "distances", "triangles", "circles")
println("@@list")
for name in deflist
    println("""
    * [$name](/definitions/$name)
    """)
end
println("@@")
```
\textoutput{./toc0}
