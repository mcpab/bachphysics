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
          body: "Parallelism in Affine Space"
        }
      ],
      intro: [
        {
          id: "definition-1",
          type: "definition",
          title: [
            {
              id: "text-2",
              type: "text",
              body: "Parallel affine subspaces"
            }
          ],
          content: [
            {
              id: "paragraph-1",
              type: "paragraph",
              children: [
                {
                  id: "text-3",
                  type: "text",
                  body: "Let"
                }
              ]
            },
            {
              id: "displayMath-1",
              type: "displayMath",
              body: "S(x,U)\n\\qquad\\text{and}\\qquad\nS(x',W)",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0519em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mord text\"><span class=\"mord\">and</span></span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mclose\">)</span></span></span></span></span>"
            },
            {
              id: "paragraph-2",
              type: "paragraph",
              children: [
                {
                  id: "text-4",
                  type: "text",
                  body: "be affine subspaces of "
                },
                {
                  id: "inlineMath-1",
                  type: "inlineMath",
                  body: "\\mathcal A",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathcal\">A</span></span></span></span>"
                },
                {
                  id: "text-5",
                  type: "text",
                  body: ". They are said to be parallel if and only if"
                },
                {
                  id: "text-6",
                  type: "text",
                  body: " "
                },
                {
                  id: "text-7",
                  type: "text",
                  body: "they have the same direction space; that is,"
                }
              ]
            },
            {
              id: "displayMath-2",
              type: "displayMath",
              body: "S(x,U)\\parallel S(x',W)\n\\quad\\Longleftrightarrow\\quad\nU=W.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∥</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0519em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:1em;\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">⟺</span><span class=\"mspace\" style=\"margin-right:1em;\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mord\">.</span></span></span></span></span>"
            }
          ],
          numbering: {
            path: [
              1,
              1
            ]
          }
        },
        {
          id: "proposition-1",
          type: "proposition",
          content: [
            {
              id: "paragraph-3",
              type: "paragraph",
              children: [
                {
                  id: "text-8",
                  type: "text",
                  body: "Let "
                },
                {
                  id: "inlineMath-2",
                  type: "inlineMath",
                  body: "S(x,U)",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span></span></span></span>"
                },
                {
                  id: "text-9",
                  type: "text",
                  body: " be an affine subspace of "
                },
                {
                  id: "inlineMath-3",
                  type: "inlineMath",
                  body: "\\mathcal A",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathcal\">A</span></span></span></span>"
                },
                {
                  id: "text-10",
                  type: "text",
                  body: ". For every"
                },
                {
                  id: "text-11",
                  type: "text",
                  body: " "
                },
                {
                  id: "inlineMath-4",
                  type: "inlineMath",
                  body: "\\mathbf v\\in V",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                },
                {
                  id: "text-12",
                  type: "text",
                  body: ","
                }
              ]
            },
            {
              id: "displayMath-3",
              type: "displayMath",
              body: "T_{\\mathbf v}\\bigl(S(x,U)\\bigr)\n=\nS\\bigl(\\mathbf v(x),U\\bigr).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1611em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathbf mtight\" style=\"margin-right:0.016em;\">v</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-4",
              type: "paragraph",
              children: [
                {
                  id: "text-13",
                  type: "text",
                  body: "Consequently, every translate of an affine subspace is parallel to the"
                },
                {
                  id: "text-14",
                  type: "text",
                  body: " "
                },
                {
                  id: "text-15",
                  type: "text",
                  body: "original affine subspace."
                }
              ]
            }
          ],
          numbering: {
            path: [
              1,
              2
            ]
          }
        },
        {
          id: "proof-1",
          type: "proof",
          content: [
            {
              id: "paragraph-5",
              type: "paragraph",
              children: [
                {
                  id: "text-16",
                  type: "text",
                  body: "By definition,"
                }
              ]
            },
            {
              id: "displayMath-4",
              type: "displayMath",
              body: "T_{\\mathbf v}\\bigl(S(x,U)\\bigr)\n=\n\\left\\{\ny\\in \\mathcal A\n\\;\\middle|\\;\ny=\\mathbf v\\bigl(\\mathbf u(x)\\bigr)\n\\text{ for some }\\mathbf u\\in U\n\\right\\}.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1611em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathbf mtight\" style=\"margin-right:0.016em;\">v</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size1\">{</span></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathcal\">A</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.85em;\"><span style=\"top:-2.85em;\"><span class=\"pstrut\" style=\"height:3.2em;\"></span><span style=\"width:0.333em;height:1.2em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.333em\" height=\"1.2em\" viewBox=\"0 0 333 1200\"><path d=\"M145 15 v585 v0 v585 c2.667,10,9.667,15,21,15\nc10,0,16.667,-5,20,-15 v-585 v0 v-585 c-2.667,-10,-9.667,-15,-21,-15\nc-10,0,-16.667,5,-20,15z M188 15 H145 v585 v0 v585 h43z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.35em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathbf\">u</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mord text\"><span class=\"mord\"> for some </span></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size1\">}</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-6",
              type: "paragraph",
              children: [
                {
                  id: "text-17",
                  type: "text",
                  body: "Let"
                }
              ]
            },
            {
              id: "displayMath-5",
              type: "displayMath",
              body: "y\\in T_{\\mathbf v}\\bigl(S(x,U)\\bigr).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1611em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathbf mtight\" style=\"margin-right:0.016em;\">v</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-7",
              type: "paragraph",
              children: [
                {
                  id: "text-18",
                  type: "text",
                  body: "Then there exists "
                },
                {
                  id: "inlineMath-5",
                  type: "inlineMath",
                  body: "\\mathbf u\\in U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-19",
                  type: "text",
                  body: " such that"
                }
              ]
            },
            {
              id: "displayMath-6",
              type: "displayMath",
              body: "y=\\mathbf v\\bigl(\\mathbf u(x)\\bigr).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathbf\">u</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-8",
              type: "paragraph",
              children: [
                {
                  id: "text-20",
                  type: "text",
                  body: "Using the properties of the action of "
                },
                {
                  id: "inlineMath-6",
                  type: "inlineMath",
                  body: "V",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                },
                {
                  id: "text-21",
                  type: "text",
                  body: " on "
                },
                {
                  id: "inlineMath-7",
                  type: "inlineMath",
                  body: "\\mathcal A",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathcal\">A</span></span></span></span>"
                },
                {
                  id: "text-22",
                  type: "text",
                  body: ", we obtain"
                }
              ]
            },
            {
              id: "displayMath-7",
              type: "displayMath",
              body: "y\n=\n(\\mathbf v+\\mathbf u)(x)\n=\n\\mathbf u\\bigl(\\mathbf v(x)\\bigr).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-9",
              type: "paragraph",
              children: [
                {
                  id: "text-23",
                  type: "text",
                  body: "Therefore"
                }
              ]
            },
            {
              id: "displayMath-8",
              type: "displayMath",
              body: "y\\in S\\bigl(\\mathbf v(x),U\\bigr),",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-10",
              type: "paragraph",
              children: [
                {
                  id: "text-24",
                  type: "text",
                  body: "and hence"
                }
              ]
            },
            {
              id: "displayMath-9",
              type: "displayMath",
              body: "T_{\\mathbf v}\\bigl(S(x,U)\\bigr)\n\\subseteq\nS\\bigl(\\mathbf v(x),U\\bigr).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1611em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathbf mtight\" style=\"margin-right:0.016em;\">v</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">⊆</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-11",
              type: "paragraph",
              children: [
                {
                  id: "text-25",
                  type: "text",
                  body: "Conversely, let"
                }
              ]
            },
            {
              id: "displayMath-10",
              type: "displayMath",
              body: "y\\in S\\bigl(\\mathbf v(x),U\\bigr).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-12",
              type: "paragraph",
              children: [
                {
                  id: "text-26",
                  type: "text",
                  body: "Then there exists "
                },
                {
                  id: "inlineMath-8",
                  type: "inlineMath",
                  body: "\\mathbf u\\in U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-27",
                  type: "text",
                  body: " such that"
                }
              ]
            },
            {
              id: "displayMath-11",
              type: "displayMath",
              body: "y=\\mathbf u\\bigl(\\mathbf v(x)\\bigr).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-13",
              type: "paragraph",
              children: [
                {
                  id: "text-28",
                  type: "text",
                  body: "Again using the properties of the action, we obtain"
                }
              ]
            },
            {
              id: "displayMath-12",
              type: "displayMath",
              body: "y\n=\n(\\mathbf u+\\mathbf v)(x)\n=\n\\mathbf v\\bigl(\\mathbf u(x)\\bigr).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathbf\">u</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-14",
              type: "paragraph",
              children: [
                {
                  id: "text-29",
                  type: "text",
                  body: "Since"
                }
              ]
            },
            {
              id: "displayMath-13",
              type: "displayMath",
              body: "\\mathbf u(x)\\in S(x,U),",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-15",
              type: "paragraph",
              children: [
                {
                  id: "text-30",
                  type: "text",
                  body: "it follows that"
                }
              ]
            },
            {
              id: "displayMath-14",
              type: "displayMath",
              body: "y\\in T_{\\mathbf v}\\bigl(S(x,U)\\bigr).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1611em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathbf mtight\" style=\"margin-right:0.016em;\">v</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-16",
              type: "paragraph",
              children: [
                {
                  id: "text-31",
                  type: "text",
                  body: "Therefore"
                }
              ]
            },
            {
              id: "displayMath-15",
              type: "displayMath",
              body: "S\\bigl(\\mathbf v(x),U\\bigr)\n\\subseteq\nT_{\\mathbf v}\\bigl(S(x,U)\\bigr).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">⊆</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1611em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathbf mtight\" style=\"margin-right:0.016em;\">v</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-17",
              type: "paragraph",
              children: [
                {
                  id: "text-32",
                  type: "text",
                  body: "We conclude that"
                }
              ]
            },
            {
              id: "displayMath-16",
              type: "displayMath",
              body: "T_{\\mathbf v}\\bigl(S(x,U)\\bigr)\n=\nS\\bigl(\\mathbf v(x),U\\bigr).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1611em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathbf mtight\" style=\"margin-right:0.016em;\">v</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-18",
              type: "paragraph",
              children: [
                {
                  id: "text-33",
                  type: "text",
                  body: "Since both affine subspaces have direction space "
                },
                {
                  id: "inlineMath-9",
                  type: "inlineMath",
                  body: "U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-34",
                  type: "text",
                  body: ","
                }
              ]
            },
            {
              id: "displayMath-17",
              type: "displayMath",
              body: "T_{\\mathbf v}\\bigl(S(x,U)\\bigr)\n\\parallel\nS(x,U).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1611em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathbf mtight\" style=\"margin-right:0.016em;\">v</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∥</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            }
          ]
        },
        {
          id: "proposition-2",
          type: "proposition",
          content: [
            {
              id: "paragraph-19",
              type: "paragraph",
              children: [
                {
                  id: "text-35",
                  type: "text",
                  body: "Let"
                }
              ]
            },
            {
              id: "displayMath-18",
              type: "displayMath",
              body: "S=S(x,U)\n\\qquad\\text{and}\\qquad\nS'=S(y,W)",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0519em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mord text\"><span class=\"mord\">and</span></span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mclose\">)</span></span></span></span></span>"
            },
            {
              id: "paragraph-20",
              type: "paragraph",
              children: [
                {
                  id: "text-36",
                  type: "text",
                  body: "be affine subspaces of "
                },
                {
                  id: "inlineMath-10",
                  type: "inlineMath",
                  body: "\\mathcal A",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathcal\">A</span></span></span></span>"
                },
                {
                  id: "text-37",
                  type: "text",
                  body: "."
                }
              ]
            },
            {
              id: "paragraph-21",
              type: "paragraph",
              children: [
                {
                  id: "text-38",
                  type: "text",
                  body: "If "
                },
                {
                  id: "inlineMath-11",
                  type: "inlineMath",
                  body: "S\\parallel S'",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∥</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
                },
                {
                  id: "text-39",
                  type: "text",
                  body: ", then either"
                }
              ]
            },
            {
              id: "displayMath-19",
              type: "displayMath",
              body: "S=S'",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8019em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span></span>"
            },
            {
              id: "paragraph-22",
              type: "paragraph",
              children: [
                {
                  id: "text-40",
                  type: "text",
                  body: "or"
                }
              ]
            },
            {
              id: "displayMath-20",
              type: "displayMath",
              body: "S\\cap S'=\\varnothing.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">∩</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8019em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6633em;vertical-align:-0.0817em;\"></span><span class=\"mord amsrm\">∅</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-23",
              type: "paragraph",
              children: [
                {
                  id: "text-41",
                  type: "text",
                  body: "Moreover, if "
                },
                {
                  id: "inlineMath-12",
                  type: "inlineMath",
                  body: "S",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span></span></span></span>"
                },
                {
                  id: "text-42",
                  type: "text",
                  body: " and "
                },
                {
                  id: "inlineMath-13",
                  type: "inlineMath",
                  body: "S'",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
                },
                {
                  id: "text-43",
                  type: "text",
                  body: " are hyperplanes, then"
                }
              ]
            },
            {
              id: "displayMath-21",
              type: "displayMath",
              body: "S\\parallel S'\n\\quad\\Longleftrightarrow\\quad\nS=S'\n\\ \\text{or}\\\nS\\cap S'=\\varnothing.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∥</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8259em;vertical-align:-0.024em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:1em;\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">⟺</span><span class=\"mspace\" style=\"margin-right:1em;\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8019em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\"> </span><span class=\"mord text\"><span class=\"mord\">or</span></span><span class=\"mspace\"> </span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">∩</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8019em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6633em;vertical-align:-0.0817em;\"></span><span class=\"mord amsrm\">∅</span><span class=\"mord\">.</span></span></span></span></span>"
            }
          ],
          numbering: {
            path: [
              1,
              3
            ]
          }
        },
        {
          id: "proof-2",
          type: "proof",
          content: [
            {
              id: "paragraph-24",
              type: "paragraph",
              children: [
                {
                  id: "text-44",
                  type: "text",
                  body: "Suppose first that "
                },
                {
                  id: "inlineMath-14",
                  type: "inlineMath",
                  body: "S\\parallel S'",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∥</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
                },
                {
                  id: "text-45",
                  type: "text",
                  body: ". By definition, their direction"
                },
                {
                  id: "text-46",
                  type: "text",
                  body: " "
                },
                {
                  id: "text-47",
                  type: "text",
                  body: "spaces coincide, so"
                }
              ]
            },
            {
              id: "displayMath-22",
              type: "displayMath",
              body: "U=W.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-25",
              type: "paragraph",
              children: [
                {
                  id: "text-48",
                  type: "text",
                  body: "Assume that"
                }
              ]
            },
            {
              id: "displayMath-23",
              type: "displayMath",
              body: "S\\cap S'\\neq\\varnothing,",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">∩</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.9963em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\"><span class=\"mrel\"><span class=\"mord vbox\"><span class=\"thinbox\"><span class=\"rlap\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"inner\"><span class=\"mord\"><span class=\"mrel\"></span></span></span><span class=\"fix\"></span></span></span></span></span><span class=\"mspace nobreak\"></span><span class=\"mrel\">=</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7761em;vertical-align:-0.1944em;\"></span><span class=\"mord amsrm\">∅</span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-26",
              type: "paragraph",
              children: [
                {
                  id: "text-49",
                  type: "text",
                  body: "and choose a point "
                },
                {
                  id: "inlineMath-15",
                  type: "inlineMath",
                  body: "z\\in S\\cap S'",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">∩</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
                },
                {
                  id: "text-50",
                  type: "text",
                  body: ". Since "
                },
                {
                  id: "inlineMath-16",
                  type: "inlineMath",
                  body: "z\\in S",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span></span></span></span>"
                },
                {
                  id: "text-51",
                  type: "text",
                  body: " and"
                },
                {
                  id: "text-52",
                  type: "text",
                  body: " "
                },
                {
                  id: "inlineMath-17",
                  type: "inlineMath",
                  body: "z\\in S'",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
                },
                {
                  id: "text-53",
                  type: "text",
                  body: ", there exist vectors "
                },
                {
                  id: "inlineMath-18",
                  type: "inlineMath",
                  body: "\\mathbf b,\\mathbf c\\in U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord mathbf\">b</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathbf\">c</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-54",
                  type: "text",
                  body: " such"
                },
                {
                  id: "text-55",
                  type: "text",
                  body: " "
                },
                {
                  id: "text-56",
                  type: "text",
                  body: "that"
                }
              ]
            },
            {
              id: "displayMath-24",
              type: "displayMath",
              body: "z=\\mathbf b(x)=\\mathbf c(y).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">b</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">c</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-27",
              type: "paragraph",
              children: [
                {
                  id: "text-57",
                  type: "text",
                  body: "It follows that"
                }
              ]
            },
            {
              id: "displayMath-25",
              type: "displayMath",
              body: "y=(-\\mathbf c)(z)\n  =(-\\mathbf c)\\bigl(\\mathbf b(x)\\bigr)\n  =(\\mathbf b-\\mathbf c)(x).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\">−</span><span class=\"mord mathbf\">c</span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mopen\">(</span><span class=\"mord\">−</span><span class=\"mord mathbf\">c</span><span class=\"mclose\">)</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathbf\">b</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathbf\">b</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">c</span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-28",
              type: "paragraph",
              children: [
                {
                  id: "text-58",
                  type: "text",
                  body: "Since "
                },
                {
                  id: "inlineMath-19",
                  type: "inlineMath",
                  body: "\\mathbf b-\\mathbf c\\in U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7778em;vertical-align:-0.0833em;\"></span><span class=\"mord mathbf\">b</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\">c</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-59",
                  type: "text",
                  body: ", we have "
                },
                {
                  id: "inlineMath-20",
                  type: "inlineMath",
                  body: "y\\in S",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span></span></span></span>"
                },
                {
                  id: "text-60",
                  type: "text",
                  body: "."
                }
              ]
            },
            {
              id: "paragraph-29",
              type: "paragraph",
              children: [
                {
                  id: "text-61",
                  type: "text",
                  body: "Now let "
                },
                {
                  id: "inlineMath-21",
                  type: "inlineMath",
                  body: "p\\in S'",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\">p</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
                },
                {
                  id: "text-62",
                  type: "text",
                  body: ". There exists "
                },
                {
                  id: "inlineMath-22",
                  type: "inlineMath",
                  body: "\\mathbf u\\in U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-63",
                  type: "text",
                  body: " such that"
                }
              ]
            },
            {
              id: "displayMath-26",
              type: "displayMath",
              body: "p=\\mathbf u(y).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\">p</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-30",
              type: "paragraph",
              children: [
                {
                  id: "text-64",
                  type: "text",
                  body: "Therefore,"
                }
              ]
            },
            {
              id: "displayMath-27",
              type: "displayMath",
              body: "p\n =\\mathbf u\\bigl((\\mathbf b-\\mathbf c)(x)\\bigr)\n =(\\mathbf u+\\mathbf b-\\mathbf c)(x).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\">p</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mopen\">(</span><span class=\"mord mathbf\">b</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord mathbf\">c</span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7778em;vertical-align:-0.0833em;\"></span><span class=\"mord mathbf\">b</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">c</span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-31",
              type: "paragraph",
              children: [
                {
                  id: "text-65",
                  type: "text",
                  body: "Because"
                }
              ]
            },
            {
              id: "displayMath-28",
              type: "displayMath",
              body: "\\mathbf u+\\mathbf b-\\mathbf c\\in U,",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord mathbf\">u</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7778em;vertical-align:-0.0833em;\"></span><span class=\"mord mathbf\">b</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\">c</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8778em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-32",
              type: "paragraph",
              children: [
                {
                  id: "text-66",
                  type: "text",
                  body: "we obtain "
                },
                {
                  id: "inlineMath-23",
                  type: "inlineMath",
                  body: "p\\in S",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\">p</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span></span></span></span>"
                },
                {
                  id: "text-67",
                  type: "text",
                  body: ". Hence"
                }
              ]
            },
            {
              id: "displayMath-29",
              type: "displayMath",
              body: "S'\\subseteq S.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.9379em;vertical-align:-0.136em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">⊆</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-33",
              type: "paragraph",
              children: [
                {
                  id: "text-68",
                  type: "text",
                  body: "Interchanging "
                },
                {
                  id: "inlineMath-24",
                  type: "inlineMath",
                  body: "S",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span></span></span></span>"
                },
                {
                  id: "text-69",
                  type: "text",
                  body: " and "
                },
                {
                  id: "inlineMath-25",
                  type: "inlineMath",
                  body: "S'",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
                },
                {
                  id: "text-70",
                  type: "text",
                  body: " gives"
                }
              ]
            },
            {
              id: "displayMath-30",
              type: "displayMath",
              body: "S\\subseteq S',",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8193em;vertical-align:-0.136em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">⊆</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.9963em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-34",
              type: "paragraph",
              children: [
                {
                  id: "text-71",
                  type: "text",
                  body: "and consequently"
                }
              ]
            },
            {
              id: "displayMath-31",
              type: "displayMath",
              body: "S=S'.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8019em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-35",
              type: "paragraph",
              children: [
                {
                  id: "text-72",
                  type: "text",
                  body: "Thus, if "
                },
                {
                  id: "inlineMath-26",
                  type: "inlineMath",
                  body: "S",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span></span></span></span>"
                },
                {
                  id: "text-73",
                  type: "text",
                  body: " and "
                },
                {
                  id: "inlineMath-27",
                  type: "inlineMath",
                  body: "S'",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
                },
                {
                  id: "text-74",
                  type: "text",
                  body: " are parallel, then either"
                }
              ]
            },
            {
              id: "displayMath-32",
              type: "displayMath",
              body: "S=S'",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8019em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span></span>"
            },
            {
              id: "paragraph-36",
              type: "paragraph",
              children: [
                {
                  id: "text-75",
                  type: "text",
                  body: "or"
                }
              ]
            },
            {
              id: "displayMath-33",
              type: "displayMath",
              body: "S\\cap S'=\\varnothing.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">∩</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8019em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6633em;vertical-align:-0.0817em;\"></span><span class=\"mord amsrm\">∅</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-37",
              type: "paragraph",
              children: [
                {
                  id: "text-76",
                  type: "text",
                  body: "We now assume that "
                },
                {
                  id: "inlineMath-28",
                  type: "inlineMath",
                  body: "S",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span></span></span></span>"
                },
                {
                  id: "text-77",
                  type: "text",
                  body: " and "
                },
                {
                  id: "inlineMath-29",
                  type: "inlineMath",
                  body: "S'",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
                },
                {
                  id: "text-78",
                  type: "text",
                  body: " are hyperplanes and prove the"
                },
                {
                  id: "text-79",
                  type: "text",
                  body: " "
                },
                {
                  id: "text-80",
                  type: "text",
                  body: "converse. If "
                },
                {
                  id: "inlineMath-30",
                  type: "inlineMath",
                  body: "S=S'",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
                },
                {
                  id: "text-81",
                  type: "text",
                  body: ", then their direction spaces are equal, and"
                },
                {
                  id: "text-82",
                  type: "text",
                  body: " "
                },
                {
                  id: "text-83",
                  type: "text",
                  body: "therefore "
                },
                {
                  id: "inlineMath-31",
                  type: "inlineMath",
                  body: "S\\parallel S'",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∥</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
                },
                {
                  id: "text-84",
                  type: "text",
                  body: "."
                }
              ]
            },
            {
              id: "paragraph-38",
              type: "paragraph",
              children: [
                {
                  id: "text-85",
                  type: "text",
                  body: "It remains to prove that"
                }
              ]
            },
            {
              id: "displayMath-34",
              type: "displayMath",
              body: "S\\cap S'=\\varnothing\n\\quad\\Longrightarrow\\quad\nS\\parallel S'.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">∩</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8019em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6633em;vertical-align:-0.0817em;\"></span><span class=\"mord amsrm\">∅</span><span class=\"mspace\" style=\"margin-right:1em;\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">⟹</span><span class=\"mspace\" style=\"margin-right:1em;\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∥</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8019em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-39",
              type: "paragraph",
              children: [
                {
                  id: "text-86",
                  type: "text",
                  body: "Equivalently, we prove the contrapositive"
                }
              ]
            },
            {
              id: "displayMath-35",
              type: "displayMath",
              body: "S\\not\\parallel S'\n\\quad\\Longrightarrow\\quad\nS\\cap S'\\neq\\varnothing.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\"><span class=\"mord vbox\"><span class=\"thinbox\"><span class=\"rlap\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"inner\"><span class=\"mord\"><span class=\"mrel\"></span></span></span><span class=\"fix\"></span></span></span></span></span><span class=\"mspace nobreak\"></span><span class=\"mrel\">∥</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8259em;vertical-align:-0.024em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:1em;\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">⟹</span><span class=\"mspace\" style=\"margin-right:1em;\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">∩</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.9963em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\"><span class=\"mrel\"><span class=\"mord vbox\"><span class=\"thinbox\"><span class=\"rlap\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"inner\"><span class=\"mord\"><span class=\"mrel\"></span></span></span><span class=\"fix\"></span></span></span></span></span><span class=\"mspace nobreak\"></span><span class=\"mrel\">=</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6633em;vertical-align:-0.0817em;\"></span><span class=\"mord amsrm\">∅</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-40",
              type: "paragraph",
              children: [
                {
                  id: "text-87",
                  type: "text",
                  body: "Suppose, therefore, that "
                },
                {
                  id: "inlineMath-32",
                  type: "inlineMath",
                  body: "S\\not\\parallel S'",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\"><span class=\"mord vbox\"><span class=\"thinbox\"><span class=\"rlap\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"inner\"><span class=\"mord\"><span class=\"mrel\"></span></span></span><span class=\"fix\"></span></span></span></span></span><span class=\"mspace nobreak\"></span><span class=\"mrel\">∥</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
                },
                {
                  id: "text-88",
                  type: "text",
                  body: ". Then"
                }
              ]
            },
            {
              id: "displayMath-36",
              type: "displayMath",
              body: "U\\neq W.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\"><span class=\"mrel\"><span class=\"mord vbox\"><span class=\"thinbox\"><span class=\"rlap\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"inner\"><span class=\"mord\"><span class=\"mrel\"></span></span></span><span class=\"fix\"></span></span></span></span></span><span class=\"mspace nobreak\"></span><span class=\"mrel\">=</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-41",
              type: "paragraph",
              children: [
                {
                  id: "text-89",
                  type: "text",
                  body: "Since "
                },
                {
                  id: "inlineMath-33",
                  type: "inlineMath",
                  body: "U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-90",
                  type: "text",
                  body: " and "
                },
                {
                  id: "inlineMath-34",
                  type: "inlineMath",
                  body: "W",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span></span></span></span>"
                },
                {
                  id: "text-91",
                  type: "text",
                  body: " are distinct "
                },
                {
                  id: "inlineMath-35",
                  type: "inlineMath",
                  body: "(n-1)",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">n</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\">1</span><span class=\"mclose\">)</span></span></span></span>"
                },
                {
                  id: "text-92",
                  type: "text",
                  body: "-dimensional linear"
                },
                {
                  id: "text-93",
                  type: "text",
                  body: " "
                },
                {
                  id: "text-94",
                  type: "text",
                  body: "subspaces of "
                },
                {
                  id: "inlineMath-36",
                  type: "inlineMath",
                  body: "V",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                },
                {
                  id: "text-95",
                  type: "text",
                  body: ", we have"
                }
              ]
            },
            {
              id: "displayMath-37",
              type: "displayMath",
              body: "U+W=V.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7667em;vertical-align:-0.0833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-42",
              type: "paragraph",
              children: [
                {
                  id: "text-96",
                  type: "text",
                  body: "Let"
                }
              ]
            },
            {
              id: "displayMath-38",
              type: "displayMath",
              body: "\\mathbf d=\\overrightarrow{xy}.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathbf\">d</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.147em;vertical-align:-0.1944em;\"></span><span class=\"mord accent\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9526em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span></span></span><span class=\"svg-align\" style=\"top:-3.4306em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"hide-tail\" style=\"height:0.522em;min-width:0.888em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400em\" height=\"0.522em\" viewBox=\"0 0 400000 522\" preserveAspectRatio=\"xMaxYMin slice\"><path d=\"M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1944em;\"><span></span></span></span></span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-43",
              type: "paragraph",
              children: [
                {
                  id: "text-97",
                  type: "text",
                  body: "Since "
                },
                {
                  id: "inlineMath-37",
                  type: "inlineMath",
                  body: "\\mathbf d\\in V=U+W",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\">d</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7667em;vertical-align:-0.0833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span></span></span></span>"
                },
                {
                  id: "text-98",
                  type: "text",
                  body: ", there exist"
                }
              ]
            },
            {
              id: "displayMath-39",
              type: "displayMath",
              body: "\\mathbf b\\in U\n\\qquad\\text{and}\\qquad\n\\mathbf c\\in W",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\">b</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.0391em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mord text\"><span class=\"mord\">and</span></span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mord mathbf\">c</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span></span></span></span></span>"
            },
            {
              id: "paragraph-44",
              type: "paragraph",
              children: [
                {
                  id: "text-99",
                  type: "text",
                  body: "such that"
                }
              ]
            },
            {
              id: "displayMath-40",
              type: "displayMath",
              body: "\\mathbf d=\\mathbf b+\\mathbf c.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathbf\">d</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7778em;vertical-align:-0.0833em;\"></span><span class=\"mord mathbf\">b</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord mathbf\">c</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-45",
              type: "paragraph",
              children: [
                {
                  id: "text-100",
                  type: "text",
                  body: "Consequently,"
                }
              ]
            },
            {
              id: "displayMath-41",
              type: "displayMath",
              body: "y=\\mathbf d(x)=(\\mathbf b+\\mathbf c)(x),",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">d</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathbf\">b</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">c</span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-46",
              type: "paragraph",
              children: [
                {
                  id: "text-101",
                  type: "text",
                  body: "and hence"
                }
              ]
            },
            {
              id: "displayMath-42",
              type: "displayMath",
              body: "(-\\mathbf c)(y)=\\mathbf b(x).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\">−</span><span class=\"mord mathbf\">c</span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">b</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-47",
              type: "paragraph",
              children: [
                {
                  id: "text-102",
                  type: "text",
                  body: "The point "
                },
                {
                  id: "inlineMath-38",
                  type: "inlineMath",
                  body: "\\mathbf b(x)",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">b</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span></span></span></span>"
                },
                {
                  id: "text-103",
                  type: "text",
                  body: " belongs to "
                },
                {
                  id: "inlineMath-39",
                  type: "inlineMath",
                  body: "S",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span></span></span></span>"
                },
                {
                  id: "text-104",
                  type: "text",
                  body: ", since "
                },
                {
                  id: "inlineMath-40",
                  type: "inlineMath",
                  body: "\\mathbf b\\in U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.0391em;\"></span><span class=\"mord mathbf\">b</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-105",
                  type: "text",
                  body: ","
                },
                {
                  id: "text-106",
                  type: "text",
                  body: " "
                },
                {
                  id: "text-107",
                  type: "text",
                  body: "while the same point, written as "
                },
                {
                  id: "inlineMath-41",
                  type: "inlineMath",
                  body: "(-\\mathbf c)(y)",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\">−</span><span class=\"mord mathbf\">c</span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span></span></span></span>"
                },
                {
                  id: "text-108",
                  type: "text",
                  body: ", belongs to"
                },
                {
                  id: "text-109",
                  type: "text",
                  body: " "
                },
                {
                  id: "inlineMath-42",
                  type: "inlineMath",
                  body: "S'",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
                },
                {
                  id: "text-110",
                  type: "text",
                  body: ", since "
                },
                {
                  id: "inlineMath-43",
                  type: "inlineMath",
                  body: "-\\mathbf c\\in W",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord\">−</span><span class=\"mord mathbf\">c</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">W</span></span></span></span>"
                },
                {
                  id: "text-111",
                  type: "text",
                  body: ". Therefore,"
                }
              ]
            },
            {
              id: "displayMath-43",
              type: "displayMath",
              body: "S\\cap S'\\neq\\varnothing.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">∩</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.9963em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\"><span class=\"mrel\"><span class=\"mord vbox\"><span class=\"thinbox\"><span class=\"rlap\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"inner\"><span class=\"mord\"><span class=\"mrel\"></span></span></span><span class=\"fix\"></span></span></span></span></span><span class=\"mspace nobreak\"></span><span class=\"mrel\">=</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6633em;vertical-align:-0.0817em;\"></span><span class=\"mord amsrm\">∅</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-48",
              type: "paragraph",
              children: [
                {
                  id: "text-112",
                  type: "text",
                  body: "This proves the contrapositive and hence"
                }
              ]
            },
            {
              id: "displayMath-44",
              type: "displayMath",
              body: "S\\cap S'=\\varnothing\n\\quad\\Longrightarrow\\quad\nS\\parallel S'.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">∩</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8019em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6633em;vertical-align:-0.0817em;\"></span><span class=\"mord amsrm\">∅</span><span class=\"mspace\" style=\"margin-right:1em;\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">⟹</span><span class=\"mspace\" style=\"margin-right:1em;\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∥</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8019em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-49",
              type: "paragraph",
              children: [
                {
                  id: "text-113",
                  type: "text",
                  body: "The proof is complete."
                }
              ]
            }
          ]
        },
        {
          id: "proposition-3",
          type: "proposition",
          title: [
            {
              id: "text-114",
              type: "text",
              body: "The fifth parallel axiom"
            }
          ],
          content: [
            {
              id: "paragraph-50",
              type: "paragraph",
              children: [
                {
                  id: "text-115",
                  type: "text",
                  body: "Let "
                },
                {
                  id: "inlineMath-44",
                  type: "inlineMath",
                  body: "S",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span></span></span></span>"
                },
                {
                  id: "text-116",
                  type: "text",
                  body: " be a "
                },
                {
                  id: "inlineMath-45",
                  type: "inlineMath",
                  body: "r",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">r</span></span></span></span>"
                },
                {
                  id: "text-117",
                  type: "text",
                  body: "-dimensional affine subspace of "
                },
                {
                  id: "inlineMath-46",
                  type: "inlineMath",
                  body: "\\mathcal A",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathcal\">A</span></span></span></span>"
                },
                {
                  id: "text-118",
                  type: "text",
                  body: ", and let"
                },
                {
                  id: "text-119",
                  type: "text",
                  body: " "
                },
                {
                  id: "inlineMath-47",
                  type: "inlineMath",
                  body: "x\\in \\mathcal A",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathnormal\">x</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathcal\">A</span></span></span></span>"
                },
                {
                  id: "text-120",
                  type: "text",
                  body: ". Then there exists one and only one "
                },
                {
                  id: "inlineMath-48",
                  type: "inlineMath",
                  body: "r",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">r</span></span></span></span>"
                },
                {
                  id: "text-121",
                  type: "text",
                  body: "-dimensional"
                },
                {
                  id: "text-122",
                  type: "text",
                  body: " "
                },
                {
                  id: "text-123",
                  type: "text",
                  body: "affine subspace "
                },
                {
                  id: "inlineMath-49",
                  type: "inlineMath",
                  body: "S'",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
                },
                {
                  id: "text-124",
                  type: "text",
                  body: " of "
                },
                {
                  id: "inlineMath-50",
                  type: "inlineMath",
                  body: "\\mathcal A",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathcal\">A</span></span></span></span>"
                },
                {
                  id: "text-125",
                  type: "text",
                  body: " which contains "
                },
                {
                  id: "inlineMath-51",
                  type: "inlineMath",
                  body: "x",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">x</span></span></span></span>"
                },
                {
                  id: "text-126",
                  type: "text",
                  body: " and is parallel"
                },
                {
                  id: "text-127",
                  type: "text",
                  body: " "
                },
                {
                  id: "text-128",
                  type: "text",
                  body: "to "
                },
                {
                  id: "inlineMath-52",
                  type: "inlineMath",
                  body: "S",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span></span></span></span>"
                },
                {
                  id: "text-129",
                  type: "text",
                  body: "."
                }
              ]
            }
          ],
          numbering: {
            path: [
              1,
              4
            ]
          }
        },
        {
          id: "proof-3",
          type: "proof",
          content: [
            {
              id: "paragraph-51",
              type: "paragraph",
              children: [
                {
                  id: "text-130",
                  type: "text",
                  body: "Let"
                }
              ]
            },
            {
              id: "displayMath-45",
              type: "displayMath",
              body: "S=S(y,U),",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-52",
              type: "paragraph",
              children: [
                {
                  id: "text-131",
                  type: "text",
                  body: "where "
                },
                {
                  id: "inlineMath-53",
                  type: "inlineMath",
                  body: "U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-132",
                  type: "text",
                  body: " is a "
                },
                {
                  id: "inlineMath-54",
                  type: "inlineMath",
                  body: "r",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">r</span></span></span></span>"
                },
                {
                  id: "text-133",
                  type: "text",
                  body: "-dimensional linear subspace of "
                },
                {
                  id: "inlineMath-55",
                  type: "inlineMath",
                  body: "V",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                },
                {
                  id: "text-134",
                  type: "text",
                  body: ". Define"
                }
              ]
            },
            {
              id: "displayMath-46",
              type: "displayMath",
              body: "\\mathbf d=\\overrightarrow{yx}.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathbf\">d</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.147em;vertical-align:-0.1944em;\"></span><span class=\"mord accent\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9526em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mord mathnormal\">x</span></span></span><span class=\"svg-align\" style=\"top:-3.4306em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"hide-tail\" style=\"height:0.522em;min-width:0.888em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400em\" height=\"0.522em\" viewBox=\"0 0 400000 522\" preserveAspectRatio=\"xMaxYMin slice\"><path d=\"M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1944em;\"><span></span></span></span></span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-53",
              type: "paragraph",
              children: [
                {
                  id: "text-135",
                  type: "text",
                  body: "Then"
                }
              ]
            },
            {
              id: "displayMath-47",
              type: "displayMath",
              body: "T_{\\mathbf d}(y)=x.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3361em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathbf mtight\">d</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">x</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-54",
              type: "paragraph",
              children: [
                {
                  id: "text-136",
                  type: "text",
                  body: "We therefore define"
                }
              ]
            },
            {
              id: "displayMath-48",
              type: "displayMath",
              body: "S'\n   =S\\bigl(T_{\\mathbf d}(y),U\\bigr)\n   =S(x,U).",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8019em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3361em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathbf mtight\">d</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-55",
              type: "paragraph",
              children: [
                {
                  id: "text-137",
                  type: "text",
                  body: "It follows immediately that"
                }
              ]
            },
            {
              id: "displayMath-49",
              type: "displayMath",
              body: "x\\in S'\n\\qquad\\text{and}\\qquad\nS'\\parallel S,",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathnormal\">x</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0519em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mord text\"><span class=\"mord\">and</span></span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∥</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8778em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mpunct\">,</span></span></span></span></span>"
            },
            {
              id: "paragraph-56",
              type: "paragraph",
              children: [
                {
                  id: "text-138",
                  type: "text",
                  body: "since "
                },
                {
                  id: "inlineMath-56",
                  type: "inlineMath",
                  body: "S",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span></span></span></span>"
                },
                {
                  id: "text-139",
                  type: "text",
                  body: " and "
                },
                {
                  id: "inlineMath-57",
                  type: "inlineMath",
                  body: "S'",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
                },
                {
                  id: "text-140",
                  type: "text",
                  body: " have the same direction space "
                },
                {
                  id: "inlineMath-58",
                  type: "inlineMath",
                  body: "U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-141",
                  type: "text",
                  body: ". Moreover,"
                }
              ]
            },
            {
              id: "displayMath-50",
              type: "displayMath",
              body: "\\dim S'=\\dim U=r.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8019em;\"></span><span class=\"mop\">dim</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mop\">dim</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">r</span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-57",
              type: "paragraph",
              children: [
                {
                  id: "text-142",
                  type: "text",
                  body: "This proves existence."
                }
              ]
            },
            {
              id: "paragraph-58",
              type: "paragraph",
              children: [
                {
                  id: "text-143",
                  type: "text",
                  body: "To prove uniqueness, let "
                },
                {
                  id: "inlineMath-59",
                  type: "inlineMath",
                  body: "S''",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′′</span></span></span></span></span></span></span></span></span></span></span></span>"
                },
                {
                  id: "text-144",
                  type: "text",
                  body: " be a "
                },
                {
                  id: "inlineMath-60",
                  type: "inlineMath",
                  body: "r",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">r</span></span></span></span>"
                },
                {
                  id: "text-145",
                  type: "text",
                  body: "-dimensional affine"
                },
                {
                  id: "text-146",
                  type: "text",
                  body: " "
                },
                {
                  id: "text-147",
                  type: "text",
                  body: "subspace containing "
                },
                {
                  id: "inlineMath-61",
                  type: "inlineMath",
                  body: "x",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">x</span></span></span></span>"
                },
                {
                  id: "text-148",
                  type: "text",
                  body: " and parallel to "
                },
                {
                  id: "inlineMath-62",
                  type: "inlineMath",
                  body: "S",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span></span></span></span>"
                },
                {
                  id: "text-149",
                  type: "text",
                  body: ". Since "
                },
                {
                  id: "inlineMath-63",
                  type: "inlineMath",
                  body: "S''\\parallel\nS",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0019em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∥</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span></span></span></span>"
                },
                {
                  id: "text-150",
                  type: "text",
                  body: ", its direction space is "
                },
                {
                  id: "inlineMath-64",
                  type: "inlineMath",
                  body: "U",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span></span></span></span>"
                },
                {
                  id: "text-151",
                  type: "text",
                  body: ". Since "
                },
                {
                  id: "inlineMath-65",
                  type: "inlineMath",
                  body: "x\\in S''",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathnormal\">x</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′′</span></span></span></span></span></span></span></span></span></span></span></span>"
                },
                {
                  id: "text-152",
                  type: "text",
                  body: ", we may take"
                },
                {
                  id: "text-153",
                  type: "text",
                  body: " "
                },
                {
                  id: "inlineMath-66",
                  type: "inlineMath",
                  body: "x",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">x</span></span></span></span>"
                },
                {
                  id: "text-154",
                  type: "text",
                  body: " as its reference point, and therefore"
                }
              ]
            },
            {
              id: "displayMath-51",
              type: "displayMath",
              body: "S''=S(x,U)=S'.",
              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8019em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">U</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8019em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mord\">.</span></span></span></span></span>"
            },
            {
              id: "paragraph-59",
              type: "paragraph",
              children: [
                {
                  id: "text-155",
                  type: "text",
                  body: "Hence "
                },
                {
                  id: "inlineMath-67",
                  type: "inlineMath",
                  body: "S'",
                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
                },
                {
                  id: "text-156",
                  type: "text",
                  body: " is unique."
                }
              ]
            }
          ]
        }
      ],
      subsections: [],
      numbering: {
        path: [
          1,
          0,
          0
        ]
      }
    }
  ]
} as const satisfies LatexDocumentNode;
