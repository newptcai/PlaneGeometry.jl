# This file was generated, do not modify it. # hide
#hideall
deflist = ("Napoleon", )
println("@@list")
for name in deflist
    println("""
    * [$name](/theorems/$name)
    """)
end
println("@@")