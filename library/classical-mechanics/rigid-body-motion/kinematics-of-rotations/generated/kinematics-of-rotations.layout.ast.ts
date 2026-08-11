import type { LatexNodeMap } from "@mcpab/katex";

export const latexDocument = {
  id: "document-1",
  type: "document",
  intro: [],
  sections: [
    {
      id: "section-1",
      type: "section",
      title: {
        id: "layoutInlineGroup-1",
        type: "layoutInlineGroup",
        children: [
          {
            id: "text-1",
            type: "text",
            body: "Introduction"
          }
        ]
      },
      intro: [
        {
          id: "contentLayoutGroup-1",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-2",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-2",
                type: "text",
                body: "In this essay we will explore the kinematics of rotations. A more general discussion of"
              },
              {
                id: "text-3",
                type: "text",
                body: "the possible motions of a rigid body will be left to a future essay. Here we will cover"
              },
              {
                id: "text-4",
                type: "text",
                body: "the following topics:"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-2",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-1",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "itemize-1",
                type: "itemize",
                items: [
                  {
                    id: "item-1",
                    type: "item",
                    content: [
                      {
                        id: "contentLayoutGroup-3",
                        type: "contentLayoutGroup",
                        children: {
                          id: "layoutInlineGroup-3",
                          type: "layoutInlineGroup",
                          children: [
                            {
                              body: "Basic Properties of Orthogonal Transformations:",
                              id: "textbf-1",
                              type: "textbf"
                            },
                            {
                              id: "text-5",
                              type: "text",
                              body: "We will review the properties of orthogonal transformations, which preserve distances"
                            },
                            {
                              id: "text-6",
                              type: "text",
                              body: "while leaving the origin fixed and therefore provide the natural mathematical description"
                            },
                            {
                              id: "text-7",
                              type: "text",
                              body: "of rigid rotations."
                            }
                          ]
                        }
                      }
                    ]
                  },
                  {
                    id: "item-2",
                    type: "item",
                    content: [
                      {
                        id: "contentLayoutGroup-4",
                        type: "contentLayoutGroup",
                        children: {
                          id: "layoutInlineGroup-4",
                          type: "layoutInlineGroup",
                          children: [
                            {
                              body: "Rotations in Three Dimensions:",
                              id: "textbf-2",
                              type: "textbf"
                            },
                            {
                              id: "text-8",
                              type: "text",
                              body: "We will specialize to three-dimensional space and derive the representation of finite"
                            },
                            {
                              id: "text-9",
                              type: "text",
                              body: "rotations about both principal and arbitrary axes."
                            }
                          ]
                        }
                      }
                    ]
                  },
                  {
                    id: "item-3",
                    type: "item",
                    content: [
                      {
                        id: "contentLayoutGroup-5",
                        type: "contentLayoutGroup",
                        children: {
                          id: "layoutInlineGroup-5",
                          type: "layoutInlineGroup",
                          children: [
                            {
                              body: "Infinitesimal Rotations:",
                              id: "textbf-3",
                              type: "textbf"
                            },
                            {
                              id: "text-10",
                              type: "text",
                              body: "We will then study infinitesimal changes of orientation and show how they can be represented"
                            },
                            {
                              id: "text-11",
                              type: "text",
                              body: "by a vector."
                            }
                          ]
                        }
                      }
                    ]
                  },
                  {
                    id: "item-4",
                    type: "item",
                    content: [
                      {
                        id: "contentLayoutGroup-6",
                        type: "contentLayoutGroup",
                        children: {
                          id: "layoutInlineGroup-6",
                          type: "layoutInlineGroup",
                          children: [
                            {
                              body: "Angular Velocity:",
                              id: "textbf-4",
                              type: "textbf"
                            },
                            {
                              id: "text-12",
                              type: "text",
                              body: "From infinitesimal rotations we will introduce the angular velocity vector, which describes"
                            },
                            {
                              id: "text-13",
                              type: "text",
                              body: "the instantaneous rate of change of orientation."
                            }
                          ]
                        }
                      }
                    ]
                  },
                  {
                    id: "item-5",
                    type: "item",
                    content: [
                      {
                        id: "contentLayoutGroup-7",
                        type: "contentLayoutGroup",
                        children: {
                          id: "layoutInlineGroup-7",
                          type: "layoutInlineGroup",
                          children: [
                            {
                              body: "Transformation of Vectors Between Reference Frames:",
                              id: "textbf-5",
                              type: "textbf"
                            },
                            {
                              id: "text-14",
                              type: "text",
                              body: "Using angular velocity, we will derive the relation between the time derivatives of a vector"
                            },
                            {
                              id: "text-15",
                              type: "text",
                              body: "measured in fixed and rotating reference frames, and examine rotations about fixed and"
                            },
                            {
                              id: "text-16",
                              type: "text",
                              body: "time-dependent axes."
                            }
                          ]
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
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
    },
    {
      id: "section-2",
      type: "section",
      title: {
        id: "layoutInlineGroup-8",
        type: "layoutInlineGroup",
        children: [
          {
            id: "text-17",
            type: "text",
            body: "Orthogonal Transformations"
          }
        ]
      },
      intro: [
        {
          id: "contentLayoutGroup-8",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-9",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-18",
                type: "text",
                body: "As we highligthed in the introduction, we are interested in understanding the mathematical"
              },
              {
                id: "text-19",
                type: "text",
                body: "transformations that leave one point, or a set of point lying on a axis invariant, while"
              },
              {
                id: "text-20",
                type: "text",
                body: "keeping the distance between points in space invariant. Such transformations are"
              },
              {
                id: "text-21",
                type: "text",
                body: "called Orthogonal transformations. "
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-9",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-10",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-22",
                type: "text",
                body: "In this section we will review some basic properties of orthogonal transformations in a"
              },
              {
                id: "text-23",
                type: "text",
                body: "vector space "
              },
              {
                id: "inlineMath-1",
                type: "inlineMath",
                body: "V",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
              },
              {
                id: "text-24",
                type: "text",
                body: "over the complex numbers "
              },
              {
                id: "inlineMath-2",
                type: "inlineMath",
                body: "\\mathbb{C}",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6889em;\"></span><span class=\"mord mathbb\">C</span></span></span></span>"
              },
              {
                id: "text-25",
                type: "text",
                body: "of dimension "
              },
              {
                id: "inlineMath-3",
                type: "inlineMath",
                body: "n",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">n</span></span></span></span>"
              },
              {
                id: "text-26",
                type: "text",
                body: ", which is endowed with"
              },
              {
                id: "text-27",
                type: "text",
                body: "a scalar product generalized for complex vectors:"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-10",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-2",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-1",
                type: "displayMath",
                body: "\\ip{\\vb{x}}{\\vb{y}} = x_i\\,\\overline{y}_i",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">y</span></span><span class=\"mclose\">⟩</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8747em;vertical-align:-0.2441em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord overline\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.6306em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span></span></span><span style=\"top:-3.5506em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"overline-line\" style=\"border-bottom-width:0.04em;\"></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1944em;\"><span></span></span></span></span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2175em;\"><span style=\"top:-2.4559em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2441em;\"><span></span></span></span></span></span></span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-11",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-11",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-28",
                type: "text",
                body: "where "
              },
              {
                id: "inlineMath-4",
                type: "inlineMath",
                body: "\\vb{x} = (x_1, x_2, \\ldots, x_n)",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\">…</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">n</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span></span></span></span>"
              },
              {
                id: "text-29",
                type: "text",
                body: "and "
              },
              {
                id: "inlineMath-5",
                type: "inlineMath",
                body: "\\vb{y} = (y_1, y_2, \\ldots, y_n)",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6389em;vertical-align:-0.1944em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">y</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\">…</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">n</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span></span></span></span>"
              },
              {
                id: "text-30",
                type: "text",
                body: "are complex"
              },
              {
                id: "text-31",
                type: "text",
                body: "vectors in "
              },
              {
                id: "inlineMath-6",
                type: "inlineMath",
                body: "V",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
              },
              {
                id: "text-32",
                type: "text",
                body: ", and "
              },
              {
                id: "inlineMath-7",
                type: "inlineMath",
                body: "\\overline{y}",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.825em;vertical-align:-0.1944em;\"></span><span class=\"mord overline\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.6306em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span></span></span><span style=\"top:-3.5506em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"overline-line\" style=\"border-bottom-width:0.04em;\"></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1944em;\"><span></span></span></span></span></span></span></span></span>"
              },
              {
                id: "text-33",
                type: "text",
                body: "denotes the complex conjugate of "
              },
              {
                id: "inlineMath-8",
                type: "inlineMath",
                body: "y",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span></span></span></span>"
              },
              {
                id: "text-34",
                type: "text",
                body: ". The scalar product"
              },
              {
                id: "text-35",
                type: "text",
                body: "is positive-defined, which means that it satisfies the following properties:"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-12",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-3",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-2",
                type: "displayMath",
                body: "\\begin{gathered}\n    \\ip{\\vb{x}}{\\vb{y}} = \\overline{\\ip{\\vb{y}}{\\vb{x}}} \\\\\n    \\ip{\\vb{x}}{\\vb{x}} \\geq 0 \\\\\n    \\ip{\\vb{x}}{\\vb{x}} = 0 \\iff \\vb{x} = \\vb{0}\n  \\end{gathered}",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:4.31em;vertical-align:-1.905em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.405em;\"><span style=\"top:-4.455em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">y</span></span><span class=\"mclose\">⟩</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord overline\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.95em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">y</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"mclose\">⟩</span></span></span><span style=\"top:-3.87em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"overline-line\" style=\"border-bottom-width:0.04em;\"></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.25em;\"><span></span></span></span></span></span></span></span><span style=\"top:-2.955em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"mclose\">⟩</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">≥</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\">0</span></span></span><span style=\"top:-1.455em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"mclose\">⟩</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\">0</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">⟺</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.905em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-13",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-12",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-36",
                type: "text",
                body: "Although the vector space is defined over "
              },
              {
                id: "inlineMath-9",
                type: "inlineMath",
                body: "\\mathbb{C}",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6889em;\"></span><span class=\"mord mathbb\">C</span></span></span></span>"
              },
              {
                id: "text-37",
                type: "text",
                body: ", we shall consider only matrices with real coefficients."
              },
              {
                id: "text-38",
                type: "text",
                body: "Consequently, all transformations discussed here are orthogonal rather than unitary."
              },
              {
                id: "text-39",
                type: "text",
                body: "The complex scalar product is introduced only because it provides the natural setting"
              },
              {
                id: "text-40",
                type: "text",
                body: "for discussing the eigenvalues and eigenvectors of orthogonal matrices."
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-14",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-16",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "itemize-2",
                type: "itemize",
                items: [
                  {
                    id: "item-6",
                    type: "item",
                    content: [
                      {
                        id: "contentLayoutGroup-15",
                        type: "contentLayoutGroup",
                        children: {
                          id: "layoutInlineGroup-13",
                          type: "layoutInlineGroup",
                          children: [
                            {
                              body: "Definition",
                              id: "textbf-6",
                              type: "textbf"
                            },
                            {
                              id: "text-41",
                              type: "text",
                              body: ": Orthogonal transformations are linear transformations that"
                            },
                            {
                              id: "text-42",
                              type: "text",
                              body: "preserve the scalar product, and play a crucial role in the theory of rigid body"
                            },
                            {
                              id: "text-43",
                              type: "text",
                              body: "motion. A linear transformation "
                            },
                            {
                              id: "inlineMath-10",
                              type: "inlineMath",
                              body: "\\vb{A}",
                              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6861em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span></span></span></span>"
                            },
                            {
                              id: "text-44",
                              type: "text",
                              body: "of "
                            },
                            {
                              id: "inlineMath-11",
                              type: "inlineMath",
                              body: "V",
                              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                            },
                            {
                              id: "text-45",
                              type: "text",
                              body: "onto itself,"
                            }
                          ]
                        }
                      },
                      {
                        id: "contentLayoutGroup-16",
                        type: "contentLayoutGroup",
                        children: {
                          id: "layoutBlockNodeGroup-4",
                          type: "layoutBlockNodeGroup",
                          children: [
                            {
                              id: "displayMath-3",
                              type: "displayMath",
                              body: "\\vb{A}: V \\to V",
                              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6861em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">:</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">→</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span></span>"
                            }
                          ]
                        }
                      },
                      {
                        id: "contentLayoutGroup-17",
                        type: "contentLayoutGroup",
                        children: {
                          id: "layoutInlineGroup-14",
                          type: "layoutInlineGroup",
                          children: [
                            {
                              id: "text-46",
                              type: "text",
                              body: "is orthogonal if it preserves the scalar product between any two vectors.,"
                            }
                          ]
                        }
                      },
                      {
                        id: "contentLayoutGroup-18",
                        type: "contentLayoutGroup",
                        children: {
                          id: "layoutBlockNodeGroup-5",
                          type: "layoutBlockNodeGroup",
                          children: [
                            {
                              id: "displayMath-4",
                              type: "displayMath",
                              body: "\\ip{\\vb{x}'}{\\vb{y}'} = \\ip{\\vb{A}\\vb{x}}{\\vb{A}\\vb{y}} = \\ip{\\vb{x}}{\\vb{y}}",
                              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0519em;vertical-align:-0.25em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0519em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">y</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mclose\">⟩</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mord text\"><span class=\"mord textbf\">y</span></span><span class=\"mclose\">⟩</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">y</span></span><span class=\"mclose\">⟩</span></span></span></span></span>"
                            }
                          ]
                        }
                      },
                      {
                        id: "contentLayoutGroup-19",
                        type: "contentLayoutGroup",
                        children: {
                          id: "layoutInlineGroup-15",
                          type: "layoutInlineGroup",
                          children: [
                            {
                              id: "text-47",
                              type: "text",
                              body: "for all "
                            },
                            {
                              id: "inlineMath-12",
                              type: "inlineMath",
                              body: "\\vb{x}, \\vb{y} \\in V",
                              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">y</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span>"
                            },
                            {
                              id: "text-48",
                              type: "text",
                              body: "."
                            }
                          ]
                        }
                      }
                    ]
                  },
                  {
                    id: "item-7",
                    type: "item",
                    content: [
                      {
                        id: "contentLayoutGroup-20",
                        type: "contentLayoutGroup",
                        children: {
                          id: "layoutInlineGroup-16",
                          type: "layoutInlineGroup",
                          children: [
                            {
                              body: "Symmetry and Inverse:",
                              id: "textbf-7",
                              type: "textbf"
                            },
                            {
                              id: "text-49",
                              type: "text",
                              body: "From the properties of matrices and scalar products,"
                            },
                            {
                              id: "text-50",
                              type: "text",
                              body: "we can write the above equation as"
                            }
                          ]
                        }
                      },
                      {
                        id: "contentLayoutGroup-21",
                        type: "contentLayoutGroup",
                        children: {
                          id: "layoutBlockNodeGroup-6",
                          type: "layoutBlockNodeGroup",
                          children: [
                            {
                              id: "displayMath-5",
                              type: "displayMath",
                              body: "\\ip{\\vb{A}\\vb{x}}{\\vb{A}\\vb{x}} = \\ip{\\vb{x}}{\\vb{A}^\\top\\vb{A}\\vb{x}} = \\ip{\\vb{x}}{\\vb{x}}",
                              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"mclose\">⟩</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.1751em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9251em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"mclose\">⟩</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"mclose\">⟩</span></span></span></span></span>"
                            }
                          ]
                        }
                      },
                      {
                        id: "contentLayoutGroup-22",
                        type: "contentLayoutGroup",
                        children: {
                          id: "layoutInlineGroup-17",
                          type: "layoutInlineGroup",
                          children: [
                            {
                              id: "text-51",
                              type: "text",
                              body: "which results in,"
                            }
                          ]
                        }
                      },
                      {
                        id: "contentLayoutGroup-23",
                        type: "contentLayoutGroup",
                        children: {
                          id: "layoutBlockNodeGroup-7",
                          type: "layoutBlockNodeGroup",
                          children: [
                            {
                              id: "equation-1",
                              type: "equation",
                              body: "\\begin{gathered}\n            \\vb{A}^\\top\\vb{A} = \\vb{A}\\vb{A}^\\top = \\vb{I} \\\\\n            \\vb{A}^{-1} = \\vb{A}^\\top\n          \\end{gathered}",
                              label: "kinematics:orthogonal-condition",
                              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.8702em;vertical-align:-1.1851em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.6851em;\"><span style=\"top:-3.6851em;\"><span class=\"pstrut\" style=\"height:3.6851em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.6851em;\"><span style=\"top:-3.76em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9251em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9251em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">I</span></span></span></span><span style=\"top:-2.1749em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8901em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">−</span><span class=\"mord mtight\">1</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9251em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1851em;\"><span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1851em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                            }
                          ]
                        }
                      },
                      {
                        id: "contentLayoutGroup-24",
                        type: "contentLayoutGroup",
                        children: {
                          id: "layoutInlineGroup-18",
                          type: "layoutInlineGroup",
                          children: [
                            {
                              id: "text-52",
                              type: "text",
                              body: "where "
                            },
                            {
                              id: "inlineMath-13",
                              type: "inlineMath",
                              body: "\\vb{I}",
                              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6861em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">I</span></span></span></span></span>"
                            },
                            {
                              id: "text-53",
                              type: "text",
                              body: "is the identity matrix. The inverse of an orthogonal transformation is"
                            },
                            {
                              id: "text-54",
                              type: "text",
                              body: "the transpose of the matrix itself. As a note: if the matrix "
                            },
                            {
                              id: "inlineMath-14",
                              type: "inlineMath",
                              body: "\\vb{A}",
                              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6861em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span></span></span></span>"
                            },
                            {
                              id: "text-55",
                              type: "text",
                              body: "had complex"
                            },
                            {
                              id: "text-56",
                              type: "text",
                              body: "elements, then the transpose would be replaced by the conjugate transpose"
                            },
                            {
                              id: "inlineMath-15",
                              type: "inlineMath",
                              body: "\\bar{A}^\\top",
                              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8491em;\"></span><span class=\"mord\"><span class=\"mord accent\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8201em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord mathnormal\">A</span></span><span style=\"top:-3.2523em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"accent-body\" style=\"left:-0.1111em;\"><span class=\"mord\">ˉ</span></span></span></span></span></span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8491em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span></span></span></span>"
                            },
                            {
                              id: "text-57",
                              type: "text",
                              body: ":"
                            }
                          ]
                        }
                      },
                      {
                        id: "contentLayoutGroup-25",
                        type: "contentLayoutGroup",
                        children: {
                          id: "layoutBlockNodeGroup-8",
                          type: "layoutBlockNodeGroup",
                          children: [
                            {
                              id: "displayMath-6",
                              type: "displayMath",
                              body: "\\ip{\\vb{A}\\vb{x}}{\\vb{A}\\vb{x}} = \\ip{\\vb{x}}{\\bar{A}^\\top\\vb{A}\\vb{x}} = \\ip{\\vb{x}}{\\vb{x}}",
                              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"mclose\">⟩</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.1491em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord accent\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8201em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord mathnormal\">A</span></span><span style=\"top:-3.2523em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"accent-body\" style=\"left:-0.1111em;\"><span class=\"mord\">ˉ</span></span></span></span></span></span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8991em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"mclose\">⟩</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"mclose\">⟩</span></span></span></span></span>"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  {
                    id: "item-8",
                    type: "item",
                    content: [
                      {
                        id: "contentLayoutGroup-26",
                        type: "contentLayoutGroup",
                        children: {
                          id: "layoutInlineGroup-19",
                          type: "layoutInlineGroup",
                          children: [
                            {
                              body: "Orthogonality of rows and columns",
                              id: "textbf-8",
                              type: "textbf"
                            },
                            {
                              id: "text-58",
                              type: "text",
                              body: ": Considering the row and column vectors"
                            },
                            {
                              id: "inlineMath-16",
                              type: "inlineMath",
                              body: "\\vb{v}_i",
                              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                            },
                            {
                              id: "text-59",
                              type: "text",
                              body: "and "
                            },
                            {
                              id: "inlineMath-17",
                              type: "inlineMath",
                              body: "\\vb{a}_i",
                              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">a</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                            },
                            {
                              id: "text-60",
                              type: "text",
                              body: "forming the matrix "
                            },
                            {
                              id: "inlineMath-18",
                              type: "inlineMath",
                              body: "\\vb{A}",
                              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6861em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span></span></span></span>"
                            },
                            {
                              id: "text-61",
                              type: "text",
                              body: ", we can write the above"
                            },
                            {
                              id: "text-62",
                              type: "text",
                              body: "equation as"
                            }
                          ]
                        }
                      },
                      {
                        id: "contentLayoutGroup-27",
                        type: "contentLayoutGroup",
                        children: {
                          id: "layoutBlockNodeGroup-9",
                          type: "layoutBlockNodeGroup",
                          children: [
                            {
                              id: "displayMath-7",
                              type: "displayMath",
                              body: "\\begin{gathered}\n            \\ip{\\vb{v}_i}{\\vb{v}_j} = \\delta_{ij} \\\\\n            \\ip{\\vb{a}_i}{\\vb{a}_j} = \\delta_{ij}\n          \\end{gathered}",
                              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.7em;vertical-align:-1.1em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.6em;\"><span style=\"top:-3.76em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mopen\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0572em;\">j</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mclose\">⟩</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0379em;\">δ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:-0.0379em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0572em;\">ij</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-2.26em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mopen\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">a</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">a</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0572em;\">j</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mclose\">⟩</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0379em;\">δ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:-0.0379em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0572em;\">ij</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                            }
                          ]
                        }
                      },
                      {
                        id: "contentLayoutGroup-28",
                        type: "contentLayoutGroup",
                        children: {
                          id: "layoutInlineGroup-20",
                          type: "layoutInlineGroup",
                          children: [
                            {
                              id: "text-63",
                              type: "text",
                              body: "which is equivalent to requiring that the rows and the columns vectors are a set of"
                            },
                            {
                              id: "text-64",
                              type: "text",
                              body: "orthonormal vectors. The vectors "
                            },
                            {
                              id: "inlineMath-19",
                              type: "inlineMath",
                              body: "\\vb{v}_i",
                              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                            },
                            {
                              id: "text-65",
                              type: "text",
                              body: "represent the components of the unit"
                            },
                            {
                              id: "text-66",
                              type: "text",
                              body: "vectors that define the direction of the coordinate axes in the rotated system,"
                            },
                            {
                              id: "text-67",
                              type: "text",
                              body: "relative to the unit vectors of the reference system."
                            }
                          ]
                        }
                      }
                    ]
                  },
                  {
                    id: "item-9",
                    type: "item",
                    content: [
                      {
                        id: "contentLayoutGroup-29",
                        type: "contentLayoutGroup",
                        children: {
                          id: "layoutInlineGroup-21",
                          type: "layoutInlineGroup",
                          children: [
                            {
                              body: "Property of eigenvalues",
                              id: "textbf-9",
                              type: "textbf"
                            },
                            {
                              id: "text-68",
                              type: "text",
                              body: ": The eigenvector "
                            },
                            {
                              id: "inlineMath-20",
                              type: "inlineMath",
                              body: "\\vb{v}",
                              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span></span></span></span>"
                            },
                            {
                              id: "text-69",
                              type: "text",
                              body: "corresponding to the"
                            },
                            {
                              id: "text-70",
                              type: "text",
                              body: "eigenvalue "
                            },
                            {
                              id: "inlineMath-21",
                              type: "inlineMath",
                              body: "\\lambda",
                              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\">λ</span></span></span></span>"
                            },
                            {
                              id: "text-71",
                              type: "text",
                              body: "will preserve its length under the orthogonal transformation:"
                            }
                          ]
                        }
                      },
                      {
                        id: "contentLayoutGroup-30",
                        type: "contentLayoutGroup",
                        children: {
                          id: "layoutBlockNodeGroup-10",
                          type: "layoutBlockNodeGroup",
                          children: [
                            {
                              id: "displayMath-8",
                              type: "displayMath",
                              body: "\\ip{\\vb{v}}{\\vb{v}} = \\ip{\\vb{A}\\vb{v}}{\\vb{A}\\vb{v}} = \\lambda\\overline{\\lambda}\\ip{\\vb{v}}{\\vb{v}}",
                              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mclose\">⟩</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mclose\">⟩</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.1444em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">λ</span><span class=\"mord overline\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8944em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span></span></span><span style=\"top:-3.8144em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"overline-line\" style=\"border-bottom-width:0.04em;\"></span></span></span></span></span></span><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mclose\">⟩</span></span></span></span></span>"
                            }
                          ]
                        }
                      },
                      {
                        id: "contentLayoutGroup-31",
                        type: "contentLayoutGroup",
                        children: {
                          id: "layoutInlineGroup-22",
                          type: "layoutInlineGroup",
                          children: [
                            {
                              id: "text-72",
                              type: "text",
                              body: "which implies that the eigenvalues are complex numbers on the complex unit circle of"
                            },
                            {
                              id: "text-73",
                              type: "text",
                              body: "the form "
                            },
                            {
                              id: "inlineMath-22",
                              type: "inlineMath",
                              body: "\\lambda = e^{i\\theta}",
                              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\">λ</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8491em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">e</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8491em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">i</span><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0278em;\">θ</span></span></span></span></span></span></span></span></span></span></span></span>"
                            },
                            {
                              id: "text-74",
                              type: "text",
                              body: ", and they always come in pairs, as"
                            },
                            {
                              id: "inlineMath-23",
                              type: "inlineMath",
                              body: "\\lambda = e^{-i\\theta}",
                              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\">λ</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8491em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">e</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8491em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">−</span><span class=\"mord mathnormal mtight\">i</span><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0278em;\">θ</span></span></span></span></span></span></span></span></span></span></span></span>"
                            },
                            {
                              id: "text-75",
                              type: "text",
                              body: "is an eigenvalue as well. If "
                            },
                            {
                              id: "inlineMath-24",
                              type: "inlineMath",
                              body: "n",
                              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">n</span></span></span></span>"
                            },
                            {
                              id: "text-76",
                              type: "text",
                              body: "is even, then one eigenvalue"
                            },
                            {
                              id: "text-77",
                              type: "text",
                              body: "is either "
                            },
                            {
                              id: "inlineMath-25",
                              type: "inlineMath",
                              body: "+1",
                              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7278em;vertical-align:-0.0833em;\"></span><span class=\"mord\">+</span><span class=\"mord\">1</span></span></span></span>"
                            },
                            {
                              id: "text-78",
                              type: "text",
                              body: "or "
                            },
                            {
                              id: "inlineMath-26",
                              type: "inlineMath",
                              body: "-1",
                              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7278em;vertical-align:-0.0833em;\"></span><span class=\"mord\">−</span><span class=\"mord\">1</span></span></span></span>"
                            },
                            {
                              id: "text-79",
                              type: "text",
                              body: "."
                            }
                          ]
                        }
                      }
                    ]
                  },
                  {
                    id: "item-10",
                    type: "item",
                    content: [
                      {
                        id: "contentLayoutGroup-32",
                        type: "contentLayoutGroup",
                        children: {
                          id: "layoutInlineGroup-23",
                          type: "layoutInlineGroup",
                          children: [
                            {
                              body: "Property of eigenvectors",
                              id: "textbf-10",
                              type: "textbf"
                            },
                            {
                              id: "text-80",
                              type: "text",
                              body: ": the eigenvectors "
                            },
                            {
                              id: "inlineMath-27",
                              type: "inlineMath",
                              body: "\\vb{v}_1",
                              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                            },
                            {
                              id: "text-81",
                              type: "text",
                              body: "and "
                            },
                            {
                              id: "inlineMath-28",
                              type: "inlineMath",
                              body: "\\vb{v}_2",
                              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                            },
                            {
                              id: "text-82",
                              type: "text",
                              body: "corresponding to different eigenvalues "
                            },
                            {
                              id: "inlineMath-29",
                              type: "inlineMath",
                              body: "\\lambda_1",
                              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8444em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                            },
                            {
                              id: "text-83",
                              type: "text",
                              body: "and "
                            },
                            {
                              id: "inlineMath-30",
                              type: "inlineMath",
                              body: "\\lambda_2",
                              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8444em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                            },
                            {
                              id: "text-84",
                              type: "text",
                              body: "are orthogonal to"
                            },
                            {
                              id: "text-85",
                              type: "text",
                              body: "each other. The proof of this property is straightforward, as we can write"
                            }
                          ]
                        }
                      },
                      {
                        id: "contentLayoutGroup-33",
                        type: "contentLayoutGroup",
                        children: {
                          id: "layoutBlockNodeGroup-11",
                          type: "layoutBlockNodeGroup",
                          children: [
                            {
                              id: "displayMath-9",
                              type: "displayMath",
                              body: "\\ip{\\vb{v}_1}{\\vb{v}_2} = \\ip{\\vb{A}\\vb{v}_1}{\\vb{A}\\vb{v}_2} = \\lambda_1\\overline{\\lambda_2}\\ip{\\vb{v}_1}{\\vb{v}_2}",
                              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">⟩</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">⟩</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.1444em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mord overline\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8944em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-3.8144em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"overline-line\" style=\"border-bottom-width:0.04em;\"></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span><span class=\"mopen\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">⟩</span></span></span></span></span>"
                            }
                          ]
                        }
                      },
                      {
                        id: "contentLayoutGroup-34",
                        type: "contentLayoutGroup",
                        children: {
                          id: "layoutInlineGroup-24",
                          type: "layoutInlineGroup",
                          children: [
                            {
                              id: "text-86",
                              type: "text",
                              body: "which can only be true if "
                            },
                            {
                              id: "inlineMath-31",
                              type: "inlineMath",
                              body: "\\ip{\\vb{v}_1}{\\vb{v}_2} = 0",
                              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">⟩</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">0</span></span></span></span>"
                            },
                            {
                              id: "text-87",
                              type: "text",
                              body: ", as the eigenvalues are"
                            },
                            {
                              id: "text-88",
                              type: "text",
                              body: "complex numbers on the unit circle different from zero."
                            }
                          ]
                        }
                      }
                    ]
                  },
                  {
                    id: "item-11",
                    type: "item",
                    content: [
                      {
                        id: "contentLayoutGroup-35",
                        type: "contentLayoutGroup",
                        children: {
                          id: "layoutInlineGroup-25",
                          type: "layoutInlineGroup",
                          children: [
                            {
                              body: "Property of determinant",
                              id: "textbf-11",
                              type: "textbf"
                            },
                            {
                              id: "text-89",
                              type: "text",
                              body: "From "
                            },
                            {
                              id: "inlineMath-32",
                              type: "inlineMath",
                              body: "\\det(\\vb{A}) = \\det(\\vb{A}^\\top)",
                              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mop\">det</span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.1751em;vertical-align:-0.25em;\"></span><span class=\"mop\">det</span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9251em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span><span class=\"mclose\">)</span></span></span></span>"
                            },
                            {
                              id: "text-90",
                              type: "text",
                              body: "it follows"
                            },
                            {
                              id: "text-91",
                              type: "text",
                              body: "that,"
                            }
                          ]
                        }
                      },
                      {
                        id: "contentLayoutGroup-36",
                        type: "contentLayoutGroup",
                        children: {
                          id: "layoutBlockNodeGroup-12",
                          type: "layoutBlockNodeGroup",
                          children: [
                            {
                              id: "displayMath-10",
                              type: "displayMath",
                              body: "\\det(\\vb{A})^2 = 1",
                              html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.1141em;vertical-align:-0.25em;\"></span><span class=\"mop\">det</span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mclose\"><span class=\"mclose\">)</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">1</span></span></span></span></span>"
                            }
                          ]
                        }
                      },
                      {
                        id: "contentLayoutGroup-37",
                        type: "contentLayoutGroup",
                        children: {
                          id: "layoutInlineGroup-26",
                          type: "layoutInlineGroup",
                          children: [
                            {
                              id: "text-92",
                              type: "text",
                              body: "which implies that the determinant of an orthogonal matrix is either "
                            },
                            {
                              id: "inlineMath-33",
                              type: "inlineMath",
                              body: "+1",
                              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7278em;vertical-align:-0.0833em;\"></span><span class=\"mord\">+</span><span class=\"mord\">1</span></span></span></span>"
                            },
                            {
                              id: "text-93",
                              type: "text",
                              body: "or "
                            },
                            {
                              id: "inlineMath-34",
                              type: "inlineMath",
                              body: "-1",
                              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7278em;vertical-align:-0.0833em;\"></span><span class=\"mord\">−</span><span class=\"mord\">1</span></span></span></span>"
                            },
                            {
                              id: "text-94",
                              type: "text",
                              body: "."
                            },
                            {
                              id: "text-95",
                              type: "text",
                              body: "As we will see in the next section, the former corresponds to proper rotations, while"
                            },
                            {
                              id: "text-96",
                              type: "text",
                              body: "the latter corresponds to improper rotations or reflections."
                            }
                          ]
                        }
                      }
                    ]
                  },
                  {
                    id: "item-12",
                    type: "item",
                    content: [
                      {
                        id: "contentLayoutGroup-38",
                        type: "contentLayoutGroup",
                        children: {
                          id: "layoutInlineGroup-27",
                          type: "layoutInlineGroup",
                          children: [
                            {
                              body: "The Othogonal Group",
                              id: "textbf-12",
                              type: "textbf"
                            },
                            {
                              id: "text-97",
                              type: "text",
                              body: "The set of orthogonal matrices forms a group under matrix multiplication:"
                            }
                          ]
                        }
                      },
                      {
                        id: "contentLayoutGroup-39",
                        type: "contentLayoutGroup",
                        children: {
                          id: "layoutBlockNodeGroup-14",
                          type: "layoutBlockNodeGroup",
                          children: [
                            {
                              id: "itemize-3",
                              type: "itemize",
                              items: [
                                {
                                  id: "item-13",
                                  type: "item",
                                  content: [
                                    {
                                      id: "contentLayoutGroup-40",
                                      type: "contentLayoutGroup",
                                      children: {
                                        id: "layoutInlineGroup-28",
                                        type: "layoutInlineGroup",
                                        children: [
                                          {
                                            id: "text-98",
                                            type: "text",
                                            body: "Multiplying any two orthogonal matrices "
                                          },
                                          {
                                            id: "inlineMath-35",
                                            type: "inlineMath",
                                            body: "\\vb{A}",
                                            html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6861em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span></span></span></span>"
                                          },
                                          {
                                            id: "text-99",
                                            type: "text",
                                            body: "and "
                                          },
                                          {
                                            id: "inlineMath-36",
                                            type: "inlineMath",
                                            body: "\\vb{B}",
                                            html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6861em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">B</span></span></span></span></span>"
                                          },
                                          {
                                            id: "text-100",
                                            type: "text",
                                            body: "gives again an orthogonal matrix,"
                                          }
                                        ]
                                      }
                                    },
                                    {
                                      id: "contentLayoutGroup-41",
                                      type: "contentLayoutGroup",
                                      children: {
                                        id: "layoutBlockNodeGroup-13",
                                        type: "layoutBlockNodeGroup",
                                        children: [
                                          {
                                            id: "displayMath-11",
                                            type: "displayMath",
                                            body: "\\ip{\\vb{A}\\vb{B}\\vb{x}}{\\vb{A}\\vb{B}\\vb{y}} = \\ip{\\vb{x}}{(\\vb{A}\\vb{B})^T\\vb{A}\\vb{B}\\vb{y}}\n        =\\ip{\\vb{x}}{\\vb{B}^T\\vb{A}^T\\vb{A}\\vb{B}\\vb{y}} = \\ip{\\vb{x}}{ \\vb{y}}",
                                            html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mord text\"><span class=\"mord textbf\">B</span></span><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mord text\"><span class=\"mord textbf\">B</span></span><span class=\"mord text\"><span class=\"mord textbf\">y</span></span><span class=\"mclose\">⟩</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.1413em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mord text\"><span class=\"mord textbf\">B</span></span><span class=\"mclose\"><span class=\"mclose\">)</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8913em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.1389em;\">T</span></span></span></span></span></span></span></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mord text\"><span class=\"mord textbf\">B</span></span><span class=\"mord text\"><span class=\"mord textbf\">y</span></span><span class=\"mclose\">⟩</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.1673em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">B</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9173em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.1389em;\">T</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9173em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.1389em;\">T</span></span></span></span></span></span></span></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mord text\"><span class=\"mord textbf\">B</span></span><span class=\"mord text\"><span class=\"mord textbf\">y</span></span><span class=\"mclose\">⟩</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">y</span></span><span class=\"mclose\">⟩</span></span></span></span></span>"
                                          }
                                        ]
                                      }
                                    },
                                    {
                                      id: "contentLayoutGroup-42",
                                      type: "contentLayoutGroup",
                                      children: {
                                        id: "layoutInlineGroup-29",
                                        type: "layoutInlineGroup",
                                        children: [
                                          {
                                            id: "text-101",
                                            type: "text",
                                            body: "as "
                                          },
                                          {
                                            id: "inlineMath-37",
                                            type: "inlineMath",
                                            body: "(\\vb{A}\\vb{B})^T=\\vb{B}^T\\vb{A}^T",
                                            html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0913em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mord text\"><span class=\"mord textbf\">B</span></span><span class=\"mclose\"><span class=\"mclose\">)</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8413em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.1389em;\">T</span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.9173em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">B</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9173em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.1389em;\">T</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9173em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.1389em;\">T</span></span></span></span></span></span></span></span></span></span></span>"
                                          },
                                          {
                                            id: "text-102",
                                            type: "text",
                                            body: "."
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                },
                                {
                                  id: "item-14",
                                  type: "item",
                                  content: [
                                    {
                                      id: "contentLayoutGroup-43",
                                      type: "contentLayoutGroup",
                                      children: {
                                        id: "layoutInlineGroup-30",
                                        type: "layoutInlineGroup",
                                        children: [
                                          {
                                            id: "text-103",
                                            type: "text",
                                            body: "Every orthogonal matrix has an inverse, which is the transposed matrix."
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                },
                                {
                                  id: "item-15",
                                  type: "item",
                                  content: [
                                    {
                                      id: "contentLayoutGroup-44",
                                      type: "contentLayoutGroup",
                                      children: {
                                        id: "layoutInlineGroup-31",
                                        type: "layoutInlineGroup",
                                        children: [
                                          {
                                            id: "text-104",
                                            type: "text",
                                            body: "The identity element is the identity matrix "
                                          },
                                          {
                                            id: "inlineMath-38",
                                            type: "inlineMath",
                                            body: "\\vb I",
                                            html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6861em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">I</span></span></span></span></span>"
                                          },
                                          {
                                            id: "text-105",
                                            type: "text",
                                            body: "."
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                },
                                {
                                  id: "item-16",
                                  type: "item",
                                  content: [
                                    {
                                      id: "contentLayoutGroup-45",
                                      type: "contentLayoutGroup",
                                      children: {
                                        id: "layoutInlineGroup-32",
                                        type: "layoutInlineGroup",
                                        children: [
                                          {
                                            id: "text-106",
                                            type: "text",
                                            body: "The matrix multiplication is associative."
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      },
                      {
                        id: "contentLayoutGroup-46",
                        type: "contentLayoutGroup",
                        children: {
                          id: "layoutInlineGroup-33",
                          type: "layoutInlineGroup",
                          children: [
                            {
                              id: "text-107",
                              type: "text",
                              body: "The subset of orthogonal matrices with determinant "
                            },
                            {
                              id: "inlineMath-39",
                              type: "inlineMath",
                              body: "+1",
                              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7278em;vertical-align:-0.0833em;\"></span><span class=\"mord\">+</span><span class=\"mord\">1</span></span></span></span>"
                            },
                            {
                              id: "text-108",
                              type: "text",
                              body: "forms a subgroup of the orthogonal"
                            },
                            {
                              id: "text-109",
                              type: "text",
                              body: "group, called the "
                            },
                            {
                              body: "special orthogonal group",
                              id: "textbf-13",
                              type: "textbf"
                            },
                            {
                              id: "text-110",
                              type: "text",
                              body: "and denoted by "
                            },
                            {
                              id: "inlineMath-40",
                              type: "inlineMath",
                              body: "SO(n)",
                              html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">O</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">n</span><span class=\"mclose\">)</span></span></span></span>"
                            },
                            {
                              id: "text-111",
                              type: "text",
                              body: ". This group"
                            },
                            {
                              id: "text-112",
                              type: "text",
                              body: "describes proper rotations."
                            }
                          ]
                        }
                      }
                    ]
                  },
                  {
                    id: "item-17",
                    type: "item",
                    content: [
                      {
                        id: "contentLayoutGroup-47",
                        type: "contentLayoutGroup",
                        children: {
                          id: "layoutInlineGroup-34",
                          type: "layoutInlineGroup",
                          children: [
                            {
                              body: "Interpretation of orthogonal transformation",
                              id: "textbf-14",
                              type: "textbf"
                            },
                            {
                              id: "text-113",
                              type: "text",
                              body: "It is important to note that"
                            },
                            {
                              id: "text-114",
                              type: "text",
                              body: "an orthogonal transformation can be seen in either of two ways:"
                            }
                          ]
                        }
                      },
                      {
                        id: "contentLayoutGroup-48",
                        type: "contentLayoutGroup",
                        children: {
                          id: "layoutBlockNodeGroup-15",
                          type: "layoutBlockNodeGroup",
                          children: [
                            {
                              id: "itemize-4",
                              type: "itemize",
                              items: [
                                {
                                  id: "item-18",
                                  type: "item",
                                  content: [
                                    {
                                      id: "contentLayoutGroup-49",
                                      type: "contentLayoutGroup",
                                      children: {
                                        id: "layoutInlineGroup-35",
                                        type: "layoutInlineGroup",
                                        children: [
                                          {
                                            id: "text-115",
                                            type: "text",
                                            body: "a "
                                          },
                                          {
                                            body: "passive",
                                            id: "textbf-15",
                                            type: "textbf"
                                          },
                                          {
                                            id: "text-116",
                                            type: "text",
                                            body: "transformation, where the components of the "
                                          },
                                          {
                                            body: "same",
                                            id: "textbf-16",
                                            type: "textbf"
                                          },
                                          {
                                            id: "text-117",
                                            type: "text",
                                            body: "vector are expressed in different bases;"
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                },
                                {
                                  id: "item-19",
                                  type: "item",
                                  content: [
                                    {
                                      id: "contentLayoutGroup-50",
                                      type: "contentLayoutGroup",
                                      children: {
                                        id: "layoutInlineGroup-36",
                                        type: "layoutInlineGroup",
                                        children: [
                                          {
                                            id: "text-118",
                                            type: "text",
                                            body: "an "
                                          },
                                          {
                                            body: "active",
                                            id: "textbf-17",
                                            type: "textbf"
                                          },
                                          {
                                            id: "text-119",
                                            type: "text",
                                            body: "transformation, where a vector is actively transformed into"
                                          },
                                          {
                                            id: "text-120",
                                            type: "text",
                                            body: "a "
                                          },
                                          {
                                            body: "new one",
                                            id: "textbf-18",
                                            type: "textbf"
                                          },
                                          {
                                            id: "text-121",
                                            type: "text",
                                            body: "in the same reference system."
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      },
                      {
                        id: "contentLayoutGroup-51",
                        type: "contentLayoutGroup",
                        children: {
                          id: "layoutInlineGroup-37",
                          type: "layoutInlineGroup",
                          children: [
                            {
                              id: "text-122",
                              type: "text",
                              body: "We will observe that in three dimensions, these two interpretations result in rotations"
                            },
                            {
                              id: "text-123",
                              type: "text",
                              body: "that correspond to inverse rotations."
                            }
                          ]
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
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
      title: {
        id: "layoutInlineGroup-38",
        type: "layoutInlineGroup",
        children: [
          {
            id: "text-124",
            type: "text",
            body: "Rotations in Three Dimensions"
          }
        ]
      },
      intro: [
        {
          id: "contentLayoutGroup-52",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-39",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-125",
                type: "text",
                body: "An orthogonal transformation in three dimensions always possesses one real eigenvalue, equal to either +1 or −1."
              },
              {
                id: "text-126",
                type: "text",
                body: "The remaining two eigenvalues are either the complex-conjugate pair "
              },
              {
                id: "inlineMath-41",
                type: "inlineMath",
                body: "\\lambda = e^{i\\theta}",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\">λ</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8491em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">e</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8491em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">i</span><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0278em;\">θ</span></span></span></span></span></span></span></span></span></span></span></span>"
              },
              {
                id: "text-127",
                type: "text",
                body: "and "
              },
              {
                id: "inlineMath-42",
                type: "inlineMath",
                body: "\\lambda = e^{-i\\theta}",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\">λ</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8491em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">e</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8491em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">−</span><span class=\"mord mathnormal mtight\">i</span><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0278em;\">θ</span></span></span></span></span></span></span></span></span></span></span></span>"
              },
              {
                id: "text-128",
                type: "text",
                body: ","
              },
              {
                id: "text-129",
                type: "text",
                body: "or another pair of "
              },
              {
                id: "inlineMath-43",
                type: "inlineMath",
                body: "\\pm 1",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7278em;vertical-align:-0.0833em;\"></span><span class=\"mord\">±</span><span class=\"mord\">1</span></span></span></span>"
              },
              {
                id: "text-130",
                type: "text",
                body: "."
              },
              {
                id: "text-131",
                type: "text",
                body: "The eigenvectors corresponding to the eigenvalue "
              },
              {
                id: "inlineMath-44",
                type: "inlineMath",
                body: "+1",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7278em;vertical-align:-0.0833em;\"></span><span class=\"mord\">+</span><span class=\"mord\">1</span></span></span></span>"
              },
              {
                id: "text-132",
                type: "text",
                body: "are the vectors that remain unchanged"
              },
              {
                id: "text-133",
                type: "text",
                body: "under the transformation, forming the rotation axis. Conversely, the eigenvectors"
              },
              {
                id: "text-134",
                type: "text",
                body: "corresponding to the eigenvalue "
              },
              {
                id: "inlineMath-45",
                type: "inlineMath",
                body: "-1",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7278em;vertical-align:-0.0833em;\"></span><span class=\"mord\">−</span><span class=\"mord\">1</span></span></span></span>"
              },
              {
                id: "text-135",
                type: "text",
                body: "are the vectors that are reflected under the"
              },
              {
                id: "text-136",
                type: "text",
                body: "transformation."
              },
              {
                id: "text-137",
                type: "text",
                body: "In physics, we assume that an orthogonal transformation varies continuously with the"
              },
              {
                id: "text-138",
                type: "text",
                body: "parameter "
              },
              {
                id: "inlineMath-46",
                type: "inlineMath",
                body: "\\theta",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span></span></span></span>"
              },
              {
                id: "text-139",
                type: "text",
                body: "the rotation angle. This angle typically depends on time and describes the"
              },
              {
                id: "text-140",
                type: "text",
                body: "evolution of the rotated reference system relative to the fixed reference frame. When the rotation angle"
              },
              {
                id: "text-141",
                type: "text",
                body: "is zero, the reference systems coincide, and the transformation is the identity. Since the eigenvalue associated"
              },
              {
                id: "text-142",
                type: "text",
                body: "with the rotation axis cannot change continuously from +1 to −1, we restrict our attention"
              },
              {
                id: "text-143",
                type: "text",
                body: "to the connected component of the identity, namely the proper rotations."
              }
            ]
          }
        }
      ],
      subsections: [
        {
          id: "subsection-1",
          type: "subsection",
          title: {
            id: "layoutInlineGroup-40",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-144",
                type: "text",
                body: "Rotation Around the Principal Axes"
              }
            ]
          },
          content: [
            {
              id: "contentLayoutGroup-53",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-41",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-145",
                    type: "text",
                    body: "Before deriving the general form of a rotation around any axis, we will consider the rotation"
                  },
                  {
                    id: "text-146",
                    type: "text",
                    body: "around the "
                  },
                  {
                    id: "inlineMath-47",
                    type: "inlineMath",
                    body: "z",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span></span></span></span>"
                  },
                  {
                    id: "text-147",
                    type: "text",
                    body: "-axis. In Fig~1 such a rotation is illustrated."
                  },
                  {
                    id: "text-148",
                    type: "text",
                    body: "The rotation matrix "
                  },
                  {
                    id: "inlineMath-48",
                    type: "inlineMath",
                    body: "\\vb{A}_z(\\theta)",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.044em;\">z</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-149",
                    type: "text",
                    body: "in this case is given by,"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-54",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-17",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-12",
                    type: "displayMath",
                    body: "\\vb{A}_z(\\theta) =\n  \\begin{pmatrix}\n    \\cos\\theta  & \\sin\\theta & 0 \\\\\n    -\\sin\\theta & \\cos\\theta & 0 \\\\\n    0           & 0          & 1\n  \\end{pmatrix}",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.044em;\">z</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:3.6em;vertical-align:-1.55em;\"></span><span class=\"minner\"><span class=\"mopen\"><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.05em;\"><span class=\"pstrut\" style=\"height:5.6em;\"></span><span style=\"width:0.875em;height:3.6em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.875em\" height=\"3.6em\" viewBox=\"0 0 875 3600\"><path d=\"M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1\nc-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,\n-36,557 l0,84c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,\n949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9\nc0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,\n-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189\nl0,-92c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,\n-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.21em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mop\">cos</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span></span></span><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">−</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mop\">sin</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span></span></span><span style=\"top:-1.81em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.21em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mop\">sin</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span></span></span><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mop\">cos</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span></span></span><span style=\"top:-1.81em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.21em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span><span style=\"top:-1.81em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span></span><span class=\"mclose\"><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.05em;\"><span class=\"pstrut\" style=\"height:5.6em;\"></span><span style=\"width:0.875em;height:3.6em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.875em\" height=\"3.6em\" viewBox=\"0 0 875 3600\"><path d=\"M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,\n63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5\nc11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,9\nc-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664\nc-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11\nc0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17\nc242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558\nl0,-144c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,\n-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-55",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-42",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-150",
                    type: "text",
                    body: "where "
                  },
                  {
                    id: "inlineMath-49",
                    type: "inlineMath",
                    body: "\\theta",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span></span></span></span>"
                  },
                  {
                    id: "text-151",
                    type: "text",
                    body: "is the rotation angle. The derivation of the matrix "
                  },
                  {
                    id: "inlineMath-50",
                    type: "inlineMath",
                    body: "\\vb{A}_z(\\theta)",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.044em;\">z</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-152",
                    type: "text",
                    body: "is"
                  },
                  {
                    id: "text-153",
                    type: "text",
                    body: "straightforward, as the row vectors are obviously the components of the unit vectors of the"
                  },
                  {
                    id: "text-154",
                    type: "text",
                    body: "rotated system in the reference system. The matrix "
                  },
                  {
                    id: "inlineMath-51",
                    type: "inlineMath",
                    body: "\\vb{A}_z(\\theta)",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.044em;\">z</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-155",
                    type: "text",
                    body: "is orthogonal, as it"
                  },
                  {
                    id: "text-156",
                    type: "text",
                    body: "satisfies the properties of an orthogonal matrix, and it is easy to verify that the"
                  },
                  {
                    id: "text-157",
                    type: "text",
                    body: "determinant is "
                  },
                  {
                    id: "inlineMath-52",
                    type: "inlineMath",
                    body: "+1",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7278em;vertical-align:-0.0833em;\"></span><span class=\"mord\">+</span><span class=\"mord\">1</span></span></span></span>"
                  },
                  {
                    id: "text-158",
                    type: "text",
                    body: ". It is important to emphasize that the matrix "
                  },
                  {
                    id: "inlineMath-53",
                    type: "inlineMath",
                    body: "\\vb{A}_z(\\theta)",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.044em;\">z</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-159",
                    type: "text",
                    body: "represents a passive transformation, where the components of the same vector are expressed"
                  },
                  {
                    id: "text-160",
                    type: "text",
                    body: "in different bases, and the rotated reference system is turned by an angle "
                  },
                  {
                    id: "inlineMath-54",
                    type: "inlineMath",
                    body: "\\theta",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span></span></span></span>"
                  },
                  {
                    body: "counterclockwise",
                    id: "textbf-19",
                    type: "textbf"
                  },
                  {
                    id: "text-161",
                    type: "text",
                    body: "around the "
                  },
                  {
                    id: "inlineMath-55",
                    type: "inlineMath",
                    body: "z",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span></span></span></span>"
                  },
                  {
                    id: "text-162",
                    type: "text",
                    body: "-axis."
                  },
                  {
                    id: "text-163",
                    type: "text",
                    body: "When "
                  },
                  {
                    id: "inlineMath-56",
                    type: "inlineMath",
                    body: "\\vb{A}_z(\\theta)",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.044em;\">z</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-164",
                    type: "text",
                    body: "is interpreted in an "
                  },
                  {
                    body: "active",
                    id: "textbf-20",
                    type: "textbf"
                  },
                  {
                    id: "text-165",
                    type: "text",
                    body: "case, the rotation will be"
                  },
                  {
                    body: "clockwise",
                    id: "textbf-21",
                    type: "textbf"
                  },
                  {
                    id: "text-166",
                    type: "text",
                    body: "around the "
                  },
                  {
                    id: "inlineMath-57",
                    type: "inlineMath",
                    body: "z",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span></span></span></span>"
                  },
                  {
                    id: "text-167",
                    type: "text",
                    body: "-axis. This can be readily verified by considering the"
                  },
                  {
                    id: "text-168",
                    type: "text",
                    body: "effect of applying "
                  },
                  {
                    id: "inlineMath-58",
                    type: "inlineMath",
                    body: "\\vb{A}_z(\\theta)",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.044em;\">z</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-169",
                    type: "text",
                    body: "to a vector"
                  },
                  {
                    id: "inlineMath-59",
                    type: "inlineMath",
                    body: "\\vb{v} = (r\\cos\\phi,\\, r\\sin\\phi,\\, z)",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">r</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mop\">cos</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\">ϕ</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">r</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mop\">sin</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\">ϕ</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-170",
                    type: "text",
                    body: ","
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-56",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-18",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-13",
                    type: "displayMath",
                    body: "\\vb{A}_z(\\theta)\\,\\vb{v} =\n  \\begin{pmatrix}\n    \\cos\\theta  & \\sin\\theta & 0 \\\\\n    -\\sin\\theta & \\cos\\theta & 0 \\\\\n    0           & 0          & 1\n  \\end{pmatrix}\n  \\begin{pmatrix} r\\cos\\phi \\\\ r\\sin\\phi \\\\ z \\end{pmatrix}\n  =\n  \\begin{pmatrix} r\\cos(\\phi-\\theta) \\\\ r\\sin(\\phi-\\theta) \\\\ z \\end{pmatrix}",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.044em;\">z</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:3.6em;vertical-align:-1.55em;\"></span><span class=\"minner\"><span class=\"mopen\"><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.05em;\"><span class=\"pstrut\" style=\"height:5.6em;\"></span><span style=\"width:0.875em;height:3.6em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.875em\" height=\"3.6em\" viewBox=\"0 0 875 3600\"><path d=\"M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1\nc-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,\n-36,557 l0,84c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,\n949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9\nc0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,\n-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189\nl0,-92c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,\n-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.21em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mop\">cos</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span></span></span><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">−</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mop\">sin</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span></span></span><span style=\"top:-1.81em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.21em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mop\">sin</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span></span></span><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mop\">cos</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span></span></span><span style=\"top:-1.81em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.21em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span><span style=\"top:-1.81em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span></span><span class=\"mclose\"><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.05em;\"><span class=\"pstrut\" style=\"height:5.6em;\"></span><span style=\"width:0.875em;height:3.6em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.875em\" height=\"3.6em\" viewBox=\"0 0 875 3600\"><path d=\"M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,\n63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5\nc11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,9\nc-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664\nc-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11\nc0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17\nc242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558\nl0,-144c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,\n-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen\"><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.05em;\"><span class=\"pstrut\" style=\"height:5.6em;\"></span><span style=\"width:0.875em;height:3.6em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.875em\" height=\"3.6em\" viewBox=\"0 0 875 3600\"><path d=\"M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1\nc-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,\n-36,557 l0,84c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,\n949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9\nc0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,\n-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189\nl0,-92c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,\n-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.21em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">r</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mop\">cos</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\">ϕ</span></span></span><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">r</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mop\">sin</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\">ϕ</span></span></span><span style=\"top:-1.81em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span></span><span class=\"mclose\"><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.05em;\"><span class=\"pstrut\" style=\"height:5.6em;\"></span><span style=\"width:0.875em;height:3.6em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.875em\" height=\"3.6em\" viewBox=\"0 0 875 3600\"><path d=\"M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,\n63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5\nc11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,9\nc-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664\nc-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11\nc0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17\nc242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558\nl0,-144c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,\n-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:3.6em;vertical-align:-1.55em;\"></span><span class=\"minner\"><span class=\"mopen\"><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.05em;\"><span class=\"pstrut\" style=\"height:5.6em;\"></span><span style=\"width:0.875em;height:3.6em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.875em\" height=\"3.6em\" viewBox=\"0 0 875 3600\"><path d=\"M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1\nc-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,\n-36,557 l0,84c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,\n949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9\nc0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,\n-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189\nl0,-92c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,\n-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.21em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">r</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mop\">cos</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">ϕ</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span><span class=\"mclose\">)</span></span></span><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">r</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mop\">sin</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">ϕ</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span><span class=\"mclose\">)</span></span></span><span style=\"top:-1.81em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span></span><span class=\"mclose\"><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.05em;\"><span class=\"pstrut\" style=\"height:5.6em;\"></span><span style=\"width:0.875em;height:3.6em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.875em\" height=\"3.6em\" viewBox=\"0 0 875 3600\"><path d=\"M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,\n63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5\nc11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,9\nc-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664\nc-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11\nc0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17\nc242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558\nl0,-144c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,\n-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-57",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-43",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-171",
                    type: "text",
                    body: "which corresponds to decreasing the polar angle "
                  },
                  {
                    id: "inlineMath-60",
                    type: "inlineMath",
                    body: "\\phi",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\">ϕ</span></span></span></span>"
                  },
                  {
                    id: "text-172",
                    type: "text",
                    body: "by the angle "
                  },
                  {
                    id: "inlineMath-61",
                    type: "inlineMath",
                    body: "\\theta",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span></span></span></span>"
                  },
                  {
                    id: "text-173",
                    type: "text",
                    body: ". If the active"
                  },
                  {
                    id: "text-174",
                    type: "text",
                    body: "rotation in practical applications needs to be counterclockwise, the angle "
                  },
                  {
                    id: "inlineMath-62",
                    type: "inlineMath",
                    body: "\\theta",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span></span></span></span>"
                  },
                  {
                    id: "text-175",
                    type: "text",
                    body: "must be"
                  },
                  {
                    id: "text-176",
                    type: "text",
                    body: "negative."
                  },
                  {
                    id: "text-177",
                    type: "text",
                    body: "The rotation matrix around the "
                  },
                  {
                    id: "inlineMath-63",
                    type: "inlineMath",
                    body: "x",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">x</span></span></span></span>"
                  },
                  {
                    id: "text-178",
                    type: "text",
                    body: "-axis is given by,"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-58",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-19",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-14",
                    type: "displayMath",
                    body: "\\vb{A}_x(\\theta) =\n  \\begin{pmatrix}\n    1 & 0           & 0          \\\\\n    0 & \\cos\\theta  & \\sin\\theta \\\\\n    0 & -\\sin\\theta & \\cos\\theta\n  \\end{pmatrix}",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">x</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:3.6em;vertical-align:-1.55em;\"></span><span class=\"minner\"><span class=\"mopen\"><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.05em;\"><span class=\"pstrut\" style=\"height:5.6em;\"></span><span style=\"width:0.875em;height:3.6em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.875em\" height=\"3.6em\" viewBox=\"0 0 875 3600\"><path d=\"M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1\nc-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,\n-36,557 l0,84c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,\n949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9\nc0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,\n-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189\nl0,-92c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,\n-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.21em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">1</span></span></span><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span><span style=\"top:-1.81em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.21em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mop\">cos</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span></span></span><span style=\"top:-1.81em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">−</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mop\">sin</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.21em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mop\">sin</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span></span></span><span style=\"top:-1.81em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mop\">cos</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span></span><span class=\"mclose\"><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.05em;\"><span class=\"pstrut\" style=\"height:5.6em;\"></span><span style=\"width:0.875em;height:3.6em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.875em\" height=\"3.6em\" viewBox=\"0 0 875 3600\"><path d=\"M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,\n63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5\nc11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,9\nc-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664\nc-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11\nc0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17\nc242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558\nl0,-144c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,\n-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-59",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-44",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-179",
                    type: "text",
                    body: "and the one around the "
                  },
                  {
                    id: "inlineMath-64",
                    type: "inlineMath",
                    body: "y",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span></span></span></span>"
                  },
                  {
                    id: "text-180",
                    type: "text",
                    body: "-axis is given by,"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-60",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-20",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-15",
                    type: "displayMath",
                    body: "\\vb{A}_y(\\theta) =\n  \\begin{pmatrix}\n    \\cos\\theta  & 0 & \\sin\\theta \\\\\n    0           & 1 & 0          \\\\\n    -\\sin\\theta & 0 & \\cos\\theta\n  \\end{pmatrix}",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0361em;vertical-align:-0.2861em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0359em;\">y</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:3.6em;vertical-align:-1.55em;\"></span><span class=\"minner\"><span class=\"mopen\"><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.05em;\"><span class=\"pstrut\" style=\"height:5.6em;\"></span><span style=\"width:0.875em;height:3.6em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.875em\" height=\"3.6em\" viewBox=\"0 0 875 3600\"><path d=\"M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1\nc-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,\n-36,557 l0,84c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,\n949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9\nc0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,\n-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189\nl0,-92c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,\n-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.21em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mop\">cos</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span></span></span><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span><span style=\"top:-1.81em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">−</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mop\">sin</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.21em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">1</span></span></span><span style=\"top:-1.81em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.21em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mop\">sin</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span></span></span><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span><span style=\"top:-1.81em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mop\">cos</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span></span><span class=\"mclose\"><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.05em;\"><span class=\"pstrut\" style=\"height:5.6em;\"></span><span style=\"width:0.875em;height:3.6em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.875em\" height=\"3.6em\" viewBox=\"0 0 875 3600\"><path d=\"M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,\n63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5\nc11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,9\nc-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664\nc-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11\nc0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17\nc242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558\nl0,-144c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,\n-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "figure-1",
                    type: "figure",
                    src: "rotated1.png",
                    width: 1254,
                    height: 1254,
                    caption: {
                      id: "layoutInlineGroup-45",
                      type: "layoutInlineGroup",
                      children: [
                        {
                          id: "text-181",
                          type: "text",
                          body: "Fig~1: Rotation of an angle "
                        },
                        {
                          id: "inlineMath-65",
                          type: "inlineMath",
                          body: "\\theta",
                          html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span></span></span></span>"
                        },
                        {
                          id: "text-182",
                          type: "text",
                          body: "around the "
                        },
                        {
                          id: "inlineMath-66",
                          type: "inlineMath",
                          body: "z",
                          html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span></span></span></span>"
                        },
                        {
                          id: "text-183",
                          type: "text",
                          body: "axis."
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ],
          numbering: {
            path: [
              3,
              1,
              0
            ]
          }
        },
        {
          id: "subsection-2",
          type: "subsection",
          title: {
            id: "layoutInlineGroup-46",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-184",
                type: "text",
                body: "Rotation Around a General Axis"
              }
            ]
          },
          content: [
            {
              id: "contentLayoutGroup-61",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-47",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-185",
                    type: "text",
                    body: "The formula for a change of coordinates as a result of a rotation around an arbitrary axis"
                  },
                  {
                    id: "text-186",
                    type: "text",
                    body: "defined by the unit vector "
                  },
                  {
                    id: "inlineMath-67",
                    type: "inlineMath",
                    body: "\\vb{n} = (n_x, n_y, n_z)",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0361em;vertical-align:-0.2861em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">n</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">x</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">n</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0359em;\">y</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">n</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.044em;\">z</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-187",
                    type: "text",
                    body: ", with "
                  },
                  {
                    id: "inlineMath-68",
                    type: "inlineMath",
                    body: "\\ip{\\vb{n}}{\\vb{n}} = 1",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mclose\">⟩</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">1</span></span></span></span>"
                  },
                  {
                    id: "text-188",
                    type: "text",
                    body: "and an angle "
                  },
                  {
                    id: "inlineMath-69",
                    type: "inlineMath",
                    body: "\\theta",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span></span></span></span>"
                  },
                  {
                    id: "text-189",
                    type: "text",
                    body: ", is called the Rodrigues formula. While there are numerous"
                  },
                  {
                    id: "text-190",
                    type: "text",
                    body: "well-documented methods to derive this formula available in various resources, we will revisit"
                  },
                  {
                    id: "text-191",
                    type: "text",
                    body: "the derivation process, explaining the steps in detail."
                  },
                  {
                    id: "text-192",
                    type: "text",
                    body: "Our goal is to find the components of the rotated unit vectors "
                  },
                  {
                    id: "inlineMath-70",
                    type: "inlineMath",
                    body: "\\vb{e}'_i",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0106em;vertical-align:-0.2587em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-2.4413em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2587em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-193",
                    type: "text",
                    body: "in the reference"
                  },
                  {
                    id: "text-194",
                    type: "text",
                    body: "system "
                  },
                  {
                    id: "inlineMath-71",
                    type: "inlineMath",
                    body: "\\vb{e}_i",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-195",
                    type: "text",
                    body: "as a function of the components of the unit vector "
                  },
                  {
                    id: "inlineMath-72",
                    type: "inlineMath",
                    body: "\\vb{n}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span></span></span></span>"
                  },
                  {
                    id: "text-196",
                    type: "text",
                    body: "and the angle"
                  },
                  {
                    id: "inlineMath-73",
                    type: "inlineMath",
                    body: "\\theta",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span></span></span></span>"
                  },
                  {
                    id: "text-197",
                    type: "text",
                    body: ". These components will form the "
                  },
                  {
                    body: "rows",
                    id: "textbf-22",
                    type: "textbf"
                  },
                  {
                    id: "text-198",
                    type: "text",
                    body: "of the matrix describing the change of"
                  },
                  {
                    id: "text-199",
                    type: "text",
                    body: "coordinates."
                  },
                  {
                    id: "text-200",
                    type: "text",
                    body: "A unit vector "
                  },
                  {
                    id: "inlineMath-74",
                    type: "inlineMath",
                    body: "\\vb{e}_i",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-201",
                    type: "text",
                    body: "in the fixed reference system can be decomposed into the component"
                  },
                  {
                    id: "inlineMath-75",
                    type: "inlineMath",
                    body: "\\vb{e}_i^{||}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.3217em;vertical-align:-0.2769em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.0448em;\"><span style=\"top:-2.4231em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span><span style=\"top:-3.2198em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">∣∣</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2769em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-202",
                    type: "text",
                    body: "and "
                  },
                  {
                    id: "inlineMath-76",
                    type: "inlineMath",
                    body: "\\vb{e}_i^{\\perp}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.1078em;vertical-align:-0.2587em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8491em;\"><span style=\"top:-2.4413em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mrel mtight\">⊥</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2587em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-203",
                    type: "text",
                    body: "respectively parallel and perpendicular to "
                  },
                  {
                    id: "inlineMath-77",
                    type: "inlineMath",
                    body: "\\vb{n}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span></span></span></span>"
                  },
                  {
                    id: "text-204",
                    type: "text",
                    body: ":"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-62",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-21",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "align-1",
                    type: "align",
                    body: "\\vb{e}_i &= \\vb{e}_i^{||} + \\vb{e}_i^{\\perp} \\\\\n  \\vb{e}_i^{||} &= \\ip{\\vb{e}_i}{\\vb{n}}\\,\\vb{n} \\\\\n  \\vb{e}_i^{\\perp} &= \\vb{e}_i - \\vb{e}_i^{||} = \\vb{e}_i - \\ip{\\vb{e}_i}{\\vb{n}}\\,\\vb{n}",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:4.8144em;vertical-align:-2.1572em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-r\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.6572em;\"><span style=\"top:-4.6572em;\"><span class=\"pstrut\" style=\"height:3.0448em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-2.9524em;\"><span class=\"pstrut\" style=\"height:3.0448em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.0448em;\"><span style=\"top:-2.4231em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span><span style=\"top:-3.2198em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">∣∣</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2769em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-1.2476em;\"><span class=\"pstrut\" style=\"height:3.0448em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8991em;\"><span style=\"top:-2.453em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mrel mtight\">⊥</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.1572em;\"><span></span></span></span></span></span><span class=\"col-align-l\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.6572em;\"><span style=\"top:-4.6572em;\"><span class=\"pstrut\" style=\"height:3.0448em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.0448em;\"><span style=\"top:-2.4231em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span><span style=\"top:-3.2198em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">∣∣</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2769em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8991em;\"><span style=\"top:-2.453em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mrel mtight\">⊥</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-2.9524em;\"><span class=\"pstrut\" style=\"height:3.0448em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mclose\">⟩</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span></span></span><span style=\"top:-1.2476em;\"><span class=\"pstrut\" style=\"height:3.0448em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.0448em;\"><span style=\"top:-2.4231em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span><span style=\"top:-3.2198em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">∣∣</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2769em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mclose\">⟩</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.1572em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-63",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-48",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-205",
                    type: "text",
                    body: "The component "
                  },
                  {
                    id: "inlineMath-78",
                    type: "inlineMath",
                    body: "\\vb{e}_i^{||}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.3217em;vertical-align:-0.2769em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.0448em;\"><span style=\"top:-2.4231em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span><span style=\"top:-3.2198em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">∣∣</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2769em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-206",
                    type: "text",
                    body: "is parallel to the rotation axis, and it will not change under"
                  },
                  {
                    id: "text-207",
                    type: "text",
                    body: "the rotation. The component "
                  },
                  {
                    id: "inlineMath-79",
                    type: "inlineMath",
                    body: "\\vb{e}_i^{\\perp}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.1078em;vertical-align:-0.2587em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8491em;\"><span style=\"top:-2.4413em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mrel mtight\">⊥</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2587em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-208",
                    type: "text",
                    body: "is perpendicular to the rotation axis, and it"
                  },
                  {
                    id: "text-209",
                    type: "text",
                    body: "will rotate by an angle "
                  },
                  {
                    id: "inlineMath-80",
                    type: "inlineMath",
                    body: "\\theta",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span></span></span></span>"
                  },
                  {
                    id: "text-210",
                    type: "text",
                    body: "around the axis "
                  },
                  {
                    id: "inlineMath-81",
                    type: "inlineMath",
                    body: "\\vb{n}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span></span></span></span>"
                  },
                  {
                    id: "text-211",
                    type: "text",
                    body: ", into a new vector"
                  },
                  {
                    id: "inlineMath-82",
                    type: "inlineMath",
                    body: "\\vb{e}_i^{'\\perp}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.2011em;vertical-align:-0.2587em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9425em;\"><span style=\"top:-2.4413em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\"><span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8278em;\"><span style=\"top:-2.931em;margin-right:0.0714em;\"><span class=\"pstrut\" style=\"height:2.5em;\"></span><span class=\"sizing reset-size3 size1 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mrel mtight\">⊥</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2587em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-212",
                    type: "text",
                    body: ". Considering the unit vector along"
                  },
                  {
                    id: "inlineMath-83",
                    type: "inlineMath",
                    body: "\\vb{n} \\times \\vb{e}_i^{\\perp} = \\vb{n} \\times \\vb{e}_i",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.1078em;vertical-align:-0.2587em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8491em;\"><span style=\"top:-2.4413em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mrel mtight\">⊥</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2587em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-213",
                    type: "text",
                    body: ","
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-64",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-22",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-16",
                    type: "displayMath",
                    body: "\\frac{\\vb{n} \\times \\vb{e}_i^{\\perp}}{|\\vb{n} \\times \\vb{e}_i^{\\perp}|}\n  = \\frac{\\vb{n} \\times \\vb{e}_i}{|\\vb{n} \\times \\vb{e}_i|}",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.5239em;vertical-align:-0.9978em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.5261em;\"><span style=\"top:-2.2791em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8309em;\"><span style=\"top:-2.4231em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span><span style=\"top:-3.0448em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mrel mtight\">⊥</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2769em;\"><span></span></span></span></span></span></span><span class=\"mord\">∣</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8491em;\"><span style=\"top:-2.4413em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mrel mtight\">⊥</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2587em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9978em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.1963em;vertical-align:-0.936em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.2603em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mord\">∣</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.936em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-65",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-49",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-214",
                    type: "text",
                    body: "and "
                  },
                  {
                    id: "inlineMath-84",
                    type: "inlineMath",
                    body: "\\vb{e}_i^{\\perp}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.1078em;vertical-align:-0.2587em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8491em;\"><span style=\"top:-2.4413em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mrel mtight\">⊥</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2587em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-215",
                    type: "text",
                    body: ","
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-66",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-23",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-17",
                    type: "displayMath",
                    body: "\\frac{\\vb{e}_i^{\\perp}}{|\\vb{e}_i^{\\perp}|}\n  = \\frac{\\vb{e}_i - \\ip{\\vb{e}_i}{\\vb{n}}\\,\\vb{n}}{\\sqrt{1 - \\ip{\\vb{e}_i}{\\vb{n}}^2}}",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.5239em;vertical-align:-0.9978em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.5261em;\"><span style=\"top:-2.2791em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8309em;\"><span style=\"top:-2.4231em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span><span style=\"top:-3.0448em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mrel mtight\">⊥</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2769em;\"><span></span></span></span></span></span></span><span class=\"mord\">∣</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8491em;\"><span style=\"top:-2.4413em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mrel mtight\">⊥</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2587em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9978em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.557em;vertical-align:-1.13em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.427em;\"><span style=\"top:-2.175em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord sqrt\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.935em;\"><span class=\"svg-align\" style=\"top:-3.2em;\"><span class=\"pstrut\" style=\"height:3.2em;\"></span><span class=\"mord\" style=\"padding-left:1em;\"><span class=\"mord\">1</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mclose\"><span class=\"mclose\">⟩</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-2.895em;\"><span class=\"pstrut\" style=\"height:3.2em;\"></span><span class=\"hide-tail\" style=\"min-width:1.02em;height:1.28em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400em\" height=\"1.28em\" viewBox=\"0 0 400000 1296\" preserveAspectRatio=\"xMinYMin slice\"><path d=\"M263,681c0.7,0,18,39.7,52,119\nc34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120\nc340,-704.7,510.7,-1060.3,512,-1067\nl0 -0\nc4.7,-7.3,11,-11,19,-11\nH40000v40H1012.3\ns-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232\nc-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1\ns-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26\nc-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z\nM1001 80h400000v40h-400000z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.305em;\"><span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mclose\">⟩</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.13em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-67",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-50",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-216",
                    type: "text",
                    body: "applying the two-dimensional rotation formula in the plane orthogonal to "
                  },
                  {
                    id: "inlineMath-85",
                    type: "inlineMath",
                    body: "\\vb{n}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span></span></span></span>"
                  },
                  {
                    id: "text-217",
                    type: "text",
                    body: ", we can write the"
                  },
                  {
                    id: "text-218",
                    type: "text",
                    body: "rotated vector as,"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-68",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-24",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-18",
                    type: "displayMath",
                    body: "\\vb{e}_i^{'\\perp} =\n  \\left(\n    \\cos\\theta\\,\\frac{\\vb{e}_i - \\ip{\\vb{e}_i}{\\vb{n}}}{\\sqrt{1 - \\ip{\\vb{e}_i}{\\vb{n}}^2}}\n    - \\sin\\theta\\,\\frac{\\vb{n} \\times \\vb{e}_i}{|\\vb{n} \\times \\vb{e}_i|}\n  \\right)\\sqrt{1 - \\ip{\\vb{e}_i}{\\vb{n}}^2}",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.2395em;vertical-align:-0.247em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9925em;\"><span style=\"top:-2.453em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\"><span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8278em;\"><span style=\"top:-2.931em;margin-right:0.0714em;\"><span class=\"pstrut\" style=\"height:2.5em;\"></span><span class=\"sizing reset-size3 size1 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mrel mtight\">⊥</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:3em;vertical-align:-1.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size4\">(</span></span><span class=\"mop\">cos</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.427em;\"><span style=\"top:-2.175em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord sqrt\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.935em;\"><span class=\"svg-align\" style=\"top:-3.2em;\"><span class=\"pstrut\" style=\"height:3.2em;\"></span><span class=\"mord\" style=\"padding-left:1em;\"><span class=\"mord\">1</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mclose\"><span class=\"mclose\">⟩</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-2.895em;\"><span class=\"pstrut\" style=\"height:3.2em;\"></span><span class=\"hide-tail\" style=\"min-width:1.02em;height:1.28em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400em\" height=\"1.28em\" viewBox=\"0 0 400000 1296\" preserveAspectRatio=\"xMinYMin slice\"><path d=\"M263,681c0.7,0,18,39.7,52,119\nc34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120\nc340,-704.7,510.7,-1060.3,512,-1067\nl0 -0\nc4.7,-7.3,11,-11,19,-11\nH40000v40H1012.3\ns-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232\nc-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1\ns-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26\nc-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z\nM1001 80h400000v40h-400000z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.305em;\"><span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mclose\">⟩</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.13em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mop\">sin</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.2603em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mord\">∣</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.936em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size4\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord sqrt\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9839em;\"><span class=\"svg-align\" style=\"top:-3.2em;\"><span class=\"pstrut\" style=\"height:3.2em;\"></span><span class=\"mord\" style=\"padding-left:1em;\"><span class=\"mord\">1</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mclose\"><span class=\"mclose\">⟩</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-2.9439em;\"><span class=\"pstrut\" style=\"height:3.2em;\"></span><span class=\"hide-tail\" style=\"min-width:1.02em;height:1.28em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400em\" height=\"1.28em\" viewBox=\"0 0 400000 1296\" preserveAspectRatio=\"xMinYMin slice\"><path d=\"M263,681c0.7,0,18,39.7,52,119\nc34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120\nc340,-704.7,510.7,-1060.3,512,-1067\nl0 -0\nc4.7,-7.3,11,-11,19,-11\nH40000v40H1012.3\ns-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232\nc-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1\ns-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26\nc-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z\nM1001 80h400000v40h-400000z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2561em;\"><span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-69",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-51",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-219",
                    type: "text",
                    body: "as the norm of the vector "
                  },
                  {
                    id: "inlineMath-86",
                    type: "inlineMath",
                    body: "\\vb{e}_i^{\\perp}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.1078em;vertical-align:-0.2587em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8491em;\"><span style=\"top:-2.4413em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mrel mtight\">⊥</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2587em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-220",
                    type: "text",
                    body: "remains constant. The vector"
                  },
                  {
                    id: "inlineMath-87",
                    type: "inlineMath",
                    body: "\\vb{n} \\times \\vb{e}_i",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-221",
                    type: "text",
                    body: "contains only the components of "
                  },
                  {
                    id: "inlineMath-88",
                    type: "inlineMath",
                    body: "\\vb{n}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span></span></span></span>"
                  },
                  {
                    id: "text-222",
                    type: "text",
                    body: "of index different from"
                  },
                  {
                    id: "inlineMath-89",
                    type: "inlineMath",
                    body: "i",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6595em;\"></span><span class=\"mord mathnormal\">i</span></span></span></span>"
                  },
                  {
                    id: "text-223",
                    type: "text",
                    body: ", as it can be easily verified by the definition of the cross product,"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-70",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-25",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-19",
                    type: "displayMath",
                    body: "(\\vb{n} \\times \\vb{e}_i)_j = \\epsilon_{jkp}\\, n_k\\,(e_i)_p = \\epsilon_{jkp}\\, n_k\\,\\delta_{ip} = \\epsilon_{jki}\\, n_k",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0361em;vertical-align:-0.2861em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\"><span class=\"mclose\">)</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0572em;\">j</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0361em;vertical-align:-0.2861em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">ϵ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3361em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0572em;\">j</span><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0315em;\">k</span><span class=\"mord mathnormal mtight\">p</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">n</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3361em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0315em;\">k</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">e</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\"><span class=\"mclose\">)</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">p</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.9805em;vertical-align:-0.2861em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">ϵ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3361em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0572em;\">j</span><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0315em;\">k</span><span class=\"mord mathnormal mtight\">p</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">n</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3361em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0315em;\">k</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0379em;\">δ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:-0.0379em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">i</span><span class=\"mord mathnormal mtight\">p</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7167em;vertical-align:-0.2861em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">ϵ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3361em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0572em;\">j</span><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0315em;\">k</span><span class=\"mord mathnormal mtight\">i</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">n</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3361em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0315em;\">k</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-71",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-52",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-224",
                    type: "text",
                    body: "where "
                  },
                  {
                    id: "inlineMath-90",
                    type: "inlineMath",
                    body: "\\epsilon_{ijk}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7167em;vertical-align:-0.2861em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">ϵ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3361em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0572em;\">ij</span><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0315em;\">k</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-225",
                    type: "text",
                    body: "is the Levi-Civita tensor. The norm of the vector "
                  },
                  {
                    id: "inlineMath-91",
                    type: "inlineMath",
                    body: "\\vb{n} \\times \\vb{e}_i",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-226",
                    type: "text",
                    body: "is given by,"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-72",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-26",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "align-2",
                    type: "align",
                    body: "|\\vb{n} \\times \\vb{e}_i| &= \\sqrt{n_k^2 + n_p^2}, \\quad k, p \\neq i \\\\\n                            &= \\sqrt{1 - \\ip{\\vb{e}_i}{\\vb{n}}^2}",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:3.4839em;vertical-align:-1.4919em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-r\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.9919em;\"><span style=\"top:-3.9919em;\"><span class=\"pstrut\" style=\"height:3.2403em;\"></span><span class=\"mord\"><span class=\"mord\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mord\">∣</span></span></span><span style=\"top:-2.1083em;\"><span class=\"pstrut\" style=\"height:3.2403em;\"></span><span class=\"mord\"></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4919em;\"><span></span></span></span></span></span><span class=\"col-align-l\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.9919em;\"><span style=\"top:-3.9919em;\"><span class=\"pstrut\" style=\"height:3.2403em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord sqrt\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.2403em;\"><span class=\"svg-align\" style=\"top:-3.8em;\"><span class=\"pstrut\" style=\"height:3.8em;\"></span><span class=\"mord\" style=\"padding-left:1em;\"><span class=\"mord\"><span class=\"mord mathnormal\">n</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7959em;\"><span style=\"top:-2.3987em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0315em;\">k</span></span></span><span style=\"top:-3.0448em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3013em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">n</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">p</span></span></span><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3831em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-3.2003em;\"><span class=\"pstrut\" style=\"height:3.8em;\"></span><span class=\"hide-tail\" style=\"min-width:1.02em;height:1.88em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400em\" height=\"1.88em\" viewBox=\"0 0 400000 1944\" preserveAspectRatio=\"xMinYMin slice\"><path d=\"M983 90\nl0 -0\nc4,-6.7,10,-10,18,-10 H400000v40\nH1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7\ns-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744\nc-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30\nc26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722\nc56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5\nc53.7,-170.3,84.5,-266.8,92.5,-289.5z\nM1001 80h400000v40h-400000z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.5997em;\"><span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:1em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0315em;\">k</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\">p</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\"><span class=\"mrel\"><span class=\"mord vbox\"><span class=\"thinbox\"><span class=\"rlap\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"inner\"><span class=\"mord\"><span class=\"mrel\"></span></span></span><span class=\"fix\"></span></span></span></span></span><span class=\"mspace nobreak\"></span><span class=\"mrel\">=</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\">i</span></span></span><span style=\"top:-2.1083em;\"><span class=\"pstrut\" style=\"height:3.2403em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord sqrt\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9839em;\"><span class=\"svg-align\" style=\"top:-3.2em;\"><span class=\"pstrut\" style=\"height:3.2em;\"></span><span class=\"mord\" style=\"padding-left:1em;\"><span class=\"mord\">1</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mclose\"><span class=\"mclose\">⟩</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-2.9439em;\"><span class=\"pstrut\" style=\"height:3.2em;\"></span><span class=\"hide-tail\" style=\"min-width:1.02em;height:1.28em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400em\" height=\"1.28em\" viewBox=\"0 0 400000 1296\" preserveAspectRatio=\"xMinYMin slice\"><path d=\"M263,681c0.7,0,18,39.7,52,119\nc34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120\nc340,-704.7,510.7,-1060.3,512,-1067\nl0 -0\nc4.7,-7.3,11,-11,19,-11\nH40000v40H1012.3\ns-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232\nc-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1\ns-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26\nc-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z\nM1001 80h400000v40h-400000z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2561em;\"><span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4919em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-73",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-53",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-227",
                    type: "text",
                    body: "The components of the rotated unit vectors "
                  },
                  {
                    id: "inlineMath-92",
                    type: "inlineMath",
                    body: "\\vb{e}'_i",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0106em;vertical-align:-0.2587em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-2.4413em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2587em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-228",
                    type: "text",
                    body: "with respect to the reference frame"
                  },
                  {
                    id: "text-229",
                    type: "text",
                    body: "are then given by,"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-74",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-27",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-20",
                    type: "displayMath",
                    body: "\\vb{e}'_i = \\ip{\\vb{e}_i}{\\vb{n}}\\,\\vb{n}\n    +\\cos\\theta\\bigl(\n\\vb e_i\n-\n\\ip{\\vb e_i}{\\vb n}\\,\\vb n\n\\bigr)\n    + \\sin\\theta\\,(\\vb{e}_i \\times \\vb{n})",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0489em;vertical-align:-0.247em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mclose\">⟩</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mop\">cos</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mclose\">⟩</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mop\">sin</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mclose\">)</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-75",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-54",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-230",
                    type: "text",
                    body: "The matrix "
                  },
                  {
                    id: "inlineMath-93",
                    type: "inlineMath",
                    body: "\\vb{A}(\\vb{n}, \\theta)",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-231",
                    type: "text",
                    body: "which describes the transformation of a vector's"
                  },
                  {
                    id: "text-232",
                    type: "text",
                    body: "components with respect to a reference system rotated around an axis "
                  },
                  {
                    id: "inlineMath-94",
                    type: "inlineMath",
                    body: "\\vb{n}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span></span></span></span>"
                  },
                  {
                    id: "text-233",
                    type: "text",
                    body: "by an angle"
                  },
                  {
                    id: "inlineMath-95",
                    type: "inlineMath",
                    body: "\\theta",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span></span></span></span>"
                  },
                  {
                    id: "text-234",
                    type: "text",
                    body: ", is obtained by evaluating the above equation for each unit vector "
                  },
                  {
                    id: "inlineMath-96",
                    type: "inlineMath",
                    body: "\\vb{e}_i",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-235",
                    type: "text",
                    body: "in"
                  },
                  {
                    id: "text-236",
                    type: "text",
                    body: "the reference system. The components of the vectors "
                  },
                  {
                    id: "inlineMath-97",
                    type: "inlineMath",
                    body: "\\vb{e}'_i",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0106em;vertical-align:-0.2587em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-2.4413em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2587em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-237",
                    type: "text",
                    body: "with respect to "
                  },
                  {
                    id: "inlineMath-98",
                    type: "inlineMath",
                    body: "\\vb{e}_i",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-238",
                    type: "text",
                    body: "are the rows of the matrix "
                  },
                  {
                    id: "inlineMath-99",
                    type: "inlineMath",
                    body: "\\vb{A}(\\vb{n}, \\theta)",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-239",
                    type: "text",
                    body: ":"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-76",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-28",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "equation-2",
                    type: "equation",
                    body: "\\vb{A}(\\vb{n},\\theta) = \\cos(\\theta)\\,\\vb{I} + (1-\\cos(\\theta))\\ket{\\vb{n}}\\bra{\\vb{n}}\n    + \\sin(\\theta)\\,(\\cdot) \\times \\vb{n}",
                    label: "kinematics:rodrigues-formula",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.85em;\"><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mop\">cos</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">I</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mopen\">(</span><span class=\"mord\">1</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mop\">cos</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span><span class=\"mclose\">))</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mop\">sin</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mopen\">(</span><span class=\"mord\">⋅</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.35em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-77",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-55",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-240",
                    type: "text",
                    body: "where "
                  },
                  {
                    id: "inlineMath-100",
                    type: "inlineMath",
                    body: "(\\cdot)",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\">⋅</span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-241",
                    type: "text",
                    body: "is the placeholder for a vector. The three terms respectively leave unchanged the component parallel to"
                  },
                  {
                    id: "text-242",
                    type: "text",
                    body: "the rotation axis, rotate the perpendicular component, and generate the component orthogonal to both."
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-78",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-56",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-243",
                    type: "text",
                    body: "The explicit matrix form of the equation above is,"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-79",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-29",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-21",
                    type: "displayMath",
                    body: "\\vb{A}(\\vb{n},\\theta) =\n  \\begin{pmatrix}\n    n_x^2(1-\\cos\\theta)+\\cos\\theta        & n_x n_y(1-\\cos\\theta)+n_z\\sin\\theta   & n_x n_z(1-\\cos\\theta)-n_y\\sin\\theta \\\\\n    n_y n_x(1-\\cos\\theta)-n_z\\sin\\theta   & n_y^2(1-\\cos\\theta)+\\cos\\theta        & n_y n_z(1-\\cos\\theta)+n_x\\sin\\theta \\\\\n    n_z n_x(1-\\cos\\theta)+n_y\\sin\\theta   & n_z n_y(1-\\cos\\theta)-n_x\\sin\\theta   & n_z^2(1-\\cos\\theta)+\\cos\\theta\n  \\end{pmatrix}",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:3.6231em;vertical-align:-1.5616em;\"></span><span class=\"minner\"><span class=\"mopen\"><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.05em;\"><span class=\"pstrut\" style=\"height:5.6em;\"></span><span style=\"width:0.875em;height:3.6em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.875em\" height=\"3.6em\" viewBox=\"0 0 875 3600\"><path d=\"M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1\nc-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,\n-36,557 l0,84c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,\n949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9\nc0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,\n-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189\nl0,-92c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,\n-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.0616em;\"><span style=\"top:-4.2216em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">n</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">x</span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord\">1</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mop\">cos</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mop\">cos</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span></span></span><span style=\"top:-3.0216em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">n</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0359em;\">y</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord mathnormal\">n</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">x</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord\">1</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mop\">cos</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">n</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.044em;\">z</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mop\">sin</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span></span></span><span style=\"top:-1.7984em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">n</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.044em;\">z</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord mathnormal\">n</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">x</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord\">1</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mop\">cos</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">n</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0359em;\">y</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mop\">sin</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.5616em;\"><span></span></span></span></span></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.0616em;\"><span style=\"top:-4.2216em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">n</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">x</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord mathnormal\">n</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0359em;\">y</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord\">1</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mop\">cos</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">n</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.044em;\">z</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mop\">sin</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span></span></span><span style=\"top:-3.0216em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">n</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0359em;\">y</span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3831em;\"><span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord\">1</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mop\">cos</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mop\">cos</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span></span></span><span style=\"top:-1.7984em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">n</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.044em;\">z</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord mathnormal\">n</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0359em;\">y</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord\">1</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mop\">cos</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">n</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">x</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mop\">sin</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.5616em;\"><span></span></span></span></span></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.0616em;\"><span style=\"top:-4.2216em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">n</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">x</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord mathnormal\">n</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.044em;\">z</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord\">1</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mop\">cos</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">n</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0359em;\">y</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mop\">sin</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span></span></span><span style=\"top:-3.0216em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">n</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0359em;\">y</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord mathnormal\">n</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.044em;\">z</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord\">1</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mop\">cos</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">n</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">x</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mop\">sin</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span></span></span><span style=\"top:-1.7984em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">n</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.044em;\">z</span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord\">1</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mop\">cos</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mop\">cos</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.5616em;\"><span></span></span></span></span></span></span></span><span class=\"mclose\"><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.05em;\"><span class=\"pstrut\" style=\"height:5.6em;\"></span><span style=\"width:0.875em;height:3.6em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.875em\" height=\"3.6em\" viewBox=\"0 0 875 3600\"><path d=\"M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,\n63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5\nc11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,9\nc-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664\nc-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11\nc0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17\nc242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558\nl0,-144c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,\n-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-80",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-57",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-244",
                    type: "text",
                    body: "It is important to emphasize again that the above transformation represents a passive"
                  },
                  {
                    id: "text-245",
                    type: "text",
                    body: "rotation, meaning that the components of the same vector are expressed in different bases."
                  },
                  {
                    id: "text-246",
                    type: "text",
                    body: "The same matrix, if interpreted as an active transformation, corresponds to the inverse rotation."
                  }
                ]
              }
            }
          ],
          numbering: {
            path: [
              3,
              2,
              0
            ]
          }
        }
      ],
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
      title: {
        id: "layoutInlineGroup-58",
        type: "layoutInlineGroup",
        children: [
          {
            id: "text-247",
            type: "text",
            body: "Infinitesimal Rotations"
          }
        ]
      },
      intro: [],
      subsections: [
        {
          id: "subsection-3",
          type: "subsection",
          title: {
            id: "layoutInlineGroup-59",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-248",
                type: "text",
                body: "Definition"
              }
            ]
          },
          content: [
            {
              id: "contentLayoutGroup-81",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-60",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-249",
                    type: "text",
                    body: "In the previous section, we demonstrated that a rotation in three dimensions can be uniquely"
                  },
                  {
                    id: "text-250",
                    type: "text",
                    body: "identified by a unit vector "
                  },
                  {
                    id: "inlineMath-101",
                    type: "inlineMath",
                    body: "\\vb{n}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span></span></span></span>"
                  },
                  {
                    id: "text-251",
                    type: "text",
                    body: "and an angle "
                  },
                  {
                    id: "inlineMath-102",
                    type: "inlineMath",
                    body: "\\theta",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span></span></span></span>"
                  },
                  {
                    id: "text-252",
                    type: "text",
                    body: "."
                  },
                  {
                    id: "text-253",
                    type: "text",
                    body: "It is natural to ask"
                  },
                  {
                    id: "text-254",
                    type: "text",
                    body: "whether the group of orthogonal matrices "
                  },
                  {
                    id: "inlineMath-103",
                    type: "inlineMath",
                    body: "SO(3)",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">O</span><span class=\"mopen\">(</span><span class=\"mord\">3</span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-255",
                    type: "text",
                    body: ", is isomorphic to the vector space"
                  },
                  {
                    id: "inlineMath-104",
                    type: "inlineMath",
                    body: "\\mathbb{R}^3",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8141em;\"></span><span class=\"mord\"><span class=\"mord mathbb\">R</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-256",
                    type: "text",
                    body: ". This choice is motivated by the fact that every rotation in three dimensions has only three degrees of"
                  },
                  {
                    id: "text-257",
                    type: "text",
                    body: "fredome:  the two independent components of the  rotation axis, and the rotation angle."
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-82",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-61",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-258",
                    type: "text",
                    body: "There are several obstacles with defining properly such a isomorphism, as we will soon see, but we will first start by assuming"
                  },
                  {
                    id: "text-259",
                    type: "text",
                    body: "simply that such a an isomorphism "
                  },
                  {
                    id: "inlineMath-105",
                    type: "inlineMath",
                    body: "f",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span></span></span></span>"
                  },
                  {
                    id: "text-260",
                    type: "text",
                    body: "exists, between the group "
                  },
                  {
                    id: "inlineMath-106",
                    type: "inlineMath",
                    body: "SO(3)",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">O</span><span class=\"mopen\">(</span><span class=\"mord\">3</span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-261",
                    type: "text",
                    body: "with matrix multiplication"
                  },
                  {
                    id: "text-262",
                    type: "text",
                    body: "and the group "
                  },
                  {
                    id: "inlineMath-107",
                    type: "inlineMath",
                    body: "\\mathbb{R}^3",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8141em;\"></span><span class=\"mord\"><span class=\"mord mathbb\">R</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-263",
                    type: "text",
                    body: "with the the regular vector addition:"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-83",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-30",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-22",
                    type: "displayMath",
                    body: "f: SO(3) \\to \\mathbb{R}^3",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">:</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">O</span><span class=\"mopen\">(</span><span class=\"mord\">3</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">→</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8641em;\"></span><span class=\"mord\"><span class=\"mord mathbb\">R</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-84",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-62",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-264",
                    type: "text",
                    body: "For such an isomorphism to exist, it must be a single-valued function, it must preserve the group operation:"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-85",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-31",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-23",
                    type: "displayMath",
                    body: "f(\\vb{A}\\vb{B}) = f(\\vb{A}) + f(\\vb{B})",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mord text\"><span class=\"mord textbf\">B</span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">B</span></span><span class=\"mclose\">)</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-86",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-63",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-265",
                    type: "text",
                    body: "and it has to be one-to-one and surjective. The one-to-one conditions requires that,"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-87",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-32",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-24",
                    type: "displayMath",
                    body: "\\forall\\; \\vb{R}_1, \\vb{R}_2 \\in SO(3),\\quad\n  f(\\vb{R}_1) = f(\\vb{R}_2) \\implies \\vb{R}_1 = \\vb{R}_2.",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord\">∀</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">R</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">R</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">O</span><span class=\"mopen\">(</span><span class=\"mord\">3</span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:1em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">R</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">R</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">⟹</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8361em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">R</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8361em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">R</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mord\">.</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-88",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-64",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-266",
                    type: "text",
                    body: "Considering two rotations "
                  },
                  {
                    id: "inlineMath-108",
                    type: "inlineMath",
                    body: "\\vb{A} \\in SO(3)",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7252em;vertical-align:-0.0391em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">O</span><span class=\"mopen\">(</span><span class=\"mord\">3</span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-267",
                    type: "text",
                    body: "and "
                  },
                  {
                    id: "inlineMath-109",
                    type: "inlineMath",
                    body: "\\vb{B} \\in SO(3)",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7252em;vertical-align:-0.0391em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">B</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">O</span><span class=\"mopen\">(</span><span class=\"mord\">3</span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-268",
                    type: "text",
                    body: ", we know that rotations"
                  },
                  {
                    id: "text-269",
                    type: "text",
                    body: "do not commute,"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-89",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-33",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-25",
                    type: "displayMath",
                    body: "\\vb{A}\\vb{B} \\neq \\vb{B}\\vb{A}",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mord text\"><span class=\"mord textbf\">B</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\"><span class=\"mrel\"><span class=\"mord vbox\"><span class=\"thinbox\"><span class=\"rlap\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"inner\"><span class=\"mord\"><span class=\"mrel\"></span></span></span><span class=\"fix\"></span></span></span></span></span><span class=\"mspace nobreak\"></span><span class=\"mrel\">=</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6861em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">B</span></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-90",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-65",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-270",
                    type: "text",
                    body: "However, their images under the mapping "
                  },
                  {
                    id: "inlineMath-110",
                    type: "inlineMath",
                    body: "f",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span></span></span></span>"
                  },
                  {
                    id: "text-271",
                    type: "text",
                    body: "are the same,"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-91",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-34",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-26",
                    type: "displayMath",
                    body: "f(\\vb{A}\\vb{B}) = f(\\vb{A}) + f(\\vb{B}) = f(\\vb{B}) + f(\\vb{A}) = f(\\vb{B}\\vb{A})",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mord text\"><span class=\"mord textbf\">B</span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">B</span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">B</span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">B</span></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mclose\">)</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-92",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-66",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-272",
                    type: "text",
                    body: "due to the commutativity of the vector space "
                  },
                  {
                    id: "inlineMath-111",
                    type: "inlineMath",
                    body: "\\mathbb{R}^3",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8141em;\"></span><span class=\"mord\"><span class=\"mord mathbb\">R</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-273",
                    type: "text",
                    body: ". Thus, it is evident that such a"
                  },
                  {
                    id: "text-274",
                    type: "text",
                    body: "mapping cannot be one-to-one. Therefore, since the group "
                  },
                  {
                    id: "inlineMath-112",
                    type: "inlineMath",
                    body: "SO(3)",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">O</span><span class=\"mopen\">(</span><span class=\"mord\">3</span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-275",
                    type: "text",
                    body: "is not commutative, whereas the group"
                  },
                  {
                    id: "inlineMath-113",
                    type: "inlineMath",
                    body: "(\\mathbb{R}^3,+)",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0641em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathbb\">R</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">+</span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-276",
                    type: "text",
                    body: "is commutative, no group isomorphism between the two can exist. "
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-93",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-67",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-277",
                    type: "text",
                    body: "We must consider a different approach and we will now introduce the concept of infinitesimal"
                  },
                  {
                    id: "text-278",
                    type: "text",
                    body: "rotations, which are rotations that commute to the first order."
                  },
                  {
                    id: "text-279",
                    type: "text",
                    body: "Let us consider two rotation matrices "
                  },
                  {
                    id: "inlineMath-114",
                    type: "inlineMath",
                    body: "\\vb{A}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6861em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span></span></span></span>"
                  },
                  {
                    id: "text-280",
                    type: "text",
                    body: "and "
                  },
                  {
                    id: "inlineMath-115",
                    type: "inlineMath",
                    body: "\\vb{B}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6861em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">B</span></span></span></span></span>"
                  },
                  {
                    id: "text-281",
                    type: "text",
                    body: "such that,"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-94",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-35",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "align-3",
                    type: "align",
                    body: "\\vb{A} &= \\vb{I} + \\epsilon_1 \\\\\n  \\vb{B} &= \\vb{I} + \\epsilon_2",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.7em;vertical-align:-1.1em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-r\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.6em;\"><span style=\"top:-3.76em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span></span></span><span style=\"top:-2.26em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">B</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1em;\"><span></span></span></span></span></span><span class=\"col-align-l\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.6em;\"><span style=\"top:-3.76em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">I</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">ϵ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-2.26em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">I</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">ϵ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-95",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-68",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-282",
                    type: "text",
                    body: "where "
                  },
                  {
                    id: "inlineMath-116",
                    type: "inlineMath",
                    body: "\\epsilon_1",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5806em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">ϵ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-283",
                    type: "text",
                    body: "and "
                  },
                  {
                    id: "inlineMath-117",
                    type: "inlineMath",
                    body: "\\epsilon_2",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5806em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">ϵ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-284",
                    type: "text",
                    body: "are infinitesimal matrices such that"
                  },
                  {
                    id: "text-285",
                    type: "text",
                    body: "products of infinitesimal quantities are neglected. The product of "
                  },
                  {
                    id: "inlineMath-118",
                    type: "inlineMath",
                    body: "\\vb{A}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6861em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span></span></span></span>"
                  },
                  {
                    id: "text-286",
                    type: "text",
                    body: "and "
                  },
                  {
                    id: "inlineMath-119",
                    type: "inlineMath",
                    body: "\\vb{B}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6861em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">B</span></span></span></span></span>"
                  },
                  {
                    id: "text-287",
                    type: "text",
                    body: "is,"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-96",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-36",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-27",
                    type: "displayMath",
                    body: "\\vb{A}\\vb{B} = (\\vb{I}+\\epsilon_1)(\\vb{I}+\\epsilon_2) = \\vb{I} + \\epsilon_1 + \\epsilon_2 + \\epsilon_1\\epsilon_2 = \\vb{I} + \\epsilon_1 + \\epsilon_2",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6861em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mord text\"><span class=\"mord textbf\">B</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">I</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">ϵ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">I</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">ϵ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7694em;vertical-align:-0.0833em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">I</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7333em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">ϵ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7333em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">ϵ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.5806em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">ϵ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord mathnormal\">ϵ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7694em;vertical-align:-0.0833em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">I</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7333em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">ϵ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.5806em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">ϵ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-97",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-69",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-288",
                    type: "text",
                    body: "which is the same as the product of "
                  },
                  {
                    id: "inlineMath-120",
                    type: "inlineMath",
                    body: "\\vb{B}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6861em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">B</span></span></span></span></span>"
                  },
                  {
                    id: "text-289",
                    type: "text",
                    body: "and "
                  },
                  {
                    id: "inlineMath-121",
                    type: "inlineMath",
                    body: "\\vb{A}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6861em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span></span></span></span>"
                  },
                  {
                    id: "text-290",
                    type: "text",
                    body: ". Hence, for so-called infinitesimal"
                  },
                  {
                    id: "text-291",
                    type: "text",
                    body: "rotations, the commutativity property holds."
                  },
                  {
                    id: "text-292",
                    type: "text",
                    body: "For a general infinitesimal rotation "
                  },
                  {
                    id: "inlineMath-122",
                    type: "inlineMath",
                    body: "\\vb{A} = \\vb{I} + \\epsilon",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6861em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7694em;vertical-align:-0.0833em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">I</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">ϵ</span></span></span></span>"
                  },
                  {
                    id: "text-293",
                    type: "text",
                    body: ", the orthogonal condition"
                  },
                  {
                    id: "inlineMath-123",
                    type: "inlineMath",
                    body: "\\vb{A}^T\\vb{A} = \\vb{I}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.9173em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9173em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.1389em;\">T</span></span></span></span></span></span></span></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6861em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">I</span></span></span></span></span>"
                  },
                  {
                    id: "text-294",
                    type: "text",
                    body: "implies that the matrix "
                  },
                  {
                    id: "inlineMath-124",
                    type: "inlineMath",
                    body: "\\epsilon",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">ϵ</span></span></span></span>"
                  },
                  {
                    id: "text-295",
                    type: "text",
                    body: "is skew-symmetric, as it"
                  },
                  {
                    id: "text-296",
                    type: "text",
                    body: "satisfies the property"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-98",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-37",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-28",
                    type: "displayMath",
                    body: "\\epsilon^\\top = -\\epsilon.",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8991em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">ϵ</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8991em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord\">−</span><span class=\"mord mathnormal\">ϵ</span><span class=\"mord\">.</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-99",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-70",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-297",
                    type: "text",
                    body: "A skew-symmetric matrix has zero diagonal elements, and the off-diagonal elements satisfy the"
                  },
                  {
                    id: "text-298",
                    type: "text",
                    body: "property "
                  },
                  {
                    id: "inlineMath-125",
                    type: "inlineMath",
                    body: "\\epsilon_{ij} = -\\epsilon_{ji}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7167em;vertical-align:-0.2861em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">ϵ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0572em;\">ij</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8694em;vertical-align:-0.2861em;\"></span><span class=\"mord\">−</span><span class=\"mord\"><span class=\"mord mathnormal\">ϵ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0572em;\">j</span><span class=\"mord mathnormal mtight\">i</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-299",
                    type: "text",
                    body: ", and assumes the general form,"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-100",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-38",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-29",
                    type: "displayMath",
                    body: "\\epsilon =\n  \\begin{pmatrix}\n    0           &  d\\Omega_3 & -d\\Omega_2 \\\\\n    -d\\Omega_3  &  0         &  d\\Omega_1 \\\\\n    d\\Omega_2   & -d\\Omega_1 &  0\n  \\end{pmatrix}",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">ϵ</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:3.6em;vertical-align:-1.55em;\"></span><span class=\"minner\"><span class=\"mopen\"><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.05em;\"><span class=\"pstrut\" style=\"height:5.6em;\"></span><span style=\"width:0.875em;height:3.6em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.875em\" height=\"3.6em\" viewBox=\"0 0 875 3600\"><path d=\"M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1\nc-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,\n-36,557 l0,84c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,\n949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9\nc0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,\n-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189\nl0,-92c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,\n-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.21em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">−</span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\">Ω</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-1.81em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\">Ω</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.21em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\">Ω</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span><span style=\"top:-1.81em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">−</span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\">Ω</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.21em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">−</span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\">Ω</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\">Ω</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-1.81em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span></span><span class=\"mclose\"><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.05em;\"><span class=\"pstrut\" style=\"height:5.6em;\"></span><span style=\"width:0.875em;height:3.6em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.875em\" height=\"3.6em\" viewBox=\"0 0 875 3600\"><path d=\"M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,\n63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5\nc11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,9\nc-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664\nc-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11\nc0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17\nc242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558\nl0,-144c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,\n-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-101",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-71",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-300",
                    type: "text",
                    body: "A change of coordinates of a vector "
                  },
                  {
                    id: "inlineMath-126",
                    type: "inlineMath",
                    body: "\\vb{r}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">r</span></span></span></span></span>"
                  },
                  {
                    id: "text-301",
                    type: "text",
                    body: "under an infinitesimal rotation"
                  },
                  {
                    id: "inlineMath-127",
                    type: "inlineMath",
                    body: "\\vb{A} = \\vb{I} + \\epsilon",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6861em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7694em;vertical-align:-0.0833em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">I</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">ϵ</span></span></span></span>"
                  },
                  {
                    id: "text-302",
                    type: "text",
                    body: "is given by,"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-102",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-39",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-30",
                    type: "displayMath",
                    body: "\\vb{r}' = \\vb{A}\\vb{r} = (\\vb{I} + \\epsilon)\\vb{r} = \\vb{r} + \\epsilon\\vb{r}\n           = \\vb{r} + \\vb{r} \\times \\boldsymbol{d\\Omega}",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8019em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6861em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">I</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">ϵ</span><span class=\"mclose\">)</span><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord mathnormal\">ϵ</span><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\">d</span><span class=\"mord mathbf\">Ω</span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-103",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-72",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-303",
                    type: "text",
                    body: "as it can be readily verified that,"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-104",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-40",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-31",
                    type: "displayMath",
                    body: "\\epsilon\\vb{r} =\n  \\begin{pmatrix}\n    0           &  d\\Omega_3 & -d\\Omega_2 \\\\\n    -d\\Omega_3  &  0         &  d\\Omega_1 \\\\\n    d\\Omega_2   & -d\\Omega_1 &  0\n  \\end{pmatrix}\n  \\begin{pmatrix} x \\\\ y \\\\ z \\end{pmatrix}\n  =\n  \\begin{pmatrix}\n    d\\Omega_3 y - d\\Omega_2 z \\\\\n    -d\\Omega_3 x + d\\Omega_1 z \\\\\n    d\\Omega_2 x - d\\Omega_1 y\n  \\end{pmatrix}\n  = \\vb{r} \\times d\\boldsymbol{\\Omega}",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord mathnormal\">ϵ</span><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:3.6em;vertical-align:-1.55em;\"></span><span class=\"minner\"><span class=\"mopen\"><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.05em;\"><span class=\"pstrut\" style=\"height:5.6em;\"></span><span style=\"width:0.875em;height:3.6em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.875em\" height=\"3.6em\" viewBox=\"0 0 875 3600\"><path d=\"M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1\nc-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,\n-36,557 l0,84c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,\n949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9\nc0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,\n-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189\nl0,-92c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,\n-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.21em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">−</span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\">Ω</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-1.81em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\">Ω</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.21em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\">Ω</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span><span style=\"top:-1.81em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">−</span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\">Ω</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.21em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">−</span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\">Ω</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\">Ω</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-1.81em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span></span><span class=\"mclose\"><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.05em;\"><span class=\"pstrut\" style=\"height:5.6em;\"></span><span style=\"width:0.875em;height:3.6em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.875em\" height=\"3.6em\" viewBox=\"0 0 875 3600\"><path d=\"M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,\n63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5\nc11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,9\nc-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664\nc-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11\nc0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17\nc242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558\nl0,-144c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,\n-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen\"><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.05em;\"><span class=\"pstrut\" style=\"height:5.6em;\"></span><span style=\"width:0.875em;height:3.6em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.875em\" height=\"3.6em\" viewBox=\"0 0 875 3600\"><path d=\"M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1\nc-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,\n-36,557 l0,84c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,\n949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9\nc0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,\n-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189\nl0,-92c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,\n-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.21em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span></span></span><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span></span></span><span style=\"top:-1.81em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span></span><span class=\"mclose\"><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.05em;\"><span class=\"pstrut\" style=\"height:5.6em;\"></span><span style=\"width:0.875em;height:3.6em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.875em\" height=\"3.6em\" viewBox=\"0 0 875 3600\"><path d=\"M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,\n63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5\nc11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,9\nc-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664\nc-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11\nc0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17\nc242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558\nl0,-144c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,\n-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:3.6em;vertical-align:-1.55em;\"></span><span class=\"minner\"><span class=\"mopen\"><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.05em;\"><span class=\"pstrut\" style=\"height:5.6em;\"></span><span style=\"width:0.875em;height:3.6em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.875em\" height=\"3.6em\" viewBox=\"0 0 875 3600\"><path d=\"M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1\nc-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,\n-36,557 l0,84c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,\n949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9\nc0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,\n-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189\nl0,-92c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,\n-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.21em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\">Ω</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\">Ω</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span></span></span><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">−</span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\">Ω</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mord mathnormal\">x</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\">Ω</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span></span></span><span style=\"top:-1.81em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\">Ω</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mord mathnormal\">x</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\">Ω</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span></span><span class=\"mclose\"><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.05em;\"><span class=\"pstrut\" style=\"height:5.6em;\"></span><span style=\"width:0.875em;height:3.6em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.875em\" height=\"3.6em\" viewBox=\"0 0 875 3600\"><path d=\"M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,\n63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5\nc11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,9\nc-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664\nc-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11\nc0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17\nc242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558\nl0,-144c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,\n-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Ω</span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-105",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-73",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-304",
                    type: "text",
                    body: "where "
                  },
                  {
                    id: "inlineMath-128",
                    type: "inlineMath",
                    body: "\\vb{r} = (x,y,z)",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-305",
                    type: "text",
                    body: "and "
                  },
                  {
                    id: "inlineMath-129",
                    type: "inlineMath",
                    body: "d\\boldsymbol{\\Omega} = (d\\Omega_1, d\\Omega_2, d\\Omega_3)",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\">Ω</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\">Ω</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\">Ω</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-306",
                    type: "text",
                    body: "."
                  },
                  {
                    id: "text-307",
                    type: "text",
                    body: "The infinitesimal vector "
                  },
                  {
                    id: "inlineMath-130",
                    type: "inlineMath",
                    body: "d\\boldsymbol{\\Omega}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Ω</span></span></span></span></span></span>"
                  },
                  {
                    id: "text-308",
                    type: "text",
                    body: "therefore completely characterizes the infinitesimal rotation."
                  },
                  {
                    id: "text-309",
                    type: "text",
                    body: "Since infinitesimal rotations commute to first order, the obstruction encountered for finite"
                  },
                  {
                    id: "text-310",
                    type: "text",
                    body: "rotations disappears. It is therefore possible to identify each infinitesimal rotation"
                  },
                  {
                    id: "text-311",
                    type: "text",
                    body: "uniquely with a vector in "
                  },
                  {
                    id: "inlineMath-131",
                    type: "inlineMath",
                    body: "\\mathbb{R}^3",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8141em;\"></span><span class=\"mord\"><span class=\"mord mathbb\">R</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-312",
                    type: "text",
                    body: "."
                  },
                  {
                    id: "text-313",
                    type: "text",
                    body: "We now evaluate the form of the matrix "
                  },
                  {
                    id: "eqref-1",
                    type: "eqref",
                    body: "kinematics:rodrigues-formula"
                  },
                  {
                    id: "text-314",
                    type: "text",
                    body: "for a value of the angle"
                  },
                  {
                    id: "inlineMath-132",
                    type: "inlineMath",
                    body: "\\theta",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span></span></span></span>"
                  },
                  {
                    id: "text-315",
                    type: "text",
                    body: "that is infinitesimally small. We find that the matrix is given by,"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-106",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-41",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-32",
                    type: "displayMath",
                    body: "\\vb{R}(\\vb{n}, d\\theta) = \\vb{I} + d\\theta\n  \\begin{pmatrix}\n    0     &  n_z  & -n_y \\\\\n    -n_z  &  0    &  n_x \\\\\n    n_y   & -n_x  &  0\n  \\end{pmatrix}",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">R</span></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7694em;vertical-align:-0.0833em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">I</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:3.6em;vertical-align:-1.55em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen\"><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.05em;\"><span class=\"pstrut\" style=\"height:5.6em;\"></span><span style=\"width:0.875em;height:3.6em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.875em\" height=\"3.6em\" viewBox=\"0 0 875 3600\"><path d=\"M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1\nc-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,\n-36,557 l0,84c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,\n949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9\nc0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,\n-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189\nl0,-92c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,\n-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.21em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">−</span><span class=\"mord\"><span class=\"mord mathnormal\">n</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.044em;\">z</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-1.81em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">n</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0359em;\">y</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.21em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">n</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.044em;\">z</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span><span style=\"top:-1.81em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">−</span><span class=\"mord\"><span class=\"mord mathnormal\">n</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">x</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.21em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">−</span><span class=\"mord\"><span class=\"mord mathnormal\">n</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0359em;\">y</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">n</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">x</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-1.81em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span></span><span class=\"mclose\"><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.05em;\"><span class=\"pstrut\" style=\"height:5.6em;\"></span><span style=\"width:0.875em;height:3.6em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.875em\" height=\"3.6em\" viewBox=\"0 0 875 3600\"><path d=\"M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,\n63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5\nc11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,9\nc-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664\nc-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11\nc0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17\nc242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558\nl0,-144c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,\n-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-107",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-74",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-316",
                    type: "text",
                    body: "This allows us to identify,"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-108",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-42",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-33",
                    type: "displayMath",
                    body: "\\epsilon = d\\theta\n  \\begin{pmatrix}\n    0     &  n_z  & -n_y \\\\\n    -n_z  &  0    &  n_x \\\\\n    n_y   & -n_x  &  0\n  \\end{pmatrix}",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">ϵ</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:3.6em;vertical-align:-1.55em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen\"><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.05em;\"><span class=\"pstrut\" style=\"height:5.6em;\"></span><span style=\"width:0.875em;height:3.6em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.875em\" height=\"3.6em\" viewBox=\"0 0 875 3600\"><path d=\"M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1\nc-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,\n-36,557 l0,84c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,\n949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9\nc0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,\n-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189\nl0,-92c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,\n-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.21em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">−</span><span class=\"mord\"><span class=\"mord mathnormal\">n</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.044em;\">z</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-1.81em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">n</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0359em;\">y</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.21em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">n</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.044em;\">z</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span><span style=\"top:-1.81em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">−</span><span class=\"mord\"><span class=\"mord mathnormal\">n</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">x</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.21em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">−</span><span class=\"mord\"><span class=\"mord mathnormal\">n</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0359em;\">y</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">n</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">x</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-1.81em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span></span><span class=\"mclose\"><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.05em;\"><span class=\"pstrut\" style=\"height:5.6em;\"></span><span style=\"width:0.875em;height:3.6em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.875em\" height=\"3.6em\" viewBox=\"0 0 875 3600\"><path d=\"M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,\n63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5\nc11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,9\nc-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664\nc-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11\nc0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17\nc242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558\nl0,-144c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,\n-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-109",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-75",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-317",
                    type: "text",
                    body: "as the infinitesimal rotation matrix, and the vector"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-110",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-43",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-34",
                    type: "displayMath",
                    body: "d\\boldsymbol{\\Omega} = d\\theta\\,(n_x, n_y, n_z)",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0361em;vertical-align:-0.2861em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">n</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">x</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">n</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0359em;\">y</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">n</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.044em;\">z</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-111",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-76",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-318",
                    type: "text",
                    body: "as the vector defining the infinitesimal rotation."
                  }
                ]
              }
            }
          ],
          numbering: {
            path: [
              4,
              1,
              0
            ]
          }
        },
        {
          id: "subsection-4",
          type: "subsection",
          title: {
            id: "layoutInlineGroup-77",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-319",
                type: "text",
                body: "Similarity Transformation of Infinitesimal Rotations"
              }
            ]
          },
          content: [
            {
              id: "contentLayoutGroup-112",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-78",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-320",
                    type: "text",
                    body: "In the previous section, we have shown that an infinitesimal rotation can be characterized by"
                  },
                  {
                    id: "text-321",
                    type: "text",
                    body: "a vector "
                  },
                  {
                    id: "inlineMath-133",
                    type: "inlineMath",
                    body: "\\boldsymbol{\\Omega} = (d\\Omega_1, d\\Omega_2, d\\Omega_3)",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6861em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\">Ω</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\">Ω</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\">Ω</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-322",
                    type: "text",
                    body: ". We will now show that"
                  },
                  {
                    id: "inlineMath-134",
                    type: "inlineMath",
                    body: "\\boldsymbol{\\Omega}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6861em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Ω</span></span></span></span></span></span>"
                  },
                  {
                    id: "text-323",
                    type: "text",
                    body: "transforms as a regular "
                  },
                  {
                    id: "inlineMath-135",
                    type: "inlineMath",
                    body: "\\mathbb{R}^3",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8141em;\"></span><span class=\"mord\"><span class=\"mord mathbb\">R</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-324",
                    type: "text",
                    body: "vector under a similarity"
                  },
                  {
                    id: "text-325",
                    type: "text",
                    body: "transformation."
                  },
                  {
                    id: "text-326",
                    type: "text",
                    body: "Let us consider a rotation matrix "
                  },
                  {
                    id: "inlineMath-136",
                    type: "inlineMath",
                    body: "\\vb{A} = \\vb{I} + \\epsilon",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6861em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7694em;vertical-align:-0.0833em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">I</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">ϵ</span></span></span></span>"
                  },
                  {
                    id: "text-327",
                    type: "text",
                    body: ", where "
                  },
                  {
                    id: "inlineMath-137",
                    type: "inlineMath",
                    body: "\\epsilon",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">ϵ</span></span></span></span>"
                  },
                  {
                    id: "text-328",
                    type: "text",
                    body: "is a"
                  },
                  {
                    id: "text-329",
                    type: "text",
                    body: "skew-symmetric matrix of the form,"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-113",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-44",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-35",
                    type: "displayMath",
                    body: "\\epsilon =\n  \\begin{pmatrix}\n    0           &  d\\Omega_3 & -d\\Omega_2 \\\\\n    -d\\Omega_3  &  0         &  d\\Omega_1 \\\\\n    d\\Omega_2   & -d\\Omega_1 &  0\n  \\end{pmatrix}",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">ϵ</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:3.6em;vertical-align:-1.55em;\"></span><span class=\"minner\"><span class=\"mopen\"><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.05em;\"><span class=\"pstrut\" style=\"height:5.6em;\"></span><span style=\"width:0.875em;height:3.6em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.875em\" height=\"3.6em\" viewBox=\"0 0 875 3600\"><path d=\"M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1\nc-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,\n-36,557 l0,84c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,\n949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9\nc0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,\n-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189\nl0,-92c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,\n-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.21em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">−</span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\">Ω</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-1.81em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\">Ω</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.21em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\">Ω</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span><span style=\"top:-1.81em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">−</span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\">Ω</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.21em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">−</span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\">Ω</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\">Ω</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-1.81em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span></span><span class=\"mclose\"><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.05em;\"><span class=\"pstrut\" style=\"height:5.6em;\"></span><span style=\"width:0.875em;height:3.6em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.875em\" height=\"3.6em\" viewBox=\"0 0 875 3600\"><path d=\"M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,\n63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5\nc11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,9\nc-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664\nc-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11\nc0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17\nc242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558\nl0,-144c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,\n-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-114",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-79",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-330",
                    type: "text",
                    body: "The representation of "
                  },
                  {
                    id: "inlineMath-138",
                    type: "inlineMath",
                    body: "\\vb{A}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6861em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span></span></span></span>"
                  },
                  {
                    id: "text-331",
                    type: "text",
                    body: "in the coordinate system defined by an orthogonal"
                  },
                  {
                    id: "text-332",
                    type: "text",
                    body: "transformation "
                  },
                  {
                    id: "inlineMath-139",
                    type: "inlineMath",
                    body: "\\mathbf{B}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6861em;\"></span><span class=\"mord mathbf\">B</span></span></span></span>"
                  },
                  {
                    id: "text-333",
                    type: "text",
                    body: ", is "
                  },
                  {
                    id: "inlineMath-140",
                    type: "inlineMath",
                    body: "\\vb{A}' = \\mathbf{B}\\vb{A}\\mathbf{B}^\\top",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8279em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8279em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8491em;\"></span><span class=\"mord mathbf\">B</span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mord\"><span class=\"mord mathbf\">B</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8491em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-334",
                    type: "text",
                    body: "and it has the"
                  },
                  {
                    id: "text-335",
                    type: "text",
                    body: "form,"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-115",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-45",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-36",
                    type: "displayMath",
                    body: "\\vb{A}' = \\mathbf{B}(\\vb{I}+\\epsilon)\\mathbf{B}^\\top\n           = \\mathbf{B}\\mathbf{B}^\\top + \\mathbf{B}\\epsilon\\mathbf{B}^\\top\n           = \\vb{I} + \\mathbf{B}\\epsilon\\mathbf{B}^\\top\n           = I + \\epsilon'",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8279em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8279em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathbf\">B</span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">I</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.1491em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">ϵ</span><span class=\"mclose\">)</span><span class=\"mord\"><span class=\"mord mathbf\">B</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8991em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.9824em;vertical-align:-0.0833em;\"></span><span class=\"mord mathbf\">B</span><span class=\"mord\"><span class=\"mord mathbf\">B</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8991em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8991em;\"></span><span class=\"mord mathbf\">B</span><span class=\"mord mathnormal\">ϵ</span><span class=\"mord\"><span class=\"mord mathbf\">B</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8991em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7694em;vertical-align:-0.0833em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">I</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8991em;\"></span><span class=\"mord mathbf\">B</span><span class=\"mord mathnormal\">ϵ</span><span class=\"mord\"><span class=\"mord mathbf\">B</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8991em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7667em;vertical-align:-0.0833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0785em;\">I</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8019em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">ϵ</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-116",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-80",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-336",
                    type: "text",
                    body: "The matrix "
                  },
                  {
                    id: "inlineMath-141",
                    type: "inlineMath",
                    body: "\\epsilon' = \\mathbf{B}\\epsilon\\mathbf{B}^\\top",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">ϵ</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8491em;\"></span><span class=\"mord mathbf\">B</span><span class=\"mord mathnormal\">ϵ</span><span class=\"mord\"><span class=\"mord mathbf\">B</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8491em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-337",
                    type: "text",
                    body: "is skew-symmetric, as it can be"
                  },
                  {
                    id: "text-338",
                    type: "text",
                    body: "readily verified that,"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-117",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-46",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-37",
                    type: "displayMath",
                    body: "(\\epsilon')^\\top = (\\mathbf{B}\\epsilon\\mathbf{B}^\\top)^\\top\n                   = \\mathbf{B}\\epsilon^\\top\\mathbf{B}^\\top\n                   = -\\mathbf{B}\\epsilon\\mathbf{B}^\\top = -\\epsilon'",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.1491em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">ϵ</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mclose\"><span class=\"mclose\">)</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8991em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.1491em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathbf\">B</span><span class=\"mord mathnormal\">ϵ</span><span class=\"mord\"><span class=\"mord mathbf\">B</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8991em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span><span class=\"mclose\"><span class=\"mclose\">)</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8991em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8991em;\"></span><span class=\"mord mathbf\">B</span><span class=\"mord\"><span class=\"mord mathnormal\">ϵ</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8991em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord mathbf\">B</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8991em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.9824em;vertical-align:-0.0833em;\"></span><span class=\"mord\">−</span><span class=\"mord mathbf\">B</span><span class=\"mord mathnormal\">ϵ</span><span class=\"mord\"><span class=\"mord mathbf\">B</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8991em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8852em;vertical-align:-0.0833em;\"></span><span class=\"mord\">−</span><span class=\"mord\"><span class=\"mord mathnormal\">ϵ</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-118",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-81",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-339",
                    type: "text",
                    body: "Given that the matrix "
                  },
                  {
                    id: "inlineMath-142",
                    type: "inlineMath",
                    body: "\\mathbf{B}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6861em;\"></span><span class=\"mord mathbf\">B</span></span></span></span>"
                  },
                  {
                    id: "text-340",
                    type: "text",
                    body: "is orthogonal, there exist three orthogonal unit vectors"
                  },
                  {
                    id: "inlineMath-143",
                    type: "inlineMath",
                    body: "\\mathbf{v}_1",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-341",
                    type: "text",
                    body: ", "
                  },
                  {
                    id: "inlineMath-144",
                    type: "inlineMath",
                    body: "\\mathbf{v}_2",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-342",
                    type: "text",
                    body: ", and "
                  },
                  {
                    id: "inlineMath-145",
                    type: "inlineMath",
                    body: "\\mathbf{v}_3",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-343",
                    type: "text",
                    body: ":"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-119",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-47",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-38",
                    type: "displayMath",
                    body: "\\mathbf{v}_i \\cdot \\mathbf{v}_j = \\delta_{ij}",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5945em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">⋅</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7305em;vertical-align:-0.2861em;\"></span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0572em;\">j</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.9805em;vertical-align:-0.2861em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0379em;\">δ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:-0.0379em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0572em;\">ij</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-120",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-82",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-344",
                    type: "text",
                    body: "which define a reference system in the rotated coordinates. The matrix "
                  },
                  {
                    id: "inlineMath-146",
                    type: "inlineMath",
                    body: "\\mathbf{B}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6861em;\"></span><span class=\"mord mathbf\">B</span></span></span></span>"
                  },
                  {
                    id: "text-345",
                    type: "text",
                    body: "can be"
                  },
                  {
                    id: "text-346",
                    type: "text",
                    body: "written as:"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-121",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-48",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-39",
                    type: "displayMath",
                    body: "\\mathbf{B} =\n  \\begin{pmatrix} \\mathbf{v}_1 \\\\ \\mathbf{v}_2 \\\\ \\mathbf{v}_3 \\end{pmatrix}",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6861em;\"></span><span class=\"mord mathbf\">B</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:3.6em;vertical-align:-1.55em;\"></span><span class=\"minner\"><span class=\"mopen\"><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.05em;\"><span class=\"pstrut\" style=\"height:5.6em;\"></span><span style=\"width:0.875em;height:3.6em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.875em\" height=\"3.6em\" viewBox=\"0 0 875 3600\"><path d=\"M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1\nc-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,\n-36,557 l0,84c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,\n949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9\nc0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,\n-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189\nl0,-92c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,\n-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.21em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-1.81em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span></span><span class=\"mclose\"><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.05em;\"><span class=\"pstrut\" style=\"height:5.6em;\"></span><span style=\"width:0.875em;height:3.6em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.875em\" height=\"3.6em\" viewBox=\"0 0 875 3600\"><path d=\"M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,\n63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5\nc11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,9\nc-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664\nc-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11\nc0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17\nc242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558\nl0,-144c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,\n-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-122",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-83",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-347",
                    type: "text",
                    body: "where the vectors "
                  },
                  {
                    id: "inlineMath-147",
                    type: "inlineMath",
                    body: "\\mathbf{v}_i",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-348",
                    type: "text",
                    body: "are row vectors. The transpose of "
                  },
                  {
                    id: "inlineMath-148",
                    type: "inlineMath",
                    body: "\\mathbf{B}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6861em;\"></span><span class=\"mord mathbf\">B</span></span></span></span>"
                  },
                  {
                    id: "text-349",
                    type: "text",
                    body: "is readily"
                  },
                  {
                    id: "text-350",
                    type: "text",
                    body: "obtained as:"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-123",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-49",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-40",
                    type: "displayMath",
                    body: "\\mathbf{B}^\\top = \\bigl[\\mathbf{v}_1^\\top,\\; \\mathbf{v}_2^\\top,\\; \\mathbf{v}_3^\\top\\bigr]",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8991em;\"></span><span class=\"mord\"><span class=\"mord mathbf\">B</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8991em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2491em;vertical-align:-0.35em;\"></span><span class=\"mopen\"><span class=\"delimsizing size1\">[</span></span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8991em;\"><span style=\"top:-2.453em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8991em;\"><span style=\"top:-2.453em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8991em;\"><span style=\"top:-2.453em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mclose\"><span class=\"delimsizing size1\">]</span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-124",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-84",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-351",
                    type: "text",
                    body: "where the vectors "
                  },
                  {
                    id: "inlineMath-149",
                    type: "inlineMath",
                    body: "\\mathbf{v}_i",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-352",
                    type: "text",
                    body: "are now the columns of "
                  },
                  {
                    id: "inlineMath-150",
                    type: "inlineMath",
                    body: "\\mathbf{B}^\\top",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8491em;\"></span><span class=\"mord\"><span class=\"mord mathbf\">B</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8491em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-353",
                    type: "text",
                    body: "."
                  },
                  {
                    id: "text-354",
                    type: "text",
                    body: "The product "
                  },
                  {
                    id: "inlineMath-151",
                    type: "inlineMath",
                    body: "\\boldsymbol{\\epsilon}\\mathbf{B}^\\top",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8491em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\">ϵ</span></span></span><span class=\"mord\"><span class=\"mord mathbf\">B</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8491em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-355",
                    type: "text",
                    body: "is the matrix with columns:"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-125",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-50",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-41",
                    type: "displayMath",
                    body: "\\boldsymbol{\\epsilon}\\mathbf{B}^\\top =\n  \\bigl[\\mathbf{v}_1 \\times d\\boldsymbol{\\Omega},\\;\n        \\mathbf{v}_2 \\times d\\boldsymbol{\\Omega},\\;\n        \\mathbf{v}_3 \\times d\\boldsymbol{\\Omega}\\bigr]",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8991em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\">ϵ</span></span></span><span class=\"mord\"><span class=\"mord mathbf\">B</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8991em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mopen\"><span class=\"delimsizing size1\">[</span></span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Ω</span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Ω</span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Ω</span></span></span><span class=\"mclose\"><span class=\"delimsizing size1\">]</span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-126",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-85",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-356",
                    type: "text",
                    body: "and, for illustration, the matrix "
                  },
                  {
                    id: "inlineMath-152",
                    type: "inlineMath",
                    body: "\\mathbf{B}\\boldsymbol{\\epsilon}\\mathbf{B}^\\top",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8491em;\"></span><span class=\"mord mathbf\">B</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\">ϵ</span></span></span><span class=\"mord\"><span class=\"mord mathbf\">B</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8491em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-357",
                    type: "text",
                    body: "is"
                  },
                  {
                    id: "text-358",
                    type: "text",
                    body: "explicitly written below:"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-127",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-51",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-42",
                    type: "displayMath",
                    body: "\\mathbf{B}\\boldsymbol{\\epsilon}\\mathbf{B}^\\top =\n  \\begin{pmatrix}\n    \\mathbf{v}_1\\cdot(\\mathbf{v}_1\\times d\\boldsymbol{\\Omega}) &\n    \\mathbf{v}_1\\cdot(\\mathbf{v}_2\\times d\\boldsymbol{\\Omega}) &\n    \\mathbf{v}_1\\cdot(\\mathbf{v}_3\\times d\\boldsymbol{\\Omega}) \\\\\n    \\mathbf{v}_2\\cdot(\\mathbf{v}_1\\times d\\boldsymbol{\\Omega}) &\n    \\mathbf{v}_2\\cdot(\\mathbf{v}_2\\times d\\boldsymbol{\\Omega}) &\n    \\mathbf{v}_2\\cdot(\\mathbf{v}_3\\times d\\boldsymbol{\\Omega}) \\\\\n    \\mathbf{v}_3\\cdot(\\mathbf{v}_1\\times d\\boldsymbol{\\Omega}) &\n    \\mathbf{v}_3\\cdot(\\mathbf{v}_2\\times d\\boldsymbol{\\Omega}) &\n    \\mathbf{v}_3\\cdot(\\mathbf{v}_3\\times d\\boldsymbol{\\Omega})\n  \\end{pmatrix}",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8991em;\"></span><span class=\"mord mathbf\">B</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\">ϵ</span></span></span><span class=\"mord\"><span class=\"mord mathbf\">B</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8991em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:3.6em;vertical-align:-1.55em;\"></span><span class=\"minner\"><span class=\"mopen\"><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.05em;\"><span class=\"pstrut\" style=\"height:5.6em;\"></span><span style=\"width:0.875em;height:3.6em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.875em\" height=\"3.6em\" viewBox=\"0 0 875 3600\"><path d=\"M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1\nc-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,\n-36,557 l0,84c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,\n949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9\nc0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,\n-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189\nl0,-92c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,\n-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.21em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">⋅</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Ω</span></span></span><span class=\"mclose\">)</span></span></span><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">⋅</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Ω</span></span></span><span class=\"mclose\">)</span></span></span><span style=\"top:-1.81em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">⋅</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Ω</span></span></span><span class=\"mclose\">)</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.21em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">⋅</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Ω</span></span></span><span class=\"mclose\">)</span></span></span><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">⋅</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Ω</span></span></span><span class=\"mclose\">)</span></span></span><span style=\"top:-1.81em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">⋅</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Ω</span></span></span><span class=\"mclose\">)</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.21em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">⋅</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Ω</span></span></span><span class=\"mclose\">)</span></span></span><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">⋅</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Ω</span></span></span><span class=\"mclose\">)</span></span></span><span style=\"top:-1.81em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">⋅</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Ω</span></span></span><span class=\"mclose\">)</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span></span><span class=\"mclose\"><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.05em;\"><span class=\"pstrut\" style=\"height:5.6em;\"></span><span style=\"width:0.875em;height:3.6em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.875em\" height=\"3.6em\" viewBox=\"0 0 875 3600\"><path d=\"M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,\n63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5\nc11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,9\nc-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664\nc-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11\nc0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17\nc242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558\nl0,-144c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,\n-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-128",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-86",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-359",
                    type: "text",
                    body: "The antisymmetry of the matrix is evident as the diagonal elements are zero:"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-129",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-52",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-43",
                    type: "displayMath",
                    body: "\\mathbf{v}_i\\cdot(\\mathbf{v}_i\\times d\\boldsymbol{\\Omega}) = 0",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5945em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">⋅</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Ω</span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">0</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-130",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-87",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-360",
                    type: "text",
                    body: "and the off-diagonal elements are opposite because of the properties of the scalar triple"
                  },
                  {
                    id: "text-361",
                    type: "text",
                    body: "product:"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-131",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-53",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-44",
                    type: "displayMath",
                    body: "\\mathbf{v}_i\\cdot(\\mathbf{v}_j\\times d\\boldsymbol{\\Omega}) =\n  -\\mathbf{v}_j\\cdot(\\mathbf{v}_i\\times d\\boldsymbol{\\Omega})",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5945em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">⋅</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0361em;vertical-align:-0.2861em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0572em;\">j</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Ω</span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8694em;vertical-align:-0.2861em;\"></span><span class=\"mord\">−</span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0572em;\">j</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">⋅</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Ω</span></span></span><span class=\"mclose\">)</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-132",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-88",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-362",
                    type: "text",
                    body: "The components of "
                  },
                  {
                    id: "inlineMath-153",
                    type: "inlineMath",
                    body: "d\\boldsymbol{\\Omega}'",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8279em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Ω</span></span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8279em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-363",
                    type: "text",
                    body: "are by definition:"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-133",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-54",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "align-4",
                    type: "align",
                    body: "d\\Omega'_1 &= \\mathbf{v}_2\\cdot(\\mathbf{v}_3\\times d\\boldsymbol{\\Omega})\n              = d\\boldsymbol{\\Omega}\\cdot(\\mathbf{v}_2\\times\\mathbf{v}_3) \\\\\n  d\\Omega'_2 &= \\mathbf{v}_3\\cdot(\\mathbf{v}_1\\times d\\boldsymbol{\\Omega})\n              = d\\boldsymbol{\\Omega}\\cdot(\\mathbf{v}_3\\times\\mathbf{v}_1) \\\\\n  d\\Omega'_3 &= \\mathbf{v}_1\\cdot(\\mathbf{v}_2\\times d\\boldsymbol{\\Omega})\n              = d\\boldsymbol{\\Omega}\\cdot(\\mathbf{v}_1\\times\\mathbf{v}_2)",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:4.2em;vertical-align:-1.85em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-r\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.35em;\"><span style=\"top:-4.51em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\">Ω</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\">Ω</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-1.51em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\">Ω</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.85em;\"><span></span></span></span></span></span><span class=\"col-align-l\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.35em;\"><span style=\"top:-4.51em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">⋅</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Ω</span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">⋅</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span></span></span><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">⋅</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Ω</span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">⋅</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span></span></span><span style=\"top:-1.51em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">⋅</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Ω</span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">⋅</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.85em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-134",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-89",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-364",
                    type: "text",
                    body: "These are simply the independent entries of the transformed skew-symmetric matrix."
                  },
                  {
                    id: "text-365",
                    type: "text",
                    body: "As the determinant of "
                  },
                  {
                    id: "inlineMath-154",
                    type: "inlineMath",
                    body: "\\mathbf{B}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6861em;\"></span><span class=\"mord mathbf\">B</span></span></span></span>"
                  },
                  {
                    id: "text-366",
                    type: "text",
                    body: "assumes the values "
                  },
                  {
                    id: "inlineMath-155",
                    type: "inlineMath",
                    body: "\\pm 1",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7278em;vertical-align:-0.0833em;\"></span><span class=\"mord\">±</span><span class=\"mord\">1</span></span></span></span>"
                  },
                  {
                    id: "text-367",
                    type: "text",
                    body: ":"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-135",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-55",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-45",
                    type: "displayMath",
                    body: "|\\mathbf{B}| = \\mathbf{v}_1\\cdot(\\mathbf{v}_2\\times\\mathbf{v}_3) = \\pm 1",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\">∣</span><span class=\"mord mathbf\">B</span><span class=\"mord\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.5945em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">⋅</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7278em;vertical-align:-0.0833em;\"></span><span class=\"mord\">±</span><span class=\"mord\">1</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-136",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-90",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-368",
                    type: "text",
                    body: "depending on the orientation of the vectors "
                  },
                  {
                    id: "inlineMath-156",
                    type: "inlineMath",
                    body: "\\mathbf{v}_i",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-369",
                    type: "text",
                    body: "in the rotated coordinate system,"
                  },
                  {
                    id: "text-370",
                    type: "text",
                    body: "the equations become:"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-137",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-56",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "align-5",
                    type: "align",
                    body: "d\\Omega'_1 &= |\\mathbf{B}|\\; d\\boldsymbol{\\Omega}\\cdot\\mathbf{v}_1 \\\\\n  d\\Omega'_2 &= |\\mathbf{B}|\\; d\\boldsymbol{\\Omega}\\cdot\\mathbf{v}_2 \\\\\n  d\\Omega'_3 &= |\\mathbf{B}|\\; d\\boldsymbol{\\Omega}\\cdot\\mathbf{v}_3",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:4.2em;vertical-align:-1.85em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-r\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.35em;\"><span style=\"top:-4.51em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\">Ω</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\">Ω</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-1.51em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\">Ω</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.85em;\"><span></span></span></span></span></span><span class=\"col-align-l\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.35em;\"><span style=\"top:-4.51em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\">∣</span><span class=\"mord mathbf\">B</span><span class=\"mord\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">⋅</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\">∣</span><span class=\"mord mathbf\">B</span><span class=\"mord\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">⋅</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-1.51em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\">∣</span><span class=\"mord mathbf\">B</span><span class=\"mord\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">⋅</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.016em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.85em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-138",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-91",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-371",
                    type: "text",
                    body: "where we have made use of the property of the scalar triple product. Equation"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-139",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-57",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-46",
                    type: "displayMath",
                    body: "d\\boldsymbol{\\Omega}' = |\\mathbf{B}|\\;\\mathbf{B}\\,d\\boldsymbol{\\Omega}.",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8279em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Ω</span></span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8279em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\">∣</span><span class=\"mord mathbf\">B</span><span class=\"mord\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathbf\">B</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Ω</span></span></span><span class=\"mord\">.</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-140",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-92",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-372",
                    type: "text",
                    body: "shows that, under proper orthogonal transformations ("
                  },
                  {
                    id: "inlineMath-157",
                    type: "inlineMath",
                    body: "|\\mathbf{B}|=1",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\">∣</span><span class=\"mord mathbf\">B</span><span class=\"mord\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">1</span></span></span></span>"
                  },
                  {
                    id: "text-373",
                    type: "text",
                    body: "), the"
                  },
                  {
                    id: "text-374",
                    type: "text",
                    body: "infinitesimal rotation vector transforms exactly as an ordinary vector."
                  },
                  {
                    id: "text-375",
                    type: "text",
                    body: "Under improper orthogonal transformations ("
                  },
                  {
                    id: "inlineMath-158",
                    type: "inlineMath",
                    body: "|\\mathbf{B}|=-1",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\">∣</span><span class=\"mord mathbf\">B</span><span class=\"mord\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7278em;vertical-align:-0.0833em;\"></span><span class=\"mord\">−</span><span class=\"mord\">1</span></span></span></span>"
                  },
                  {
                    id: "text-376",
                    type: "text",
                    body: "), it acquires an"
                  },
                  {
                    id: "text-377",
                    type: "text",
                    body: "additional sign and therefore transforms as an axial vector (or pseudovector)."
                  }
                ]
              }
            }
          ],
          numbering: {
            path: [
              4,
              2,
              0
            ]
          }
        }
      ],
      numbering: {
        path: [
          4,
          0,
          0
        ]
      }
    },
    {
      id: "section-5",
      type: "section",
      title: {
        id: "layoutInlineGroup-93",
        type: "layoutInlineGroup",
        children: [
          {
            id: "text-378",
            type: "text",
            body: "Rate of Change of a Vector"
          }
        ]
      },
      intro: [
        {
          id: "contentLayoutGroup-141",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-94",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-379",
                type: "text",
                body: "In this section, we will examine how the coordinates of a given vector change over time in"
              },
              {
                id: "text-380",
                type: "text",
                body: "two different reference systems: one that is fixed and another that rotates with respect to"
              },
              {
                id: "text-381",
                type: "text",
                body: "the fixed one. Although this result is well known, we shall derive it in detail in order to make"
              },
              {
                id: "text-382",
                type: "text",
                body: "explicit the meaning of each term appearing in the equations of motion."
              },
              {
                id: "text-383",
                type: "text",
                body: "This will ensure that it is clear which components are being referenced in"
              },
              {
                id: "text-384",
                type: "text",
                body: "the general equation of motion."
              },
              {
                id: "text-385",
                type: "text",
                body: "To understand this better, consider a vector in a fixed reference frame and how its"
              },
              {
                id: "text-386",
                type: "text",
                body: "components might appear different in a rotating frame. The rotating frame itself can change"
              },
              {
                id: "text-387",
                type: "text",
                body: "its orientation with time, adding complexity to the motion of the vector. By carefully"
              },
              {
                id: "text-388",
                type: "text",
                body: "deriving the equations, we can delineate the contributions from both the intrinsic change of"
              },
              {
                id: "text-389",
                type: "text",
                body: "the vector and the effect of the rotating frame."
              },
              {
                id: "text-390",
                type: "text",
                body: "We will start by defining the vector in the fixed frame and introduce the rotational matrix"
              },
              {
                id: "text-391",
                type: "text",
                body: "that relates the rotating frame to the fixed frame. We will then derive the time derivative"
              },
              {
                id: "text-392",
                type: "text",
                body: "of the vector in both frames and show how they are connected."
              },
              {
                id: "text-393",
                type: "text",
                body: "Let us consider a time-dependent vector "
              },
              {
                id: "inlineMath-159",
                type: "inlineMath",
                body: "\\vb{g} = \\vb{g}(t)",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6389em;vertical-align:-0.1944em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span></span></span></span>"
              },
              {
                id: "text-394",
                type: "text",
                body: "in a fixed reference frame,"
              },
              {
                id: "text-395",
                type: "text",
                body: "and its components in a rotating frame "
              },
              {
                id: "inlineMath-160",
                type: "inlineMath",
                body: "\\vb{g}' = \\vb{g}'(t)",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.9463em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0019em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span></span></span></span>"
              },
              {
                id: "text-396",
                type: "text",
                body: ". We will assume that the"
              },
              {
                id: "text-397",
                type: "text",
                body: "components in the two different reference systems change as per a rotation matrix "
              },
              {
                id: "inlineMath-161",
                type: "inlineMath",
                body: "\\vb{A}(t)",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span></span></span></span>"
              },
              {
                id: "text-398",
                type: "text",
                body: ","
              },
              {
                id: "text-399",
                type: "text",
                body: "which is also time-dependent:"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-142",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-58",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-47",
                type: "displayMath",
                body: "\\vb{g}'(t) = \\vb{A}(t)\\,\\vb{g}(t)",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0519em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-143",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-95",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-400",
                type: "text",
                body: "The time derivative of the vector in the rotating frame is given by,"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-144",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-59",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-48",
                type: "displayMath",
                body: "\\frac{d\\vb{g}'(t)}{dt} = \\frac{d\\vb{A}(t)}{dt}\\,\\vb{g}(t) + \\vb{A}(t)\\,\\frac{d\\vb{g}(t)}{dt}",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.1149em;vertical-align:-0.686em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.113em;vertical-align:-0.686em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.427em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.113em;vertical-align:-0.686em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.427em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-145",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-96",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-401",
                type: "text",
                body: "and the time derivative of the matrix "
              },
              {
                id: "inlineMath-162",
                type: "inlineMath",
                body: "\\vb{A}(t)",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span></span></span></span>"
              },
              {
                id: "text-402",
                type: "text",
                body: "at time "
              },
              {
                id: "inlineMath-163",
                type: "inlineMath",
                body: "t_0",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7651em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
              },
              {
                id: "text-403",
                type: "text",
                body: "is formally defined as,"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-146",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-60",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-49",
                type: "displayMath",
                body: "\\frac{d\\vb{A}(t)}{dt} = \\lim_{\\Delta t \\to 0}\\frac{\\vb{A}(t+\\Delta t) - \\vb{A}(t)}{\\Delta t}.",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.113em;vertical-align:-0.686em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.427em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.1713em;vertical-align:-0.7443em;\"></span><span class=\"mop op-limits\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.6944em;\"><span style=\"top:-2.3557em;margin-left:0em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">Δ</span><span class=\"mord mathnormal mtight\">t</span><span class=\"mrel mtight\">→</span><span class=\"mord mtight\">0</span></span></span></span><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span><span class=\"mop\">lim</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7443em;\"><span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.427em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">Δ</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\">Δ</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\">.</span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-147",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-97",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-404",
                type: "text",
                body: "The operator "
              },
              {
                id: "inlineMath-164",
                type: "inlineMath",
                body: "\\vb{A}(t+\\Delta t)",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\">Δ</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span></span></span></span>"
              },
              {
                id: "text-405",
                type: "text",
                body: "is the composition of two rotations: one from the fixed"
              },
              {
                id: "text-406",
                type: "text",
                body: "frame to the rotating frame at time "
              },
              {
                id: "inlineMath-165",
                type: "inlineMath",
                body: "t",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6151em;\"></span><span class=\"mord mathnormal\">t</span></span></span></span>"
              },
              {
                id: "text-407",
                type: "text",
                body: ", and the other being the infinitesimal rotation from"
              },
              {
                id: "text-408",
                type: "text",
                body: "the rotating frame at time "
              },
              {
                id: "inlineMath-166",
                type: "inlineMath",
                body: "t + dt",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6984em;vertical-align:-0.0833em;\"></span><span class=\"mord mathnormal\">t</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span></span>"
              },
              {
                id: "text-409",
                type: "text",
                body: ":"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-148",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-61",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-50",
                type: "displayMath",
                body: "\\vb{A}(t+\\Delta t) = (\\vb{I} + \\epsilon)\\,\\vb{A}(t)",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\">Δ</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">I</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">ϵ</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-149",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-98",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-410",
                type: "text",
                body: "and the derivative of the operator "
              },
              {
                id: "inlineMath-167",
                type: "inlineMath",
                body: "\\vb{A}(t)",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span></span></span></span>"
              },
              {
                id: "text-411",
                type: "text",
                body: "is then given by,"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-150",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-62",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-51",
                type: "displayMath",
                body: "\\frac{d\\vb{A}(t)}{dt}\n  = \\lim_{\\Delta t\\to 0}\n    \\frac{(\\vb{I}+\\epsilon)\\vb{A}(t)-\\vb{A}(t)}{\\Delta t}\n  = \\lim_{\\Delta t\\to 0}\n    \\frac{\\epsilon\\,\\vb{A}(t)}{\\Delta t}.",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.113em;vertical-align:-0.686em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.427em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.1713em;vertical-align:-0.7443em;\"></span><span class=\"mop op-limits\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.6944em;\"><span style=\"top:-2.3557em;margin-left:0em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">Δ</span><span class=\"mord mathnormal mtight\">t</span><span class=\"mrel mtight\">→</span><span class=\"mord mtight\">0</span></span></span></span><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span><span class=\"mop\">lim</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7443em;\"><span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.427em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">Δ</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">I</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\">ϵ</span><span class=\"mclose\">)</span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.1713em;vertical-align:-0.7443em;\"></span><span class=\"mop op-limits\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.6944em;\"><span style=\"top:-2.3557em;margin-left:0em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">Δ</span><span class=\"mord mathnormal mtight\">t</span><span class=\"mrel mtight\">→</span><span class=\"mord mtight\">0</span></span></span></span><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span><span class=\"mop\">lim</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7443em;\"><span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.427em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">Δ</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">ϵ</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\">.</span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-151",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-99",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-412",
                type: "text",
                body: "To determine the action of this operator, let "
              },
              {
                id: "inlineMath-168",
                type: "inlineMath",
                body: "\\vb{x}",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">x</span></span></span></span></span>"
              },
              {
                id: "text-413",
                type: "text",
                body: "be an arbitrary vector."
              },
              {
                id: "text-414",
                type: "text",
                body: "Since the infinitesimal matrix "
              },
              {
                id: "inlineMath-169",
                type: "inlineMath",
                body: "\\epsilon",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">ϵ</span></span></span></span>"
              },
              {
                id: "text-415",
                type: "text",
                body: "acts on the vector after it has already"
              },
              {
                id: "text-416",
                type: "text",
                body: "been transformed by "
              },
              {
                id: "inlineMath-170",
                type: "inlineMath",
                body: "\\vb{A}(t)",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span></span></span></span>"
              },
              {
                id: "text-417",
                type: "text",
                body: ", we have"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-152",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-63",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-52",
                type: "displayMath",
                body: "\\frac{d\\vb{A}(t)}{dt}\\,\\vb{x}\n  =\n  \\lim_{\\Delta t\\to 0}\n  \\frac{\\epsilon\\!\\left(\\vb{A}(t)\\vb{x}\\right)}{\\Delta t}\n  =\n  \\lim_{\\Delta t\\to 0}\n  \\frac{\\left(\\vb{A}(t)\\vb{x}\\right)\\times d\\boldsymbol{\\Omega}}{\\Delta t}\n  =\n  \\left(\\vb{A}(t)\\vb{x}\\right)\\times\\boldsymbol{\\omega},",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.113em;vertical-align:-0.686em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.427em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.1713em;vertical-align:-0.7443em;\"></span><span class=\"mop op-limits\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.6944em;\"><span style=\"top:-2.3557em;margin-left:0em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">Δ</span><span class=\"mord mathnormal mtight\">t</span><span class=\"mrel mtight\">→</span><span class=\"mord mtight\">0</span></span></span></span><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span><span class=\"mop\">lim</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7443em;\"><span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.427em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">Δ</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">ϵ</span><span class=\"mspace\" style=\"margin-right:-0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">(</span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">)</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.1713em;vertical-align:-0.7443em;\"></span><span class=\"mop op-limits\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.6944em;\"><span style=\"top:-2.3557em;margin-left:0em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">Δ</span><span class=\"mord mathnormal mtight\">t</span><span class=\"mrel mtight\">→</span><span class=\"mord mtight\">0</span></span></span></span><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span><span class=\"mop\">lim</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7443em;\"><span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.427em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">Δ</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">(</span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Ω</span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">(</span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6389em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mpunct\">,</span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-153",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-100",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-418",
                type: "text",
                body: "where"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-154",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-64",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-53",
                type: "displayMath",
                body: "\\boldsymbol{\\omega}\n  =\n  \\lim_{\\Delta t\\to 0}\n  \\frac{d\\boldsymbol{\\Omega}}{\\Delta t}",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.1158em;vertical-align:-0.7443em;\"></span><span class=\"mop op-limits\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.6944em;\"><span style=\"top:-2.3557em;margin-left:0em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">Δ</span><span class=\"mord mathnormal mtight\">t</span><span class=\"mrel mtight\">→</span><span class=\"mord mtight\">0</span></span></span></span><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span><span class=\"mop\">lim</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7443em;\"><span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3714em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">Δ</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Ω</span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-155",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-101",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-419",
                type: "text",
                body: "is the "
              },
              {
                body: "angular velocity",
                id: "textbf-23",
                type: "textbf"
              },
              {
                id: "text-420",
                type: "text",
                body: ". Since the above relation holds for every vector"
              },
              {
                id: "inlineMath-171",
                type: "inlineMath",
                body: "\\vb{x}",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">x</span></span></span></span></span>"
              },
              {
                id: "text-421",
                type: "text",
                body: ", we may write"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-156",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-65",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-54",
                type: "displayMath",
                body: "\\frac{d\\vb{A}(t)}{dt}\n  =\n  \\vb{A}(t)\\,(\\cdot)\\times\\boldsymbol{\\omega},",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.113em;vertical-align:-0.686em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.427em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mopen\">(</span><span class=\"mord\">⋅</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6389em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mpunct\">,</span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-157",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-102",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-422",
                type: "text",
                body: "where "
              },
              {
                id: "inlineMath-172",
                type: "inlineMath",
                body: "(\\cdot)",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\">⋅</span><span class=\"mclose\">)</span></span></span></span>"
              },
              {
                id: "text-423",
                type: "text",
                body: "denotes the placeholder for the vector on which the operator acts."
              },
              {
                id: "text-424",
                type: "text",
                body: "where,"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-158",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-66",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-55",
                type: "displayMath",
                body: "\\boldsymbol{\\omega} = \\lim_{\\Delta t\\to 0}\\frac{d\\boldsymbol{\\Omega}}{\\Delta t}",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.1158em;vertical-align:-0.7443em;\"></span><span class=\"mop op-limits\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.6944em;\"><span style=\"top:-2.3557em;margin-left:0em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">Δ</span><span class=\"mord mathnormal mtight\">t</span><span class=\"mrel mtight\">→</span><span class=\"mord mtight\">0</span></span></span></span><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span><span class=\"mop\">lim</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7443em;\"><span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3714em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">Δ</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Ω</span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-159",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-103",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-425",
                type: "text",
                body: "and "
              },
              {
                id: "inlineMath-173",
                type: "inlineMath",
                body: "(\\cdot)",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\">⋅</span><span class=\"mclose\">)</span></span></span></span>"
              },
              {
                id: "text-426",
                type: "text",
                body: "denotes the placeholder for a vector. "
              },
              {
                id: "inlineMath-174",
                type: "inlineMath",
                body: "\\boldsymbol{\\omega}",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span></span></span></span>"
              },
              {
                id: "text-427",
                type: "text",
                body: "is the"
              },
              {
                body: "angular velocity",
                id: "textbf-24",
                type: "textbf"
              },
              {
                id: "text-428",
                type: "text",
                body: ". The final formula for the rate of change of the vector in the"
              },
              {
                id: "text-429",
                type: "text",
                body: "rotating frame is then given by the following equivalent equations:"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-160",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-67",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "equation-3",
                type: "equation",
                body: "\\begin{aligned}\n  \\frac{d\\vb{g}'(t)}{dt}\n    &= \\bigl(\\vb{A}(t)\\,\\vb{g}(t)\\bigr) \\times \\boldsymbol{\\omega}\n       + \\vb{A}(t)\\,\\frac{d\\vb{g}(t)}{dt} \\nonumber \\\\\n    &= \\vb{g}'(t) \\times \\boldsymbol{\\omega} + \\vb{A}(t)\\,\\frac{d\\vb{g}(t)}{dt} \\nonumber \\\\\n    &= \\vb{A}(t)\\!\\left(\\vb{g}(t) \\times \\bigl(\\vb{A}(t)^\\top\\boldsymbol{\\omega}\\bigr)\n       + \\frac{d\\vb{g}(t)}{dt}\\right)\n         \\end{aligned}",
                label: "kinematics:rotating-frame-derivative",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:7.2279em;vertical-align:-3.364em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:3.864em;\"><span style=\"top:-5.864em;\"><span class=\"pstrut\" style=\"height:5.864em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-r\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:3.864em;\"><span style=\"top:-5.8851em;\"><span class=\"pstrut\" style=\"height:3.45em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span></span></span><span style=\"top:-3.4721em;\"><span class=\"pstrut\" style=\"height:3.45em;\"></span><span class=\"mord\"></span></span><span style=\"top:-1.0361em;\"><span class=\"pstrut\" style=\"height:3.45em;\"></span><span class=\"mord\"></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:3.364em;\"><span></span></span></span></span></span><span class=\"col-align-l\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:3.864em;\"><span style=\"top:-5.8851em;\"><span class=\"pstrut\" style=\"height:3.45em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.427em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span></span></span><span style=\"top:-3.4721em;\"><span class=\"pstrut\" style=\"height:3.45em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.427em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span></span></span><span style=\"top:-1.0361em;\"><span class=\"pstrut\" style=\"height:3.45em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:-0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">(</span></span><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\"><span class=\"mclose\">)</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8991em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.427em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">)</span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:3.364em;\"><span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:3.364em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-161",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-104",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-430",
                type: "text",
                body: "where in the last equation, the distributive property of matrix multiplication for orthogonal"
              },
              {
                id: "text-431",
                type: "text",
                body: "matrices regarding the cross product has been utilized."
              },
              {
                id: "text-432",
                type: "text",
                body: "A similar formula can be derived for the rate of change of the vector in the fixed frame,"
              },
              {
                id: "text-433",
                type: "text",
                body: "since "
              },
              {
                id: "inlineMath-175",
                type: "inlineMath",
                body: "\\vb{g}(t) = \\vb{A}^\\top(t)\\,\\vb{g}'(t)",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.1751em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9251em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span></span></span></span>"
              },
              {
                id: "text-434",
                type: "text",
                body: ". Multiplying "
              },
              {
                id: "eqref-2",
                type: "eqref",
                body: "kinematics:rotating-frame-derivative"
              },
              {
                id: "text-435",
                type: "text",
                body: "by"
              },
              {
                id: "inlineMath-176",
                type: "inlineMath",
                body: "\\vb{A}^\\top(t)",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.1751em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9251em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span></span></span></span>"
              },
              {
                id: "text-436",
                type: "text",
                body: "from the left, we obtain,"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-162",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-68",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "equation-4",
                type: "equation",
                body: "\\begin{aligned}\n    \\frac{d\\vb{g}(t)}{dt}\n      &= \\bigl(\\vb{A}^{\\top}(t)\\boldsymbol{\\omega}\\bigr)\n         \\times \\vb{g}(t)\n         + \\vb{A}^{\\top}(t)\\frac{d\\vb{g}'(t)}{dt} \\\\\n      &= \\vb{A}^{\\top}(t)\\left(\n           \\boldsymbol{\\omega}\\times\\vb{g}'(t)\n           + \\frac{d\\vb{g}'(t)}{dt}\n         \\right).\n  \\end{aligned}",
                label: "kinematics:inertial-frame-derivative",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:4.8149em;vertical-align:-2.1575em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.6575em;\"><span style=\"top:-4.6575em;\"><span class=\"pstrut\" style=\"height:4.6575em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-r\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.6575em;\"><span style=\"top:-4.6786em;\"><span class=\"pstrut\" style=\"height:3.45em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.427em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span></span></span><span style=\"top:-2.2426em;\"><span class=\"pstrut\" style=\"height:3.45em;\"></span><span class=\"mord\"></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.1575em;\"><span></span></span></span></span></span><span class=\"col-align-l\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.6575em;\"><span style=\"top:-4.6786em;\"><span class=\"pstrut\" style=\"height:3.45em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9251em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9251em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span></span></span><span style=\"top:-2.2426em;\"><span class=\"pstrut\" style=\"height:3.45em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9251em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">(</span></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">.</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.1575em;\"><span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.1575em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
              }
            ]
          }
        }
      ],
      subsections: [
        {
          id: "subsection-5",
          type: "subsection",
          title: {
            id: "layoutInlineGroup-105",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-437",
                type: "text",
                body: "Poisson Formulas"
              }
            ]
          },
          content: [
            {
              id: "contentLayoutGroup-163",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-106",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-438",
                    type: "text",
                    body: "Let us consider a set of unit vectors "
                  },
                  {
                    id: "inlineMath-177",
                    type: "inlineMath",
                    body: "\\vb e'_i",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0106em;vertical-align:-0.2587em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-2.4413em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2587em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-439",
                    type: "text",
                    body: "fixed in the rotating frame, and let"
                  },
                  {
                    id: "inlineMath-178",
                    type: "inlineMath",
                    body: "\\vb e_i",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-440",
                    type: "text",
                    body: "denote the corresponding vectors expressed in the fixed frame. Since the"
                  },
                  {
                    id: "text-441",
                    type: "text",
                    body: "components "
                  },
                  {
                    id: "inlineMath-179",
                    type: "inlineMath",
                    body: "\\vb e'_i",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0106em;vertical-align:-0.2587em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-2.4413em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2587em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-442",
                    type: "text",
                    body: "are constant in the rotating frame, equation"
                  },
                  {
                    id: "eqref-3",
                    type: "eqref",
                    body: "kinematics:rotating-frame-derivative"
                  },
                  {
                    id: "text-443",
                    type: "text",
                    body: "gives"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-164",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-69",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-56",
                    type: "displayMath",
                    body: "0\n  =\n  \\vb e'_i\\times\\boldsymbol{\\omega}\n  +\n  \\vb A\\,\\frac{d\\vb e_i}{dt}.",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">0</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0489em;vertical-align:-0.247em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.0574em;vertical-align:-0.686em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3714em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\">.</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-165",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-107",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-444",
                    type: "text",
                    body: "The quantity"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-166",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-70",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-57",
                    type: "displayMath",
                    body: "\\frac{d\\vb{e}'_i}{dt}",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.1149em;vertical-align:-0.686em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-2.4413em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2587em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-167",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-108",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-445",
                    type: "text",
                    body: "does "
                  },
                  {
                    body: "not",
                    id: "emph-1",
                    type: "emph"
                  },
                  {
                    id: "text-446",
                    type: "text",
                    body: "denote the ordinary time derivative of the components"
                  },
                  {
                    id: "inlineMath-180",
                    type: "inlineMath",
                    body: "\\vb{e}'_i",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0106em;vertical-align:-0.2587em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-2.4413em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2587em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-447",
                    type: "text",
                    body: ", which are constant in the rotating reference frame. Instead,"
                  },
                  {
                    id: "text-448",
                    type: "text",
                    body: "throughout this section we define it as the components, expressed in the"
                  },
                  {
                    id: "text-449",
                    type: "text",
                    body: "rotating frame, of the physical time derivative of the basis vector:"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-168",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-71",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-58",
                    type: "displayMath",
                    body: "\\frac{d\\vb{e}'_i}{dt}\n  \\equiv\n  \\vb{A}\\,\\frac{d\\vb{e}_i}{dt}.",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.1149em;vertical-align:-0.686em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-2.4413em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2587em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">≡</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.0574em;vertical-align:-0.686em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3714em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\">.</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-169",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-109",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-450",
                    type: "text",
                    body: "With this definition, the previous equation becomes"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-170",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-72",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-59",
                    type: "displayMath",
                    body: "\\frac{d\\vb{e}'_i}{dt}\n  =\n  \\boldsymbol{\\omega}\\times\\vb{e}'_i,",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.1149em;vertical-align:-0.686em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-2.4413em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2587em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0489em;vertical-align:-0.247em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">i</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-171",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-110",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-451",
                    type: "text",
                    body: "which is the Poisson formula."
                  }
                ]
              }
            }
          ],
          numbering: {
            path: [
              5,
              1,
              0
            ]
          }
        },
        {
          id: "subsection-6",
          type: "subsection",
          title: {
            id: "layoutInlineGroup-111",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-452",
                type: "text",
                body: "Components of the Angular Velocity"
              }
            ]
          },
          content: [
            {
              id: "contentLayoutGroup-172",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-112",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-453",
                    type: "text",
                    body: "Let us consider the Poisson formula for the unit vector "
                  },
                  {
                    id: "inlineMath-181",
                    type: "inlineMath",
                    body: "\\vb{e}'_1",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.2481em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-2.4519em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2481em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-454",
                    type: "text",
                    body: ","
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-173",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-73",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-60",
                    type: "displayMath",
                    body: "\\boldsymbol{\\omega} \\times \\vb{e}'_1 = \\frac{d\\vb{e}'_1}{dt}",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0489em;vertical-align:-0.247em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.1149em;vertical-align:-0.686em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-2.4519em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2481em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-174",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-113",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-455",
                    type: "text",
                    body: "Taking the scalar product of both sides with "
                  },
                  {
                    id: "inlineMath-182",
                    type: "inlineMath",
                    body: "\\vb e'_2",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.2481em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-2.4519em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2481em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-456",
                    type: "text",
                    body: ", we obtain, we obtain the"
                  },
                  {
                    id: "text-457",
                    type: "text",
                    body: "component of the angular velocity along the "
                  },
                  {
                    id: "inlineMath-183",
                    type: "inlineMath",
                    body: "\\vb{e}'_3",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.2481em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-2.4519em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2481em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-458",
                    type: "text",
                    body: "vector:"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-175",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-74",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "align-6",
                    type: "align",
                    body: "\\vb{e}'_2 \\cdot \\bigl(\\boldsymbol{\\omega} \\times \\vb{e}'_1\\bigr)\n    &= \\vb{e}'_2 \\cdot \\frac{d\\vb{e}'_1}{dt} \\\\\n  \\boldsymbol{\\omega} \\cdot (\\vb{e}'_1 \\times \\vb{e}'_2)\n    &= \\vb{e}'_2 \\cdot \\frac{d\\vb{e}'_1}{dt} \\\\\n  \\boldsymbol{\\omega} \\cdot \\vb{e}'_3\n    &= \\vb{e}'_2 \\cdot \\frac{d\\vb{e}'_1}{dt}",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:6.9447em;vertical-align:-3.2223em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-r\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:3.7223em;\"><span style=\"top:-5.7223em;\"><span class=\"pstrut\" style=\"height:3.4289em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">⋅</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span></span></span><span style=\"top:-3.3074em;\"><span class=\"pstrut\" style=\"height:3.4289em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">⋅</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span></span></span><span style=\"top:-0.8926em;\"><span class=\"pstrut\" style=\"height:3.4289em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">⋅</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:3.2223em;\"><span></span></span></span></span></span><span class=\"col-align-l\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:3.7223em;\"><span style=\"top:-5.7223em;\"><span class=\"pstrut\" style=\"height:3.4289em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">⋅</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-2.4519em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2481em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span></span></span><span style=\"top:-3.3074em;\"><span class=\"pstrut\" style=\"height:3.4289em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">⋅</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-2.4519em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2481em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span></span></span><span style=\"top:-0.8926em;\"><span class=\"pstrut\" style=\"height:3.4289em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">⋅</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-2.4519em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2481em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:3.2223em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-176",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-114",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-459",
                    type: "text",
                    body: "Similar formulas can be derived for the other components of the angular velocity, and we"
                  },
                  {
                    id: "text-460",
                    type: "text",
                    body: "ultimately obtain:"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-177",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-75",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "align-7",
                    type: "align",
                    body: "\\omega_1 &= \\vb{e}'_2 \\cdot \\frac{d\\vb{e}'_3}{dt} \\\\\n  \\omega_2 &= \\vb{e}'_3 \\cdot \\frac{d\\vb{e}'_1}{dt} \\\\\n  \\omega_3 &= \\vb{e}'_1 \\cdot \\frac{d\\vb{e}'_2}{dt}",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:6.9447em;vertical-align:-3.2223em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-r\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:3.7223em;\"><span style=\"top:-5.7223em;\"><span class=\"pstrut\" style=\"height:3.4289em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">ω</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-3.3074em;\"><span class=\"pstrut\" style=\"height:3.4289em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">ω</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-0.8926em;\"><span class=\"pstrut\" style=\"height:3.4289em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">ω</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:3.2223em;\"><span></span></span></span></span></span><span class=\"col-align-l\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:3.7223em;\"><span style=\"top:-5.7223em;\"><span class=\"pstrut\" style=\"height:3.4289em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">⋅</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-2.4519em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2481em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span></span></span><span style=\"top:-3.3074em;\"><span class=\"pstrut\" style=\"height:3.4289em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">⋅</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-2.4519em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2481em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span></span></span><span style=\"top:-0.8926em;\"><span class=\"pstrut\" style=\"height:3.4289em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">⋅</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-2.4519em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2481em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:3.2223em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-178",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-115",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-461",
                    type: "text",
                    body: "and in vector form,"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-179",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-76",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "equation-5",
                    type: "equation",
                    body: "\\boldsymbol{\\omega} =\n    \\left(\\vb{e}'_2 \\cdot \\frac{d\\vb{e}'_3}{dt}\\right)\\vb{e}'_1\n  + \\left(\\vb{e}'_3 \\cdot \\frac{d\\vb{e}'_1}{dt}\\right)\\vb{e}'_2\n  + \\left(\\vb{e}'_1 \\cdot \\frac{d\\vb{e}'_2}{dt}\\right)\\vb{e}'_3",
                    label: "kinematics:angular-velocity-components",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.4em;vertical-align:-0.95em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.45em;\"><span style=\"top:-3.45em;\"><span class=\"pstrut\" style=\"height:3.45em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">(</span></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">⋅</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-2.4519em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2481em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">(</span></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">⋅</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-2.4519em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2481em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">(</span></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">⋅</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-2.4519em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2481em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.95em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-180",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-116",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-462",
                    type: "text",
                    body: "Equation "
                  },
                  {
                    id: "eqref-4",
                    type: "eqref",
                    body: "kinematics:angular-velocity-components"
                  },
                  {
                    id: "text-463",
                    type: "text",
                    body: "shows that the angular"
                  },
                  {
                    id: "text-464",
                    type: "text",
                    body: "velocity is completely determined by the time evolution of the orthonormal basis"
                  },
                  {
                    id: "text-465",
                    type: "text",
                    body: "attached to the rotating reference frame."
                  }
                ]
              }
            }
          ],
          numbering: {
            path: [
              5,
              2,
              0
            ]
          }
        }
      ],
      numbering: {
        path: [
          5,
          0,
          0
        ]
      }
    },
    {
      id: "section-6",
      type: "section",
      title: {
        id: "layoutInlineGroup-117",
        type: "layoutInlineGroup",
        children: [
          {
            id: "text-466",
            type: "text",
            body: "Relevant Examples of Angular Velocity"
          }
        ]
      },
      intro: [
        {
          id: "contentLayoutGroup-181",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-118",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-467",
                type: "text",
                body: "In this section, we will present several examples of angular velocity in a rotating system."
              },
              {
                id: "text-468",
                type: "text",
                body: "We begin with the case of a rigid body rotating about a fixed axis, and then consider the more"
              },
              {
                id: "text-469",
                type: "text",
                body: "general situation in which the axis of rotation also varies with time."
              }
            ]
          }
        }
      ],
      subsections: [
        {
          id: "subsection-7",
          type: "subsection",
          title: {
            id: "layoutInlineGroup-119",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-470",
                type: "text",
                body: "Rotation around a Fixed Axis"
              }
            ]
          },
          content: [
            {
              id: "contentLayoutGroup-182",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-120",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-471",
                    type: "text",
                    body: "In this section, we will assume that a rigid body is rotating around a fixed axis "
                  },
                  {
                    id: "inlineMath-184",
                    type: "inlineMath",
                    body: "\\vb{n}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span></span></span></span>"
                  },
                  {
                    id: "text-472",
                    type: "text",
                    body: "by an angle "
                  },
                  {
                    id: "inlineMath-185",
                    type: "inlineMath",
                    body: "\\theta = \\theta(t)",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-473",
                    type: "text",
                    body: ". The time derivative of the rotation matrix"
                  },
                  {
                    id: "inlineMath-186",
                    type: "inlineMath",
                    body: "\\vb{A}(\\vb{n}, \\theta(t))",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">))</span></span></span></span>"
                  },
                  {
                    id: "text-474",
                    type: "text",
                    body: "from "
                  },
                  {
                    id: "eqref-5",
                    type: "eqref",
                    body: "kinematics:rodrigues-formula"
                  },
                  {
                    id: "text-475",
                    type: "text",
                    body: "is given by:"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-183",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-77",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-61",
                    type: "displayMath",
                    body: "\\frac{d\\vb{A}(\\vb{n},\\theta(t))}{dt} =\n  \\bigl(-\\sin(\\theta)\\,\\vb{I} + \\sin(\\theta)\\ket{\\vb{n}}\\bra{\\vb{n}} + \\cos(\\theta)\\,(\\cdot)\\times\\vb{n}\\bigr)\\,\\dot\\theta",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.113em;vertical-align:-0.686em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.427em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">))</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord\">−</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mop\">sin</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">I</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mop\">sin</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mop\">cos</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mopen\">(</span><span class=\"mord\">⋅</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2813em;vertical-align:-0.35em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord accent\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9313em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span></span><span style=\"top:-3.2634em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"accent-body\" style=\"left:-0.0556em;\"><span class=\"mord\">˙</span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-184",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-121",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-476",
                    type: "text",
                    body: "It can be readily verified that:"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-185",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-78",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-62",
                    type: "displayMath",
                    body: "\\frac{d\\vb{A}(\\vb{n},\\theta(t))}{dt} = \\bigl(\\vb{A}(\\vb{n},\\theta(t))\\,(\\cdot)\\bigr) \\times \\boldsymbol{\\omega}",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.113em;vertical-align:-0.686em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.427em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">))</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">))</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mopen\">(</span><span class=\"mord\">⋅</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-186",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-122",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-477",
                    type: "text",
                    body: "where the angular velocity in the rotating frame is given by:"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-187",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-79",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "equation-6",
                    type: "equation",
                    body: "\\boldsymbol{\\omega} = \\dot\\theta\\,\\vb{n}.",
                    label: "kinematics:fixed-axis-angular-velocity",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.2913em;vertical-align:-0.3957em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8957em;\"><span style=\"top:-2.9644em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord accent\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9313em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span></span><span style=\"top:-3.2634em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"accent-body\" style=\"left:-0.0556em;\"><span class=\"mord\">˙</span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mord\">.</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3957em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-188",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-123",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-478",
                    type: "text",
                    body: "Since the rotation axis is invariant under the transformation,"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-189",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-80",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-63",
                    type: "displayMath",
                    body: "\\vb{A}(\\vb{n},\\theta)\\,\\vb{n}=\\vb{n},",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6389em;vertical-align:-0.1944em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mpunct\">,</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-190",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-124",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-479",
                    type: "text",
                    body: "the components of the angular velocity are identical in both the fixed and"
                  },
                  {
                    id: "text-480",
                    type: "text",
                    body: "rotating reference frames."
                  }
                ]
              }
            }
          ],
          numbering: {
            path: [
              6,
              1,
              0
            ]
          }
        },
        {
          id: "subsection-8",
          type: "subsection",
          title: {
            id: "layoutInlineGroup-125",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-481",
                type: "text",
                body: "Rotation around a Rotating Axis"
              }
            ]
          },
          content: [
            {
              id: "contentLayoutGroup-191",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-126",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-482",
                    type: "text",
                    body: "The formula for the angular velocity when the axis of rotation is also changing in time can be"
                  },
                  {
                    id: "text-483",
                    type: "text",
                    body: "derived following the same steps as in the previous example. The derivation is algebraically involved,"
                  },
                  {
                    id: "text-484",
                    type: "text",
                    body: "so we present the final result for the angular velocity in the rotating frame:"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-192",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-81",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "equation-7",
                    type: "equation",
                    body: "\\boldsymbol{\\omega} = (1-\\cos(\\theta))\\,\\dot{\\vb{n}}\\times\\vb{n}\n    + \\sin(\\theta)\\,\\dot{\\vb{n}} + \\dot\\theta\\,\\vb{n}",
                    label: "kinematics:moving-axis-angular-velocity",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.2913em;vertical-align:-0.3957em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8957em;\"><span style=\"top:-2.9644em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mopen\">(</span><span class=\"mord\">1</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mop\">cos</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span><span class=\"mclose\">))</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord accent\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.6813em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span></span><span style=\"top:-3.0134em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"accent-body\" style=\"left:-0.1389em;\"><span class=\"mord\">˙</span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mop\">sin</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord accent\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.6813em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span></span><span style=\"top:-3.0134em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"accent-body\" style=\"left:-0.1389em;\"><span class=\"mord\">˙</span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord accent\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9313em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">θ</span></span><span style=\"top:-3.2634em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"accent-body\" style=\"left:-0.0556em;\"><span class=\"mord\">˙</span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3957em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-193",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-127",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-485",
                    type: "text",
                    body: "The last term represents the contribution due to the variation of the rotation"
                  },
                  {
                    id: "text-486",
                    type: "text",
                    body: "angle, whereas the first two terms arise from the time dependence of the"
                  },
                  {
                    id: "text-487",
                    type: "text",
                    body: "rotation axis. "
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-194",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-128",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-488",
                    type: "text",
                    body: "The formula above can be verified using symbolic computation software. It is convenient to express"
                  },
                  {
                    id: "inlineMath-187",
                    type: "inlineMath",
                    body: "\\vb n",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span></span></span></span>"
                  },
                  {
                    id: "text-489",
                    type: "text",
                    body: "in polar coordinates, which automatically"
                  },
                  {
                    id: "text-490",
                    type: "text",
                    body: "enforces the constraint"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-195",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-82",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-64",
                    type: "displayMath",
                    body: "\\vb n\\cdot\\dot{\\vb n}=0,",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4445em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">⋅</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6813em;\"></span><span class=\"mord accent\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.6813em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span></span><span style=\"top:-3.0134em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"accent-body\" style=\"left:-0.1389em;\"><span class=\"mord\">˙</span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8389em;vertical-align:-0.1944em;\"></span><span class=\"mord\">0</span><span class=\"mpunct\">,</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-196",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-129",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-491",
                    type: "text",
                    body: "ensuring that "
                  },
                  {
                    id: "inlineMath-188",
                    type: "inlineMath",
                    body: "\\|\\vb n\\|=1",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\">∥</span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mord\">∥</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">1</span></span></span></span>"
                  },
                  {
                    id: "text-492",
                    type: "text",
                    body: "at all times. "
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-197",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-130",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-493",
                    type: "text",
                    body: "The kinematical relations derived in this chapter provide the foundation for the study of"
                  },
                  {
                    id: "text-494",
                    type: "text",
                    body: "dynamics in rotating reference frames. In the next chapter, we will derive the fictitious forces that arise in non-inertial"
                  },
                  {
                    id: "text-495",
                    type: "text",
                    body: "systems, including the centrifugal and Coriolis forces, and apply these results to the motion of bodies on the rotating Earth."
                  }
                ]
              }
            }
          ],
          numbering: {
            path: [
              6,
              2,
              0
            ]
          }
        }
      ],
      numbering: {
        path: [
          6,
          0,
          0
        ]
      }
    }
  ]
} as const satisfies LatexNodeMap["latexDocument"];
