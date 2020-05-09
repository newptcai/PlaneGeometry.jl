"""Theorems that we can prove with this package"""
module Theorems

export does_thmhold

include("Napoleon.jl")

"""
# Function

    does_thmhold(hold)

Check if `hold` is true.
"""
function does_thmhold(hold)
if(hold == true)
    println("Theorem holds! 😀️")
else
    println("Theorem does not holds! 😱️")
end
end

end
