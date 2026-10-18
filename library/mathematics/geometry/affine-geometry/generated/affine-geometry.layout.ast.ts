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
      intro: [],
      subsections: [],
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
          id: "text-2",
          type: "text",
          body: "Affine Spaces"
        }
      ],
      intro: [
        {
          id: "paragraph-1",
          type: "paragraph",
          children: [
            {
              body: "Definition of an affine space.",
              id: "textbf-1",
              type: "textbf"
            },
            {
              id: "text-3",
              type: "text",
              body: "An "
            },
            {
              id: "inlineMath-1",
              type: "inlineMath",
              body: "n",
              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">n</span></span></span></span>"
            },
            {
              id: "text-4",
              type: "text",
              body: "-dimensional affine space over the field of real numbers"
            },
            {
              id: "inlineMath-2",
              type: "inlineMath",
              body: "\\mathbb{R}",
              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6889em;\"></span><span class=\"mord mathbb\">R</span></span></span></span>"
            },
            {
              id: "text-5",
              type: "text",
              body: "consists of:"
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
                  id: "paragraph-2",
                  type: "paragraph",
                  children: [
                    {
                      id: "text-6",
                      type: "text",
                      body: "a vector space "
                    },
                    {
                      id: "inlineMath-3",
                      type: "inlineMath",
                      body: "V",
                      html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                    },
                    {
                      id: "text-7",
                      type: "text",
                      body: ", whose elements are called vectors;"
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
                  id: "paragraph-3",
                  type: "paragraph",
                  children: [
                    {
                      id: "text-8",
                      type: "text",
                      body: "a set "
                    },
                    {
                      id: "inlineMath-4",
                      type: "inlineMath",
                      body: "X",
                      html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0785em;\">X</span></span></span></span>"
                    },
                    {
                      id: "text-9",
                      type: "text",
                      body: ", whose elements are called points."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "paragraph-4",
          type: "paragraph",
          children: [
            {
              id: "text-10",
              type: "text",
              body: "To each vector "
            },
            {
              id: "inlineMath-5",
              type: "inlineMath",
              body: "\\mathbf{v} \\in V",
              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
            },
            {
              id: "text-11",
              type: "text",
              body: "is associated a mapping"
            }
          ]
        },
        {
          id: "displayMath-1",
          type: "displayMath",
          body: "\\mathbf{v} \\colon X \\longrightarrow X,",
          html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6943em;vertical-align:-0.011em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace nobreak\"></span><span class=\"mspace\" style=\"margin-right:0.1111em;\"></span><span class=\"mpunct\"></span><span class=\"mspace\" style=\"margin-right:-0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mrel\">:</span></span><span class=\"mspace\" style=\"margin-right:0.3333em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0785em;\">X</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">⟶</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8778em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0785em;\">X</span><span class=\"mpunct\">,</span></span></span></span></span>"
        },
        {
          id: "displayMath-2",
          type: "displayMath",
          body: "\\mathbf{v}(x) = y,",
          html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mpunct\">,</span></span></span></span></span>"
        },
        {
          id: "paragraph-5",
          type: "paragraph",
          children: [
            {
              id: "text-12",
              type: "text",
              body: "where "
            },
            {
              id: "inlineMath-6",
              type: "inlineMath",
              body: "x,y \\in X",
              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0785em;\">X</span></span></span></span>"
            },
            {
              id: "text-13",
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
                  id: "paragraph-6",
                  type: "paragraph",
                  children: [
                    {
                      id: "inlineMath-7",
                      type: "inlineMath",
                      body: "\\mathbf{0}(x)=x",
                      html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">0</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">x</span></span></span></span>"
                    },
                    {
                      id: "text-14",
                      type: "text",
                      body: ", where "
                    },
                    {
                      id: "inlineMath-8",
                      type: "inlineMath",
                      body: "\\mathbf{0}",
                      html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord mathbf\">0</span></span></span></span>"
                    },
                    {
                      id: "text-15",
                      type: "text",
                      body: "is the null vector."
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
                  id: "paragraph-7",
                  type: "paragraph",
                  children: [
                    {
                      id: "text-16",
                      type: "text",
                      body: "For all "
                    },
                    {
                      id: "inlineMath-9",
                      type: "inlineMath",
                      body: "x,y\\in X",
                      html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0785em;\">X</span></span></span></span>"
                    },
                    {
                      id: "text-17",
                      type: "text",
                      body: ", there exists a unique "
                    },
                    {
                      id: "inlineMath-10",
                      type: "inlineMath",
                      body: "\\mathbf{v}\\in V",
                      html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                    },
                    {
                      id: "text-18",
                      type: "text",
                      body: "such that "
                    },
                    {
                      id: "inlineMath-11",
                      type: "inlineMath",
                      body: "\\mathbf{v}(x)=y",
                      html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span></span></span></span>"
                    },
                    {
                      id: "text-19",
                      type: "text",
                      body: ", and we denote"
                    },
                    {
                      id: "inlineMath-12",
                      type: "inlineMath",
                      body: "\\mathbf{v}=\\overrightarrow{xy}",
                      html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.147em;vertical-align:-0.1944em;\"></span><span class=\"mord accent\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9526em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span></span></span><span class=\"svg-align\" style=\"top:-3.4306em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"hide-tail\" style=\"height:0.522em;min-width:0.888em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400em\" height=\"0.522em\" viewBox=\"0 0 400000 522\" preserveAspectRatio=\"xMaxYMin slice\"><path d=\"M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1944em;\"><span></span></span></span></span></span></span></span></span>"
                    },
                    {
                      id: "text-20",
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
                  id: "paragraph-8",
                  type: "paragraph",
                  children: [
                    {
                      id: "text-21",
                      type: "text",
                      body: "If "
                    },
                    {
                      id: "inlineMath-13",
                      type: "inlineMath",
                      body: "\\mathbf{v},\\mathbf{w}\\in V",
                      html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">w</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                    },
                    {
                      id: "text-22",
                      type: "text",
                      body: ", the composition of the action"
                    },
                    {
                      id: "text-23",
                      type: "text",
                      body: "of two vectors is defined formally as the sum of two vectors:"
                    }
                  ]
                },
                {
                  id: "displayMath-3",
                  type: "displayMath",
                  body: "(\\mathbf{v}\\circ\\mathbf{w})(x)\n    =\\mathbf{v}\\bigl(\\mathbf{w}(x)\\bigr)\n    \\coloneqq(\\mathbf{v}+\\mathbf{w})(x).",
                  html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">∘</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">w</span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">w</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\"><span class=\"mrel\"><span class=\"mop\" style=\"position:relative;top:-0.0347em;\">:</span></span><span class=\"mrel\"><span class=\"mspace\" style=\"margin-right:-0.0667em;\"></span></span><span class=\"mrel\">=</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">w</span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
                }
              ]
            }
          ]
        },
        {
          id: "paragraph-9",
          type: "paragraph",
          children: [
            {
              id: "text-24",
              type: "text",
              body: "Such a composition must be commutative, as the sum of vectors is:"
            }
          ]
        },
        {
          id: "displayMath-4",
          type: "displayMath",
          body: "\\mathbf{v}\\circ\\mathbf{w}\n=\n\\mathbf{v}+\\mathbf{w}\n=\n\\mathbf{w}+\\mathbf{v}\n=\n\\mathbf{w}\\circ\\mathbf{v}.",
          html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4445em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">∘</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">w</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">w</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">w</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.4445em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">w</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">∘</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mord\">.</span></span></span></span></span>"
        },
        {
          id: "theorem-1",
          type: "theorem",
          label: "thm:affine-composition",
          content: [
            {
              id: "paragraph-10",
              type: "paragraph",
              children: [
                {
                  id: "text-25",
                  type: "text",
                  body: "The composition of translations is commutative."
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
          id: "paragraph-11",
          type: "paragraph",
          children: [
            {
              id: "text-26",
              type: "text",
              body: "By Theorem "
            },
            {
              id: "ref-1",
              type: "ref",
              body: "thm:affine-composition"
            },
            {
              id: "text-27",
              type: "text",
              body: ", the composition is commutative."
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
