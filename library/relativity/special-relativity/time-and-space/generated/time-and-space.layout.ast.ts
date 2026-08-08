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
                body: "The Lorentz transformation is one of the cornerstones of modern physics. It"
              },
              {
                id: "text-3",
                type: "text",
                body: "relates the measurements of space and time performed by different inertial"
              },
              {
                id: "text-4",
                type: "text",
                body: "observers and underlies virtually every aspect of Special Relativity. Because"
              },
              {
                id: "text-5",
                type: "text",
                body: "of its fundamental importance, it is often introduced early and presented"
              },
              {
                id: "text-6",
                type: "text",
                body: "directly in matrix form. While this approach is efficient, it can leave the"
              },
              {
                id: "text-7",
                type: "text",
                body: "reader with little physical intuition as to why the transformation has the form"
              },
              {
                id: "text-8",
                type: "text",
                body: "it does or what it actually means. "
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-2",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-3",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-9",
                type: "text",
                body: "In this section we revisit Einstein's original derivation, extending it from"
              },
              {
                id: "text-10",
                type: "text",
                body: "the special case of motion along a coordinate axis to an arbitrary boost"
              },
              {
                id: "text-11",
                type: "text",
                body: "direction. Rather than starting from the final matrix, we derive the Lorentz"
              },
              {
                id: "text-12",
                type: "text",
                body: "transformation from simple physical assumptions, making explicit every step of"
              },
              {
                id: "text-13",
                type: "text",
                body: "the argument. Along the way, we will emphasize an important conceptual point"
              },
              {
                id: "text-14",
                type: "text",
                body: "that is often left implicit: the Lorentz transformation does not determine what"
              },
              {
                id: "text-15",
                type: "text",
                body: "different observers measure, but rather relates the independent measurements"
              },
              {
                id: "text-16",
                type: "text",
                body: "performed in different inertial reference frames."
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-3",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-4",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-17",
                type: "text",
                body: "Einstein original derivation considered the special case in which the relative"
              },
              {
                id: "text-18",
                type: "text",
                body: "velocity is aligned with the x-axis, so that directions perpendicular to the motion remain unchanged by construction. "
              },
              {
                id: "text-19",
                type: "text",
                body: "In this section, we follow Einstein's reasoning and extend the derivation to an arbitrary boost direction. Our goals are as follows:"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-4",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-5",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "enumerate-1",
                type: "enumerate",
                items: [
                  {
                    id: "item-1",
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
                              body: "General Boost Transformation:",
                              id: "textbf-1",
                              type: "textbf"
                            }
                          ]
                        }
                      },
                      {
                        id: "contentLayoutGroup-6",
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
                                  id: "item-2",
                                  type: "item",
                                  content: [
                                    {
                                      id: "contentLayoutGroup-7",
                                      type: "contentLayoutGroup",
                                      children: {
                                        id: "layoutInlineGroup-6",
                                        type: "layoutInlineGroup",
                                        children: [
                                          {
                                            id: "text-20",
                                            type: "text",
                                            body: "We derive the Lorentz transformation for a general boost, where the relative"
                                          },
                                          {
                                            id: "text-21",
                                            type: "text",
                                            body: "velocity is represented by an arbitrary vector."
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
                                      id: "contentLayoutGroup-8",
                                      type: "contentLayoutGroup",
                                      children: {
                                        id: "layoutInlineGroup-7",
                                        type: "layoutInlineGroup",
                                        children: [
                                          {
                                            id: "text-22",
                                            type: "text",
                                            body: "This broader approach allows us to handle boosts in any direction, not just along"
                                          },
                                          {
                                            id: "text-23",
                                            type: "text",
                                            body: "the "
                                          },
                                          {
                                            id: "inlineMath-1",
                                            type: "inlineMath",
                                            body: "x",
                                            html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">x</span></span></span></span>"
                                          },
                                          {
                                            id: "text-24",
                                            type: "text",
                                            body: "-axis."
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
                    ]
                  },
                  {
                    id: "item-4",
                    type: "item",
                    content: [
                      {
                        id: "contentLayoutGroup-9",
                        type: "contentLayoutGroup",
                        children: {
                          id: "layoutInlineGroup-8",
                          type: "layoutInlineGroup",
                          children: [
                            {
                              body: "Transverse Length Invariance:",
                              id: "textbf-2",
                              type: "textbf"
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
                              id: "itemize-2",
                              type: "itemize",
                              items: [
                                {
                                  id: "item-5",
                                  type: "item",
                                  content: [
                                    {
                                      id: "contentLayoutGroup-11",
                                      type: "contentLayoutGroup",
                                      children: {
                                        id: "layoutInlineGroup-9",
                                        type: "layoutInlineGroup",
                                        children: [
                                          {
                                            id: "text-25",
                                            type: "text",
                                            body: "We explicitly discuss the conditions that ensure the preservation of lengths"
                                          },
                                          {
                                            id: "text-26",
                                            type: "text",
                                            body: "perpendicular to the velocity direction."
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                },
                                {
                                  id: "item-6",
                                  type: "item",
                                  content: [
                                    {
                                      id: "contentLayoutGroup-12",
                                      type: "contentLayoutGroup",
                                      children: {
                                        id: "layoutInlineGroup-10",
                                        type: "layoutInlineGroup",
                                        children: [
                                          {
                                            id: "text-27",
                                            type: "text",
                                            body: "This consideration is crucial for maintaining consistency across reference frames."
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
                    ]
                  },
                  {
                    id: "item-7",
                    type: "item",
                    content: [
                      {
                        id: "contentLayoutGroup-13",
                        type: "contentLayoutGroup",
                        children: {
                          id: "layoutInlineGroup-11",
                          type: "layoutInlineGroup",
                          children: [
                            {
                              body: "Time Transformation via Clock Synchronization:",
                              id: "textbf-3",
                              type: "textbf"
                            }
                          ]
                        }
                      },
                      {
                        id: "contentLayoutGroup-14",
                        type: "contentLayoutGroup",
                        children: {
                          id: "layoutBlockNodeGroup-3",
                          type: "layoutBlockNodeGroup",
                          children: [
                            {
                              id: "itemize-3",
                              type: "itemize",
                              items: [
                                {
                                  id: "item-8",
                                  type: "item",
                                  content: [
                                    {
                                      id: "contentLayoutGroup-15",
                                      type: "contentLayoutGroup",
                                      children: {
                                        id: "layoutInlineGroup-12",
                                        type: "layoutInlineGroup",
                                        children: [
                                          {
                                            id: "text-28",
                                            type: "text",
                                            body: "Following Einstein's original method, we will derive the transformation of time"
                                          },
                                          {
                                            id: "text-29",
                                            type: "text",
                                            body: "based on clock synchronization."
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
                                      id: "contentLayoutGroup-16",
                                      type: "contentLayoutGroup",
                                      children: {
                                        id: "layoutInlineGroup-13",
                                        type: "layoutInlineGroup",
                                        children: [
                                          {
                                            id: "text-30",
                                            type: "text",
                                            body: "This step lays the foundation for our subsequent analysis."
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
                    ]
                  },
                  {
                    id: "item-10",
                    type: "item",
                    content: [
                      {
                        id: "contentLayoutGroup-17",
                        type: "contentLayoutGroup",
                        children: {
                          id: "layoutInlineGroup-14",
                          type: "layoutInlineGroup",
                          children: [
                            {
                              body: "Lorentz Transformation for Time and Space:",
                              id: "textbf-4",
                              type: "textbf"
                            }
                          ]
                        }
                      },
                      {
                        id: "contentLayoutGroup-18",
                        type: "contentLayoutGroup",
                        children: {
                          id: "layoutBlockNodeGroup-4",
                          type: "layoutBlockNodeGroup",
                          children: [
                            {
                              id: "itemize-4",
                              type: "itemize",
                              items: [
                                {
                                  id: "item-11",
                                  type: "item",
                                  content: [
                                    {
                                      id: "contentLayoutGroup-19",
                                      type: "contentLayoutGroup",
                                      children: {
                                        id: "layoutInlineGroup-15",
                                        type: "layoutInlineGroup",
                                        children: [
                                          {
                                            id: "text-31",
                                            type: "text",
                                            body: "Using the invariance of the speed of light, we obtain compact expressions for the transformations of both space and time."
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
                    ]
                  }
                ]
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-20",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-16",
            type: "layoutInlineGroup",
            children: [
              {
                body: "Assumptions and Prerequisites:",
                id: "textbf-5",
                type: "textbf"
              },
              {
                id: "text-32",
                type: "text",
                body: "We assume that readers are familiar with advanced"
              },
              {
                id: "text-33",
                type: "text",
                body: "calculus, linear algebra, and the fundamental principles of Special Relativity.  "
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-21",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-17",
            type: "layoutInlineGroup",
            children: [
              {
                body: "Notation",
                id: "textbf-6",
                type: "textbf"
              },
              {
                id: "text-34",
                type: "text",
                body: ". We use Dirac's bra-ket notation as a compact language for vectors, dual vectors, and linear operators. "
              },
              {
                id: "text-35",
                type: "text",
                body: "Despite its widespread association with quantum mechanics, the notation is purely linear-algebraic "
              },
              {
                id: "text-36",
                type: "text",
                body: "and is equally applicable to Euclidean and spacetime vector spaces. "
              },
              {
                id: "text-37",
                type: "text",
                body: "Readers unfamiliar with the notation may consult any standard reference; for a concise introduction, "
              },
              {
                id: "text-38",
                type: "text",
                body: "see the Wikipedia article on bra-ket notation. "
              },
              {
                body: "https://en.wikipedia.org/wiki/Bra\\%E2\\%80\\%93ket_notation",
                id: "url-1",
                type: "url"
              },
              {
                id: "text-39",
                type: "text",
                body: ". "
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-22",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-18",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-40",
                type: "text",
                body: "Although the Lorentz transformation is often presented directly in matrix form,"
              },
              {
                id: "text-41",
                type: "text",
                body: "deriving it from Einstein's original arguments provides valuable physical"
              },
              {
                id: "text-42",
                type: "text",
                body: "insight into the geometric structure of spacetime and, perhaps more"
              },
              {
                id: "text-43",
                type: "text",
                body: "importantly, into the operational meaning of the transformation itself. Once"
              },
              {
                id: "text-44",
                type: "text",
                body: "this viewpoint is established, many of the central ideas of Special Relativity,"
              },
              {
                id: "text-45",
                type: "text",
                body: "including proper time, four-vectors, and relativistic dynamics, follow"
              },
              {
                id: "text-46",
                type: "text",
                body: "more easily. "
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
        id: "layoutInlineGroup-19",
        type: "layoutInlineGroup",
        children: [
          {
            id: "text-47",
            type: "text",
            body: "Synchronization of Clocks"
          }
        ]
      },
      intro: [
        {
          id: "contentLayoutGroup-23",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-20",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-48",
                type: "text",
                body: "In Special Relativity, the concept of clock synchronization plays a fundamental role in"
              },
              {
                id: "text-49",
                type: "text",
                body: "developing the Lorentz transformation of time and space. Although seemingly straightforward,"
              },
              {
                id: "text-50",
                type: "text",
                body: "this concept deserves careful discussion, as defining"
              },
              {
                id: "text-51",
                type: "text",
                body: "synchronization becomes essential for determining when events occur simultaneously."
              },
              {
                id: "text-52",
                type: "text",
                body: "We begin with a simple thought experiment. Imagine two observers, A and B, both"
              },
              {
                id: "text-53",
                type: "text",
                body: "at rest within the same reference system but positioned at different locations. These"
              },
              {
                id: "text-54",
                type: "text",
                body: "observers, A and B, each have their own clocks, measuring time independently."
              },
              {
                id: "text-55",
                type: "text",
                body: "Consider an experiment where a photon is emitted from A, travels to B, and gets"
              },
              {
                id: "text-56",
                type: "text",
                body: "reflected back to its origin in A. Observer A records the time of emission as "
              },
              {
                id: "inlineMath-2",
                type: "inlineMath",
                body: "t_1",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7651em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
              },
              {
                id: "text-57",
                type: "text",
                body: ", while"
              },
              {
                id: "text-58",
                type: "text",
                body: "observer B notes the time of reflection as "
              },
              {
                id: "inlineMath-3",
                type: "inlineMath",
                body: "t_2",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7651em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
              },
              {
                id: "text-59",
                type: "text",
                body: ". Finally, A marks the time of the photon"
              },
              {
                id: "text-60",
                type: "text",
                body: "arrival as "
              },
              {
                id: "inlineMath-4",
                type: "inlineMath",
                body: "t_3",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7651em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
              },
              {
                id: "text-61",
                type: "text",
                body: ". We assume that, after the experiment, the two observers compare the times recorded on their respective clocks"
              },
              {
                id: "text-62",
                type: "text",
                body: "(for example they would exchange data after the experiment). A possible outcome is shown in the table below (units of time are not relevant in this"
              },
              {
                id: "text-63",
                type: "text",
                body: "discussion): "
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-24",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-6",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "table-1",
                type: "table",
                rows: [
                  {
                    cells: [
                      {
                        id: "layoutInlineGroup-21",
                        type: "layoutInlineGroup",
                        children: [
                          {
                            id: "text-64",
                            type: "text",
                            body: "Time in A "
                          }
                        ]
                      },
                      {
                        id: "layoutInlineGroup-22",
                        type: "layoutInlineGroup",
                        children: [
                          {
                            id: "text-65",
                            type: "text",
                            body: "Time in B "
                          }
                        ]
                      },
                      {
                        id: "layoutInlineGroup-23",
                        type: "layoutInlineGroup",
                        children: [
                          {
                            id: "text-66",
                            type: "text",
                            body: "Event "
                          }
                        ]
                      }
                    ]
                  },
                  {
                    cells: [
                      {
                        id: "layoutInlineGroup-24",
                        type: "layoutInlineGroup",
                        children: [
                          {
                            id: "text-67",
                            type: "text",
                            body: "1 "
                          }
                        ]
                      },
                      {
                        id: "layoutInlineGroup-25",
                        type: "layoutInlineGroup",
                        children: [
                          {
                            id: "text-68",
                            type: "text",
                            body: "2 "
                          }
                        ]
                      },
                      {
                        id: "layoutInlineGroup-26",
                        type: "layoutInlineGroup",
                        children: [
                          {
                            id: "text-69",
                            type: "text",
                            body: "Emission, "
                          },
                          {
                            id: "inlineMath-5",
                            type: "inlineMath",
                            body: "t_1 = 1",
                            html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7651em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">1</span></span></span></span>"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    cells: [
                      {
                        id: "layoutInlineGroup-27",
                        type: "layoutInlineGroup",
                        children: [
                          {
                            id: "text-70",
                            type: "text",
                            body: "3 "
                          }
                        ]
                      },
                      {
                        id: "layoutInlineGroup-28",
                        type: "layoutInlineGroup",
                        children: [
                          {
                            id: "text-71",
                            type: "text",
                            body: "4 "
                          }
                        ]
                      },
                      {
                        id: "layoutInlineGroup-29",
                        type: "layoutInlineGroup",
                        children: [
                          {
                            id: "text-72",
                            type: "text",
                            body: "Reflection, "
                          },
                          {
                            id: "inlineMath-6",
                            type: "inlineMath",
                            body: "t_2 = 4",
                            html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7651em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">4</span></span></span></span>"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    cells: [
                      {
                        id: "layoutInlineGroup-30",
                        type: "layoutInlineGroup",
                        children: [
                          {
                            id: "text-73",
                            type: "text",
                            body: "5 "
                          }
                        ]
                      },
                      {
                        id: "layoutInlineGroup-31",
                        type: "layoutInlineGroup",
                        children: [
                          {
                            id: "text-74",
                            type: "text",
                            body: "6 "
                          }
                        ]
                      },
                      {
                        id: "layoutInlineGroup-32",
                        type: "layoutInlineGroup",
                        children: [
                          {
                            id: "text-75",
                            type: "text",
                            body: "Arrival, "
                          },
                          {
                            id: "inlineMath-7",
                            type: "inlineMath",
                            body: "t_3 = 5",
                            html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7651em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">5</span></span></span></span>"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-25",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-33",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-76",
                type: "text",
                body: "If the observer at point B used the time difference "
              },
              {
                id: "inlineMath-8",
                type: "inlineMath",
                body: "t_2 - t_1",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7651em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7651em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
              },
              {
                id: "text-77",
                type: "text",
                body: "to compute the time needed"
              },
              {
                id: "text-78",
                type: "text",
                body: "for the photon to reach B, they would obtain an incorrect result of 3 instead of the actual"
              },
              {
                id: "text-79",
                type: "text",
                body: "value of 2. More worrisome, the time difference "
              },
              {
                id: "inlineMath-9",
                type: "inlineMath",
                body: "(t_3 - t_2)",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span></span></span></span>"
              },
              {
                id: "text-80",
                type: "text",
                body: "would be 1, falsely suggesting that the two "
              },
              {
                id: "text-81",
                type: "text",
                body: "observers are not at rest with respect to one another. These"
              },
              {
                id: "text-82",
                type: "text",
                body: "discrepancies occur because the two clocks are not synchronized."
              },
              {
                id: "text-83",
                type: "text",
                body: "The way for B to synchronize their clock with A is to record the time stamp "
              },
              {
                id: "inlineMath-10",
                type: "inlineMath",
                body: "t_1",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7651em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
              },
              {
                id: "text-84",
                type: "text",
                body: ", wait for"
              },
              {
                id: "text-85",
                type: "text",
                body: "the photon to get back to A, ask A for "
              },
              {
                id: "inlineMath-11",
                type: "inlineMath",
                body: "t_3",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7651em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
              },
              {
                id: "text-86",
                type: "text",
                body: ", and set the clock in B such that:"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-26",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-7",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "equation-1",
                type: "equation",
                body: "t_2 - t_1 = t_3 - t_2",
                label: "eq:clock_synchronization",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.85em;\"><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.35em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-27",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-34",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-87",
                type: "text",
                body: "which is realized in this case by setting their clock back 1 unit. This requirement defines Einstein synchronization."
              },
              {
                id: "text-88",
                type: "text",
                body: "Having established a procedure for synchronizing clocks within a single inertial frame, we can now "
              },
              {
                id: "text-89",
                type: "text",
                body: "investigate how space and time measurements compare between two "
              },
              {
                id: "text-90",
                type: "text",
                body: "inertial frames in relative motion. This leads directly to the Lorentz transformation. "
              },
              {
                id: "text-91",
                type: "text",
                body: "This is the subject of the next sections."
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
        id: "layoutInlineGroup-35",
        type: "layoutInlineGroup",
        children: [
          {
            id: "text-92",
            type: "text",
            body: "Transformation of Time"
          }
        ]
      },
      intro: [
        {
          id: "contentLayoutGroup-28",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-36",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-93",
                type: "text",
                body: "In this section we will derive the equation for the transformation of time between two"
              },
              {
                id: "text-94",
                type: "text",
                body: "systems of reference moving with constant relative velocity. "
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
            id: "layoutInlineGroup-37",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-95",
                type: "text",
                body: "The Mirror Experiment"
              }
            ]
          },
          content: [
            {
              id: "contentLayoutGroup-29",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-38",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-96",
                    type: "text",
                    body: "We now examine the mirror experiment from the perspective of a new reference frame. In this"
                  },
                  {
                    id: "text-97",
                    type: "text",
                    body: "scenario, the mirror and the emitting source are both at rest within a system of reference"
                  },
                  {
                    id: "inlineMath-12",
                    type: "inlineMath",
                    body: "F'",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-98",
                    type: "text",
                    body: ", which itself is in motion relative to another system of reference "
                  },
                  {
                    id: "inlineMath-13",
                    type: "inlineMath",
                    body: "F",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span></span></span></span>"
                  },
                  {
                    id: "text-99",
                    type: "text",
                    body: ". Observers in "
                  },
                  {
                    id: "inlineMath-14",
                    type: "inlineMath",
                    body: "F",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span></span></span></span>"
                  },
                  {
                    id: "text-100",
                    type: "text",
                    body: "assign to each event a time "
                  },
                  {
                    id: "inlineMath-15",
                    type: "inlineMath",
                    body: "t",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6151em;\"></span><span class=\"mord mathnormal\">t</span></span></span></span>"
                  },
                  {
                    id: "text-101",
                    type: "text",
                    body: "and a position"
                  },
                  {
                    id: "inlineMath-16",
                    type: "inlineMath",
                    body: "\\vb x=(x_1,x_2,x_3)",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-102",
                    type: "text",
                    body: ", while observers in "
                  },
                  {
                    id: "inlineMath-17",
                    type: "inlineMath",
                    body: "F'",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-103",
                    type: "text",
                    body: "assign the corresponding"
                  },
                  {
                    id: "text-104",
                    type: "text",
                    body: "quantities "
                  },
                  {
                    id: "inlineMath-18",
                    type: "inlineMath",
                    body: "t'",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-105",
                    type: "text",
                    body: "and "
                  },
                  {
                    id: "inlineMath-19",
                    type: "inlineMath",
                    body: "\\vb x'=(x'_1,x'_2,x'_3)",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0019em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-2.4519em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2481em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-2.4519em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2481em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-2.4519em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2481em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-106",
                    type: "text",
                    body: ". We choose the origins of the two reference frames to coincide at "
                  },
                  {
                    id: "inlineMath-20",
                    type: "inlineMath",
                    body: "t=t'=0",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6151em;\"></span><span class=\"mord mathnormal\">t</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">0</span></span></span></span>"
                  },
                  {
                    id: "text-107",
                    type: "text",
                    body: "."
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-30",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-8",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "subsubsection-1",
                    type: "subsubsection",
                    title: {
                      id: "layoutInlineGroup-39",
                      type: "layoutInlineGroup",
                      children: [
                        {
                          id: "text-108",
                          type: "text",
                          body: "Experiment Observed from "
                        },
                        {
                          id: "inlineMath-21",
                          type: "inlineMath",
                          body: "F'",
                          html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
                        }
                      ]
                    },
                    numbering: {
                      path: [
                        3,
                        1,
                        1
                      ]
                    }
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-31",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-40",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-109",
                    type: "text",
                    body: "The source is located at the origin of "
                  },
                  {
                    id: "inlineMath-22",
                    type: "inlineMath",
                    body: "F'",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-110",
                    type: "text",
                    body: "and the mirror is positioned at a fixed location in an"
                  },
                  {
                    id: "text-111",
                    type: "text",
                    body: "arbitrary direction from the source. A photon is emitted at a time "
                  },
                  {
                    id: "inlineMath-23",
                    type: "inlineMath",
                    body: "t'_0",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.2481em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-2.4519em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2481em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-112",
                    type: "text",
                    body: "; it reaches the mirror at"
                  },
                  {
                    id: "text-113",
                    type: "text",
                    body: "time "
                  },
                  {
                    id: "inlineMath-24",
                    type: "inlineMath",
                    body: "t'_1",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.2481em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-2.4519em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2481em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-114",
                    type: "text",
                    body: "where it is reflected, and it arrives back at the source at time "
                  },
                  {
                    id: "inlineMath-25",
                    type: "inlineMath",
                    body: "t'_2",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.2481em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-2.4519em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2481em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-115",
                    type: "text",
                    body: "."
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-32",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-9",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "figure-1",
                    type: "figure",
                    src: "mirror.png",
                    width: 2400,
                    height: 1640,
                    caption: {
                      id: "layoutInlineGroup-41",
                      type: "layoutInlineGroup",
                      children: [
                        {
                          id: "text-116",
                          type: "text",
                          body: "Figure 1: Mirror experiment viewed in the reference frame "
                        },
                        {
                          id: "inlineMath-26",
                          type: "inlineMath",
                          body: "F'",
                          html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
                        },
                        {
                          id: "text-117",
                          type: "text",
                          body: ". The source and mirror are at rest, while the photon propagates along an arbitrary direction."
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-33",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-42",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-118",
                    type: "text",
                    body: "As we assume that the clocks in "
                  },
                  {
                    id: "inlineMath-27",
                    type: "inlineMath",
                    body: "F'",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-119",
                    type: "text",
                    body: "are synchronized, the following relation holds true:"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-34",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-10",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "equation-2",
                    type: "equation",
                    body: "\\frac{1}{2}(t'_0 + t'_2) = t'_1",
                    label: "eq:clock_synchronization_moving",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.0074em;vertical-align:-0.7537em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.2537em;\"><span style=\"top:-3.2537em;\"><span class=\"pstrut\" style=\"height:3.3214em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3214em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">2</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7537em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "subsubsection-2",
                    type: "subsubsection",
                    title: {
                      id: "layoutInlineGroup-43",
                      type: "layoutInlineGroup",
                      children: [
                        {
                          id: "text-120",
                          type: "text",
                          body: "Experiment Observed from "
                        },
                        {
                          id: "inlineMath-28",
                          type: "inlineMath",
                          body: "F",
                          html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span></span></span></span>"
                        }
                      ]
                    },
                    numbering: {
                      path: [
                        3,
                        1,
                        2
                      ]
                    }
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-35",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-44",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-121",
                    type: "text",
                    body: "Now we examine the three events---emission, reflection, and arrival back at the source--- from"
                  },
                  {
                    id: "text-122",
                    type: "text",
                    body: "the viewpoint of reference frame "
                  },
                  {
                    id: "inlineMath-29",
                    type: "inlineMath",
                    body: "F",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span></span></span></span>"
                  },
                  {
                    id: "text-123",
                    type: "text",
                    body: ". It is crucial to emphasize that all time, velocity, and"
                  },
                  {
                    id: "text-124",
                    type: "text",
                    body: "distance quantities in this section "
                  },
                  {
                    body: "are assumed to be measured within the system of\nreference",
                    id: "textit-1",
                    type: "textit"
                  },
                  {
                    id: "inlineMath-30",
                    type: "inlineMath",
                    body: "F",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span></span></span></span>"
                  },
                  {
                    id: "text-125",
                    type: "text",
                    body: "."
                  },
                  {
                    id: "text-126",
                    type: "text",
                    body: "The photon is emitted from the source at time "
                  },
                  {
                    id: "inlineMath-31",
                    type: "inlineMath",
                    body: "t_0",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7651em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-127",
                    type: "text",
                    body: "and at the position "
                  },
                  {
                    id: "inlineMath-32",
                    type: "inlineMath",
                    body: "\\vb{v}\\, t_0",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7651em;vertical-align:-0.15em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-128",
                    type: "text",
                    body: "where"
                  },
                  {
                    id: "inlineMath-33",
                    type: "inlineMath",
                    body: "\\vb{v}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span></span></span></span>"
                  },
                  {
                    id: "text-129",
                    type: "text",
                    body: "is the velocity of "
                  },
                  {
                    id: "inlineMath-34",
                    type: "inlineMath",
                    body: "F'",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-130",
                    type: "text",
                    body: "measured from "
                  },
                  {
                    id: "inlineMath-35",
                    type: "inlineMath",
                    body: "F",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span></span></span></span>"
                  },
                  {
                    id: "text-131",
                    type: "text",
                    body: "."
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-36",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-11",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "figure-2",
                    type: "figure",
                    src: "movingframes1.jpg",
                    width: 1578,
                    height: 720,
                    caption: {
                      id: "layoutInlineGroup-45",
                      type: "layoutInlineGroup",
                      children: [
                        {
                          id: "text-132",
                          type: "text",
                          body: "Figure 2: Velocities and positions of the photon seen from "
                        },
                        {
                          id: "inlineMath-36",
                          type: "inlineMath",
                          body: "F",
                          html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span></span></span></span>"
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-37",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-46",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-133",
                    type: "text",
                    body: "The photon travels to the mirror with speed "
                  },
                  {
                    id: "inlineMath-37",
                    type: "inlineMath",
                    body: "\\vb{c}_{up} = \\vb{c}_1 + \\vb{v}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7305em;vertical-align:-0.2861em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">u</span><span class=\"mord mathnormal mtight\">p</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7333em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span></span></span></span>"
                  },
                  {
                    id: "text-134",
                    type: "text",
                    body: ", and it"
                  },
                  {
                    id: "text-135",
                    type: "text",
                    body: "reaches it at a time:"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-38",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-12",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-1",
                    type: "displayMath",
                    body: "t_1 = t_0 + \\frac{l}{|\\vb{c}_1|} = t_0 + \\frac{l}{|\\vb{c}_{up} - \\vb{v}|}",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7651em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7651em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.3074em;vertical-align:-0.936em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3714em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mord\">∣</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.936em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7651em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.3435em;vertical-align:-0.9721em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3714em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">u</span><span class=\"mord mathnormal mtight\">p</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mord\">∣</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9721em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-39",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-47",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-136",
                    type: "text",
                    body: "where "
                  },
                  {
                    id: "inlineMath-38",
                    type: "inlineMath",
                    body: "l",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span></span></span></span>"
                  },
                  {
                    id: "text-137",
                    type: "text",
                    body: "is the distance between the source and the mirror measured"
                  },
                  {
                    id: "text-138",
                    type: "text",
                    body: "simultaneously in "
                  },
                  {
                    id: "inlineMath-39",
                    type: "inlineMath",
                    body: "F",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span></span></span></span>"
                  },
                  {
                    id: "text-139",
                    type: "text",
                    body: "at the time of emission."
                  },
                  {
                    id: "text-140",
                    type: "text",
                    body: "We assume that the source and mirror remain at a fixed distance "
                  },
                  {
                    id: "inlineMath-40",
                    type: "inlineMath",
                    body: "l",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span></span></span></span>"
                  },
                  {
                    id: "text-141",
                    type: "text",
                    body: "from one another throughout the experiment. "
                  },
                  {
                    id: "text-142",
                    type: "text",
                    body: "The vector "
                  },
                  {
                    id: "inlineMath-41",
                    type: "inlineMath",
                    body: "\\vb c_1",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-143",
                    type: "text",
                    body: "denotes the photon velocity relative to the moving frame "
                  },
                  {
                    id: "inlineMath-42",
                    type: "inlineMath",
                    body: "F'",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-144",
                    type: "text",
                    body: ", expressed in the coordinates of "
                  },
                  {
                    id: "inlineMath-43",
                    type: "inlineMath",
                    body: "F",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span></span></span></span>"
                  },
                  {
                    id: "text-145",
                    type: "text",
                    body: "."
                  },
                  {
                    id: "text-146",
                    type: "text",
                    body: "When the photon reaches the mirror, its position will be"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-40",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-13",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-2",
                    type: "displayMath",
                    body: "\\vb{v}\\, t_1 + (\\vb{c}_{up} - \\vb{v})(t_1 - t_0)\n  = \\vb{v}\\, t_0 + l\\,\\frac{\\vb{c}_{up}}{|\\vb{c}_{up} - \\vb{v}|}",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7651em;vertical-align:-0.15em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0361em;vertical-align:-0.2861em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">u</span><span class=\"mord mathnormal mtight\">p</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mclose\">)</span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7651em;vertical-align:-0.15em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.0935em;vertical-align:-0.9721em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1214em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">u</span><span class=\"mord mathnormal mtight\">p</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mord\">∣</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">u</span><span class=\"mord mathnormal mtight\">p</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9721em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-41",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-48",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-147",
                    type: "text",
                    body: "The time "
                  },
                  {
                    id: "inlineMath-44",
                    type: "inlineMath",
                    body: "t_2",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7651em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-148",
                    type: "text",
                    body: "when the photon reaches the source back again is"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-42",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-14",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-3",
                    type: "displayMath",
                    body: "t_2 = t_1 + \\frac{l}{|\\vb{c}_{down} - \\vb{v}|}\n      = t_0 + \\frac{l}{|\\vb{c}_{up} - \\vb{v}|} + \\frac{l}{|\\vb{c}_{down} - \\vb{v}|}",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7651em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7651em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.3074em;vertical-align:-0.936em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3714em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3361em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">d</span><span class=\"mord mathnormal mtight\">o</span><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0269em;\">w</span><span class=\"mord mathnormal mtight\">n</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mord\">∣</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.936em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7651em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.3435em;vertical-align:-0.9721em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3714em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">u</span><span class=\"mord mathnormal mtight\">p</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mord\">∣</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9721em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.3074em;vertical-align:-0.936em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3714em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3361em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">d</span><span class=\"mord mathnormal mtight\">o</span><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0269em;\">w</span><span class=\"mord mathnormal mtight\">n</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mord\">∣</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.936em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-43",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-49",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-149",
                    type: "text",
                    body: "where "
                  },
                  {
                    id: "inlineMath-45",
                    type: "inlineMath",
                    body: "\\vb{c}_{down}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3361em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">d</span><span class=\"mord mathnormal mtight\">o</span><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0269em;\">w</span><span class=\"mord mathnormal mtight\">n</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-150",
                    type: "text",
                    body: "is the photon velocity returning to the source. "
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-44",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-50",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-151",
                    type: "text",
                    body: "The position of the photon when it meets the source is,"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-45",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-15",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-4",
                    type: "displayMath",
                    body: "\\vb{v}\\, t_2\n  =\n  \\vb{v}\\, t_0\n  +\n  \\vb{v}\\,\\frac{l}{|\\vb{c}_{up}-\\vb{v}|}\n  +\n  \\vb{v}\\,\\frac{l}{|\\vb{c}_{down}-\\vb{v}|}.",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7651em;vertical-align:-0.15em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7651em;vertical-align:-0.15em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.3435em;vertical-align:-0.9721em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3714em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">u</span><span class=\"mord mathnormal mtight\">p</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mord\">∣</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9721em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.3074em;vertical-align:-0.936em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3714em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3361em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">d</span><span class=\"mord mathnormal mtight\">o</span><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0269em;\">w</span><span class=\"mord mathnormal mtight\">n</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mord\">∣</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.936em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\">.</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-46",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-51",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-152",
                    type: "text",
                    body: "To derive the Lorentz transformation, we postulate the existence of a"
                  },
                  {
                    id: "text-153",
                    type: "text",
                    body: "real-valued function on the events described in the reference frame "
                  },
                  {
                    id: "inlineMath-46",
                    type: "inlineMath",
                    body: "F",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span></span></span></span>"
                  },
                  {
                    id: "text-154",
                    type: "text",
                    body: ","
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-47",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-16",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "align-1",
                    type: "align",
                    body: "t' &: F \\longrightarrow \\mathbb{R}, \\\\\n  t' &= t'(\\vb{x},t),",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.7em;vertical-align:-1.1em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-r\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.6em;\"><span style=\"top:-3.76em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span><span style=\"top:-2.26em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1em;\"><span></span></span></span></span></span><span class=\"col-align-l\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.6em;\"><span style=\"top:-3.76em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">:</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">⟶</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathbb\">R</span><span class=\"mpunct\">,</span></span></span><span style=\"top:-2.26em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-48",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-52",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-155",
                    type: "text",
                    body: "where "
                  },
                  {
                    id: "inlineMath-47",
                    type: "inlineMath",
                    body: "(\\vb{x},t)",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-156",
                    type: "text",
                    body: "are the coordinates assigned in "
                  },
                  {
                    id: "inlineMath-48",
                    type: "inlineMath",
                    body: "F",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span></span></span></span>"
                  },
                  {
                    id: "text-157",
                    type: "text",
                    body: "to a given event."
                  },
                  {
                    id: "text-158",
                    type: "text",
                    body: "Formally, the events of emission, reflection and meeting the source again will be observed"
                  },
                  {
                    id: "text-159",
                    type: "text",
                    body: "in "
                  },
                  {
                    id: "inlineMath-49",
                    type: "inlineMath",
                    body: "F'",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-160",
                    type: "text",
                    body: "as"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-49",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-17",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "align-2",
                    type: "align",
                    body: "t'_0 &= t'(\\vb{v}\\, t_0,\\; t_0) \\\\\n  t'_1 &= t'\\!\\left(\n    \\vb{v}\\, t_0 + l\\,\\frac{\\vb{c}_{up}}{|\\vb{c}_{up} - \\vb{v}|},\\;\n    t_0 + \\frac{l}{|\\vb{c}_{up} - \\vb{v}|}\n  \\right) \\\\\n  t'_2 &= t'\\!\\left(\n    \\vb{v}\\, t_0 + \\vb{v}\\, l\n      \\bigl(|\\vb{c}_{up} - \\vb{v}|^{-1} + |\\vb{c}_{down} - \\vb{v}|^{-1}\\bigr),\\;\n    t_0 + l\\bigl(|\\vb{c}_{up} - \\vb{v}|^{-1} + |\\vb{c}_{down} - \\vb{v}|^{-1}\\bigr)\n  \\right)",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:5.4462em;vertical-align:-2.4731em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-r\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.9731em;\"><span style=\"top:-5.5831em;\"><span class=\"pstrut\" style=\"height:3.45em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-3.4731em;\"><span class=\"pstrut\" style=\"height:3.45em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-1.3369em;\"><span class=\"pstrut\" style=\"height:3.45em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.4731em;\"><span></span></span></span></span></span><span class=\"col-align-l\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.9731em;\"><span style=\"top:-5.5831em;\"><span class=\"pstrut\" style=\"height:3.45em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span></span></span><span style=\"top:-3.4731em;\"><span class=\"pstrut\" style=\"height:3.45em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:-0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">(</span></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1214em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">u</span><span class=\"mord mathnormal mtight\">p</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mord\">∣</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">u</span><span class=\"mord mathnormal mtight\">p</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9721em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3714em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">u</span><span class=\"mord mathnormal mtight\">p</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mord\">∣</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9721em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">)</span></span></span></span></span><span style=\"top:-1.3369em;\"><span class=\"pstrut\" style=\"height:3.45em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:-0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">u</span><span class=\"mord mathnormal mtight\">p</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mord\"><span class=\"mord\">∣</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">−</span><span class=\"mord mtight\">1</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3361em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">d</span><span class=\"mord mathnormal mtight\">o</span><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0269em;\">w</span><span class=\"mord mathnormal mtight\">n</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mord\"><span class=\"mord\">∣</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">−</span><span class=\"mord mtight\">1</span></span></span></span></span></span></span></span></span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">u</span><span class=\"mord mathnormal mtight\">p</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mord\"><span class=\"mord\">∣</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">−</span><span class=\"mord mtight\">1</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3361em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">d</span><span class=\"mord mathnormal mtight\">o</span><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0269em;\">w</span><span class=\"mord mathnormal mtight\">n</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mord\"><span class=\"mord\">∣</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">−</span><span class=\"mord mtight\">1</span></span></span></span></span></span></span></span></span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size1\">)</span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.4731em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-50",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-53",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-161",
                    type: "text",
                    body: "Expanding the function"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-51",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-18",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-5",
                    type: "displayMath",
                    body: "f(l)\n  =\n  t'\\!\\left(\n    \\vb{v}\\,t_0\n    +\n    l\\,\\frac{\\vb{c}_{up}}\n      {|\\vb{c}_{up}-\\vb{v}|},\n    \\;\n    t_0\n    +\n    \\frac{l}{|\\vb{c}_{up}-\\vb{v}|}\n  \\right)",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1076em;\">f</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.4221em;vertical-align:-0.9721em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:-0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">(</span></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1214em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">u</span><span class=\"mord mathnormal mtight\">p</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mord\">∣</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">u</span><span class=\"mord mathnormal mtight\">p</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9721em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3714em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">u</span><span class=\"mord mathnormal mtight\">p</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mord\">∣</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9721em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">)</span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-52",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-54",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-162",
                    type: "text",
                    body: "in a Taylor series around "
                  },
                  {
                    id: "inlineMath-50",
                    type: "inlineMath",
                    body: "l=0",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">0</span></span></span></span>"
                  },
                  {
                    id: "text-163",
                    type: "text",
                    body: ", we obtain"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-53",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-19",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-6",
                    type: "displayMath",
                    body: "t'_1\n  =\n  t'(\\vb{v}\\,t_0,t_0)\n  +\n  l\\,|\\vb{c}_{up}-\\vb{v}|^{-1}\n  \\ip{\n    \\grad t'(\\vb{v}\\,t_0,t_0)\n  }{\n    (\\vb{c}_{up},1)\n  }\n  +\n  o(l).",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0489em;vertical-align:-0.247em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0519em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0361em;vertical-align:-0.2861em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">u</span><span class=\"mord mathnormal mtight\">p</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.1141em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mord\"><span class=\"mord\">∣</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">−</span><span class=\"mord mtight\">1</span></span></span></span></span></span></span></span></span><span class=\"mopen\">⟨</span><span class=\"mord\">∇</span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0361em;vertical-align:-0.2861em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">u</span><span class=\"mord mathnormal mtight\">p</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose\">)⟩</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">o</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-54",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-55",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-164",
                    type: "text",
                    body: "A similar expansion holds for "
                  },
                  {
                    id: "inlineMath-51",
                    type: "inlineMath",
                    body: "t'_2",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.2481em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-2.4519em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2481em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-165",
                    type: "text",
                    body: ":"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-55",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-20",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-7",
                    type: "displayMath",
                    body: "t'_2\n  =\n  t'(\\vb{v}\\,t_0,t_0)\n  +\n  l\\bigl(\n    |\\vb{c}_{up}-\\vb{v}|^{-1}\n    +\n    |\\vb{c}_{down}-\\vb{v}|^{-1}\n  \\bigr)\n  \\ip{\n    \\grad t'(\\vb{v}\\,t_0,t_0)\n  }{\n    (\\vb{v},1)\n  }\n  +\n  o(l).",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0489em;vertical-align:-0.247em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0519em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">u</span><span class=\"mord mathnormal mtight\">p</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.1141em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mord\"><span class=\"mord\">∣</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">−</span><span class=\"mord mtight\">1</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3361em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">d</span><span class=\"mord mathnormal mtight\">o</span><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0269em;\">w</span><span class=\"mord mathnormal mtight\">n</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2141em;vertical-align:-0.35em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mord\"><span class=\"mord\">∣</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">−</span><span class=\"mord mtight\">1</span></span></span></span></span></span></span></span></span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mopen\">⟨</span><span class=\"mord\">∇</span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose\">)⟩</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">o</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-56",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-56",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-166",
                    type: "text",
                    body: "Using the synchronization condition"
                  },
                  {
                    id: "eqref-1",
                    type: "eqref",
                    body: "eq:clock_synchronization_moving"
                  },
                  {
                    id: "text-167",
                    type: "text",
                    body: "and taking the limit "
                  },
                  {
                    id: "inlineMath-52",
                    type: "inlineMath",
                    body: "l\\to0",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">→</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">0</span></span></span></span>"
                  },
                  {
                    id: "text-168",
                    type: "text",
                    body: ","
                  },
                  {
                    id: "text-169",
                    type: "text",
                    body: "we obtain"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-57",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-21",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-8",
                    type: "displayMath",
                    body: "\\ip{\\grad t'}{\\vb{w}}=0,",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0519em;vertical-align:-0.25em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord\">∇</span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">w</span></span><span class=\"mclose\">⟩</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8389em;vertical-align:-0.1944em;\"></span><span class=\"mord\">0</span><span class=\"mpunct\">,</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-58",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-57",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-170",
                    type: "text",
                    body: "where"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-59",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-22",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-9",
                    type: "displayMath",
                    body: "\\vb{w}\n  =\n  \\Bigl(\n    \\vb{v}\\bigl(\n      |\\vb{c}_{up}-\\vb{v}|^{-1}\n      +\n      |\\vb{c}_{down}-\\vb{v}|^{-1}\n    \\bigr)\n    -\n    2\\vb{c}_{up}|\\vb{c}_{up}-\\vb{v}|^{-1},\n    \\;\n    |\\vb{c}_{down}-\\vb{v}|^{-1}\n    -\n    |\\vb{c}_{up}-\\vb{v}|^{-1}\n  \\Bigr).",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">w</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.8em;vertical-align:-0.65em;\"></span><span class=\"mopen\"><span class=\"delimsizing size2\">(</span></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">u</span><span class=\"mord mathnormal mtight\">p</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.1141em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mord\"><span class=\"mord\">∣</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">−</span><span class=\"mord mtight\">1</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3361em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">d</span><span class=\"mord mathnormal mtight\">o</span><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0269em;\">w</span><span class=\"mord mathnormal mtight\">n</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2141em;vertical-align:-0.35em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mord\"><span class=\"mord\">∣</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">−</span><span class=\"mord mtight\">1</span></span></span></span></span></span></span></span></span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0361em;vertical-align:-0.2861em;\"></span><span class=\"mord\">2</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">u</span><span class=\"mord mathnormal mtight\">p</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mord\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">u</span><span class=\"mord mathnormal mtight\">p</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.1141em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mord\"><span class=\"mord\">∣</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">−</span><span class=\"mord mtight\">1</span></span></span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3361em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">d</span><span class=\"mord mathnormal mtight\">o</span><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0269em;\">w</span><span class=\"mord mathnormal mtight\">n</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.1141em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mord\"><span class=\"mord\">∣</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">−</span><span class=\"mord mtight\">1</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0361em;vertical-align:-0.2861em;\"></span><span class=\"mord\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">u</span><span class=\"mord mathnormal mtight\">p</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.8em;vertical-align:-0.65em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mord\"><span class=\"mord\">∣</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">−</span><span class=\"mord mtight\">1</span></span></span></span></span></span></span></span></span><span class=\"mclose\"><span class=\"delimsizing size2\">)</span></span><span class=\"mord\">.</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-60",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-58",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-171",
                    type: "text",
                    body: "Assuming a linear relationship between the time in "
                  },
                  {
                    id: "inlineMath-53",
                    type: "inlineMath",
                    body: "F'",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-172",
                    type: "text",
                    body: "and the coordinates in "
                  },
                  {
                    id: "inlineMath-54",
                    type: "inlineMath",
                    body: "F",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span></span></span></span>"
                  },
                  {
                    id: "text-173",
                    type: "text",
                    body: "as,"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-61",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-23",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-10",
                    type: "displayMath",
                    body: "t' = \\vb{p} \\cdot \\vb{x} + \\gamma\\, t",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8019em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6389em;vertical-align:-0.1944em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">p</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">⋅</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8095em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\">t</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-62",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-59",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-174",
                    type: "text",
                    body: "where "
                  },
                  {
                    id: "inlineMath-55",
                    type: "inlineMath",
                    body: "\\vb{p}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6389em;vertical-align:-0.1944em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">p</span></span></span></span></span>"
                  },
                  {
                    id: "text-175",
                    type: "text",
                    body: "is a vector transforming the spatial coordinates and "
                  },
                  {
                    id: "inlineMath-56",
                    type: "inlineMath",
                    body: "\\gamma",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span></span></span></span>"
                  },
                  {
                    id: "text-176",
                    type: "text",
                    body: "is the coefficient"
                  },
                  {
                    id: "text-177",
                    type: "text",
                    body: "transforming time, we arrive at the linear equation in "
                  },
                  {
                    id: "inlineMath-57",
                    type: "inlineMath",
                    body: "\\vb{p}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6389em;vertical-align:-0.1944em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">p</span></span></span></span></span>"
                  },
                  {
                    id: "text-178",
                    type: "text",
                    body: "and "
                  },
                  {
                    id: "inlineMath-58",
                    type: "inlineMath",
                    body: "\\gamma",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-63",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-24",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "equation-3",
                    type: "equation",
                    body: "\\vb{p} \\cdot \\bigl[\n    2\\vb{c}_{up}|\\vb{c}_{up}-\\vb{v}|^{-1}\n    -\n    \\vb{v}\\bigl(\n      |\\vb{c}_{up}-\\vb{v}|^{-1}\n      +\n      |\\vb{c}_{down}-\\vb{v}|^{-1}\n    \\bigr)\n  \\bigr]\n  +\n  \\gamma\\bigl(\n    |\\vb{c}_{up}-\\vb{v}|^{-1}\n    -\n    |\\vb{c}_{down}-\\vb{v}|^{-1}\n  \\bigr)\n  =0.",
                    label: "eq:condition_on_p",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.2241em;vertical-align:-0.3621em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8621em;\"><span style=\"top:-2.9979em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">p</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">⋅</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mopen\"><span class=\"delimsizing size1\">[</span></span><span class=\"mord\">2</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">u</span><span class=\"mord mathnormal mtight\">p</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mord\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">u</span><span class=\"mord mathnormal mtight\">p</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mord\"><span class=\"mord\">∣</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">−</span><span class=\"mord mtight\">1</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">u</span><span class=\"mord mathnormal mtight\">p</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mord\"><span class=\"mord\">∣</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">−</span><span class=\"mord mtight\">1</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3361em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">d</span><span class=\"mord mathnormal mtight\">o</span><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0269em;\">w</span><span class=\"mord mathnormal mtight\">n</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mord\"><span class=\"mord\">∣</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">−</span><span class=\"mord mtight\">1</span></span></span></span></span></span></span></span></span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mclose\"><span class=\"delimsizing size1\">]</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">u</span><span class=\"mord mathnormal mtight\">p</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mord\"><span class=\"mord\">∣</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">−</span><span class=\"mord mtight\">1</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3361em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">d</span><span class=\"mord mathnormal mtight\">o</span><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0269em;\">w</span><span class=\"mord mathnormal mtight\">n</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mord\"><span class=\"mord\">∣</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">−</span><span class=\"mord mtight\">1</span></span></span></span></span></span></span></span></span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\">0.</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3621em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "figure-3",
                    type: "figure",
                    src: "fig1.png",
                    width: 621,
                    height: 563,
                    caption: {
                      id: "layoutInlineGroup-60",
                      type: "layoutInlineGroup",
                      children: [
                        {
                          id: "text-179",
                          type: "text",
                          body: "Fig. 3. Geometric construction relating the photon velocities and the boost velocity."
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-64",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-61",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-180",
                    type: "text",
                    body: "Equation "
                  },
                  {
                    id: "eqref-2",
                    type: "eqref",
                    body: "eq:condition_on_p"
                  },
                  {
                    id: "text-181",
                    type: "text",
                    body: "can be further simplified by examining"
                  },
                  {
                    id: "text-182",
                    type: "text",
                    body: "the directions of the vectors "
                  },
                  {
                    id: "inlineMath-59",
                    type: "inlineMath",
                    body: "\\vb v",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span></span></span></span>"
                  },
                  {
                    id: "text-183",
                    type: "text",
                    body: ", "
                  },
                  {
                    id: "inlineMath-60",
                    type: "inlineMath",
                    body: "\\vb c_{down}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3361em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">d</span><span class=\"mord mathnormal mtight\">o</span><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0269em;\">w</span><span class=\"mord mathnormal mtight\">n</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-184",
                    type: "text",
                    body: ", and"
                  },
                  {
                    id: "inlineMath-61",
                    type: "inlineMath",
                    body: "\\vb c_{up}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7305em;vertical-align:-0.2861em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">u</span><span class=\"mord mathnormal mtight\">p</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-185",
                    type: "text",
                    body: ". Since the photon in "
                  },
                  {
                    id: "inlineMath-62",
                    type: "inlineMath",
                    body: "F'",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-186",
                    type: "text",
                    body: "returns along the same line on"
                  },
                  {
                    id: "text-187",
                    type: "text",
                    body: "which it traveled toward the mirror, the vectors"
                  },
                  {
                    id: "inlineMath-63",
                    type: "inlineMath",
                    body: "\\vb c_{down}-\\vb v",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7333em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3361em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">d</span><span class=\"mord mathnormal mtight\">o</span><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0269em;\">w</span><span class=\"mord mathnormal mtight\">n</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span></span></span></span>"
                  },
                  {
                    id: "text-188",
                    type: "text",
                    body: "and "
                  },
                  {
                    id: "inlineMath-64",
                    type: "inlineMath",
                    body: "\\vb c_{up}-\\vb v",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8694em;vertical-align:-0.2861em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">u</span><span class=\"mord mathnormal mtight\">p</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span></span></span></span>"
                  },
                  {
                    id: "text-189",
                    type: "text",
                    body: "are collinear and"
                  },
                  {
                    id: "text-190",
                    type: "text",
                    body: "oppositely directed, although their magnitudes need not be equal."
                  },
                  {
                    id: "text-191",
                    type: "text",
                    body: "Consequently, "
                  },
                  {
                    id: "inlineMath-65",
                    type: "inlineMath",
                    body: "\\vb c_{up}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7305em;vertical-align:-0.2861em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">u</span><span class=\"mord mathnormal mtight\">p</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-192",
                    type: "text",
                    body: ", "
                  },
                  {
                    id: "inlineMath-66",
                    type: "inlineMath",
                    body: "\\vb c_{down}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3361em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">d</span><span class=\"mord mathnormal mtight\">o</span><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0269em;\">w</span><span class=\"mord mathnormal mtight\">n</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-193",
                    type: "text",
                    body: ", and "
                  },
                  {
                    id: "inlineMath-67",
                    type: "inlineMath",
                    body: "\\vb v",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span></span></span></span>"
                  },
                  {
                    id: "text-194",
                    type: "text",
                    body: "all lie in the"
                  },
                  {
                    id: "text-195",
                    type: "text",
                    body: "same plane, as shown in Fig.~3."
                  },
                  {
                    id: "text-196",
                    type: "text",
                    body: "In the system of reference of three mutually orthogonal unit vectors "
                  },
                  {
                    id: "inlineMath-68",
                    type: "inlineMath",
                    body: "\\vb{e}_1",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-197",
                    type: "text",
                    body: ", "
                  },
                  {
                    id: "inlineMath-69",
                    type: "inlineMath",
                    body: "\\vb{e}_2",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-198",
                    type: "text",
                    body: ","
                  },
                  {
                    id: "text-199",
                    type: "text",
                    body: "and "
                  },
                  {
                    id: "inlineMath-70",
                    type: "inlineMath",
                    body: "\\vb{e}_3",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-200",
                    type: "text",
                    body: ", with "
                  },
                  {
                    id: "inlineMath-71",
                    type: "inlineMath",
                    body: "\\vb{e}_1",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-201",
                    type: "text",
                    body: "and "
                  },
                  {
                    id: "inlineMath-72",
                    type: "inlineMath",
                    body: "\\vb{e}_2",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-202",
                    type: "text",
                    body: "in the same plane of "
                  },
                  {
                    id: "inlineMath-73",
                    type: "inlineMath",
                    body: "\\vb{c}_{up}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7305em;vertical-align:-0.2861em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">u</span><span class=\"mord mathnormal mtight\">p</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-203",
                    type: "text",
                    body: "and"
                  },
                  {
                    id: "inlineMath-74",
                    type: "inlineMath",
                    body: "\\vb{v}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span></span></span></span>"
                  },
                  {
                    id: "text-204",
                    type: "text",
                    body: ", and "
                  },
                  {
                    id: "inlineMath-75",
                    type: "inlineMath",
                    body: "\\vb{e}_1",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-205",
                    type: "text",
                    body: "in the same direction as "
                  },
                  {
                    id: "inlineMath-76",
                    type: "inlineMath",
                    body: "\\mathbf{v}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord mathbf\" style=\"margin-right:0.016em;\">v</span></span></span></span>"
                  },
                  {
                    id: "text-206",
                    type: "text",
                    body: ", the vector "
                  },
                  {
                    id: "inlineMath-77",
                    type: "inlineMath",
                    body: "\\mathbf{p}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6389em;vertical-align:-0.1944em;\"></span><span class=\"mord mathbf\">p</span></span></span></span>"
                  },
                  {
                    id: "text-207",
                    type: "text",
                    body: "has"
                  },
                  {
                    id: "text-208",
                    type: "text",
                    body: "components, "
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-65",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-25",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-11",
                    type: "displayMath",
                    body: "\\vb{p} = p_1\\,\\vb{e}_1 + p_2\\,\\vb{e}_2 + p_3\\,\\vb{e}_3",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6389em;vertical-align:-0.1944em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">p</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7778em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">p</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7778em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">p</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6389em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">p</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-66",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-62",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-209",
                    type: "text",
                    body: "and equation "
                  },
                  {
                    id: "eqref-3",
                    type: "eqref",
                    body: "eq:condition_on_p"
                  },
                  {
                    id: "text-210",
                    type: "text",
                    body: "simplifies to"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-67",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-26",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-12",
                    type: "displayMath",
                    body: "p_1\\, v\\bigl(|\\vb{c}_{up} - \\vb{v}|^{-1} + |\\vb{c}_{down} - \\vb{v}|^{-1}\\bigr)\n  - 2c(p_1\\cos\\alpha + p_2\\sin\\alpha)|\\vb{c}_{up} - \\vb{v}|^{-1}\n  + \\gamma\\bigl(|\\vb{c}_{up} - \\vb{v}|^{-1} - |\\vb{c}_{down} - \\vb{v}|^{-1}\\bigr) = 0",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">p</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">u</span><span class=\"mord mathnormal mtight\">p</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.1141em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mord\"><span class=\"mord\">∣</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">−</span><span class=\"mord mtight\">1</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3361em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">d</span><span class=\"mord mathnormal mtight\">o</span><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0269em;\">w</span><span class=\"mord mathnormal mtight\">n</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2141em;vertical-align:-0.35em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mord\"><span class=\"mord\">∣</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">−</span><span class=\"mord mtight\">1</span></span></span></span></span></span></span></span></span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\">2</span><span class=\"mord mathnormal\">c</span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">p</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mop\">cos</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0037em;\">α</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0361em;vertical-align:-0.2861em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">p</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mop\">sin</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0037em;\">α</span><span class=\"mclose\">)</span><span class=\"mord\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">u</span><span class=\"mord mathnormal mtight\">p</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.1141em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mord\"><span class=\"mord\">∣</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">−</span><span class=\"mord mtight\">1</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">u</span><span class=\"mord mathnormal mtight\">p</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.1141em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mord\"><span class=\"mord\">∣</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">−</span><span class=\"mord mtight\">1</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3361em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">d</span><span class=\"mord mathnormal mtight\">o</span><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0269em;\">w</span><span class=\"mord mathnormal mtight\">n</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2141em;vertical-align:-0.35em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mord\"><span class=\"mord\">∣</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">−</span><span class=\"mord mtight\">1</span></span></span></span></span></span></span></span></span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">0</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-68",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-63",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-211",
                    type: "text",
                    body: "Since the direction of the photon is arbitrary, we choose "
                  },
                  {
                    id: "inlineMath-78",
                    type: "inlineMath",
                    body: "\\vb e_2",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-212",
                    type: "text",
                    body: "in"
                  },
                  {
                    id: "text-213",
                    type: "text",
                    body: "the direction of the component of "
                  },
                  {
                    id: "inlineMath-79",
                    type: "inlineMath",
                    body: "\\vb p",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6389em;vertical-align:-0.1944em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">p</span></span></span></span></span>"
                  },
                  {
                    id: "text-214",
                    type: "text",
                    body: "orthogonal to "
                  },
                  {
                    id: "inlineMath-80",
                    type: "inlineMath",
                    body: "\\vb v",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span></span></span></span>"
                  },
                  {
                    id: "text-215",
                    type: "text",
                    body: ". With"
                  },
                  {
                    id: "text-216",
                    type: "text",
                    body: "this choice, "
                  },
                  {
                    id: "inlineMath-81",
                    type: "inlineMath",
                    body: "\\vb p",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6389em;vertical-align:-0.1944em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">p</span></span></span></span></span>"
                  },
                  {
                    id: "text-217",
                    type: "text",
                    body: "lies in the plane spanned by "
                  },
                  {
                    id: "inlineMath-82",
                    type: "inlineMath",
                    body: "\\vb e_1",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-218",
                    type: "text",
                    body: "and"
                  },
                  {
                    id: "inlineMath-83",
                    type: "inlineMath",
                    body: "\\vb e_2",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-219",
                    type: "text",
                    body: ", and therefore "
                  },
                  {
                    id: "inlineMath-84",
                    type: "inlineMath",
                    body: "p_3=0",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">p</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">0</span></span></span></span>"
                  },
                  {
                    id: "text-220",
                    type: "text",
                    body: "."
                  },
                  {
                    id: "text-221",
                    type: "text",
                    body: "From"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-69",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-27",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-13",
                    type: "displayMath",
                    body: "\\cos\\alpha = \\frac{c^2 + v^2 - |\\vb{c}_{up} - \\vb{v}|^2}{2vc}",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mop\">cos</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0037em;\">α</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.1771em;vertical-align:-0.686em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4911em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">2</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"mord mathnormal\">c</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">u</span><span class=\"mord mathnormal mtight\">p</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mord\"><span class=\"mord\">∣</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-70",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-64",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-222",
                    type: "text",
                    body: "we arrive at"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-71",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-28",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-14",
                    type: "displayMath",
                    body: "p_1\\,\\frac{c^2}{v} + \\gamma\n  + p_2\\,\\frac{2c\\sin\\alpha\\,|\\vb{c}_{up} - \\vb{v}|}{|\\vb{c}_{up} - \\vb{v}| - |\\vb{c}_{down} - \\vb{v}|}\n  = 0 \\quad \\forall\\, \\alpha, v",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.1771em;vertical-align:-0.686em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">p</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4911em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7778em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.3991em;vertical-align:-0.9721em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">p</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.427em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">u</span><span class=\"mord mathnormal mtight\">p</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mord\">∣</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3361em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">d</span><span class=\"mord mathnormal mtight\">o</span><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0269em;\">w</span><span class=\"mord mathnormal mtight\">n</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mord\">∣</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">2</span><span class=\"mord mathnormal\">c</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mop\">sin</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0037em;\">α</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">u</span><span class=\"mord mathnormal mtight\">p</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mord\">∣</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9721em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord\">0</span><span class=\"mspace\" style=\"margin-right:1em;\"></span><span class=\"mord\">∀</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0037em;\">α</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-72",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-65",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-223",
                    type: "text",
                    body: "which has solutions"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-73",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-29",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "align-3",
                    type: "align",
                    body: "p_1 &= -\\gamma\\,\\frac{v}{c^2} \\\\\n  p_2 &= 0",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:3.2936em;vertical-align:-1.3968em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-r\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.8968em;\"><span style=\"top:-3.8968em;\"><span class=\"pstrut\" style=\"height:3.1076em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">p</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-2.0708em;\"><span class=\"pstrut\" style=\"height:3.1076em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">p</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3968em;\"><span></span></span></span></span></span><span class=\"col-align-l\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.8968em;\"><span style=\"top:-3.8968em;\"><span class=\"pstrut\" style=\"height:3.1076em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\">−</span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span></span></span><span style=\"top:-2.0708em;\"><span class=\"pstrut\" style=\"height:3.1076em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3968em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-74",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-66",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-224",
                    type: "text",
                    body: "The transformation of time between "
                  },
                  {
                    id: "inlineMath-85",
                    type: "inlineMath",
                    body: "F'",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-225",
                    type: "text",
                    body: "and "
                  },
                  {
                    id: "inlineMath-86",
                    type: "inlineMath",
                    body: "F",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span></span></span></span>"
                  },
                  {
                    id: "text-226",
                    type: "text",
                    body: "becomes then"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-75",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-30",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "equation-4",
                    type: "equation",
                    body: "ct' = \\gamma\\!\\left(-\\frac{v}{c}\\ip{\\vb{e}_1}{\\vb{x}} + ct\\right)",
                    label: "eq:transformation_of_time",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.836em;vertical-align:-0.668em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.168em;\"><span style=\"top:-3.168em;\"><span class=\"pstrut\" style=\"height:3.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:-0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size2\">(</span></span><span class=\"mord\">−</span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">c</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mopen\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"mclose\">⟩</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\">c</span><span class=\"mord mathnormal\">t</span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size2\">)</span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.668em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-76",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-67",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-227",
                    type: "text",
                    body: "where "
                  },
                  {
                    id: "inlineMath-87",
                    type: "inlineMath",
                    body: "\\gamma",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span></span></span></span>"
                  },
                  {
                    id: "text-228",
                    type: "text",
                    body: "depends only on the relative velocity between the two frames."
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
        id: "layoutInlineGroup-68",
        type: "layoutInlineGroup",
        children: [
          {
            id: "text-229",
            type: "text",
            body: "Transformation of Space"
          }
        ]
      },
      intro: [],
      subsections: [
        {
          id: "subsection-2",
          type: "subsection",
          title: {
            id: "layoutInlineGroup-69",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-230",
                type: "text",
                body: "The Most General Linear Transformation"
              }
            ]
          },
          content: [
            {
              id: "contentLayoutGroup-77",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-70",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-231",
                    type: "text",
                    body: "The Lorentz transformation describes how the coordinates and the time of the same event"
                  },
                  {
                    id: "text-232",
                    type: "text",
                    body: "observed in "
                  },
                  {
                    id: "inlineMath-88",
                    type: "inlineMath",
                    body: "F",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span></span></span></span>"
                  },
                  {
                    id: "text-233",
                    type: "text",
                    body: "and "
                  },
                  {
                    id: "inlineMath-89",
                    type: "inlineMath",
                    body: "F'",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-234",
                    type: "text",
                    body: "are related to each other. We postulate that the transformation is linear,"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-78",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-31",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-15",
                    type: "displayMath",
                    body: "\\vb{X}' = \\boldsymbol{\\Lambda}(\\vb{v})\\,\\vb{X}",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8279em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">X</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8279em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Λ</span></span></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">X</span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-79",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-71",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-235",
                    type: "text",
                    body: "where "
                  },
                  {
                    id: "inlineMath-90",
                    type: "inlineMath",
                    body: "\\boldsymbol{\\Lambda}(\\vb{v})",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Λ</span></span></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-236",
                    type: "text",
                    body: "is a matrix depending only on the velocity vector"
                  },
                  {
                    id: "inlineMath-91",
                    type: "inlineMath",
                    body: "\\vb{v}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span></span></span></span>"
                  },
                  {
                    id: "text-237",
                    type: "text",
                    body: ", and "
                  },
                  {
                    id: "inlineMath-92",
                    type: "inlineMath",
                    body: "\\vb{X}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6861em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">X</span></span></span></span></span>"
                  },
                  {
                    id: "text-238",
                    type: "text",
                    body: "is the four-vector"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-80",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-32",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-16",
                    type: "displayMath",
                    body: "\\vb{X} = (x_1, x_2, x_3, ct).",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6861em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">X</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\">c</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-81",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-72",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-239",
                    type: "text",
                    body: "A four-vector can be expanded in the basis formed by the mutually"
                  },
                  {
                    id: "text-240",
                    type: "text",
                    body: "orthogonal unit vectors "
                  },
                  {
                    id: "inlineMath-93",
                    type: "inlineMath",
                    body: "\\vb{e}_1",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-241",
                    type: "text",
                    body: ", "
                  },
                  {
                    id: "inlineMath-94",
                    type: "inlineMath",
                    body: "\\vb{e}_2",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-242",
                    type: "text",
                    body: "and "
                  },
                  {
                    id: "inlineMath-95",
                    type: "inlineMath",
                    body: "\\vb{e}_3",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-243",
                    type: "text",
                    body: ", with "
                  },
                  {
                    id: "inlineMath-96",
                    type: "inlineMath",
                    body: "\\vb{e}_1",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-244",
                    type: "text",
                    body: "chosen parallel to"
                  },
                  {
                    id: "inlineMath-97",
                    type: "inlineMath",
                    body: "\\vb{v}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span></span></span></span>"
                  },
                  {
                    id: "text-245",
                    type: "text",
                    body: ":"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-82",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-33",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-17",
                    type: "displayMath",
                    body: "\\vb{X} = x_1\\ket{\\vb{e}_1, 0} + x_2\\ket{\\vb{e}_2, 0} + x_3\\ket{\\vb{e}_3, 0}\n           + ct\\ket{\\vb{0}, 1}",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6861em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">X</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">c</span><span class=\"mord mathnormal\">t</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-83",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-73",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-246",
                    type: "text",
                    body: "and the Lorentz transformation "
                  },
                  {
                    id: "inlineMath-98",
                    type: "inlineMath",
                    body: "\\boldsymbol{\\Lambda}(\\vb{v})",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Λ</span></span></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-247",
                    type: "text",
                    body: "in its most general form"
                  },
                  {
                    id: "text-248",
                    type: "text",
                    body: "becomes"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-84",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-34",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "equation-5",
                    type: "equation",
                    body: "\\begin{aligned}\n    \\boldsymbol{\\Lambda}(\\vb{v}) =\\;\n      &\\lambda_{1,1}\\ket{\\vb{e}_1,0}\\bra{\\vb{e}_1,0}\n      + \\lambda_{1,2}\\ket{\\vb{e}_1,0}\\bra{\\vb{e}_2,0}\n      + \\lambda_{1,3}\\ket{\\vb{e}_1,0}\\bra{\\vb{e}_3,0}\n      + \\lambda_{1,4}\\ket{\\vb{e}_1,0}\\bra{\\vb{0},1} \\\\\n    +\\;&\\lambda_{2,1}\\ket{\\vb{e}_2,0}\\bra{\\vb{e}_1,0}\n      + \\lambda_{2,2}\\ket{\\vb{e}_2,0}\\bra{\\vb{e}_2,0}\n      + \\lambda_{2,3}\\ket{\\vb{e}_2,0}\\bra{\\vb{e}_3,0}\n      + \\lambda_{2,4}\\ket{\\vb{e}_2,0}\\bra{\\vb{0},1} \\\\\n    +\\;&\\lambda_{3,1}\\ket{\\vb{e}_3,0}\\bra{\\vb{e}_1,0}\n      + \\lambda_{3,2}\\ket{\\vb{e}_3,0}\\bra{\\vb{e}_2,0}\n      + \\lambda_{3,3}\\ket{\\vb{e}_3,0}\\bra{\\vb{e}_3,0}\n      + \\lambda_{3,4}\\ket{\\vb{e}_3,0}\\bra{\\vb{0},1} \\\\\n    +\\;&\\lambda_{4,1}\\ket{\\vb{0},1}\\bra{\\vb{e}_1,0}\n      + \\lambda_{4,2}\\ket{\\vb{0},1}\\bra{\\vb{e}_2,0}\n      + \\lambda_{4,3}\\ket{\\vb{0},1}\\bra{\\vb{e}_3,0}\n      + \\lambda_{4,4}\\ket{\\vb{0},1}\\bra{\\vb{0},1}\n  \\end{aligned}",
                    label: "eq:general_Lorentz",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:5.7em;vertical-align:-2.6em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:3.1em;\"><span style=\"top:-5.1em;\"><span class=\"pstrut\" style=\"height:5.1em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-r\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:3.1em;\"><span style=\"top:-5.26em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Λ</span></span></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span></span><span style=\"top:-3.76em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">+</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span></span><span style=\"top:-2.26em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">+</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span></span><span style=\"top:-0.76em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">+</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.6em;\"><span></span></span></span></span></span><span class=\"col-align-l\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:3.1em;\"><span style=\"top:-5.26em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">1</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">1</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">1</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">2</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">1</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">3</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">1</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">4</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span></span></span><span style=\"top:-3.76em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">2</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">1</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">2</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">2</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">2</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">3</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">2</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">4</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span></span></span><span style=\"top:-2.26em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">3</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">1</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">3</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">2</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">3</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">3</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">3</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">4</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span></span></span><span style=\"top:-0.76em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">4</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">1</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">4</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">2</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">4</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">3</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">4</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">4</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.6em;\"><span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.6em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-85",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-74",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-249",
                    type: "text",
                    body: "where "
                  },
                  {
                    id: "inlineMath-99",
                    type: "inlineMath",
                    body: "\\lambda_{i,j}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.9805em;vertical-align:-0.2861em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">i</span><span class=\"mpunct mtight\">,</span><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0572em;\">j</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-250",
                    type: "text",
                    body: "are, at this stage, arbitrary. The transformation of time"
                  },
                  {
                    id: "eqref-4",
                    type: "eqref",
                    body: "eq:transformation_of_time"
                  },
                  {
                    id: "text-251",
                    type: "text",
                    body: "can be utilized to identify some of the "
                  },
                  {
                    id: "inlineMath-100",
                    type: "inlineMath",
                    body: "\\lambda_{i,j}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.9805em;vertical-align:-0.2861em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">i</span><span class=\"mpunct mtight\">,</span><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0572em;\">j</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-252",
                    type: "text",
                    body: "but"
                  },
                  {
                    id: "text-253",
                    type: "text",
                    body: "not all of them: additional physical assumptions are required on how events are observed in "
                  },
                  {
                    id: "inlineMath-101",
                    type: "inlineMath",
                    body: "F",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span></span></span></span>"
                  },
                  {
                    id: "text-254",
                    type: "text",
                    body: "and "
                  },
                  {
                    id: "inlineMath-102",
                    type: "inlineMath",
                    body: "F'",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-255",
                    type: "text",
                    body: "to"
                  },
                  {
                    id: "text-256",
                    type: "text",
                    body: "restrict the possible choices for "
                  },
                  {
                    id: "inlineMath-103",
                    type: "inlineMath",
                    body: "\\lambda_{i,j}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.9805em;vertical-align:-0.2861em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3117em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">i</span><span class=\"mpunct mtight\">,</span><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0572em;\">j</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-257",
                    type: "text",
                    body: "."
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
          id: "subsection-3",
          type: "subsection",
          title: {
            id: "layoutInlineGroup-75",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-258",
                type: "text",
                body: "Determining the Time Transformation"
              }
            ]
          },
          content: [
            {
              id: "contentLayoutGroup-86",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-76",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-259",
                    type: "text",
                    body: "The transformation "
                  },
                  {
                    id: "inlineMath-104",
                    type: "inlineMath",
                    body: "\\boldsymbol{\\Lambda}(\\vb{v})",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Λ</span></span></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-260",
                    type: "text",
                    body: "applied to a four-vector with only a time"
                  },
                  {
                    id: "text-261",
                    type: "text",
                    body: "component "
                  },
                  {
                    id: "inlineMath-105",
                    type: "inlineMath",
                    body: "\\vb{X} = x_4\\ket{\\vb{0},1}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6861em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">X</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">4</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span></span></span></span>"
                  },
                  {
                    id: "text-262",
                    type: "text",
                    body: "gives,"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-87",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-35",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-18",
                    type: "displayMath",
                    body: "\\boldsymbol{\\Lambda}\\, x_4\\ket{\\vb{0},1}\n  = x_4\\!\\left(\n      \\lambda_{1,4}\\ket{\\vb{e}_1,0}\n    + \\lambda_{2,4}\\ket{\\vb{e}_2,0}\n    + \\lambda_{3,4}\\ket{\\vb{e}_3,0}\n    + \\lambda_{4,4}\\ket{\\vb{0},1}\n  \\right)",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Λ</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">4</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0361em;vertical-align:-0.2861em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">4</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:-0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">1</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">4</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">2</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">4</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">3</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">4</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">4</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">4</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">)</span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-88",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-77",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-263",
                    type: "text",
                    body: "From the previously derived transformation of time"
                  },
                  {
                    id: "eqref-5",
                    type: "eqref",
                    body: "eq:transformation_of_time"
                  },
                  {
                    id: "text-264",
                    type: "text",
                    body: ", the image of a four-vector having only"
                  },
                  {
                    id: "text-265",
                    type: "text",
                    body: "a temporal component contains only a component parallel to"
                  },
                  {
                    id: "inlineMath-106",
                    type: "inlineMath",
                    body: "\\ket{\\vb{e}_1,0}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span></span></span></span>"
                  },
                  {
                    id: "text-266",
                    type: "text",
                    body: "and a temporal component. Hence it cannot have"
                  },
                  {
                    id: "text-267",
                    type: "text",
                    body: "components along "
                  },
                  {
                    id: "inlineMath-107",
                    type: "inlineMath",
                    body: "\\ket{\\vb{e}_2,0}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span></span></span></span>"
                  },
                  {
                    id: "text-268",
                    type: "text",
                    body: "or "
                  },
                  {
                    id: "inlineMath-108",
                    type: "inlineMath",
                    body: "\\ket{\\vb{e}_3,0}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span></span></span></span>"
                  },
                  {
                    id: "text-269",
                    type: "text",
                    body: ", and therefore"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-89",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-36",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-19",
                    type: "displayMath",
                    body: "\\lambda_{2,4}=\\lambda_{3,4}=0.",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.9805em;vertical-align:-0.2861em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">2</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">4</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.9805em;vertical-align:-0.2861em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">3</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">4</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">0.</span></span></span></span></span>"
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
        },
        {
          id: "subsection-4",
          type: "subsection",
          title: {
            id: "layoutInlineGroup-78",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-270",
                type: "text",
                body: "First Assumption: Preservation of the Longitudinal Direction"
              }
            ]
          },
          content: [
            {
              id: "contentLayoutGroup-90",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-79",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-271",
                    type: "text",
                    body: "The first assumption we make is that the subspace spanned by the direction"
                  },
                  {
                    id: "inlineMath-109",
                    type: "inlineMath",
                    body: "\\vb e_1",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-272",
                    type: "text",
                    body: "and the time direction is invariant. Thus, an event in "
                  },
                  {
                    id: "inlineMath-110",
                    type: "inlineMath",
                    body: "F",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span></span></span></span>"
                  },
                  {
                    id: "text-273",
                    type: "text",
                    body: "with"
                  },
                  {
                    id: "text-274",
                    type: "text",
                    body: "spatial components only along "
                  },
                  {
                    id: "inlineMath-111",
                    type: "inlineMath",
                    body: "\\vb e_1",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-275",
                    type: "text",
                    body: "will not acquire components along"
                  },
                  {
                    id: "inlineMath-112",
                    type: "inlineMath",
                    body: "\\vb e_2",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-276",
                    type: "text",
                    body: "or "
                  },
                  {
                    id: "inlineMath-113",
                    type: "inlineMath",
                    body: "\\vb e_3",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-277",
                    type: "text",
                    body: "when observed in "
                  },
                  {
                    id: "inlineMath-114",
                    type: "inlineMath",
                    body: "F'",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-278",
                    type: "text",
                    body: ". Given an event"
                  },
                  {
                    id: "inlineMath-115",
                    type: "inlineMath",
                    body: "\\vb{X} = x_1\\ket{\\vb{e}_1, 0} + x_4\\ket{\\vb{0}, 1}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6861em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">X</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">4</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span></span></span></span>"
                  },
                  {
                    id: "text-279",
                    type: "text",
                    body: ", its transformation in "
                  },
                  {
                    id: "inlineMath-116",
                    type: "inlineMath",
                    body: "F'",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-280",
                    type: "text",
                    body: "will be,"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-91",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-37",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-20",
                    type: "displayMath",
                    body: "\\begin{aligned}\n    \\boldsymbol{\\Lambda}(\\vb{v})\\bigl(x_1\\ket{\\vb{e}_1,0} + x_4\\ket{\\vb{0},1}\\bigr)\n    &= x_1\\!\\left(\n        \\lambda_{1,1}\\ket{\\vb{e}_1,0}\n      + \\lambda_{2,1}\\ket{\\vb{e}_2,0}\n      + \\lambda_{3,1}\\ket{\\vb{e}_3,0}\n      + \\lambda_{4,1}\\ket{\\vb{0},1}\n    \\right) \\\\\n    &\\quad + x_4\\!\\left(\\lambda_{1,4}\\ket{\\vb{e}_1,0} + \\lambda_{4,4}\\ket{\\vb{0},1}\\right)\n  \\end{aligned}",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.71em;vertical-align:-1.105em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-r\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.605em;\"><span style=\"top:-3.755em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Λ</span></span></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mclose\">)</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">4</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span></span></span><span style=\"top:-2.255em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.105em;\"><span></span></span></span></span></span><span class=\"col-align-l\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.605em;\"><span style=\"top:-3.755em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:-0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">1</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">1</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">2</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">1</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">3</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">1</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">4</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">1</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">)</span></span></span></span><span style=\"top:-2.255em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:1em;\"></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">4</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:-0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">1</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">4</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">4</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">4</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">)</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.105em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-92",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-80",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-281",
                    type: "text",
                    body: "Since this condition must hold for every value of "
                  },
                  {
                    id: "inlineMath-117",
                    type: "inlineMath",
                    body: "x_1",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5806em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-282",
                    type: "text",
                    body: ", the coefficients"
                  },
                  {
                    id: "text-283",
                    type: "text",
                    body: "of the basis vectors "
                  },
                  {
                    id: "inlineMath-118",
                    type: "inlineMath",
                    body: "\\ket{\\vb{e}_2,0}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span></span></span></span>"
                  },
                  {
                    id: "text-284",
                    type: "text",
                    body: "and "
                  },
                  {
                    id: "inlineMath-119",
                    type: "inlineMath",
                    body: "\\ket{\\vb{e}_3,0}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span></span></span></span>"
                  },
                  {
                    id: "text-285",
                    type: "text",
                    body: "must vanish."
                  },
                  {
                    id: "text-286",
                    type: "text",
                    body: "Hence,"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-93",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-38",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-21",
                    type: "displayMath",
                    body: "\\lambda_{2,1}=\\lambda_{3,1}=0.",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.9805em;vertical-align:-0.2861em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">2</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">1</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.9805em;vertical-align:-0.2861em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">3</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">1</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">0.</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-94",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-81",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-287",
                    type: "text",
                    body: "The general form "
                  },
                  {
                    id: "eqref-6",
                    type: "eqref",
                    body: "eq:general_Lorentz"
                  },
                  {
                    id: "text-288",
                    type: "text",
                    body: "further simplifies as,"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-95",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-39",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-22",
                    type: "displayMath",
                    body: "\\begin{aligned}\n    \\boldsymbol{\\Lambda}(\\vb{v}) =\\;\n      &\\lambda_{1,1}\\ket{\\vb{e}_1,0}\\bra{\\vb{e}_1,0}\n      + \\lambda_{1,2}\\ket{\\vb{e}_1,0}\\bra{\\vb{e}_2,0}\n      + \\lambda_{1,3}\\ket{\\vb{e}_1,0}\\bra{\\vb{e}_3,0}\n      + \\lambda_{1,4}\\ket{\\vb{e}_1,0}\\bra{\\vb{0},1} \\\\\n    +\\;&\\lambda_{2,2}\\ket{\\vb{e}_2,0}\\bra{\\vb{e}_2,0}\n      + \\lambda_{2,3}\\ket{\\vb{e}_2,0}\\bra{\\vb{e}_3,0} \\\\\n    +\\;&\\lambda_{3,2}\\ket{\\vb{e}_3,0}\\bra{\\vb{e}_2,0}\n      + \\lambda_{3,3}\\ket{\\vb{e}_3,0}\\bra{\\vb{e}_3,0} \\\\\n    +\\;&\\lambda_{4,1}\\ket{\\vb{0},1}\\bra{\\vb{e}_1,0}\n      + \\lambda_{4,2}\\ket{\\vb{0},1}\\bra{\\vb{e}_2,0}\n      + \\lambda_{4,3}\\ket{\\vb{0},1}\\bra{\\vb{e}_3,0}\n      + \\lambda_{4,4}\\ket{\\vb{0},1}\\bra{\\vb{0},1}\n  \\end{aligned}",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:5.7em;vertical-align:-2.6em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-r\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:3.1em;\"><span style=\"top:-5.26em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Λ</span></span></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span></span><span style=\"top:-3.76em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">+</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span></span><span style=\"top:-2.26em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">+</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span></span><span style=\"top:-0.76em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">+</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.6em;\"><span></span></span></span></span></span><span class=\"col-align-l\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:3.1em;\"><span style=\"top:-5.26em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">1</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">1</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">1</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">2</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">1</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">3</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">1</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">4</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span></span></span><span style=\"top:-3.76em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">2</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">2</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">2</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">3</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span></span></span><span style=\"top:-2.26em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">3</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">2</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">3</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">3</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span></span></span><span style=\"top:-0.76em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">4</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">1</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">4</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">2</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">4</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">3</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">4</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">4</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.6em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            }
          ],
          numbering: {
            path: [
              4,
              3,
              0
            ]
          }
        },
        {
          id: "subsection-5",
          type: "subsection",
          title: {
            id: "layoutInlineGroup-82",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-289",
                type: "text",
                body: "Second Assumption: Invariance Orthogonal to the Boost Direction"
              }
            ]
          },
          content: [
            {
              id: "contentLayoutGroup-96",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-83",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-290",
                    type: "text",
                    body: "The second assumption needed is that the spatial components along "
                  },
                  {
                    id: "inlineMath-120",
                    type: "inlineMath",
                    body: "\\ket{\\vb{e}_2,0}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span></span></span></span>"
                  },
                  {
                    id: "text-291",
                    type: "text",
                    body: "and"
                  },
                  {
                    id: "inlineMath-121",
                    type: "inlineMath",
                    body: "\\ket{\\vb{e}_3,0}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span></span></span></span>"
                  },
                  {
                    id: "text-292",
                    type: "text",
                    body: "of any event preserve their direction and length under"
                  },
                  {
                    id: "inlineMath-122",
                    type: "inlineMath",
                    body: "\\boldsymbol{\\Lambda}(\\vb{v})",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Λ</span></span></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-293",
                    type: "text",
                    body: ". "
                  },
                  {
                    id: "text-294",
                    type: "text",
                    body: "For an event "
                  },
                  {
                    id: "inlineMath-123",
                    type: "inlineMath",
                    body: "\\vb{X} = x_2\\ket{\\vb{e}_2, 0} + x_3\\ket{\\vb{e}_3, 0}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6861em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">X</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span></span></span></span>"
                  },
                  {
                    id: "text-295",
                    type: "text",
                    body: ", the corresponding event in "
                  },
                  {
                    id: "inlineMath-124",
                    type: "inlineMath",
                    body: "F'",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-296",
                    type: "text",
                    body: "will be,"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-97",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-40",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-23",
                    type: "displayMath",
                    body: "\\begin{aligned}\n    \\boldsymbol{\\Lambda}(\\vb{v})\n    \\bigl(\n      x_2\\ket{\\vb{e}_2,0}\n      +\n      x_3\\ket{\\vb{e}_3,0}\n    \\bigr)\n    &=\n    x_2\\!\\left(\n        \\lambda_{1,2}\\ket{\\vb{e}_1,0}\n      + \\lambda_{2,2}\\ket{\\vb{e}_2,0}\n      + \\lambda_{3,2}\\ket{\\vb{e}_3,0}\n      + \\lambda_{4,2}\\ket{\\vb{0},1}\n    \\right)\n    \\\\\n    &\\quad\n    +\n    x_3\\!\\left(\n        \\lambda_{1,3}\\ket{\\vb{e}_1,0}\n      + \\lambda_{2,3}\\ket{\\vb{e}_2,0}\n      + \\lambda_{3,3}\\ket{\\vb{e}_3,0}\n      + \\lambda_{4,3}\\ket{\\vb{0},1}\n    \\right).\n  \\end{aligned}",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.71em;vertical-align:-1.105em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-r\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.605em;\"><span style=\"top:-3.755em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Λ</span></span></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mclose\">)</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span></span></span><span style=\"top:-2.255em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.105em;\"><span></span></span></span></span></span><span class=\"col-align-l\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.605em;\"><span style=\"top:-3.755em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:-0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">1</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">2</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">2</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">2</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">3</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">2</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">4</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">2</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">)</span></span></span></span><span style=\"top:-2.255em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:1em;\"></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:-0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">1</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">3</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">2</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">3</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">3</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">3</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">4</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">3</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">)</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">.</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.105em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-98",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-84",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-297",
                    type: "text",
                    body: "Our assumption therefore requires "
                  },
                  {
                    id: "inlineMath-125",
                    type: "inlineMath",
                    body: "\\lambda_{1,2} = \\lambda_{1,3} = \\lambda_{2,3} = \\lambda_{3,2}\n= 0",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.9805em;vertical-align:-0.2861em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">1</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">2</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.9805em;vertical-align:-0.2861em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">1</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">3</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.9805em;vertical-align:-0.2861em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">2</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">3</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.9805em;vertical-align:-0.2861em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">3</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">2</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">0</span></span></span></span>"
                  },
                  {
                    id: "text-298",
                    type: "text",
                    body: "and "
                  },
                  {
                    id: "inlineMath-126",
                    type: "inlineMath",
                    body: "\\lambda_{2,2} = \\lambda_{3,3} = 1",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.9805em;vertical-align:-0.2861em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">2</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">2</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.9805em;vertical-align:-0.2861em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">3</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">3</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">1</span></span></span></span>"
                  },
                  {
                    id: "text-299",
                    type: "text",
                    body: ", which results in a further simplification of"
                  },
                  {
                    id: "inlineMath-127",
                    type: "inlineMath",
                    body: "\\boldsymbol{\\Lambda}(\\vb{v})",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Λ</span></span></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-300",
                    type: "text",
                    body: ":"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-99",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-41",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-24",
                    type: "displayMath",
                    body: "\\begin{aligned}\n    \\boldsymbol{\\Lambda}(\\vb{v}) =\\;\n      &\\lambda_{1,1}\\ket{\\vb{e}_1,0}\\bra{\\vb{e}_1,0}\n      + \\lambda_{1,4}\\ket{\\vb{e}_1,0}\\bra{\\vb{0},1} \\\\\n    +\\;&\\ket{\\vb{e}_2,0}\\bra{\\vb{e}_2,0} \\\\\n    +\\;&\\ket{\\vb{e}_3,0}\\bra{\\vb{e}_3,0} \\\\\n    +\\;&\\lambda_{4,1}\\ket{\\vb{0},1}\\bra{\\vb{e}_1,0}\n      + \\lambda_{4,2}\\ket{\\vb{0},1}\\bra{\\vb{e}_2,0}\n      + \\lambda_{4,3}\\ket{\\vb{0},1}\\bra{\\vb{e}_3,0}\n      + \\lambda_{4,4}\\ket{\\vb{0},1}\\bra{\\vb{0},1}\n  \\end{aligned}",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:5.7em;vertical-align:-2.6em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-r\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:3.1em;\"><span style=\"top:-5.26em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Λ</span></span></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span></span><span style=\"top:-3.76em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">+</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span></span><span style=\"top:-2.26em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">+</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span></span><span style=\"top:-0.76em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">+</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.6em;\"><span></span></span></span></span></span><span class=\"col-align-l\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:3.1em;\"><span style=\"top:-5.26em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">1</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">1</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">1</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">4</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span></span></span><span style=\"top:-3.76em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span></span></span><span style=\"top:-2.26em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span></span></span><span style=\"top:-0.76em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">4</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">1</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">4</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">2</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">4</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">3</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">4</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">4</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.6em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-100",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-85",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-301",
                    type: "text",
                    body: "Using the previously derived  "
                  },
                  {
                    id: "eqref-7",
                    type: "eqref",
                    body: "eq:transformation_of_time"
                  },
                  {
                    id: "text-302",
                    type: "text",
                    body: ", we identify"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-101",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-42",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-25",
                    type: "displayMath",
                    body: "\\lambda_{4,1}=-\\gamma\\frac{v}{c},\n  \\qquad\n  \\lambda_{4,2}=\\lambda_{4,3}=0,\n  \\qquad\n  \\lambda_{4,4}=\\gamma.",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.9805em;vertical-align:-0.2861em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">4</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">1</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.7936em;vertical-align:-0.686em;\"></span><span class=\"mord\">−</span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">c</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">4</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">2</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.9805em;vertical-align:-0.2861em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">4</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">3</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.9805em;vertical-align:-0.2861em;\"></span><span class=\"mord\">0</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">4</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">4</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mord\">.</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-102",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-86",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-303",
                    type: "text",
                    body: "We therefore arrive at the final functional form of"
                  },
                  {
                    id: "inlineMath-128",
                    type: "inlineMath",
                    body: "\\boldsymbol{\\Lambda}(\\vb{v})",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Λ</span></span></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-304",
                    type: "text",
                    body: ":"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-103",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-43",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "equation-6",
                    type: "equation",
                    body: "\\begin{aligned}\n    \\boldsymbol{\\Lambda}(\\vb{v}) =\\;\n      &\\lambda_{1,1}\\ket{\\vb{e}_1,0}\\bra{\\vb{e}_1,0}\n      + \\lambda_{1,4}\\ket{\\vb{e}_1,0}\\bra{\\vb{0},1}\n      + \\ket{\\vb{e}_2,0}\\bra{\\vb{e}_2,0}\n      + \\ket{\\vb{e}_3,0}\\bra{\\vb{e}_3,0} \\\\\n      &- \\gamma\\,\\frac{v}{c}\\ket{\\vb{0},1}\\bra{\\vb{e}_1,0}\n      + \\gamma\\ket{\\vb{0},1}\\bra{\\vb{0},1}\n  \\end{aligned}",
                    label: "eq:simplified_Lorentz",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:3.2936em;vertical-align:-1.3968em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.8968em;\"><span style=\"top:-3.8968em;\"><span class=\"pstrut\" style=\"height:3.8968em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-r\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.8968em;\"><span style=\"top:-4.1643em;\"><span class=\"pstrut\" style=\"height:3.1076em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Λ</span></span></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span></span><span style=\"top:-2.3968em;\"><span class=\"pstrut\" style=\"height:3.1076em;\"></span><span class=\"mord\"></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3968em;\"><span></span></span></span></span></span><span class=\"col-align-l\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.8968em;\"><span style=\"top:-4.1643em;\"><span class=\"pstrut\" style=\"height:3.1076em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">1</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">1</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">1</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">4</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span></span></span><span style=\"top:-2.3968em;\"><span class=\"pstrut\" style=\"height:3.1076em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">c</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3968em;\"><span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3968em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-104",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-87",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-305",
                    type: "text",
                    body: "Finally, the coefficients "
                  },
                  {
                    id: "inlineMath-129",
                    type: "inlineMath",
                    body: "\\lambda_{1,1}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.9805em;vertical-align:-0.2861em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">1</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">1</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-306",
                    type: "text",
                    body: "and "
                  },
                  {
                    id: "inlineMath-130",
                    type: "inlineMath",
                    body: "\\gamma",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span></span></span></span>"
                  },
                  {
                    id: "text-307",
                    type: "text",
                    body: "must be positive"
                  },
                  {
                    id: "text-308",
                    type: "text",
                    body: "to preserve the orientation of the longitudinal spatial axis and the direction of increasing time."
                  }
                ]
              }
            }
          ],
          numbering: {
            path: [
              4,
              4,
              0
            ]
          }
        },
        {
          id: "subsection-6",
          type: "subsection",
          title: {
            id: "layoutInlineGroup-88",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-309",
                type: "text",
                body: "Third Assumption: Invariance of Light Speed"
              }
            ]
          },
          content: [
            {
              id: "contentLayoutGroup-105",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-89",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-310",
                    type: "text",
                    body: "In Special Relativity the spacetime interval between two events "
                  },
                  {
                    id: "inlineMath-131",
                    type: "inlineMath",
                    body: "(x_1, y_1, z_1, ct_1)",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.044em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\">c</span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-311",
                    type: "text",
                    body: "and"
                  },
                  {
                    id: "inlineMath-132",
                    type: "inlineMath",
                    body: "(x_2, y_2, z_2, ct_2)",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.044em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\">c</span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-312",
                    type: "text",
                    body: "is defined as"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-106",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-44",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-26",
                    type: "displayMath",
                    body: "\\Delta s^2 = (x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2 - c^2(t_2 - t_1)^2",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8641em;\"></span><span class=\"mord\">Δ</span><span class=\"mord\"><span class=\"mord mathnormal\">s</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.1141em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\"><span class=\"mclose\">)</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.1141em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\"><span class=\"mclose\">)</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.044em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.1141em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.044em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\"><span class=\"mclose\">)</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.1141em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.1141em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\"><span class=\"mclose\">)</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-107",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-90",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-313",
                    type: "text",
                    body: "and can be written in bi-linear form as"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-108",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-45",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-27",
                    type: "displayMath",
                    body: "\\Delta s^2 = \\ip{\\vb{X}}{\\vb{M}\\,\\vb{X}}",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8641em;\"></span><span class=\"mord\">Δ</span><span class=\"mord\"><span class=\"mord mathnormal\">s</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">X</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">M</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">X</span></span><span class=\"mclose\">⟩</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-109",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-91",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-314",
                    type: "text",
                    body: "where "
                  },
                  {
                    id: "inlineMath-133",
                    type: "inlineMath",
                    body: "\\vb{X} = (x_2 - x_1,\\; y_2 - y_1,\\; z_2 - z_1,\\; c(t_2 - t_1))",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6861em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">X</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7778em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7778em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.044em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.044em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\">c</span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">))</span></span></span></span>"
                  },
                  {
                    id: "text-315",
                    type: "text",
                    body: "and"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-110",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-46",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-28",
                    type: "displayMath",
                    body: "\\vb{M} =\n  \\begin{pmatrix}\n    1 & 0 & 0 &  0 \\\\\n    0 & 1 & 0 &  0 \\\\\n    0 & 0 & 1 &  0 \\\\\n    0 & 0 & 0 & -1\n  \\end{pmatrix}",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6861em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">M</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:4.8em;vertical-align:-2.15em;\"></span><span class=\"minner\"><span class=\"mopen\"><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.65em;\"><span style=\"top:-4.65em;\"><span class=\"pstrut\" style=\"height:6.8em;\"></span><span style=\"width:0.875em;height:4.8em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.875em\" height=\"4.8em\" viewBox=\"0 0 875 4800\"><path d=\"M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1\nc-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,\n-36,557 l0,1284c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,\n949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9\nc0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,\n-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189\nl0,-1292c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,\n-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.15em;\"><span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.65em;\"><span style=\"top:-4.81em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">1</span></span></span><span style=\"top:-3.61em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span><span style=\"top:-2.41em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span><span style=\"top:-1.21em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.15em;\"><span></span></span></span></span></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.65em;\"><span style=\"top:-4.81em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span><span style=\"top:-3.61em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">1</span></span></span><span style=\"top:-2.41em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span><span style=\"top:-1.21em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.15em;\"><span></span></span></span></span></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.65em;\"><span style=\"top:-4.81em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span><span style=\"top:-3.61em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span><span style=\"top:-2.41em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">1</span></span></span><span style=\"top:-1.21em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.15em;\"><span></span></span></span></span></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.65em;\"><span style=\"top:-4.81em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span><span style=\"top:-3.61em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span><span style=\"top:-2.41em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span><span style=\"top:-1.21em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">−</span><span class=\"mord\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.15em;\"><span></span></span></span></span></span></span></span><span class=\"mclose\"><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.65em;\"><span style=\"top:-4.65em;\"><span class=\"pstrut\" style=\"height:6.8em;\"></span><span style=\"width:0.875em;height:4.8em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.875em\" height=\"4.8em\" viewBox=\"0 0 875 4800\"><path d=\"M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,\n63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5\nc11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,1209\nc-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664\nc-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11\nc0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17\nc242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558\nl0,-1344c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,\n-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.15em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-111",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-92",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-316",
                    type: "text",
                    body: "A spacetime interval measured in "
                  },
                  {
                    id: "inlineMath-134",
                    type: "inlineMath",
                    body: "F'",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-317",
                    type: "text",
                    body: "is linked to the same interval in "
                  },
                  {
                    id: "inlineMath-135",
                    type: "inlineMath",
                    body: "F",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span></span></span></span>"
                  },
                  {
                    id: "text-318",
                    type: "text",
                    body: "by the Lorentz"
                  },
                  {
                    id: "text-319",
                    type: "text",
                    body: "transformation"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-112",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-47",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-29",
                    type: "displayMath",
                    body: "\\Delta s'^2\n  = \\ip{\\vb{X}'}{\\vb{M}\\,\\vb{X}'}\n  = \\ip{\\boldsymbol{\\Lambda}\\vb{X}}{\\vb{M}\\,\\boldsymbol{\\Lambda}\\vb{X}}\n  = \\ip{\\vb{X}}{\\boldsymbol{\\Lambda}^T\\vb{M}\\,\\boldsymbol{\\Lambda}\\,\\vb{X}}",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8641em;\"></span><span class=\"mord\">Δ</span><span class=\"mord\"><span class=\"mord mathnormal\">s</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′2</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0779em;vertical-align:-0.25em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">X</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8279em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0779em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">M</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">X</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8279em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mclose\">⟩</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Λ</span></span></span><span class=\"mord text\"><span class=\"mord textbf\">X</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">M</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Λ</span></span></span><span class=\"mord text\"><span class=\"mord textbf\">X</span></span><span class=\"mclose\">⟩</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">X</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.1673em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Λ</span></span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9173em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.1389em;\">T</span></span></span></span></span></span></span></span><span class=\"mord text\"><span class=\"mord textbf\">M</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Λ</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">X</span></span><span class=\"mclose\">⟩</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-113",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-93",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-320",
                    type: "text",
                    body: "In the system "
                  },
                  {
                    id: "inlineMath-136",
                    type: "inlineMath",
                    body: "F",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span></span></span></span>"
                  },
                  {
                    id: "text-321",
                    type: "text",
                    body: "we consider a photon moving along a unit vector "
                  },
                  {
                    id: "inlineMath-137",
                    type: "inlineMath",
                    body: "\\vb{n}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span></span></span></span>"
                  },
                  {
                    id: "text-322",
                    type: "text",
                    body: ". The photon at"
                  },
                  {
                    id: "text-323",
                    type: "text",
                    body: "time "
                  },
                  {
                    id: "inlineMath-138",
                    type: "inlineMath",
                    body: "t_1",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7651em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-324",
                    type: "text",
                    body: "is in the position "
                  },
                  {
                    id: "inlineMath-139",
                    type: "inlineMath",
                    body: "\\vb{x}_1",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-325",
                    type: "text",
                    body: ", and moves to the position"
                  },
                  {
                    id: "inlineMath-140",
                    type: "inlineMath",
                    body: "\\vb{x}_1 + \\vb{n}\\,c(t_2 - t_1)",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7333em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\">c</span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-326",
                    type: "text",
                    body: "at the time "
                  },
                  {
                    id: "inlineMath-141",
                    type: "inlineMath",
                    body: "t_2",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7651em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-327",
                    type: "text",
                    body: ". "
                  },
                  {
                    id: "text-328",
                    type: "text",
                    body: "Since "
                  },
                  {
                    id: "inlineMath-142",
                    type: "inlineMath",
                    body: "||\\vb n||=1",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\">∣∣</span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mord\">∣∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">1</span></span></span></span>"
                  },
                  {
                    id: "text-329",
                    type: "text",
                    body: "the spacetime between the two events is identically zero,"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-114",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-48",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-30",
                    type: "displayMath",
                    body: "\\Delta s^2 = c^2(t_2 - t_1)^2\\|\\vb{n}\\|^2 - c^2(t_2 - t_1)^2 = 0",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8641em;\"></span><span class=\"mord\">Δ</span><span class=\"mord\"><span class=\"mord mathnormal\">s</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.1141em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.1141em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\"><span class=\"mclose\">)</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mord\">∥</span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mord\"><span class=\"mord\">∥</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.1141em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.1141em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\"><span class=\"mclose\">)</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">0</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-115",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-94",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-330",
                    type: "text",
                    body: "When we examine two events occurring along the trajectory of a photon (referred to as the"
                  },
                  {
                    id: "text-331",
                    type: "text",
                    body: "photon's world line), the spacetime interval "
                  },
                  {
                    id: "inlineMath-143",
                    type: "inlineMath",
                    body: "\\Delta' s^2",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8141em;\"></span><span class=\"mord\"><span class=\"mord\">Δ</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord mathnormal\">s</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-332",
                    type: "text",
                    body: "in "
                  },
                  {
                    id: "inlineMath-144",
                    type: "inlineMath",
                    body: "F'",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-333",
                    type: "text",
                    body: "must also be zero, assuming"
                  },
                  {
                    id: "text-334",
                    type: "text",
                    body: "that the speed of light "
                  },
                  {
                    id: "inlineMath-145",
                    type: "inlineMath",
                    body: "c",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">c</span></span></span></span>"
                  },
                  {
                    id: "text-335",
                    type: "text",
                    body: "remains invariant,"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-116",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-49",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-31",
                    type: "displayMath",
                    body: "\\ip{\n    \\bigl(c(t_2-t_1)\\vb{n},\\; c(t_2-t_1)\\bigr)\n  }{\n    \\boldsymbol{\\Lambda}^T\\vb{M}\\,\\boldsymbol{\\Lambda}\n    \\cdot\\bigl(c(t_2-t_1)\\vb{n},\\; c(t_2-t_1)\\bigr)\n  } = 0",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mopen\">⟨</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathnormal\">c</span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\">c</span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.9173em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Λ</span></span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9173em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.1389em;\">T</span></span></span></span></span></span></span></span><span class=\"mord text\"><span class=\"mord textbf\">M</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Λ</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">⋅</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathnormal\">c</span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\">c</span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mclose\">⟩</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">0</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-117",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-95",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-336",
                    type: "text",
                    body: "equivalent to,"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-118",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-50",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "equation-7",
                    type: "equation",
                    body: "\\ip{(\\vb{n},1)}{\\boldsymbol{\\Lambda}^T\\vb{M}\\,\\boldsymbol{\\Lambda}\\cdot(\\vb{n},1)}\n  = 0",
                    label: "eq:invariance_light_speed",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.2773em;vertical-align:-0.3887em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8887em;\"><span style=\"top:-2.9713em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mopen\">⟨(</span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Λ</span></span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9173em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.1389em;\">T</span></span></span></span></span></span></span></span><span class=\"mord text\"><span class=\"mord textbf\">M</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Λ</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">⋅</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose\">)⟩</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3887em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-119",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-96",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-337",
                    type: "text",
                    body: "for all "
                  },
                  {
                    id: "inlineMath-146",
                    type: "inlineMath",
                    body: "\\vb{n}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span></span></span></span>"
                  },
                  {
                    id: "text-338",
                    type: "text",
                    body: "such that "
                  },
                  {
                    id: "inlineMath-147",
                    type: "inlineMath",
                    body: "\\|\\vb{n}\\| = 1",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\">∥</span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mord\">∥</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">1</span></span></span></span>"
                  },
                  {
                    id: "text-339",
                    type: "text",
                    body: "."
                  },
                  {
                    id: "text-340",
                    type: "text",
                    body: "To solve the equation above, we need "
                  },
                  {
                    id: "inlineMath-148",
                    type: "inlineMath",
                    body: "\\vb{M}\\,\\boldsymbol{\\Lambda}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6861em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">M</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Λ</span></span></span></span></span></span>"
                  },
                  {
                    id: "text-341",
                    type: "text",
                    body: ", which is"
                  },
                  {
                    id: "inlineMath-149",
                    type: "inlineMath",
                    body: "\\boldsymbol{\\Lambda}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6861em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Λ</span></span></span></span></span></span>"
                  },
                  {
                    id: "text-342",
                    type: "text",
                    body: "with the time component's sign changed,"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-120",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-51",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-32",
                    type: "displayMath",
                    body: "\\begin{aligned}\n    \\vb{M}\\,\\boldsymbol{\\Lambda}(\\vb{v}) =\\;\n      &\\lambda_{1,1}\\ket{\\vb{e}_1,0}\\bra{\\vb{e}_1,0}\n      + \\lambda_{1,4}\\ket{\\vb{e}_1,0}\\bra{\\vb{0},1}\n      + \\lambda_{2,2}\\ket{\\vb{e}_2,0}\\bra{\\vb{e}_2,0}\n      + \\lambda_{3,3}\\ket{\\vb{e}_3,0}\\bra{\\vb{e}_3,0} \\\\\n      &+ \\gamma\\,\\frac{v}{c}\\ket{\\vb{0},1}\\bra{\\vb{e}_1,0}\n      - \\gamma\\ket{\\vb{0},1}\\bra{\\vb{0},1}\n  \\end{aligned}",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:3.2936em;vertical-align:-1.3968em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-r\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.8968em;\"><span style=\"top:-4.1643em;\"><span class=\"pstrut\" style=\"height:3.1076em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">M</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Λ</span></span></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span></span><span style=\"top:-2.3968em;\"><span class=\"pstrut\" style=\"height:3.1076em;\"></span><span class=\"mord\"></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3968em;\"><span></span></span></span></span></span><span class=\"col-align-l\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.8968em;\"><span style=\"top:-4.1643em;\"><span class=\"pstrut\" style=\"height:3.1076em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">1</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">1</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">1</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">4</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">2</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">2</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">3</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">3</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span></span></span><span style=\"top:-2.3968em;\"><span class=\"pstrut\" style=\"height:3.1076em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">c</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3968em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-121",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-97",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-343",
                    type: "text",
                    body: "and "
                  },
                  {
                    id: "inlineMath-150",
                    type: "inlineMath",
                    body: "\\boldsymbol{\\Lambda}^T",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.9173em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Λ</span></span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9173em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.1389em;\">T</span></span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-344",
                    type: "text",
                    body: "is readily obtained by interchanging the bra and ket vectors,"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-122",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-52",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-33",
                    type: "displayMath",
                    body: "\\begin{aligned}\n    \\boldsymbol{\\Lambda}(\\vb{v})^T =\\;\n      &\\lambda_{1,1}\\ket{\\vb{e}_1,0}\\bra{\\vb{e}_1,0}\n      + \\lambda_{1,4}\\ket{\\vb{0},1}\\bra{\\vb{e}_1,0}\n      + \\lambda_{2,2}\\ket{\\vb{e}_2,0}\\bra{\\vb{e}_2,0}\n      + \\lambda_{3,3}\\ket{\\vb{e}_3,0}\\bra{\\vb{e}_3,0} \\\\\n      &- \\gamma\\,\\frac{v}{c}\\ket{\\vb{e}_1,0}\\bra{\\vb{0},1}\n      + \\gamma\\ket{\\vb{0},1}\\bra{\\vb{0},1}\n  \\end{aligned}",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:3.3449em;vertical-align:-1.4224em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-r\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.9224em;\"><span style=\"top:-4.1387em;\"><span class=\"pstrut\" style=\"height:3.1076em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Λ</span></span></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mclose\"><span class=\"mclose\">)</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8913em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.1389em;\">T</span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span></span><span style=\"top:-2.3711em;\"><span class=\"pstrut\" style=\"height:3.1076em;\"></span><span class=\"mord\"></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4224em;\"><span></span></span></span></span></span><span class=\"col-align-l\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.9224em;\"><span style=\"top:-4.1387em;\"><span class=\"pstrut\" style=\"height:3.1076em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">1</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">1</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">1</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">4</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">2</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">2</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">3</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">3</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span></span></span><span style=\"top:-2.3711em;\"><span class=\"pstrut\" style=\"height:3.1076em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">c</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4224em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-123",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-98",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-345",
                    type: "text",
                    body: "The operator "
                  },
                  {
                    id: "inlineMath-151",
                    type: "inlineMath",
                    body: "\\boldsymbol{\\Lambda}(\\vb{v})^T\\vb{M}\\,\\boldsymbol{\\Lambda}(\\vb{v})",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0913em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Λ</span></span></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mclose\"><span class=\"mclose\">)</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8413em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.1389em;\">T</span></span></span></span></span></span></span></span><span class=\"mord text\"><span class=\"mord textbf\">M</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Λ</span></span></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-346",
                    type: "text",
                    body: "is"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-124",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-53",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-34",
                    type: "displayMath",
                    body: "\\begin{aligned}\n    &\\left(\\lambda_{1,1}^2 - \\gamma^2\\frac{v^2}{c^2}\\right)\\ket{\\vb{e}_1,0}\\bra{\\vb{e}_1,0} \\\\\n    +\\;&\\left(\\lambda_{1,1}\\lambda_{1,4} + \\gamma^2\\frac{v}{c}\\right)\n      \\bigl(\\ket{\\vb{0},1}\\bra{\\vb{e}_1,0} + \\ket{\\vb{e}_1,0}\\bra{\\vb{0},1}\\bigr) \\\\\n    +\\;&\\lambda_{2,2}^2\\ket{\\vb{e}_2,0}\\bra{\\vb{e}_2,0}\n      + \\lambda_{3,3}^2\\ket{\\vb{e}_3,0}\\bra{\\vb{e}_3,0} \\\\\n    +\\;&\\left(\\lambda_{1,4}^2 - \\gamma^2\\right)\\ket{\\vb{0},1}\\bra{\\vb{0},1}\n  \\end{aligned}",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:7.6716em;vertical-align:-3.5858em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-r\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:4.0858em;\"><span style=\"top:-6.0858em;\"><span class=\"pstrut\" style=\"height:3.4911em;\"></span><span class=\"mord\"></span></span><span style=\"top:-3.6858em;\"><span class=\"pstrut\" style=\"height:3.4911em;\"></span><span class=\"mord\"><span class=\"mord\">+</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span></span><span style=\"top:-1.8356em;\"><span class=\"pstrut\" style=\"height:3.4911em;\"></span><span class=\"mord\"><span class=\"mord\">+</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span></span><span style=\"top:-0.2884em;\"><span class=\"pstrut\" style=\"height:3.4911em;\"></span><span class=\"mord\"><span class=\"mord\">+</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:3.5858em;\"><span></span></span></span></span></span><span class=\"col-align-l\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:4.0858em;\"><span style=\"top:-6.0858em;\"><span class=\"pstrut\" style=\"height:3.4911em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">(</span></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">1</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">1</span></span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3831em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4911em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span></span></span><span style=\"top:-3.6858em;\"><span class=\"pstrut\" style=\"height:3.4911em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size2\">(</span></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">1</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">1</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">1</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">4</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">c</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size2\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span></span></span><span style=\"top:-1.8356em;\"><span class=\"pstrut\" style=\"height:3.4911em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">2</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">2</span></span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3831em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">3</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">3</span></span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3831em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span></span></span><span style=\"top:-0.2884em;\"><span class=\"pstrut\" style=\"height:3.4911em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">1</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">4</span></span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3831em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size1\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:3.5858em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-125",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-99",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-347",
                    type: "text",
                    body: "and the equation for the invariance of speed of light "
                  },
                  {
                    id: "eqref-8",
                    type: "eqref",
                    body: "eq:invariance_light_speed"
                  },
                  {
                    id: "text-348",
                    type: "text",
                    body: "reads,"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-126",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-54",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-35",
                    type: "displayMath",
                    body: "\\left(\\lambda_{1,1}^2 - \\gamma^2\\frac{v^2}{c^2}\\right)n_1^2\n  + 2\\left(\\lambda_{1,1}\\lambda_{1,4} + \\gamma^2\\frac{v}{c}\\right)n_1\n  + n_2^2 + n_3^2\n  + \\left(\\lambda_{1,4}^2 - \\gamma^2\\right) = 0",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.4411em;vertical-align:-0.95em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">(</span></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">1</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">1</span></span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3831em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4911em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">n</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.836em;vertical-align:-0.686em;\"></span><span class=\"mord\">2</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size2\">(</span></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">1</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">1</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">1</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">4</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">c</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size2\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">n</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.1111em;vertical-align:-0.247em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">n</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.1111em;vertical-align:-0.247em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">n</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2472em;vertical-align:-0.3831em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">1</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">4</span></span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3831em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size1\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">0</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-127",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-100",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-349",
                    type: "text",
                    body: "The above equation is identically zero for all "
                  },
                  {
                    id: "inlineMath-152",
                    type: "inlineMath",
                    body: "\\vb{n}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span></span></span></span>"
                  },
                  {
                    id: "text-350",
                    type: "text",
                    body: "such that "
                  },
                  {
                    id: "inlineMath-153",
                    type: "inlineMath",
                    body: "\\|\\vb{n}\\| = 1",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\">∥</span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mord\">∥</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">1</span></span></span></span>"
                  },
                  {
                    id: "text-351",
                    type: "text",
                    body: "only if,"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-128",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-55",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "align-4",
                    type: "align",
                    body: "\\lambda_{1,1}^2 - \\gamma^2\\displaystyle\\frac{v^2}{c^2} &= 1 \\\\\n  \\lambda_{1,1}\\lambda_{1,4} + \\gamma^2\\displaystyle\\frac{v}{c} &= 0 \\\\\n  \\lambda_{1,4}^2 - \\gamma^2 &= -1",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:5.8179em;vertical-align:-2.6589em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-r\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:3.1589em;\"><span style=\"top:-5.1589em;\"><span class=\"pstrut\" style=\"height:3.4911em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">1</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">1</span></span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3831em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4911em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span></span></span><span style=\"top:-3.0654em;\"><span class=\"pstrut\" style=\"height:3.4911em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">1</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">1</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">1</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">4</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">c</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span></span></span><span style=\"top:-1.2153em;\"><span class=\"pstrut\" style=\"height:3.4911em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">1</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">4</span></span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3831em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.6589em;\"><span></span></span></span></span></span><span class=\"col-align-l\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:3.1589em;\"><span style=\"top:-5.1589em;\"><span class=\"pstrut\" style=\"height:3.4911em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\">1</span></span></span><span style=\"top:-3.0654em;\"><span class=\"pstrut\" style=\"height:3.4911em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\">0</span></span></span><span style=\"top:-1.2153em;\"><span class=\"pstrut\" style=\"height:3.4911em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\">−</span><span class=\"mord\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.6589em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-129",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-101",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-352",
                    type: "text",
                    body: "which admits the following solution, continuously connected to the"
                  },
                  {
                    id: "text-353",
                    type: "text",
                    body: "identity transformation at "
                  },
                  {
                    id: "inlineMath-154",
                    type: "inlineMath",
                    body: "v=0",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">0</span></span></span></span>"
                  },
                  {
                    id: "text-354",
                    type: "text",
                    body: ":"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-130",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-56",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "align-5",
                    type: "align",
                    body: "\\gamma\n  &=\n  \\frac{1}{\\sqrt{1-\\frac{v^2}{c^2}}},\n  \\\\\n  \\lambda_{1,1}\n  &=\n  \\gamma,\n  \\\\\n  \\lambda_{1,4}\n  &=\n  -\\gamma\\frac{v}{c}.",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:6.645em;vertical-align:-3.0725em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-r\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:3.5725em;\"><span style=\"top:-5.5725em;\"><span class=\"pstrut\" style=\"height:3.3214em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span></span></span><span style=\"top:-2.7025em;\"><span class=\"pstrut\" style=\"height:3.3214em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">1</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">1</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-0.9349em;\"><span class=\"pstrut\" style=\"height:3.3214em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">λ</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">1</span><span class=\"mpunct mtight\">,</span><span class=\"mord mtight\">4</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:3.0725em;\"><span></span></span></span></span></span><span class=\"col-align-l\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:3.5725em;\"><span style=\"top:-5.5725em;\"><span class=\"pstrut\" style=\"height:3.3214em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3214em;\"><span style=\"top:-2.11em;\"><span class=\"pstrut\" style=\"height:3.2707em;\"></span><span class=\"mord\"><span class=\"mord sqrt\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.2707em;\"><span class=\"svg-align\" style=\"top:-3.8em;\"><span class=\"pstrut\" style=\"height:3.8em;\"></span><span class=\"mord\" style=\"padding-left:1em;\"><span class=\"mord\">1</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9164em;\"><span style=\"top:-2.655em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7463em;\"><span style=\"top:-2.786em;margin-right:0.0714em;\"><span class=\"pstrut\" style=\"height:2.5em;\"></span><span class=\"sizing reset-size3 size1 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.394em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0359em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7463em;\"><span style=\"top:-2.786em;margin-right:0.0714em;\"><span class=\"pstrut\" style=\"height:2.5em;\"></span><span class=\"sizing reset-size3 size1 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.345em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span></span></span><span style=\"top:-3.2307em;\"><span class=\"pstrut\" style=\"height:3.8em;\"></span><span class=\"hide-tail\" style=\"min-width:1.02em;height:1.88em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400em\" height=\"1.88em\" viewBox=\"0 0 400000 1944\" preserveAspectRatio=\"xMinYMin slice\"><path d=\"M983 90\nl0 -0\nc4,-6.7,10,-10,18,-10 H400000v40\nH1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7\ns-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744\nc-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30\nc26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722\nc56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5\nc53.7,-170.3,84.5,-266.8,92.5,-289.5z\nM1001 80h400000v40h-400000z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.5693em;\"><span></span></span></span></span></span></span></span><span style=\"top:-3.5007em;\"><span class=\"pstrut\" style=\"height:3.2707em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.9477em;\"><span class=\"pstrut\" style=\"height:3.2707em;\"></span><span class=\"mord\"><span class=\"mord\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.73em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mpunct\">,</span></span></span><span style=\"top:-2.7025em;\"><span class=\"pstrut\" style=\"height:3.3214em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mpunct\">,</span></span></span><span style=\"top:-0.9349em;\"><span class=\"pstrut\" style=\"height:3.3214em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\">−</span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">c</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\">.</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:3.0725em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-131",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-102",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-355",
                    type: "text",
                    body: "The Lorentz transformation takes the final form"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-132",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-57",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "equation-8",
                    type: "equation",
                    body: "\\begin{aligned}\n    \\boldsymbol{\\Lambda}(\\vb{v}) =\\;\n      &\\gamma\\ket{\\vb{e}_1,0}\\bra{\\vb{e}_1,0}\n      - \\gamma\\,\\frac{v}{c}\n        \\ket{\\vb{e}_1,0}\\bra{\\vb{0},1}\n      + \\ket{\\vb{e}_2,0}\\bra{\\vb{e}_2,0}\n      + \\ket{\\vb{e}_3,0}\\bra{\\vb{e}_3,0}\n      \\\\\n      &- \\gamma\\,\\frac{v}{c}\n        \\ket{\\vb{0},1}\\bra{\\vb{e}_1,0}\n      + \\gamma\\ket{\\vb{0},1}\\bra{\\vb{0},1}.\n  \\end{aligned}",
                    label: "eq:Lorentz_transformation",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:3.8871em;vertical-align:-1.6936em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.1936em;\"><span style=\"top:-4.1936em;\"><span class=\"pstrut\" style=\"height:4.1936em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-r\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.1936em;\"><span style=\"top:-4.1936em;\"><span class=\"pstrut\" style=\"height:3.1076em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Λ</span></span></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span></span><span style=\"top:-2.1em;\"><span class=\"pstrut\" style=\"height:3.1076em;\"></span><span class=\"mord\"></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.6936em;\"><span></span></span></span></span></span><span class=\"col-align-l\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.1936em;\"><span style=\"top:-4.1936em;\"><span class=\"pstrut\" style=\"height:3.1076em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">c</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span></span></span><span style=\"top:-2.1em;\"><span class=\"pstrut\" style=\"height:3.1076em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">c</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">.</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.6936em;\"><span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.6936em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-133",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-103",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-356",
                    type: "text",
                    body: "The inverse of "
                  },
                  {
                    id: "inlineMath-155",
                    type: "inlineMath",
                    body: "\\boldsymbol{\\Lambda}(\\vb{v})",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Λ</span></span></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-357",
                    type: "text",
                    body: "transforms coordinates from"
                  },
                  {
                    id: "inlineMath-156",
                    type: "inlineMath",
                    body: "F'",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-358",
                    type: "text",
                    body: "to "
                  },
                  {
                    id: "inlineMath-157",
                    type: "inlineMath",
                    body: "F",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span></span></span></span>"
                  },
                  {
                    id: "text-359",
                    type: "text",
                    body: ". It is obtained by reversing the boost velocity and can be"
                  },
                  {
                    id: "text-360",
                    type: "text",
                    body: "verified directly:"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-134",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-58",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "equation-9",
                    type: "equation",
                    body: "\\boldsymbol{\\Lambda}^{-1}(\\vb{v}) = \\boldsymbol{\\Lambda}(-\\vb{v}) =\n    \\gamma\\ket{\\vb{e}_1,0}\\bra{\\vb{e}_1,0}\n    + \\gamma\\,\\frac{v}{c}\\ket{\\vb{e}_1,0}\\bra{\\vb{0},1}\n    + \\ket{\\vb{e}_2,0}\\bra{\\vb{e}_2,0}\n    + \\ket{\\vb{e}_3,0}\\bra{\\vb{e}_3,0}\n    + \\gamma\\,\\frac{v}{c}\\ket{\\vb{0},1}\\bra{\\vb{e}_1,0}\n    + \\gamma\\ket{\\vb{0},1}\\bra{\\vb{0},1}",
                    label: "eq:Lorentz_inverse",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.7936em;vertical-align:-0.6468em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1468em;\"><span style=\"top:-3.1468em;\"><span class=\"pstrut\" style=\"height:3.1076em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Λ</span></span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8901em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">−</span><span class=\"mord mtight\">1</span></span></span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Λ</span></span></span><span class=\"mopen\">(</span><span class=\"mord\">−</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">c</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">c</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.6468em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-135",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-104",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-361",
                    type: "text",
                    body: "The Lorentz transformation written explicitly in terms of the velocity vector, using"
                  },
                  {
                    id: "inlineMath-158",
                    type: "inlineMath",
                    body: "\\ket{\\vb{e}_1,0} = \\ket{\\vb{v},0}/v",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">/</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span>"
                  },
                  {
                    id: "text-362",
                    type: "text",
                    body: ", reads,"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-136",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-59",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "equation-10",
                    type: "equation",
                    body: "\\boldsymbol{\\Lambda}(\\vb{v}) =\n    \\frac{\\gamma}{v^2}\\ket{\\vb{v},0}\\bra{\\vb{v},0}\n    - \\frac{\\gamma}{c}\\ket{\\vb{v},0}\\bra{\\vb{0},1}\n    + \\ket{\\vb{e}_2,0}\\bra{\\vb{e}_2,0}\n    + \\ket{\\vb{e}_3,0}\\bra{\\vb{e}_3,0}\n    - \\frac{\\gamma}{c}\\ket{\\vb{0},1}\\bra{\\vb{v},0}\n    + \\gamma\\ket{\\vb{0},1}\\bra{\\vb{0},1}",
                    label: "eq:Lorentz_in_velocity",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.7936em;vertical-align:-0.6468em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1468em;\"><span style=\"top:-3.1468em;\"><span class=\"pstrut\" style=\"height:3.1076em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Λ</span></span></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">c</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">c</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.6468em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-137",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-105",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-363",
                    type: "text",
                    body: "When "
                  },
                  {
                    id: "inlineMath-159",
                    type: "inlineMath",
                    body: "\\vb{v}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span></span></span></span>"
                  },
                  {
                    id: "text-364",
                    type: "text",
                    body: "has the direction of the "
                  },
                  {
                    id: "inlineMath-160",
                    type: "inlineMath",
                    body: "x",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">x</span></span></span></span>"
                  },
                  {
                    id: "text-365",
                    type: "text",
                    body: "-axis, the transformation simplifies to the original"
                  },
                  {
                    id: "text-366",
                    type: "text",
                    body: "Einstein formula:"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-138",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-60",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "align-6",
                    type: "align",
                    body: "x' &= \\gamma(x - vt)               \\nonumber \\\\\n  y' &= y                            \\nonumber \\\\\n  z' &= z                            \\nonumber \\\\\n  t' &= \\gamma\\!\\left(t - \\frac{v}{c^2}x\\right)",
                    label: "eq:Lorentz_1d",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:6.336em;vertical-align:-2.918em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-r\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:3.418em;\"><span style=\"top:-5.728em;\"><span class=\"pstrut\" style=\"height:3.15em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span><span style=\"top:-4.228em;\"><span class=\"pstrut\" style=\"height:3.15em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span><span style=\"top:-2.728em;\"><span class=\"pstrut\" style=\"height:3.15em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span><span style=\"top:-0.918em;\"><span class=\"pstrut\" style=\"height:3.15em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.918em;\"><span></span></span></span></span></span><span class=\"col-align-l\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:3.418em;\"><span style=\"top:-5.728em;\"><span class=\"pstrut\" style=\"height:3.15em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span></span></span><span style=\"top:-4.228em;\"><span class=\"pstrut\" style=\"height:3.15em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span></span></span><span style=\"top:-2.728em;\"><span class=\"pstrut\" style=\"height:3.15em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span></span></span><span style=\"top:-0.918em;\"><span class=\"pstrut\" style=\"height:3.15em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:-0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size2\">(</span></span><span class=\"mord mathnormal\">t</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord mathnormal\">x</span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size2\">)</span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.918em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-139",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-106",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-367",
                    type: "text",
                    body: "Finally, one readily verifies that the Lorentz transformation satisfies the condition"
                  },
                  {
                    id: "inlineMath-161",
                    type: "inlineMath",
                    body: "\\boldsymbol{\\Lambda}^T\\vb{M}\\,\\boldsymbol{\\Lambda} = \\vb{M}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.9173em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Λ</span></span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9173em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.1389em;\">T</span></span></span></span></span></span></span></span><span class=\"mord text\"><span class=\"mord textbf\">M</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Λ</span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6861em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">M</span></span></span></span></span>"
                  },
                  {
                    id: "text-368",
                    type: "text",
                    body: ", hence "
                  },
                  {
                    id: "inlineMath-162",
                    type: "inlineMath",
                    body: "\\Delta s'^2=\\Delta s^2",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8141em;\"></span><span class=\"mord\">Δ</span><span class=\"mord\"><span class=\"mord mathnormal\">s</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′2</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8141em;\"></span><span class=\"mord\">Δ</span><span class=\"mord\"><span class=\"mord mathnormal\">s</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-369",
                    type: "text",
                    body: "for every pair of events, not only for"
                  },
                  {
                    id: "text-370",
                    type: "text",
                    body: "events lying on the worldline of a photon:"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-140",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-61",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "equation-11",
                    type: "equation",
                    body: "\\Delta s'^2\n  = \\ip{\\vb{X}'}{\\vb{M}\\,\\vb{X}'}\n  = \\ip{\\boldsymbol{\\Lambda}\\vb{X}}\n        {\\vb{M}\\,\\boldsymbol{\\Lambda}\\vb{X}}\n  = \\ip{\\vb{X}}\n        {\\boldsymbol{\\Lambda}^T\\vb{M}\\,\n         \\boldsymbol{\\Lambda}\\,\\vb{X}}\n  = \\ip{\\vb{X}}{\\vb{M}\\,\\vb{X}}\n  = \\Delta s^2.",
                    label: "eq:spacetime_interval_invariance",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.2773em;vertical-align:-0.3887em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8887em;\"><span style=\"top:-2.9713em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">Δ</span><span class=\"mord\"><span class=\"mord mathnormal\">s</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′2</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">X</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8279em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">M</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">X</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8279em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mclose\">⟩</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Λ</span></span></span><span class=\"mord text\"><span class=\"mord textbf\">X</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">M</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Λ</span></span></span><span class=\"mord text\"><span class=\"mord textbf\">X</span></span><span class=\"mclose\">⟩</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">X</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Λ</span></span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9173em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.1389em;\">T</span></span></span></span></span></span></span></span><span class=\"mord text\"><span class=\"mord textbf\">M</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Λ</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">X</span></span><span class=\"mclose\">⟩</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">X</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">M</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">X</span></span><span class=\"mclose\">⟩</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\">Δ</span><span class=\"mord\"><span class=\"mord mathnormal\">s</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mord\">.</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3887em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            }
          ],
          numbering: {
            path: [
              4,
              5,
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
        id: "layoutInlineGroup-107",
        type: "layoutInlineGroup",
        children: [
          {
            id: "text-371",
            type: "text",
            body: "A Final Remark on the Meaning of the Lorentz Transformation"
          }
        ]
      },
      intro: [
        {
          id: "contentLayoutGroup-141",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-108",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-372",
                type: "text",
                body: "When studying the Lorentz transformation, it is important to keep in mind a simple—perhaps "
              },
              {
                id: "text-373",
                type: "text",
                body: "obvious—but surprisingly often unstated point."
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-142",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-109",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-374",
                type: "text",
                body: "Each inertial reference frame possesses its own system of clocks and rulers."
              },
              {
                id: "text-375",
                type: "text",
                body: "Observers at rest in the frame "
              },
              {
                id: "inlineMath-163",
                type: "inlineMath",
                body: "F",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span></span></span></span>"
              },
              {
                id: "text-376",
                type: "text",
                body: "measure space and time using their own clocks"
              },
              {
                id: "text-377",
                type: "text",
                body: "and rulers, while observers at rest in "
              },
              {
                id: "inlineMath-164",
                type: "inlineMath",
                body: "F'",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
              },
              {
                id: "text-378",
                type: "text",
                body: "perform the same measurements using"
              },
              {
                id: "text-379",
                type: "text",
                body: "their own independent instruments. The uniform motion of one frame relative to"
              },
              {
                id: "text-380",
                type: "text",
                body: "the other does not physically modify either system. This principle was already"
              },
              {
                id: "text-381",
                type: "text",
                body: "implicit in Galilean relativity and remains equally valid in Special Relativity."
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-143",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-110",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-382",
                type: "text",
                body: "Imagine that we remain on Earth, going about our everyday lives, while an alien"
              },
              {
                id: "text-383",
                type: "text",
                body: "spacecraft flies past us at a speed approaching that of light. Suppose that the"
              },
              {
                id: "text-384",
                type: "text",
                body: "alien civilization is familiar with our way of measuring time. Through previous"
              },
              {
                id: "text-385",
                type: "text",
                body: "encounters with humanity, they know what we mean by a second, a minute, an"
              },
              {
                id: "text-386",
                type: "text",
                body: "hour, and a day."
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-144",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-111",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-387",
                type: "text",
                body: "Nothing unusual would happen from our perspective when the aliens fly by. Our"
              },
              {
                id: "text-388",
                type: "text",
                body: "clocks would continue to tick at their normal rate, our rulers would retain"
              },
              {
                id: "text-389",
                type: "text",
                body: "their usual lengths, and the laws of physics would proceed exactly as they"
              },
              {
                id: "text-390",
                type: "text",
                body: "always have. To us, there is nothing remarkable about our relative motion with"
              },
              {
                id: "text-391",
                type: "text",
                body: "respect to the alien spacecraft. In fact, we would not even know that an alien"
              },
              {
                id: "text-392",
                type: "text",
                body: "spacecraft was observing our motion. We would wake up, go to work,"
              },
              {
                id: "text-393",
                type: "text",
                body: "build telescopes, and perform experiments exactly as we always have. Our clocks"
              },
              {
                id: "text-394",
                type: "text",
                body: "would continue to tick normally, our rulers would retain their usual lengths,"
              },
              {
                id: "text-395",
                type: "text",
                body: "and the space and time we measure would simply describe the universe in which"
              },
              {
                id: "text-396",
                type: "text",
                body: "we live."
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-145",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-112",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-397",
                type: "text",
                body: "The situation is exactly the same for the crew aboard the alien spacecraft."
              },
              {
                id: "text-398",
                type: "text",
                body: "They, too, carry their own clocks and rulers, and from their perspective it is"
              },
              {
                id: "text-399",
                type: "text",
                body: "our planet that is rushing past at enormous speed. Their clocks tick normally,"
              },
              {
                id: "text-400",
                type: "text",
                body: "their rulers do not contract, and the physical world they experience is every"
              },
              {
                id: "text-401",
                type: "text",
                body: "bit as ordinary as ours. Each observer naturally believes that their own clocks"
              },
              {
                id: "text-402",
                type: "text",
                body: "and rulers describe the world correctly, and they are both right."
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-146",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-113",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-403",
                type: "text",
                body: "The alien observers, however, would describe our world very differently. They"
              },
              {
                id: "text-404",
                type: "text",
                body: "would conclude that one of our days lasts much longer than twenty-four hours,"
              },
              {
                id: "text-405",
                type: "text",
                body: "and that our cars, airplanes, and every object moving with the Earth are"
              },
              {
                id: "text-406",
                type: "text",
                body: "contracted along the direction of motion, as we shall derive in the following"
              },
              {
                id: "text-407",
                type: "text",
                body: "chapters."
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-147",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-114",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-408",
                type: "text",
                body: "What the alien observers "
              },
              {
                body: "can",
                id: "textbf-7",
                type: "textbf"
              },
              {
                id: "text-409",
                type: "text",
                body: "do is make sense of these apparently very"
              },
              {
                id: "text-410",
                type: "text",
                body: "long days by using the Lorentz transformation. Since they know the relative"
              },
              {
                id: "text-411",
                type: "text",
                body: "velocity between our two reference frames, they can compute how long our days"
              },
              {
                id: "text-412",
                type: "text",
                body: "actually last "
              },
              {
                body: "for us",
                id: "textbf-8",
                type: "textbf"
              },
              {
                id: "text-413",
                type: "text",
                body: ". They would then conclude that one day measured by"
              },
              {
                id: "text-414",
                type: "text",
                body: "our own clocks --- our "
              },
              {
                body: "proper time",
                id: "emph-1",
                type: "emph"
              },
              {
                id: "text-415",
                type: "text",
                body: "--- is exactly twenty-four hours, even though they "
              },
              {
                body: "measure",
                id: "textbf-9",
                type: "textbf"
              },
              {
                id: "text-416",
                type: "text",
                body: "a much longer time interval"
              },
              {
                body: "for",
                id: "emph-2",
                type: "emph"
              },
              {
                id: "text-417",
                type: "text",
                body: "the same process in their own reference frame. The Lorentz transformation therefore allows them to translate"
              },
              {
                id: "text-418",
                type: "text",
                body: "their description of our measurements into the measurements made by our own"
              },
              {
                id: "text-419",
                type: "text",
                body: "clocks and rulers. "
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-148",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-115",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-420",
                type: "text",
                body: "It is important to appreciate the role of the Lorentz transformation in this"
              },
              {
                id: "text-421",
                type: "text",
                body: "process. The alien observers never directly measure the passage of time on our"
              },
              {
                id: "text-422",
                type: "text",
                body: "clocks. What they measure is the duration of one of our days according to"
              },
              {
                body: "their",
                id: "emph-3",
                type: "emph"
              },
              {
                id: "text-423",
                type: "text",
                body: "own clocks. Likewise, we never directly measure the passage of"
              },
              {
                id: "text-424",
                type: "text",
                body: "time on theirs. Every observer performs measurements using only the clocks and"
              },
              {
                id: "text-425",
                type: "text",
                body: "rulers belonging to their own reference frame."
              },
              {
                id: "text-426",
                type: "text",
                body: "The purpose of the Lorentz transformation is therefore not to determine what an"
              },
              {
                id: "text-427",
                type: "text",
                body: "observer measures. Those measurements are obtained directly by experiment."
              },
              {
                id: "text-428",
                type: "text",
                body: "Rather, its role is to reconcile the independent measurements performed in the"
              },
              {
                id: "text-429",
                type: "text",
                body: "two reference frames, allowing each observer to infer what the other observer"
              },
              {
                id: "text-430",
                type: "text",
                body: "measures using their own clocks and rulers. "
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-149",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-116",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-431",
                type: "text",
                body: "Interestingly, if one of us were able to observe the alien spacecraft as it"
              },
              {
                id: "text-432",
                type: "text",
                body: "passed by, we would describe their world in exactly the same way. We would"
              },
              {
                id: "text-433",
                type: "text",
                body: "conclude that their days are much longer than ours and that distances along the"
              },
              {
                id: "text-434",
                type: "text",
                body: "direction of motion are contracted. Each observer therefore regards the other"
              },
              {
                id: "text-435",
                type: "text",
                body: "reference frame as exhibiting time dilation and length contraction, yet both"
              },
              {
                id: "text-436",
                type: "text",
                body: "descriptions are equally valid. "
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-150",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-117",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-437",
                type: "text",
                body: "This is a profound departure from our own experience. Contrary to the"
              },
              {
                id: "text-438",
                type: "text",
                body: "Newtonian view, there exists no preferred or absolute frame of reference against"
              },
              {
                id: "text-439",
                type: "text",
                body: "which motion can be measured. There exists no hidden or absolute reference frame from which one could "
              },
              {
                id: "text-440",
                type: "text",
                body: "decide whether our description or that of the alien observers is the \"correct\" one. "
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-151",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-118",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-441",
                type: "text",
                body: "The Lorentz transformation should therefore not be interpreted as imposing a"
              },
              {
                id: "text-442",
                type: "text",
                body: "relationship between the physical clocks or rulers belonging to the two"
              },
              {
                id: "text-443",
                type: "text",
                body: "reference frames. Rather, it provides the mathematical rule that relates the"
              },
              {
                id: "text-444",
                type: "text",
                body: "coordinates assigned by the two observers to the "
              },
              {
                body: "same spacetime event",
                id: "emph-4",
                type: "emph"
              },
              {
                id: "text-445",
                type: "text",
                body: ". "
              },
              {
                id: "text-446",
                type: "text",
                body: "The transformation does not constrain the"
              },
              {
                id: "text-447",
                type: "text",
                body: "independent evolution of time or space within either frame; it simply"
              },
              {
                id: "text-448",
                type: "text",
                body: "relates two different descriptions of one physical reality. "
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-152",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-119",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-449",
                type: "text",
                body: "This distinction is essential. The Lorentz transformation is fundamentally a"
              },
              {
                id: "text-450",
                type: "text",
                body: "transformation between coordinate systems, not a law describing how clocks"
              },
              {
                id: "text-451",
                type: "text",
                body: "or rulers physically change because of motion. The phenomena of time"
              },
              {
                id: "text-452",
                type: "text",
                body: "dilation, length contraction, and the relativity of simultaneity arise only"
              },
              {
                id: "text-453",
                type: "text",
                body: "when comparing measurements of specific physical processes performed in"
              },
              {
                id: "text-454",
                type: "text",
                body: "different inertial frames through these coordinate transformations. "
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-153",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-120",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-455",
                type: "text",
                body: "There is, however, one final viewpoint that deserves special attention. Besides the reference frames"
              },
              {
                id: "inlineMath-165",
                type: "inlineMath",
                body: "F",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span></span></span></span>"
              },
              {
                id: "text-456",
                type: "text",
                body: "and "
              },
              {
                id: "inlineMath-166",
                type: "inlineMath",
                body: "F'",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
              },
              {
                id: "text-457",
                type: "text",
                body: ", every physical object carries with it its own rest frame. This"
              },
              {
                id: "text-458",
                type: "text",
                body: "frame is not privileged in any universal sense, but it is privileged for the"
              },
              {
                id: "text-459",
                type: "text",
                body: "object itself: it is the frame in which the object remains at rest and in which"
              },
              {
                id: "text-460",
                type: "text",
                body: "its own clocks measure the passage of its history. The time measured by these"
              },
              {
                id: "text-461",
                type: "text",
                body: "clocks is called the "
              },
              {
                body: "proper time",
                id: "emph-5",
                type: "emph"
              },
              {
                id: "text-462",
                type: "text",
                body: ". Proper time is one of the fundamental quantities of Special Relativity and "
              },
              {
                id: "text-463",
                type: "text",
                body: "will become the natural parameter describing the history of every physical system throughout the chapters that follow. "
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-154",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-121",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-464",
                type: "text",
                body: "It is worth emphasizing one final conceptual point. "
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-155",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-122",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-465",
                type: "text",
                body: "Every observer performs measurements using only the clocks and rulers at rest"
              },
              {
                id: "text-466",
                type: "text",
                body: "in their own reference frame. The Lorentz transformation does not determine"
              },
              {
                id: "text-467",
                type: "text",
                body: "those measurements; they are obtained directly by experiment. Its purpose is to"
              },
              {
                id: "text-468",
                type: "text",
                body: "relate the independent measurements performed in different inertial reference"
              },
              {
                id: "text-469",
                type: "text",
                body: "frames. "
              }
            ]
          }
        }
      ],
      subsections: [],
      numbering: {
        path: [
          5,
          0,
          0
        ]
      }
    }
  ]
} as const satisfies LatexNodeMap["latexDocument"];
