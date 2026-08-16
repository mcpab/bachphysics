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
                body: "In this essay we will discuss the twin paradox, which arises in relativity when two objects,"
              },
              {
                id: "text-3",
                type: "text",
                body: "initially at the same position and each equipped with its own clock, move away from each other"
              },
              {
                id: "text-4",
                type: "text",
                body: "and later return to the same position. We assume that the two clocks are initially synchronized"
              },
              {
                id: "text-5",
                type: "text",
                body: "and therefore measure exactly the same time. When the two objects meet again, however, the clocks"
              },
              {
                id: "text-6",
                type: "text",
                body: "will in general have measured different elapsed times. "
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
                id: "text-7",
                type: "text",
                body: "In the twin experiment, one of two identical twins embarks on a space journey, moving at a speed"
              },
              {
                id: "text-8",
                type: "text",
                body: "close to the speed of light, while the other remains at home and waits for the traveling twin to"
              },
              {
                id: "text-9",
                type: "text",
                body: "return. When the twins meet again, the twin who remained at home has aged more than the one who"
              },
              {
                id: "text-10",
                type: "text",
                body: "traveled. This result appears paradoxical in two different ways. First, it is very counterintuitive"
              },
              {
                id: "text-11",
                type: "text",
                body: "to accept that simply moving differently can change the amount of time experienced by the two twins."
              },
              {
                id: "text-12",
                type: "text",
                body: "Second, and more importantly, there appears to be a breaking of symmetry. Why should one twin age"
              },
              {
                id: "text-13",
                type: "text",
                body: "differently from the other when there is no privileged system of reference? It seems as though the"
              },
              {
                id: "text-14",
                type: "text",
                body: "younger twin must somehow be different from the twin who remained at home. Yet, during their relative"
              },
              {
                id: "text-15",
                type: "text",
                body: "motion, each twin may regard the other as moving. We will examine in detail how this apparent"
              },
              {
                id: "text-16",
                type: "text",
                body: "asymmetry arises and why there is no contradiction with the principle of relativity. "
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
                body: "Below we will make use of formulas derived in the essay"
              },
              {
                id: "href-1",
                type: "href",
                href: "/physics/relativity/special-relativity/lorentz-transformations",
                label: {
                  id: "layoutInlineGroup-5",
                  type: "layoutInlineGroup",
                  children: [
                    {
                      id: "text-18",
                      type: "text",
                      body: "Lorentz Transformations"
                    }
                  ]
                }
              },
              {
                id: "text-19",
                type: "text",
                body: "."
              },
              {
                id: "text-20",
                type: "text",
                body: "In particular, we will need the transformation between two inertial reference frames "
              },
              {
                id: "inlineMath-1",
                type: "inlineMath",
                body: "F",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span></span></span></span>"
              },
              {
                id: "text-21",
                type: "text",
                body: "and "
              },
              {
                id: "inlineMath-2",
                type: "inlineMath",
                body: "F'",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
              },
              {
                id: "text-22",
                type: "text",
                body: ","
              },
              {
                id: "text-23",
                type: "text",
                body: "where "
              },
              {
                id: "inlineMath-3",
                type: "inlineMath",
                body: "F'",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
              },
              {
                id: "text-24",
                type: "text",
                body: "moves with velocity "
              },
              {
                id: "inlineMath-4",
                type: "inlineMath",
                body: "\\vb{v}=v\\vb{e}_1",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
              },
              {
                id: "text-25",
                type: "text",
                body: "relative to "
              },
              {
                id: "inlineMath-5",
                type: "inlineMath",
                body: "F",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span></span></span></span>"
              },
              {
                id: "text-26",
                type: "text",
                body: ". The Lorentz transformation"
              },
              {
                id: "text-27",
                type: "text",
                body: "for this boost is"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-4",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-1",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "equation-1",
                type: "equation",
                body: "\\begin{aligned}\n    \\boldsymbol{\\Lambda}(\\vb{v}) =\\;\n      &\\gamma\\ket{\\vb{e}_1,0}\\bra{\\vb{e}_1,0}\n      - \\gamma\\,\\frac{v}{c}\n        \\ket{\\vb{e}_1,0}\\bra{\\vb{0},1}\n      + \\ket{\\vb{e}_2,0}\\bra{\\vb{e}_2,0}\n      + \\ket{\\vb{e}_3,0}\\bra{\\vb{e}_3,0}\n      \\\\\n      &- \\gamma\\,\\frac{v}{c}\n        \\ket{\\vb{0},1}\\bra{\\vb{e}_1,0}\n      + \\gamma\\ket{\\vb{0},1}\\bra{\\vb{0},1}.\n  \\end{aligned}",
                label: "eq:Lorentz_transformation",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:3.8871em;vertical-align:-1.6936em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.1936em;\"><span style=\"top:-4.1936em;\"><span class=\"pstrut\" style=\"height:4.1936em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-r\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.1936em;\"><span style=\"top:-4.1936em;\"><span class=\"pstrut\" style=\"height:3.1076em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Λ</span></span></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span></span><span style=\"top:-2.1em;\"><span class=\"pstrut\" style=\"height:3.1076em;\"></span><span class=\"mord\"></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.6936em;\"><span></span></span></span></span></span><span class=\"col-align-l\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.1936em;\"><span style=\"top:-4.1936em;\"><span class=\"pstrut\" style=\"height:3.1076em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">c</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span></span></span><span style=\"top:-2.1em;\"><span class=\"pstrut\" style=\"height:3.1076em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">c</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">.</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.6936em;\"><span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.6936em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-5",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-6",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-28",
                type: "text",
                body: "Here,"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-6",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-2",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "equation-2",
                type: "equation",
                body: "\\gamma\n  =\n  \\frac{1}{\\sqrt{1-\\dfrac{v^2}{c^2}}}.",
                label: "eq:Lorentz_factor",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:3.6514em;vertical-align:-1.5757em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.0757em;\"><span style=\"top:-4.0757em;\"><span class=\"pstrut\" style=\"height:3.3214em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3214em;\"><span style=\"top:-2.11em;\"><span class=\"pstrut\" style=\"height:3.6876em;\"></span><span class=\"mord\"><span class=\"mord sqrt\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.6876em;\"><span class=\"svg-align\" style=\"top:-4.4em;\"><span class=\"pstrut\" style=\"height:4.4em;\"></span><span class=\"mord\" style=\"padding-left:1em;\"><span class=\"mord\">1</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4911em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span></span></span><span style=\"top:-3.6476em;\"><span class=\"pstrut\" style=\"height:4.4em;\"></span><span class=\"hide-tail\" style=\"min-width:1.02em;height:2.48em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400em\" height=\"2.48em\" viewBox=\"0 0 400000 2592\" preserveAspectRatio=\"xMinYMin slice\"><path d=\"M424,2478\nc-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514\nc0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20\ns-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121\ns209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081\nl0 -0c4,-6.7,10,-10,18,-10 H400000\nv40H1014.6\ns-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185\nc-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2z M1001 80\nh400000v40h-400000z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7524em;\"><span></span></span></span></span></span></span></span><span style=\"top:-3.9176em;\"><span class=\"pstrut\" style=\"height:3.6876em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-4.3646em;\"><span class=\"pstrut\" style=\"height:3.6876em;\"></span><span class=\"mord\"><span class=\"mord\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.33em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\">.</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.5757em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-7",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-7",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-29",
                type: "text",
                body: "We will restrict our analysis to the case in which the relative velocity is directed along the"
              },
              {
                id: "inlineMath-6",
                type: "inlineMath",
                body: "x",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">x</span></span></span></span>"
              },
              {
                id: "text-30",
                type: "text",
                body: "-axis. In this case, the corresponding transformations of space and time are"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-8",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-3",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "equation-3",
                type: "equation",
                body: "\\begin{aligned}\n    x' &= \\gamma(x-vt), \\\\\n    y' &= y, \\\\\n    z' &= z, \\\\\n    t' &= \\gamma\\!\\left(t-\\frac{v}{c^2}x\\right).\n  \\end{aligned}",
                label: "eq:Lorentz_transformation_along_x",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:6.336em;vertical-align:-2.918em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:3.418em;\"><span style=\"top:-5.418em;\"><span class=\"pstrut\" style=\"height:5.418em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-r\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:3.418em;\"><span style=\"top:-5.728em;\"><span class=\"pstrut\" style=\"height:3.15em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span><span style=\"top:-4.228em;\"><span class=\"pstrut\" style=\"height:3.15em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span><span style=\"top:-2.728em;\"><span class=\"pstrut\" style=\"height:3.15em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span><span style=\"top:-0.918em;\"><span class=\"pstrut\" style=\"height:3.15em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.918em;\"><span></span></span></span></span></span><span class=\"col-align-l\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:3.418em;\"><span style=\"top:-5.728em;\"><span class=\"pstrut\" style=\"height:3.15em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span></span></span><span style=\"top:-4.228em;\"><span class=\"pstrut\" style=\"height:3.15em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mpunct\">,</span></span></span><span style=\"top:-2.728em;\"><span class=\"pstrut\" style=\"height:3.15em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mpunct\">,</span></span></span><span style=\"top:-0.918em;\"><span class=\"pstrut\" style=\"height:3.15em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:-0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size2\">(</span></span><span class=\"mord mathnormal\">t</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord mathnormal\">x</span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size2\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">.</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.918em;\"><span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.918em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-9",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-8",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-31",
                type: "text",
                body: "As shown in the essay"
              },
              {
                id: "href-2",
                type: "href",
                href: "/physics/relativity/special-relativity/composition-of-velocities",
                label: {
                  id: "layoutInlineGroup-9",
                  type: "layoutInlineGroup",
                  children: [
                    {
                      id: "text-32",
                      type: "text",
                      body: "Composition of Velocities"
                    }
                  ]
                }
              },
              {
                id: "text-33",
                type: "text",
                body: ","
              },
              {
                id: "text-34",
                type: "text",
                body: "the two frames measure relative velocities of equal magnitude and opposite direction:"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-10",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-4",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "equation-4",
                type: "equation",
                body: "\\left.\\vb{u}\\right|_{\\vb{u}'=0}=\\vb{v},\n  \\qquad\n  \\left.\\vb{u}'\\right|_{\\vb{u}=0}=-\\vb{v},\n  \\qquad\n  |\\vb{u}|=|\\vb{u}'|=v.",
                label: "eq:reciprocal_relative_velocities",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.85em;\"><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"minner\"><span class=\"minner\"><span class=\"mopen nulldelimiter\"></span><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1783em;\"><span style=\"top:-2.4003em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\"><span class=\"mord text mtight\"><span class=\"mord textbf mtight\">u</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.6828em;\"><span style=\"top:-2.786em;margin-right:0.0714em;\"><span class=\"pstrut\" style=\"height:2.5em;\"></span><span class=\"sizing reset-size3 size1 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mrel mtight\">=</span><span class=\"mord mtight\">0</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2997em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"minner\"><span class=\"mopen nulldelimiter\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.4003em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord text mtight\"><span class=\"mord textbf mtight\">u</span></span><span class=\"mrel mtight\">=</span><span class=\"mord mtight\">0</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2997em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\">−</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"mord\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mord\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"mord\">.</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.35em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-11",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-10",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-35",
                type: "text",
                body: "These equations provide the kinematic relations needed to compare the elapsed times measured"
              },
              {
                id: "text-36",
                type: "text",
                body: "along the twins' different journeys."
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
        id: "layoutInlineGroup-11",
        type: "layoutInlineGroup",
        children: [
          {
            id: "text-37",
            type: "text",
            body: "Description of the Experiment"
          }
        ]
      },
      intro: [
        {
          id: "contentLayoutGroup-12",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-12",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-38",
                type: "text",
                body: "We will describe the experiment in terms of physical "
              },
              {
                body: "events",
                id: "textit-1",
                type: "textit"
              },
              {
                id: "text-39",
                type: "text",
                body: ". An event is a definite"
              },
              {
                id: "text-40",
                type: "text",
                body: "physical occurrence, such as the departure of the rocket or its arrival at planet "
              },
              {
                id: "inlineMath-7",
                type: "inlineMath",
                body: "G",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\">G</span></span></span></span>"
              },
              {
                id: "text-41",
                type: "text",
                body: ". The event"
              },
              {
                id: "text-42",
                type: "text",
                body: "itself is independent of the reference frame, although different reference frames generally assign"
              },
              {
                id: "text-43",
                type: "text",
                body: "different space and time coordinates to it. Consequently, a distance, an elapsed time, or a"
              },
              {
                id: "text-44",
                type: "text",
                body: "statement of simultaneity is meaningful only after the events used in the comparison have been"
              },
              {
                id: "text-45",
                type: "text",
                body: "specified. "
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-13",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-13",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-46",
                type: "text",
                body: "Let us consider the Earth as the origin of the spatial coordinates of a reference frame"
              },
              {
                id: "text-47",
                type: "text",
                body: "with coordinates "
              },
              {
                id: "inlineMath-8",
                type: "inlineMath",
                body: "(x,y,z)",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mclose\">)</span></span></span></span>"
              },
              {
                id: "text-48",
                type: "text",
                body: ", and let us consider a planet "
              },
              {
                id: "inlineMath-9",
                type: "inlineMath",
                body: "G",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\">G</span></span></span></span>"
              },
              {
                id: "text-49",
                type: "text",
                body: "located at a distance "
              },
              {
                id: "inlineMath-10",
                type: "inlineMath",
                body: "l",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span></span></span></span>"
              },
              {
                id: "text-50",
                type: "text",
                body: "along the "
              },
              {
                id: "inlineMath-11",
                type: "inlineMath",
                body: "x",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">x</span></span></span></span>"
              },
              {
                id: "text-51",
                type: "text",
                body: "-axis of this frame. "
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-14",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-14",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-52",
                type: "text",
                body: "We assume that one of the twins remains at the origin of the Earth reference frame and"
              },
              {
                id: "text-53",
                type: "text",
                body: "is equipped with a clock that he uses to measure time "
              },
              {
                id: "inlineMath-12",
                type: "inlineMath",
                body: "t",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6151em;\"></span><span class=\"mord mathnormal\">t</span></span></span></span>"
              },
              {
                id: "text-54",
                type: "text",
                body: ". This twin does not change his"
              },
              {
                id: "text-55",
                type: "text",
                body: "position with respect to this reference frame and measures spatial distances using the"
              },
              {
                id: "text-56",
                type: "text",
                body: "Earth coordinate system. "
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-15",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-15",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-57",
                type: "text",
                body: "We now consider the other twin, who will travel toward the planet "
              },
              {
                id: "inlineMath-13",
                type: "inlineMath",
                body: "G",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\">G</span></span></span></span>"
              },
              {
                id: "text-58",
                type: "text",
                body: ". We assume that,"
              },
              {
                id: "text-59",
                type: "text",
                body: "at the beginning of the journey, the two twins occupy exactly the same position. At this"
              },
              {
                id: "text-60",
                type: "text",
                body: "instant, the twin on the rocket introduces a spatial coordinate system "
              },
              {
                id: "inlineMath-14",
                type: "inlineMath",
                body: "(x',y',z')",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0019em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mclose\">)</span></span></span></span>"
              },
              {
                id: "text-61",
                type: "text",
                body: "whose"
              },
              {
                id: "text-62",
                type: "text",
                body: "origin and axes coincide with those of the Earth frame. The time measured by the clock"
              },
              {
                id: "text-63",
                type: "text",
                body: "carried by this twin will be denoted by "
              },
              {
                id: "inlineMath-15",
                type: "inlineMath",
                body: "t'",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
              },
              {
                id: "text-64",
                type: "text",
                body: ". "
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-16",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-16",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-65",
                type: "text",
                body: "Before departure, the twins synchronize their clocks and denote the departure event by "
              },
              {
                id: "inlineMath-16",
                type: "inlineMath",
                body: "(P_0)",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">P</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span></span></span></span>"
              },
              {
                id: "text-66",
                type: "text",
                body: ","
              },
              {
                id: "text-67",
                type: "text",
                body: "choosing it to correspond to"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-17",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-5",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-1",
                type: "displayMath",
                body: "t=t'=0.",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6151em;\"></span><span class=\"mord mathnormal\">t</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8019em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">0.</span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-18",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-17",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-68",
                type: "text",
                body: "At this instant their relative velocity is still zero, and the two spatial coordinate"
              },
              {
                id: "text-69",
                type: "text",
                body: "systems coincide. They therefore both agree that the planet "
              },
              {
                id: "inlineMath-17",
                type: "inlineMath",
                body: "G",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\">G</span></span></span></span>"
              },
              {
                id: "text-70",
                type: "text",
                body: "is located at a distance"
              },
              {
                id: "inlineMath-18",
                type: "inlineMath",
                body: "l",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span></span></span></span>"
              },
              {
                id: "text-71",
                type: "text",
                body: "from Earth along the positive "
              },
              {
                id: "inlineMath-19",
                type: "inlineMath",
                body: "x",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">x</span></span></span></span>"
              },
              {
                id: "text-72",
                type: "text",
                body: "-axis. "
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-19",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-18",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-73",
                type: "text",
                body: "The twin on the rocket now begins his journey toward the planet "
              },
              {
                id: "inlineMath-20",
                type: "inlineMath",
                body: "G",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\">G</span></span></span></span>"
              },
              {
                id: "text-74",
                type: "text",
                body: ", following a straight"
              },
              {
                id: "text-75",
                type: "text",
                body: "trajectory along the direction of the common "
              },
              {
                id: "inlineMath-21",
                type: "inlineMath",
                body: "x",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">x</span></span></span></span>"
              },
              {
                id: "text-76",
                type: "text",
                body: "-axis."
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-20",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-6",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "figure-1",
                type: "figure",
                src: "twinsBegin.png",
                width: 1536,
                height: 1024,
                caption: {
                  id: "layoutInlineGroup-19",
                  type: "layoutInlineGroup",
                  children: [
                    {
                      id: "text-77",
                      type: "text",
                      body: "Departure event"
                    }
                  ]
                },
                label: "fig:twin_departure"
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
            id: "layoutInlineGroup-20",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-78",
                type: "text",
                body: "Acceleration to "
              },
              {
                id: "inlineMath-22",
                type: "inlineMath",
                body: "\\vb v",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span></span></span></span>"
              }
            ]
          },
          content: [
            {
              id: "contentLayoutGroup-21",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-21",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-79",
                    type: "text",
                    body: "We now consider the initial portion of the journey during which the rocket accelerates"
                  },
                  {
                    id: "text-80",
                    type: "text",
                    body: "until it reaches the cruise velocity "
                  },
                  {
                    id: "inlineMath-23",
                    type: "inlineMath",
                    body: "\\vb v.",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mord\">.</span></span></span></span>"
                  },
                  {
                    id: "text-81",
                    type: "text",
                    body: "We use the following two events to delimit"
                  },
                  {
                    id: "text-82",
                    type: "text",
                    body: "this phase:"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-22",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-7",
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
                            id: "contentLayoutGroup-23",
                            type: "contentLayoutGroup",
                            children: {
                              id: "layoutInlineGroup-22",
                              type: "layoutInlineGroup",
                              children: [
                                {
                                  id: "inlineMath-24",
                                  type: "inlineMath",
                                  body: "(P_0)",
                                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">P</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span></span></span></span>"
                                },
                                {
                                  id: "text-83",
                                  type: "text",
                                  body: "The rocket leaves Earth and begins its initial acceleration."
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
                            id: "contentLayoutGroup-24",
                            type: "contentLayoutGroup",
                            children: {
                              id: "layoutInlineGroup-23",
                              type: "layoutInlineGroup",
                              children: [
                                {
                                  id: "inlineMath-25",
                                  type: "inlineMath",
                                  body: "(B)",
                                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0502em;\">B</span><span class=\"mclose\">)</span></span></span></span>"
                                },
                                {
                                  id: "text-84",
                                  type: "text",
                                  body: "The rocket reaches the cruise velocity "
                                },
                                {
                                  id: "inlineMath-26",
                                  type: "inlineMath",
                                  body: "\\vb v",
                                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span></span></span></span>"
                                },
                                {
                                  id: "text-85",
                                  type: "text",
                                  body: "."
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
              id: "contentLayoutGroup-25",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-24",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-86",
                    type: "text",
                    body: "The twin on Earth assigns to event "
                  },
                  {
                    id: "inlineMath-27",
                    type: "inlineMath",
                    body: "(P_0)",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">P</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-87",
                    type: "text",
                    body: "the coordinates"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-26",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-8",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-2",
                    type: "displayMath",
                    body: "(x,y,z,t)=(0,0,0,0),",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\">0</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-27",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-25",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-88",
                    type: "text",
                    body: "and to event "
                  },
                  {
                    id: "inlineMath-28",
                    type: "inlineMath",
                    body: "(B)",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0502em;\">B</span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-89",
                    type: "text",
                    body: "the coordinates"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-28",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-9",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-3",
                    type: "displayMath",
                    body: "(x,y,z,t)=(x_1,0,0,\\epsilon),",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\">ϵ</span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-29",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-26",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-90",
                    type: "text",
                    body: "where "
                  },
                  {
                    id: "inlineMath-29",
                    type: "inlineMath",
                    body: "\\epsilon",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">ϵ</span></span></span></span>"
                  },
                  {
                    id: "text-91",
                    type: "text",
                    body: "is the time required, according to the Earth clock, for the rocket"
                  },
                  {
                    id: "text-92",
                    type: "text",
                    body: "to reach its cruise velocity, and "
                  },
                  {
                    id: "inlineMath-30",
                    type: "inlineMath",
                    body: "x_1",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5806em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-93",
                    type: "text",
                    body: "is the corresponding position of the rocket"
                  },
                  {
                    id: "text-94",
                    type: "text",
                    body: "relative to Earth. "
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-30",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-27",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-95",
                    type: "text",
                    body: "The clock carried by the rocket is also set to zero at event "
                  },
                  {
                    id: "inlineMath-31",
                    type: "inlineMath",
                    body: "(P_0)",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">P</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-96",
                    type: "text",
                    body: ". Let "
                  },
                  {
                    id: "inlineMath-32",
                    type: "inlineMath",
                    body: "\\epsilon'",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">ϵ</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-97",
                    type: "text",
                    body: "denote the elapsed time measured by this clock between events "
                  },
                  {
                    id: "inlineMath-33",
                    type: "inlineMath",
                    body: "(P_0)",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">P</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-98",
                    type: "text",
                    body: "and "
                  },
                  {
                    id: "inlineMath-34",
                    type: "inlineMath",
                    body: "(B)",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0502em;\">B</span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-99",
                    type: "text",
                    body: ". Since"
                  },
                  {
                    id: "text-100",
                    type: "text",
                    body: "the rocket is accelerating during this interval, there is no single Lorentz transformation"
                  },
                  {
                    id: "text-101",
                    type: "text",
                    body: "that relates the Earth frame to the rocket over the entire acceleration phase. Instead,"
                  },
                  {
                    id: "text-102",
                    type: "text",
                    body: "at every instant we consider the Lorentz transformation whose velocity parameter is equal"
                  },
                  {
                    id: "text-103",
                    type: "text",
                    body: "to the instantaneous velocity of the rocket. "
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-31",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-28",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-104",
                    type: "text",
                    body: "For a Lorentz transformation with velocity parameter "
                  },
                  {
                    id: "inlineMath-35",
                    type: "inlineMath",
                    body: "v",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span>"
                  },
                  {
                    id: "text-105",
                    type: "text",
                    body: "along the "
                  },
                  {
                    id: "inlineMath-36",
                    type: "inlineMath",
                    body: "x",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">x</span></span></span></span>"
                  },
                  {
                    id: "text-106",
                    type: "text",
                    body: "-axis, the"
                  },
                  {
                    id: "text-107",
                    type: "text",
                    body: "differential of the time coordinate is"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-32",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-10",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "equation-5",
                    type: "equation",
                    body: "dt'\n  =\n  \\gamma(v)\n  \\left(\n    dt-\\frac{v}{c^2}dx\n  \\right).",
                    label: "eq:Lorentz_transformation_differential_time",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.836em;vertical-align:-0.668em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.168em;\"><span style=\"top:-3.168em;\"><span class=\"pstrut\" style=\"height:3.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size2\">(</span></span><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">x</span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size2\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">.</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.668em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-33",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-29",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-108",
                    type: "text",
                    body: "Looking at the differential above, we may wonder why no term proportional to "
                  },
                  {
                    id: "inlineMath-37",
                    type: "inlineMath",
                    body: "dv",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span>"
                  },
                  {
                    id: "text-109",
                    type: "text",
                    body: "appears, since the velocity of the rocket is itself changing with time. The reason is"
                  },
                  {
                    id: "text-110",
                    type: "text",
                    body: "that the velocity "
                  },
                  {
                    id: "inlineMath-38",
                    type: "inlineMath",
                    body: "v",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span>"
                  },
                  {
                    id: "text-111",
                    type: "text",
                    body: "appearing in the Lorentz transformation is a parameter of the"
                  },
                  {
                    id: "text-112",
                    type: "text",
                    body: "transformation. For each Lorentz transformation it is therefore held fixed when the"
                  },
                  {
                    id: "text-113",
                    type: "text",
                    body: "differential with respect to the spacetime coordinates is taken. Thus,"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-34",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-11",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-4",
                    type: "displayMath",
                    body: "dt'\n  =\n  \\gamma(v)\n  \\left(\n    dt-\\frac{v}{c^2}dx\n  \\right),",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8019em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.836em;vertical-align:-0.686em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size2\">(</span></span><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">x</span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size2\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mpunct\">,</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-35",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-30",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-114",
                    type: "text",
                    body: "contains no contribution proportional to "
                  },
                  {
                    id: "inlineMath-39",
                    type: "inlineMath",
                    body: "dv",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span>"
                  },
                  {
                    id: "text-115",
                    type: "text",
                    body: ". "
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-36",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-31",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-116",
                    type: "text",
                    body: "During the acceleration phase, the value of the parameter "
                  },
                  {
                    id: "inlineMath-40",
                    type: "inlineMath",
                    body: "v",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span>"
                  },
                  {
                    id: "text-117",
                    type: "text",
                    body: "changes along the"
                  },
                  {
                    id: "text-118",
                    type: "text",
                    body: "trajectory of the rocket. We therefore use, at each event of the trajectory, the"
                  },
                  {
                    id: "text-119",
                    type: "text",
                    body: "Lorentz transformation whose velocity parameter is equal to the velocity of the rocket"
                  },
                  {
                    id: "text-120",
                    type: "text",
                    body: "at that event. In this sense, "
                  },
                  {
                    id: "inlineMath-41",
                    type: "inlineMath",
                    body: "dt'",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-121",
                    type: "text",
                    body: "represents the infinitesimal time measured in the"
                  },
                  {
                    id: "text-122",
                    type: "text",
                    body: "corresponding instantaneous rocket frame; it should not be interpreted as the"
                  },
                  {
                    id: "text-123",
                    type: "text",
                    body: "differential of a single inertial time coordinate "
                  },
                  {
                    id: "inlineMath-42",
                    type: "inlineMath",
                    body: "t'",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-124",
                    type: "text",
                    body: "extending over the entire"
                  },
                  {
                    id: "text-125",
                    type: "text",
                    body: "acceleration phase. Rather, we consider a family of Lorentz"
                  },
                  {
                    id: "text-126",
                    type: "text",
                    body: "transformations"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-37",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-12",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-5",
                    type: "displayMath",
                    body: "\\boldsymbol{\\Lambda}\\bigl(v(t)\\bigr),",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Λ</span></span></span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mpunct\">,</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-38",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-32",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-127",
                    type: "text",
                    body: "and at each instant we use the member of this family whose fixed parameter is equal to"
                  },
                  {
                    id: "text-128",
                    type: "text",
                    body: "the instantaneous velocity of the rocket. The parameter labeling the transformation"
                  },
                  {
                    id: "text-129",
                    type: "text",
                    body: "changes along the trajectory, but it does not contribute to the differential within"
                  },
                  {
                    id: "text-130",
                    type: "text",
                    body: "each individual transformation.  "
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-39",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-33",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-131",
                    type: "text",
                    body: "Along the trajectory of the rocket,"
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
                    id: "displayMath-6",
                    type: "displayMath",
                    body: "dx=v(t)\\,dt,",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">x</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span><span class=\"mpunct\">,</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-41",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-34",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-132",
                    type: "text",
                    body: "and therefore "
                  },
                  {
                    id: "eqref-1",
                    type: "eqref",
                    body: "eq:Lorentz_transformation_differential_time"
                  },
                  {
                    id: "text-133",
                    type: "text",
                    body: "becomes"
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
                    id: "equation-6",
                    type: "equation",
                    body: "dt'\n  =\n  \\gamma(v)\n  \\left(\n    1-\\frac{v^2}{c^2}\n  \\right)dt\n  =\n  \\frac{dt}{\\gamma(v)}.",
                    label: "eq:rocket_clock_differential",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.4411em;vertical-align:-0.9706em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4706em;\"><span style=\"top:-3.4706em;\"><span class=\"pstrut\" style=\"height:3.4911em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">(</span></span><span class=\"mord\">1</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4911em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3714em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"mclose\">)</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.936em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\">.</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9706em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-43",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-35",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-134",
                    type: "text",
                    body: "The elapsed time measured by the clock carried by the rocket during the acceleration"
                  },
                  {
                    id: "text-135",
                    type: "text",
                    body: "phase is consequently"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-44",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-15",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "equation-7",
                    type: "equation",
                    body: "\\epsilon'\n  =\n  \\int_0^\\epsilon\n  \\frac{dt}{\\gamma(v(t))}\n  =\n  \\int_0^\\epsilon\n  \\sqrt{1-\\frac{v^2(t)}{c^2}}\\,dt.",
                    label: "eq:acceleration_elapsed_time",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.6404em;vertical-align:-1.0702em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.5702em;\"><span style=\"top:-3.5702em;\"><span class=\"pstrut\" style=\"height:3.7044em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">ϵ</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mop\"><span class=\"mop op-symbol large-op\" style=\"margin-right:0.4445em;position:relative;top:-0.0011em;\">∫</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4143em;\"><span style=\"top:-1.7881em;margin-left:-0.4445em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span><span style=\"top:-3.8129em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">ϵ</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9119em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3714em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">))</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.936em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mop\"><span class=\"mop op-symbol large-op\" style=\"margin-right:0.4445em;position:relative;top:-0.0011em;\">∫</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4143em;\"><span style=\"top:-1.7881em;margin-left:-0.4445em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span><span style=\"top:-3.8129em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">ϵ</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9119em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord sqrt\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.7044em;\"><span class=\"svg-align\" style=\"top:-4.4em;\"><span class=\"pstrut\" style=\"height:4.4em;\"></span><span class=\"mord\" style=\"padding-left:1em;\"><span class=\"mord\">1</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.427em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span></span></span><span style=\"top:-3.6644em;\"><span class=\"pstrut\" style=\"height:4.4em;\"></span><span class=\"hide-tail\" style=\"min-width:1.02em;height:2.48em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400em\" height=\"2.48em\" viewBox=\"0 0 400000 2592\" preserveAspectRatio=\"xMinYMin slice\"><path d=\"M424,2478\nc-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514\nc0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20\ns-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121\ns209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081\nl0 -0c4,-6.7,10,-10,18,-10 H400000\nv40H1014.6\ns-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185\nc-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2z M1001 80\nh400000v40h-400000z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7356em;\"><span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span><span class=\"mord\">.</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.0702em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-45",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-36",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-136",
                    type: "text",
                    body: "The precise relation between "
                  },
                  {
                    id: "inlineMath-43",
                    type: "inlineMath",
                    body: "\\epsilon",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">ϵ</span></span></span></span>"
                  },
                  {
                    id: "text-137",
                    type: "text",
                    body: "and "
                  },
                  {
                    id: "inlineMath-44",
                    type: "inlineMath",
                    body: "\\epsilon'",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">ϵ</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-138",
                    type: "text",
                    body: "therefore depends on the"
                  },
                  {
                    id: "text-139",
                    type: "text",
                    body: "acceleration profile "
                  },
                  {
                    id: "inlineMath-45",
                    type: "inlineMath",
                    body: "v(t)",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-140",
                    type: "text",
                    body: "of the rocket. No assumption is made here that the velocity"
                  },
                  {
                    id: "text-141",
                    type: "text",
                    body: "is small compared with the speed of light; on the contrary, the cruise velocity may"
                  },
                  {
                    id: "text-142",
                    type: "text",
                    body: "be arbitrarily close to "
                  },
                  {
                    id: "inlineMath-46",
                    type: "inlineMath",
                    body: "c",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">c</span></span></span></span>"
                  },
                  {
                    id: "text-143",
                    type: "text",
                    body: ". "
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-46",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-37",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-144",
                    type: "text",
                    body: "We will assume that the acceleration phase is very short compared with the duration"
                  },
                  {
                    id: "text-145",
                    type: "text",
                    body: "of the complete journey. More precisely, if "
                  },
                  {
                    id: "inlineMath-47",
                    type: "inlineMath",
                    body: "T",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span></span></span></span>"
                  },
                  {
                    id: "text-146",
                    type: "text",
                    body: "and "
                  },
                  {
                    id: "inlineMath-48",
                    type: "inlineMath",
                    body: "T'",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-147",
                    type: "text",
                    body: "denote characteristic time"
                  },
                  {
                    id: "text-148",
                    type: "text",
                    body: "scales of the journey as measured in the Earth frame and by the clock carried by the"
                  },
                  {
                    id: "text-149",
                    type: "text",
                    body: "rocket, respectively, we assume that"
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
                    id: "equation-8",
                    type: "equation",
                    body: "\\epsilon \\ll T,\n  \\qquad\n  \\epsilon' \\ll T'.",
                    label: "eq:negligible_acceleration_times",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.85em;\"><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">ϵ</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">≪</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">ϵ</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">≪</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mord\">.</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.35em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-48",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-38",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-150",
                    type: "text",
                    body: "The times spent accelerating are therefore negligible compared with the times spent"
                  },
                  {
                    id: "text-151",
                    type: "text",
                    body: "traveling at cruise velocity. In the remainder of the analysis we will neglect both"
                  },
                  {
                    id: "inlineMath-49",
                    type: "inlineMath",
                    body: "\\epsilon",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">ϵ</span></span></span></span>"
                  },
                  {
                    id: "text-152",
                    type: "text",
                    body: "and "
                  },
                  {
                    id: "inlineMath-50",
                    type: "inlineMath",
                    body: "\\epsilon'",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">ϵ</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-153",
                    type: "text",
                    body: ", while allowing the cruise velocity "
                  },
                  {
                    id: "inlineMath-51",
                    type: "inlineMath",
                    body: "\\vb v",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span></span></span></span>"
                  },
                  {
                    id: "text-154",
                    type: "text",
                    body: "to remain fully"
                  },
                  {
                    id: "text-155",
                    type: "text",
                    body: "relativistic. "
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-49",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-39",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-156",
                    type: "text",
                    body: "We further assume that the distance "
                  },
                  {
                    id: "inlineMath-52",
                    type: "inlineMath",
                    body: "x_1",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5806em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-157",
                    type: "text",
                    body: "traveled by the rocket during the initial"
                  },
                  {
                    id: "text-158",
                    type: "text",
                    body: "acceleration phase is very small compared with the distance "
                  },
                  {
                    id: "inlineMath-53",
                    type: "inlineMath",
                    body: "l",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span></span></span></span>"
                  },
                  {
                    id: "text-159",
                    type: "text",
                    body: "between Earth and"
                  },
                  {
                    id: "text-160",
                    type: "text",
                    body: "planet "
                  },
                  {
                    id: "inlineMath-54",
                    type: "inlineMath",
                    body: "G",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\">G</span></span></span></span>"
                  },
                  {
                    id: "text-161",
                    type: "text",
                    body: ","
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-50",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-17",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-7",
                    type: "displayMath",
                    body: "x_1 \\ll l.",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6891em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">≪</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span><span class=\"mord\">.</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-51",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-40",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-162",
                    type: "text",
                    body: "We will therefore also neglect "
                  },
                  {
                    id: "inlineMath-55",
                    type: "inlineMath",
                    body: "x_1",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5806em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-163",
                    type: "text",
                    body: "in the remainder of the analysis."
                  }
                ]
              }
            }
          ],
          numbering: {
            path: [
              2,
              1,
              0
            ]
          }
        },
        {
          id: "subsection-2",
          type: "subsection",
          title: {
            id: "layoutInlineGroup-41",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-164",
                type: "text",
                body: "Trip to "
              },
              {
                id: "inlineMath-56",
                type: "inlineMath",
                body: "G",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\">G</span></span></span></span>"
              }
            ]
          },
          content: [
            {
              id: "contentLayoutGroup-52",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-42",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-165",
                    type: "text",
                    body: "We now consider the journey of the rocket to the planet "
                  },
                  {
                    id: "inlineMath-57",
                    type: "inlineMath",
                    body: "G",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\">G</span></span></span></span>"
                  },
                  {
                    id: "text-166",
                    type: "text",
                    body: ". Since the motion takes"
                  },
                  {
                    id: "text-167",
                    type: "text",
                    body: "place entirely along the direction of the common "
                  },
                  {
                    id: "inlineMath-58",
                    type: "inlineMath",
                    body: "x",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">x</span></span></span></span>"
                  },
                  {
                    id: "text-168",
                    type: "text",
                    body: "-axis, we will omit the coordinates"
                  },
                  {
                    id: "inlineMath-59",
                    type: "inlineMath",
                    body: "y",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span></span></span></span>"
                  },
                  {
                    id: "text-169",
                    type: "text",
                    body: "and "
                  },
                  {
                    id: "inlineMath-60",
                    type: "inlineMath",
                    body: "z",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span></span></span></span>"
                  },
                  {
                    id: "text-170",
                    type: "text",
                    body: "in what follows. "
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-53",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-43",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-171",
                    type: "text",
                    body: "We consider the following two events:"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-54",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-18",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "itemize-2",
                    type: "itemize",
                    items: [
                      {
                        id: "item-3",
                        type: "item",
                        content: [
                          {
                            id: "contentLayoutGroup-55",
                            type: "contentLayoutGroup",
                            children: {
                              id: "layoutInlineGroup-44",
                              type: "layoutInlineGroup",
                              children: [
                                {
                                  id: "inlineMath-61",
                                  type: "inlineMath",
                                  body: "(P_0)",
                                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">P</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span></span></span></span>"
                                },
                                {
                                  id: "text-172",
                                  type: "text",
                                  body: "The rocket departs from Earth."
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
                            id: "contentLayoutGroup-56",
                            type: "contentLayoutGroup",
                            children: {
                              id: "layoutInlineGroup-45",
                              type: "layoutInlineGroup",
                              children: [
                                {
                                  id: "inlineMath-62",
                                  type: "inlineMath",
                                  body: "(P_1)",
                                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">P</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span></span></span></span>"
                                },
                                {
                                  id: "text-173",
                                  type: "text",
                                  body: "The rocket reaches the planet "
                                },
                                {
                                  id: "inlineMath-63",
                                  type: "inlineMath",
                                  body: "G",
                                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\">G</span></span></span></span>"
                                },
                                {
                                  id: "text-174",
                                  type: "text",
                                  body: "with velocity "
                                },
                                {
                                  id: "inlineMath-64",
                                  type: "inlineMath",
                                  body: "\\vb v",
                                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span></span></span></span>"
                                },
                                {
                                  id: "text-175",
                                  type: "text",
                                  body: "and begins"
                                },
                                {
                                  id: "text-176",
                                  type: "text",
                                  body: "to decelerate."
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
              id: "contentLayoutGroup-57",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-46",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-177",
                    type: "text",
                    body: "In light of the approximations introduced for the initial acceleration phase, we neglect"
                  },
                  {
                    id: "text-178",
                    type: "text",
                    body: "both the time and the distance between events "
                  },
                  {
                    id: "inlineMath-65",
                    type: "inlineMath",
                    body: "(P_0)",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">P</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-179",
                    type: "text",
                    body: "and "
                  },
                  {
                    id: "inlineMath-66",
                    type: "inlineMath",
                    body: "(B)",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0502em;\">B</span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-180",
                    type: "text",
                    body: ". Thus, for the cruise-phase"
                  },
                  {
                    id: "text-181",
                    type: "text",
                    body: "calculation, event "
                  },
                  {
                    id: "inlineMath-67",
                    type: "inlineMath",
                    body: "(B)",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0502em;\">B</span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-182",
                    type: "text",
                    body: "is treated as coincident with "
                  },
                  {
                    id: "inlineMath-68",
                    type: "inlineMath",
                    body: "(P_0)",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">P</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-183",
                    type: "text",
                    body: "to the accuracy of our"
                  },
                  {
                    id: "text-184",
                    type: "text",
                    body: "approximation. Accordingly, both twins assign to event "
                  },
                  {
                    id: "inlineMath-69",
                    type: "inlineMath",
                    body: "(P_0)",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">P</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-185",
                    type: "text",
                    body: "the coordinates"
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
                    id: "displayMath-8",
                    type: "displayMath",
                    body: "(x,t)=(0,0),\n  \\qquad\n  (x',t')=(0,0).",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0519em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\">0</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\">0</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-59",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-47",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-186",
                    type: "text",
                    body: "The twin on Earth assigns to event "
                  },
                  {
                    id: "inlineMath-70",
                    type: "inlineMath",
                    body: "(P_1)",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">P</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-187",
                    type: "text",
                    body: "the coordinates"
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
                    id: "displayMath-9",
                    type: "displayMath",
                    body: "(x,t)=(l,t_1),",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-61",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-48",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-188",
                    type: "text",
                    body: "where "
                  },
                  {
                    id: "inlineMath-71",
                    type: "inlineMath",
                    body: "t_1",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7651em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-189",
                    type: "text",
                    body: "is the time required for the rocket to travel from Earth to planet "
                  },
                  {
                    id: "inlineMath-72",
                    type: "inlineMath",
                    body: "G",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\">G</span></span></span></span>"
                  },
                  {
                    id: "text-190",
                    type: "text",
                    body: "."
                  },
                  {
                    id: "text-191",
                    type: "text",
                    body: "Since the rocket moves with constant speed "
                  },
                  {
                    id: "inlineMath-73",
                    type: "inlineMath",
                    body: "v=|\\vb v|",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mord\">∣</span></span></span></span>"
                  },
                  {
                    id: "text-192",
                    type: "text",
                    body: "during this portion of the"
                  },
                  {
                    id: "text-193",
                    type: "text",
                    body: "journey,"
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
                    id: "equation-9",
                    type: "equation",
                    body: "t_1=\\frac{l}{v}.",
                    label: "eq:outbound_time_earth",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.0574em;vertical-align:-0.7787em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.2787em;\"><span style=\"top:-3.2787em;\"><span class=\"pstrut\" style=\"height:3.3714em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3714em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\">.</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7787em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-63",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-49",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-194",
                    type: "text",
                    body: "During the outbound cruise, let "
                  },
                  {
                    id: "inlineMath-74",
                    type: "inlineMath",
                    body: "F'_{\\mathrm{out}}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.9989em;vertical-align:-0.247em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-2.453em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\"><span class=\"mord mathrm mtight\">out</span></span></span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-195",
                    type: "text",
                    body: "denote the inertial frame comoving with"
                  },
                  {
                    id: "text-196",
                    type: "text",
                    body: "the rocket. The rocket moves with velocity "
                  },
                  {
                    id: "inlineMath-75",
                    type: "inlineMath",
                    body: "+\\vb v",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord\">+</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span></span></span></span>"
                  },
                  {
                    id: "text-197",
                    type: "text",
                    body: "relative to the Earth frame "
                  },
                  {
                    id: "inlineMath-76",
                    type: "inlineMath",
                    body: "F",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span></span></span></span>"
                  },
                  {
                    id: "text-198",
                    type: "text",
                    body: ", while"
                  },
                  {
                    id: "text-199",
                    type: "text",
                    body: "Earth and planet "
                  },
                  {
                    id: "inlineMath-77",
                    type: "inlineMath",
                    body: "G",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\">G</span></span></span></span>"
                  },
                  {
                    id: "text-200",
                    type: "text",
                    body: "move with velocity "
                  },
                  {
                    id: "inlineMath-78",
                    type: "inlineMath",
                    body: "-\\vb v",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord\">−</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span></span></span></span>"
                  },
                  {
                    id: "text-201",
                    type: "text",
                    body: "relative to "
                  },
                  {
                    id: "inlineMath-79",
                    type: "inlineMath",
                    body: "F'_{\\mathrm{out}}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.9989em;vertical-align:-0.247em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-2.453em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\"><span class=\"mord mathrm mtight\">out</span></span></span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-202",
                    type: "text",
                    body: ". The twin on"
                  },
                  {
                    id: "text-203",
                    type: "text",
                    body: "the rocket assigns to event "
                  },
                  {
                    id: "inlineMath-80",
                    type: "inlineMath",
                    body: "(P_1)",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">P</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-204",
                    type: "text",
                    body: "the coordinates"
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
                    id: "displayMath-10",
                    type: "displayMath",
                    body: "(x',t')=(0,t_1'),",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0519em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0519em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\">0</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-65",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-50",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-205",
                    type: "text",
                    body: "where "
                  },
                  {
                    id: "inlineMath-81",
                    type: "inlineMath",
                    body: "t_1'",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.2481em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-2.4519em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2481em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-206",
                    type: "text",
                    body: "is the elapsed time measured by his clock during the journey to planet"
                  },
                  {
                    id: "inlineMath-82",
                    type: "inlineMath",
                    body: "G",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\">G</span></span></span></span>"
                  },
                  {
                    id: "text-207",
                    type: "text",
                    body: ". There are two different ways in which he can determine "
                  },
                  {
                    id: "inlineMath-83",
                    type: "inlineMath",
                    body: "t_1'",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.2481em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-2.4519em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2481em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-208",
                    type: "text",
                    body: ". "
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-66",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-51",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-209",
                    type: "text",
                    body: "The first is to use the Lorentz transformation directly. Applying it to event "
                  },
                  {
                    id: "inlineMath-84",
                    type: "inlineMath",
                    body: "(P_1)",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">P</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-210",
                    type: "text",
                    body: ","
                  },
                  {
                    id: "text-211",
                    type: "text",
                    body: "whose coordinates in the Earth frame are"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-67",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-23",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-11",
                    type: "displayMath",
                    body: "(x,t)=\\left(l,\\frac{l}{v}\\right),",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.4em;vertical-align:-0.95em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">(</span></span><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3714em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mpunct\">,</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-68",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-52",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-212",
                    type: "text",
                    body: "we obtain"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-69",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-24",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "equation-10",
                    type: "equation",
                    body: "\\begin{aligned}\n    x'\n    &=\n    \\gamma(x-vt)\n    =\n    \\gamma\\left(\n      l-v\\frac{l}{v}\n    \\right)\n    =\n    0,\n    \\\\\n    t_1'\n    &=\n    \\gamma\\left(\n      t-\\frac{v}{c^2}x\n    \\right)\n    \\\\\n    &=\n    \\gamma\\left(\n      \\frac{l}{v}-\\frac{vl}{c^2}\n    \\right)\n    =\n    \\frac{1}{\\gamma}\\frac{l}{v}.\n  \\end{aligned}",
                    label: "eq:outbound_time_rocket_lorentz",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:7.2361em;vertical-align:-3.368em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:3.868em;\"><span style=\"top:-5.868em;\"><span class=\"pstrut\" style=\"height:5.868em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-r\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:3.868em;\"><span style=\"top:-5.868em;\"><span class=\"pstrut\" style=\"height:3.45em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.468em;\"><span class=\"pstrut\" style=\"height:3.45em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-1.032em;\"><span class=\"pstrut\" style=\"height:3.45em;\"></span><span class=\"mord\"></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:3.368em;\"><span></span></span></span></span></span><span class=\"col-align-l\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:3.868em;\"><span style=\"top:-5.868em;\"><span class=\"pstrut\" style=\"height:3.45em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">(</span></span><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3714em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\">0</span><span class=\"mpunct\">,</span></span></span><span style=\"top:-3.468em;\"><span class=\"pstrut\" style=\"height:3.45em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size2\">(</span></span><span class=\"mord mathnormal\">t</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord mathnormal\">x</span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size2\">)</span></span></span></span></span><span style=\"top:-1.032em;\"><span class=\"pstrut\" style=\"height:3.45em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">(</span></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3714em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3714em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3214em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8804em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3714em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\">.</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:3.368em;\"><span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:3.368em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-70",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-53",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-213",
                    type: "text",
                    body: "Therefore,"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-71",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-25",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "equation-11",
                    type: "equation",
                    body: "t_1'=\\frac{t_1}{\\gamma}.",
                    label: "eq:outbound_time_relation",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.1725em;vertical-align:-0.8363em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3363em;\"><span style=\"top:-3.3363em;\"><span class=\"pstrut\" style=\"height:3.2921em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.2921em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8804em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\">.</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8363em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-72",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-54",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-214",
                    type: "text",
                    body: "There is, however, another way for the twin on the rocket to understand this result."
                  },
                  {
                    id: "text-215",
                    type: "text",
                    body: "As soon as the rocket has reached its cruise velocity "
                  },
                  {
                    id: "inlineMath-85",
                    type: "inlineMath",
                    body: "\\vb v",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span></span></span></span>"
                  },
                  {
                    id: "text-216",
                    type: "text",
                    body: ", the distance between"
                  },
                  {
                    id: "text-217",
                    type: "text",
                    body: "Earth and planet "
                  },
                  {
                    id: "inlineMath-86",
                    type: "inlineMath",
                    body: "G",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\">G</span></span></span></span>"
                  },
                  {
                    id: "text-218",
                    type: "text",
                    body: ", measured in the rocket frame, is smaller than the corresponding"
                  },
                  {
                    id: "text-219",
                    type: "text",
                    body: "distance "
                  },
                  {
                    id: "inlineMath-87",
                    type: "inlineMath",
                    body: "l",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span></span></span></span>"
                  },
                  {
                    id: "text-220",
                    type: "text",
                    body: "measured in the Earth frame. "
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-73",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-55",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-221",
                    type: "text",
                    body: "To understand why, let us first consider how the twin on the rocket measures a length"
                  },
                  {
                    id: "text-222",
                    type: "text",
                    body: "belonging to an object at rest in the Earth frame. As an example, consider the diameter"
                  },
                  {
                    id: "text-223",
                    type: "text",
                    body: "of the Earth along the direction of motion. Let its diameter measured in the Earth frame"
                  },
                  {
                    id: "text-224",
                    type: "text",
                    body: "be"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-74",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-26",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-12",
                    type: "displayMath",
                    body: "d=2r.",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">2</span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">r</span><span class=\"mord\">.</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-75",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-56",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-225",
                    type: "text",
                    body: "A measurement of this diameter in the rocket frame requires the positions of the two"
                  },
                  {
                    id: "text-226",
                    type: "text",
                    body: "opposite endpoints of the diameter to be determined "
                  },
                  {
                    body: "simultaneously in the\nrocket frame",
                    id: "textit-2",
                    type: "textit"
                  },
                  {
                    id: "text-227",
                    type: "text",
                    body: ". We therefore introduce two events:"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-76",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-27",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "itemize-3",
                    type: "itemize",
                    items: [
                      {
                        id: "item-5",
                        type: "item",
                        content: [
                          {
                            id: "contentLayoutGroup-77",
                            type: "contentLayoutGroup",
                            children: {
                              id: "layoutInlineGroup-57",
                              type: "layoutInlineGroup",
                              children: [
                                {
                                  id: "inlineMath-88",
                                  type: "inlineMath",
                                  body: "(E_+)",
                                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">E</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2583em;\"><span style=\"top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mbin mtight\">+</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2083em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span></span></span></span>"
                                },
                                {
                                  id: "text-228",
                                  type: "text",
                                  body: "The position of the endpoint of the Earth on the positive side of the"
                                },
                                {
                                  id: "inlineMath-89",
                                  type: "inlineMath",
                                  body: "x",
                                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">x</span></span></span></span>"
                                },
                                {
                                  id: "text-229",
                                  type: "text",
                                  body: "-axis is measured."
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
                            id: "contentLayoutGroup-78",
                            type: "contentLayoutGroup",
                            children: {
                              id: "layoutInlineGroup-58",
                              type: "layoutInlineGroup",
                              children: [
                                {
                                  id: "inlineMath-90",
                                  type: "inlineMath",
                                  body: "(E_-)",
                                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">E</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2583em;\"><span style=\"top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mbin mtight\">−</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2083em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span></span></span></span>"
                                },
                                {
                                  id: "text-230",
                                  type: "text",
                                  body: "The position of the endpoint of the Earth on the negative side of the"
                                },
                                {
                                  id: "inlineMath-91",
                                  type: "inlineMath",
                                  body: "x",
                                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">x</span></span></span></span>"
                                },
                                {
                                  id: "text-231",
                                  type: "text",
                                  body: "-axis is measured."
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
              id: "contentLayoutGroup-79",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-59",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-232",
                    type: "text",
                    body: "Since these two measurements are simultaneous in the rocket frame, their coordinates"
                  },
                  {
                    id: "text-233",
                    type: "text",
                    body: "can be written as"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-80",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-28",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "equation-12",
                    type: "equation",
                    body: "\\begin{aligned}\n    E_+ &: \\qquad (x',t')=(x_+',t_+'), \\\\\n    E_- &: \\qquad (x',t')=(x_-',t_-').\n  \\end{aligned}",
                    label: "eq:earth_diameter_events_rocket",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.7em;vertical-align:-1.1em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.6em;\"><span style=\"top:-3.6em;\"><span class=\"pstrut\" style=\"height:3.6em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-r\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.6em;\"><span style=\"top:-3.76em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">E</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2583em;\"><span style=\"top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mbin mtight\">+</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2083em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-2.26em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">E</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2583em;\"><span style=\"top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mbin mtight\">−</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2083em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1em;\"><span></span></span></span></span></span><span class=\"col-align-l\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.6em;\"><span style=\"top:-3.76em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">:</span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mbin mtight\">+</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3053em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mbin mtight\">+</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3053em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span></span></span><span style=\"top:-2.26em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">:</span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mbin mtight\">−</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3053em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mbin mtight\">−</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3053em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1em;\"><span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-81",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-60",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-234",
                    type: "text",
                    body: "The diameter measured by the twin on the rocket is therefore"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-82",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-29",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "equation-13",
                    type: "equation",
                    body: "d'=x_+'-x_-'.",
                    label: "eq:earth_diameter_rocket_definition",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.85em;\"><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mbin mtight\">+</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3053em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mbin mtight\">−</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3053em;\"><span></span></span></span></span></span></span><span class=\"mord\">.</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.35em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-83",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-61",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-235",
                    type: "text",
                    body: "It is important to emphasize that the measurement of a spatial distance in a given"
                  },
                  {
                    id: "text-236",
                    type: "text",
                    body: "reference frame requires the positions of its endpoints to be measured at the same"
                  },
                  {
                    id: "text-237",
                    type: "text",
                    body: "time in that frame. The events "
                  },
                  {
                    id: "inlineMath-92",
                    type: "inlineMath",
                    body: "E_+",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8917em;vertical-align:-0.2083em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">E</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2583em;\"><span style=\"top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mbin mtight\">+</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2083em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-238",
                    type: "text",
                    body: "and "
                  },
                  {
                    id: "inlineMath-93",
                    type: "inlineMath",
                    body: "E_-",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8917em;vertical-align:-0.2083em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">E</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2583em;\"><span style=\"top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mbin mtight\">−</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2083em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-239",
                    type: "text",
                    body: "are simultaneous in the rocket frame,"
                  },
                  {
                    id: "text-240",
                    type: "text",
                    body: "but they are not simultaneous in the Earth frame. "
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
                    id: "text-241",
                    type: "text",
                    body: "Since the Earth is at rest in the Earth frame and centered at the origin, the same two"
                  },
                  {
                    id: "text-242",
                    type: "text",
                    body: "events have coordinates"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-85",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-30",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "equation-14",
                    type: "equation",
                    body: "\\begin{aligned}\n    E_+ &: \\qquad (x,t)=(r,t_+), \\\\\n    E_- &: \\qquad (x,t)=(-r,t_-).\n  \\end{aligned}",
                    label: "eq:earth_diameter_events_earth",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.7em;vertical-align:-1.1em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.6em;\"><span style=\"top:-3.6em;\"><span class=\"pstrut\" style=\"height:3.6em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-r\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.6em;\"><span style=\"top:-3.76em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">E</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2583em;\"><span style=\"top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mbin mtight\">+</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2083em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-2.26em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">E</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2583em;\"><span style=\"top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mbin mtight\">−</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2083em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1em;\"><span></span></span></span></span></span><span class=\"col-align-l\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.6em;\"><span style=\"top:-3.76em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">:</span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">r</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2583em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mbin mtight\">+</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2083em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span></span></span><span style=\"top:-2.26em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">:</span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mopen\">(</span><span class=\"mord\">−</span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">r</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2583em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mbin mtight\">−</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2083em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1em;\"><span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
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
                    id: "text-243",
                    type: "text",
                    body: "Because the two events are simultaneous in the rocket frame,"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-87",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-31",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-13",
                    type: "displayMath",
                    body: "t_+'-t_-'=0,",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.1072em;vertical-align:-0.3053em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mbin mtight\">+</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3053em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.1072em;vertical-align:-0.3053em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mbin mtight\">−</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3053em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8389em;vertical-align:-0.1944em;\"></span><span class=\"mord\">0</span><span class=\"mpunct\">,</span></span></span></span></span>"
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
                    id: "text-244",
                    type: "text",
                    body: "using the Lorentz transformation for the time coordinate, we obtain"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-89",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-32",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "equation-15",
                    type: "equation",
                    body: "\\begin{aligned}\n    0\n    &=\n    \\gamma\\left(\n      t_+-\\frac{v}{c^2}r\n    \\right)\n    -\n    \\gamma\\left(\n      t_- -\\frac{v}{c^2}(-r)\n    \\right)\n    \\\\\n    &=\n    \\gamma\\left[\n      t_+-t_-\n      -\n      \\frac{v}{c^2}(2r)\n    \\right].\n  \\end{aligned}",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:3.972em;vertical-align:-1.736em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.236em;\"><span style=\"top:-4.236em;\"><span class=\"pstrut\" style=\"height:4.236em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-r\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.236em;\"><span style=\"top:-4.236em;\"><span class=\"pstrut\" style=\"height:3.15em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span><span style=\"top:-2.1em;\"><span class=\"pstrut\" style=\"height:3.15em;\"></span><span class=\"mord\"></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.736em;\"><span></span></span></span></span></span><span class=\"col-align-l\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.236em;\"><span style=\"top:-4.236em;\"><span class=\"pstrut\" style=\"height:3.15em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size2\">(</span></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2583em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mbin mtight\">+</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2083em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">r</span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size2\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size2\">(</span></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2583em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mbin mtight\">−</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2083em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mopen\">(</span><span class=\"mord\">−</span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">r</span><span class=\"mclose\">)</span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size2\">)</span></span></span></span></span><span style=\"top:-2.1em;\"><span class=\"pstrut\" style=\"height:3.15em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size2\">[</span></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2583em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mbin mtight\">+</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2083em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2583em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mbin mtight\">−</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2083em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mopen\">(</span><span class=\"mord\">2</span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">r</span><span class=\"mclose\">)</span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size2\">]</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">.</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.736em;\"><span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.736em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
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
                    id: "text-245",
                    type: "text",
                    body: "Since "
                  },
                  {
                    id: "inlineMath-94",
                    type: "inlineMath",
                    body: "d=2r",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">2</span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">r</span></span></span></span>"
                  },
                  {
                    id: "text-246",
                    type: "text",
                    body: ", it follows that"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-91",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-33",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "equation-16",
                    type: "equation",
                    body: "t_+-t_-=\\frac{v}{c^2}d.",
                    label: "eq:earth_diameter_relativity_simultaneity",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.7936em;vertical-align:-0.6468em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1468em;\"><span style=\"top:-3.1468em;\"><span class=\"pstrut\" style=\"height:3.1076em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2583em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mbin mtight\">+</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2083em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2583em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mbin mtight\">−</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2083em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord mathnormal\">d</span><span class=\"mord\">.</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.6468em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
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
                    id: "text-247",
                    type: "text",
                    body: "Thus, although "
                  },
                  {
                    id: "inlineMath-95",
                    type: "inlineMath",
                    body: "E_+",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8917em;vertical-align:-0.2083em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">E</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2583em;\"><span style=\"top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mbin mtight\">+</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2083em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-248",
                    type: "text",
                    body: "and "
                  },
                  {
                    id: "inlineMath-96",
                    type: "inlineMath",
                    body: "E_-",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8917em;vertical-align:-0.2083em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">E</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2583em;\"><span style=\"top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mbin mtight\">−</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2083em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-249",
                    type: "text",
                    body: "occur simultaneously for the twin on the rocket,"
                  },
                  {
                    id: "text-250",
                    type: "text",
                    body: "event "
                  },
                  {
                    id: "inlineMath-97",
                    type: "inlineMath",
                    body: "E_+",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8917em;vertical-align:-0.2083em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">E</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2583em;\"><span style=\"top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mbin mtight\">+</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2083em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-251",
                    type: "text",
                    body: "occurs after event "
                  },
                  {
                    id: "inlineMath-98",
                    type: "inlineMath",
                    body: "E_-",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8917em;vertical-align:-0.2083em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">E</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2583em;\"><span style=\"top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mbin mtight\">−</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2083em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-252",
                    type: "text",
                    body: "according to the twin on Earth. This is a direct"
                  },
                  {
                    id: "text-253",
                    type: "text",
                    body: "manifestation of the relativity of simultaneity. "
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
                    id: "text-254",
                    type: "text",
                    body: "We can now use the spatial part of the Lorentz transformation to determine the diameter"
                  },
                  {
                    id: "text-255",
                    type: "text",
                    body: "measured in the rocket frame. Taking the difference between the transformed positions"
                  },
                  {
                    id: "text-256",
                    type: "text",
                    body: "of the two events gives"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-94",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-34",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "equation-17",
                    type: "equation",
                    body: "\\begin{aligned}\n    d'\n    &=\n    x_+'-x_-'\n    \\\\\n    &=\n    \\gamma\\left[\n      (r-(-r))-v(t_+-t_-)\n    \\right].\n  \\end{aligned}",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.7em;vertical-align:-1.1em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.6em;\"><span style=\"top:-3.6em;\"><span class=\"pstrut\" style=\"height:3.6em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-r\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.6em;\"><span style=\"top:-3.76em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span><span style=\"top:-2.26em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1em;\"><span></span></span></span></span></span><span class=\"col-align-l\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.6em;\"><span style=\"top:-3.76em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mbin mtight\">+</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3053em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mbin mtight\">−</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3053em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-2.26em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">[</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">r</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mopen\">(</span><span class=\"mord\">−</span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">r</span><span class=\"mclose\">))</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2583em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mbin mtight\">+</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2083em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2583em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mbin mtight\">−</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2083em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mclose delimcenter\" style=\"top:0em;\">]</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">.</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1em;\"><span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
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
                    id: "text-257",
                    type: "text",
                    body: "Using "
                  },
                  {
                    id: "eqref-2",
                    type: "eqref",
                    body: "eq:earth_diameter_relativity_simultaneity"
                  },
                  {
                    id: "text-258",
                    type: "text",
                    body: ", we obtain"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-96",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-35",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "equation-18",
                    type: "equation",
                    body: "\\begin{aligned}\n    d'\n    &=\n    \\gamma\\left(\n      d-\\frac{v^2}{c^2}d\n    \\right)\n    \\\\\n    &=\n    \\frac{d}{\\gamma}.\n  \\end{aligned}",
                    label: "eq:length_contraction_example",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:4.993em;vertical-align:-2.2465em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.7465em;\"><span style=\"top:-4.7465em;\"><span class=\"pstrut\" style=\"height:4.7465em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-r\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.7465em;\"><span style=\"top:-4.7465em;\"><span class=\"pstrut\" style=\"height:3.4911em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span><span style=\"top:-2.125em;\"><span class=\"pstrut\" style=\"height:3.4911em;\"></span><span class=\"mord\"></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.2465em;\"><span></span></span></span></span></span><span class=\"col-align-l\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.7465em;\"><span style=\"top:-4.7465em;\"><span class=\"pstrut\" style=\"height:3.4911em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">(</span></span><span class=\"mord mathnormal\">d</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4911em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord mathnormal\">d</span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">)</span></span></span></span></span><span style=\"top:-2.125em;\"><span class=\"pstrut\" style=\"height:3.4911em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3714em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8804em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\">.</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.2465em;\"><span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.2465em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
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
                    id: "text-259",
                    type: "text",
                    body: "The twin on the rocket therefore measures a smaller longitudinal diameter for the"
                  },
                  {
                    id: "text-260",
                    type: "text",
                    body: "Earth than the twin at rest with respect to it. More generally, the separation between"
                  },
                  {
                    id: "text-261",
                    type: "text",
                    body: "two points that are at rest in the Earth frame and separated along the direction of"
                  },
                  {
                    id: "text-262",
                    type: "text",
                    body: "relative motion is measured in the rocket frame to be"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-98",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-36",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "equation-19",
                    type: "equation",
                    body: "l'=\\frac{l}{\\gamma}.",
                    label: "eq:earth_planet_distance_rocket",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.2519em;vertical-align:-0.8759em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3759em;\"><span style=\"top:-3.3759em;\"><span class=\"pstrut\" style=\"height:3.3714em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3714em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8804em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\">.</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8759em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
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
                    id: "text-263",
                    type: "text",
                    body: "In particular, Earth and planet "
                  },
                  {
                    id: "inlineMath-99",
                    type: "inlineMath",
                    body: "G",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\">G</span></span></span></span>"
                  },
                  {
                    id: "text-264",
                    type: "text",
                    body: "are both at rest in the Earth frame and are"
                  },
                  {
                    id: "text-265",
                    type: "text",
                    body: "separated by the distance "
                  },
                  {
                    id: "inlineMath-100",
                    type: "inlineMath",
                    body: "l",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span></span></span></span>"
                  },
                  {
                    id: "text-266",
                    type: "text",
                    body: ". The twin on the rocket therefore measures their"
                  },
                  {
                    id: "text-267",
                    type: "text",
                    body: "separation to be "
                  },
                  {
                    id: "inlineMath-101",
                    type: "inlineMath",
                    body: "l'",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-268",
                    type: "text",
                    body: ". "
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-100",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-71",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-269",
                    type: "text",
                    body: "The following figure summarizes the outbound journey in both reference frames. In the Earth"
                  },
                  {
                    id: "text-270",
                    type: "text",
                    body: "frame, Earth and planet "
                  },
                  {
                    id: "inlineMath-102",
                    type: "inlineMath",
                    body: "G",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\">G</span></span></span></span>"
                  },
                  {
                    id: "text-271",
                    type: "text",
                    body: "are at rest and separated by the distance "
                  },
                  {
                    id: "inlineMath-103",
                    type: "inlineMath",
                    body: "l",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span></span></span></span>"
                  },
                  {
                    id: "text-272",
                    type: "text",
                    body: ", while the"
                  },
                  {
                    id: "text-273",
                    type: "text",
                    body: "rocket moves between them with speed "
                  },
                  {
                    id: "inlineMath-104",
                    type: "inlineMath",
                    body: "v",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span>"
                  },
                  {
                    id: "text-274",
                    type: "text",
                    body: ". In the rocket frame, the rocket is at rest,"
                  },
                  {
                    id: "text-275",
                    type: "text",
                    body: "while Earth and planet "
                  },
                  {
                    id: "inlineMath-105",
                    type: "inlineMath",
                    body: "G",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\">G</span></span></span></span>"
                  },
                  {
                    id: "text-276",
                    type: "text",
                    body: "move with the same speed "
                  },
                  {
                    id: "inlineMath-106",
                    type: "inlineMath",
                    body: "v",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span>"
                  },
                  {
                    id: "text-277",
                    type: "text",
                    body: "in the opposite direction, but"
                  },
                  {
                    id: "text-278",
                    type: "text",
                    body: "their separation is reduced to "
                  },
                  {
                    id: "inlineMath-107",
                    type: "inlineMath",
                    body: "l/\\gamma",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span><span class=\"mord\">/</span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span></span></span></span>"
                  },
                  {
                    id: "text-279",
                    type: "text",
                    body: ". "
                  },
                  {
                    id: "text-280",
                    type: "text",
                    body: "In the rocket-frame diagram, the rocket is shown midway between Earth and planet "
                  },
                  {
                    id: "inlineMath-108",
                    type: "inlineMath",
                    body: "G",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\">G</span></span></span></span>"
                  },
                  {
                    id: "text-281",
                    type: "text",
                    body: "only for visual convenience. This midpoint has no special physical significance. At the"
                  },
                  {
                    id: "text-282",
                    type: "text",
                    body: "instant represented in the figure,"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-101",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-37",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-14",
                    type: "displayMath",
                    body: "x'_{\\mathrm E}=-\\frac{l'}{2},\n  \\qquad\n  x'_G=\\frac{l'}{2},",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0489em;vertical-align:-0.247em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathrm mtight\">E</span></span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.1149em;vertical-align:-0.686em;\"></span><span class=\"mord\">−</span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">2</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">G</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.1149em;vertical-align:-0.686em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">2</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mpunct\">,</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-102",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-72",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-283",
                    type: "text",
                    body: "with"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-103",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-38",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-15",
                    type: "displayMath",
                    body: "l'=\\frac{l}{\\gamma}.",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8019em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.2519em;vertical-align:-0.8804em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3714em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8804em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\">.</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-104",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-73",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-284",
                    type: "text",
                    body: "At any other instant during the cruise, the individual coordinates of Earth and planet"
                  },
                  {
                    id: "inlineMath-109",
                    type: "inlineMath",
                    body: "G",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\">G</span></span></span></span>"
                  },
                  {
                    id: "text-285",
                    type: "text",
                    body: "would be different, while their simultaneous separation in the rocket frame would"
                  },
                  {
                    id: "text-286",
                    type: "text",
                    body: "remain equal to "
                  },
                  {
                    id: "inlineMath-110",
                    type: "inlineMath",
                    body: "l'",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-287",
                    type: "text",
                    body: "."
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-105",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-39",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "figure-2",
                    type: "figure",
                    src: "rocketOutbound.png",
                    width: 1536,
                    height: 1026,
                    caption: {
                      id: "layoutInlineGroup-74",
                      type: "layoutInlineGroup",
                      children: [
                        {
                          id: "text-288",
                          type: "text",
                          body: "Outbound trip: Earth frame "
                        },
                        {
                          id: "inlineMath-111",
                          type: "inlineMath",
                          body: "F",
                          html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span></span></span></span>"
                        },
                        {
                          id: "text-289",
                          type: "text",
                          body: "versus the outbound rocket frame "
                        },
                        {
                          id: "inlineMath-112",
                          type: "inlineMath",
                          body: "F'_{\\mathrm{out}}",
                          html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.9989em;vertical-align:-0.247em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-2.453em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\"><span class=\"mord mathrm mtight\">out</span></span></span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span></span></span></span>"
                        },
                        {
                          id: "text-290",
                          type: "text",
                          body: "."
                        }
                      ]
                    },
                    label: "fig:twin_outbound_frames"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-106",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-75",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-291",
                    type: "text",
                    body: "As shown previously in "
                  },
                  {
                    id: "eqref-3",
                    type: "eqref",
                    body: "eq:reciprocal_relative_velocities"
                  },
                  {
                    id: "text-292",
                    type: "text",
                    body: ", if the rocket moves"
                  },
                  {
                    id: "text-293",
                    type: "text",
                    body: "with velocity "
                  },
                  {
                    id: "inlineMath-113",
                    type: "inlineMath",
                    body: "\\vb v",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span></span></span></span>"
                  },
                  {
                    id: "text-294",
                    type: "text",
                    body: "relative to Earth, then Earth and planet "
                  },
                  {
                    id: "inlineMath-114",
                    type: "inlineMath",
                    body: "G",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\">G</span></span></span></span>"
                  },
                  {
                    id: "text-295",
                    type: "text",
                    body: "move with velocity"
                  },
                  {
                    id: "inlineMath-115",
                    type: "inlineMath",
                    body: "-\\vb v",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord\">−</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span></span></span></span>"
                  },
                  {
                    id: "text-296",
                    type: "text",
                    body: "relative to the rocket. The magnitude of the relative velocity is therefore"
                  },
                  {
                    id: "text-297",
                    type: "text",
                    body: "the same in both descriptions and is equal to "
                  },
                  {
                    id: "inlineMath-116",
                    type: "inlineMath",
                    body: "v",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span>"
                  },
                  {
                    id: "text-298",
                    type: "text",
                    body: ". Consequently, according to the"
                  },
                  {
                    id: "text-299",
                    type: "text",
                    body: "rocket twin, planet "
                  },
                  {
                    id: "inlineMath-117",
                    type: "inlineMath",
                    body: "G",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\">G</span></span></span></span>"
                  },
                  {
                    id: "text-300",
                    type: "text",
                    body: "approaches him with speed "
                  },
                  {
                    id: "inlineMath-118",
                    type: "inlineMath",
                    body: "v",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span>"
                  },
                  {
                    id: "text-301",
                    type: "text",
                    body: ", and the time required for the"
                  },
                  {
                    id: "text-302",
                    type: "text",
                    body: "planet to reach him is"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-107",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-40",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "equation-20",
                    type: "equation",
                    body: "t_1'\n  =\n  \\frac{l'}{v}\n  =\n  \\frac{1}{\\gamma}\\frac{l}{v}.",
                    label: "eq:outbound_time_rocket_length",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.3093em;vertical-align:-0.9047em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4047em;\"><span style=\"top:-3.4047em;\"><span class=\"pstrut\" style=\"height:3.4289em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3214em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8804em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3714em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\">.</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9047em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-108",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-76",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-303",
                    type: "text",
                    body: "This is identical to the result obtained directly from the Lorentz transformation in"
                  },
                  {
                    id: "eqref-4",
                    type: "eqref",
                    body: "eq:outbound_time_rocket_lorentz"
                  },
                  {
                    id: "text-304",
                    type: "text",
                    body: ". Since "
                  },
                  {
                    id: "inlineMath-119",
                    type: "inlineMath",
                    body: "\\gamma>1",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">&gt;</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">1</span></span></span></span>"
                  },
                  {
                    id: "text-305",
                    type: "text",
                    body: "for "
                  },
                  {
                    id: "inlineMath-120",
                    type: "inlineMath",
                    body: "v>0",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5782em;vertical-align:-0.0391em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">&gt;</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">0</span></span></span></span>"
                  },
                  {
                    id: "text-306",
                    type: "text",
                    body: ", we also have"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-109",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-41",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "equation-21",
                    type: "equation",
                    body: "t_1'<t_1.",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.85em;\"><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">&lt;</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mord\">.</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.35em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-110",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-77",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-307",
                    type: "text",
                    body: "Thus, the two twins agree on the events marking the beginning and the end of this"
                  },
                  {
                    id: "text-308",
                    type: "text",
                    body: "portion of the journey, but they assign different spatial distances and different"
                  },
                  {
                    id: "text-309",
                    type: "text",
                    body: "elapsed times to it. For the twin on the rocket, the distance between Earth and planet"
                  },
                  {
                    id: "inlineMath-121",
                    type: "inlineMath",
                    body: "G",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\">G</span></span></span></span>"
                  },
                  {
                    id: "text-310",
                    type: "text",
                    body: "is shorter, and correspondingly less time elapses before the rocket and the planet"
                  },
                  {
                    id: "text-311",
                    type: "text",
                    body: "meet."
                  }
                ]
              }
            }
          ],
          numbering: {
            path: [
              2,
              2,
              0
            ]
          }
        },
        {
          id: "subsection-3",
          type: "subsection",
          title: {
            id: "layoutInlineGroup-78",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-312",
                type: "text",
                body: "Trip Back to Earth"
              }
            ]
          },
          content: [
            {
              id: "contentLayoutGroup-111",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-79",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-313",
                    type: "text",
                    body: "Once the twin on the rocket reaches planet "
                  },
                  {
                    id: "inlineMath-122",
                    type: "inlineMath",
                    body: "G",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\">G</span></span></span></span>"
                  },
                  {
                    id: "text-314",
                    type: "text",
                    body: ", he reverses his motion and begins the"
                  },
                  {
                    id: "text-315",
                    type: "text",
                    body: "journey back to Earth. As in the initial acceleration phase, we assume that the time"
                  },
                  {
                    id: "text-316",
                    type: "text",
                    body: "required to reverse the motion is very small compared with the duration of the journey,"
                  },
                  {
                    id: "text-317",
                    type: "text",
                    body: "and we neglect both this time interval and the corresponding displacement. "
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-112",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-80",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-318",
                    type: "text",
                    body: "We denote by "
                  },
                  {
                    id: "inlineMath-123",
                    type: "inlineMath",
                    body: "(P_2)",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">P</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-319",
                    type: "text",
                    body: "the event at which the traveling twin reunites with the twin on Earth."
                  },
                  {
                    id: "text-320",
                    type: "text",
                    body: "For the return cruise, let "
                  },
                  {
                    id: "inlineMath-124",
                    type: "inlineMath",
                    body: "F'_{\\mathrm{in}}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0164em;vertical-align:-0.2645em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-2.4355em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\"><span class=\"mord mathrm mtight\">in</span></span></span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2645em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-321",
                    type: "text",
                    body: "denote the inertial frame comoving with the"
                  },
                  {
                    id: "text-322",
                    type: "text",
                    body: "rocket. The rocket moves with velocity "
                  },
                  {
                    id: "inlineMath-125",
                    type: "inlineMath",
                    body: "-\\vb v",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord\">−</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span></span></span></span>"
                  },
                  {
                    id: "text-323",
                    type: "text",
                    body: "relative to the Earth frame "
                  },
                  {
                    id: "inlineMath-126",
                    type: "inlineMath",
                    body: "F",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span></span></span></span>"
                  },
                  {
                    id: "text-324",
                    type: "text",
                    body: ", while Earth"
                  },
                  {
                    id: "text-325",
                    type: "text",
                    body: "and planet "
                  },
                  {
                    id: "inlineMath-127",
                    type: "inlineMath",
                    body: "G",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\">G</span></span></span></span>"
                  },
                  {
                    id: "text-326",
                    type: "text",
                    body: "move with velocity "
                  },
                  {
                    id: "inlineMath-128",
                    type: "inlineMath",
                    body: "+\\vb v",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord\">+</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span></span></span></span>"
                  },
                  {
                    id: "text-327",
                    type: "text",
                    body: "relative to "
                  },
                  {
                    id: "inlineMath-129",
                    type: "inlineMath",
                    body: "F'_{\\mathrm{in}}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0164em;vertical-align:-0.2645em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-2.4355em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\"><span class=\"mord mathrm mtight\">in</span></span></span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2645em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-328",
                    type: "text",
                    body: ". The magnitude of"
                  },
                  {
                    id: "text-329",
                    type: "text",
                    body: "the relative velocity is therefore again "
                  },
                  {
                    id: "inlineMath-130",
                    type: "inlineMath",
                    body: "v",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span>"
                  },
                  {
                    id: "text-330",
                    type: "text",
                    body: ". Moreover, for the same reason discussed in"
                  },
                  {
                    id: "text-331",
                    type: "text",
                    body: "the previous section, the distance between Earth and planet "
                  },
                  {
                    id: "inlineMath-131",
                    type: "inlineMath",
                    body: "G",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\">G</span></span></span></span>"
                  },
                  {
                    id: "text-332",
                    type: "text",
                    body: "measured in the inbound"
                  },
                  {
                    id: "text-333",
                    type: "text",
                    body: "rocket frame is"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-113",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-42",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-16",
                    type: "displayMath",
                    body: "l'=\\frac{l}{\\gamma}.",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8019em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.2519em;vertical-align:-0.8804em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3714em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8804em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\">.</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-114",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-81",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-334",
                    type: "text",
                    body: "Consequently, the elapsed time measured by the twin on the rocket during the return"
                  },
                  {
                    id: "text-335",
                    type: "text",
                    body: "journey is"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-115",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-43",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "equation-22",
                    type: "equation",
                    body: "t_2'\n  =\n  \\frac{l'}{v}\n  =\n  \\frac{1}{\\gamma}\\frac{l}{v}.",
                    label: "eq:return_time_rocket",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.3093em;vertical-align:-0.9047em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4047em;\"><span style=\"top:-3.4047em;\"><span class=\"pstrut\" style=\"height:3.4289em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3214em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8804em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3714em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\">.</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9047em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-116",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-82",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-336",
                    type: "text",
                    body: "For the twin on Earth, on the other hand, the rocket travels the distance "
                  },
                  {
                    id: "inlineMath-132",
                    type: "inlineMath",
                    body: "l",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span></span></span></span>"
                  },
                  {
                    id: "text-337",
                    type: "text",
                    body: "from"
                  },
                  {
                    id: "text-338",
                    type: "text",
                    body: "planet "
                  },
                  {
                    id: "inlineMath-133",
                    type: "inlineMath",
                    body: "G",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\">G</span></span></span></span>"
                  },
                  {
                    id: "text-339",
                    type: "text",
                    body: "back to Earth with speed "
                  },
                  {
                    id: "inlineMath-134",
                    type: "inlineMath",
                    body: "v",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span>"
                  },
                  {
                    id: "text-340",
                    type: "text",
                    body: ". The elapsed time for the return journey is"
                  },
                  {
                    id: "text-341",
                    type: "text",
                    body: "therefore"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-117",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-44",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "equation-23",
                    type: "equation",
                    body: "t_2\n  =\n  \\frac{l}{v}.",
                    label: "eq:return_time_earth",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.0574em;vertical-align:-0.7787em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.2787em;\"><span style=\"top:-3.2787em;\"><span class=\"pstrut\" style=\"height:3.3714em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3714em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\">.</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7787em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-118",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-83",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-342",
                    type: "text",
                    body: "The outbound and return portions of the journey have the same duration in each"
                  },
                  {
                    id: "text-343",
                    type: "text",
                    body: "corresponding description,"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-119",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-45",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-17",
                    type: "displayMath",
                    body: "t_2=t_1,\n  \\qquad\n  t_2'=t_1'.",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7651em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0489em;vertical-align:-0.247em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0489em;vertical-align:-0.247em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mord\">.</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-120",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-84",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-344",
                    type: "text",
                    body: "Within the approximation that the launch and turnaround durations and displacements are"
                  },
                  {
                    id: "text-345",
                    type: "text",
                    body: "negligible compared with the two cruise portions, the total elapsed time measured by the"
                  },
                  {
                    id: "text-346",
                    type: "text",
                    body: "clock carried by the rocket is therefore"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-121",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-46",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "equation-24",
                    type: "equation",
                    body: "\\begin{aligned}\n    T'\n    &=\n    t_1'+t_2'\n    \\\\\n    &=\n    2\\frac{1}{\\gamma}\\frac{l}{v},\n  \\end{aligned}",
                    label: "eq:total_journey_time_rocket",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:3.7519em;vertical-align:-1.6259em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.1259em;\"><span style=\"top:-4.1259em;\"><span class=\"pstrut\" style=\"height:4.1259em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-r\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.1259em;\"><span style=\"top:-4.6574em;\"><span class=\"pstrut\" style=\"height:3.3714em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span><span style=\"top:-2.6259em;\"><span class=\"pstrut\" style=\"height:3.3714em;\"></span><span class=\"mord\"></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.6259em;\"><span></span></span></span></span></span><span class=\"col-align-l\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.1259em;\"><span style=\"top:-4.6574em;\"><span class=\"pstrut\" style=\"height:3.3714em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-2.6259em;\"><span class=\"pstrut\" style=\"height:3.3714em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\">2</span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3214em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8804em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3714em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mpunct\">,</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.6259em;\"><span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.6259em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-122",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-85",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-347",
                    type: "text",
                    body: "whereas the total elapsed time measured by the clock on Earth is"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-123",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-47",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "equation-25",
                    type: "equation",
                    body: "\\begin{aligned}\n    T\n    &=\n    t_1+t_2\n    \\\\\n    &=\n    2\\frac{l}{v}.\n  \\end{aligned}",
                    label: "eq:total_journey_time_earth",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:3.5574em;vertical-align:-1.5287em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.0287em;\"><span style=\"top:-4.0287em;\"><span class=\"pstrut\" style=\"height:4.0287em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-r\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.0287em;\"><span style=\"top:-4.5602em;\"><span class=\"pstrut\" style=\"height:3.3714em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span></span></span><span style=\"top:-2.5287em;\"><span class=\"pstrut\" style=\"height:3.3714em;\"></span><span class=\"mord\"></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.5287em;\"><span></span></span></span></span></span><span class=\"col-align-l\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.0287em;\"><span style=\"top:-4.5602em;\"><span class=\"pstrut\" style=\"height:3.3714em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-2.5287em;\"><span class=\"pstrut\" style=\"height:3.3714em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\">2</span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3714em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\">.</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.5287em;\"><span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.5287em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-124",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-86",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-348",
                    type: "text",
                    body: "Since "
                  },
                  {
                    id: "inlineMath-135",
                    type: "inlineMath",
                    body: "\\gamma>1",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7335em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">&gt;</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">1</span></span></span></span>"
                  },
                  {
                    id: "text-349",
                    type: "text",
                    body: "for any nonzero relative velocity,"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-125",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-48",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "equation-26",
                    type: "equation",
                    body: "T'<T.",
                    label: "eq:twin_elapsed_time_difference",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.85em;\"><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">&lt;</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"mord\">.</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.35em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-126",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-87",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-350",
                    type: "text",
                    body: "Thus, at the reunion event "
                  },
                  {
                    id: "inlineMath-136",
                    type: "inlineMath",
                    body: "(P_2)",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">P</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-351",
                    type: "text",
                    body: "on Earth, the clock carried by the traveling twin"
                  },
                  {
                    id: "text-352",
                    type: "text",
                    body: "records a smaller elapsed time than the clock that remained on Earth. Since each twin's"
                  },
                  {
                    id: "text-353",
                    type: "text",
                    body: "clock measures the time experienced by that twin, the traveling twin is younger when"
                  },
                  {
                    id: "text-354",
                    type: "text",
                    body: "the two are reunited. The quantity "
                  },
                  {
                    id: "inlineMath-137",
                    type: "inlineMath",
                    body: "T'",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-355",
                    type: "text",
                    body: "is the elapsed time recorded by the same continuous"
                  },
                  {
                    id: "text-356",
                    type: "text",
                    body: "onboard clock throughout the entire journey; it is not a coordinate time belonging to one"
                  },
                  {
                    id: "text-357",
                    type: "text",
                    body: "global inertial frame "
                  },
                  {
                    id: "inlineMath-138",
                    type: "inlineMath",
                    body: "F'",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-358",
                    type: "text",
                    body: "."
                  },
                  {
                    id: "text-359",
                    type: "text",
                    body: "The complete journey is summarized in the following figure. The upper row"
                  },
                  {
                    id: "text-360",
                    type: "text",
                    body: "represents the motion in the Earth frame, while the lower row represents the corresponding"
                  },
                  {
                    id: "text-361",
                    type: "text",
                    body: "description during the constant-velocity portions of the rocket's motion. The short"
                  },
                  {
                    id: "text-362",
                    type: "text",
                    body: "turnaround interval is shown explicitly but is assumed to be negligible compared with the"
                  },
                  {
                    id: "text-363",
                    type: "text",
                    body: "duration of the two cruise portions. "
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-127",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-49",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "figure-3",
                    type: "figure",
                    src: "rocketInbound.png",
                    width: 1536,
                    height: 1024,
                    caption: {
                      id: "layoutInlineGroup-88",
                      type: "layoutInlineGroup",
                      children: [
                        {
                          id: "text-364",
                          type: "text",
                          body: "Complete journey in the Earth frame "
                        },
                        {
                          id: "inlineMath-139",
                          type: "inlineMath",
                          body: "F",
                          html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span></span></span></span>"
                        },
                        {
                          id: "text-365",
                          type: "text",
                          body: "and in the corresponding outbound and"
                        },
                        {
                          id: "text-366",
                          type: "text",
                          body: "inbound rocket frames "
                        },
                        {
                          id: "inlineMath-140",
                          type: "inlineMath",
                          body: "F'_{\\mathrm{out}}",
                          html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.9989em;vertical-align:-0.247em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-2.453em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\"><span class=\"mord mathrm mtight\">out</span></span></span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span></span></span></span>"
                        },
                        {
                          id: "text-367",
                          type: "text",
                          body: "and "
                        },
                        {
                          id: "inlineMath-141",
                          type: "inlineMath",
                          body: "F'_{\\mathrm{in}}",
                          html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0164em;vertical-align:-0.2645em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-2.4355em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\"><span class=\"mord mathrm mtight\">in</span></span></span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2645em;\"><span></span></span></span></span></span></span></span></span></span>"
                        },
                        {
                          id: "text-368",
                          type: "text",
                          body: "."
                        }
                      ]
                    },
                    label: "fig:twin_complete_journey"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-128",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-89",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-369",
                    type: "text",
                    body: "As in the previous figure, the precise positions shown during the cruise are schematic."
                  },
                  {
                    id: "text-370",
                    type: "text",
                    body: "What is physically relevant is that Earth and planet "
                  },
                  {
                    id: "inlineMath-142",
                    type: "inlineMath",
                    body: "G",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\">G</span></span></span></span>"
                  },
                  {
                    id: "text-371",
                    type: "text",
                    body: "are separated by the distance"
                  },
                  {
                    id: "inlineMath-143",
                    type: "inlineMath",
                    body: "l",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span></span></span></span>"
                  },
                  {
                    id: "text-372",
                    type: "text",
                    body: "in the Earth frame and by the contracted distance "
                  },
                  {
                    id: "inlineMath-144",
                    type: "inlineMath",
                    body: "l/\\gamma",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span><span class=\"mord\">/</span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span></span></span></span>"
                  },
                  {
                    id: "text-373",
                    type: "text",
                    body: "in the corresponding"
                  },
                  {
                    id: "text-374",
                    type: "text",
                    body: "outbound or inbound rocket frame."
                  }
                ]
              }
            }
          ],
          numbering: {
            path: [
              2,
              3,
              0
            ]
          }
        },
        {
          id: "subsection-4",
          type: "subsection",
          title: {
            id: "layoutInlineGroup-90",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-375",
                type: "text",
                body: "Reciprocal Time Dilation and the Role of Events"
              }
            ]
          },
          content: [
            {
              id: "contentLayoutGroup-129",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-91",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-376",
                    type: "text",
                    body: "At first sight, the result obtained above may still appear paradoxical. During every"
                  },
                  {
                    id: "text-377",
                    type: "text",
                    body: "portion of the journey in which the relative velocity is constant, the twin on the"
                  },
                  {
                    id: "text-378",
                    type: "text",
                    body: "rocket is equally entitled to regard himself as being at rest and the Earth as moving"
                  },
                  {
                    id: "text-379",
                    type: "text",
                    body: "with speed "
                  },
                  {
                    id: "inlineMath-145",
                    type: "inlineMath",
                    body: "v",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span>"
                  },
                  {
                    id: "text-380",
                    type: "text",
                    body: ". In both "
                  },
                  {
                    id: "inlineMath-146",
                    type: "inlineMath",
                    body: "F'_{\\mathrm{out}}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.9989em;vertical-align:-0.247em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-2.453em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\"><span class=\"mord mathrm mtight\">out</span></span></span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-381",
                    type: "text",
                    body: "and "
                  },
                  {
                    id: "inlineMath-147",
                    type: "inlineMath",
                    body: "F'_{\\mathrm{in}}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0164em;vertical-align:-0.2645em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-2.4355em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\"><span class=\"mord mathrm mtight\">in</span></span></span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2645em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-382",
                    type: "text",
                    body: ", he therefore assigns"
                  },
                  {
                    id: "text-383",
                    type: "text",
                    body: "the clock on Earth a slower rate than his own clock, just as the twin on Earth assigns"
                  },
                  {
                    id: "text-384",
                    type: "text",
                    body: "the rocket clock a slower rate during each constant-velocity leg. "
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-130",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-92",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-385",
                    type: "text",
                    body: "There is no contradiction between these two statements and the result obtained above."
                  },
                  {
                    id: "text-386",
                    type: "text",
                    body: "The essential point is that a comparison of elapsed times is meaningful only after the"
                  },
                  {
                    id: "text-387",
                    type: "text",
                    body: "events between which those times are measured have been specified. "
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-131",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-93",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-388",
                    type: "text",
                    body: "For example, during the outbound journey we considered the two events"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-132",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-50",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "itemize-4",
                    type: "itemize",
                    items: [
                      {
                        id: "item-7",
                        type: "item",
                        content: [
                          {
                            id: "contentLayoutGroup-133",
                            type: "contentLayoutGroup",
                            children: {
                              id: "layoutInlineGroup-94",
                              type: "layoutInlineGroup",
                              children: [
                                {
                                  id: "inlineMath-148",
                                  type: "inlineMath",
                                  body: "(P_0)",
                                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">P</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span></span></span></span>"
                                },
                                {
                                  id: "text-389",
                                  type: "text",
                                  body: "The rocket leaves Earth."
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
                            id: "contentLayoutGroup-134",
                            type: "contentLayoutGroup",
                            children: {
                              id: "layoutInlineGroup-95",
                              type: "layoutInlineGroup",
                              children: [
                                {
                                  id: "inlineMath-149",
                                  type: "inlineMath",
                                  body: "(P_1)",
                                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">P</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span></span></span></span>"
                                },
                                {
                                  id: "text-390",
                                  type: "text",
                                  body: "The rocket reaches planet "
                                },
                                {
                                  id: "inlineMath-150",
                                  type: "inlineMath",
                                  body: "G",
                                  html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\">G</span></span></span></span>"
                                },
                                {
                                  id: "text-391",
                                  type: "text",
                                  body: "."
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
              id: "contentLayoutGroup-135",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-96",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-392",
                    type: "text",
                    body: "The two twins assign different coordinates to these same physical events, but they"
                  },
                  {
                    id: "text-393",
                    type: "text",
                    body: "agree on their identity. The elapsed times"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-136",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-51",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-18",
                    type: "displayMath",
                    body: "t_1=\\frac{l}{v},\n  \\qquad\n  t_1'=\\frac{1}{\\gamma}\\frac{l}{v},",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7651em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.0574em;vertical-align:-0.686em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3714em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.2519em;vertical-align:-0.8804em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3214em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8804em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3714em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0197em;\">l</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mpunct\">,</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-137",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-97",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-394",
                    type: "text",
                    body: "refer precisely to the interval between "
                  },
                  {
                    id: "inlineMath-151",
                    type: "inlineMath",
                    body: "P_0",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8333em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">P</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-395",
                    type: "text",
                    body: "and "
                  },
                  {
                    id: "inlineMath-152",
                    type: "inlineMath",
                    body: "P_1",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8333em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">P</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-396",
                    type: "text",
                    body: ". "
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-138",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-98",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-397",
                    type: "text",
                    body: "When the twin on the rocket states instead that the clock on Earth runs more slowly,"
                  },
                  {
                    id: "text-398",
                    type: "text",
                    body: "he is comparing two events that both lie on the worldline of the Earth clock. These"
                  },
                  {
                    id: "text-399",
                    type: "text",
                    body: "are not the same two events "
                  },
                  {
                    id: "inlineMath-153",
                    type: "inlineMath",
                    body: "P_0",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8333em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">P</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-400",
                    type: "text",
                    body: "and "
                  },
                  {
                    id: "inlineMath-154",
                    type: "inlineMath",
                    body: "P_1",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8333em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">P</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-401",
                    type: "text",
                    body: ", since "
                  },
                  {
                    id: "inlineMath-155",
                    type: "inlineMath",
                    body: "P_1",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8333em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">P</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-402",
                    type: "text",
                    body: "occurs at planet "
                  },
                  {
                    id: "inlineMath-156",
                    type: "inlineMath",
                    body: "G",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\">G</span></span></span></span>"
                  },
                  {
                    id: "text-403",
                    type: "text",
                    body: "and not"
                  },
                  {
                    id: "text-404",
                    type: "text",
                    body: "on Earth. The reciprocal time-dilation statement therefore refers to a different pair"
                  },
                  {
                    id: "text-405",
                    type: "text",
                    body: "of events from the pair used to compute the duration of the rocket's outbound journey."
                  },
                  {
                    id: "text-406",
                    type: "text",
                    body: "The same reasoning applies during the inbound leg in "
                  },
                  {
                    id: "inlineMath-157",
                    type: "inlineMath",
                    body: "F'_{\\mathrm{in}}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0164em;vertical-align:-0.2645em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-2.4355em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\"><span class=\"mord mathrm mtight\">in</span></span></span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2645em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-407",
                    type: "text",
                    body: ", where the"
                  },
                  {
                    id: "text-408",
                    type: "text",
                    body: "reciprocal clock-rate statement again compares a different pair of events on the Earth"
                  },
                  {
                    id: "text-409",
                    type: "text",
                    body: "clock's worldline. "
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-139",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-99",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-410",
                    type: "text",
                    body: "This distinction is fundamental in relativity. An event is a definite physical"
                  },
                  {
                    id: "text-411",
                    type: "text",
                    body: "occurrence, while its space and time coordinates depend on the reference frame used"
                  },
                  {
                    id: "text-412",
                    type: "text",
                    body: "to describe it. Statements about elapsed times, distances, or simultaneity must"
                  },
                  {
                    id: "text-413",
                    type: "text",
                    body: "therefore always specify which events are being compared. In particular, the total"
                  },
                  {
                    id: "text-414",
                    type: "text",
                    body: "elapsed times "
                  },
                  {
                    id: "inlineMath-158",
                    type: "inlineMath",
                    body: "T",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span></span></span></span>"
                  },
                  {
                    id: "text-415",
                    type: "text",
                    body: "and "
                  },
                  {
                    id: "inlineMath-159",
                    type: "inlineMath",
                    body: "T'",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-416",
                    type: "text",
                    body: "compare the readings accumulated by the two clocks between"
                  },
                  {
                    id: "text-417",
                    type: "text",
                    body: "the same departure event "
                  },
                  {
                    id: "inlineMath-160",
                    type: "inlineMath",
                    body: "(P_0)",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">P</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-418",
                    type: "text",
                    body: "and reunion event "
                  },
                  {
                    id: "inlineMath-161",
                    type: "inlineMath",
                    body: "(P_2)",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">P</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-419",
                    type: "text",
                    body: ". The reciprocal clock-rate"
                  },
                  {
                    id: "text-420",
                    type: "text",
                    body: "statements made during the two cruise legs compare different pairs of events and do not"
                  },
                  {
                    id: "text-421",
                    type: "text",
                    body: "contradict this common-event comparison. During the finite turnaround interval, the"
                  },
                  {
                    id: "text-422",
                    type: "text",
                    body: "rocket's comoving frame changes continuously in a way that depends on its velocity"
                  },
                  {
                    id: "text-423",
                    type: "text",
                    body: "profile, but no detailed description of that interval is required for the elapsed-time"
                  },
                  {
                    id: "text-424",
                    type: "text",
                    body: "calculation made here. Once the events are kept fixed, the apparent contradiction"
                  },
                  {
                    id: "text-425",
                    type: "text",
                    body: "disappears."
                  }
                ]
              }
            }
          ],
          numbering: {
            path: [
              2,
              4,
              0
            ]
          }
        }
      ],
      numbering: {
        path: [
          2,
          0,
          0
        ]
      }
    }
  ]
} as const satisfies LatexNodeMap["latexDocument"];
