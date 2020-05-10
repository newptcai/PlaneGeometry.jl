# Thanks @tlienart

using 
    Markdown, 
    Franklin, 
    Plots, 
    PlaneGeometry, 
    PlaneGeometry.GeoPlots,
    PlaneGeometry.Theorems,
    CodeTracking

function hfun_doc(params)
    fname = params[1]
    head = length(params) > 1 ? params[2] : fname
    #doc = eval(Meta.parse("using PlaneGeometry; @doc PlaneGeometry.$fname"))
    doc = eval(Meta.parse("@doc $fname"))
    txt = Markdown.plain(doc)
    # possibly further processing here
    #body = Markdown.html(Markdown.parse(txt))
    #body = fd2html(txt)
    body = fd2html(txt, internal=true)
    return """
      <div class="docstring">
          <h2 class="doc-header" id="$fname">
            <a href="#$fname">$head</a>
            </h2>
          <div class="doc-content">$body</div>
      </div>
    """
end

function hfun_code(params)
    expr = join(params)
    srccode = eval(Meta.parse("@code_string $expr"))
    md = """
    # Source code
    ```julia 
    $srccode
    ```
    """
    body = fd2html(md, internal=true)
    return """
    <div class="docstring">
        <div class="doc-content">
            $body
        </div>
    </div>
    """
end
