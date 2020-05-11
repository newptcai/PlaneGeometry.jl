# This file was generated, do not modify it. # hide
#hideall
deflist = ("elementary", "distances", "triangles", "circles")
println("@@list")
for name in deflist
    println("""
    * [$name](/definitions/$name)
    """)
end
println("@@")