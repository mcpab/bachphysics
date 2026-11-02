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
          id: "definition-1",
          type: "definition",
          title: [
            {
              id: "text-3",
              type: "text",
              body: "Affine space"
            }
          ],
          content: [
            {
              id: "paragraph-1",
              type: "paragraph",
              children: [
                {
                  id: "text-4",
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
                  id: "text-5",
                  type: "text",
                  body: "-dimensional affine space over "
                },
                {
                  id: "inlineMath-2",
                  type: "inlineMath",
                  body: "\\mathbb{R}",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6889em;\"></span><span class=\"mord mathbb\">R</span></span></span></span>"
                },
                {
                  id: "text-6",
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
                      id: "paragraph-2",
                      type: "paragraph",
                      children: [
                        {
                          id: "text-7",
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
                          id: "text-8",
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
                      id: "paragraph-3",
                      type: "paragraph",
                      children: [
                        {
                          id: "text-9",
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
                          id: "text-10",
                          type: "text",
                          body: " of points."
                        }
                      ]
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
          id: "paragraph-4",
          type: "paragraph",
          children: [
            {
              id: "text-11",
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
              id: "text-12",
              type: "text",
              body: " is associated a mapping"
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
              id: "text-13",
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
              id: "text-14",
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
                      id: "text-15",
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
                      id: "text-16",
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
                  id: "paragraph-7",
                  type: "paragraph",
                  children: [
                    {
                      id: "text-17",
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
                      id: "text-18",
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
                      id: "text-19",
                      type: "text",
                      body: " "
                    },
                    {
                      id: "text-20",
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
                      id: "text-21",
                      type: "text",
                      body: ", and we denote"
                    },
                    {
                      id: "text-22",
                      type: "text",
                      body: " "
                    },
                    {
                      id: "inlineMath-12",
                      type: "inlineMath",
                      body: "\\mathbf{v}=\\overrightarrow{xy}",
                      html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.147em;vertical-align:-0.1944em;\"></span><span class=\"mord accent\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9526em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span></span></span><span class=\"svg-align\" style=\"top:-3.4306em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"hide-tail\" style=\"height:0.522em;min-width:0.888em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400em\" height=\"0.522em\" viewBox=\"0 0 400000 522\" preserveAspectRatio=\"xMaxYMin slice\"><path d=\"M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1944em;\"><span></span></span></span></span></span></span></span></span>"
                    },
                    {
                      id: "text-23",
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
                      id: "text-24",
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
                      id: "text-25",
                      type: "text",
                      body: ", the composition of the action"
                    },
                    {
                      id: "text-26",
                      type: "text",
                      body: " "
                    },
                    {
                      id: "text-27",
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
              id: "text-28",
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
          id: "definition-2",
          type: "definition",
          title: [
            {
              id: "text-29",
              type: "text",
              body: "Translation"
            }
          ],
          content: [
            {
              id: "paragraph-10",
              type: "paragraph",
              children: [
                {
                  id: "text-30",
                  type: "text",
                  body: "To any given vector "
                },
                {
                  id: "inlineMath-14",
                  type: "inlineMath",
                  body: "\\mathbf{v}\\in V",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                },
                {
                  id: "text-31",
                  type: "text",
                  body: " is associated a mapping"
                }
              ]
            },
            {
              id: "displayMath-5",
              type: "displayMath",
              body: "T_{\\mathbf{v}}\\colon X\\longrightarrow X",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8333em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1611em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathbf mtight\" style=\"margin-right:0.016em;\">v</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace nobreak\"></span><span class=\"mspace\" style=\"margin-right:0.1111em;\"></span><span class=\"mpunct\"></span><span class=\"mspace\" style=\"margin-right:-0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mrel\">:</span></span><span class=\"mspace\" style=\"margin-right:0.3333em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0785em;\">X</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">⟶</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0785em;\">X</span></span></span></span></span>"
            },
            {
              id: "paragraph-11",
              type: "paragraph",
              children: [
                {
                  id: "text-32",
                  type: "text",
                  body: "such that"
                }
              ]
            },
            {
              id: "displayMath-6",
              type: "displayMath",
              body: "T_{\\mathbf{v}}(x)=\\mathbf{v}(x).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1611em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathbf mtight\" style=\"margin-right:0.016em;\">v</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-12",
              type: "paragraph",
              children: [
                {
                  id: "text-33",
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
          id: "proposition-1",
          type: "proposition",
          content: [
            {
              id: "paragraph-13",
              type: "paragraph",
              children: [
                {
                  id: "text-34",
                  type: "text",
                  body: "For every "
                },
                {
                  id: "inlineMath-15",
                  type: "inlineMath",
                  body: "\\mathbf{v}\\in V",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                },
                {
                  id: "text-35",
                  type: "text",
                  body: ", the translation"
                }
              ]
            },
            {
              id: "displayMath-7",
              type: "displayMath",
              body: "T_{\\mathbf{v}}\\colon X\\longrightarrow X",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8333em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1611em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathbf mtight\" style=\"margin-right:0.016em;\">v</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace nobreak\"></span><span class=\"mspace\" style=\"margin-right:0.1111em;\"></span><span class=\"mpunct\"></span><span class=\"mspace\" style=\"margin-right:-0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mrel\">:</span></span><span class=\"mspace\" style=\"margin-right:0.3333em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0785em;\">X</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">⟶</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0785em;\">X</span></span></span></span></span>"
            },
            {
              id: "paragraph-14",
              type: "paragraph",
              children: [
                {
                  id: "text-36",
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
              id: "paragraph-15",
              type: "paragraph",
              children: [
                {
                  id: "text-37",
                  type: "text",
                  body: "Let us prove that "
                },
                {
                  id: "inlineMath-16",
                  type: "inlineMath",
                  body: "T_{\\mathbf{v}}",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8333em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1611em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathbf mtight\" style=\"margin-right:0.016em;\">v</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                },
                {
                  id: "text-38",
                  type: "text",
                  body: " is one-to-one. Assume that"
                },
                {
                  id: "text-39",
                  type: "text",
                  body: " "
                },
                {
                  id: "inlineMath-17",
                  type: "inlineMath",
                  body: "z,y\\in X",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0785em;\">X</span></span></span></span>"
                },
                {
                  id: "text-40",
                  type: "text",
                  body: " and"
                }
              ]
            },
            {
              id: "displayMath-8",
              type: "displayMath",
              body: "T_{\\mathbf{v}}(z)=T_{\\mathbf{v}}(y).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1611em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathbf mtight\" style=\"margin-right:0.016em;\">v</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1611em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathbf mtight\" style=\"margin-right:0.016em;\">v</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-16",
              type: "paragraph",
              children: [
                {
                  id: "text-41",
                  type: "text",
                  body: "Therefore,"
                }
              ]
            },
            {
              id: "displayMath-9",
              type: "displayMath",
              body: "\\mathbf{v}(z)=\\mathbf{v}(y).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-17",
              type: "paragraph",
              children: [
                {
                  id: "text-42",
                  type: "text",
                  body: "Applying "
                },
                {
                  id: "inlineMath-18",
                  type: "inlineMath",
                  body: "-\\mathbf{v}",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord\">−</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span></span></span></span>"
                },
                {
                  id: "text-43",
                  type: "text",
                  body: " to both sides, we obtain"
                }
              ]
            },
            {
              id: "displayMath-10",
              type: "displayMath",
              body: "(-\\mathbf{v})\\bigl(\\mathbf{v}(z)\\bigr)\n=\n(-\\mathbf{v})\\bigl(\\mathbf{v}(y)\\bigr).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mopen\">(</span><span class=\"mord\">−</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mclose\">)</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mopen\">(</span><span class=\"mord\">−</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mclose\">)</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-18",
              type: "paragraph",
              children: [
                {
                  id: "text-44",
                  type: "text",
                  body: "Hence,"
                }
              ]
            },
            {
              id: "displayMath-11",
              type: "displayMath",
              body: "(-\\mathbf{v}+\\mathbf{v})(z)\n=\n(-\\mathbf{v}+\\mathbf{v})(y),",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\">−</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\">−</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-19",
              type: "paragraph",
              children: [
                {
                  id: "text-45",
                  type: "text",
                  body: "and therefore"
                }
              ]
            },
            {
              id: "displayMath-12",
              type: "displayMath",
              body: "\\mathbf{0}(z)=\\mathbf{0}(y).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">0</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">0</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-20",
              type: "paragraph",
              children: [
                {
                  id: "text-46",
                  type: "text",
                  body: "It follows that"
                }
              ]
            },
            {
              id: "displayMath-13",
              type: "displayMath",
              body: "z=y.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-21",
              type: "paragraph",
              children: [
                {
                  id: "text-47",
                  type: "text",
                  body: "Let us now prove that "
                },
                {
                  id: "inlineMath-19",
                  type: "inlineMath",
                  body: "T_{\\mathbf{v}}",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8333em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1611em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathbf mtight\" style=\"margin-right:0.016em;\">v</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                },
                {
                  id: "text-48",
                  type: "text",
                  body: " is onto. For every "
                },
                {
                  id: "inlineMath-20",
                  type: "inlineMath",
                  body: "y\\in X",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0785em;\">X</span></span></span></span>"
                },
                {
                  id: "text-49",
                  type: "text",
                  body: ", we"
                },
                {
                  id: "text-50",
                  type: "text",
                  body: " "
                },
                {
                  id: "text-51",
                  type: "text",
                  body: "need to prove that there exists "
                },
                {
                  id: "inlineMath-21",
                  type: "inlineMath",
                  body: "x\\in X",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathnormal\">x</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0785em;\">X</span></span></span></span>"
                },
                {
                  id: "text-52",
                  type: "text",
                  body: " such that"
                }
              ]
            },
            {
              id: "displayMath-14",
              type: "displayMath",
              body: "\\mathbf{v}(x)=y.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-22",
              type: "paragraph",
              children: [
                {
                  id: "text-53",
                  type: "text",
                  body: "We simply take"
                }
              ]
            },
            {
              id: "displayMath-15",
              type: "displayMath",
              body: "x=(-\\mathbf{v})(y).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">x</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\">−</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-23",
              type: "paragraph",
              children: [
                {
                  id: "text-54",
                  type: "text",
                  body: "Then"
                }
              ]
            },
            {
              id: "displayMath-16",
              type: "displayMath",
              body: "\\mathbf{v}(x)\n=\n\\mathbf{v}\\bigl((-\\mathbf{v})(y)\\bigr)\n=\n(\\mathbf{v}-\\mathbf{v})(y)\n=\n\\mathbf{0}(y)\n=\ny.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mopen\">(</span><span class=\"mord\">−</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">0</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mord\">.</span></span></span></span></span>"
            }
          ]
        },
        {
          id: "definition-3",
          type: "definition",
          title: [
            {
              id: "text-55",
              type: "text",
              body: "Permutation group"
            }
          ],
          content: [
            {
              id: "paragraph-24",
              type: "paragraph",
              children: [
                {
                  id: "text-56",
                  type: "text",
                  body: "Let "
                },
                {
                  id: "inlineMath-22",
                  type: "inlineMath",
                  body: "X",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0785em;\">X</span></span></span></span>"
                },
                {
                  id: "text-57",
                  type: "text",
                  body: " be a set. The set"
                }
              ]
            },
            {
              id: "displayMath-17",
              type: "displayMath",
              body: "S_X\n=\n\\left\\{\nf\\colon X\\longrightarrow X\n\\;\\middle|\\;\nf \\text{ is bijective}\n\\right\\}",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8333em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3283em;\"><span style=\"top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0785em;\">X</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">{</span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mspace nobreak\"></span><span class=\"mspace\" style=\"margin-right:0.1111em;\"></span><span class=\"mpunct\"></span><span class=\"mspace\" style=\"margin-right:-0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mrel\">:</span></span><span class=\"mspace\" style=\"margin-right:0.3333em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0785em;\">X</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">⟶</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0785em;\">X</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"delimcenter\" style=\"top:0em;\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mord text\"><span class=\"mord\"> is bijective</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">}</span></span></span></span></span></span>"
            },
            {
              id: "paragraph-25",
              type: "paragraph",
              children: [
                {
                  id: "text-58",
                  type: "text",
                  body: "is called the permutation group of "
                },
                {
                  id: "inlineMath-23",
                  type: "inlineMath",
                  body: "X",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0785em;\">X</span></span></span></span>"
                },
                {
                  id: "text-59",
                  type: "text",
                  body: ". Its group operation is the"
                },
                {
                  id: "text-60",
                  type: "text",
                  body: " "
                },
                {
                  id: "text-61",
                  type: "text",
                  body: "composition of mappings."
                }
              ]
            }
          ],
          numbering: {
            path: [
              2,
              4
            ]
          }
        },
        {
          id: "proposition-2",
          type: "proposition",
          content: [
            {
              id: "paragraph-26",
              type: "paragraph",
              children: [
                {
                  id: "text-62",
                  type: "text",
                  body: "The mapping"
                }
              ]
            },
            {
              id: "displayMath-18",
              type: "displayMath",
              body: "\\rho\\colon V\\longrightarrow S_X,\n\\qquad\n\\rho(\\mathbf{v})=T_{\\mathbf{v}},",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8778em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\">ρ</span><span class=\"mspace nobreak\"></span><span class=\"mspace\" style=\"margin-right:0.1111em;\"></span><span class=\"mpunct\"></span><span class=\"mspace\" style=\"margin-right:-0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mrel\">:</span></span><span class=\"mspace\" style=\"margin-right:0.3333em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">⟶</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3283em;\"><span style=\"top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0785em;\">X</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\">ρ</span><span class=\"mopen\">(</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8778em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1611em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathbf mtight\" style=\"margin-right:0.016em;\">v</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-27",
              type: "paragraph",
              children: [
                {
                  id: "text-63",
                  type: "text",
                  body: "is an injective homomorphism from the additive group of "
                },
                {
                  id: "inlineMath-24",
                  type: "inlineMath",
                  body: "V",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                },
                {
                  id: "text-64",
                  type: "text",
                  body: " into the"
                },
                {
                  id: "text-65",
                  type: "text",
                  body: " "
                },
                {
                  id: "text-66",
                  type: "text",
                  body: "permutation group "
                },
                {
                  id: "inlineMath-25",
                  type: "inlineMath",
                  body: "S_X",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8333em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3283em;\"><span style=\"top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0785em;\">X</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                },
                {
                  id: "text-67",
                  type: "text",
                  body: "."
                }
              ]
            }
          ],
          numbering: {
            path: [
              2,
              5
            ]
          }
        },
        {
          id: "proof-2",
          type: "proof",
          content: [
            {
              id: "paragraph-28",
              type: "paragraph",
              children: [
                {
                  id: "text-68",
                  type: "text",
                  body: "We first prove that "
                },
                {
                  id: "inlineMath-26",
                  type: "inlineMath",
                  body: "\\rho",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\">ρ</span></span></span></span>"
                },
                {
                  id: "text-69",
                  type: "text",
                  body: " preserves the group operation. Let"
                },
                {
                  id: "text-70",
                  type: "text",
                  body: " "
                },
                {
                  id: "inlineMath-27",
                  type: "inlineMath",
                  body: "\\mathbf{u},\\mathbf{v}\\in V",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                },
                {
                  id: "text-71",
                  type: "text",
                  body: ". For every "
                },
                {
                  id: "inlineMath-28",
                  type: "inlineMath",
                  body: "x\\in X",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathnormal\">x</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0785em;\">X</span></span></span></span>"
                },
                {
                  id: "text-72",
                  type: "text",
                  body: ","
                }
              ]
            },
            {
              id: "displayMath-19",
              type: "displayMath",
              body: "\\rho(\\mathbf{u}+\\mathbf{v})(x)\n=\nT_{\\mathbf{u}+\\mathbf{v}}(x)\n=\n(\\mathbf{u}+\\mathbf{v})(x).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">ρ</span><span class=\"mopen\">(</span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2583em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathbf mtight\">u</span><span class=\"mbin mtight\">+</span><span class=\"mord mathbf mtight\" style=\"margin-right:0.016em;\">v</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2083em;\"><span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-29",
              type: "paragraph",
              children: [
                {
                  id: "text-73",
                  type: "text",
                  body: "By the definition of the action of the sum of two vectors,"
                }
              ]
            },
            {
              id: "displayMath-20",
              type: "displayMath",
              body: "(\\mathbf{u}+\\mathbf{v})(x)\n=\n\\mathbf{u}\\bigl(\\mathbf{v}(x)\\bigr)\n=\n\\bigl(T_{\\mathbf{u}}\\circ T_{\\mathbf{v}}\\bigr)(x).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1611em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathbf mtight\">u</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">∘</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1611em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathbf mtight\" style=\"margin-right:0.016em;\">v</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-30",
              type: "paragraph",
              children: [
                {
                  id: "text-74",
                  type: "text",
                  body: "Therefore,"
                }
              ]
            },
            {
              id: "displayMath-21",
              type: "displayMath",
              body: "\\rho(\\mathbf{u}+\\mathbf{v})\n=\n\\rho(\\mathbf{u})\\circ\\rho(\\mathbf{v}),",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">ρ</span><span class=\"mopen\">(</span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">ρ</span><span class=\"mopen\">(</span><span class=\"mord mathbf\">u</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">∘</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">ρ</span><span class=\"mopen\">(</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-31",
              type: "paragraph",
              children: [
                {
                  id: "text-75",
                  type: "text",
                  body: "and hence "
                },
                {
                  id: "inlineMath-29",
                  type: "inlineMath",
                  body: "\\rho",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\">ρ</span></span></span></span>"
                },
                {
                  id: "text-76",
                  type: "text",
                  body: " is a homomorphism."
                }
              ]
            },
            {
              id: "paragraph-32",
              type: "paragraph",
              children: [
                {
                  id: "text-77",
                  type: "text",
                  body: "We now prove that "
                },
                {
                  id: "inlineMath-30",
                  type: "inlineMath",
                  body: "\\rho",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\">ρ</span></span></span></span>"
                },
                {
                  id: "text-78",
                  type: "text",
                  body: " is injective. Assume that"
                }
              ]
            },
            {
              id: "displayMath-22",
              type: "displayMath",
              body: "\\rho(\\mathbf{u})=\\rho(\\mathbf{v}).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">ρ</span><span class=\"mopen\">(</span><span class=\"mord mathbf\">u</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">ρ</span><span class=\"mopen\">(</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-33",
              type: "paragraph",
              children: [
                {
                  id: "text-79",
                  type: "text",
                  body: "Then"
                }
              ]
            },
            {
              id: "displayMath-23",
              type: "displayMath",
              body: "T_{\\mathbf{u}}(x)=T_{\\mathbf{v}}(x)",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1611em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathbf mtight\">u</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1611em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathbf mtight\" style=\"margin-right:0.016em;\">v</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span></span></span></span></span>"
            },
            {
              id: "paragraph-34",
              type: "paragraph",
              children: [
                {
                  id: "text-80",
                  type: "text",
                  body: "for every "
                },
                {
                  id: "inlineMath-31",
                  type: "inlineMath",
                  body: "x\\in X",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathnormal\">x</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0785em;\">X</span></span></span></span>"
                },
                {
                  id: "text-81",
                  type: "text",
                  body: ", and therefore"
                }
              ]
            },
            {
              id: "displayMath-24",
              type: "displayMath",
              body: "\\mathbf{u}(x)=\\mathbf{v}(x).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-35",
              type: "paragraph",
              children: [
                {
                  id: "text-82",
                  type: "text",
                  body: "Applying "
                },
                {
                  id: "inlineMath-32",
                  type: "inlineMath",
                  body: "-\\mathbf{v}",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord\">−</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span></span></span></span>"
                },
                {
                  id: "text-83",
                  type: "text",
                  body: " to both sides gives"
                }
              ]
            },
            {
              id: "displayMath-25",
              type: "displayMath",
              body: "(-\\mathbf{v})\\bigl(\\mathbf{u}(x)\\bigr)\n=\n(-\\mathbf{v})\\bigl(\\mathbf{v}(x)\\bigr).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mopen\">(</span><span class=\"mord\">−</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mclose\">)</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathbf\">u</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mopen\">(</span><span class=\"mord\">−</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mclose\">)</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-36",
              type: "paragraph",
              children: [
                {
                  id: "text-84",
                  type: "text",
                  body: "Thus,"
                }
              ]
            },
            {
              id: "displayMath-26",
              type: "displayMath",
              body: "(-\\mathbf{v}+\\mathbf{u})(x)\n=\n(-\\mathbf{v}+\\mathbf{v})(x)\n=\n\\mathbf{0}(x)\n=\nx.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\">−</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\">−</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">0</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">x</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-37",
              type: "paragraph",
              children: [
                {
                  id: "text-85",
                  type: "text",
                  body: "By the uniqueness of the vector that maps "
                },
                {
                  id: "inlineMath-33",
                  type: "inlineMath",
                  body: "x",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">x</span></span></span></span>"
                },
                {
                  id: "text-86",
                  type: "text",
                  body: " onto itself,"
                }
              ]
            },
            {
              id: "displayMath-27",
              type: "displayMath",
              body: "-\\mathbf{v}+\\mathbf{u}=\\mathbf{0},",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord\">−</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8389em;vertical-align:-0.1944em;\"></span><span class=\"mord mathbf\">0</span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-38",
              type: "paragraph",
              children: [
                {
                  id: "text-87",
                  type: "text",
                  body: "and hence"
                }
              ]
            },
            {
              id: "displayMath-28",
              type: "displayMath",
              body: "\\mathbf{u}=\\mathbf{v}.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-39",
              type: "paragraph",
              children: [
                {
                  id: "text-88",
                  type: "text",
                  body: "Therefore, "
                },
                {
                  id: "inlineMath-34",
                  type: "inlineMath",
                  body: "\\rho",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\">ρ</span></span></span></span>"
                },
                {
                  id: "text-89",
                  type: "text",
                  body: " is injective."
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
    },
    {
      id: "section-3",
      type: "section",
      title: [
        {
          id: "text-90",
          type: "text",
          body: "Affine Subspaces"
        }
      ],
      intro: [
        {
          id: "definition-4",
          type: "definition",
          title: [
            {
              id: "text-91",
              type: "text",
              body: "Affine subspace"
            }
          ],
          content: [
            {
              id: "paragraph-40",
              type: "paragraph",
              children: [
                {
                  id: "text-92",
                  type: "text",
                  body: "Let "
                },
                {
                  id: "inlineMath-35",
                  type: "inlineMath",
                  body: "x\\in X",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathnormal\">x</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0785em;\">X</span></span></span></span>"
                },
                {
                  id: "text-93",
                  type: "text",
                  body: ", and let "
                },
                {
                  id: "inlineMath-36",
                  type: "inlineMath",
                  body: "U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-94",
                  type: "text",
                  body: " be a vector subspace of "
                },
                {
                  id: "inlineMath-37",
                  type: "inlineMath",
                  body: "V",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                },
                {
                  id: "text-95",
                  type: "text",
                  body: ". The affine"
                },
                {
                  id: "text-96",
                  type: "text",
                  body: " "
                },
                {
                  id: "text-97",
                  type: "text",
                  body: "subspace of "
                },
                {
                  id: "inlineMath-38",
                  type: "inlineMath",
                  body: "X",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0785em;\">X</span></span></span></span>"
                },
                {
                  id: "text-98",
                  type: "text",
                  body: " determined by "
                },
                {
                  id: "inlineMath-39",
                  type: "inlineMath",
                  body: "x",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">x</span></span></span></span>"
                },
                {
                  id: "text-99",
                  type: "text",
                  body: " and "
                },
                {
                  id: "inlineMath-40",
                  type: "inlineMath",
                  body: "U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-100",
                  type: "text",
                  body: " is"
                }
              ]
            },
            {
              id: "displayMath-29",
              type: "displayMath",
              body: "S(x,U)\n=\n\\left\\{\n\\mathbf{u}(x)\n\\;\\middle|\\;\n\\mathbf{u}\\in U\n\\right\\}.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">{</span><span class=\"mord mathbf\">u</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"delimcenter\" style=\"top:0em;\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose delimcenter\" style=\"top:0em;\">}</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-41",
              type: "paragraph",
              children: [
                {
                  id: "text-101",
                  type: "text",
                  body: "Its dimension is defined by"
                }
              ]
            },
            {
              id: "displayMath-30",
              type: "displayMath",
              body: "\\dim S(x,U)=\\dim U.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mop\">dim</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mop\">dim</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mord\">.</span></span></span></span></span>"
            }
          ],
          numbering: {
            path: [
              3,
              1
            ]
          }
        },
        {
          id: "proposition-3",
          type: "proposition",
          content: [
            {
              id: "paragraph-42",
              type: "paragraph",
              children: [
                {
                  id: "text-102",
                  type: "text",
                  body: "An "
                },
                {
                  id: "inlineMath-41",
                  type: "inlineMath",
                  body: "n",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">n</span></span></span></span>"
                },
                {
                  id: "text-103",
                  type: "text",
                  body: "-dimensional affine space "
                },
                {
                  id: "inlineMath-42",
                  type: "inlineMath",
                  body: "X",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0785em;\">X</span></span></span></span>"
                },
                {
                  id: "text-104",
                  type: "text",
                  body: " has only one "
                },
                {
                  id: "inlineMath-43",
                  type: "inlineMath",
                  body: "n",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">n</span></span></span></span>"
                },
                {
                  id: "text-105",
                  type: "text",
                  body: "-dimensional"
                },
                {
                  id: "text-106",
                  type: "text",
                  body: " "
                },
                {
                  id: "text-107",
                  type: "text",
                  body: "affine subspace, namely "
                },
                {
                  id: "inlineMath-44",
                  type: "inlineMath",
                  body: "X",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0785em;\">X</span></span></span></span>"
                },
                {
                  id: "text-108",
                  type: "text",
                  body: " itself."
                }
              ]
            }
          ],
          numbering: {
            path: [
              3,
              2
            ]
          }
        },
        {
          id: "proof-3",
          type: "proof",
          content: [
            {
              id: "paragraph-43",
              type: "paragraph",
              children: [
                {
                  id: "text-109",
                  type: "text",
                  body: "Suppose that"
                }
              ]
            },
            {
              id: "displayMath-31",
              type: "displayMath",
              body: "\\dim U=n.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mop\">dim</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">n</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-44",
              type: "paragraph",
              children: [
                {
                  id: "text-110",
                  type: "text",
                  body: "Let"
                }
              ]
            },
            {
              id: "displayMath-32",
              type: "displayMath",
              body: "\\mathbf{u}_1,\\ldots,\\mathbf{u}_n\\in U",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathbf\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\">…</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathbf\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">n</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span></span>"
            },
            {
              id: "paragraph-45",
              type: "paragraph",
              children: [
                {
                  id: "text-111",
                  type: "text",
                  body: "be a basis of "
                },
                {
                  id: "inlineMath-45",
                  type: "inlineMath",
                  body: "U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-112",
                  type: "text",
                  body: ". Thus,"
                }
              ]
            },
            {
              id: "displayMath-33",
              type: "displayMath",
              body: "\\lambda_1\\mathbf{u}_1+\\cdots+\\lambda_n\\mathbf{u}_n=\\mathbf{0}\n\\quad\\Longleftrightarrow\\quad\n\\lambda_i=0\n\\quad\\text{for every }i=1,\\ldots,n.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8444em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord mathbf\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"minner\">⋯</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8444em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">n</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord mathbf\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">n</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6684em;vertical-align:-0.024em;\"></span><span class=\"mord mathbf\">0</span><span class=\"mspace\" style=\"margin-right:1em;\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">⟺</span><span class=\"mspace\" style=\"margin-right:1em;\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8444em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord\">0</span><span class=\"mspace\" style=\"margin-right:1em;\"></span><span class=\"mord text\"><span class=\"mord\">for every </span></span><span class=\"mord mathnormal\">i</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8389em;vertical-align:-0.1944em;\"></span><span class=\"mord\">1</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\">…</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\">n</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-46",
              type: "paragraph",
              children: [
                {
                  id: "text-113",
                  type: "text",
                  body: "Since "
                },
                {
                  id: "inlineMath-46",
                  type: "inlineMath",
                  body: "U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-114",
                  type: "text",
                  body: " and "
                },
                {
                  id: "inlineMath-47",
                  type: "inlineMath",
                  body: "V",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                },
                {
                  id: "text-115",
                  type: "text",
                  body: " both have dimension "
                },
                {
                  id: "inlineMath-48",
                  type: "inlineMath",
                  body: "n",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">n</span></span></span></span>"
                },
                {
                  id: "text-116",
                  type: "text",
                  body: ", we have"
                }
              ]
            },
            {
              id: "displayMath-34",
              type: "displayMath",
              body: "\\operatorname{span}\n\\left\\{\n\\mathbf{u}_1,\\ldots,\\mathbf{u}_n\n\\right\\}\n=\nU\n=\nV.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mop\"><span class=\"mord mathrm\">span</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">{</span><span class=\"mord\"><span class=\"mord mathbf\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\">…</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathbf\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">n</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">}</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-47",
              type: "paragraph",
              children: [
                {
                  id: "text-117",
                  type: "text",
                  body: "Fix "
                },
                {
                  id: "inlineMath-49",
                  type: "inlineMath",
                  body: "x\\in X",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathnormal\">x</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0785em;\">X</span></span></span></span>"
                },
                {
                  id: "text-118",
                  type: "text",
                  body: ". We know that for every "
                },
                {
                  id: "inlineMath-50",
                  type: "inlineMath",
                  body: "y\\in X",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0785em;\">X</span></span></span></span>"
                },
                {
                  id: "text-119",
                  type: "text",
                  body: ", there exists a unique"
                },
                {
                  id: "text-120",
                  type: "text",
                  body: " "
                },
                {
                  id: "text-121",
                  type: "text",
                  body: "vector "
                },
                {
                  id: "inlineMath-51",
                  type: "inlineMath",
                  body: "\\mathbf{u}\\in V",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                },
                {
                  id: "text-122",
                  type: "text",
                  body: " such that"
                }
              ]
            },
            {
              id: "displayMath-35",
              type: "displayMath",
              body: "\\mathbf{u}(x)=y.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-48",
              type: "paragraph",
              children: [
                {
                  id: "text-123",
                  type: "text",
                  body: "Since "
                },
                {
                  id: "inlineMath-52",
                  type: "inlineMath",
                  body: "U=V",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                },
                {
                  id: "text-124",
                  type: "text",
                  body: ", we have "
                },
                {
                  id: "inlineMath-53",
                  type: "inlineMath",
                  body: "\\mathbf{u}\\in U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-125",
                  type: "text",
                  body: ". Therefore,"
                }
              ]
            },
            {
              id: "displayMath-36",
              type: "displayMath",
              body: "y\\in S(x,U).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-49",
              type: "paragraph",
              children: [
                {
                  id: "text-126",
                  type: "text",
                  body: "Hence,"
                }
              ]
            },
            {
              id: "displayMath-37",
              type: "displayMath",
              body: "S(x,U)=X.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0785em;\">X</span><span class=\"mord\">.</span></span></span></span></span>"
            }
          ]
        },
        {
          id: "proposition-4",
          type: "proposition",
          content: [
            {
              id: "paragraph-50",
              type: "paragraph",
              children: [
                {
                  id: "text-127",
                  type: "text",
                  body: "Let "
                },
                {
                  id: "inlineMath-54",
                  type: "inlineMath",
                  body: "S(x,U)",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span></span></span></span>"
                },
                {
                  id: "text-128",
                  type: "text",
                  body: " be an affine subspace determined by the point "
                },
                {
                  id: "inlineMath-55",
                  type: "inlineMath",
                  body: "x",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">x</span></span></span></span>"
                },
                {
                  id: "text-129",
                  type: "text",
                  body: " and"
                },
                {
                  id: "text-130",
                  type: "text",
                  body: " "
                },
                {
                  id: "text-131",
                  type: "text",
                  body: "the linear subspace "
                },
                {
                  id: "inlineMath-56",
                  type: "inlineMath",
                  body: "U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-132",
                  type: "text",
                  body: ". Then"
                }
              ]
            },
            {
              id: "displayMath-38",
              type: "displayMath",
              body: "U\n=\n\\left\\{\n\\overrightarrow{yz}\n\\;\\middle|\\;\ny,z\\in S(x,U)\n\\right\\}.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.8em;vertical-align:-0.65em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size2\">{</span></span><span class=\"mord accent\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9526em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span></span></span><span class=\"svg-align\" style=\"top:-3.4306em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"hide-tail\" style=\"height:0.522em;min-width:0.888em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400em\" height=\"0.522em\" viewBox=\"0 0 400000 522\" preserveAspectRatio=\"xMaxYMin slice\"><path d=\"M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1944em;\"><span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.15em;\"><span style=\"top:-3.15em;\"><span class=\"pstrut\" style=\"height:3.8em;\"></span><span style=\"width:0.333em;height:1.8em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.333em\" height=\"1.8em\" viewBox=\"0 0 333 1800\"><path d=\"M145 15 v585 v600 v585 c2.667,10,9.667,15,21,15\nc10,0,16.667,-5,20,-15 v-585 v-600 v-585 c-2.667,-10,-9.667,-15,-21,-15\nc-10,0,-16.667,5,-20,15z M188 15 H145 v585 v600 v585 h43z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.65em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size2\">}</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">.</span></span></span></span></span>"
            }
          ],
          numbering: {
            path: [
              3,
              3
            ]
          }
        },
        {
          id: "proof-4",
          type: "proof",
          content: [
            {
              id: "paragraph-51",
              type: "paragraph",
              children: [
                {
                  id: "text-133",
                  type: "text",
                  body: "Let us first consider "
                },
                {
                  id: "inlineMath-57",
                  type: "inlineMath",
                  body: "\\mathbf{u}\\in U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-134",
                  type: "text",
                  body: ", and let"
                }
              ]
            },
            {
              id: "displayMath-39",
              type: "displayMath",
              body: "y=\\mathbf{u}(x).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-52",
              type: "paragraph",
              children: [
                {
                  id: "text-135",
                  type: "text",
                  body: "By the definition of "
                },
                {
                  id: "inlineMath-58",
                  type: "inlineMath",
                  body: "S(x,U)",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span></span></span></span>"
                },
                {
                  id: "text-136",
                  type: "text",
                  body: ", we have "
                },
                {
                  id: "inlineMath-59",
                  type: "inlineMath",
                  body: "y\\in S(x,U)",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span></span></span></span>"
                },
                {
                  id: "text-137",
                  type: "text",
                  body: ". Moreover,"
                }
              ]
            },
            {
              id: "displayMath-40",
              type: "displayMath",
              body: "\\mathbf{u}=\\overrightarrow{xy}.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.147em;vertical-align:-0.1944em;\"></span><span class=\"mord accent\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9526em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span></span></span><span class=\"svg-align\" style=\"top:-3.4306em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"hide-tail\" style=\"height:0.522em;min-width:0.888em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400em\" height=\"0.522em\" viewBox=\"0 0 400000 522\" preserveAspectRatio=\"xMaxYMin slice\"><path d=\"M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1944em;\"><span></span></span></span></span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-53",
              type: "paragraph",
              children: [
                {
                  id: "text-138",
                  type: "text",
                  body: "Since "
                },
                {
                  id: "inlineMath-60",
                  type: "inlineMath",
                  body: "x,y\\in S(x,U)",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span></span></span></span>"
                },
                {
                  id: "text-139",
                  type: "text",
                  body: ", it follows that"
                }
              ]
            },
            {
              id: "displayMath-41",
              type: "displayMath",
              body: "U\n\\subseteq\n\\left\\{\n\\overrightarrow{yz}\n\\;\\middle|\\;\ny,z\\in S(x,U)\n\\right\\}.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8193em;vertical-align:-0.136em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">⊆</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.8em;vertical-align:-0.65em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size2\">{</span></span><span class=\"mord accent\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9526em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span></span></span><span class=\"svg-align\" style=\"top:-3.4306em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"hide-tail\" style=\"height:0.522em;min-width:0.888em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400em\" height=\"0.522em\" viewBox=\"0 0 400000 522\" preserveAspectRatio=\"xMaxYMin slice\"><path d=\"M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1944em;\"><span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.15em;\"><span style=\"top:-3.15em;\"><span class=\"pstrut\" style=\"height:3.8em;\"></span><span style=\"width:0.333em;height:1.8em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.333em\" height=\"1.8em\" viewBox=\"0 0 333 1800\"><path d=\"M145 15 v585 v600 v585 c2.667,10,9.667,15,21,15\nc10,0,16.667,-5,20,-15 v-585 v-600 v-585 c-2.667,-10,-9.667,-15,-21,-15\nc-10,0,-16.667,5,-20,15z M188 15 H145 v585 v600 v585 h43z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.65em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size2\">}</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-54",
              type: "paragraph",
              children: [
                {
                  id: "text-140",
                  type: "text",
                  body: "We now prove the opposite inclusion. Let "
                },
                {
                  id: "inlineMath-61",
                  type: "inlineMath",
                  body: "y,z\\in S(x,U)",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span></span></span></span>"
                },
                {
                  id: "text-141",
                  type: "text",
                  body: ". By the"
                },
                {
                  id: "text-142",
                  type: "text",
                  body: " "
                },
                {
                  id: "text-143",
                  type: "text",
                  body: "definition of "
                },
                {
                  id: "inlineMath-62",
                  type: "inlineMath",
                  body: "S(x,U)",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span></span></span></span>"
                },
                {
                  id: "text-144",
                  type: "text",
                  body: ", there exist "
                },
                {
                  id: "inlineMath-63",
                  type: "inlineMath",
                  body: "\\mathbf{u},\\mathbf{v}\\in U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-145",
                  type: "text",
                  body: " "
                },
                {
                  id: "text-146",
                  type: "text",
                  body: "such that"
                }
              ]
            },
            {
              id: "displayMath-42",
              type: "displayMath",
              body: "y=\\mathbf{u}(x)\n\\qquad\\text{and}\\qquad\nz=\\mathbf{v}(x).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mord text\"><span class=\"mord\">and</span></span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-55",
              type: "paragraph",
              children: [
                {
                  id: "text-147",
                  type: "text",
                  body: "Then"
                }
              ]
            },
            {
              id: "displayMath-43",
              type: "displayMath",
              body: "(\\mathbf{v}-\\mathbf{u})(y)\n=\n(\\mathbf{v}-\\mathbf{u})\\bigl(\\mathbf{u}(x)\\bigr)\n=\n\\bigl((\\mathbf{v}-\\mathbf{u})+\\mathbf{u}\\bigr)(x)\n=\n\\mathbf{v}(x)\n=\nz.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mclose\">)</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathbf\">u</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mopen\">(</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-56",
              type: "paragraph",
              children: [
                {
                  id: "text-148",
                  type: "text",
                  body: "Therefore,"
                }
              ]
            },
            {
              id: "displayMath-44",
              type: "displayMath",
              body: "\\overrightarrow{yz}\n=\n\\mathbf{v}-\\mathbf{u}.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.147em;vertical-align:-0.1944em;\"></span><span class=\"mord accent\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9526em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span></span></span><span class=\"svg-align\" style=\"top:-3.4306em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"hide-tail\" style=\"height:0.522em;min-width:0.888em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400em\" height=\"0.522em\" viewBox=\"0 0 400000 522\" preserveAspectRatio=\"xMaxYMin slice\"><path d=\"M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1944em;\"><span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-57",
              type: "paragraph",
              children: [
                {
                  id: "text-149",
                  type: "text",
                  body: "Since "
                },
                {
                  id: "inlineMath-64",
                  type: "inlineMath",
                  body: "\\mathbf{u},\\mathbf{v}\\in U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-150",
                  type: "text",
                  body: " and "
                },
                {
                  id: "inlineMath-65",
                  type: "inlineMath",
                  body: "U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-151",
                  type: "text",
                  body: " is a vector subspace,"
                }
              ]
            },
            {
              id: "displayMath-45",
              type: "displayMath",
              body: "\\mathbf{v}-\\mathbf{u}\\in U.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-58",
              type: "paragraph",
              children: [
                {
                  id: "text-152",
                  type: "text",
                  body: "It follows that"
                }
              ]
            },
            {
              id: "displayMath-46",
              type: "displayMath",
              body: "\\left\\{\n\\overrightarrow{yz}\n\\;\\middle|\\;\ny,z\\in S(x,U)\n\\right\\}\n\\subseteq U.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.8em;vertical-align:-0.65em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size2\">{</span></span><span class=\"mord accent\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9526em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span></span></span><span class=\"svg-align\" style=\"top:-3.4306em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"hide-tail\" style=\"height:0.522em;min-width:0.888em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400em\" height=\"0.522em\" viewBox=\"0 0 400000 522\" preserveAspectRatio=\"xMaxYMin slice\"><path d=\"M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1944em;\"><span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.15em;\"><span style=\"top:-3.15em;\"><span class=\"pstrut\" style=\"height:3.8em;\"></span><span style=\"width:0.333em;height:1.8em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.333em\" height=\"1.8em\" viewBox=\"0 0 333 1800\"><path d=\"M145 15 v585 v600 v585 c2.667,10,9.667,15,21,15\nc10,0,16.667,-5,20,-15 v-585 v-600 v-585 c-2.667,-10,-9.667,-15,-21,-15\nc-10,0,-16.667,5,-20,15z M188 15 H145 v585 v600 v585 h43z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.65em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size2\">}</span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">⊆</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-59",
              type: "paragraph",
              children: [
                {
                  id: "text-153",
                  type: "text",
                  body: "Hence,"
                }
              ]
            },
            {
              id: "displayMath-47",
              type: "displayMath",
              body: "U\n=\n\\left\\{\n\\overrightarrow{yz}\n\\;\\middle|\\;\ny,z\\in S(x,U)\n\\right\\}.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.8em;vertical-align:-0.65em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size2\">{</span></span><span class=\"mord accent\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9526em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span></span></span><span class=\"svg-align\" style=\"top:-3.4306em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"hide-tail\" style=\"height:0.522em;min-width:0.888em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400em\" height=\"0.522em\" viewBox=\"0 0 400000 522\" preserveAspectRatio=\"xMaxYMin slice\"><path d=\"M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1944em;\"><span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.15em;\"><span style=\"top:-3.15em;\"><span class=\"pstrut\" style=\"height:3.8em;\"></span><span style=\"width:0.333em;height:1.8em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.333em\" height=\"1.8em\" viewBox=\"0 0 333 1800\"><path d=\"M145 15 v585 v600 v585 c2.667,10,9.667,15,21,15\nc10,0,16.667,-5,20,-15 v-585 v-600 v-585 c-2.667,-10,-9.667,-15,-21,-15\nc-10,0,-16.667,5,-20,15z M188 15 H145 v585 v600 v585 h43z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.65em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size2\">}</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">.</span></span></span></span></span>"
            }
          ]
        },
        {
          id: "proposition-5",
          type: "proposition",
          content: [
            {
              id: "paragraph-60",
              type: "paragraph",
              children: [
                {
                  id: "text-154",
                  type: "text",
                  body: "Let "
                },
                {
                  id: "inlineMath-66",
                  type: "inlineMath",
                  body: "x,y\\in X",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0785em;\">X</span></span></span></span>"
                },
                {
                  id: "text-155",
                  type: "text",
                  body: ", and let "
                },
                {
                  id: "inlineMath-67",
                  type: "inlineMath",
                  body: "U,W",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8778em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span></span></span></span>"
                },
                {
                  id: "text-156",
                  type: "text",
                  body: " be linear subspaces of "
                },
                {
                  id: "inlineMath-68",
                  type: "inlineMath",
                  body: "V",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                },
                {
                  id: "text-157",
                  type: "text",
                  body: ". Then"
                }
              ]
            },
            {
              id: "displayMath-48",
              type: "displayMath",
              body: "S(x,U)=S(y,W)",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mclose\">)</span></span></span></span></span>"
            },
            {
              id: "paragraph-61",
              type: "paragraph",
              children: [
                {
                  id: "text-158",
                  type: "text",
                  body: "if and only if"
                }
              ]
            },
            {
              id: "displayMath-49",
              type: "displayMath",
              body: "U=W\n\\qquad\\text{and}\\qquad\nS(x,U)\\cap S(y,W)\\neq\\varnothing.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mord text\"><span class=\"mord\">and</span></span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">∩</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\"><span class=\"mrel\"><span class=\"mord vbox\"><span class=\"thinbox\"><span class=\"rlap\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"inner\"><span class=\"mord\"><span class=\"mrel\"></span></span></span><span class=\"fix\"></span></span></span></span></span><span class=\"mspace nobreak\"></span><span class=\"mrel\">=</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6633em;vertical-align:-0.0817em;\"></span><span class=\"mord amsrm\">∅</span><span class=\"mord\">.</span></span></span></span></span>"
            }
          ],
          numbering: {
            path: [
              3,
              4
            ]
          }
        },
        {
          id: "proof-5",
          type: "proof",
          content: [
            {
              id: "paragraph-62",
              type: "paragraph",
              children: [
                {
                  id: "text-159",
                  type: "text",
                  body: "Let us first assume that"
                }
              ]
            },
            {
              id: "displayMath-50",
              type: "displayMath",
              body: "S(x,U)=S(y,W).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-63",
              type: "paragraph",
              children: [
                {
                  id: "text-160",
                  type: "text",
                  body: "It is then obvious that"
                }
              ]
            },
            {
              id: "displayMath-51",
              type: "displayMath",
              body: "S(x,U)\\cap S(y,W)\\neq\\varnothing.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">∩</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\"><span class=\"mrel\"><span class=\"mord vbox\"><span class=\"thinbox\"><span class=\"rlap\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"inner\"><span class=\"mord\"><span class=\"mrel\"></span></span></span><span class=\"fix\"></span></span></span></span></span><span class=\"mspace nobreak\"></span><span class=\"mrel\">=</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6633em;vertical-align:-0.0817em;\"></span><span class=\"mord amsrm\">∅</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-64",
              type: "paragraph",
              children: [
                {
                  id: "text-161",
                  type: "text",
                  body: "We need to prove that "
                },
                {
                  id: "inlineMath-69",
                  type: "inlineMath",
                  body: "U=W",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span></span></span></span>"
                },
                {
                  id: "text-162",
                  type: "text",
                  body: "."
                }
              ]
            },
            {
              id: "paragraph-65",
              type: "paragraph",
              children: [
                {
                  id: "text-163",
                  type: "text",
                  body: "Let "
                },
                {
                  id: "inlineMath-70",
                  type: "inlineMath",
                  body: "\\mathbf{u}\\in U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-164",
                  type: "text",
                  body: ". There exists "
                },
                {
                  id: "inlineMath-71",
                  type: "inlineMath",
                  body: "z\\in S(x,U)",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span></span></span></span>"
                },
                {
                  id: "text-165",
                  type: "text",
                  body: " such that"
                }
              ]
            },
            {
              id: "displayMath-52",
              type: "displayMath",
              body: "z=\\mathbf{u}(x).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-66",
              type: "paragraph",
              children: [
                {
                  id: "text-166",
                  type: "text",
                  body: "Since "
                },
                {
                  id: "inlineMath-72",
                  type: "inlineMath",
                  body: "S(x,U)=S(y,W)",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mclose\">)</span></span></span></span>"
                },
                {
                  id: "text-167",
                  type: "text",
                  body: ", we also have "
                },
                {
                  id: "inlineMath-73",
                  type: "inlineMath",
                  body: "z\\in S(y,W)",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mclose\">)</span></span></span></span>"
                },
                {
                  id: "text-168",
                  type: "text",
                  body: ". Therefore, there"
                },
                {
                  id: "text-169",
                  type: "text",
                  body: " "
                },
                {
                  id: "text-170",
                  type: "text",
                  body: "exists "
                },
                {
                  id: "inlineMath-74",
                  type: "inlineMath",
                  body: "\\mathbf{v}\\in W",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span></span></span></span>"
                },
                {
                  id: "text-171",
                  type: "text",
                  body: " such that"
                }
              ]
            },
            {
              id: "displayMath-53",
              type: "displayMath",
              body: "z=\\mathbf{v}(y).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-67",
              type: "paragraph",
              children: [
                {
                  id: "text-172",
                  type: "text",
                  body: "It follows that"
                }
              ]
            },
            {
              id: "displayMath-54",
              type: "displayMath",
              body: "\\mathbf{u}(x)=\\mathbf{v}(y),",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-68",
              type: "paragraph",
              children: [
                {
                  id: "text-173",
                  type: "text",
                  body: "and therefore"
                }
              ]
            },
            {
              id: "displayMath-55",
              type: "displayMath",
              body: "x=(\\mathbf{v}-\\mathbf{u})(y).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">x</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-69",
              type: "paragraph",
              children: [
                {
                  id: "text-174",
                  type: "text",
                  body: "Since"
                }
              ]
            },
            {
              id: "displayMath-56",
              type: "displayMath",
              body: "x\\in S(x,U)=S(y,W),",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathnormal\">x</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-70",
              type: "paragraph",
              children: [
                {
                  id: "text-175",
                  type: "text",
                  body: "the vector mapping "
                },
                {
                  id: "inlineMath-75",
                  type: "inlineMath",
                  body: "y",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span></span></span></span>"
                },
                {
                  id: "text-176",
                  type: "text",
                  body: " onto "
                },
                {
                  id: "inlineMath-76",
                  type: "inlineMath",
                  body: "x",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">x</span></span></span></span>"
                },
                {
                  id: "text-177",
                  type: "text",
                  body: " belongs to "
                },
                {
                  id: "inlineMath-77",
                  type: "inlineMath",
                  body: "W",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span></span></span></span>"
                },
                {
                  id: "text-178",
                  type: "text",
                  body: ". Hence, there exists"
                },
                {
                  id: "text-179",
                  type: "text",
                  body: " "
                },
                {
                  id: "inlineMath-78",
                  type: "inlineMath",
                  body: "\\mathbf{w}\\in W",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">w</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span></span></span></span>"
                },
                {
                  id: "text-180",
                  type: "text",
                  body: " such that"
                }
              ]
            },
            {
              id: "displayMath-57",
              type: "displayMath",
              body: "\\mathbf{v}-\\mathbf{u}=\\mathbf{w}.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">w</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-71",
              type: "paragraph",
              children: [
                {
                  id: "text-181",
                  type: "text",
                  body: "Therefore,"
                }
              ]
            },
            {
              id: "displayMath-58",
              type: "displayMath",
              body: "\\mathbf{u}=-\\mathbf{w}+\\mathbf{v}.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord\">−</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">w</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-72",
              type: "paragraph",
              children: [
                {
                  id: "text-182",
                  type: "text",
                  body: "Since "
                },
                {
                  id: "inlineMath-79",
                  type: "inlineMath",
                  body: "\\mathbf{v},\\mathbf{w}\\in W",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">w</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span></span></span></span>"
                },
                {
                  id: "text-183",
                  type: "text",
                  body: ", it follows that"
                }
              ]
            },
            {
              id: "displayMath-59",
              type: "displayMath",
              body: "\\mathbf{u}\\in W.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-73",
              type: "paragraph",
              children: [
                {
                  id: "text-184",
                  type: "text",
                  body: "Thus,"
                }
              ]
            },
            {
              id: "displayMath-60",
              type: "displayMath",
              body: "U\\subseteq W.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8193em;vertical-align:-0.136em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">⊆</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-74",
              type: "paragraph",
              children: [
                {
                  id: "text-185",
                  type: "text",
                  body: "Similarly, we can prove that"
                }
              ]
            },
            {
              id: "displayMath-61",
              type: "displayMath",
              body: "W\\subseteq U.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8193em;vertical-align:-0.136em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">⊆</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-75",
              type: "paragraph",
              children: [
                {
                  id: "text-186",
                  type: "text",
                  body: "Therefore,"
                }
              ]
            },
            {
              id: "displayMath-62",
              type: "displayMath",
              body: "U=W.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-76",
              type: "paragraph",
              children: [
                {
                  id: "text-187",
                  type: "text",
                  body: "Conversely, let us assume that"
                }
              ]
            },
            {
              id: "displayMath-63",
              type: "displayMath",
              body: "U=W\n\\qquad\\text{and}\\qquad\nS(x,U)\\cap S(y,W)\\neq\\varnothing.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mord text\"><span class=\"mord\">and</span></span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">∩</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\"><span class=\"mrel\"><span class=\"mord vbox\"><span class=\"thinbox\"><span class=\"rlap\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"inner\"><span class=\"mord\"><span class=\"mrel\"></span></span></span><span class=\"fix\"></span></span></span></span></span><span class=\"mspace nobreak\"></span><span class=\"mrel\">=</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6633em;vertical-align:-0.0817em;\"></span><span class=\"mord amsrm\">∅</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-77",
              type: "paragraph",
              children: [
                {
                  id: "text-188",
                  type: "text",
                  body: "Let"
                }
              ]
            },
            {
              id: "displayMath-64",
              type: "displayMath",
              body: "z\\in S(x,U)\\cap S(y,W).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">∩</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-78",
              type: "paragraph",
              children: [
                {
                  id: "text-189",
                  type: "text",
                  body: "Then there exist "
                },
                {
                  id: "inlineMath-80",
                  type: "inlineMath",
                  body: "\\mathbf{u}\\in U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-190",
                  type: "text",
                  body: " and "
                },
                {
                  id: "inlineMath-81",
                  type: "inlineMath",
                  body: "\\mathbf{v}\\in W",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span></span></span></span>"
                },
                {
                  id: "text-191",
                  type: "text",
                  body: " such that"
                }
              ]
            },
            {
              id: "displayMath-65",
              type: "displayMath",
              body: "z=\\mathbf{u}(x)=\\mathbf{v}(y).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-79",
              type: "paragraph",
              children: [
                {
                  id: "text-192",
                  type: "text",
                  body: "We also know that for every "
                },
                {
                  id: "inlineMath-82",
                  type: "inlineMath",
                  body: "k\\in S(x,U)",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.0391em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0315em;\">k</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span></span></span></span>"
                },
                {
                  id: "text-193",
                  type: "text",
                  body: ", there exists"
                },
                {
                  id: "text-194",
                  type: "text",
                  body: " "
                },
                {
                  id: "inlineMath-83",
                  type: "inlineMath",
                  body: "\\mathbf{q}\\in U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathbf\">q</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-195",
                  type: "text",
                  body: " such that"
                }
              ]
            },
            {
              id: "displayMath-66",
              type: "displayMath",
              body: "k=\\mathbf{q}(x).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0315em;\">k</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">q</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-80",
              type: "paragraph",
              children: [
                {
                  id: "text-196",
                  type: "text",
                  body: "Since"
                }
              ]
            },
            {
              id: "displayMath-67",
              type: "displayMath",
              body: "\\mathbf{u}(x)=\\mathbf{v}(y),",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-81",
              type: "paragraph",
              children: [
                {
                  id: "text-197",
                  type: "text",
                  body: "we have"
                }
              ]
            },
            {
              id: "displayMath-68",
              type: "displayMath",
              body: "x=(\\mathbf{v}-\\mathbf{u})(y).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">x</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-82",
              type: "paragraph",
              children: [
                {
                  id: "text-198",
                  type: "text",
                  body: "Therefore,"
                }
              ]
            },
            {
              id: "displayMath-69",
              type: "displayMath",
              body: "k\n=\n\\mathbf{q}(x)\n=\n\\mathbf{q}\\bigl((\\mathbf{v}-\\mathbf{u})(y)\\bigr)\n=\n(\\mathbf{q}+\\mathbf{v}-\\mathbf{u})(y).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0315em;\">k</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">q</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord mathbf\">q</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mopen\">(</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathbf\">q</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-83",
              type: "paragraph",
              children: [
                {
                  id: "text-199",
                  type: "text",
                  body: "Since "
                },
                {
                  id: "inlineMath-84",
                  type: "inlineMath",
                  body: "U=W",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span></span></span></span>"
                },
                {
                  id: "text-200",
                  type: "text",
                  body: ", we have"
                }
              ]
            },
            {
              id: "displayMath-70",
              type: "displayMath",
              body: "\\mathbf{q}+\\mathbf{v}-\\mathbf{u}\\in W.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7778em;vertical-align:-0.1944em;\"></span><span class=\"mord mathbf\">q</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-84",
              type: "paragraph",
              children: [
                {
                  id: "text-201",
                  type: "text",
                  body: "It follows that"
                }
              ]
            },
            {
              id: "displayMath-71",
              type: "displayMath",
              body: "k\\in S(y,W).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.0391em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0315em;\">k</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-85",
              type: "paragraph",
              children: [
                {
                  id: "text-202",
                  type: "text",
                  body: "Therefore,"
                }
              ]
            },
            {
              id: "displayMath-72",
              type: "displayMath",
              body: "S(x,U)\\subseteq S(y,W).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">⊆</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-86",
              type: "paragraph",
              children: [
                {
                  id: "text-203",
                  type: "text",
                  body: "Similarly, we can prove that"
                }
              ]
            },
            {
              id: "displayMath-73",
              type: "displayMath",
              body: "S(y,W)\\subseteq S(x,U).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">⊆</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-87",
              type: "paragraph",
              children: [
                {
                  id: "text-204",
                  type: "text",
                  body: "Hence,"
                }
              ]
            },
            {
              id: "displayMath-74",
              type: "displayMath",
              body: "S(x,U)=S(y,W).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            }
          ]
        },
        {
          id: "proposition-6",
          type: "proposition",
          content: [
            {
              id: "paragraph-88",
              type: "paragraph",
              children: [
                {
                  id: "text-205",
                  type: "text",
                  body: "Let "
                },
                {
                  id: "inlineMath-85",
                  type: "inlineMath",
                  body: "S(x,U)",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span></span></span></span>"
                },
                {
                  id: "text-206",
                  type: "text",
                  body: " be a "
                },
                {
                  id: "inlineMath-86",
                  type: "inlineMath",
                  body: "d",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\">d</span></span></span></span>"
                },
                {
                  id: "text-207",
                  type: "text",
                  body: "-dimensional affine subspace of "
                },
                {
                  id: "inlineMath-87",
                  type: "inlineMath",
                  body: "X",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0785em;\">X</span></span></span></span>"
                },
                {
                  id: "text-208",
                  type: "text",
                  body: ". Then,"
                },
                {
                  id: "text-209",
                  type: "text",
                  body: " "
                },
                {
                  id: "text-210",
                  type: "text",
                  body: "with the action inherited from "
                },
                {
                  id: "inlineMath-88",
                  type: "inlineMath",
                  body: "X",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0785em;\">X</span></span></span></span>"
                },
                {
                  id: "text-211",
                  type: "text",
                  body: ", "
                },
                {
                  id: "inlineMath-89",
                  type: "inlineMath",
                  body: "S(x,U)",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span></span></span></span>"
                },
                {
                  id: "text-212",
                  type: "text",
                  body: " is itself a"
                },
                {
                  id: "text-213",
                  type: "text",
                  body: " "
                },
                {
                  id: "inlineMath-90",
                  type: "inlineMath",
                  body: "d",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\">d</span></span></span></span>"
                },
                {
                  id: "text-214",
                  type: "text",
                  body: "-dimensional affine space over the vector space "
                },
                {
                  id: "inlineMath-91",
                  type: "inlineMath",
                  body: "U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-215",
                  type: "text",
                  body: "."
                }
              ]
            }
          ],
          numbering: {
            path: [
              3,
              5
            ]
          }
        },
        {
          id: "proof-6",
          type: "proof",
          content: [
            {
              id: "paragraph-89",
              type: "paragraph",
              children: [
                {
                  id: "text-216",
                  type: "text",
                  body: "Since "
                },
                {
                  id: "inlineMath-92",
                  type: "inlineMath",
                  body: "U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-217",
                  type: "text",
                  body: " is a vector subspace of "
                },
                {
                  id: "inlineMath-93",
                  type: "inlineMath",
                  body: "V",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                },
                {
                  id: "text-218",
                  type: "text",
                  body: ", the action of "
                },
                {
                  id: "inlineMath-94",
                  type: "inlineMath",
                  body: "U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-219",
                  type: "text",
                  body: " on"
                },
                {
                  id: "text-220",
                  type: "text",
                  body: " "
                },
                {
                  id: "inlineMath-95",
                  type: "inlineMath",
                  body: "S(x,U)",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span></span></span></span>"
                },
                {
                  id: "text-221",
                  type: "text",
                  body: " is well-defined. Indeed, let "
                },
                {
                  id: "inlineMath-96",
                  type: "inlineMath",
                  body: "\\mathbf{u}\\in U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-222",
                  type: "text",
                  body: " and"
                },
                {
                  id: "text-223",
                  type: "text",
                  body: " "
                },
                {
                  id: "inlineMath-97",
                  type: "inlineMath",
                  body: "y\\in S(x,U)",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span></span></span></span>"
                },
                {
                  id: "text-224",
                  type: "text",
                  body: ". Then there exists "
                },
                {
                  id: "inlineMath-98",
                  type: "inlineMath",
                  body: "\\mathbf{p}\\in U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathbf\">p</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-225",
                  type: "text",
                  body: " such that"
                }
              ]
            },
            {
              id: "displayMath-75",
              type: "displayMath",
              body: "y=\\mathbf{p}(x).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">p</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-90",
              type: "paragraph",
              children: [
                {
                  id: "text-226",
                  type: "text",
                  body: "Therefore,"
                }
              ]
            },
            {
              id: "displayMath-76",
              type: "displayMath",
              body: "\\mathbf{u}(y)\n=\n\\mathbf{u}\\bigl(\\mathbf{p}(x)\\bigr)\n=\n(\\mathbf{u}+\\mathbf{p})(x).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathbf\">p</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">p</span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-91",
              type: "paragraph",
              children: [
                {
                  id: "text-227",
                  type: "text",
                  body: "Since"
                }
              ]
            },
            {
              id: "displayMath-77",
              type: "displayMath",
              body: "\\mathbf{u}+\\mathbf{p}\\in U,",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathbf\">p</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8778em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-92",
              type: "paragraph",
              children: [
                {
                  id: "text-228",
                  type: "text",
                  body: "it follows that"
                }
              ]
            },
            {
              id: "displayMath-78",
              type: "displayMath",
              body: "\\mathbf{u}(y)\\in S(x,U).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-93",
              type: "paragraph",
              children: [
                {
                  id: "text-229",
                  type: "text",
                  body: "We know that "
                },
                {
                  id: "inlineMath-99",
                  type: "inlineMath",
                  body: "U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-230",
                  type: "text",
                  body: " is a vector space. Hence, it has the null vector"
                }
              ]
            },
            {
              id: "displayMath-79",
              type: "displayMath",
              body: "\\mathbf{0}\\in U,",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6835em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\">0</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8778em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-94",
              type: "paragraph",
              children: [
                {
                  id: "text-231",
                  type: "text",
                  body: "and, for every "
                },
                {
                  id: "inlineMath-100",
                  type: "inlineMath",
                  body: "y\\in S(x,U)",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span></span></span></span>"
                },
                {
                  id: "text-232",
                  type: "text",
                  body: ","
                }
              ]
            },
            {
              id: "displayMath-80",
              type: "displayMath",
              body: "\\mathbf{0}(y)=y.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">0</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-95",
              type: "paragraph",
              children: [
                {
                  id: "text-233",
                  type: "text",
                  body: "We now need to prove that, for every "
                },
                {
                  id: "inlineMath-101",
                  type: "inlineMath",
                  body: "z,y\\in S(x,U)",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span></span></span></span>"
                },
                {
                  id: "text-234",
                  type: "text",
                  body: ", there exists a"
                },
                {
                  id: "text-235",
                  type: "text",
                  body: " "
                },
                {
                  id: "text-236",
                  type: "text",
                  body: "unique "
                },
                {
                  id: "inlineMath-102",
                  type: "inlineMath",
                  body: "\\mathbf{u}\\in U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-237",
                  type: "text",
                  body: " such that"
                }
              ]
            },
            {
              id: "displayMath-81",
              type: "displayMath",
              body: "\\mathbf{u}(y)=z.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-96",
              type: "paragraph",
              children: [
                {
                  id: "text-238",
                  type: "text",
                  body: "We know that there exist unique vectors "
                },
                {
                  id: "inlineMath-103",
                  type: "inlineMath",
                  body: "\\mathbf{q},\\mathbf{p}\\in U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathbf\">q</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathbf\">p</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-239",
                  type: "text",
                  body: " "
                },
                {
                  id: "text-240",
                  type: "text",
                  body: "such that"
                }
              ]
            },
            {
              id: "displayMath-82",
              type: "displayMath",
              body: "z=\\mathbf{q}(x)\n\\qquad\\text{and}\\qquad\ny=\\mathbf{p}(x).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">q</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mord text\"><span class=\"mord\">and</span></span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">p</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-97",
              type: "paragraph",
              children: [
                {
                  id: "text-241",
                  type: "text",
                  body: "Therefore,"
                }
              ]
            },
            {
              id: "displayMath-83",
              type: "displayMath",
              body: "x=(-\\mathbf{p})(y),",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">x</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\">−</span><span class=\"mord mathbf\">p</span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-98",
              type: "paragraph",
              children: [
                {
                  id: "text-242",
                  type: "text",
                  body: "and hence"
                }
              ]
            },
            {
              id: "displayMath-84",
              type: "displayMath",
              body: "z\n=\n\\mathbf{q}(x)\n=\n\\mathbf{q}\\bigl((-\\mathbf{p})(y)\\bigr)\n=\n(\\mathbf{q}-\\mathbf{p})(y),",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">q</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord mathbf\">q</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mopen\">(</span><span class=\"mord\">−</span><span class=\"mord mathbf\">p</span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathbf\">q</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">p</span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-99",
              type: "paragraph",
              children: [
                {
                  id: "text-243",
                  type: "text",
                  body: "because of the inherited composition."
                }
              ]
            },
            {
              id: "paragraph-100",
              type: "paragraph",
              children: [
                {
                  id: "text-244",
                  type: "text",
                  body: "Therefore, there exists a unique "
                },
                {
                  id: "inlineMath-104",
                  type: "inlineMath",
                  body: "\\mathbf{u}\\in U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-245",
                  type: "text",
                  body: " such that"
                }
              ]
            },
            {
              id: "displayMath-85",
              type: "displayMath",
              body: "z=\\mathbf{u}(y),",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-101",
              type: "paragraph",
              children: [
                {
                  id: "text-246",
                  type: "text",
                  body: "where"
                }
              ]
            },
            {
              id: "displayMath-86",
              type: "displayMath",
              body: "\\mathbf{u}=\\mathbf{q}-\\mathbf{p}.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7778em;vertical-align:-0.1944em;\"></span><span class=\"mord mathbf\">q</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6389em;vertical-align:-0.1944em;\"></span><span class=\"mord mathbf\">p</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-102",
              type: "paragraph",
              children: [
                {
                  id: "text-247",
                  type: "text",
                  body: "Finally, the composition property is inherited from the action of "
                },
                {
                  id: "inlineMath-105",
                  type: "inlineMath",
                  body: "V",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                },
                {
                  id: "text-248",
                  type: "text",
                  body: " "
                },
                {
                  id: "text-249",
                  type: "text",
                  body: "on "
                },
                {
                  id: "inlineMath-106",
                  type: "inlineMath",
                  body: "X",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0785em;\">X</span></span></span></span>"
                },
                {
                  id: "text-250",
                  type: "text",
                  body: ". For every "
                },
                {
                  id: "inlineMath-107",
                  type: "inlineMath",
                  body: "\\mathbf{u},\\mathbf{v}\\in U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-251",
                  type: "text",
                  body: " and"
                },
                {
                  id: "text-252",
                  type: "text",
                  body: " "
                },
                {
                  id: "inlineMath-108",
                  type: "inlineMath",
                  body: "y\\in S(x,U)",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span></span></span></span>"
                },
                {
                  id: "text-253",
                  type: "text",
                  body: ","
                }
              ]
            },
            {
              id: "displayMath-87",
              type: "displayMath",
              body: "(\\mathbf{u}\\circ\\mathbf{v})(y)\n=\n\\mathbf{u}\\bigl(\\mathbf{v}(y)\\bigr)\n=\n(\\mathbf{u}+\\mathbf{v})(y).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">∘</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-103",
              type: "paragraph",
              children: [
                {
                  id: "text-254",
                  type: "text",
                  body: "Therefore, "
                },
                {
                  id: "inlineMath-109",
                  type: "inlineMath",
                  body: "S(x,U)",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span></span></span></span>"
                },
                {
                  id: "text-255",
                  type: "text",
                  body: " is an affine space over "
                },
                {
                  id: "inlineMath-110",
                  type: "inlineMath",
                  body: "U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-256",
                  type: "text",
                  body: ". Since"
                }
              ]
            },
            {
              id: "displayMath-88",
              type: "displayMath",
              body: "\\dim U=d,",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mop\">dim</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-104",
              type: "paragraph",
              children: [
                {
                  id: "text-257",
                  type: "text",
                  body: "the affine space "
                },
                {
                  id: "inlineMath-111",
                  type: "inlineMath",
                  body: "S(x,U)",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span></span></span></span>"
                },
                {
                  id: "text-258",
                  type: "text",
                  body: " has dimension "
                },
                {
                  id: "inlineMath-112",
                  type: "inlineMath",
                  body: "d",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\">d</span></span></span></span>"
                },
                {
                  id: "text-259",
                  type: "text",
                  body: "."
                }
              ]
            }
          ]
        },
        {
          id: "proposition-7",
          type: "proposition",
          content: [
            {
              id: "paragraph-105",
              type: "paragraph",
              children: [
                {
                  id: "text-260",
                  type: "text",
                  body: "Let "
                },
                {
                  id: "inlineMath-113",
                  type: "inlineMath",
                  body: "S(x,U)",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span></span></span></span>"
                },
                {
                  id: "text-261",
                  type: "text",
                  body: " and "
                },
                {
                  id: "inlineMath-114",
                  type: "inlineMath",
                  body: "S(y,W)",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mclose\">)</span></span></span></span>"
                },
                {
                  id: "text-262",
                  type: "text",
                  body: " be affine subspaces of "
                },
                {
                  id: "inlineMath-115",
                  type: "inlineMath",
                  body: "X",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0785em;\">X</span></span></span></span>"
                },
                {
                  id: "text-263",
                  type: "text",
                  body: ". If"
                }
              ]
            },
            {
              id: "displayMath-89",
              type: "displayMath",
              body: "z\\in S(x,U)\\cap S(y,W),",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">∩</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-106",
              type: "paragraph",
              children: [
                {
                  id: "text-264",
                  type: "text",
                  body: "then"
                }
              ]
            },
            {
              id: "displayMath-90",
              type: "displayMath",
              body: "S(x,U)\\cap S(y,W)\n=\nS(z,U\\cap W).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">∩</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">∩</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            }
          ],
          numbering: {
            path: [
              3,
              6
            ]
          }
        },
        {
          id: "proof-7",
          type: "proof",
          content: [
            {
              id: "paragraph-107",
              type: "paragraph",
              children: [
                {
                  id: "text-265",
                  type: "text",
                  body: "Since"
                }
              ]
            },
            {
              id: "displayMath-91",
              type: "displayMath",
              body: "z\\in S(x,U)\\cap S(y,W),",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">∩</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-108",
              type: "paragraph",
              children: [
                {
                  id: "text-266",
                  type: "text",
                  body: "there exist "
                },
                {
                  id: "inlineMath-116",
                  type: "inlineMath",
                  body: "\\mathbf{u}\\in U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-267",
                  type: "text",
                  body: " and "
                },
                {
                  id: "inlineMath-117",
                  type: "inlineMath",
                  body: "\\mathbf{v}\\in W",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span></span></span></span>"
                },
                {
                  id: "text-268",
                  type: "text",
                  body: " such that"
                }
              ]
            },
            {
              id: "displayMath-92",
              type: "displayMath",
              body: "z=\\mathbf{u}(x)=\\mathbf{v}(y).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-109",
              type: "paragraph",
              children: [
                {
                  id: "text-269",
                  type: "text",
                  body: "We first consider an arbitrary point"
                }
              ]
            },
            {
              id: "displayMath-93",
              type: "displayMath",
              body: "h\\in S(x,U)\\cap S(y,W).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.0391em;\"></span><span class=\"mord mathnormal\">h</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">∩</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-110",
              type: "paragraph",
              children: [
                {
                  id: "text-270",
                  type: "text",
                  body: "Then there exist "
                },
                {
                  id: "inlineMath-118",
                  type: "inlineMath",
                  body: "\\mathbf{q}\\in U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathbf\">q</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-271",
                  type: "text",
                  body: " and "
                },
                {
                  id: "inlineMath-119",
                  type: "inlineMath",
                  body: "\\mathbf{p}\\in W",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathbf\">p</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span></span></span></span>"
                },
                {
                  id: "text-272",
                  type: "text",
                  body: " such that"
                }
              ]
            },
            {
              id: "displayMath-94",
              type: "displayMath",
              body: "h=\\mathbf{q}(x)=\\mathbf{p}(y).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\">h</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">q</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">p</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-111",
              type: "paragraph",
              children: [
                {
                  id: "text-273",
                  type: "text",
                  body: "Since"
                }
              ]
            },
            {
              id: "displayMath-95",
              type: "displayMath",
              body: "z=\\mathbf{u}(x),",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-112",
              type: "paragraph",
              children: [
                {
                  id: "text-274",
                  type: "text",
                  body: "we have"
                }
              ]
            },
            {
              id: "displayMath-96",
              type: "displayMath",
              body: "x=(-\\mathbf{u})(z),",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">x</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\">−</span><span class=\"mord mathbf\">u</span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-113",
              type: "paragraph",
              children: [
                {
                  id: "text-275",
                  type: "text",
                  body: "and therefore"
                }
              ]
            },
            {
              id: "displayMath-97",
              type: "displayMath",
              body: "h\n=\n\\mathbf{q}(x)\n=\n\\mathbf{q}\\bigl((-\\mathbf{u})(z)\\bigr)\n=\n(\\mathbf{q}-\\mathbf{u})(z).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\">h</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">q</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord mathbf\">q</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mopen\">(</span><span class=\"mord\">−</span><span class=\"mord mathbf\">u</span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathbf\">q</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-114",
              type: "paragraph",
              children: [
                {
                  id: "text-276",
                  type: "text",
                  body: "Similarly, since"
                }
              ]
            },
            {
              id: "displayMath-98",
              type: "displayMath",
              body: "z=\\mathbf{v}(y),",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-115",
              type: "paragraph",
              children: [
                {
                  id: "text-277",
                  type: "text",
                  body: "we have"
                }
              ]
            },
            {
              id: "displayMath-99",
              type: "displayMath",
              body: "h\n=\n\\mathbf{p}(y)\n=\n\\mathbf{p}\\bigl((-\\mathbf{v})(z)\\bigr)\n=\n(\\mathbf{p}-\\mathbf{v})(z).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\">h</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">p</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord mathbf\">p</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mopen\">(</span><span class=\"mord\">−</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathbf\">p</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-116",
              type: "paragraph",
              children: [
                {
                  id: "text-278",
                  type: "text",
                  body: "By the uniqueness of the vector mapping "
                },
                {
                  id: "inlineMath-120",
                  type: "inlineMath",
                  body: "z",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span></span></span></span>"
                },
                {
                  id: "text-279",
                  type: "text",
                  body: " onto "
                },
                {
                  id: "inlineMath-121",
                  type: "inlineMath",
                  body: "h",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\">h</span></span></span></span>"
                },
                {
                  id: "text-280",
                  type: "text",
                  body: ","
                }
              ]
            },
            {
              id: "displayMath-100",
              type: "displayMath",
              body: "\\mathbf{q}-\\mathbf{u}\n=\n\\mathbf{p}-\\mathbf{v}\n=\n\\mathbf{m}.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7778em;vertical-align:-0.1944em;\"></span><span class=\"mord mathbf\">q</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7778em;vertical-align:-0.1944em;\"></span><span class=\"mord mathbf\">p</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord mathbf\">m</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-117",
              type: "paragraph",
              children: [
                {
                  id: "text-281",
                  type: "text",
                  body: "Since"
                }
              ]
            },
            {
              id: "displayMath-101",
              type: "displayMath",
              body: "\\mathbf{q}-\\mathbf{u}\\in U\n\\qquad\\text{and}\\qquad\n\\mathbf{p}-\\mathbf{v}\\in W,",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7778em;vertical-align:-0.1944em;\"></span><span class=\"mord mathbf\">q</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mord text\"><span class=\"mord\">and</span></span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mord mathbf\">p</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8778em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-118",
              type: "paragraph",
              children: [
                {
                  id: "text-282",
                  type: "text",
                  body: "it follows that"
                }
              ]
            },
            {
              id: "displayMath-102",
              type: "displayMath",
              body: "\\mathbf{m}\\in U\\cap W.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\">m</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">∩</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-119",
              type: "paragraph",
              children: [
                {
                  id: "text-283",
                  type: "text",
                  body: "Hence,"
                }
              ]
            },
            {
              id: "displayMath-103",
              type: "displayMath",
              body: "h=\\mathbf{m}(z),",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\">h</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">m</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-120",
              type: "paragraph",
              children: [
                {
                  id: "text-284",
                  type: "text",
                  body: "and therefore"
                }
              ]
            },
            {
              id: "displayMath-104",
              type: "displayMath",
              body: "S(x,U)\\cap S(y,W)\n\\subseteq\nS(z,U\\cap W).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">∩</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">⊆</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">∩</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-121",
              type: "paragraph",
              children: [
                {
                  id: "text-285",
                  type: "text",
                  body: "We now take a point"
                }
              ]
            },
            {
              id: "displayMath-105",
              type: "displayMath",
              body: "k\\in S(z,U\\cap W).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.0391em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0315em;\">k</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">∩</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-122",
              type: "paragraph",
              children: [
                {
                  id: "text-286",
                  type: "text",
                  body: "Then there exists "
                },
                {
                  id: "inlineMath-122",
                  type: "inlineMath",
                  body: "\\mathbf{q}\\in U\\cap W",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathbf\">q</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">∩</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span></span></span></span>"
                },
                {
                  id: "text-287",
                  type: "text",
                  body: " such that"
                }
              ]
            },
            {
              id: "displayMath-106",
              type: "displayMath",
              body: "k=\\mathbf{q}(z).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0315em;\">k</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">q</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-123",
              type: "paragraph",
              children: [
                {
                  id: "text-288",
                  type: "text",
                  body: "Since"
                }
              ]
            },
            {
              id: "displayMath-107",
              type: "displayMath",
              body: "z=\\mathbf{u}(x)=\\mathbf{v}(y),",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-124",
              type: "paragraph",
              children: [
                {
                  id: "text-289",
                  type: "text",
                  body: "we have"
                }
              ]
            },
            {
              id: "displayMath-108",
              type: "displayMath",
              body: "k\n=\n\\mathbf{q}(z)\n=\n\\mathbf{q}\\bigl(\\mathbf{u}(x)\\bigr)\n=\n(\\mathbf{q}+\\mathbf{u})(x),",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0315em;\">k</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">q</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord mathbf\">q</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathbf\">u</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathbf\">q</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-125",
              type: "paragraph",
              children: [
                {
                  id: "text-290",
                  type: "text",
                  body: "and"
                }
              ]
            },
            {
              id: "displayMath-109",
              type: "displayMath",
              body: "k\n=\n\\mathbf{q}(z)\n=\n\\mathbf{q}\\bigl(\\mathbf{v}(y)\\bigr)\n=\n(\\mathbf{q}+\\mathbf{v})(y).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0315em;\">k</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">q</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord mathbf\">q</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathbf\">q</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-126",
              type: "paragraph",
              children: [
                {
                  id: "text-291",
                  type: "text",
                  body: "Since"
                }
              ]
            },
            {
              id: "displayMath-110",
              type: "displayMath",
              body: "\\mathbf{q}+\\mathbf{u}\\in U\n\\qquad\\text{and}\\qquad\n\\mathbf{q}+\\mathbf{v}\\in W,",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7778em;vertical-align:-0.1944em;\"></span><span class=\"mord mathbf\">q</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mord text\"><span class=\"mord\">and</span></span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mord mathbf\">q</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8778em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-127",
              type: "paragraph",
              children: [
                {
                  id: "text-292",
                  type: "text",
                  body: "we have"
                }
              ]
            },
            {
              id: "displayMath-111",
              type: "displayMath",
              body: "k\\in S(x,U)\\cap S(y,W).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.0391em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0315em;\">k</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">∩</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-128",
              type: "paragraph",
              children: [
                {
                  id: "text-293",
                  type: "text",
                  body: "Therefore,"
                }
              ]
            },
            {
              id: "displayMath-112",
              type: "displayMath",
              body: "S(z,U\\cap W)\n\\subseteq\nS(x,U)\\cap S(y,W).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">∩</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">⊆</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">∩</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-129",
              type: "paragraph",
              children: [
                {
                  id: "text-294",
                  type: "text",
                  body: "Hence,"
                }
              ]
            },
            {
              id: "displayMath-113",
              type: "displayMath",
              body: "S(x,U)\\cap S(y,W)\n=\nS(z,U\\cap W).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">∩</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">∩</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            }
          ]
        },
        {
          id: "definition-5",
          type: "definition",
          title: [
            {
              id: "text-295",
              type: "text",
              body: "Coordinate system"
            }
          ],
          content: [
            {
              id: "paragraph-130",
              type: "paragraph",
              children: [
                {
                  id: "text-296",
                  type: "text",
                  body: "Let "
                },
                {
                  id: "inlineMath-123",
                  type: "inlineMath",
                  body: "S(x,U)",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span></span></span></span>"
                },
                {
                  id: "text-297",
                  type: "text",
                  body: " be an affine space of dimension "
                },
                {
                  id: "inlineMath-124",
                  type: "inlineMath",
                  body: "d",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\">d</span></span></span></span>"
                },
                {
                  id: "text-298",
                  type: "text",
                  body: ". Let"
                }
              ]
            },
            {
              id: "displayMath-114",
              type: "displayMath",
              body: "\\mathbf{a}_1,\\mathbf{a}_2,\\ldots,\\mathbf{a}_d",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6389em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathbf\">a</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathbf\">a</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\">…</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathbf\">a</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3361em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">d</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span></span>"
            },
            {
              id: "paragraph-131",
              type: "paragraph",
              children: [
                {
                  id: "text-299",
                  type: "text",
                  body: "be a basis for "
                },
                {
                  id: "inlineMath-125",
                  type: "inlineMath",
                  body: "U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-300",
                  type: "text",
                  body: ", and let "
                },
                {
                  id: "inlineMath-126",
                  type: "inlineMath",
                  body: "x_0",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5806em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                },
                {
                  id: "text-301",
                  type: "text",
                  body: " be a point in "
                },
                {
                  id: "inlineMath-127",
                  type: "inlineMath",
                  body: "S(x,U)",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span></span></span></span>"
                },
                {
                  id: "text-302",
                  type: "text",
                  body: ". The point "
                },
                {
                  id: "inlineMath-128",
                  type: "inlineMath",
                  body: "x_0",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5806em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                },
                {
                  id: "text-303",
                  type: "text",
                  body: " and the basis "
                },
                {
                  id: "inlineMath-129",
                  type: "inlineMath",
                  body: "\\mathbf{a}_1,\\ldots,\\mathbf{a}_d",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6389em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathbf\">a</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\">…</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathbf\">a</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3361em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">d</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                },
                {
                  id: "text-304",
                  type: "text",
                  body: " form a coordinate system for "
                },
                {
                  id: "inlineMath-130",
                  type: "inlineMath",
                  body: "S(x,U)",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span></span></span></span>"
                },
                {
                  id: "text-305",
                  type: "text",
                  body: "."
                }
              ]
            },
            {
              id: "paragraph-132",
              type: "paragraph",
              children: [
                {
                  id: "text-306",
                  type: "text",
                  body: "We use the Einstein summation convention throughout: an index that occurs twice in a term is implicitly summed over its full range."
                }
              ]
            },
            {
              id: "paragraph-133",
              type: "paragraph",
              children: [
                {
                  id: "text-307",
                  type: "text",
                  body: "Let "
                },
                {
                  id: "inlineMath-131",
                  type: "inlineMath",
                  body: "y\\in S(x,U)",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span></span></span></span>"
                },
                {
                  id: "text-308",
                  type: "text",
                  body: ". There exist unique vectors"
                },
                {
                  id: "text-309",
                  type: "text",
                  body: " "
                },
                {
                  id: "inlineMath-132",
                  type: "inlineMath",
                  body: "\\mathbf{u},\\mathbf{u}_0\\in U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathbf\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-310",
                  type: "text",
                  body: " such that"
                }
              ]
            },
            {
              id: "displayMath-115",
              type: "displayMath",
              body: "y=\\mathbf{u}(x)\n\\qquad\\text{and}\\qquad\nx_0=\\mathbf{u}_0(x).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mord text\"><span class=\"mord\">and</span></span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathbf\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-134",
              type: "paragraph",
              children: [
                {
                  id: "text-311",
                  type: "text",
                  body: "Hence"
                }
              ]
            },
            {
              id: "displayMath-116",
              type: "displayMath",
              body: "x=(-\\mathbf{u}_0)(x_0),",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">x</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\">−</span><span class=\"mord\"><span class=\"mord mathbf\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-135",
              type: "paragraph",
              children: [
                {
                  id: "text-312",
                  type: "text",
                  body: "and therefore"
                }
              ]
            },
            {
              id: "displayMath-117",
              type: "displayMath",
              body: "y\n=\n\\mathbf{u}\\bigl((-\\mathbf{u}_0)(x_0)\\bigr)\n=\n(\\mathbf{u}-\\mathbf{u}_0)(x_0).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mopen\">(</span><span class=\"mord\">−</span><span class=\"mord\"><span class=\"mord mathbf\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathbf\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-136",
              type: "paragraph",
              children: [
                {
                  id: "text-313",
                  type: "text",
                  body: "Thus"
                }
              ]
            },
            {
              id: "displayMath-118",
              type: "displayMath",
              body: "\\overrightarrow{x_0y}=\\mathbf{u}-\\mathbf{u}_0.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.147em;vertical-align:-0.1944em;\"></span><span class=\"mord accent\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9526em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span></span></span><span class=\"svg-align\" style=\"top:-3.4306em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"hide-tail\" style=\"height:0.522em;min-width:0.888em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400em\" height=\"0.522em\" viewBox=\"0 0 400000 522\" preserveAspectRatio=\"xMaxYMin slice\"><path d=\"M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1944em;\"><span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathbf\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-137",
              type: "paragraph",
              children: [
                {
                  id: "text-314",
                  type: "text",
                  body: "Writing"
                }
              ]
            },
            {
              id: "displayMath-119",
              type: "displayMath",
              body: "\\mathbf{u}-\\mathbf{u}_0=y^i\\mathbf{a}_i,",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathbf\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0691em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8747em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord mathbf\">a</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-138",
              type: "paragraph",
              children: [
                {
                  id: "text-315",
                  type: "text",
                  body: "the components "
                },
                {
                  id: "inlineMath-133",
                  type: "inlineMath",
                  body: "y^1,\\ldots,y^d",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0435em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\">…</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8491em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">d</span></span></span></span></span></span></span></span></span></span></span>"
                },
                {
                  id: "text-316",
                  type: "text",
                  body: " are called the coordinates of "
                },
                {
                  id: "inlineMath-134",
                  type: "inlineMath",
                  body: "y",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span></span></span></span>"
                },
                {
                  id: "text-317",
                  type: "text",
                  body: " with respect to this coordinate system."
                }
              ]
            }
          ],
          numbering: {
            path: [
              3,
              7
            ]
          }
        },
        {
          id: "proposition-8",
          type: "proposition",
          content: [
            {
              id: "paragraph-139",
              type: "paragraph",
              children: [
                {
                  id: "text-318",
                  type: "text",
                  body: "Given a coordinate system "
                },
                {
                  id: "inlineMath-135",
                  type: "inlineMath",
                  body: "x_0,\\mathbf{a}_i",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6389em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathbf\">a</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                },
                {
                  id: "text-319",
                  type: "text",
                  body: " for an affine subspace"
                },
                {
                  id: "text-320",
                  type: "text",
                  body: " "
                },
                {
                  id: "inlineMath-136",
                  type: "inlineMath",
                  body: "S(x,U)",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span></span></span></span>"
                },
                {
                  id: "text-321",
                  type: "text",
                  body: ", the mapping"
                }
              ]
            },
            {
              id: "displayMath-120",
              type: "displayMath",
              body: "c:S(x,U)\\longrightarrow\\mathbb{R}^d,\n\\qquad\nc(y)=\\left(y^1,y^2,\\ldots,y^d\\right),",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">c</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">:</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">⟶</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.1491em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathbb\">R</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8991em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">d</span></span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\">c</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2491em;vertical-align:-0.35em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\">…</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8991em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">d</span></span></span></span></span></span></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size1\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-140",
              type: "paragraph",
              children: [
                {
                  id: "text-322",
                  type: "text",
                  body: "is one-to-one and onto."
                }
              ]
            }
          ],
          numbering: {
            path: [
              3,
              8
            ]
          }
        },
        {
          id: "proof-8",
          type: "proof",
          content: [
            {
              id: "paragraph-141",
              type: "paragraph",
              children: [
                {
                  id: "text-323",
                  type: "text",
                  body: "First, we note that "
                },
                {
                  id: "inlineMath-137",
                  type: "inlineMath",
                  body: "c",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">c</span></span></span></span>"
                },
                {
                  id: "text-324",
                  type: "text",
                  body: " is the composition of two mappings:"
                }
              ]
            },
            {
              id: "displayMath-121",
              type: "displayMath",
              body: "S(x,U)\\xrightarrow{\\,g\\,}U\\xrightarrow{\\,h\\,}\\mathbb{R}^d.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.1734em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel x-arrow\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9234em;\"><span style=\"top:-3.322em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight x-arrow-pad\"><span class=\"mord mtight\"><span class=\"mspace mtight\" style=\"margin-right:0.1952em;\"></span><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0359em;\">g</span><span class=\"mspace mtight\" style=\"margin-right:0.1952em;\"></span></span></span></span><span class=\"svg-align\" style=\"top:-2.689em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"hide-tail\" style=\"height:0.522em;min-width:1.469em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400em\" height=\"0.522em\" viewBox=\"0 0 400000 522\" preserveAspectRatio=\"xMaxYMin slice\"><path d=\"M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.011em;\"><span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.1191em;vertical-align:-0.011em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel x-arrow\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1081em;\"><span style=\"top:-3.322em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight x-arrow-pad\"><span class=\"mord mtight\"><span class=\"mspace mtight\" style=\"margin-right:0.1952em;\"></span><span class=\"mord mathnormal mtight\">h</span><span class=\"mspace mtight\" style=\"margin-right:0.1952em;\"></span></span></span></span><span class=\"svg-align\" style=\"top:-2.689em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"hide-tail\" style=\"height:0.522em;min-width:1.469em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400em\" height=\"0.522em\" viewBox=\"0 0 400000 522\" preserveAspectRatio=\"xMaxYMin slice\"><path d=\"M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.011em;\"><span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8991em;\"></span><span class=\"mord\"><span class=\"mord mathbb\">R</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8991em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">d</span></span></span></span></span></span></span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-142",
              type: "paragraph",
              children: [
                {
                  id: "text-325",
                  type: "text",
                  body: "For any "
                },
                {
                  id: "inlineMath-138",
                  type: "inlineMath",
                  body: "y\\in S(x,U)",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span></span></span></span>"
                },
                {
                  id: "text-326",
                  type: "text",
                  body: ", let"
                }
              ]
            },
            {
              id: "displayMath-122",
              type: "displayMath",
              body: "y=\\mathbf{u}(x)\n\\qquad\\text{and}\\qquad\nx_0=\\mathbf{u}_0(x).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mord text\"><span class=\"mord\">and</span></span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathbf\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-143",
              type: "paragraph",
              children: [
                {
                  id: "text-327",
                  type: "text",
                  body: "We define"
                }
              ]
            },
            {
              id: "displayMath-123",
              type: "displayMath",
              body: "g(y)=\\mathbf{u}-\\mathbf{u}_0.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">g</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathbf\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-144",
              type: "paragraph",
              children: [
                {
                  id: "text-328",
                  type: "text",
                  body: "If"
                }
              ]
            },
            {
              id: "displayMath-124",
              type: "displayMath",
              body: "\\mathbf{v}=v^i\\mathbf{a}_i,",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0691em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8747em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord mathbf\">a</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-145",
              type: "paragraph",
              children: [
                {
                  id: "text-329",
                  type: "text",
                  body: "we define"
                }
              ]
            },
            {
              id: "displayMath-125",
              type: "displayMath",
              body: "h(\\mathbf{v})=\\left(v^1,v^2,\\ldots,v^d\\right).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">h</span><span class=\"mopen\">(</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2491em;vertical-align:-0.35em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\">…</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8991em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">d</span></span></span></span></span></span></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size1\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-146",
              type: "paragraph",
              children: [
                {
                  id: "text-330",
                  type: "text",
                  body: "Therefore,"
                }
              ]
            },
            {
              id: "displayMath-126",
              type: "displayMath",
              body: "c(y)=(h\\circ g)(y).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">c</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">h</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">∘</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">g</span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-147",
              type: "paragraph",
              children: [
                {
                  id: "text-331",
                  type: "text",
                  body: "Let us first prove that "
                },
                {
                  id: "inlineMath-139",
                  type: "inlineMath",
                  body: "c",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">c</span></span></span></span>"
                },
                {
                  id: "text-332",
                  type: "text",
                  body: " is one-to-one. Assume that"
                }
              ]
            },
            {
              id: "displayMath-127",
              type: "displayMath",
              body: "(h\\circ g)(z)=(h\\circ g)(y).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">h</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">∘</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">g</span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">h</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">∘</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">g</span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-148",
              type: "paragraph",
              children: [
                {
                  id: "text-333",
                  type: "text",
                  body: "Let"
                }
              ]
            },
            {
              id: "displayMath-128",
              type: "displayMath",
              body: "z=\\mathbf{q}(x)\n\\qquad\\text{and}\\qquad\ny=\\mathbf{u}(x).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">q</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mord text\"><span class=\"mord\">and</span></span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-149",
              type: "paragraph",
              children: [
                {
                  id: "text-334",
                  type: "text",
                  body: "Then"
                }
              ]
            },
            {
              id: "displayMath-129",
              type: "displayMath",
              body: "g(z)=\\mathbf{q}-\\mathbf{u}_0\n\\qquad\\text{and}\\qquad\ng(y)=\\mathbf{u}-\\mathbf{u}_0.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">g</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7778em;vertical-align:-0.1944em;\"></span><span class=\"mord mathbf\">q</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathbf\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mord text\"><span class=\"mord\">and</span></span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">g</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathbf\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-150",
              type: "paragraph",
              children: [
                {
                  id: "text-335",
                  type: "text",
                  body: "Hence"
                }
              ]
            },
            {
              id: "displayMath-130",
              type: "displayMath",
              body: "h(\\mathbf{q}-\\mathbf{u}_0)\n=\nh(\\mathbf{u}-\\mathbf{u}_0).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">h</span><span class=\"mopen\">(</span><span class=\"mord mathbf\">q</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathbf\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">h</span><span class=\"mopen\">(</span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathbf\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-151",
              type: "paragraph",
              children: [
                {
                  id: "text-336",
                  type: "text",
                  body: "The components of a vector with respect to a basis are unique, and therefore"
                }
              ]
            },
            {
              id: "displayMath-131",
              type: "displayMath",
              body: "\\mathbf{q}-\\mathbf{u}_0\n=\n\\mathbf{u}-\\mathbf{u}_0.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7778em;vertical-align:-0.1944em;\"></span><span class=\"mord mathbf\">q</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathbf\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathbf\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-152",
              type: "paragraph",
              children: [
                {
                  id: "text-337",
                  type: "text",
                  body: "Thus"
                }
              ]
            },
            {
              id: "displayMath-132",
              type: "displayMath",
              body: "\\mathbf{q}=\\mathbf{u},",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6389em;vertical-align:-0.1944em;\"></span><span class=\"mord mathbf\">q</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6389em;vertical-align:-0.1944em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-153",
              type: "paragraph",
              children: [
                {
                  id: "text-338",
                  type: "text",
                  body: "and consequently"
                }
              ]
            },
            {
              id: "displayMath-133",
              type: "displayMath",
              body: "z=y.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-154",
              type: "paragraph",
              children: [
                {
                  id: "text-339",
                  type: "text",
                  body: "Hence "
                },
                {
                  id: "inlineMath-140",
                  type: "inlineMath",
                  body: "c",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">c</span></span></span></span>"
                },
                {
                  id: "text-340",
                  type: "text",
                  body: " is one-to-one."
                }
              ]
            },
            {
              id: "paragraph-155",
              type: "paragraph",
              children: [
                {
                  id: "text-341",
                  type: "text",
                  body: "Let us now prove that "
                },
                {
                  id: "inlineMath-141",
                  type: "inlineMath",
                  body: "c",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">c</span></span></span></span>"
                },
                {
                  id: "text-342",
                  type: "text",
                  body: " is onto. We first prove that"
                }
              ]
            },
            {
              id: "displayMath-134",
              type: "displayMath",
              body: "h:U\\longrightarrow\\mathbb{R}^d",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\">h</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">:</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6943em;vertical-align:-0.011em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">⟶</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8991em;\"></span><span class=\"mord\"><span class=\"mord mathbb\">R</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8991em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">d</span></span></span></span></span></span></span></span></span></span></span></span>"
            },
            {
              id: "paragraph-156",
              type: "paragraph",
              children: [
                {
                  id: "text-343",
                  type: "text",
                  body: "is onto. Indeed, for any"
                }
              ]
            },
            {
              id: "displayMath-135",
              type: "displayMath",
              body: "\\mathbf{k}=\\left(k^1,k^2,\\ldots,k^d\\right)\\in\\mathbb{R}^d,",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathbf\">k</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2491em;vertical-align:-0.35em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0315em;\">k</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0315em;\">k</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\">…</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0315em;\">k</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8991em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">d</span></span></span></span></span></span></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size1\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0935em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathbb\">R</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8991em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">d</span></span></span></span></span></span></span></span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-157",
              type: "paragraph",
              children: [
                {
                  id: "text-344",
                  type: "text",
                  body: "there exists a vector "
                },
                {
                  id: "inlineMath-142",
                  type: "inlineMath",
                  body: "\\mathbf{p}\\in U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathbf\">p</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-345",
                  type: "text",
                  body: " given by"
                }
              ]
            },
            {
              id: "displayMath-136",
              type: "displayMath",
              body: "\\mathbf{p}=k^i\\mathbf{a}_i,",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6389em;vertical-align:-0.1944em;\"></span><span class=\"mord mathbf\">p</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0691em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0315em;\">k</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8747em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord mathbf\">a</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-158",
              type: "paragraph",
              children: [
                {
                  id: "text-346",
                  type: "text",
                  body: "such that"
                }
              ]
            },
            {
              id: "displayMath-137",
              type: "displayMath",
              body: "h(\\mathbf{p})=\\mathbf{k}.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">h</span><span class=\"mopen\">(</span><span class=\"mord mathbf\">p</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathbf\">k</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-159",
              type: "paragraph",
              children: [
                {
                  id: "text-347",
                  type: "text",
                  body: "We now prove that"
                }
              ]
            },
            {
              id: "displayMath-138",
              type: "displayMath",
              body: "g:S(x,U)\\longrightarrow U",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">g</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">:</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">⟶</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span></span>"
            },
            {
              id: "paragraph-160",
              type: "paragraph",
              children: [
                {
                  id: "text-348",
                  type: "text",
                  body: "is onto. Indeed, for any "
                },
                {
                  id: "inlineMath-143",
                  type: "inlineMath",
                  body: "\\mathbf{p}\\in U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathbf\">p</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-349",
                  type: "text",
                  body: ", set"
                }
              ]
            },
            {
              id: "displayMath-139",
              type: "displayMath",
              body: "\\mathbf{u}=\\mathbf{p}+\\mathbf{u}_0.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7778em;vertical-align:-0.1944em;\"></span><span class=\"mord mathbf\">p</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathbf\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-161",
              type: "paragraph",
              children: [
                {
                  id: "text-350",
                  type: "text",
                  body: "Then "
                },
                {
                  id: "inlineMath-144",
                  type: "inlineMath",
                  body: "\\mathbf{u}\\in U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-351",
                  type: "text",
                  body: ", and"
                }
              ]
            },
            {
              id: "displayMath-140",
              type: "displayMath",
              body: "y=(\\mathbf{u}-\\mathbf{u}_0)(x_0)\\in S(x,U).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathbf\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-162",
              type: "paragraph",
              children: [
                {
                  id: "text-352",
                  type: "text",
                  body: "Moreover,"
                }
              ]
            },
            {
              id: "displayMath-141",
              type: "displayMath",
              body: "g(y)=\\mathbf{u}-\\mathbf{u}_0=\\mathbf{p}.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">g</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathbf\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6389em;vertical-align:-0.1944em;\"></span><span class=\"mord mathbf\">p</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-163",
              type: "paragraph",
              children: [
                {
                  id: "text-353",
                  type: "text",
                  body: "Therefore "
                },
                {
                  id: "inlineMath-145",
                  type: "inlineMath",
                  body: "g",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">g</span></span></span></span>"
                },
                {
                  id: "text-354",
                  type: "text",
                  body: " is onto."
                }
              ]
            },
            {
              id: "paragraph-164",
              type: "paragraph",
              children: [
                {
                  id: "text-355",
                  type: "text",
                  body: "Since both "
                },
                {
                  id: "inlineMath-146",
                  type: "inlineMath",
                  body: "g",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">g</span></span></span></span>"
                },
                {
                  id: "text-356",
                  type: "text",
                  body: " and "
                },
                {
                  id: "inlineMath-147",
                  type: "inlineMath",
                  body: "h",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\">h</span></span></span></span>"
                },
                {
                  id: "text-357",
                  type: "text",
                  body: " are onto, their composition"
                }
              ]
            },
            {
              id: "displayMath-142",
              type: "displayMath",
              body: "c=h\\circ g",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">c</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\">h</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">∘</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">g</span></span></span></span></span>"
            },
            {
              id: "paragraph-165",
              type: "paragraph",
              children: [
                {
                  id: "text-358",
                  type: "text",
                  body: "is onto."
                }
              ]
            }
          ]
        }
      ],
      subsections: [],
      numbering: {
        path: [
          3,
          0,
          0
        ]
      }
    },
    {
      id: "section-4",
      type: "section",
      title: [
        {
          id: "text-359",
          type: "text",
          body: "Analytic Geometry"
        }
      ],
      intro: [
        {
          id: "paragraph-166",
          type: "paragraph",
          children: [
            {
              id: "text-360",
              type: "text",
              body: "A functional on a real vector space "
            },
            {
              id: "inlineMath-148",
              type: "inlineMath",
              body: "V",
              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
            },
            {
              id: "text-361",
              type: "text",
              body: " is a mapping"
            }
          ]
        },
        {
          id: "displayMath-143",
          type: "displayMath",
          body: "f:V\\longrightarrow\\mathbb{R}",
          html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">:</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6943em;vertical-align:-0.011em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">⟶</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6889em;\"></span><span class=\"mord mathbb\">R</span></span></span></span></span>"
        },
        {
          id: "paragraph-167",
          type: "paragraph",
          children: [
            {
              id: "text-362",
              type: "text",
              body: "which satisfies the linearity conditions"
            }
          ]
        },
        {
          id: "displayMath-144",
          type: "displayMath",
          body: "f(\\mathbf{u}+\\mathbf{v})\n=\nf(\\mathbf{u})+f(\\mathbf{v}),\n\\qquad\n\\mathbf{u},\\mathbf{v}\\in V,",
          html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord mathbf\">u</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8778em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span><span class=\"mpunct\">,</span></span></span></span></span>"
        },
        {
          id: "paragraph-168",
          type: "paragraph",
          children: [
            {
              id: "text-363",
              type: "text",
              body: "and"
            }
          ]
        },
        {
          id: "displayMath-145",
          type: "displayMath",
          body: "f(t\\mathbf{v})\n=\nt f(\\mathbf{v}),\n\\qquad\n\\mathbf{v}\\in V,\\quad t\\in\\mathbb{R}.",
          html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">t</span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8778em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:1em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\">t</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6889em;\"></span><span class=\"mord mathbb\">R</span><span class=\"mord\">.</span></span></span></span></span>"
        },
        {
          id: "proposition-9",
          type: "proposition",
          content: [
            {
              id: "paragraph-169",
              type: "paragraph",
              children: [
                {
                  id: "text-364",
                  type: "text",
                  body: "Let "
                },
                {
                  id: "inlineMath-149",
                  type: "inlineMath",
                  body: "V",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                },
                {
                  id: "text-365",
                  type: "text",
                  body: " be a real vector space of dimension "
                },
                {
                  id: "inlineMath-150",
                  type: "inlineMath",
                  body: "m",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">m</span></span></span></span>"
                },
                {
                  id: "text-366",
                  type: "text",
                  body: ". Any"
                },
                {
                  id: "text-367",
                  type: "text",
                  body: " "
                },
                {
                  id: "inlineMath-151",
                  type: "inlineMath",
                  body: "(m-1)",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">m</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\">1</span><span class=\"mclose\">)</span></span></span></span>"
                },
                {
                  id: "text-368",
                  type: "text",
                  body: "-dimensional linear subspace "
                },
                {
                  id: "inlineMath-152",
                  type: "inlineMath",
                  body: "U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-369",
                  type: "text",
                  body: " of "
                },
                {
                  id: "inlineMath-153",
                  type: "inlineMath",
                  body: "V",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                },
                {
                  id: "text-370",
                  type: "text",
                  body: " is the kernel of a"
                },
                {
                  id: "text-371",
                  type: "text",
                  body: " "
                },
                {
                  id: "text-372",
                  type: "text",
                  body: "nonzero functional"
                }
              ]
            },
            {
              id: "displayMath-146",
              type: "displayMath",
              body: "f:V\\longrightarrow\\mathbb{R}.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">:</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6943em;vertical-align:-0.011em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">⟶</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6889em;\"></span><span class=\"mord mathbb\">R</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-170",
              type: "paragraph",
              children: [
                {
                  id: "text-373",
                  type: "text",
                  body: "Conversely, the kernel of every nonzero functional on "
                },
                {
                  id: "inlineMath-154",
                  type: "inlineMath",
                  body: "V",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                },
                {
                  id: "text-374",
                  type: "text",
                  body: " is an"
                },
                {
                  id: "text-375",
                  type: "text",
                  body: " "
                },
                {
                  id: "inlineMath-155",
                  type: "inlineMath",
                  body: "(m-1)",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">m</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\">1</span><span class=\"mclose\">)</span></span></span></span>"
                },
                {
                  id: "text-376",
                  type: "text",
                  body: "-dimensional linear subspace of "
                },
                {
                  id: "inlineMath-156",
                  type: "inlineMath",
                  body: "V",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                },
                {
                  id: "text-377",
                  type: "text",
                  body: ". Moreover, the functional"
                },
                {
                  id: "text-378",
                  type: "text",
                  body: " "
                },
                {
                  id: "text-379",
                  type: "text",
                  body: "is determined by "
                },
                {
                  id: "inlineMath-157",
                  type: "inlineMath",
                  body: "U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-380",
                  type: "text",
                  body: " up to a nonzero scalar factor."
                }
              ]
            }
          ],
          numbering: {
            path: [
              4,
              1
            ]
          }
        },
        {
          id: "proof-9",
          type: "proof",
          content: [
            {
              id: "paragraph-171",
              type: "paragraph",
              children: [
                {
                  id: "text-381",
                  type: "text",
                  body: "We first prove that the kernel of a nonzero functional "
                },
                {
                  id: "inlineMath-158",
                  type: "inlineMath",
                  body: "f",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span></span></span></span>"
                },
                {
                  id: "text-382",
                  type: "text",
                  body: " is a linear"
                },
                {
                  id: "text-383",
                  type: "text",
                  body: " "
                },
                {
                  id: "text-384",
                  type: "text",
                  body: "subspace of "
                },
                {
                  id: "inlineMath-159",
                  type: "inlineMath",
                  body: "V",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                },
                {
                  id: "text-385",
                  type: "text",
                  body: " of dimension "
                },
                {
                  id: "inlineMath-160",
                  type: "inlineMath",
                  body: "m-1",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord mathnormal\">m</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">1</span></span></span></span>"
                },
                {
                  id: "text-386",
                  type: "text",
                  body: "."
                }
              ]
            },
            {
              id: "paragraph-172",
              type: "paragraph",
              children: [
                {
                  id: "text-387",
                  type: "text",
                  body: "The kernel of "
                },
                {
                  id: "inlineMath-161",
                  type: "inlineMath",
                  body: "f",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span></span></span></span>"
                },
                {
                  id: "text-388",
                  type: "text",
                  body: " is"
                }
              ]
            },
            {
              id: "displayMath-147",
              type: "displayMath",
              body: "\\ker(f)\n=\n\\left\\{\n\\mathbf{u}\\in V\n\\mid\nf(\\mathbf{u})=0\n\\right\\}.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mop\">ker</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">{</span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord mathbf\">u</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">}</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-173",
              type: "paragraph",
              children: [
                {
                  id: "text-389",
                  type: "text",
                  body: "Let "
                },
                {
                  id: "inlineMath-162",
                  type: "inlineMath",
                  body: "\\mathbf{u},\\mathbf{v}\\in\\ker(f)",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mop\">ker</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mclose\">)</span></span></span></span>"
                },
                {
                  id: "text-390",
                  type: "text",
                  body: ", and let"
                },
                {
                  id: "text-391",
                  type: "text",
                  body: " "
                },
                {
                  id: "inlineMath-163",
                  type: "inlineMath",
                  body: "\\alpha,\\beta\\in\\mathbb{R}",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0037em;\">α</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0528em;\">β</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6889em;\"></span><span class=\"mord mathbb\">R</span></span></span></span>"
                },
                {
                  id: "text-392",
                  type: "text",
                  body: ". By linearity,"
                }
              ]
            },
            {
              id: "displayMath-148",
              type: "displayMath",
              body: "f(\\alpha\\mathbf{u}+\\beta\\mathbf{v})\n=\n\\alpha f(\\mathbf{u})+\\beta f(\\mathbf{v})\n=\n0.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0037em;\">α</span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0528em;\">β</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0037em;\">α</span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord mathbf\">u</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0528em;\">β</span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">0.</span></span></span></span></span>"
            },
            {
              id: "paragraph-174",
              type: "paragraph",
              children: [
                {
                  id: "text-393",
                  type: "text",
                  body: "Hence"
                }
              ]
            },
            {
              id: "displayMath-149",
              type: "displayMath",
              body: "\\alpha\\mathbf{u}+\\beta\\mathbf{v}\\in\\ker(f),",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0037em;\">α</span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0528em;\">β</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mop\">ker</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-175",
              type: "paragraph",
              children: [
                {
                  id: "text-394",
                  type: "text",
                  body: "and therefore "
                },
                {
                  id: "inlineMath-164",
                  type: "inlineMath",
                  body: "\\ker(f)",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mop\">ker</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mclose\">)</span></span></span></span>"
                },
                {
                  id: "text-395",
                  type: "text",
                  body: " is a linear subspace of "
                },
                {
                  id: "inlineMath-165",
                  type: "inlineMath",
                  body: "V",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                },
                {
                  id: "text-396",
                  type: "text",
                  body: "."
                }
              ]
            },
            {
              id: "paragraph-176",
              type: "paragraph",
              children: [
                {
                  id: "text-397",
                  type: "text",
                  body: "Let"
                }
              ]
            },
            {
              id: "displayMath-150",
              type: "displayMath",
              body: "\\mathbf{a}_1,\\ldots,\\mathbf{a}_m",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6389em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathbf\">a</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\">…</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathbf\">a</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">m</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span></span>"
            },
            {
              id: "paragraph-177",
              type: "paragraph",
              children: [
                {
                  id: "text-398",
                  type: "text",
                  body: "be a basis of "
                },
                {
                  id: "inlineMath-166",
                  type: "inlineMath",
                  body: "V",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                },
                {
                  id: "text-399",
                  type: "text",
                  body: ". Since "
                },
                {
                  id: "inlineMath-167",
                  type: "inlineMath",
                  body: "f",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span></span></span></span>"
                },
                {
                  id: "text-400",
                  type: "text",
                  body: " is nonzero, at least one basis vector"
                },
                {
                  id: "text-401",
                  type: "text",
                  body: " "
                },
                {
                  id: "text-402",
                  type: "text",
                  body: "has a nonzero image. After relabeling the basis if necessary, we may"
                },
                {
                  id: "text-403",
                  type: "text",
                  body: " "
                },
                {
                  id: "text-404",
                  type: "text",
                  body: "assume that"
                }
              ]
            },
            {
              id: "displayMath-151",
              type: "displayMath",
              body: "f(\\mathbf{a}_m)\\neq0.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathbf\">a</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">m</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\"><span class=\"mrel\"><span class=\"mord vbox\"><span class=\"thinbox\"><span class=\"rlap\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"inner\"><span class=\"mord\"><span class=\"mrel\"></span></span></span><span class=\"fix\"></span></span></span></span></span><span class=\"mspace nobreak\"></span><span class=\"mrel\">=</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">0.</span></span></span></span></span>"
            },
            {
              id: "paragraph-178",
              type: "paragraph",
              children: [
                {
                  id: "text-405",
                  type: "text",
                  body: "For any "
                },
                {
                  id: "inlineMath-168",
                  type: "inlineMath",
                  body: "\\mathbf{u}\\in\\ker(f)",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mop\">ker</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mclose\">)</span></span></span></span>"
                },
                {
                  id: "text-406",
                  type: "text",
                  body: ", write"
                }
              ]
            },
            {
              id: "displayMath-152",
              type: "displayMath",
              body: "\\mathbf{u}=u^i\\mathbf{a}_i.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0247em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">u</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8747em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord mathbf\">a</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-179",
              type: "paragraph",
              children: [
                {
                  id: "text-407",
                  type: "text",
                  body: "Then"
                }
              ]
            },
            {
              id: "displayMath-153",
              type: "displayMath",
              body: "f(\\mathbf{u})\n=\nu^i f(\\mathbf{a}_i)\n=\n0.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord mathbf\">u</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.1247em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">u</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8747em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span></span></span></span></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathbf\">a</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">0.</span></span></span></span></span>"
            },
            {
              id: "paragraph-180",
              type: "paragraph",
              children: [
                {
                  id: "text-408",
                  type: "text",
                  body: "Thus"
                }
              ]
            },
            {
              id: "displayMath-154",
              type: "displayMath",
              body: "u^m\n=\n-\\frac{\nu^1f(\\mathbf{a}_1)+\\cdots+u^{m-1}f(\\mathbf{a}_{m-1})\n}{\nf(\\mathbf{a}_m)\n}.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7144em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">u</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7144em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">m</span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.4271em;vertical-align:-0.936em;\"></span><span class=\"mord\">−</span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4911em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathbf\">a</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">m</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">u</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span></span></span></span></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathbf\">a</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"minner\">⋯</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">u</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">m</span><span class=\"mbin mtight\">−</span><span class=\"mord mtight\">1</span></span></span></span></span></span></span></span></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathbf\">a</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">m</span><span class=\"mbin mtight\">−</span><span class=\"mord mtight\">1</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2083em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.936em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-181",
              type: "paragraph",
              children: [
                {
                  id: "text-409",
                  type: "text",
                  body: "Therefore only "
                },
                {
                  id: "inlineMath-169",
                  type: "inlineMath",
                  body: "m-1",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord mathnormal\">m</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">1</span></span></span></span>"
                },
                {
                  id: "text-410",
                  type: "text",
                  body: " coefficients can be chosen independently, and"
                }
              ]
            },
            {
              id: "displayMath-155",
              type: "displayMath",
              body: "\\dim\\ker(f)=m-1.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mop\">dim</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mop\">ker</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord mathnormal\">m</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">1.</span></span></span></span></span>"
            },
            {
              id: "paragraph-182",
              type: "paragraph",
              children: [
                {
                  id: "text-411",
                  type: "text",
                  body: "We now prove the converse. Let "
                },
                {
                  id: "inlineMath-170",
                  type: "inlineMath",
                  body: "U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-412",
                  type: "text",
                  body: " be an "
                },
                {
                  id: "inlineMath-171",
                  type: "inlineMath",
                  body: "(m-1)",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">m</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\">1</span><span class=\"mclose\">)</span></span></span></span>"
                },
                {
                  id: "text-413",
                  type: "text",
                  body: "-dimensional linear"
                },
                {
                  id: "text-414",
                  type: "text",
                  body: " "
                },
                {
                  id: "text-415",
                  type: "text",
                  body: "subspace of "
                },
                {
                  id: "inlineMath-172",
                  type: "inlineMath",
                  body: "V",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                },
                {
                  id: "text-416",
                  type: "text",
                  body: ". Choose a vector"
                }
              ]
            },
            {
              id: "displayMath-156",
              type: "displayMath",
              body: "\\mathbf{e}\\in V\\setminus U.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\">e</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">∖</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-183",
              type: "paragraph",
              children: [
                {
                  id: "text-417",
                  type: "text",
                  body: "Then"
                }
              ]
            },
            {
              id: "displayMath-157",
              type: "displayMath",
              body: "W=\\operatorname{span}\\{\\mathbf{e}\\}",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mop\"><span class=\"mord mathrm\">span</span></span><span class=\"mopen\">{</span><span class=\"mord mathbf\">e</span><span class=\"mclose\">}</span></span></span></span></span>"
            },
            {
              id: "paragraph-184",
              type: "paragraph",
              children: [
                {
                  id: "text-418",
                  type: "text",
                  body: "is a one-dimensional linear subspace of "
                },
                {
                  id: "inlineMath-173",
                  type: "inlineMath",
                  body: "V",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                },
                {
                  id: "text-419",
                  type: "text",
                  body: ", and"
                }
              ]
            },
            {
              id: "displayMath-158",
              type: "displayMath",
              body: "U\\cap W=\\{\\mathbf{0}\\}.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">∩</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">{</span><span class=\"mord mathbf\">0</span><span class=\"mclose\">}</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-185",
              type: "paragraph",
              children: [
                {
                  id: "text-420",
                  type: "text",
                  body: "Since"
                }
              ]
            },
            {
              id: "displayMath-159",
              type: "displayMath",
              body: "\\dim U+\\dim W=m,",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7778em;vertical-align:-0.0833em;\"></span><span class=\"mop\">dim</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mop\">dim</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\">m</span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-186",
              type: "paragraph",
              children: [
                {
                  id: "text-421",
                  type: "text",
                  body: "we have"
                }
              ]
            },
            {
              id: "displayMath-160",
              type: "displayMath",
              body: "V=U\\oplus W.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7667em;vertical-align:-0.0833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">⊕</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-187",
              type: "paragraph",
              children: [
                {
                  id: "text-422",
                  type: "text",
                  body: "Hence every "
                },
                {
                  id: "inlineMath-174",
                  type: "inlineMath",
                  body: "\\mathbf{v}\\in V",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                },
                {
                  id: "text-423",
                  type: "text",
                  body: " can be written uniquely as"
                }
              ]
            },
            {
              id: "displayMath-161",
              type: "displayMath",
              body: "\\mathbf{v}=\\mathbf{u}+\\beta\\mathbf{e},\n\\qquad\n\\mathbf{u}\\in U,\\quad \\beta\\in\\mathbb{R}.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0528em;\">β</span><span class=\"mord mathbf\">e</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:1em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0528em;\">β</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6889em;\"></span><span class=\"mord mathbb\">R</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-188",
              type: "paragraph",
              children: [
                {
                  id: "text-424",
                  type: "text",
                  body: "Define"
                }
              ]
            },
            {
              id: "displayMath-162",
              type: "displayMath",
              body: "f:V\\longrightarrow\\mathbb{R}",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">:</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6943em;vertical-align:-0.011em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">⟶</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6889em;\"></span><span class=\"mord mathbb\">R</span></span></span></span></span>"
            },
            {
              id: "paragraph-189",
              type: "paragraph",
              children: [
                {
                  id: "text-425",
                  type: "text",
                  body: "by"
                }
              ]
            },
            {
              id: "displayMath-163",
              type: "displayMath",
              body: "f(\\mathbf{v})=\\beta.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0528em;\">β</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-190",
              type: "paragraph",
              children: [
                {
                  id: "text-426",
                  type: "text",
                  body: "This functional is linear and nonzero. Moreover,"
                }
              ]
            },
            {
              id: "displayMath-164",
              type: "displayMath",
              body: "f(\\mathbf{v})=0",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">0</span></span></span></span></span>"
            },
            {
              id: "paragraph-191",
              type: "paragraph",
              children: [
                {
                  id: "text-427",
                  type: "text",
                  body: "if and only if "
                },
                {
                  id: "inlineMath-175",
                  type: "inlineMath",
                  body: "\\beta=0",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0528em;\">β</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">0</span></span></span></span>"
                },
                {
                  id: "text-428",
                  type: "text",
                  body: ", which holds if and only if"
                },
                {
                  id: "text-429",
                  type: "text",
                  body: " "
                },
                {
                  id: "inlineMath-176",
                  type: "inlineMath",
                  body: "\\mathbf{v}\\in U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-430",
                  type: "text",
                  body: ". Therefore,"
                }
              ]
            },
            {
              id: "displayMath-165",
              type: "displayMath",
              body: "\\ker(f)=U.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mop\">ker</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-192",
              type: "paragraph",
              children: [
                {
                  id: "text-431",
                  type: "text",
                  body: "Finally, let "
                },
                {
                  id: "inlineMath-177",
                  type: "inlineMath",
                  body: "f",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span></span></span></span>"
                },
                {
                  id: "text-432",
                  type: "text",
                  body: " and "
                },
                {
                  id: "inlineMath-178",
                  type: "inlineMath",
                  body: "g",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">g</span></span></span></span>"
                },
                {
                  id: "text-433",
                  type: "text",
                  body: " be two nonzero functionals with the same"
                },
                {
                  id: "text-434",
                  type: "text",
                  body: " "
                },
                {
                  id: "text-435",
                  type: "text",
                  body: "kernel "
                },
                {
                  id: "inlineMath-179",
                  type: "inlineMath",
                  body: "U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-436",
                  type: "text",
                  body: ":"
                }
              ]
            },
            {
              id: "displayMath-166",
              type: "displayMath",
              body: "\\ker(f)=\\ker(g)=U.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mop\">ker</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mop\">ker</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">g</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-193",
              type: "paragraph",
              children: [
                {
                  id: "text-437",
                  type: "text",
                  body: "For any "
                },
                {
                  id: "inlineMath-180",
                  type: "inlineMath",
                  body: "\\mathbf{v}\\in V",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                },
                {
                  id: "text-438",
                  type: "text",
                  body: ", write"
                }
              ]
            },
            {
              id: "displayMath-167",
              type: "displayMath",
              body: "\\mathbf{v}=\\mathbf{u}+\\beta\\mathbf{e},\n\\qquad\n\\mathbf{u}\\in U.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0528em;\">β</span><span class=\"mord mathbf\">e</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-194",
              type: "paragraph",
              children: [
                {
                  id: "text-439",
                  type: "text",
                  body: "Since"
                }
              ]
            },
            {
              id: "displayMath-168",
              type: "displayMath",
              body: "f(\\mathbf{u})=g(\\mathbf{u})=0,",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord mathbf\">u</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">g</span><span class=\"mopen\">(</span><span class=\"mord mathbf\">u</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8389em;vertical-align:-0.1944em;\"></span><span class=\"mord\">0</span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-195",
              type: "paragraph",
              children: [
                {
                  id: "text-440",
                  type: "text",
                  body: "we have"
                }
              ]
            },
            {
              id: "displayMath-169",
              type: "displayMath",
              body: "f(\\mathbf{v})=\\beta f(\\mathbf{e})",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0528em;\">β</span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord mathbf\">e</span><span class=\"mclose\">)</span></span></span></span></span>"
            },
            {
              id: "paragraph-196",
              type: "paragraph",
              children: [
                {
                  id: "text-441",
                  type: "text",
                  body: "and"
                }
              ]
            },
            {
              id: "displayMath-170",
              type: "displayMath",
              body: "g(\\mathbf{v})=\\beta g(\\mathbf{e}).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">g</span><span class=\"mopen\">(</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0528em;\">β</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">g</span><span class=\"mopen\">(</span><span class=\"mord mathbf\">e</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-197",
              type: "paragraph",
              children: [
                {
                  id: "text-442",
                  type: "text",
                  body: "Furthermore,"
                }
              ]
            },
            {
              id: "displayMath-171",
              type: "displayMath",
              body: "f(\\mathbf{e})\\neq0\n\\qquad\\text{and}\\qquad\ng(\\mathbf{e})\\neq0,",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord mathbf\">e</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\"><span class=\"mrel\"><span class=\"mord vbox\"><span class=\"thinbox\"><span class=\"rlap\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"inner\"><span class=\"mord\"><span class=\"mrel\"></span></span></span><span class=\"fix\"></span></span></span></span></span><span class=\"mspace nobreak\"></span><span class=\"mrel\">=</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\">0</span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mord text\"><span class=\"mord\">and</span></span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">g</span><span class=\"mopen\">(</span><span class=\"mord mathbf\">e</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\"><span class=\"mrel\"><span class=\"mord vbox\"><span class=\"thinbox\"><span class=\"rlap\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"inner\"><span class=\"mord\"><span class=\"mrel\"></span></span></span><span class=\"fix\"></span></span></span></span></span><span class=\"mspace nobreak\"></span><span class=\"mrel\">=</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8389em;vertical-align:-0.1944em;\"></span><span class=\"mord\">0</span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-198",
              type: "paragraph",
              children: [
                {
                  id: "text-443",
                  type: "text",
                  body: "because "
                },
                {
                  id: "inlineMath-181",
                  type: "inlineMath",
                  body: "\\mathbf{e}\\notin U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">e</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\"><span class=\"mord\"><span class=\"mrel\">∈</span></span><span class=\"mord vbox\"><span class=\"thinbox\"><span class=\"llap\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"inner\"><span class=\"mord\"><span class=\"mord\">/</span><span class=\"mspace\" style=\"margin-right:0.0556em;\"></span></span></span><span class=\"fix\"></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-444",
                  type: "text",
                  body: ". Define"
                }
              ]
            },
            {
              id: "displayMath-172",
              type: "displayMath",
              body: "\\lambda\n=\n\\frac{f(\\mathbf{e})}{g(\\mathbf{e})}.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\">λ</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.363em;vertical-align:-0.936em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.427em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">g</span><span class=\"mopen\">(</span><span class=\"mord mathbf\">e</span><span class=\"mclose\">)</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord mathbf\">e</span><span class=\"mclose\">)</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.936em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-199",
              type: "paragraph",
              children: [
                {
                  id: "text-445",
                  type: "text",
                  body: "Then "
                },
                {
                  id: "inlineMath-182",
                  type: "inlineMath",
                  body: "\\lambda\\neq0",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\">λ</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\"><span class=\"mrel\"><span class=\"mord vbox\"><span class=\"thinbox\"><span class=\"rlap\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"inner\"><span class=\"mord\"><span class=\"mrel\"></span></span></span><span class=\"fix\"></span></span></span></span></span><span class=\"mspace nobreak\"></span><span class=\"mrel\">=</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">0</span></span></span></span>"
                },
                {
                  id: "text-446",
                  type: "text",
                  body: ", and"
                }
              ]
            },
            {
              id: "displayMath-173",
              type: "displayMath",
              body: "f(\\mathbf{v})\n=\n\\lambda g(\\mathbf{v})",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">λ</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">g</span><span class=\"mopen\">(</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mclose\">)</span></span></span></span></span>"
            },
            {
              id: "paragraph-200",
              type: "paragraph",
              children: [
                {
                  id: "text-447",
                  type: "text",
                  body: "for every "
                },
                {
                  id: "inlineMath-183",
                  type: "inlineMath",
                  body: "\\mathbf{v}\\in V",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                },
                {
                  id: "text-448",
                  type: "text",
                  body: ". Hence "
                },
                {
                  id: "inlineMath-184",
                  type: "inlineMath",
                  body: "f",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span></span></span></span>"
                },
                {
                  id: "text-449",
                  type: "text",
                  body: " is determined by "
                },
                {
                  id: "inlineMath-185",
                  type: "inlineMath",
                  body: "U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-450",
                  type: "text",
                  body: " up to"
                },
                {
                  id: "text-451",
                  type: "text",
                  body: " "
                },
                {
                  id: "text-452",
                  type: "text",
                  body: "a nonzero scalar factor."
                }
              ]
            }
          ]
        },
        {
          id: "definition-6",
          type: "definition",
          content: [
            {
              id: "paragraph-201",
              type: "paragraph",
              children: [
                {
                  id: "text-453",
                  type: "text",
                  body: "Let "
                },
                {
                  id: "inlineMath-186",
                  type: "inlineMath",
                  body: "X",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0785em;\">X</span></span></span></span>"
                },
                {
                  id: "text-454",
                  type: "text",
                  body: " be an "
                },
                {
                  id: "inlineMath-187",
                  type: "inlineMath",
                  body: "n",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">n</span></span></span></span>"
                },
                {
                  id: "text-455",
                  type: "text",
                  body: "-dimensional affine space. An affine"
                },
                {
                  id: "text-456",
                  type: "text",
                  body: " "
                },
                {
                  id: "text-457",
                  type: "text",
                  body: "subspace "
                },
                {
                  id: "inlineMath-188",
                  type: "inlineMath",
                  body: "S(x,U)",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span></span></span></span>"
                },
                {
                  id: "text-458",
                  type: "text",
                  body: " of "
                },
                {
                  id: "inlineMath-189",
                  type: "inlineMath",
                  body: "X",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0785em;\">X</span></span></span></span>"
                },
                {
                  id: "text-459",
                  type: "text",
                  body: " is called a "
                },
                {
                  body: "hyperplane",
                  id: "emph-1",
                  type: "emph"
                },
                {
                  id: "text-460",
                  type: "text",
                  body: " if its"
                },
                {
                  id: "text-461",
                  type: "text",
                  body: " "
                },
                {
                  id: "text-462",
                  type: "text",
                  body: "direction space "
                },
                {
                  id: "inlineMath-190",
                  type: "inlineMath",
                  body: "U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-463",
                  type: "text",
                  body: " has dimension "
                },
                {
                  id: "inlineMath-191",
                  type: "inlineMath",
                  body: "n-1",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord mathnormal\">n</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">1</span></span></span></span>"
                },
                {
                  id: "text-464",
                  type: "text",
                  body: "."
                }
              ]
            }
          ],
          numbering: {
            path: [
              4,
              2
            ]
          }
        },
        {
          id: "definition-7",
          type: "definition",
          title: [
            {
              id: "text-465",
              type: "text",
              body: "Coordinate map"
            }
          ],
          content: [
            {
              id: "paragraph-202",
              type: "paragraph",
              children: [
                {
                  id: "text-466",
                  type: "text",
                  body: "Let"
                }
              ]
            },
            {
              id: "displayMath-174",
              type: "displayMath",
              body: "x_0,\\mathbf a_1,\\ldots,\\mathbf a_m",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6389em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathbf\">a</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\">…</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathbf\">a</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">m</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span></span>"
            },
            {
              id: "paragraph-203",
              type: "paragraph",
              children: [
                {
                  id: "text-467",
                  type: "text",
                  body: "be a reference system for an affine space "
                },
                {
                  id: "inlineMath-192",
                  type: "inlineMath",
                  body: "(X,V)",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0785em;\">X</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span><span class=\"mclose\">)</span></span></span></span>"
                },
                {
                  id: "text-468",
                  type: "text",
                  body: ", where"
                },
                {
                  id: "text-469",
                  type: "text",
                  body: " "
                },
                {
                  id: "inlineMath-193",
                  type: "inlineMath",
                  body: "\\mathbf a_1,\\ldots,\\mathbf a_m",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6389em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathbf\">a</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\">…</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathbf\">a</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">m</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                },
                {
                  id: "text-470",
                  type: "text",
                  body: " is a basis of "
                },
                {
                  id: "inlineMath-194",
                  type: "inlineMath",
                  body: "V",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                },
                {
                  id: "text-471",
                  type: "text",
                  body: "."
                }
              ]
            },
            {
              id: "paragraph-204",
              type: "paragraph",
              children: [
                {
                  id: "text-472",
                  type: "text",
                  body: "The coordinate map associated with this reference system is the map"
                }
              ]
            },
            {
              id: "displayMath-175",
              type: "displayMath",
              body: "c:X\\longrightarrow\\mathbb R^m",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">c</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">:</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6943em;vertical-align:-0.011em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0785em;\">X</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">⟶</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7144em;\"></span><span class=\"mord\"><span class=\"mord mathbb\">R</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7144em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">m</span></span></span></span></span></span></span></span></span></span></span></span>"
            },
            {
              id: "paragraph-205",
              type: "paragraph",
              children: [
                {
                  id: "text-473",
                  type: "text",
                  body: "defined by"
                }
              ]
            },
            {
              id: "displayMath-176",
              type: "displayMath",
              body: "c(y)=(y^1,\\ldots,y^m)",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">c</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.1141em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\">…</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7144em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">m</span></span></span></span></span></span></span></span><span class=\"mclose\">)</span></span></span></span></span>"
            },
            {
              id: "paragraph-206",
              type: "paragraph",
              children: [
                {
                  id: "text-474",
                  type: "text",
                  body: "if and only if"
                }
              ]
            },
            {
              id: "displayMath-177",
              type: "displayMath",
              body: "y=(y^i\\mathbf a_i)(x_0).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.1247em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8747em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord mathbf\">a</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            }
          ],
          numbering: {
            path: [
              4,
              3
            ]
          }
        },
        {
          id: "proposition-10",
          type: "proposition",
          content: [
            {
              id: "paragraph-207",
              type: "paragraph",
              children: [
                {
                  id: "text-475",
                  type: "text",
                  body: "Let "
                },
                {
                  id: "inlineMath-195",
                  type: "inlineMath",
                  body: "(X,V)",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0785em;\">X</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span><span class=\"mclose\">)</span></span></span></span>"
                },
                {
                  id: "text-476",
                  type: "text",
                  body: " be an affine space of dimension "
                },
                {
                  id: "inlineMath-196",
                  type: "inlineMath",
                  body: "m",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">m</span></span></span></span>"
                },
                {
                  id: "text-477",
                  type: "text",
                  body: ", equipped with the"
                },
                {
                  id: "text-478",
                  type: "text",
                  body: " "
                },
                {
                  id: "text-479",
                  type: "text",
                  body: "reference system"
                }
              ]
            },
            {
              id: "displayMath-178",
              type: "displayMath",
              body: "x_0,\\mathbf a_1,\\ldots,\\mathbf a_m.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6389em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathbf\">a</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\">…</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathbf\">a</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">m</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-208",
              type: "paragraph",
              children: [
                {
                  id: "text-480",
                  type: "text",
                  body: "A hyperplane of "
                },
                {
                  id: "inlineMath-197",
                  type: "inlineMath",
                  body: "X",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0785em;\">X</span></span></span></span>"
                },
                {
                  id: "text-481",
                  type: "text",
                  body: " is determined, with respect to this reference"
                },
                {
                  id: "text-482",
                  type: "text",
                  body: " "
                },
                {
                  id: "text-483",
                  type: "text",
                  body: "system, by a linear equation"
                }
              ]
            },
            {
              id: "displayMath-179",
              type: "displayMath",
              body: "p^i\\xi_i=\\mu_0,",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0691em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">p</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8747em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.046em;\">ξ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:-0.046em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">μ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-209",
              type: "paragraph",
              children: [
                {
                  id: "text-484",
                  type: "text",
                  body: "where "
                },
                {
                  id: "inlineMath-198",
                  type: "inlineMath",
                  body: "\\xi_1,\\ldots,\\xi_m,\\mu_0\\in\\mathbb R",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.046em;\">ξ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.046em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\">…</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.046em;\">ξ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:-0.046em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">m</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">μ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6889em;\"></span><span class=\"mord mathbb\">R</span></span></span></span>"
                },
                {
                  id: "text-485",
                  type: "text",
                  body: " and not all the"
                },
                {
                  id: "text-486",
                  type: "text",
                  body: " "
                },
                {
                  id: "text-487",
                  type: "text",
                  body: "coefficients "
                },
                {
                  id: "inlineMath-199",
                  type: "inlineMath",
                  body: "\\xi_i",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.046em;\">ξ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:-0.046em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                },
                {
                  id: "text-488",
                  type: "text",
                  body: " are zero."
                }
              ]
            },
            {
              id: "paragraph-210",
              type: "paragraph",
              children: [
                {
                  id: "text-489",
                  type: "text",
                  body: "Conversely, every equation of this form determines a hyperplane of"
                },
                {
                  id: "text-490",
                  type: "text",
                  body: " "
                },
                {
                  id: "inlineMath-200",
                  type: "inlineMath",
                  body: "X",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0785em;\">X</span></span></span></span>"
                },
                {
                  id: "text-491",
                  type: "text",
                  body: "."
                }
              ]
            }
          ],
          numbering: {
            path: [
              4,
              4
            ]
          }
        },
        {
          id: "proof-10",
          type: "proof",
          content: [
            {
              id: "paragraph-211",
              type: "paragraph",
              children: [
                {
                  id: "text-492",
                  type: "text",
                  body: "Let us first consider a hyperplane"
                }
              ]
            },
            {
              id: "displayMath-180",
              type: "displayMath",
              body: "S(x,U)=\\{\\mathbf u(x)\\mid \\mathbf u\\in U\\},",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">{</span><span class=\"mord mathbf\">u</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">}</span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-212",
              type: "paragraph",
              children: [
                {
                  id: "text-493",
                  type: "text",
                  body: "where "
                },
                {
                  id: "inlineMath-201",
                  type: "inlineMath",
                  body: "U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-494",
                  type: "text",
                  body: " is an "
                },
                {
                  id: "inlineMath-202",
                  type: "inlineMath",
                  body: "(m-1)",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">m</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\">1</span><span class=\"mclose\">)</span></span></span></span>"
                },
                {
                  id: "text-495",
                  type: "text",
                  body: "-dimensional linear subspace of "
                },
                {
                  id: "inlineMath-203",
                  type: "inlineMath",
                  body: "V",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                },
                {
                  id: "text-496",
                  type: "text",
                  body: "."
                }
              ]
            },
            {
              id: "paragraph-213",
              type: "paragraph",
              children: [
                {
                  id: "text-497",
                  type: "text",
                  body: "By the preceding proposition, there exists a nonzero functional"
                }
              ]
            },
            {
              id: "displayMath-181",
              type: "displayMath",
              body: "f:V\\longrightarrow\\mathbb R",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">:</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6943em;vertical-align:-0.011em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">⟶</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6889em;\"></span><span class=\"mord mathbb\">R</span></span></span></span></span>"
            },
            {
              id: "paragraph-214",
              type: "paragraph",
              children: [
                {
                  id: "text-498",
                  type: "text",
                  body: "such that"
                }
              ]
            },
            {
              id: "displayMath-182",
              type: "displayMath",
              body: "\\ker f=U.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mop\">ker</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-215",
              type: "paragraph",
              children: [
                {
                  id: "text-499",
                  type: "text",
                  body: "Define the set of coordinate tuples of the points of the hyperplane by"
                }
              ]
            },
            {
              id: "displayMath-183",
              type: "displayMath",
              body: "C:=c\\bigl(S(x,U)\\bigr)\n  =\\left\\{(p^i)\\in\\mathbb R^m\n    \\,\\middle|\\,\n    \\exists\\,y\\in S(x,U),\\ c(y)=(p^i)\n   \\right\\}.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0715em;\">C</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">:=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord mathnormal\">c</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2247em;vertical-align:-0.35em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size1\">{</span></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">p</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8747em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mord mathbb\">R</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7144em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">m</span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.85em;\"><span style=\"top:-2.85em;\"><span class=\"pstrut\" style=\"height:3.2em;\"></span><span style=\"width:0.333em;height:1.2em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.333em\" height=\"1.2em\" viewBox=\"0 0 333 1200\"><path d=\"M145 15 v585 v0 v585 c2.667,10,9.667,15,21,15\nc10,0,16.667,-5,20,-15 v-585 v0 v-585 c-2.667,-10,-9.667,-15,-21,-15\nc-10,0,-16.667,5,-20,15z M188 15 H145 v585 v0 v585 h43z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.35em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">∃</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span><span class=\"mspace\"> </span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\">c</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">p</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8747em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size1\">}</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-216",
              type: "paragraph",
              children: [
                {
                  id: "text-500",
                  type: "text",
                  body: "Because the action of "
                },
                {
                  id: "inlineMath-204",
                  type: "inlineMath",
                  body: "V",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                },
                {
                  id: "text-501",
                  type: "text",
                  body: " on "
                },
                {
                  id: "inlineMath-205",
                  type: "inlineMath",
                  body: "X",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0785em;\">X</span></span></span></span>"
                },
                {
                  id: "text-502",
                  type: "text",
                  body: " is transitive, there exists a unique"
                },
                {
                  id: "text-503",
                  type: "text",
                  body: " "
                },
                {
                  id: "text-504",
                  type: "text",
                  body: "vector "
                },
                {
                  id: "inlineMath-206",
                  type: "inlineMath",
                  body: "\\mathbf u_0\\in V",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6891em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathbf\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                },
                {
                  id: "text-505",
                  type: "text",
                  body: " such that"
                }
              ]
            },
            {
              id: "displayMath-184",
              type: "displayMath",
              body: "x=\\mathbf u_0(x_0).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">x</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathbf\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-217",
              type: "paragraph",
              children: [
                {
                  id: "text-506",
                  type: "text",
                  body: "We shall prove that"
                }
              ]
            },
            {
              id: "displayMath-185",
              type: "displayMath",
              body: "C=F,",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0715em;\">C</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8778em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-218",
              type: "paragraph",
              children: [
                {
                  id: "text-507",
                  type: "text",
                  body: "where"
                }
              ]
            },
            {
              id: "displayMath-186",
              type: "displayMath",
              body: "F:=\\left\\{(p^i)\\in\\mathbb R^m\n          \\,\\middle|\\,\n          p^i\\xi_i=\\mu_0\n   \\right\\}",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">:=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2247em;vertical-align:-0.35em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size1\">{</span></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">p</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8747em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mord mathbb\">R</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7144em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">m</span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.85em;\"><span style=\"top:-2.85em;\"><span class=\"pstrut\" style=\"height:3.2em;\"></span><span style=\"width:0.333em;height:1.2em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.333em\" height=\"1.2em\" viewBox=\"0 0 333 1200\"><path d=\"M145 15 v585 v0 v585 c2.667,10,9.667,15,21,15\nc10,0,16.667,-5,20,-15 v-585 v0 v-585 c-2.667,-10,-9.667,-15,-21,-15\nc-10,0,-16.667,5,-20,15z M188 15 H145 v585 v0 v585 h43z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.35em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">p</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8747em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.046em;\">ξ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:-0.046em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">μ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size1\">}</span></span></span></span></span></span></span>"
            },
            {
              id: "paragraph-219",
              type: "paragraph",
              children: [
                {
                  id: "text-508",
                  type: "text",
                  body: "for suitable coefficients "
                },
                {
                  id: "inlineMath-207",
                  type: "inlineMath",
                  body: "\\xi_i",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.046em;\">ξ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:-0.046em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                },
                {
                  id: "text-509",
                  type: "text",
                  body: " and "
                },
                {
                  id: "inlineMath-208",
                  type: "inlineMath",
                  body: "\\mu_0",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">μ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                },
                {
                  id: "text-510",
                  type: "text",
                  body: "."
                }
              ]
            },
            {
              id: "paragraph-220",
              type: "paragraph",
              children: [
                {
                  id: "text-511",
                  type: "text",
                  body: "Let "
                },
                {
                  id: "inlineMath-209",
                  type: "inlineMath",
                  body: "(p^i)\\in C",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0747em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">p</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8247em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0715em;\">C</span></span></span></span>"
                },
                {
                  id: "text-512",
                  type: "text",
                  body: ". Then there exists a point"
                }
              ]
            },
            {
              id: "displayMath-187",
              type: "displayMath",
              body: "y\\in S(x,U)",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span></span></span></span></span>"
            },
            {
              id: "paragraph-221",
              type: "paragraph",
              children: [
                {
                  id: "text-513",
                  type: "text",
                  body: "whose coordinates are "
                },
                {
                  id: "inlineMath-210",
                  type: "inlineMath",
                  body: "(p^i)",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0747em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">p</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8247em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span></span></span></span></span><span class=\"mclose\">)</span></span></span></span>"
                },
                {
                  id: "text-514",
                  type: "text",
                  body: ". Define its coordinate vector by"
                }
              ]
            },
            {
              id: "displayMath-188",
              type: "displayMath",
              body: "\\mathbf p:=p^i\\mathbf a_i.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6389em;vertical-align:-0.1944em;\"></span><span class=\"mord mathbf\">p</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">:=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0691em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">p</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8747em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord mathbf\">a</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-222",
              type: "paragraph",
              children: [
                {
                  id: "text-515",
                  type: "text",
                  body: "Thus"
                }
              ]
            },
            {
              id: "displayMath-189",
              type: "displayMath",
              body: "y=\\mathbf p(x_0).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">p</span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-223",
              type: "paragraph",
              children: [
                {
                  id: "text-516",
                  type: "text",
                  body: "Since "
                },
                {
                  id: "inlineMath-211",
                  type: "inlineMath",
                  body: "y\\in S(x,U)",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span></span></span></span>"
                },
                {
                  id: "text-517",
                  type: "text",
                  body: ", there exists a vector "
                },
                {
                  id: "inlineMath-212",
                  type: "inlineMath",
                  body: "\\mathbf u\\in U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-518",
                  type: "text",
                  body: " such that"
                }
              ]
            },
            {
              id: "displayMath-190",
              type: "displayMath",
              body: "y=\\mathbf u(x).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-224",
              type: "paragraph",
              children: [
                {
                  id: "text-519",
                  type: "text",
                  body: "Using "
                },
                {
                  id: "inlineMath-213",
                  type: "inlineMath",
                  body: "x=\\mathbf u_0(x_0)",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">x</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathbf\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span></span></span></span>"
                },
                {
                  id: "text-520",
                  type: "text",
                  body: ", we obtain"
                }
              ]
            },
            {
              id: "displayMath-191",
              type: "displayMath",
              body: "y\n =\\mathbf u\\bigl(\\mathbf u_0(x_0)\\bigr)\n =(\\mathbf u+\\mathbf u_0)(x_0).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord\"><span class=\"mord mathbf\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathbf\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-225",
              type: "paragraph",
              children: [
                {
                  id: "text-521",
                  type: "text",
                  body: "On the other hand,"
                }
              ]
            },
            {
              id: "displayMath-192",
              type: "displayMath",
              body: "y=\\mathbf p(x_0).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">p</span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-226",
              type: "paragraph",
              children: [
                {
                  id: "text-522",
                  type: "text",
                  body: "Since the action is free,"
                }
              ]
            },
            {
              id: "displayMath-193",
              type: "displayMath",
              body: "\\mathbf p=\\mathbf u+\\mathbf u_0,",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6389em;vertical-align:-0.1944em;\"></span><span class=\"mord mathbf\">p</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6389em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathbf\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-227",
              type: "paragraph",
              children: [
                {
                  id: "text-523",
                  type: "text",
                  body: "and therefore"
                }
              ]
            },
            {
              id: "displayMath-194",
              type: "displayMath",
              body: "\\mathbf u=\\mathbf p-\\mathbf u_0.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7778em;vertical-align:-0.1944em;\"></span><span class=\"mord mathbf\">p</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathbf\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-228",
              type: "paragraph",
              children: [
                {
                  id: "text-524",
                  type: "text",
                  body: "Because "
                },
                {
                  id: "inlineMath-214",
                  type: "inlineMath",
                  body: "\\mathbf u\\in U=\\ker f",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mop\">ker</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span></span></span></span>"
                },
                {
                  id: "text-525",
                  type: "text",
                  body: ","
                }
              ]
            },
            {
              id: "displayMath-195",
              type: "displayMath",
              body: "f(\\mathbf p-\\mathbf u_0)=0.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord mathbf\">p</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathbf\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">0.</span></span></span></span></span>"
            },
            {
              id: "paragraph-229",
              type: "paragraph",
              children: [
                {
                  id: "text-526",
                  type: "text",
                  body: "By the linearity of "
                },
                {
                  id: "inlineMath-215",
                  type: "inlineMath",
                  body: "f",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span></span></span></span>"
                },
                {
                  id: "text-527",
                  type: "text",
                  body: ","
                }
              ]
            },
            {
              id: "displayMath-196",
              type: "displayMath",
              body: "f(\\mathbf p)-f(\\mathbf u_0)=0.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord mathbf\">p</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathbf\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">0.</span></span></span></span></span>"
            },
            {
              id: "paragraph-230",
              type: "paragraph",
              children: [
                {
                  id: "text-528",
                  type: "text",
                  body: "Since "
                },
                {
                  id: "inlineMath-216",
                  type: "inlineMath",
                  body: "\\mathbf p=p^i\\mathbf a_i",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6389em;vertical-align:-0.1944em;\"></span><span class=\"mord mathbf\">p</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0191em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">p</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8247em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord mathbf\">a</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                },
                {
                  id: "text-529",
                  type: "text",
                  body: ", this becomes"
                }
              ]
            },
            {
              id: "displayMath-197",
              type: "displayMath",
              body: "p^if(\\mathbf a_i)-f(\\mathbf u_0)=0.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.1247em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">p</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8747em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span></span></span></span></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathbf\">a</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathbf\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">0.</span></span></span></span></span>"
            },
            {
              id: "paragraph-231",
              type: "paragraph",
              children: [
                {
                  id: "text-530",
                  type: "text",
                  body: "We now define"
                }
              ]
            },
            {
              id: "displayMath-198",
              type: "displayMath",
              body: "\\xi_i:=f(\\mathbf a_i),\n\\qquad\n\\mu_0:=f(\\mathbf u_0).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.046em;\">ξ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:-0.046em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">:=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathbf\">a</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">μ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">:=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathbf\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-232",
              type: "paragraph",
              children: [
                {
                  id: "text-531",
                  type: "text",
                  body: "It follows that"
                }
              ]
            },
            {
              id: "displayMath-199",
              type: "displayMath",
              body: "p^i\\xi_i=\\mu_0.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0691em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">p</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8747em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.046em;\">ξ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:-0.046em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">μ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-233",
              type: "paragraph",
              children: [
                {
                  id: "text-532",
                  type: "text",
                  body: "Therefore"
                }
              ]
            },
            {
              id: "displayMath-200",
              type: "displayMath",
              body: "(p^i)\\in F,",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.1247em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">p</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8747em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8778em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-234",
              type: "paragraph",
              children: [
                {
                  id: "text-533",
                  type: "text",
                  body: "and hence"
                }
              ]
            },
            {
              id: "displayMath-201",
              type: "displayMath",
              body: "C\\subseteq F.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8193em;vertical-align:-0.136em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0715em;\">C</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">⊆</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-235",
              type: "paragraph",
              children: [
                {
                  id: "text-534",
                  type: "text",
                  body: "Moreover, not all the coefficients "
                },
                {
                  id: "inlineMath-217",
                  type: "inlineMath",
                  body: "\\xi_i",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.046em;\">ξ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:-0.046em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                },
                {
                  id: "text-535",
                  type: "text",
                  body: " are zero. Indeed, if"
                }
              ]
            },
            {
              id: "displayMath-202",
              type: "displayMath",
              body: "\\xi_i=f(\\mathbf a_i)=0\n\\qquad\n\\text{for every }i,",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.046em;\">ξ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:-0.046em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathbf\">a</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord\">0</span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mord text\"><span class=\"mord\">for every </span></span><span class=\"mord mathnormal\">i</span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-236",
              type: "paragraph",
              children: [
                {
                  id: "text-536",
                  type: "text",
                  body: "then "
                },
                {
                  id: "inlineMath-218",
                  type: "inlineMath",
                  body: "f",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span></span></span></span>"
                },
                {
                  id: "text-537",
                  type: "text",
                  body: " would vanish on a basis of "
                },
                {
                  id: "inlineMath-219",
                  type: "inlineMath",
                  body: "V",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                },
                {
                  id: "text-538",
                  type: "text",
                  body: " and would therefore be the zero"
                },
                {
                  id: "text-539",
                  type: "text",
                  body: " "
                },
                {
                  id: "text-540",
                  type: "text",
                  body: "functional, contrary to the choice of "
                },
                {
                  id: "inlineMath-220",
                  type: "inlineMath",
                  body: "f",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span></span></span></span>"
                },
                {
                  id: "text-541",
                  type: "text",
                  body: "."
                }
              ]
            },
            {
              id: "paragraph-237",
              type: "paragraph",
              children: [
                {
                  id: "text-542",
                  type: "text",
                  body: "We now prove the reverse inclusion. Let"
                }
              ]
            },
            {
              id: "displayMath-203",
              type: "displayMath",
              body: "(p^i)\\in F",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.1247em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">p</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8747em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span></span></span></span></span>"
            },
            {
              id: "paragraph-238",
              type: "paragraph",
              children: [
                {
                  id: "text-543",
                  type: "text",
                  body: "and define"
                }
              ]
            },
            {
              id: "displayMath-204",
              type: "displayMath",
              body: "\\mathbf p:=p^i\\mathbf a_i,\n\\qquad\ny:=\\mathbf p(x_0).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6389em;vertical-align:-0.1944em;\"></span><span class=\"mord mathbf\">p</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">:=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0691em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">p</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8747em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord mathbf\">a</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">:=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">p</span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-239",
              type: "paragraph",
              children: [
                {
                  id: "text-544",
                  type: "text",
                  body: "Because "
                },
                {
                  id: "inlineMath-221",
                  type: "inlineMath",
                  body: "(p^i)\\in F",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0747em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">p</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8247em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span></span></span></span>"
                },
                {
                  id: "text-545",
                  type: "text",
                  body: ","
                }
              ]
            },
            {
              id: "displayMath-205",
              type: "displayMath",
              body: "p^i\\xi_i=\\mu_0.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0691em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">p</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8747em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.046em;\">ξ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:-0.046em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">μ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-240",
              type: "paragraph",
              children: [
                {
                  id: "text-546",
                  type: "text",
                  body: "Consequently,"
                }
              ]
            },
            {
              id: "displayMath-206",
              type: "displayMath",
              body: "f(\\mathbf p-\\mathbf u_0)\n =p^if(\\mathbf a_i)-f(\\mathbf u_0)\n =p^i\\xi_i-\\mu_0\n =0.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord mathbf\">p</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathbf\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.1247em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">p</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8747em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span></span></span></span></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathbf\">a</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathbf\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0691em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">p</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8747em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.046em;\">ξ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:-0.046em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">μ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">0.</span></span></span></span></span>"
            },
            {
              id: "paragraph-241",
              type: "paragraph",
              children: [
                {
                  id: "text-547",
                  type: "text",
                  body: "Thus"
                }
              ]
            },
            {
              id: "displayMath-207",
              type: "displayMath",
              body: "\\mathbf p-\\mathbf u_0\\in\\ker f=U.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7778em;vertical-align:-0.1944em;\"></span><span class=\"mord mathbf\">p</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6891em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathbf\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mop\">ker</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-242",
              type: "paragraph",
              children: [
                {
                  id: "text-548",
                  type: "text",
                  body: "Since "
                },
                {
                  id: "inlineMath-222",
                  type: "inlineMath",
                  body: "x=\\mathbf u_0(x_0)",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">x</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathbf\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span></span></span></span>"
                },
                {
                  id: "text-549",
                  type: "text",
                  body: ", we have"
                }
              ]
            },
            {
              id: "displayMath-208",
              type: "displayMath",
              body: "y\n =\\mathbf p(x_0)\n =(\\mathbf p-\\mathbf u_0)\\bigl(\\mathbf u_0(x_0)\\bigr)\n =(\\mathbf p-\\mathbf u_0)(x).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">p</span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathbf\">p</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord\"><span class=\"mord mathbf\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord\"><span class=\"mord mathbf\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathbf\">p</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathbf\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-243",
              type: "paragraph",
              children: [
                {
                  id: "text-550",
                  type: "text",
                  body: "Therefore"
                }
              ]
            },
            {
              id: "displayMath-209",
              type: "displayMath",
              body: "y\\in S(x,U),",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-244",
              type: "paragraph",
              children: [
                {
                  id: "text-551",
                  type: "text",
                  body: "and hence"
                }
              ]
            },
            {
              id: "displayMath-210",
              type: "displayMath",
              body: "(p^i)=c(y)\\in C.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.1247em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">p</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8747em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">c</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0715em;\">C</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-245",
              type: "paragraph",
              children: [
                {
                  id: "text-552",
                  type: "text",
                  body: "It follows that"
                }
              ]
            },
            {
              id: "displayMath-211",
              type: "displayMath",
              body: "F\\subseteq C.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8193em;vertical-align:-0.136em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">⊆</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0715em;\">C</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-246",
              type: "paragraph",
              children: [
                {
                  id: "text-553",
                  type: "text",
                  body: "We conclude that"
                }
              ]
            },
            {
              id: "displayMath-212",
              type: "displayMath",
              body: "C=F.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0715em;\">C</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-247",
              type: "paragraph",
              children: [
                {
                  id: "text-554",
                  type: "text",
                  body: "Thus every hyperplane is determined, in the chosen reference system,"
                },
                {
                  id: "text-555",
                  type: "text",
                  body: " "
                },
                {
                  id: "text-556",
                  type: "text",
                  body: "by one linear equation"
                }
              ]
            },
            {
              id: "displayMath-213",
              type: "displayMath",
              body: "p^i\\xi_i=\\mu_0,",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0691em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">p</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8747em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.046em;\">ξ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:-0.046em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">μ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-248",
              type: "paragraph",
              children: [
                {
                  id: "text-557",
                  type: "text",
                  body: "where not all the coefficients "
                },
                {
                  id: "inlineMath-223",
                  type: "inlineMath",
                  body: "\\xi_i",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.046em;\">ξ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:-0.046em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                },
                {
                  id: "text-558",
                  type: "text",
                  body: " are zero."
                }
              ]
            },
            {
              id: "paragraph-249",
              type: "paragraph",
              children: [
                {
                  id: "text-559",
                  type: "text",
                  body: "We now prove the converse. Consider the set"
                }
              ]
            },
            {
              id: "displayMath-214",
              type: "displayMath",
              body: "F:=\\left\\{(p^i)\\in\\mathbb R^m\n          \\,\\middle|\\,\n          p^i\\xi_i=\\mu_0\n   \\right\\},",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">:=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2247em;vertical-align:-0.35em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size1\">{</span></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">p</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8747em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mord mathbb\">R</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7144em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">m</span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.85em;\"><span style=\"top:-2.85em;\"><span class=\"pstrut\" style=\"height:3.2em;\"></span><span style=\"width:0.333em;height:1.2em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.333em\" height=\"1.2em\" viewBox=\"0 0 333 1200\"><path d=\"M145 15 v585 v0 v585 c2.667,10,9.667,15,21,15\nc10,0,16.667,-5,20,-15 v-585 v0 v-585 c-2.667,-10,-9.667,-15,-21,-15\nc-10,0,-16.667,5,-20,15z M188 15 H145 v585 v0 v585 h43z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.35em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">p</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8747em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.046em;\">ξ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:-0.046em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">μ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size1\">}</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-250",
              type: "paragraph",
              children: [
                {
                  id: "text-560",
                  type: "text",
                  body: "where not all the coefficients "
                },
                {
                  id: "inlineMath-224",
                  type: "inlineMath",
                  body: "\\xi_i",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.046em;\">ξ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:-0.046em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                },
                {
                  id: "text-561",
                  type: "text",
                  body: " are zero."
                }
              ]
            },
            {
              id: "paragraph-251",
              type: "paragraph",
              children: [
                {
                  id: "text-562",
                  type: "text",
                  body: "Define a functional"
                }
              ]
            },
            {
              id: "displayMath-215",
              type: "displayMath",
              body: "f:V\\longrightarrow\\mathbb R",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">:</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6943em;vertical-align:-0.011em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">⟶</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6889em;\"></span><span class=\"mord mathbb\">R</span></span></span></span></span>"
            },
            {
              id: "paragraph-252",
              type: "paragraph",
              children: [
                {
                  id: "text-563",
                  type: "text",
                  body: "by prescribing its values on the basis:"
                }
              ]
            },
            {
              id: "displayMath-216",
              type: "displayMath",
              body: "f(\\mathbf a_i):=\\xi_i.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathbf\">a</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">:=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.046em;\">ξ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:-0.046em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-253",
              type: "paragraph",
              children: [
                {
                  id: "text-564",
                  type: "text",
                  body: "Equivalently, if"
                }
              ]
            },
            {
              id: "displayMath-217",
              type: "displayMath",
              body: "\\mathbf p=p^i\\mathbf a_i,",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6389em;vertical-align:-0.1944em;\"></span><span class=\"mord mathbf\">p</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0691em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">p</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8747em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord mathbf\">a</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-254",
              type: "paragraph",
              children: [
                {
                  id: "text-565",
                  type: "text",
                  body: "then"
                }
              ]
            },
            {
              id: "displayMath-218",
              type: "displayMath",
              body: "f(\\mathbf p)=p^i\\xi_i.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord mathbf\">p</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0691em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">p</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8747em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.046em;\">ξ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:-0.046em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-255",
              type: "paragraph",
              children: [
                {
                  id: "text-566",
                  type: "text",
                  body: "Since not all the coefficients "
                },
                {
                  id: "inlineMath-225",
                  type: "inlineMath",
                  body: "\\xi_i",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.046em;\">ξ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:-0.046em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                },
                {
                  id: "text-567",
                  type: "text",
                  body: " are zero, the functional "
                },
                {
                  id: "inlineMath-226",
                  type: "inlineMath",
                  body: "f",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span></span></span></span>"
                },
                {
                  id: "text-568",
                  type: "text",
                  body: " is"
                },
                {
                  id: "text-569",
                  type: "text",
                  body: " "
                },
                {
                  id: "text-570",
                  type: "text",
                  body: "nonzero. Therefore"
                }
              ]
            },
            {
              id: "displayMath-219",
              type: "displayMath",
              body: "U:=\\ker f",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">:=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mop\">ker</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span></span></span></span></span>"
            },
            {
              id: "paragraph-256",
              type: "paragraph",
              children: [
                {
                  id: "text-571",
                  type: "text",
                  body: "is an "
                },
                {
                  id: "inlineMath-227",
                  type: "inlineMath",
                  body: "(m-1)",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">m</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\">1</span><span class=\"mclose\">)</span></span></span></span>"
                },
                {
                  id: "text-572",
                  type: "text",
                  body: "-dimensional linear subspace of "
                },
                {
                  id: "inlineMath-228",
                  type: "inlineMath",
                  body: "V",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                },
                {
                  id: "text-573",
                  type: "text",
                  body: "."
                }
              ]
            },
            {
              id: "paragraph-257",
              type: "paragraph",
              children: [
                {
                  id: "text-574",
                  type: "text",
                  body: "Choose a vector"
                }
              ]
            },
            {
              id: "displayMath-220",
              type: "displayMath",
              body: "\\mathbf m\\in V\\setminus U",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\">m</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">∖</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span></span>"
            },
            {
              id: "paragraph-258",
              type: "paragraph",
              children: [
                {
                  id: "text-575",
                  type: "text",
                  body: "and define the one-dimensional subspace"
                }
              ]
            },
            {
              id: "displayMath-221",
              type: "displayMath",
              body: "W:=\\operatorname{span}\\{\\mathbf m\\}.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">:=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mop\"><span class=\"mord mathrm\">span</span></span><span class=\"mopen\">{</span><span class=\"mord mathbf\">m</span><span class=\"mclose\">}</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-259",
              type: "paragraph",
              children: [
                {
                  id: "text-576",
                  type: "text",
                  body: "Since "
                },
                {
                  id: "inlineMath-229",
                  type: "inlineMath",
                  body: "\\mathbf m\\notin\\ker f",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">m</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\"><span class=\"mord\"><span class=\"mrel\">∈</span></span><span class=\"mord vbox\"><span class=\"thinbox\"><span class=\"llap\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"inner\"><span class=\"mord\"><span class=\"mord\">/</span><span class=\"mspace\" style=\"margin-right:0.0556em;\"></span></span></span><span class=\"fix\"></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mop\">ker</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span></span></span></span>"
                },
                {
                  id: "text-577",
                  type: "text",
                  body: ", the restriction"
                }
              ]
            },
            {
              id: "displayMath-222",
              type: "displayMath",
              body: "f|_W:W\\longrightarrow\\mathbb R",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mord\"><span class=\"mord\">∣</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3283em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.1389em;\">W</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">:</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6943em;vertical-align:-0.011em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">⟶</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6889em;\"></span><span class=\"mord mathbb\">R</span></span></span></span></span>"
            },
            {
              id: "paragraph-260",
              type: "paragraph",
              children: [
                {
                  id: "text-578",
                  type: "text",
                  body: "is nonzero. Because both "
                },
                {
                  id: "inlineMath-230",
                  type: "inlineMath",
                  body: "W",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span></span></span></span>"
                },
                {
                  id: "text-579",
                  type: "text",
                  body: " and "
                },
                {
                  id: "inlineMath-231",
                  type: "inlineMath",
                  body: "\\mathbb R",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6889em;\"></span><span class=\"mord mathbb\">R</span></span></span></span>"
                },
                {
                  id: "text-580",
                  type: "text",
                  body: " are one-dimensional,"
                },
                {
                  id: "text-581",
                  type: "text",
                  body: " "
                },
                {
                  id: "inlineMath-232",
                  type: "inlineMath",
                  body: "f|_W",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mord\"><span class=\"mord\">∣</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3283em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.1389em;\">W</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                },
                {
                  id: "text-582",
                  type: "text",
                  body: " is surjective. Hence there exists a vector"
                }
              ]
            },
            {
              id: "displayMath-223",
              type: "displayMath",
              body: "\\mathbf v_0\\in W",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6891em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span></span></span></span></span>"
            },
            {
              id: "paragraph-261",
              type: "paragraph",
              children: [
                {
                  id: "text-583",
                  type: "text",
                  body: "such that"
                }
              ]
            },
            {
              id: "displayMath-224",
              type: "displayMath",
              body: "f(\\mathbf v_0)=\\mu_0.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">μ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-262",
              type: "paragraph",
              children: [
                {
                  id: "text-584",
                  type: "text",
                  body: "Define the point"
                }
              ]
            },
            {
              id: "displayMath-225",
              type: "displayMath",
              body: "x:=\\mathbf v_0(x_0)",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">x</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">:=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span></span></span></span></span>"
            },
            {
              id: "paragraph-263",
              type: "paragraph",
              children: [
                {
                  id: "text-585",
                  type: "text",
                  body: "and consider the affine subspace"
                }
              ]
            },
            {
              id: "displayMath-226",
              type: "displayMath",
              body: "S(x,U).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-264",
              type: "paragraph",
              children: [
                {
                  id: "text-586",
                  type: "text",
                  body: "Since "
                },
                {
                  id: "inlineMath-233",
                  type: "inlineMath",
                  body: "\\dim U=m-1",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mop\">dim</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord mathnormal\">m</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">1</span></span></span></span>"
                },
                {
                  id: "text-587",
                  type: "text",
                  body: ", this affine subspace is a hyperplane."
                }
              ]
            },
            {
              id: "paragraph-265",
              type: "paragraph",
              children: [
                {
                  id: "text-588",
                  type: "text",
                  body: "Let"
                }
              ]
            },
            {
              id: "displayMath-227",
              type: "displayMath",
              body: "C:=c\\bigl(S(x,U)\\bigr).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0715em;\">C</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">:=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord mathnormal\">c</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-266",
              type: "paragraph",
              children: [
                {
                  id: "text-589",
                  type: "text",
                  body: "We shall prove that"
                }
              ]
            },
            {
              id: "displayMath-228",
              type: "displayMath",
              body: "C=F.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0715em;\">C</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-267",
              type: "paragraph",
              children: [
                {
                  id: "text-590",
                  type: "text",
                  body: "Let "
                },
                {
                  id: "inlineMath-234",
                  type: "inlineMath",
                  body: "(p^i)\\in C",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0747em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">p</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8247em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0715em;\">C</span></span></span></span>"
                },
                {
                  id: "text-591",
                  type: "text",
                  body: ". Then there exists a point"
                }
              ]
            },
            {
              id: "displayMath-229",
              type: "displayMath",
              body: "y\\in S(x,U)",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span></span></span></span></span>"
            },
            {
              id: "paragraph-268",
              type: "paragraph",
              children: [
                {
                  id: "text-592",
                  type: "text",
                  body: "with"
                }
              ]
            },
            {
              id: "displayMath-230",
              type: "displayMath",
              body: "c(y)=(p^i).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">c</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.1247em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">p</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8747em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-269",
              type: "paragraph",
              children: [
                {
                  id: "text-593",
                  type: "text",
                  body: "Define"
                }
              ]
            },
            {
              id: "displayMath-231",
              type: "displayMath",
              body: "\\mathbf p:=p^i\\mathbf a_i,",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6389em;vertical-align:-0.1944em;\"></span><span class=\"mord mathbf\">p</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">:=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0691em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">p</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8747em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord mathbf\">a</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-270",
              type: "paragraph",
              children: [
                {
                  id: "text-594",
                  type: "text",
                  body: "so that"
                }
              ]
            },
            {
              id: "displayMath-232",
              type: "displayMath",
              body: "y=\\mathbf p(x_0).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">p</span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-271",
              type: "paragraph",
              children: [
                {
                  id: "text-595",
                  type: "text",
                  body: "Since "
                },
                {
                  id: "inlineMath-235",
                  type: "inlineMath",
                  body: "y\\in S(x,U)",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span></span></span></span>"
                },
                {
                  id: "text-596",
                  type: "text",
                  body: ", there exists "
                },
                {
                  id: "inlineMath-236",
                  type: "inlineMath",
                  body: "\\mathbf u\\in U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-597",
                  type: "text",
                  body: " such that"
                }
              ]
            },
            {
              id: "displayMath-233",
              type: "displayMath",
              body: "y=\\mathbf u(x).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-272",
              type: "paragraph",
              children: [
                {
                  id: "text-598",
                  type: "text",
                  body: "Using "
                },
                {
                  id: "inlineMath-237",
                  type: "inlineMath",
                  body: "x=\\mathbf v_0(x_0)",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">x</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span></span></span></span>"
                },
                {
                  id: "text-599",
                  type: "text",
                  body: ", we obtain"
                }
              ]
            },
            {
              id: "displayMath-234",
              type: "displayMath",
              body: "y\n =\\mathbf u\\bigl(\\mathbf v_0(x_0)\\bigr)\n =(\\mathbf u+\\mathbf v_0)(x_0).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-273",
              type: "paragraph",
              children: [
                {
                  id: "text-600",
                  type: "text",
                  body: "Since also "
                },
                {
                  id: "inlineMath-238",
                  type: "inlineMath",
                  body: "y=\\mathbf p(x_0)",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">p</span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span></span></span></span>"
                },
                {
                  id: "text-601",
                  type: "text",
                  body: " and the action is free,"
                }
              ]
            },
            {
              id: "displayMath-235",
              type: "displayMath",
              body: "\\mathbf p=\\mathbf u+\\mathbf v_0.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6389em;vertical-align:-0.1944em;\"></span><span class=\"mord mathbf\">p</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-274",
              type: "paragraph",
              children: [
                {
                  id: "text-602",
                  type: "text",
                  body: "Therefore"
                }
              ]
            },
            {
              id: "displayMath-236",
              type: "displayMath",
              body: "f(\\mathbf p)\n =f(\\mathbf u)+f(\\mathbf v_0)\n =0+\\mu_0\n =\\mu_0.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord mathbf\">p</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord mathbf\">u</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7278em;vertical-align:-0.0833em;\"></span><span class=\"mord\">0</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">μ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">μ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-275",
              type: "paragraph",
              children: [
                {
                  id: "text-603",
                  type: "text",
                  body: "Since"
                }
              ]
            },
            {
              id: "displayMath-237",
              type: "displayMath",
              body: "f(\\mathbf p)=p^i\\xi_i,",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord mathbf\">p</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0691em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">p</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8747em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.046em;\">ξ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:-0.046em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-276",
              type: "paragraph",
              children: [
                {
                  id: "text-604",
                  type: "text",
                  body: "we obtain"
                }
              ]
            },
            {
              id: "displayMath-238",
              type: "displayMath",
              body: "p^i\\xi_i=\\mu_0.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0691em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">p</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8747em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.046em;\">ξ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:-0.046em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">μ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-277",
              type: "paragraph",
              children: [
                {
                  id: "text-605",
                  type: "text",
                  body: "Thus"
                }
              ]
            },
            {
              id: "displayMath-239",
              type: "displayMath",
              body: "(p^i)\\in F,",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.1247em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">p</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8747em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8778em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-278",
              type: "paragraph",
              children: [
                {
                  id: "text-606",
                  type: "text",
                  body: "and hence"
                }
              ]
            },
            {
              id: "displayMath-240",
              type: "displayMath",
              body: "C\\subseteq F.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8193em;vertical-align:-0.136em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0715em;\">C</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">⊆</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-279",
              type: "paragraph",
              children: [
                {
                  id: "text-607",
                  type: "text",
                  body: "Conversely, let"
                }
              ]
            },
            {
              id: "displayMath-241",
              type: "displayMath",
              body: "(p^i)\\in F",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.1247em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">p</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8747em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span></span></span></span></span>"
            },
            {
              id: "paragraph-280",
              type: "paragraph",
              children: [
                {
                  id: "text-608",
                  type: "text",
                  body: "and define"
                }
              ]
            },
            {
              id: "displayMath-242",
              type: "displayMath",
              body: "\\mathbf p:=p^i\\mathbf a_i,\n\\qquad\ny:=\\mathbf p(x_0).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6389em;vertical-align:-0.1944em;\"></span><span class=\"mord mathbf\">p</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">:=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0691em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">p</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8747em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord mathbf\">a</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">:=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">p</span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-281",
              type: "paragraph",
              children: [
                {
                  id: "text-609",
                  type: "text",
                  body: "Since "
                },
                {
                  id: "inlineMath-239",
                  type: "inlineMath",
                  body: "(p^i)\\in F",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0747em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">p</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8247em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span></span></span></span>"
                },
                {
                  id: "text-610",
                  type: "text",
                  body: ","
                }
              ]
            },
            {
              id: "displayMath-243",
              type: "displayMath",
              body: "p^i\\xi_i=\\mu_0.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0691em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">p</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8747em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.046em;\">ξ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:-0.046em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">μ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-282",
              type: "paragraph",
              children: [
                {
                  id: "text-611",
                  type: "text",
                  body: "It follows that"
                }
              ]
            },
            {
              id: "displayMath-244",
              type: "displayMath",
              body: "f(\\mathbf p-\\mathbf v_0)\n =f(\\mathbf p)-f(\\mathbf v_0)\n =p^i\\xi_i-\\mu_0\n =0.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord mathbf\">p</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord mathbf\">p</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0691em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">p</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8747em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.046em;\">ξ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:-0.046em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">μ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">0.</span></span></span></span></span>"
            },
            {
              id: "paragraph-283",
              type: "paragraph",
              children: [
                {
                  id: "text-612",
                  type: "text",
                  body: "Therefore"
                }
              ]
            },
            {
              id: "displayMath-245",
              type: "displayMath",
              body: "\\mathbf p-\\mathbf v_0\\in\\ker f=U.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7778em;vertical-align:-0.1944em;\"></span><span class=\"mord mathbf\">p</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6891em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mop\">ker</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-284",
              type: "paragraph",
              children: [
                {
                  id: "text-613",
                  type: "text",
                  body: "Using "
                },
                {
                  id: "inlineMath-240",
                  type: "inlineMath",
                  body: "x=\\mathbf v_0(x_0)",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">x</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span></span></span></span>"
                },
                {
                  id: "text-614",
                  type: "text",
                  body: ", we obtain"
                }
              ]
            },
            {
              id: "displayMath-246",
              type: "displayMath",
              body: "y\n =\\mathbf p(x_0)\n =(\\mathbf p-\\mathbf v_0)\\bigl(\\mathbf v_0(x_0)\\bigr)\n =(\\mathbf p-\\mathbf v_0)(x).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">p</span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathbf\">p</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathbf\">p</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-285",
              type: "paragraph",
              children: [
                {
                  id: "text-615",
                  type: "text",
                  body: "Hence"
                }
              ]
            },
            {
              id: "displayMath-247",
              type: "displayMath",
              body: "y\\in S(x,U),",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-286",
              type: "paragraph",
              children: [
                {
                  id: "text-616",
                  type: "text",
                  body: "so"
                }
              ]
            },
            {
              id: "displayMath-248",
              type: "displayMath",
              body: "(p^i)=c(y)\\in C.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.1247em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">p</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8747em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">c</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0715em;\">C</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-287",
              type: "paragraph",
              children: [
                {
                  id: "text-617",
                  type: "text",
                  body: "Therefore"
                }
              ]
            },
            {
              id: "displayMath-249",
              type: "displayMath",
              body: "F\\subseteq C.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8193em;vertical-align:-0.136em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">⊆</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0715em;\">C</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-288",
              type: "paragraph",
              children: [
                {
                  id: "text-618",
                  type: "text",
                  body: "We conclude that"
                }
              ]
            },
            {
              id: "displayMath-250",
              type: "displayMath",
              body: "C=F.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0715em;\">C</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-289",
              type: "paragraph",
              children: [
                {
                  id: "text-619",
                  type: "text",
                  body: "Thus the given linear equation determines the hyperplane "
                },
                {
                  id: "inlineMath-241",
                  type: "inlineMath",
                  body: "S(x,U)",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span></span></span></span>"
                },
                {
                  id: "text-620",
                  type: "text",
                  body: "."
                }
              ]
            }
          ]
        },
        {
          id: "definition-8",
          type: "definition",
          title: [
            {
              id: "text-621",
              type: "text",
              body: "Parallel affine subspaces"
            }
          ],
          content: [
            {
              id: "paragraph-290",
              type: "paragraph",
              children: [
                {
                  id: "text-622",
                  type: "text",
                  body: "Let"
                }
              ]
            },
            {
              id: "displayMath-251",
              type: "displayMath",
              body: "S(x,U)\n\\qquad\\text{and}\\qquad\nS(x',W)",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0519em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mord text\"><span class=\"mord\">and</span></span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mclose\">)</span></span></span></span></span>"
            },
            {
              id: "paragraph-291",
              type: "paragraph",
              children: [
                {
                  id: "text-623",
                  type: "text",
                  body: "be affine subspaces of "
                },
                {
                  id: "inlineMath-242",
                  type: "inlineMath",
                  body: "X",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0785em;\">X</span></span></span></span>"
                },
                {
                  id: "text-624",
                  type: "text",
                  body: ". They are said to be parallel if and only if"
                },
                {
                  id: "text-625",
                  type: "text",
                  body: " "
                },
                {
                  id: "text-626",
                  type: "text",
                  body: "they have the same direction space; that is,"
                }
              ]
            },
            {
              id: "displayMath-252",
              type: "displayMath",
              body: "S(x,U)\\parallel S(x',W)\n\\quad\\Longleftrightarrow\\quad\nU=W.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∥</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0519em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:1em;\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">⟺</span><span class=\"mspace\" style=\"margin-right:1em;\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mord\">.</span></span></span></span></span>"
            }
          ],
          numbering: {
            path: [
              4,
              5
            ]
          }
        },
        {
          id: "proposition-11",
          type: "proposition",
          content: [
            {
              id: "paragraph-292",
              type: "paragraph",
              children: [
                {
                  id: "text-627",
                  type: "text",
                  body: "Let "
                },
                {
                  id: "inlineMath-243",
                  type: "inlineMath",
                  body: "S(x,U)",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span></span></span></span>"
                },
                {
                  id: "text-628",
                  type: "text",
                  body: " be an affine subspace of "
                },
                {
                  id: "inlineMath-244",
                  type: "inlineMath",
                  body: "X",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0785em;\">X</span></span></span></span>"
                },
                {
                  id: "text-629",
                  type: "text",
                  body: ". For every"
                },
                {
                  id: "text-630",
                  type: "text",
                  body: " "
                },
                {
                  id: "inlineMath-245",
                  type: "inlineMath",
                  body: "\\mathbf v\\in V",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                },
                {
                  id: "text-631",
                  type: "text",
                  body: ","
                }
              ]
            },
            {
              id: "displayMath-253",
              type: "displayMath",
              body: "T_{\\mathbf v}\\bigl(S(x,U)\\bigr)\n=\nS\\bigl(\\mathbf v(x),U\\bigr).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1611em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathbf mtight\" style=\"margin-right:0.016em;\">v</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-293",
              type: "paragraph",
              children: [
                {
                  id: "text-632",
                  type: "text",
                  body: "Consequently, every translate of an affine subspace is parallel to the"
                },
                {
                  id: "text-633",
                  type: "text",
                  body: " "
                },
                {
                  id: "text-634",
                  type: "text",
                  body: "original affine subspace."
                }
              ]
            }
          ],
          numbering: {
            path: [
              4,
              6
            ]
          }
        },
        {
          id: "proof-11",
          type: "proof",
          content: [
            {
              id: "paragraph-294",
              type: "paragraph",
              children: [
                {
                  id: "text-635",
                  type: "text",
                  body: "By definition,"
                }
              ]
            },
            {
              id: "displayMath-254",
              type: "displayMath",
              body: "T_{\\mathbf v}\\bigl(S(x,U)\\bigr)\n=\n\\left\\{\ny\\in X\n\\;\\middle|\\;\ny=\\mathbf v\\bigl(\\mathbf u(x)\\bigr)\n\\text{ for some }\\mathbf u\\in U\n\\right\\}.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1611em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathbf mtight\" style=\"margin-right:0.016em;\">v</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size1\">{</span></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0785em;\">X</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.85em;\"><span style=\"top:-2.85em;\"><span class=\"pstrut\" style=\"height:3.2em;\"></span><span style=\"width:0.333em;height:1.2em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.333em\" height=\"1.2em\" viewBox=\"0 0 333 1200\"><path d=\"M145 15 v585 v0 v585 c2.667,10,9.667,15,21,15\nc10,0,16.667,-5,20,-15 v-585 v0 v-585 c-2.667,-10,-9.667,-15,-21,-15\nc-10,0,-16.667,5,-20,15z M188 15 H145 v585 v0 v585 h43z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.35em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathbf\">u</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mord text\"><span class=\"mord\"> for some </span></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size1\">}</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-295",
              type: "paragraph",
              children: [
                {
                  id: "text-636",
                  type: "text",
                  body: "Let"
                }
              ]
            },
            {
              id: "displayMath-255",
              type: "displayMath",
              body: "y\\in T_{\\mathbf v}\\bigl(S(x,U)\\bigr).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1611em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathbf mtight\" style=\"margin-right:0.016em;\">v</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-296",
              type: "paragraph",
              children: [
                {
                  id: "text-637",
                  type: "text",
                  body: "Then there exists "
                },
                {
                  id: "inlineMath-246",
                  type: "inlineMath",
                  body: "\\mathbf u\\in U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-638",
                  type: "text",
                  body: " such that"
                }
              ]
            },
            {
              id: "displayMath-256",
              type: "displayMath",
              body: "y=\\mathbf v\\bigl(\\mathbf u(x)\\bigr).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathbf\">u</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-297",
              type: "paragraph",
              children: [
                {
                  id: "text-639",
                  type: "text",
                  body: "Using the properties of the action of "
                },
                {
                  id: "inlineMath-247",
                  type: "inlineMath",
                  body: "V",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                },
                {
                  id: "text-640",
                  type: "text",
                  body: " on "
                },
                {
                  id: "inlineMath-248",
                  type: "inlineMath",
                  body: "X",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0785em;\">X</span></span></span></span>"
                },
                {
                  id: "text-641",
                  type: "text",
                  body: ", we obtain"
                }
              ]
            },
            {
              id: "displayMath-257",
              type: "displayMath",
              body: "y\n=\n(\\mathbf v+\\mathbf u)(x)\n=\n\\mathbf u\\bigl(\\mathbf v(x)\\bigr).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-298",
              type: "paragraph",
              children: [
                {
                  id: "text-642",
                  type: "text",
                  body: "Therefore"
                }
              ]
            },
            {
              id: "displayMath-258",
              type: "displayMath",
              body: "y\\in S\\bigl(\\mathbf v(x),U\\bigr),",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-299",
              type: "paragraph",
              children: [
                {
                  id: "text-643",
                  type: "text",
                  body: "and hence"
                }
              ]
            },
            {
              id: "displayMath-259",
              type: "displayMath",
              body: "T_{\\mathbf v}\\bigl(S(x,U)\\bigr)\n\\subseteq\nS\\bigl(\\mathbf v(x),U\\bigr).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1611em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathbf mtight\" style=\"margin-right:0.016em;\">v</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">⊆</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-300",
              type: "paragraph",
              children: [
                {
                  id: "text-644",
                  type: "text",
                  body: "Conversely, let"
                }
              ]
            },
            {
              id: "displayMath-260",
              type: "displayMath",
              body: "y\\in S\\bigl(\\mathbf v(x),U\\bigr).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-301",
              type: "paragraph",
              children: [
                {
                  id: "text-645",
                  type: "text",
                  body: "Then there exists "
                },
                {
                  id: "inlineMath-249",
                  type: "inlineMath",
                  body: "\\mathbf u\\in U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-646",
                  type: "text",
                  body: " such that"
                }
              ]
            },
            {
              id: "displayMath-261",
              type: "displayMath",
              body: "y=\\mathbf u\\bigl(\\mathbf v(x)\\bigr).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-302",
              type: "paragraph",
              children: [
                {
                  id: "text-647",
                  type: "text",
                  body: "Again using the properties of the action, we obtain"
                }
              ]
            },
            {
              id: "displayMath-262",
              type: "displayMath",
              body: "y\n=\n(\\mathbf u+\\mathbf v)(x)\n=\n\\mathbf v\\bigl(\\mathbf u(x)\\bigr).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathbf\">u</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-303",
              type: "paragraph",
              children: [
                {
                  id: "text-648",
                  type: "text",
                  body: "Since"
                }
              ]
            },
            {
              id: "displayMath-263",
              type: "displayMath",
              body: "\\mathbf u(x)\\in S(x,U),",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-304",
              type: "paragraph",
              children: [
                {
                  id: "text-649",
                  type: "text",
                  body: "it follows that"
                }
              ]
            },
            {
              id: "displayMath-264",
              type: "displayMath",
              body: "y\\in T_{\\mathbf v}\\bigl(S(x,U)\\bigr).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1611em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathbf mtight\" style=\"margin-right:0.016em;\">v</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-305",
              type: "paragraph",
              children: [
                {
                  id: "text-650",
                  type: "text",
                  body: "Therefore"
                }
              ]
            },
            {
              id: "displayMath-265",
              type: "displayMath",
              body: "S\\bigl(\\mathbf v(x),U\\bigr)\n\\subseteq\nT_{\\mathbf v}\\bigl(S(x,U)\\bigr).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">⊆</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1611em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathbf mtight\" style=\"margin-right:0.016em;\">v</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-306",
              type: "paragraph",
              children: [
                {
                  id: "text-651",
                  type: "text",
                  body: "We conclude that"
                }
              ]
            },
            {
              id: "displayMath-266",
              type: "displayMath",
              body: "T_{\\mathbf v}\\bigl(S(x,U)\\bigr)\n=\nS\\bigl(\\mathbf v(x),U\\bigr).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1611em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathbf mtight\" style=\"margin-right:0.016em;\">v</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-307",
              type: "paragraph",
              children: [
                {
                  id: "text-652",
                  type: "text",
                  body: "Since both affine subspaces have direction space "
                },
                {
                  id: "inlineMath-250",
                  type: "inlineMath",
                  body: "U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-653",
                  type: "text",
                  body: ","
                }
              ]
            },
            {
              id: "displayMath-267",
              type: "displayMath",
              body: "T_{\\mathbf v}\\bigl(S(x,U)\\bigr)\n\\parallel\nS(x,U).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1611em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathbf mtight\" style=\"margin-right:0.016em;\">v</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∥</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            }
          ]
        }
      ],
      subsections: [],
      numbering: {
        path: [
          4,
          0,
          0
        ]
      }
    }
  ]
} as const satisfies LatexDocumentNode;
