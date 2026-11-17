import type { LatexDocumentNode } from "@mcpab/katex";

export const latexDocument = {
  id: "document-1",
  type: "document",
  intro: [],
  sections: [
    {
      id: "section-1",
      type: "section",
      title: [
        {
          id: "text-1",
          type: "text",
          body: "Introduction"
        }
      ],
      intro: [
        {
          id: "paragraph-1",
          type: "paragraph",
          children: [
            {
              id: "text-2",
              type: "text",
              body: "When we first approach the study of physics, we begin with an elementary"
            },
            {
              id: "text-3",
              type: "text",
              body: " "
            },
            {
              id: "text-4",
              type: "text",
              body: "treatment of vectors. We learn that a vector has a direction and a magnitude"
            },
            {
              id: "text-5",
              type: "text",
              body: " "
            },
            {
              id: "text-6",
              type: "text",
              body: "and can be applied at a point in space. A typical example is the arrow from"
            },
            {
              id: "text-7",
              type: "text",
              body: " "
            },
            {
              id: "inlineMath-1",
              type: "inlineMath",
              body: "x",
              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">x</span></span></span></span>"
            },
            {
              id: "text-8",
              type: "text",
              body: " to "
            },
            {
              id: "inlineMath-2",
              type: "inlineMath",
              body: "y",
              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span></span></span></span>"
            },
            {
              id: "text-9",
              type: "text",
              body: ", which represents the displacement from one point to the other."
            }
          ]
        },
        {
          id: "paragraph-2",
          type: "paragraph",
          children: [
            {
              id: "text-10",
              type: "text",
              body: "We are then taught that we can slide the arrow parallel to itself and place"
            },
            {
              id: "text-11",
              type: "text",
              body: " "
            },
            {
              id: "text-12",
              type: "text",
              body: "its tail at a different point. Its endpoints change, yet it represents the"
            },
            {
              id: "text-13",
              type: "text",
              body: " "
            },
            {
              id: "text-14",
              type: "text",
              body: "same displacement. We get used to doing this so early that we rarely stop"
            },
            {
              id: "text-15",
              type: "text",
              body: " "
            },
            {
              id: "text-16",
              type: "text",
              body: "to ask what it means for a vector to act at a point. This rather mysterious"
            },
            {
              id: "text-17",
              type: "text",
              body: " "
            },
            {
              id: "text-18",
              type: "text",
              body: "association between vectors and points is easy to gloss over in elementary"
            },
            {
              id: "text-19",
              type: "text",
              body: " "
            },
            {
              id: "text-20",
              type: "text",
              body: "physics, and we continue to use it throughout our studies, often without"
            },
            {
              id: "text-21",
              type: "text",
              body: " "
            },
            {
              id: "text-22",
              type: "text",
              body: "ever making it explicit. "
            }
          ]
        },
        {
          id: "paragraph-3",
          type: "paragraph",
          children: [
            {
              id: "text-23",
              type: "text",
              body: "During our initial studies, we also learn to add vectors using the"
            },
            {
              id: "text-24",
              type: "text",
              body: " "
            },
            {
              id: "text-25",
              type: "text",
              body: "parallelogram rule. For displacements, the same sum can be read directly"
            },
            {
              id: "text-26",
              type: "text",
              body: " "
            },
            {
              id: "text-27",
              type: "text",
              body: "by following two arrows head to tail. If we go from "
            },
            {
              id: "inlineMath-3",
              type: "inlineMath",
              body: "x",
              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">x</span></span></span></span>"
            },
            {
              id: "text-28",
              type: "text",
              body: " to "
            },
            {
              id: "inlineMath-4",
              type: "inlineMath",
              body: "z",
              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span></span></span></span>"
            },
            {
              id: "text-29",
              type: "text",
              body: " and then from"
            },
            {
              id: "text-30",
              type: "text",
              body: " "
            },
            {
              id: "inlineMath-5",
              type: "inlineMath",
              body: "z",
              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span></span></span></span>"
            },
            {
              id: "text-31",
              type: "text",
              body: " to "
            },
            {
              id: "inlineMath-6",
              type: "inlineMath",
              body: "y",
              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span></span></span></span>"
            },
            {
              id: "text-32",
              type: "text",
              body: ", the sum of the two displacements is the displacement from "
            },
            {
              id: "inlineMath-7",
              type: "inlineMath",
              body: "x",
              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">x</span></span></span></span>"
            },
            {
              id: "text-33",
              type: "text",
              body: " "
            },
            {
              id: "text-34",
              type: "text",
              body: "to "
            },
            {
              id: "inlineMath-8",
              type: "inlineMath",
              body: "y",
              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span></span></span></span>"
            },
            {
              id: "text-35",
              type: "text",
              body: ":"
            }
          ]
        },
        {
          id: "displayMath-1",
          type: "displayMath",
          body: "\\overrightarrow{xz} + \\overrightarrow{zy} = \\overrightarrow{xy}.",
          html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0359em;vertical-align:-0.0833em;\"></span><span class=\"mord accent\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9526em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span></span></span><span class=\"svg-align\" style=\"top:-3.4306em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"hide-tail\" style=\"height:0.522em;min-width:0.888em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400em\" height=\"0.522em\" viewBox=\"0 0 400000 522\" preserveAspectRatio=\"xMaxYMin slice\"><path d=\"M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z\"/></svg></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.147em;vertical-align:-0.1944em;\"></span><span class=\"mord accent\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9526em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span></span></span><span class=\"svg-align\" style=\"top:-3.4306em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"hide-tail\" style=\"height:0.522em;min-width:0.888em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400em\" height=\"0.522em\" viewBox=\"0 0 400000 522\" preserveAspectRatio=\"xMaxYMin slice\"><path d=\"M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1944em;\"><span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.147em;vertical-align:-0.1944em;\"></span><span class=\"mord accent\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9526em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span></span></span><span class=\"svg-align\" style=\"top:-3.4306em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"hide-tail\" style=\"height:0.522em;min-width:0.888em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400em\" height=\"0.522em\" viewBox=\"0 0 400000 522\" preserveAspectRatio=\"xMaxYMin slice\"><path d=\"M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1944em;\"><span></span></span></span></span></span><span class=\"mord\">.</span></span></span></span></span>"
        },
        {
          id: "paragraph-4",
          type: "paragraph",
          children: [
            {
              id: "text-36",
              type: "text",
              body: "We use this association again when we set up a coordinate system in"
            },
            {
              id: "text-37",
              type: "text",
              body: " "
            },
            {
              id: "text-38",
              type: "text",
              body: "three-dimensional space. We choose a point "
            },
            {
              id: "inlineMath-9",
              type: "inlineMath",
              body: "o",
              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">o</span></span></span></span>"
            },
            {
              id: "text-39",
              type: "text",
              body: " as the origin, and we use"
            },
            {
              id: "text-40",
              type: "text",
              body: " "
            },
            {
              id: "text-41",
              type: "text",
              body: "vectors to locate every other point relative to it. To specify the"
            },
            {
              id: "text-42",
              type: "text",
              body: " "
            },
            {
              id: "text-43",
              type: "text",
              body: "position of a point "
            },
            {
              id: "inlineMath-10",
              type: "inlineMath",
              body: "x",
              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">x</span></span></span></span>"
            },
            {
              id: "text-44",
              type: "text",
              body: ", we give the vector "
            },
            {
              id: "inlineMath-11",
              type: "inlineMath",
              body: "\\overrightarrow{ox}",
              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.9526em;\"></span><span class=\"mord accent\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9526em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">o</span><span class=\"mord mathnormal\">x</span></span></span><span class=\"svg-align\" style=\"top:-3.4306em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"hide-tail\" style=\"height:0.522em;min-width:0.888em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400em\" height=\"0.522em\" viewBox=\"0 0 400000 522\" preserveAspectRatio=\"xMaxYMin slice\"><path d=\"M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z\"/></svg></span></span></span></span></span></span></span></span></span>"
            },
            {
              id: "text-45",
              type: "text",
              body: " that"
            },
            {
              id: "text-46",
              type: "text",
              body: " "
            },
            {
              id: "text-47",
              type: "text",
              body: "takes us from "
            },
            {
              id: "inlineMath-12",
              type: "inlineMath",
              body: "o",
              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">o</span></span></span></span>"
            },
            {
              id: "text-48",
              type: "text",
              body: " to "
            },
            {
              id: "inlineMath-13",
              type: "inlineMath",
              body: "x",
              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">x</span></span></span></span>"
            },
            {
              id: "text-49",
              type: "text",
              body: ". Conversely, any displacement vector applied at"
            },
            {
              id: "text-50",
              type: "text",
              body: " "
            },
            {
              id: "inlineMath-14",
              type: "inlineMath",
              body: "o",
              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">o</span></span></span></span>"
            },
            {
              id: "text-51",
              type: "text",
              body: " leads to a unique point in space. Once we choose a basis for the"
            },
            {
              id: "text-52",
              type: "text",
              body: " "
            },
            {
              id: "text-53",
              type: "text",
              body: "displacement vectors, the components of "
            },
            {
              id: "inlineMath-15",
              type: "inlineMath",
              body: "\\overrightarrow{ox}",
              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.9526em;\"></span><span class=\"mord accent\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9526em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">o</span><span class=\"mord mathnormal\">x</span></span></span><span class=\"svg-align\" style=\"top:-3.4306em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"hide-tail\" style=\"height:0.522em;min-width:0.888em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400em\" height=\"0.522em\" viewBox=\"0 0 400000 522\" preserveAspectRatio=\"xMaxYMin slice\"><path d=\"M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z\"/></svg></span></span></span></span></span></span></span></span></span>"
            },
            {
              id: "text-54",
              type: "text",
              body: " give the"
            },
            {
              id: "text-55",
              type: "text",
              body: " "
            },
            {
              id: "text-56",
              type: "text",
              body: "coordinates of "
            },
            {
              id: "inlineMath-16",
              type: "inlineMath",
              body: "x",
              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">x</span></span></span></span>"
            },
            {
              id: "text-57",
              type: "text",
              body: "."
            }
          ]
        },
        {
          id: "paragraph-5",
          type: "paragraph",
          children: [
            {
              id: "text-58",
              type: "text",
              body: "The preceding examples suggest that a set of points can acquire an"
            },
            {
              id: "text-59",
              type: "text",
              body: " "
            },
            {
              body: "additional",
              id: "emph-1",
              type: "emph"
            },
            {
              id: "text-60",
              type: "text",
              body: " structure when we associate a vector space with it"
            },
            {
              id: "text-61",
              type: "text",
              body: " "
            },
            {
              id: "text-62",
              type: "text",
              body: "and specify how its vectors act on the points. The points themselves"
            },
            {
              id: "text-63",
              type: "text",
              body: " "
            },
            {
              id: "text-64",
              type: "text",
              body: "can stay the same while the structure changes if we change the vector space. It is the relation"
            },
            {
              id: "text-65",
              type: "text",
              body: " "
            },
            {
              id: "text-66",
              type: "text",
              body: "between the points and the vectors that we are adding."
            }
          ]
        },
        {
          id: "paragraph-6",
          type: "paragraph",
          children: [
            {
              id: "text-67",
              type: "text",
              body: "In ordinary three-dimensional space, we naturally interpret the"
            },
            {
              id: "text-68",
              type: "text",
              body: " "
            },
            {
              id: "text-69",
              type: "text",
              body: "vectors as displacements. This gives us a familiar way to picture"
            },
            {
              id: "text-70",
              type: "text",
              body: " "
            },
            {
              id: "text-71",
              type: "text",
              body: "the relation between points and vectors. But the same"
            },
            {
              id: "text-72",
              type: "text",
              body: " "
            },
            {
              id: "text-73",
              type: "text",
              body: "structure arises elsewhere in mathematics and physics.  Affine geometry takes that"
            },
            {
              id: "text-74",
              type: "text",
              body: " "
            },
            {
              id: "text-75",
              type: "text",
              body: "relation as the starting point and formulates it for an abstract set"
            },
            {
              id: "text-76",
              type: "text",
              body: " "
            },
            {
              id: "text-77",
              type: "text",
              body: "of points and a vector space acting on it. "
            }
          ]
        }
      ],
      subsections: [
        {
          id: "subsection-1",
          type: "subsection",
          title: [
            {
              id: "text-78",
              type: "text",
              body: "Notation and conventions"
            }
          ],
          content: [
            {
              id: "paragraph-7",
              type: "paragraph",
              children: [
                {
                  id: "text-79",
                  type: "text",
                  body: "Before beginning the mathematical development, we establish the notation"
                },
                {
                  id: "text-80",
                  type: "text",
                  body: " "
                },
                {
                  id: "text-81",
                  type: "text",
                  body: "that will be used throughout this essay."
                }
              ]
            },
            {
              id: "paragraph-8",
              type: "paragraph",
              children: [
                {
                  id: "text-82",
                  type: "text",
                  body: "Points and vectors are distinct kinds of objects: points belong to"
                },
                {
                  id: "text-83",
                  type: "text",
                  body: " "
                },
                {
                  id: "inlineMath-17",
                  type: "inlineMath",
                  body: "\\mathcal A",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathcal\">A</span></span></span></span>"
                },
                {
                  id: "text-84",
                  type: "text",
                  body: ", whereas vectors belong to "
                },
                {
                  id: "inlineMath-18",
                  type: "inlineMath",
                  body: "V",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                },
                {
                  id: "text-85",
                  type: "text",
                  body: "."
                }
              ]
            },
            {
              id: "table-1",
              type: "table",
              rows: [
                {
                  cells: [
                    [
                      {
                        id: "text-86",
                        type: "text",
                        body: "Symbol "
                      }
                    ],
                    [
                      {
                        id: "text-87",
                        type: "text",
                        body: "Meaning "
                      }
                    ],
                    [
                      {
                        id: "text-88",
                        type: "text",
                        body: "Convention or remarks "
                      }
                    ]
                  ]
                },
                {
                  cells: [
                    [
                      {
                        id: "inlineMath-19",
                        type: "inlineMath",
                        body: "\\mathcal A",
                        html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathcal\">A</span></span></span></span>"
                      },
                      {
                        id: "text-89",
                        type: "text",
                        body: " "
                      }
                    ],
                    [
                      {
                        id: "text-90",
                        type: "text",
                        body: "Ambient affine space "
                      }
                    ],
                    [
                      {
                        id: "text-91",
                        type: "text",
                        body: "Its elements are points "
                      },
                      {
                        id: "inlineMath-20",
                        type: "inlineMath",
                        body: "x,y,z\\in\\mathcal A",
                        html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathcal\">A</span></span></span></span>"
                      },
                      {
                        id: "text-92",
                        type: "text",
                        body: ". "
                      }
                    ]
                  ]
                },
                {
                  cells: [
                    [
                      {
                        id: "inlineMath-21",
                        type: "inlineMath",
                        body: "V",
                        html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                      },
                      {
                        id: "text-93",
                        type: "text",
                        body: " "
                      }
                    ],
                    [
                      {
                        id: "text-94",
                        type: "text",
                        body: "Vector space associated with "
                      },
                      {
                        id: "inlineMath-22",
                        type: "inlineMath",
                        body: "\\mathcal A",
                        html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathcal\">A</span></span></span></span>"
                      },
                      {
                        id: "text-95",
                        type: "text",
                        body: " "
                      }
                    ],
                    [
                      {
                        id: "text-96",
                        type: "text",
                        body: "Its elements are bold lowercase vectors "
                      },
                      {
                        id: "inlineMath-23",
                        type: "inlineMath",
                        body: "\\mathbf u,\\mathbf v,\\mathbf w\\in V",
                        html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">w</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                      },
                      {
                        id: "text-97",
                        type: "text",
                        body: ". "
                      }
                    ]
                  ]
                },
                {
                  cells: [
                    [
                      {
                        id: "inlineMath-24",
                        type: "inlineMath",
                        body: "U,W",
                        html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8778em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span></span></span></span>"
                      },
                      {
                        id: "text-98",
                        type: "text",
                        body: " "
                      }
                    ],
                    [
                      {
                        id: "text-99",
                        type: "text",
                        body: "Linear subspaces of "
                      },
                      {
                        id: "inlineMath-25",
                        type: "inlineMath",
                        body: "V",
                        html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                      },
                      {
                        id: "text-100",
                        type: "text",
                        body: " "
                      }
                    ],
                    [
                      {
                        id: "text-101",
                        type: "text",
                        body: "Typical elements are "
                      },
                      {
                        id: "inlineMath-26",
                        type: "inlineMath",
                        body: "\\mathbf u\\in U",
                        html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                      },
                      {
                        id: "text-102",
                        type: "text",
                        body: " and "
                      },
                      {
                        id: "inlineMath-27",
                        type: "inlineMath",
                        body: "\\mathbf w\\in W",
                        html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">w</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span></span></span></span>"
                      },
                      {
                        id: "text-103",
                        type: "text",
                        body: ". "
                      }
                    ]
                  ]
                },
                {
                  cells: [
                    [
                      {
                        id: "inlineMath-28",
                        type: "inlineMath",
                        body: "\\{\\mathbf v_i\\}_{i=1}^{n}",
                        html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0087em;vertical-align:-0.2587em;\"></span><span class=\"mopen\">{</span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\"><span class=\"mclose\">}</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.6644em;\"><span style=\"top:-2.4413em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">i</span><span class=\"mrel mtight\">=</span><span class=\"mord mtight\">1</span></span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">n</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2587em;\"><span></span></span></span></span></span></span></span></span></span>"
                      },
                      {
                        id: "text-104",
                        type: "text",
                        body: " "
                      }
                    ],
                    [
                      {
                        id: "text-105",
                        type: "text",
                        body: "Basis of "
                      },
                      {
                        id: "inlineMath-29",
                        type: "inlineMath",
                        body: "V",
                        html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                      },
                      {
                        id: "text-106",
                        type: "text",
                        body: " "
                      }
                    ],
                    [
                      {
                        id: "inlineMath-30",
                        type: "inlineMath",
                        body: "n=\\dim\\mathcal A=\\dim V",
                        html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">n</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mop\">dim</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathcal\">A</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mop\">dim</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                      },
                      {
                        id: "text-107",
                        type: "text",
                        body: ". "
                      }
                    ]
                  ]
                },
                {
                  cells: [
                    [
                      {
                        id: "inlineMath-31",
                        type: "inlineMath",
                        body: "\\{\\mathbf u_i\\}_{i=1}^{r}",
                        html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0087em;vertical-align:-0.2587em;\"></span><span class=\"mopen\">{</span><span class=\"mord\"><span class=\"mord mathbf\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\"><span class=\"mclose\">}</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.6644em;\"><span style=\"top:-2.4413em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">i</span><span class=\"mrel mtight\">=</span><span class=\"mord mtight\">1</span></span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0278em;\">r</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2587em;\"><span></span></span></span></span></span></span></span></span></span>"
                      },
                      {
                        id: "text-108",
                        type: "text",
                        body: " "
                      }
                    ],
                    [
                      {
                        id: "text-109",
                        type: "text",
                        body: "Basis of "
                      },
                      {
                        id: "inlineMath-32",
                        type: "inlineMath",
                        body: "U",
                        html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                      },
                      {
                        id: "text-110",
                        type: "text",
                        body: " "
                      }
                    ],
                    [
                      {
                        id: "inlineMath-33",
                        type: "inlineMath",
                        body: "r=\\dim U",
                        html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">r</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mop\">dim</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                      },
                      {
                        id: "text-111",
                        type: "text",
                        body: ". "
                      }
                    ]
                  ]
                },
                {
                  cells: [
                    [
                      {
                        id: "inlineMath-34",
                        type: "inlineMath",
                        body: "\\{\\mathbf w_i\\}_{i=1}^{s}",
                        html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0087em;vertical-align:-0.2587em;\"></span><span class=\"mopen\">{</span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">w</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\"><span class=\"mclose\">}</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.6644em;\"><span style=\"top:-2.4413em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">i</span><span class=\"mrel mtight\">=</span><span class=\"mord mtight\">1</span></span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">s</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2587em;\"><span></span></span></span></span></span></span></span></span></span>"
                      },
                      {
                        id: "text-112",
                        type: "text",
                        body: " "
                      }
                    ],
                    [
                      {
                        id: "text-113",
                        type: "text",
                        body: "Basis of "
                      },
                      {
                        id: "inlineMath-35",
                        type: "inlineMath",
                        body: "W",
                        html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span></span></span></span>"
                      },
                      {
                        id: "text-114",
                        type: "text",
                        body: " "
                      }
                    ],
                    [
                      {
                        id: "inlineMath-36",
                        type: "inlineMath",
                        body: "s=\\dim W",
                        html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">s</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mop\">dim</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span></span></span></span>"
                      },
                      {
                        id: "text-115",
                        type: "text",
                        body: ". "
                      }
                    ]
                  ]
                },
                {
                  cells: [
                    [
                      {
                        id: "inlineMath-37",
                        type: "inlineMath",
                        body: "S(x,U)",
                        html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span></span></span></span>"
                      },
                      {
                        id: "text-116",
                        type: "text",
                        body: " "
                      }
                    ],
                    [
                      {
                        id: "text-117",
                        type: "text",
                        body: "Affine subspace of "
                      },
                      {
                        id: "inlineMath-38",
                        type: "inlineMath",
                        body: "\\mathcal A",
                        html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathcal\">A</span></span></span></span>"
                      },
                      {
                        id: "text-118",
                        type: "text",
                        body: " through "
                      },
                      {
                        id: "inlineMath-39",
                        type: "inlineMath",
                        body: "x",
                        html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">x</span></span></span></span>"
                      },
                      {
                        id: "text-119",
                        type: "text",
                        body: " with direction space "
                      },
                      {
                        id: "inlineMath-40",
                        type: "inlineMath",
                        body: "U",
                        html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                      },
                      {
                        id: "text-120",
                        type: "text",
                        body: " "
                      }
                    ],
                    [
                      {
                        id: "inlineMath-41",
                        type: "inlineMath",
                        body: "x\\in\\mathcal A",
                        html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathnormal\">x</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathcal\">A</span></span></span></span>"
                      },
                      {
                        id: "text-121",
                        type: "text",
                        body: " and "
                      },
                      {
                        id: "inlineMath-42",
                        type: "inlineMath",
                        body: "U",
                        html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                      },
                      {
                        id: "text-122",
                        type: "text",
                        body: " linear subspace of "
                      },
                      {
                        id: "inlineMath-43",
                        type: "inlineMath",
                        body: "V",
                        html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                      },
                      {
                        id: "text-123",
                        type: "text",
                        body: ". "
                      }
                    ]
                  ]
                }
              ]
            },
            {
              id: "paragraph-9",
              type: "paragraph",
              children: [
                {
                  id: "text-124",
                  type: "text",
                  body: "The vector "
                },
                {
                  id: "inlineMath-44",
                  type: "inlineMath",
                  body: "\\overrightarrow{xy}\\in V",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.147em;vertical-align:-0.1944em;\"></span><span class=\"mord accent\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9526em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span></span></span><span class=\"svg-align\" style=\"top:-3.4306em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"hide-tail\" style=\"height:0.522em;min-width:0.888em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400em\" height=\"0.522em\" viewBox=\"0 0 400000 522\" preserveAspectRatio=\"xMaxYMin slice\"><path d=\"M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1944em;\"><span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                },
                {
                  id: "text-125",
                  type: "text",
                  body: " denotes the unique displacement"
                },
                {
                  id: "text-126",
                  type: "text",
                  body: " "
                },
                {
                  id: "text-127",
                  type: "text",
                  body: "from the point "
                },
                {
                  id: "inlineMath-45",
                  type: "inlineMath",
                  body: "x",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">x</span></span></span></span>"
                },
                {
                  id: "text-128",
                  type: "text",
                  body: " to the point "
                },
                {
                  id: "inlineMath-46",
                  type: "inlineMath",
                  body: "y",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span></span></span></span>"
                },
                {
                  id: "text-129",
                  type: "text",
                  body: "."
                }
              ]
            },
            {
              id: "paragraph-10",
              type: "paragraph",
              children: [
                {
                  id: "text-130",
                  type: "text",
                  body: "Once an affine coordinate system has been chosen, point coordinates and"
                },
                {
                  id: "text-131",
                  type: "text",
                  body: " "
                },
                {
                  id: "text-132",
                  type: "text",
                  body: "vector components are distinguished as shown below."
                }
              ]
            },
            {
              id: "table-2",
              type: "table",
              rows: [
                {
                  cells: [
                    [
                      {
                        id: "text-133",
                        type: "text",
                        body: "Symbol "
                      }
                    ],
                    [
                      {
                        id: "text-134",
                        type: "text",
                        body: "Meaning "
                      }
                    ],
                    [
                      {
                        id: "text-135",
                        type: "text",
                        body: "Convention or remarks "
                      }
                    ]
                  ]
                },
                {
                  cells: [
                    [
                      {
                        id: "inlineMath-47",
                        type: "inlineMath",
                        body: "\\overrightarrow{xy}",
                        html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.147em;vertical-align:-0.1944em;\"></span><span class=\"mord accent\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9526em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span></span></span><span class=\"svg-align\" style=\"top:-3.4306em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"hide-tail\" style=\"height:0.522em;min-width:0.888em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400em\" height=\"0.522em\" viewBox=\"0 0 400000 522\" preserveAspectRatio=\"xMaxYMin slice\"><path d=\"M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1944em;\"><span></span></span></span></span></span></span></span></span>"
                      },
                      {
                        id: "text-136",
                        type: "text",
                        body: " "
                      }
                    ],
                    [
                      {
                        id: "text-137",
                        type: "text",
                        body: "Unique displacement from "
                      },
                      {
                        id: "inlineMath-48",
                        type: "inlineMath",
                        body: "x",
                        html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">x</span></span></span></span>"
                      },
                      {
                        id: "text-138",
                        type: "text",
                        body: " to "
                      },
                      {
                        id: "inlineMath-49",
                        type: "inlineMath",
                        body: "y",
                        html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span></span></span></span>"
                      },
                      {
                        id: "text-139",
                        type: "text",
                        body: " "
                      }
                    ],
                    [
                      {
                        id: "inlineMath-50",
                        type: "inlineMath",
                        body: "\\overrightarrow{xy}\\in V",
                        html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.147em;vertical-align:-0.1944em;\"></span><span class=\"mord accent\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9526em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span></span></span><span class=\"svg-align\" style=\"top:-3.4306em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"hide-tail\" style=\"height:0.522em;min-width:0.888em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400em\" height=\"0.522em\" viewBox=\"0 0 400000 522\" preserveAspectRatio=\"xMaxYMin slice\"><path d=\"M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1944em;\"><span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                      },
                      {
                        id: "text-140",
                        type: "text",
                        body: ". "
                      }
                    ]
                  ]
                },
                {
                  cells: [
                    [
                      {
                        id: "inlineMath-51",
                        type: "inlineMath",
                        body: "\\mathbf d",
                        html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathbf\">d</span></span></span></span>"
                      },
                      {
                        id: "text-141",
                        type: "text",
                        body: " "
                      }
                    ],
                    [
                      {
                        id: "text-142",
                        type: "text",
                        body: "Explicitly named displacement "
                      }
                    ],
                    [
                      {
                        id: "inlineMath-52",
                        type: "inlineMath",
                        body: "\\mathbf d:=\\overrightarrow{xy}",
                        html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathbf\">d</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">:=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.147em;vertical-align:-0.1944em;\"></span><span class=\"mord accent\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9526em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span></span></span><span class=\"svg-align\" style=\"top:-3.4306em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"hide-tail\" style=\"height:0.522em;min-width:0.888em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400em\" height=\"0.522em\" viewBox=\"0 0 400000 522\" preserveAspectRatio=\"xMaxYMin slice\"><path d=\"M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1944em;\"><span></span></span></span></span></span></span></span></span>"
                      },
                      {
                        id: "text-143",
                        type: "text",
                        body: ". "
                      }
                    ]
                  ]
                },
                {
                  cells: [
                    [
                      {
                        id: "inlineMath-53",
                        type: "inlineMath",
                        body: "\\mathbf d_{ij}",
                        html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.9805em;vertical-align:-0.2861em;\"></span><span class=\"mord\"><span class=\"mord mathbf\">d</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0572em;\">ij</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span></span></span></span>"
                      },
                      {
                        id: "text-144",
                        type: "text",
                        body: " "
                      }
                    ],
                    [
                      {
                        id: "text-145",
                        type: "text",
                        body: "Indexed displacement "
                      }
                    ],
                    [
                      {
                        id: "inlineMath-54",
                        type: "inlineMath",
                        body: "\\mathbf d_{ij}:=\\overrightarrow{x_i x_j}",
                        html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.9805em;vertical-align:-0.2861em;\"></span><span class=\"mord\"><span class=\"mord mathbf\">d</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0572em;\">ij</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">:=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2387em;vertical-align:-0.2861em;\"></span><span class=\"mord accent\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9526em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0572em;\">j</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span></span></span><span class=\"svg-align\" style=\"top:-3.4306em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"hide-tail\" style=\"height:0.522em;min-width:0.888em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400em\" height=\"0.522em\" viewBox=\"0 0 400000 522\" preserveAspectRatio=\"xMaxYMin slice\"><path d=\"M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span></span></span>"
                      },
                      {
                        id: "text-146",
                        type: "text",
                        body: ". "
                      }
                    ]
                  ]
                },
                {
                  cells: [
                    [
                      {
                        id: "inlineMath-55",
                        type: "inlineMath",
                        body: "(x^1,\\ldots,x^n)",
                        html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0641em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\">…</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.6644em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">n</span></span></span></span></span></span></span></span><span class=\"mclose\">)</span></span></span></span>"
                      },
                      {
                        id: "text-147",
                        type: "text",
                        body: " "
                      }
                    ],
                    [
                      {
                        id: "text-148",
                        type: "text",
                        body: "Coordinates of "
                      },
                      {
                        id: "inlineMath-56",
                        type: "inlineMath",
                        body: "x\\in\\mathcal A",
                        html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathnormal\">x</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathcal\">A</span></span></span></span>"
                      },
                      {
                        id: "text-149",
                        type: "text",
                        body: " "
                      }
                    ],
                    [
                      {
                        id: "text-150",
                        type: "text",
                        body: "Defined after choosing an affine coordinate system. "
                      }
                    ]
                  ]
                },
                {
                  cells: [
                    [
                      {
                        id: "inlineMath-57",
                        type: "inlineMath",
                        body: "v^i,u^i,w^i",
                        html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0191em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8247em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">u</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8247em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0269em;\">w</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8247em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span></span></span></span></span></span></span></span>"
                      },
                      {
                        id: "text-151",
                        type: "text",
                        body: " "
                      }
                    ],
                    [
                      {
                        id: "text-152",
                        type: "text",
                        body: "Components of vectors "
                      }
                    ],
                    [
                      {
                        id: "inlineMath-58",
                        type: "inlineMath",
                        body: "\\mathbf v=v^i\\mathbf v_i",
                        html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.9747em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8247em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                      },
                      {
                        id: "text-153",
                        type: "text",
                        body: ", "
                      },
                      {
                        id: "inlineMath-59",
                        type: "inlineMath",
                        body: "\\mathbf u=u^i\\mathbf u_i",
                        html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.9747em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">u</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8247em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord mathbf\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                      },
                      {
                        id: "text-154",
                        type: "text",
                        body: ", and "
                      },
                      {
                        id: "inlineMath-60",
                        type: "inlineMath",
                        body: "\\mathbf w=w^i\\mathbf w_i",
                        html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">w</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.9747em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0269em;\">w</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8247em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">w</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                      },
                      {
                        id: "text-155",
                        type: "text",
                        body: ". "
                      }
                    ]
                  ]
                },
                {
                  cells: [
                    [
                      {
                        id: "inlineMath-61",
                        type: "inlineMath",
                        body: "i,j",
                        html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.854em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\">i</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0572em;\">j</span></span></span></span>"
                      },
                      {
                        id: "text-156",
                        type: "text",
                        body: " "
                      }
                    ],
                    [
                      {
                        id: "text-157",
                        type: "text",
                        body: "Basis and coordinate indices "
                      }
                    ],
                    [
                      {
                        id: "text-158",
                        type: "text",
                        body: "Their range is determined by the relevant basis: "
                      },
                      {
                        id: "inlineMath-62",
                        type: "inlineMath",
                        body: "1,\\ldots,n",
                        html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8389em;vertical-align:-0.1944em;\"></span><span class=\"mord\">1</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\">…</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\">n</span></span></span></span>"
                      },
                      {
                        id: "text-159",
                        type: "text",
                        body: ", "
                      },
                      {
                        id: "inlineMath-63",
                        type: "inlineMath",
                        body: "1,\\ldots,r",
                        html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8389em;vertical-align:-0.1944em;\"></span><span class=\"mord\">1</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\">…</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">r</span></span></span></span>"
                      },
                      {
                        id: "text-160",
                        type: "text",
                        body: ", or "
                      },
                      {
                        id: "inlineMath-64",
                        type: "inlineMath",
                        body: "1,\\ldots,s",
                        html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8389em;vertical-align:-0.1944em;\"></span><span class=\"mord\">1</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\">…</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\">s</span></span></span></span>"
                      },
                      {
                        id: "text-161",
                        type: "text",
                        body: ". "
                      }
                    ]
                  ]
                },
                {
                  cells: [
                    [
                      {
                        id: "inlineMath-65",
                        type: "inlineMath",
                        body: "v^i\\mathbf v_i",
                        html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.9747em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8247em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                      },
                      {
                        id: "text-162",
                        type: "text",
                        body: " "
                      }
                    ],
                    [
                      {
                        id: "text-163",
                        type: "text",
                        body: "Einstein summation convention "
                      }
                    ],
                    [
                      {
                        id: "text-164",
                        type: "text",
                        body: "An index repeated once upstairs and once downstairs is summed over its range. The same convention applies to "
                      },
                      {
                        id: "inlineMath-66",
                        type: "inlineMath",
                        body: "u^i\\mathbf u_i",
                        html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.9747em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">u</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8247em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord mathbf\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                      },
                      {
                        id: "text-165",
                        type: "text",
                        body: " and "
                      },
                      {
                        id: "inlineMath-67",
                        type: "inlineMath",
                        body: "w^i\\mathbf w_i",
                        html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.9747em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0269em;\">w</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8247em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">w</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                      },
                      {
                        id: "text-166",
                        type: "text",
                        body: ". "
                      }
                    ]
                  ]
                }
              ]
            },
            {
              id: "paragraph-11",
              type: "paragraph",
              children: [
                {
                  id: "text-167",
                  type: "text",
                  body: "Additional symbols will be introduced as the corresponding mathematical"
                },
                {
                  id: "text-168",
                  type: "text",
                  body: " "
                },
                {
                  id: "text-169",
                  type: "text",
                  body: "objects are needed."
                }
              ]
            }
          ],
          numbering: {
            path: [
              1,
              1,
              0
            ]
          }
        }
      ],
      numbering: {
        path: [
          1,
          0,
          0
        ]
      }
    },
    {
      id: "section-2",
      type: "section",
      title: [
        {
          id: "text-170",
          type: "text",
          body: "Affine Spaces"
        }
      ],
      intro: [
        {
          id: "paragraph-12",
          type: "paragraph",
          children: [
            {
              id: "text-171",
              type: "text",
              body: "In this section, we define an affine space by associating a set of"
            },
            {
              id: "text-172",
              type: "text",
              body: " "
            },
            {
              id: "text-173",
              type: "text",
              body: "points with a vector space over the real numbers "
            },
            {
              id: "inlineMath-68",
              type: "inlineMath",
              body: "\\mathbb{R}",
              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6889em;\"></span><span class=\"mord mathbb\">R</span></span></span></span>"
            },
            {
              id: "text-174",
              type: "text",
              body: " and"
            },
            {
              id: "text-175",
              type: "text",
              body: " "
            },
            {
              id: "text-176",
              type: "text",
              body: "specifying how the vectors act on the points."
            }
          ]
        },
        {
          id: "paragraph-13",
          type: "paragraph",
          children: [
            {
              id: "text-177",
              type: "text",
              body: "More generally, affine geometry can be developed over a division ring,"
            },
            {
              id: "text-178",
              type: "text",
              body: " "
            },
            {
              id: "text-179",
              type: "text",
              body: "whose multiplication need not be commutative. In these essays, we"
            },
            {
              id: "text-180",
              type: "text",
              body: " "
            },
            {
              id: "text-181",
              type: "text",
              body: "restrict our attention to the real numbers, which are the scalars in"
            },
            {
              id: "text-182",
              type: "text",
              body: " "
            },
            {
              id: "text-183",
              type: "text",
              body: "the physical applications we will consider."
            }
          ]
        },
        {
          id: "definition-1",
          type: "definition",
          title: [
            {
              id: "text-184",
              type: "text",
              body: "Affine space"
            }
          ],
          content: [
            {
              id: "paragraph-14",
              type: "paragraph",
              children: [
                {
                  id: "text-185",
                  type: "text",
                  body: "An "
                },
                {
                  id: "inlineMath-69",
                  type: "inlineMath",
                  body: "n",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">n</span></span></span></span>"
                },
                {
                  id: "text-186",
                  type: "text",
                  body: "-dimensional affine space over "
                },
                {
                  id: "inlineMath-70",
                  type: "inlineMath",
                  body: "\\mathbb{R}",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6889em;\"></span><span class=\"mord mathbb\">R</span></span></span></span>"
                },
                {
                  id: "text-187",
                  type: "text",
                  body: " consists of:"
                }
              ]
            },
            {
              id: "itemize-1",
              type: "itemize",
              items: [
                {
                  id: "item-1",
                  type: "item",
                  content: [
                    {
                      id: "paragraph-15",
                      type: "paragraph",
                      children: [
                        {
                          id: "text-188",
                          type: "text",
                          body: "a vector space "
                        },
                        {
                          id: "inlineMath-71",
                          type: "inlineMath",
                          body: "V",
                          html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                        },
                        {
                          id: "text-189",
                          type: "text",
                          body: ";"
                        }
                      ]
                    }
                  ]
                },
                {
                  id: "item-2",
                  type: "item",
                  content: [
                    {
                      id: "paragraph-16",
                      type: "paragraph",
                      children: [
                        {
                          id: "text-190",
                          type: "text",
                          body: "a set "
                        },
                        {
                          id: "inlineMath-72",
                          type: "inlineMath",
                          body: "\\mathcal A",
                          html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathcal\">A</span></span></span></span>"
                        },
                        {
                          id: "text-191",
                          type: "text",
                          body: " of points."
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "paragraph-17",
              type: "paragraph",
              children: [
                {
                  id: "text-192",
                  type: "text",
                  body: "To each vector "
                },
                {
                  id: "inlineMath-73",
                  type: "inlineMath",
                  body: "\\mathbf{v} \\in V",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                },
                {
                  id: "text-193",
                  type: "text",
                  body: " is associated a mapping"
                }
              ]
            },
            {
              id: "displayMath-2",
              type: "displayMath",
              body: "\\mathbf{v} \\colon \\mathcal A \\longrightarrow \\mathcal A,",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6943em;vertical-align:-0.011em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace nobreak\"></span><span class=\"mspace\" style=\"margin-right:0.1111em;\"></span><span class=\"mpunct\"></span><span class=\"mspace\" style=\"margin-right:-0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mrel\">:</span></span><span class=\"mspace\" style=\"margin-right:0.3333em;\"></span><span class=\"mord mathcal\">A</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">⟶</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8778em;vertical-align:-0.1944em;\"></span><span class=\"mord mathcal\">A</span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "displayMath-3",
              type: "displayMath",
              body: "\\mathbf{v}(x) = y,",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-18",
              type: "paragraph",
              children: [
                {
                  id: "text-194",
                  type: "text",
                  body: "where "
                },
                {
                  id: "inlineMath-74",
                  type: "inlineMath",
                  body: "x,y \\in \\mathcal A",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathcal\">A</span></span></span></span>"
                },
                {
                  id: "text-195",
                  type: "text",
                  body: ", with the following properties:"
                }
              ]
            },
            {
              id: "enumerate-1",
              type: "enumerate",
              items: [
                {
                  id: "item-3",
                  type: "item",
                  content: [
                    {
                      id: "paragraph-19",
                      type: "paragraph",
                      children: [
                        {
                          id: "inlineMath-75",
                          type: "inlineMath",
                          body: "\\mathbf{0}(x)=x",
                          html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">0</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">x</span></span></span></span>"
                        },
                        {
                          id: "text-196",
                          type: "text",
                          body: ", where "
                        },
                        {
                          id: "inlineMath-76",
                          type: "inlineMath",
                          body: "\\mathbf{0}",
                          html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord mathbf\">0</span></span></span></span>"
                        },
                        {
                          id: "text-197",
                          type: "text",
                          body: " is the null vector."
                        }
                      ]
                    }
                  ]
                },
                {
                  id: "item-4",
                  type: "item",
                  content: [
                    {
                      id: "paragraph-20",
                      type: "paragraph",
                      children: [
                        {
                          id: "text-198",
                          type: "text",
                          body: "For all "
                        },
                        {
                          id: "inlineMath-77",
                          type: "inlineMath",
                          body: "x,y\\in \\mathcal A",
                          html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathcal\">A</span></span></span></span>"
                        },
                        {
                          id: "text-199",
                          type: "text",
                          body: ", there exists a unique "
                        },
                        {
                          id: "inlineMath-78",
                          type: "inlineMath",
                          body: "\\mathbf{d}\\in V",
                          html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\">d</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                        },
                        {
                          id: "text-200",
                          type: "text",
                          body: " "
                        },
                        {
                          id: "text-201",
                          type: "text",
                          body: "such that "
                        },
                        {
                          id: "inlineMath-79",
                          type: "inlineMath",
                          body: "\\mathbf{d}(x)=y",
                          html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">d</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span></span></span></span>"
                        },
                        {
                          id: "text-202",
                          type: "text",
                          body: ", and we denote"
                        },
                        {
                          id: "text-203",
                          type: "text",
                          body: " "
                        },
                        {
                          id: "inlineMath-80",
                          type: "inlineMath",
                          body: "\\mathbf{d}=\\overrightarrow{xy}",
                          html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathbf\">d</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.147em;vertical-align:-0.1944em;\"></span><span class=\"mord accent\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9526em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span></span></span><span class=\"svg-align\" style=\"top:-3.4306em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"hide-tail\" style=\"height:0.522em;min-width:0.888em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400em\" height=\"0.522em\" viewBox=\"0 0 400000 522\" preserveAspectRatio=\"xMaxYMin slice\"><path d=\"M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1944em;\"><span></span></span></span></span></span></span></span></span>"
                        },
                        {
                          id: "text-204",
                          type: "text",
                          body: "."
                        }
                      ]
                    }
                  ]
                },
                {
                  id: "item-5",
                  type: "item",
                  content: [
                    {
                      id: "paragraph-21",
                      type: "paragraph",
                      children: [
                        {
                          id: "text-205",
                          type: "text",
                          body: "If "
                        },
                        {
                          id: "inlineMath-81",
                          type: "inlineMath",
                          body: "\\mathbf{v},\\mathbf{w}\\in V",
                          html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">w</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                        },
                        {
                          id: "text-206",
                          type: "text",
                          body: ", the composition of the action"
                        },
                        {
                          id: "text-207",
                          type: "text",
                          body: " "
                        },
                        {
                          id: "text-208",
                          type: "text",
                          body: "of two vectors is defined formally as the sum of two vectors:"
                        }
                      ]
                    },
                    {
                      id: "displayMath-4",
                      type: "displayMath",
                      body: "(\\mathbf{v}\\circ\\mathbf{w})(x)\n    =\\mathbf{v}\\bigl(\\mathbf{w}(x)\\bigr)\n    \\coloneqq(\\mathbf{v}+\\mathbf{w})(x).",
                      html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">∘</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">w</span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">w</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\"><span class=\"mrel\"><span class=\"mop\" style=\"position:relative;top:-0.0347em;\">:</span></span><span class=\"mrel\"><span class=\"mspace\" style=\"margin-right:-0.0667em;\"></span></span><span class=\"mrel\">=</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">w</span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
                    }
                  ]
                }
              ]
            }
          ],
          numbering: {
            path: [
              2,
              1
            ]
          }
        },
        {
          id: "paragraph-22",
          type: "paragraph",
          children: [
            {
              id: "text-209",
              type: "text",
              body: "One point is easy to gloss over. The action of a vector on the points"
            },
            {
              id: "text-210",
              type: "text",
              body: " "
            },
            {
              id: "text-211",
              type: "text",
              body: "of an affine space respects vector addition:"
            }
          ]
        },
        {
          id: "displayMath-5",
          type: "displayMath",
          body: "\\mathbf{v}\\circ\\mathbf{w}\n  =\n  \\mathbf{v}+\\mathbf{w}\n  =\n  \\mathbf{w}+\\mathbf{v}\n  =\n  \\mathbf{w}\\circ\\mathbf{v},",
          html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4445em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">∘</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">w</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">w</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">w</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.4445em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">w</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">∘</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6389em;vertical-align:-0.1944em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mpunct\">,</span></span></span></span></span>"
        },
        {
          id: "paragraph-23",
          type: "paragraph",
          children: [
            {
              id: "text-212",
              type: "text",
              body: "where the sums in the middle denote the maps induced by the"
            },
            {
              id: "text-213",
              type: "text",
              body: " "
            },
            {
              id: "text-214",
              type: "text",
              body: "corresponding sums of vectors. Since vector addition is commutative,"
            },
            {
              id: "text-215",
              type: "text",
              body: " "
            },
            {
              id: "text-216",
              type: "text",
              body: "the maps induced by the vectors commute as well."
            }
          ]
        },
        {
          id: "paragraph-24",
          type: "paragraph",
          children: [
            {
              id: "text-217",
              type: "text",
              body: "The action also gives us a direct way to undo a move. If we apply"
            },
            {
              id: "text-218",
              type: "text",
              body: " "
            },
            {
              id: "inlineMath-82",
              type: "inlineMath",
              body: "\\mathbf{v}",
              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span></span></span></span>"
            },
            {
              id: "text-219",
              type: "text",
              body: " and then "
            },
            {
              id: "inlineMath-83",
              type: "inlineMath",
              body: "-\\mathbf{v}",
              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord\">−</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span></span></span></span>"
            },
            {
              id: "text-220",
              type: "text",
              body: ", the combined action is that of the"
            },
            {
              id: "text-221",
              type: "text",
              body: " "
            },
            {
              id: "text-222",
              type: "text",
              body: "zero vector, which leaves every point fixed. In other words, the inverse of the map induced by "
            },
            {
              id: "inlineMath-84",
              type: "inlineMath",
              body: "\\mathbf{v}",
              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span></span></span></span>"
            },
            {
              id: "text-223",
              type: "text",
              body: " is the map induced by"
            },
            {
              id: "text-224",
              type: "text",
              body: " "
            },
            {
              id: "inlineMath-85",
              type: "inlineMath",
              body: "-\\mathbf{v}",
              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord\">−</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span></span></span></span>"
            },
            {
              id: "text-225",
              type: "text",
              body: ". Indeed, their composition in either order is the map"
            },
            {
              id: "text-226",
              type: "text",
              body: " "
            },
            {
              id: "text-227",
              type: "text",
              body: "induced by the zero vector, which is the identity map on "
            },
            {
              id: "inlineMath-86",
              type: "inlineMath",
              body: "\\mathcal A",
              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathcal\">A</span></span></span></span>"
            },
            {
              id: "text-228",
              type: "text",
              body: ":"
            }
          ]
        },
        {
          id: "displayMath-6",
          type: "displayMath",
          body: "\\mathbf{v}\\circ(-\\mathbf{v})\n  =\n  (-\\mathbf{v})\\circ\\mathbf{v}\n  =\n  \\operatorname{id}_{\\mathcal A}.",
          html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4445em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">∘</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\">−</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\">−</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">∘</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8444em;vertical-align:-0.15em;\"></span><span class=\"mop\"><span class=\"mop\"><span class=\"mord mathrm\">id</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3283em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathcal mtight\">A</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">.</span></span></span></span></span>"
        },
        {
          id: "paragraph-25",
          type: "paragraph",
          children: [
            {
              id: "text-229",
              type: "text",
              body: "Coming back to the displacement example, suppose we start at "
            },
            {
              id: "inlineMath-87",
              type: "inlineMath",
              body: "x",
              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">x</span></span></span></span>"
            },
            {
              id: "text-230",
              type: "text",
              body: ","
            },
            {
              id: "text-231",
              type: "text",
              body: " "
            },
            {
              id: "text-232",
              type: "text",
              body: "apply "
            },
            {
              id: "inlineMath-88",
              type: "inlineMath",
              body: "\\overrightarrow{xz}",
              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.9526em;\"></span><span class=\"mord accent\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9526em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span></span></span><span class=\"svg-align\" style=\"top:-3.4306em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"hide-tail\" style=\"height:0.522em;min-width:0.888em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400em\" height=\"0.522em\" viewBox=\"0 0 400000 522\" preserveAspectRatio=\"xMaxYMin slice\"><path d=\"M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z\"/></svg></span></span></span></span></span></span></span></span></span>"
            },
            {
              id: "text-233",
              type: "text",
              body: " to reach "
            },
            {
              id: "inlineMath-89",
              type: "inlineMath",
              body: "z",
              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span></span></span></span>"
            },
            {
              id: "text-234",
              type: "text",
              body: ", and then apply"
            },
            {
              id: "text-235",
              type: "text",
              body: " "
            },
            {
              id: "inlineMath-90",
              type: "inlineMath",
              body: "\\overrightarrow{zy}",
              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.147em;vertical-align:-0.1944em;\"></span><span class=\"mord accent\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9526em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span></span></span><span class=\"svg-align\" style=\"top:-3.4306em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"hide-tail\" style=\"height:0.522em;min-width:0.888em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400em\" height=\"0.522em\" viewBox=\"0 0 400000 522\" preserveAspectRatio=\"xMaxYMin slice\"><path d=\"M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1944em;\"><span></span></span></span></span></span></span></span></span>"
            },
            {
              id: "text-236",
              type: "text",
              body: " to reach "
            },
            {
              id: "inlineMath-91",
              type: "inlineMath",
              body: "y",
              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span></span></span></span>"
            },
            {
              id: "text-237",
              type: "text",
              body: ". We can just as well start at "
            },
            {
              id: "inlineMath-92",
              type: "inlineMath",
              body: "x",
              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">x</span></span></span></span>"
            },
            {
              id: "text-238",
              type: "text",
              body: " "
            },
            {
              id: "text-239",
              type: "text",
              body: "and apply "
            },
            {
              id: "inlineMath-93",
              type: "inlineMath",
              body: "\\overrightarrow{zy}",
              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.147em;vertical-align:-0.1944em;\"></span><span class=\"mord accent\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9526em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span></span></span><span class=\"svg-align\" style=\"top:-3.4306em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"hide-tail\" style=\"height:0.522em;min-width:0.888em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400em\" height=\"0.522em\" viewBox=\"0 0 400000 522\" preserveAspectRatio=\"xMaxYMin slice\"><path d=\"M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1944em;\"><span></span></span></span></span></span></span></span></span>"
            },
            {
              id: "text-240",
              type: "text",
              body: " first, followed by"
            },
            {
              id: "text-241",
              type: "text",
              body: " "
            },
            {
              id: "inlineMath-94",
              type: "inlineMath",
              body: "\\overrightarrow{xz}",
              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.9526em;\"></span><span class=\"mord accent\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9526em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span></span></span><span class=\"svg-align\" style=\"top:-3.4306em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"hide-tail\" style=\"height:0.522em;min-width:0.888em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400em\" height=\"0.522em\" viewBox=\"0 0 400000 522\" preserveAspectRatio=\"xMaxYMin slice\"><path d=\"M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z\"/></svg></span></span></span></span></span></span></span></span></span>"
            },
            {
              id: "text-242",
              type: "text",
              body: ". In general, we pass through a different"
            },
            {
              id: "text-243",
              type: "text",
              body: " "
            },
            {
              id: "text-244",
              type: "text",
              body: "intermediate point, but we still end up at "
            },
            {
              id: "inlineMath-95",
              type: "inlineMath",
              body: "y",
              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span></span></span></span>"
            },
            {
              id: "text-245",
              type: "text",
              body: ". This is the familiar"
            },
            {
              id: "text-246",
              type: "text",
              body: " "
            },
            {
              id: "text-247",
              type: "text",
              body: "parallelogram rule expressed in terms of how vectors act on points."
            }
          ]
        },
        {
          id: "paragraph-26",
          type: "paragraph",
          children: [
            {
              id: "text-248",
              type: "text",
              body: "We can now see what structure a vector space brings to a set of points"
            },
            {
              id: "text-249",
              type: "text",
              body: " "
            },
            {
              id: "inlineMath-96",
              type: "inlineMath",
              body: "\\mathcal{A}",
              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathcal\">A</span></span></span></span>"
            },
            {
              id: "text-250",
              type: "text",
              body: ". We start with a nonempty set whose elements we call points."
            },
            {
              id: "text-251",
              type: "text",
              body: " "
            },
            {
              id: "text-252",
              type: "text",
              body: "We assume no geometry on this set. Once we equip it with an affine action"
            },
            {
              id: "text-253",
              type: "text",
              body: " "
            },
            {
              id: "text-254",
              type: "text",
              body: "of a vector space, its points are related through the action of vectors."
            },
            {
              id: "text-255",
              type: "text",
              body: " "
            },
            {
              id: "text-256",
              type: "text",
              body: "Given any two points, there is a unique vector whose action takes the"
            },
            {
              id: "text-257",
              type: "text",
              body: " "
            },
            {
              id: "text-258",
              type: "text",
              body: "first point to the second."
            }
          ]
        },
        {
          id: "paragraph-27",
          type: "paragraph",
          children: [
            {
              id: "text-259",
              type: "text",
              body: "So far, we have considered what happens when a vector acts on a single"
            },
            {
              id: "text-260",
              type: "text",
              body: " "
            },
            {
              id: "text-261",
              type: "text",
              body: "point. What happens to the set "
            },
            {
              id: "inlineMath-97",
              type: "inlineMath",
              body: "\\mathcal{A}",
              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathcal\">A</span></span></span></span>"
            },
            {
              id: "text-262",
              type: "text",
              body: " as a whole if we apply the"
            },
            {
              id: "text-263",
              type: "text",
              body: " "
            },
            {
              id: "text-264",
              type: "text",
              body: "same vector to every point? We will show that the resulting set is again"
            },
            {
              id: "text-265",
              type: "text",
              body: " "
            },
            {
              id: "inlineMath-98",
              type: "inlineMath",
              body: "\\mathcal{A}",
              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathcal\">A</span></span></span></span>"
            },
            {
              id: "text-266",
              type: "text",
              body: ". Before doing so, we define the map obtained by applying"
            },
            {
              id: "text-267",
              type: "text",
              body: " "
            },
            {
              id: "text-268",
              type: "text",
              body: "a fixed vector to every point. We call this map a "
            },
            {
              body: "translation",
              id: "textit-1",
              type: "textit"
            },
            {
              id: "text-269",
              type: "text",
              body: "."
            }
          ]
        },
        {
          id: "definition-2",
          type: "definition",
          title: [
            {
              id: "text-270",
              type: "text",
              body: "Translation"
            }
          ],
          content: [
            {
              id: "paragraph-28",
              type: "paragraph",
              children: [
                {
                  id: "text-271",
                  type: "text",
                  body: "To any given vector "
                },
                {
                  id: "inlineMath-99",
                  type: "inlineMath",
                  body: "\\mathbf{v}\\in V",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                },
                {
                  id: "text-272",
                  type: "text",
                  body: " is associated a mapping"
                }
              ]
            },
            {
              id: "displayMath-7",
              type: "displayMath",
              body: "T_{\\mathbf{v}}\\colon \\mathcal A\\longrightarrow \\mathcal A",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8333em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1611em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathbf mtight\" style=\"margin-right:0.016em;\">v</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace nobreak\"></span><span class=\"mspace\" style=\"margin-right:0.1111em;\"></span><span class=\"mpunct\"></span><span class=\"mspace\" style=\"margin-right:-0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mrel\">:</span></span><span class=\"mspace\" style=\"margin-right:0.3333em;\"></span><span class=\"mord mathcal\">A</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">⟶</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathcal\">A</span></span></span></span></span>"
            },
            {
              id: "paragraph-29",
              type: "paragraph",
              children: [
                {
                  id: "text-273",
                  type: "text",
                  body: "such that"
                }
              ]
            },
            {
              id: "displayMath-8",
              type: "displayMath",
              body: "T_{\\mathbf{v}}(x)=\\mathbf{v}(x).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1611em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathbf mtight\" style=\"margin-right:0.016em;\">v</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-30",
              type: "paragraph",
              children: [
                {
                  id: "text-274",
                  type: "text",
                  body: "Such a mapping is called a translation."
                }
              ]
            }
          ],
          numbering: {
            path: [
              2,
              2
            ]
          }
        },
        {
          id: "paragraph-31",
          type: "paragraph",
          children: [
            {
              id: "text-275",
              type: "text",
              body: "Now we can prove that a translation maps "
            },
            {
              id: "inlineMath-100",
              type: "inlineMath",
              body: "\\mathcal A",
              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathcal\">A</span></span></span></span>"
            },
            {
              id: "text-276",
              type: "text",
              body: " onto itself."
            },
            {
              id: "text-277",
              type: "text",
              body: " "
            },
            {
              id: "text-278",
              type: "text",
              body: "You will already see how powerful it is that adding vectors corresponds"
            },
            {
              id: "text-279",
              type: "text",
              body: " "
            },
            {
              id: "text-280",
              type: "text",
              body: "to composing their action maps, and that negating a vector corresponds"
            },
            {
              id: "text-281",
              type: "text",
              body: " "
            },
            {
              id: "text-282",
              type: "text",
              body: "to taking the inverse map"
            }
          ]
        },
        {
          id: "proposition-1",
          type: "proposition",
          content: [
            {
              id: "paragraph-32",
              type: "paragraph",
              children: [
                {
                  id: "text-283",
                  type: "text",
                  body: "For every "
                },
                {
                  id: "inlineMath-101",
                  type: "inlineMath",
                  body: "\\mathbf{v}\\in V",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                },
                {
                  id: "text-284",
                  type: "text",
                  body: ", the translation"
                }
              ]
            },
            {
              id: "displayMath-9",
              type: "displayMath",
              body: "T_{\\mathbf{v}}\\colon \\mathcal A\\longrightarrow \\mathcal A",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8333em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1611em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathbf mtight\" style=\"margin-right:0.016em;\">v</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace nobreak\"></span><span class=\"mspace\" style=\"margin-right:0.1111em;\"></span><span class=\"mpunct\"></span><span class=\"mspace\" style=\"margin-right:-0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mrel\">:</span></span><span class=\"mspace\" style=\"margin-right:0.3333em;\"></span><span class=\"mord mathcal\">A</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">⟶</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathcal\">A</span></span></span></span></span>"
            },
            {
              id: "paragraph-33",
              type: "paragraph",
              children: [
                {
                  id: "text-285",
                  type: "text",
                  body: "is one-to-one and onto."
                }
              ]
            }
          ],
          numbering: {
            path: [
              2,
              3
            ]
          }
        },
        {
          id: "proof-1",
          type: "proof",
          content: [
            {
              id: "paragraph-34",
              type: "paragraph",
              children: [
                {
                  id: "text-286",
                  type: "text",
                  body: "Let us prove that "
                },
                {
                  id: "inlineMath-102",
                  type: "inlineMath",
                  body: "T_{\\mathbf{v}}",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8333em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1611em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathbf mtight\" style=\"margin-right:0.016em;\">v</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                },
                {
                  id: "text-287",
                  type: "text",
                  body: " is one-to-one. Assume that"
                },
                {
                  id: "text-288",
                  type: "text",
                  body: " "
                },
                {
                  id: "inlineMath-103",
                  type: "inlineMath",
                  body: "z,y\\in \\mathcal A",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathcal\">A</span></span></span></span>"
                },
                {
                  id: "text-289",
                  type: "text",
                  body: " and"
                }
              ]
            },
            {
              id: "displayMath-10",
              type: "displayMath",
              body: "T_{\\mathbf{v}}(z)=T_{\\mathbf{v}}(y).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1611em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathbf mtight\" style=\"margin-right:0.016em;\">v</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1611em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathbf mtight\" style=\"margin-right:0.016em;\">v</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-35",
              type: "paragraph",
              children: [
                {
                  id: "text-290",
                  type: "text",
                  body: "Therefore,"
                }
              ]
            },
            {
              id: "displayMath-11",
              type: "displayMath",
              body: "\\mathbf{v}(z)=\\mathbf{v}(y).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-36",
              type: "paragraph",
              children: [
                {
                  id: "text-291",
                  type: "text",
                  body: "Applying "
                },
                {
                  id: "inlineMath-104",
                  type: "inlineMath",
                  body: "-\\mathbf{v}",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord\">−</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span></span></span></span>"
                },
                {
                  id: "text-292",
                  type: "text",
                  body: " to both sides, we obtain"
                }
              ]
            },
            {
              id: "displayMath-12",
              type: "displayMath",
              body: "(-\\mathbf{v})\\bigl(\\mathbf{v}(z)\\bigr)\n=\n(-\\mathbf{v})\\bigl(\\mathbf{v}(y)\\bigr).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mopen\">(</span><span class=\"mord\">−</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mclose\">)</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mopen\">(</span><span class=\"mord\">−</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mclose\">)</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-37",
              type: "paragraph",
              children: [
                {
                  id: "text-293",
                  type: "text",
                  body: "Hence,"
                }
              ]
            },
            {
              id: "displayMath-13",
              type: "displayMath",
              body: "(-\\mathbf{v}+\\mathbf{v})(z)\n=\n(-\\mathbf{v}+\\mathbf{v})(y),",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\">−</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\">−</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-38",
              type: "paragraph",
              children: [
                {
                  id: "text-294",
                  type: "text",
                  body: "and therefore"
                }
              ]
            },
            {
              id: "displayMath-14",
              type: "displayMath",
              body: "\\mathbf{0}(z)=\\mathbf{0}(y).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">0</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">0</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-39",
              type: "paragraph",
              children: [
                {
                  id: "text-295",
                  type: "text",
                  body: "It follows that"
                }
              ]
            },
            {
              id: "displayMath-15",
              type: "displayMath",
              body: "z=y.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-40",
              type: "paragraph",
              children: [
                {
                  id: "text-296",
                  type: "text",
                  body: "Let us now prove that "
                },
                {
                  id: "inlineMath-105",
                  type: "inlineMath",
                  body: "T_{\\mathbf{v}}",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8333em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1611em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathbf mtight\" style=\"margin-right:0.016em;\">v</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                },
                {
                  id: "text-297",
                  type: "text",
                  body: " is onto. For every "
                },
                {
                  id: "inlineMath-106",
                  type: "inlineMath",
                  body: "y\\in \\mathcal A",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathcal\">A</span></span></span></span>"
                },
                {
                  id: "text-298",
                  type: "text",
                  body: ", we"
                },
                {
                  id: "text-299",
                  type: "text",
                  body: " "
                },
                {
                  id: "text-300",
                  type: "text",
                  body: "need to prove that there exists "
                },
                {
                  id: "inlineMath-107",
                  type: "inlineMath",
                  body: "x\\in \\mathcal A",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathnormal\">x</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathcal\">A</span></span></span></span>"
                },
                {
                  id: "text-301",
                  type: "text",
                  body: " such that"
                }
              ]
            },
            {
              id: "displayMath-16",
              type: "displayMath",
              body: "\\mathbf{v}(x)=y.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-41",
              type: "paragraph",
              children: [
                {
                  id: "text-302",
                  type: "text",
                  body: "We simply take"
                }
              ]
            },
            {
              id: "displayMath-17",
              type: "displayMath",
              body: "x=(-\\mathbf{v})(y).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">x</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\">−</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-42",
              type: "paragraph",
              children: [
                {
                  id: "text-303",
                  type: "text",
                  body: "Then"
                }
              ]
            },
            {
              id: "displayMath-18",
              type: "displayMath",
              body: "\\mathbf{v}(x)\n=\n\\mathbf{v}\\bigl((-\\mathbf{v})(y)\\bigr)\n=\n(\\mathbf{v}-\\mathbf{v})(y)\n=\n\\mathbf{0}(y)\n=\ny.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mopen\">(</span><span class=\"mord\">−</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">0</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mord\">.</span></span></span></span></span>"
            }
          ]
        },
        {
          id: "paragraph-43",
          type: "paragraph",
          children: [
            {
              id: "text-304",
              type: "text",
              body: "We will conclude this essay with some basic examples of affine space:"
            }
          ]
        },
        {
          id: "itemize-2",
          type: "itemize",
          items: [
            {
              id: "item-6",
              type: "item",
              content: [
                {
                  id: "paragraph-44",
                  type: "paragraph",
                  children: [
                    {
                      id: "text-305",
                      type: "text",
                      body: "The ordinary Euclidean point space "
                    },
                    {
                      id: "inlineMath-108",
                      type: "inlineMath",
                      body: "\\mathcal A",
                      html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathcal\">A</span></span></span></span>"
                    },
                    {
                      id: "text-306",
                      type: "text",
                      body: ", with translation-vector"
                    },
                    {
                      id: "text-307",
                      type: "text",
                      body: " "
                    },
                    {
                      id: "text-308",
                      type: "text",
                      body: "space "
                    },
                    {
                      id: "inlineMath-109",
                      type: "inlineMath",
                      body: "V=\\mathbb R^3",
                      html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8141em;\"></span><span class=\"mord\"><span class=\"mord mathbb\">R</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span></span></span></span></span></span></span></span>"
                    },
                    {
                      id: "text-309",
                      type: "text",
                      body: ", is an affine space of dimension "
                    },
                    {
                      id: "inlineMath-110",
                      type: "inlineMath",
                      body: "3",
                      html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">3</span></span></span></span>"
                    },
                    {
                      id: "text-310",
                      type: "text",
                      body: "."
                    }
                  ]
                }
              ]
            },
            {
              id: "item-7",
              type: "item",
              content: [
                {
                  id: "paragraph-45",
                  type: "paragraph",
                  children: [
                    {
                      id: "text-311",
                      type: "text",
                      body: "Both Galilean spacetime and the spacetime of special relativity"
                    },
                    {
                      id: "text-312",
                      type: "text",
                      body: " "
                    },
                    {
                      id: "text-313",
                      type: "text",
                      body: "provide examples of the same affine construction. The points are"
                    },
                    {
                      id: "text-314",
                      type: "text",
                      body: " "
                    },
                    {
                      id: "text-315",
                      type: "text",
                      body: "events, and the vectors are spacetime displacements. In a chosen"
                    },
                    {
                      id: "text-316",
                      type: "text",
                      body: " "
                    },
                    {
                      id: "text-317",
                      type: "text",
                      body: "inertial coordinate system, an event has coordinates "
                    },
                    {
                      id: "inlineMath-111",
                      type: "inlineMath",
                      body: "(t,x,y,z)",
                      html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mclose\">)</span></span></span></span>"
                    },
                    {
                      id: "text-318",
                      type: "text",
                      body: ","
                    },
                    {
                      id: "text-319",
                      type: "text",
                      body: " "
                    },
                    {
                      id: "text-320",
                      type: "text",
                      body: "and a displacement "
                    },
                    {
                      id: "inlineMath-112",
                      type: "inlineMath",
                      body: "\\mathbf d=(\\Delta t,\\Delta x,\\Delta y,\\Delta z)",
                      html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathbf\">d</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\">Δ</span><span class=\"mord mathnormal\">t</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">Δ</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">Δ</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">Δ</span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mclose\">)</span></span></span></span>"
                    },
                    {
                      id: "text-321",
                      type: "text",
                      body: " acts on it by"
                    },
                    {
                      id: "text-322",
                      type: "text",
                      body: " "
                    },
                    {
                      id: "text-323",
                      type: "text",
                      body: "adding the corresponding increments. Given two events "
                    },
                    {
                      id: "inlineMath-113",
                      type: "inlineMath",
                      body: "p",
                      html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\">p</span></span></span></span>"
                    },
                    {
                      id: "text-324",
                      type: "text",
                      body: " and "
                    },
                    {
                      id: "inlineMath-114",
                      type: "inlineMath",
                      body: "q",
                      html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">q</span></span></span></span>"
                    },
                    {
                      id: "text-325",
                      type: "text",
                      body: ","
                    },
                    {
                      id: "text-326",
                      type: "text",
                      body: " "
                    },
                    {
                      id: "text-327",
                      type: "text",
                      body: "taking the difference of their coordinates gives the unique displacement"
                    },
                    {
                      id: "text-328",
                      type: "text",
                      body: " "
                    },
                    {
                      id: "inlineMath-115",
                      type: "inlineMath",
                      body: "\\mathbf d=\\overrightarrow{pq}",
                      html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathbf\">d</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.147em;vertical-align:-0.1944em;\"></span><span class=\"mord accent\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9526em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">pq</span></span></span><span class=\"svg-align\" style=\"top:-3.4306em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"hide-tail\" style=\"height:0.522em;min-width:0.888em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400em\" height=\"0.522em\" viewBox=\"0 0 400000 522\" preserveAspectRatio=\"xMaxYMin slice\"><path d=\"M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1944em;\"><span></span></span></span></span></span></span></span></span>"
                    },
                    {
                      id: "text-329",
                      type: "text",
                      body: " such that "
                    },
                    {
                      id: "inlineMath-116",
                      type: "inlineMath",
                      body: "\\mathbf d(p)=q",
                      html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">d</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">p</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">q</span></span></span></span>"
                    },
                    {
                      id: "text-330",
                      type: "text",
                      body: ". These affine spaces have dimension "
                    },
                    {
                      id: "inlineMath-117",
                      type: "inlineMath",
                      body: "4",
                      html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">4</span></span></span></span>"
                    },
                    {
                      id: "text-331",
                      type: "text",
                      body: "."
                    }
                  ]
                }
              ]
            },
            {
              id: "item-8",
              type: "item",
              content: [
                {
                  id: "paragraph-46",
                  type: "paragraph",
                  children: [
                    {
                      id: "text-332",
                      type: "text",
                      body: "Consider the set"
                    }
                  ]
                },
                {
                  id: "displayMath-19",
                  type: "displayMath",
                  body: "\\mathcal A\n  =\n  \\left\\{\n    f\\in C([0,1],\\mathbb R)\n    \\;\\middle|\\;\n    \\int_0^1 f(t)\\,dt=1\n  \\right\\},",
                  html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathcal\">A</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.514em;vertical-align:-0.95em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">{</span></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0715em;\">C</span><span class=\"mopen\">([</span><span class=\"mord\">0</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose\">]</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathbb\">R</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.45em;\"><span style=\"top:-3.45em;\"><span class=\"pstrut\" style=\"height:4.4em;\"></span><span style=\"width:0.333em;height:2.4em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.333em\" height=\"2.4em\" viewBox=\"0 0 333 2400\"><path d=\"M145 15 v585 v1200 v585 c2.667,10,9.667,15,21,15\nc10,0,16.667,-5,20,-15 v-585 v-1200 v-585 c-2.667,-10,-9.667,-15,-21,-15\nc-10,0,-16.667,5,-20,15z M188 15 H145 v585 v1200 v585 h43z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.95em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mop\"><span class=\"mop op-symbol large-op\" style=\"margin-right:0.4445em;position:relative;top:-0.0011em;\">∫</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.564em;\"><span style=\"top:-1.7881em;margin-left:-0.4445em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span><span style=\"top:-3.8129em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9119em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">}</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mpunct\">,</span></span></span></span></span>"
                },
                {
                  id: "paragraph-47",
                  type: "paragraph",
                  children: [
                    {
                      id: "text-333",
                      type: "text",
                      body: "where "
                    },
                    {
                      id: "inlineMath-118",
                      type: "inlineMath",
                      body: "C([0,1],\\mathbb R)",
                      html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0715em;\">C</span><span class=\"mopen\">([</span><span class=\"mord\">0</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose\">]</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathbb\">R</span><span class=\"mclose\">)</span></span></span></span>"
                    },
                    {
                      id: "text-334",
                      type: "text",
                      body: " denotes the set of continuous real-valued"
                    },
                    {
                      id: "text-335",
                      type: "text",
                      body: " "
                    },
                    {
                      id: "text-336",
                      type: "text",
                      body: "functions on "
                    },
                    {
                      id: "inlineMath-119",
                      type: "inlineMath",
                      body: "[0,1]",
                      html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">[</span><span class=\"mord\">0</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose\">]</span></span></span></span>"
                    },
                    {
                      id: "text-337",
                      type: "text",
                      body: ". The set"
                    }
                  ]
                },
                {
                  id: "displayMath-20",
                  type: "displayMath",
                  body: "V\n  =\n  \\left\\{\n    \\mathbf v\\in C([0,1],\\mathbb R)\n    \\;\\middle|\\;\n    \\int_0^1 \\mathbf v(t)\\,dt=0\n  \\right\\}",
                  html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.514em;vertical-align:-0.95em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">{</span></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0715em;\">C</span><span class=\"mopen\">([</span><span class=\"mord\">0</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose\">]</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathbb\">R</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.45em;\"><span style=\"top:-3.45em;\"><span class=\"pstrut\" style=\"height:4.4em;\"></span><span style=\"width:0.333em;height:2.4em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.333em\" height=\"2.4em\" viewBox=\"0 0 333 2400\"><path d=\"M145 15 v585 v1200 v585 c2.667,10,9.667,15,21,15\nc10,0,16.667,-5,20,-15 v-585 v-1200 v-585 c-2.667,-10,-9.667,-15,-21,-15\nc-10,0,-16.667,5,-20,15z M188 15 H145 v585 v1200 v585 h43z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.95em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mop\"><span class=\"mop op-symbol large-op\" style=\"margin-right:0.4445em;position:relative;top:-0.0011em;\">∫</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.564em;\"><span style=\"top:-1.7881em;margin-left:-0.4445em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span><span style=\"top:-3.8129em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9119em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">}</span></span></span></span></span></span></span>"
                },
                {
                  id: "paragraph-48",
                  type: "paragraph",
                  children: [
                    {
                      id: "text-338",
                      type: "text",
                      body: "is a vector space under the usual operations on functions. It acts on"
                    },
                    {
                      id: "text-339",
                      type: "text",
                      body: " "
                    },
                    {
                      id: "inlineMath-120",
                      type: "inlineMath",
                      body: "\\mathcal A",
                      html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathcal\">A</span></span></span></span>"
                    },
                    {
                      id: "text-340",
                      type: "text",
                      body: " by addition, "
                    },
                    {
                      id: "inlineMath-121",
                      type: "inlineMath",
                      body: "\\mathbf v(f)=f+\\mathbf v",
                      html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span></span></span></span>"
                    },
                    {
                      id: "text-341",
                      type: "text",
                      body: ". Given any two functions"
                    },
                    {
                      id: "text-342",
                      type: "text",
                      body: " "
                    },
                    {
                      id: "inlineMath-122",
                      type: "inlineMath",
                      body: "f,g\\in\\mathcal A",
                      html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">g</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathcal\">A</span></span></span></span>"
                    },
                    {
                      id: "text-343",
                      type: "text",
                      body: ", the unique displacement that takes "
                    },
                    {
                      id: "inlineMath-123",
                      type: "inlineMath",
                      body: "f",
                      html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span></span></span></span>"
                    },
                    {
                      id: "text-344",
                      type: "text",
                      body: " to "
                    },
                    {
                      id: "inlineMath-124",
                      type: "inlineMath",
                      body: "g",
                      html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">g</span></span></span></span>"
                    },
                    {
                      id: "text-345",
                      type: "text",
                      body: " is"
                    },
                    {
                      id: "text-346",
                      type: "text",
                      body: " "
                    },
                    {
                      id: "inlineMath-125",
                      type: "inlineMath",
                      body: "\\mathbf d:=g-f",
                      html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathbf\">d</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">:=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7778em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">g</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span></span></span></span>"
                    },
                    {
                      id: "text-347",
                      type: "text",
                      body: ", whose integral is zero. Thus "
                    },
                    {
                      id: "inlineMath-126",
                      type: "inlineMath",
                      body: "\\mathbf d(f)=g",
                      html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">d</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">g</span></span></span></span>"
                    },
                    {
                      id: "text-348",
                      type: "text",
                      body: ", and"
                    },
                    {
                      id: "text-349",
                      type: "text",
                      body: " "
                    },
                    {
                      id: "inlineMath-127",
                      type: "inlineMath",
                      body: "\\mathcal A",
                      html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathcal\">A</span></span></span></span>"
                    },
                    {
                      id: "text-350",
                      type: "text",
                      body: ", together with "
                    },
                    {
                      id: "inlineMath-128",
                      type: "inlineMath",
                      body: "V",
                      html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                    },
                    {
                      id: "text-351",
                      type: "text",
                      body: " and this action, is an affine space. This affine space has infinite dimension."
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      subsections: [],
      numbering: {
        path: [
          2,
          0,
          0
        ]
      }
    }
  ]
} as const satisfies LatexDocumentNode;
