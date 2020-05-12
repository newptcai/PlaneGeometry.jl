using CodeTracking, Markdown

"""
    does_thmhold(hold)

Check if `hold` is true.

# Examples

```jldoctest
julia> does_thmhold(true)
Theorem holds! 😀️
```

```jldoctest
julia> does_thmhold(false)
Theorem does not holds! 😱️
```
"""
function does_thmhold(hold)
if(hold == true)
    println("Theorem holds! 😀️")
else
    println("Theorem does not holds! 😱️")
end
end

"""
    @code_md(expr)

Return the source code for evaluating `expr` in markdown form.
"""
macro code_md(expr)
    quote
        Markdown.parse(
        """
        ```julia
        $(@code_string $expr)
        ```
        """)
    end
end
