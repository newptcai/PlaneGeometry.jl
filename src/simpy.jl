# ------------------------------------------------------------------------------
# Make SymPy work better
# -------------------------------------------------------------------------------
import SymPy: simplify

# If a number is passed to simplify, then simplify return it. SymPy.simplify now only takes symbolic
# expressions.
# Will be removed when SymPy.jl update.
simplify(val) = val
