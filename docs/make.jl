using Documenter, PlaneGeometry, CodeTracking

DocMeta.setdocmeta!(PlaneGeometry, :DocTestSetup, :(using PlaneGeometry); recursive=true)

makedocs(sitename="Plane Geometry in Julia", 
         modules = [PlaneGeometry],
         pages = [
                  "index.md",
                  "Geometric Definitions" => 
                  [
                   "Summary" => "definition/index.md",
                   "Elementary" => "definition/elementary.md",
                   "Distance" => "definition/distance.md",
                   "Triangles" => "definition/triangle.md",
                   "Circles" => "definition/circle.md",
                  ],
                  "Theorems" => 
                  [
                   "Summary" => "theorem/index.md",
                   "Napoleon" => "theorem/Napoleon.md",
                   "Centroid" => "theorem/Centroid.md",
                   "Ceva" => "theorem/Ceva.md",
                  ],
                  "Utitlies" => "util.md",
                  "Ackowledgement" => "thanks.md",
                 ],
         format = Documenter.HTML(assets = ["assets/custom.css"]),
         doctest = true
        )
