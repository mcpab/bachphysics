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
                body: "The preceding essay "
              },
              {
                id: "href-1",
                type: "href",
                href: "/physics/relativity/special-relativity/lorentz-transformations",
                label: {
                  id: "layoutInlineGroup-3",
                  type: "layoutInlineGroup",
                  children: [
                    {
                      id: "text-3",
                      type: "text",
                      body: "Lorentz Transformations"
                    }
                  ]
                }
              },
              {
                id: "text-4",
                type: "text",
                body: "derives the transformation between two inertial reference frames "
              },
              {
                id: "inlineMath-1",
                type: "inlineMath",
                body: "F",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span></span></span></span>"
              },
              {
                id: "text-5",
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
                id: "text-6",
                type: "text",
                body: ", where "
              },
              {
                id: "inlineMath-3",
                type: "inlineMath",
                body: "F'",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
              },
              {
                id: "text-7",
                type: "text",
                body: "moves"
              },
              {
                id: "text-8",
                type: "text",
                body: "with velocity "
              },
              {
                id: "inlineMath-4",
                type: "inlineMath",
                body: "\\vb{v}=v\\vb{e}_1",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
              },
              {
                id: "text-9",
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
                id: "text-10",
                type: "text",
                body: ". For the derivation below, we need the Lorentz"
              },
              {
                id: "text-11",
                type: "text",
                body: "transformation written explicitly in terms of this relative velocity:"
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
                id: "equation-1",
                type: "equation",
                body: "\\boldsymbol{\\Lambda}(\\vb{v})\n  =\n    \\frac{\\gamma}{v^2}\\ket{\\vb{v},0}\\bra{\\vb{v},0}\n    - \\frac{\\gamma}{c}\\ket{\\vb{v},0}\\bra{\\vb{0},1}\n    + \\ket{\\vb{e}_2,0}\\bra{\\vb{e}_2,0}\n    + \\ket{\\vb{e}_3,0}\\bra{\\vb{e}_3,0}\n    - \\frac{\\gamma}{c}\\ket{\\vb{0},1}\\bra{\\vb{v},0}\n    + \\gamma\\ket{\\vb{0},1}\\bra{\\vb{0},1},",
                label: "eq:Lorentz_transformation_in_velocity_form",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.7936em;vertical-align:-0.6468em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1468em;\"><span style=\"top:-3.1468em;\"><span class=\"pstrut\" style=\"height:3.1076em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Λ</span></span></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">c</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">c</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mpunct\">,</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.6468em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
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
                id: "text-12",
                type: "text",
                body: "where"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-4",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-2",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-1",
                type: "displayMath",
                body: "\\gamma\n  =\n  \\frac{1}{\\sqrt{1-\\dfrac{v^2}{c^2}}}.",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:3.6514em;vertical-align:-2.33em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3214em;\"><span style=\"top:-2.11em;\"><span class=\"pstrut\" style=\"height:3.6876em;\"></span><span class=\"mord\"><span class=\"mord sqrt\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.6876em;\"><span class=\"svg-align\" style=\"top:-4.4em;\"><span class=\"pstrut\" style=\"height:4.4em;\"></span><span class=\"mord\" style=\"padding-left:1em;\"><span class=\"mord\">1</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4911em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span></span></span><span style=\"top:-3.6476em;\"><span class=\"pstrut\" style=\"height:4.4em;\"></span><span class=\"hide-tail\" style=\"min-width:1.02em;height:2.48em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400em\" height=\"2.48em\" viewBox=\"0 0 400000 2592\" preserveAspectRatio=\"xMinYMin slice\"><path d=\"M424,2478\nc-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514\nc0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20\ns-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121\ns209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081\nl0 -0c4,-6.7,10,-10,18,-10 H400000\nv40H1014.6\ns-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185\nc-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2z M1001 80\nh400000v40h-400000z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7524em;\"><span></span></span></span></span></span></span></span><span style=\"top:-3.9176em;\"><span class=\"pstrut\" style=\"height:3.6876em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-4.3646em;\"><span class=\"pstrut\" style=\"height:3.6876em;\"></span><span class=\"mord\"><span class=\"mord\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.33em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\">.</span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-5",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-5",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-13",
                type: "text",
                body: "The time-coordinate component of this transformation is"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-6",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-3",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "equation-2",
                type: "equation",
                body: "ct'\n  =\n  \\gamma\\!\\left(\n    -\\frac{v}{c}\\ip{\\vb{e}_1}{\\vb{x}} + ct\n  \\right).",
                label: "eq:Lorentz_time_coordinate",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.836em;vertical-align:-0.668em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.168em;\"><span style=\"top:-3.168em;\"><span class=\"pstrut\" style=\"height:3.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:-0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size2\">(</span></span><span class=\"mord\">−</span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">c</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mopen\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"mclose\">⟩</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\">c</span><span class=\"mord mathnormal\">t</span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size2\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">.</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.668em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
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
        id: "layoutInlineGroup-6",
        type: "layoutInlineGroup",
        children: [
          {
            id: "text-14",
            type: "text",
            body: "Derivation of Composition of Velocities"
          }
        ]
      },
      intro: [
        {
          id: "contentLayoutGroup-7",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-7",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-15",
                type: "text",
                body: "In classical mechanics, a velocity "
              },
              {
                id: "inlineMath-6",
                type: "inlineMath",
                body: "\\vb{u}'",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
              },
              {
                id: "text-16",
                type: "text",
                body: "measured in the inertial frame "
              },
              {
                id: "inlineMath-7",
                type: "inlineMath",
                body: "F'",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
              },
              {
                id: "text-17",
                type: "text",
                body: "is measured"
              },
              {
                id: "text-18",
                type: "text",
                body: "in the inertial frame "
              },
              {
                id: "inlineMath-8",
                type: "inlineMath",
                body: "F",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span></span></span></span>"
              },
              {
                id: "text-19",
                type: "text",
                body: "as"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-8",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-4",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-2",
                type: "displayMath",
                body: "\\vb{u} = \\vb{v} + \\vb{u}',",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.9963em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mpunct\">,</span></span></span></span></span>"
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
                id: "text-20",
                type: "text",
                body: "which is the familiar Galilean law of velocity addition. In relativity, however, velocities"
              },
              {
                id: "text-21",
                type: "text",
                body: "must be composed according to the Lorentz transformation, with the Galilean law recovered"
              },
              {
                id: "text-22",
                type: "text",
                body: "in the limit in which the relevant velocities are much smaller than the speed of light."
              },
              {
                id: "text-23",
                type: "text",
                body: "We consider the inertial reference frames "
              },
              {
                id: "inlineMath-9",
                type: "inlineMath",
                body: "F",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span></span></span></span>"
              },
              {
                id: "text-24",
                type: "text",
                body: "and "
              },
              {
                id: "inlineMath-10",
                type: "inlineMath",
                body: "F'",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
              },
              {
                id: "text-25",
                type: "text",
                body: "defined in the introduction and the"
              },
              {
                id: "text-26",
                type: "text",
                body: "general motion of a body in "
              },
              {
                id: "inlineMath-11",
                type: "inlineMath",
                body: "F'",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
              },
              {
                id: "text-27",
                type: "text",
                body: "described by the spacetime trajectory"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-10",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-5",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-3",
                type: "displayMath",
                body: "\\ket{\\vb{x}',0} + ct'\\ket{\\vb{0},1},",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0519em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0519em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">c</span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mpunct\">,</span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-11",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-9",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-28",
                type: "text",
                body: "where we assume that "
              },
              {
                id: "inlineMath-12",
                type: "inlineMath",
                body: "\\vb{x}' = \\vb{x}'(t')",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0019em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mclose\">)</span></span></span></span>"
              },
              {
                id: "text-29",
                type: "text",
                body: ". The motion of the body observed in "
              },
              {
                id: "inlineMath-13",
                type: "inlineMath",
                body: "F",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span></span></span></span>"
              },
              {
                id: "text-30",
                type: "text",
                body: "is"
              },
              {
                id: "text-31",
                type: "text",
                body: "related to the motion observed in "
              },
              {
                id: "inlineMath-14",
                type: "inlineMath",
                body: "F'",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
              },
              {
                id: "text-32",
                type: "text",
                body: "through the Lorentz transformation"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-12",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-6",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-4",
                type: "displayMath",
                body: "\\boldsymbol{\\Lambda}(\\vb{v})\n  \\left(\n    \\ket{\\vb{x},0} + ct\\ket{\\vb{0},1}\n  \\right)\n  =\n  \\ket{\\vb{x}',0} + ct'\\ket{\\vb{0},1},",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Λ</span></span></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">(</span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\">c</span><span class=\"mord mathnormal\">t</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0519em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0519em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">c</span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mpunct\">,</span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-13",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-10",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-33",
                type: "text",
                body: "where "
              },
              {
                id: "inlineMath-15",
                type: "inlineMath",
                body: "\\boldsymbol{\\Lambda}(\\vb{v})",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Λ</span></span></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mclose\">)</span></span></span></span>"
              },
              {
                id: "text-34",
                type: "text",
                body: "is given by"
              },
              {
                id: "eqref-1",
                type: "eqref",
                body: "eq:Lorentz_transformation_in_velocity_form"
              },
              {
                id: "text-35",
                type: "text",
                body: "and "
              },
              {
                id: "inlineMath-16",
                type: "inlineMath",
                body: "\\vb{x}=\\vb{x}(t)",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span></span></span></span>"
              },
              {
                id: "text-36",
                type: "text",
                body: "."
              },
              {
                id: "text-37",
                type: "text",
                body: "Differentiating the spacetime trajectory with respect to the"
              },
              {
                id: "text-38",
                type: "text",
                body: "time "
              },
              {
                id: "inlineMath-17",
                type: "inlineMath",
                body: "t",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6151em;\"></span><span class=\"mord mathnormal\">t</span></span></span></span>"
              },
              {
                id: "text-39",
                type: "text",
                body: "measured in "
              },
              {
                id: "inlineMath-18",
                type: "inlineMath",
                body: "F",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span></span></span></span>"
              },
              {
                id: "text-40",
                type: "text",
                body: "yields"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-14",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-7",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-5",
                type: "displayMath",
                body: "\\boldsymbol{\\Lambda}(\\vb{v})\\,\n  \\frac{d}{dt}\n  \\left(\n    \\ket{\\vb{x},0} + ct\\ket{\\vb{0},1}\n  \\right)\n  =\n  \\frac{d}{dt}\n  \\left(\n    \\ket{\\vb{x}',0} + ct'\\ket{\\vb{0},1}\n  \\right).",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.0574em;vertical-align:-0.686em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Λ</span></span></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3714em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">(</span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\">c</span><span class=\"mord mathnormal\">t</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.0574em;vertical-align:-0.686em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3714em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">(</span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\">c</span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">)</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">.</span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-15",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-11",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-41",
                type: "text",
                body: "Differentiating the time-coordinate transformation"
              },
              {
                id: "eqref-2",
                type: "eqref",
                body: "eq:Lorentz_time_coordinate"
              },
              {
                id: "text-42",
                type: "text",
                body: ", we obtain"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-16",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-8",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "equation-3",
                type: "equation",
                body: "\\frac{dt'}{dt}\n  =\n  \\gamma\\!\\left(\n    1-\\frac{\\ip{\\vb{v}}{\\vb{u}}}{c^2}\n  \\right).",
                label: "eq:time_derivative_velocity_composition",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.4em;vertical-align:-0.95em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.45em;\"><span style=\"top:-3.45em;\"><span class=\"pstrut\" style=\"height:3.45em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:-0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">(</span></span><span class=\"mord\">1</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.427em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"mclose\">⟩</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">.</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.95em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-17",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-12",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-43",
                type: "text",
                body: "Since"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-18",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-9",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-6",
                type: "displayMath",
                body: "\\frac{d\\vb{x}'}{dt}\n  =\n  \\frac{d\\vb{x}'}{dt'}\\frac{dt'}{dt}\n  =\n  \\vb{u}'\\frac{dt'}{dt},",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.1149em;vertical-align:-0.686em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.1149em;vertical-align:-0.686em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.6779em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">x</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.1149em;vertical-align:-0.686em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mpunct\">,</span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-19",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-13",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-44",
                type: "text",
                body: "the differentiated Lorentz transformation becomes"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-20",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-10",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-7",
                type: "displayMath",
                body: "\\boldsymbol{\\Lambda}(\\vb{v})\n  \\bigl(\n    \\ket{\\vb{u},0}+c\\ket{\\vb{0},1}\n  \\bigr)\n  =\n  \\gamma\\!\\left(\n    1-\\frac{\\ip{\\vb{v}}{\\vb{u}}}{c^2}\n  \\right)\n  \\bigl(\n    \\ket{\\vb{u}',0}+c\\ket{\\vb{0},1}\n  \\bigr).",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Λ</span></span></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mclose\">)</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord mathnormal\">c</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.4em;vertical-align:-0.95em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:-0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">(</span></span><span class=\"mord\">1</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.427em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"mclose\">⟩</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord mathnormal\">c</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mord\">.</span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-21",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-14",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-45",
                type: "text",
                body: "Substituting "
              },
              {
                id: "eqref-3",
                type: "eqref",
                body: "eq:Lorentz_transformation_in_velocity_form"
              },
              {
                id: "text-46",
                type: "text",
                body: ", we obtain"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-22",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-11",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-8",
                type: "displayMath",
                body: "\\begin{aligned}\n    &\\gamma\\!\\left(\n      \\frac{\\ip{\\vb{v}}{\\vb{u}}}{v^2} - 1\n    \\right)\\ket{\\vb{v},0}\n    + \\ket{\\vb{e}_2,0}\\ip{\\vb{e}_2}{\\vb{u}}\n    + \\ket{\\vb{e}_3,0}\\ip{\\vb{e}_3}{\\vb{u}}\n    + \\ket{\\vb{0},1}\\,\n      \\gamma c\\!\\left(\n        1 - \\frac{\\ip{\\vb{v}}{\\vb{u}}}{c^2}\n      \\right)\n    \\\\\n    &=\n    \\gamma\\!\\left(\n      1 - \\frac{\\ip{\\vb{v}}{\\vb{u}}}{c^2}\n    \\right)\n    \\bigl(\n      \\ket{\\vb{u}',0}+c\\ket{\\vb{0},1}\n    \\bigr).\n  \\end{aligned}",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:5.1001em;vertical-align:-2.3em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-r\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.8em;\"><span style=\"top:-4.8em;\"><span class=\"pstrut\" style=\"height:3.45em;\"></span><span class=\"mord\"></span></span><span style=\"top:-2.1em;\"><span class=\"pstrut\" style=\"height:3.45em;\"></span><span class=\"mord\"></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.3em;\"><span></span></span></span></span></span><span class=\"col-align-l\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.8em;\"><span style=\"top:-4.8em;\"><span class=\"pstrut\" style=\"height:3.45em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:-0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">(</span></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.427em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"mclose\">⟩</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"mclose\">⟩</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"mclose\">⟩</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mord mathnormal\">c</span><span class=\"mspace\" style=\"margin-right:-0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">(</span></span><span class=\"mord\">1</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.427em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"mclose\">⟩</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">)</span></span></span></span></span><span style=\"top:-2.1em;\"><span class=\"pstrut\" style=\"height:3.45em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:-0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">(</span></span><span class=\"mord\">1</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.427em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"mclose\">⟩</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\">c</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">0</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mord\">.</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.3em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-23",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-15",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-47",
                type: "text",
                body: "The time components on both sides are identical and therefore cancel, leaving"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-24",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-12",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-9",
                type: "displayMath",
                body: "\\gamma\\!\\left(\n    \\frac{\\ip{\\vb{v}}{\\vb{u}}}{v^2} - 1\n  \\right)\\ket{\\vb{v},0}\n  + \\ket{\\vb{e}_2,0}\\ip{\\vb{e}_2}{\\vb{u}}\n  + \\ket{\\vb{e}_3,0}\\ip{\\vb{e}_3}{\\vb{u}}\n  =\n  \\gamma\\!\\left(\n    1 - \\frac{\\ip{\\vb{v}}{\\vb{u}}}{c^2}\n  \\right)\\ket{\\vb{u}',0}.",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.4em;vertical-align:-0.95em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:-0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">(</span></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.427em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"mclose\">⟩</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\">1</span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"mclose\">⟩</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"mclose\">⟩</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.4em;vertical-align:-0.95em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:-0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">(</span></span><span class=\"mord\">1</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.427em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"mclose\">⟩</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">.</span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-25",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-16",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-48",
                type: "text",
                body: "Using the decomposition"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-26",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-13",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-10",
                type: "displayMath",
                body: "\\ket{\\vb{u},0}\n  =\n  \\frac{\\ip{\\vb{v}}{\\vb{u}}}{v^2}\\ket{\\vb{v},0}\n  +\n  \\ket{\\vb{e}_2,0}\\ip{\\vb{e}_2}{\\vb{u}}\n  +\n  \\ket{\\vb{e}_3,0}\\ip{\\vb{e}_3}{\\vb{u}},",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.113em;vertical-align:-0.686em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.427em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"mclose\">⟩</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"mclose\">⟩</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"mclose\">⟩</span><span class=\"mpunct\">,</span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-27",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-17",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-49",
                type: "text",
                body: "the previous equation can be written more compactly as"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-28",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-14",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-11",
                type: "displayMath",
                body: "\\gamma\\,\n  \\frac{\\ip{\\vb{v}}{\\vb{u}}}{v^2}\\ket{\\vb{v},0}\n  -\n  \\gamma\\ket{\\vb{v},0}\n  -\n  \\frac{\\ip{\\vb{v}}{\\vb{u}}}{v^2}\\ket{\\vb{v},0}\n  +\n  \\ket{\\vb{u},0}\n  =\n  \\gamma\\!\\left(\n    1 - \\frac{\\ip{\\vb{v}}{\\vb{u}}}{c^2}\n  \\right)\\ket{\\vb{u}',0},",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.113em;vertical-align:-0.686em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.427em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"mclose\">⟩</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.113em;vertical-align:-0.686em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.427em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"mclose\">⟩</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.4em;vertical-align:-0.95em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:-0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">(</span></span><span class=\"mord\">1</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.427em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"mclose\">⟩</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mpunct\">,</span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-29",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-18",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-50",
                type: "text",
                body: "or"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-30",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-15",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "equation-4",
                type: "equation",
                body: "(\\gamma - 1)\n  \\frac{\\ip{\\vb{v}}{\\vb{u}}}{v^2}\\ket{\\vb{v},0}\n  -\n  \\gamma\\ket{\\vb{v},0}\n  +\n  \\ket{\\vb{u},0}\n  =\n  \\gamma\\!\\left(\n    1 - \\frac{\\ip{\\vb{v}}{\\vb{u}}}{c^2}\n  \\right)\\ket{\\vb{u}',0}.",
                label: "eq:velocities_relationship",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.4em;vertical-align:-0.95em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.45em;\"><span style=\"top:-3.45em;\"><span class=\"pstrut\" style=\"height:3.45em;\"></span><span class=\"mord\"><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\">1</span><span class=\"mclose\">)</span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.427em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"mclose\">⟩</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:-0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">(</span></span><span class=\"mord\">1</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.427em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"mclose\">⟩</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">.</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.95em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-31",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-19",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-51",
                type: "text",
                body: "Solving for "
              },
              {
                id: "inlineMath-19",
                type: "inlineMath",
                body: "\\ket{\\vb{u}',0}",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0019em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span></span></span></span>"
              },
              {
                id: "text-52",
                type: "text",
                body: "gives"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-32",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-16",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "equation-5",
                type: "equation",
                body: "\\ket{\\vb{u}',0}\n  =\n  \\frac{1}{\n    \\displaystyle\n    1 - \\frac{\\ip{\\vb{v}}{\\vb{u}}}{c^2}\n  }\n  \\left(\n    \\frac{\\gamma-1}{\\gamma}\\,\n    \\frac{\\ip{\\vb{v}}{\\vb{u}}}{v^2}\\ket{\\vb{v},0}\n    -\n    \\ket{\\vb{v},0}\n    +\n    \\frac{\\ket{\\vb{u},0}}{\\gamma}\n  \\right).",
                label: "eq:inverse_velocity_composition",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:3.453em;vertical-align:-1.4765em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.9765em;\"><span style=\"top:-3.9765em;\"><span class=\"pstrut\" style=\"height:3.45em;\"></span><span class=\"mord\"><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3214em;\"><span style=\"top:-2.11em;\"><span class=\"pstrut\" style=\"height:3.427em;\"></span><span class=\"mord\"><span class=\"mord\">1</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.427em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"mclose\">⟩</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span></span></span><span style=\"top:-3.657em;\"><span class=\"pstrut\" style=\"height:3.427em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-4.104em;\"><span class=\"pstrut\" style=\"height:3.427em;\"></span><span class=\"mord\"><span class=\"mord\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.003em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">(</span></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3214em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8804em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.427em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"mclose\">⟩</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.427em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8804em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">.</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4765em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-33",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-20",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-53",
                type: "text",
                body: "The velocity "
              },
              {
                id: "inlineMath-20",
                type: "inlineMath",
                body: "\\ket{\\vb{u}}",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span></span></span></span>"
              },
              {
                id: "text-54",
                type: "text",
                body: "can be easily expressed in terms of the velocity "
              },
              {
                id: "inlineMath-21",
                type: "inlineMath",
                body: "\\ket{\\vb{u}'}",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0019em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span></span></span></span>"
              },
              {
                id: "text-55",
                type: "text",
                body: "by exchanging the roles of "
              },
              {
                id: "inlineMath-22",
                type: "inlineMath",
                body: "\\ket{\\vb{u}}",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span></span></span></span>"
              },
              {
                id: "text-56",
                type: "text",
                body: "and "
              },
              {
                id: "inlineMath-23",
                type: "inlineMath",
                body: "\\ket{\\vb{u}'}",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0019em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span></span></span></span>"
              },
              {
                id: "text-57",
                type: "text",
                body: "in the equation above, and"
              },
              {
                id: "text-58",
                type: "text",
                body: "changing the sign of the relative velocity "
              },
              {
                id: "inlineMath-24",
                type: "inlineMath",
                body: "\\vb{v}",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span></span></span></span>"
              },
              {
                id: "text-59",
                type: "text",
                body: "."
              },
              {
                id: "text-60",
                type: "text",
                body: "As an exercise, we derive the same result by directly inverting"
              },
              {
                id: "eqref-4",
                type: "eqref",
                body: "eq:velocities_relationship"
              },
              {
                id: "text-61",
                type: "text",
                body: "."
              },
              {
                id: "text-62",
                type: "text",
                body: "We start by factoring the velocity "
              },
              {
                id: "inlineMath-25",
                type: "inlineMath",
                body: "\\ket{\\vb{u}}",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span></span></span></span>"
              },
              {
                id: "text-63",
                type: "text",
                body: "in "
              },
              {
                id: "eqref-5",
                type: "eqref",
                body: "eq:velocities_relationship"
              },
              {
                id: "text-64",
                type: "text",
                body: "and express the equation as an operator on the velocity "
              },
              {
                id: "inlineMath-26",
                type: "inlineMath",
                body: "\\ket{\\vb{u}}",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span></span></span></span>"
              },
              {
                id: "text-65",
                type: "text",
                body: ":"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-34",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-17",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-12",
                type: "displayMath",
                body: "\\left(\n    \\frac{\\gamma}{v^2}\\ket{\\vb{v}}\\bra{\\vb{v}}\n    + \\ket{\\vb{e}_2,0}\\bra{\\vb{e}_2,0}\n    + \\ket{\\vb{e}_3,0}\\bra{\\vb{e}_3,0}\n    + \\frac{\\gamma}{c^2}\\ket{\\vb{u}'}\\bra{\\vb{v}}\n  \\right)\\ket{\\vb{u}}\n  =\n  \\gamma\\bigl(\\ket{\\vb{u}'} + \\ket{\\vb{v}}\\bigr).",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.836em;vertical-align:-0.686em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size2\">(</span></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size2\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2em;vertical-align:-0.35em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mord\">.</span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-35",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-21",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-66",
                type: "text",
                body: "Expressing "
              },
              {
                id: "inlineMath-27",
                type: "inlineMath",
                body: "\\ket{\\vb{u}'}",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0019em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span></span></span></span>"
              },
              {
                id: "text-67",
                type: "text",
                body: "in the basis "
              },
              {
                id: "inlineMath-28",
                type: "inlineMath",
                body: "\\{\\vb{e}_1,\\vb{e}_2,\\vb{e}_3\\}",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">{</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mclose\">}</span></span></span></span>"
              },
              {
                id: "text-68",
                type: "text",
                body: ", the operator becomes"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-36",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-18",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-13",
                type: "displayMath",
                body: "\\begin{aligned}\n    \\Bigl(\n      &\\gamma\\!\\left(1 + \\frac{v}{c^2}u'_1\\right)\n        \\ket{\\vb{e}_1,0}\\bra{\\vb{e}_1,0}\n      + \\gamma\\,\\frac{v}{c^2}u'_2\\,\n        \\ket{\\vb{e}_2,0}\\bra{\\vb{e}_1,0}\n      + \\gamma\\,\\frac{v}{c^2}u'_3\\,\n        \\ket{\\vb{e}_3,0}\\bra{\\vb{e}_1,0}\n      \\\\\n      &+ \\ket{\\vb{e}_2,0}\\bra{\\vb{e}_2,0}\n      + \\ket{\\vb{e}_3,0}\\bra{\\vb{e}_3,0}\n    \\Bigr)\\cdot\\ket{\\vb{u},0}\n    =\n    \\gamma\\bigl(\\ket{\\vb{u}'} + \\ket{\\vb{v}}\\bigr).\n  \\end{aligned}",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:3.936em;vertical-align:-1.718em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-r\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.218em;\"><span style=\"top:-4.218em;\"><span class=\"pstrut\" style=\"height:3.15em;\"></span><span class=\"mord\"><span class=\"mopen\"><span class=\"delimsizing size2\">(</span></span></span></span><span style=\"top:-2.082em;\"><span class=\"pstrut\" style=\"height:3.15em;\"></span><span class=\"mord\"></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.718em;\"><span></span></span></span></span></span><span class=\"col-align-l\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.218em;\"><span style=\"top:-4.218em;\"><span class=\"pstrut\" style=\"height:3.15em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:-0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size2\">(</span></span><span class=\"mord\">1</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\"><span class=\"mord mathnormal\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size2\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\"><span class=\"mord mathnormal\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\"><span class=\"mord mathnormal\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span></span></span><span style=\"top:-2.082em;\"><span class=\"pstrut\" style=\"height:3.15em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mclose\"><span class=\"delimsizing size2\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">⋅</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mord\">.</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.718em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-37",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-22",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-69",
                type: "text",
                body: "The operator"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-38",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-19",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-14",
                type: "displayMath",
                body: "\\gamma\\!\\left(1 + \\frac{v}{c^2}u'_1\\right)\n  \\ket{\\vb{e}_1,0}\\bra{\\vb{e}_1,0}\n  + \\gamma\\,\\frac{v}{c^2}u'_2\\,\n    \\ket{\\vb{e}_2,0}\\bra{\\vb{e}_1,0}\n  + \\gamma\\,\\frac{v}{c^2}u'_3\\,\n    \\ket{\\vb{e}_3,0}\\bra{\\vb{e}_1,0}\n  + \\ket{\\vb{e}_2,0}\\bra{\\vb{e}_2,0}\n  + \\ket{\\vb{e}_3,0}\\bra{\\vb{e}_3,0}",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.836em;vertical-align:-0.686em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:-0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size2\">(</span></span><span class=\"mord\">1</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\"><span class=\"mord mathnormal\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size2\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.7936em;vertical-align:-0.686em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\"><span class=\"mord mathnormal\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.7936em;vertical-align:-0.686em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\"><span class=\"mord mathnormal\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-39",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-23",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-70",
                type: "text",
                body: "has the inverse"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-40",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-20",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-15",
                type: "displayMath",
                body: "\\begin{aligned}\n    &\\frac{1}{\n      \\displaystyle\n      \\gamma\\!\\left(1 + \\frac{v}{c^2}u'_1\\right)}\n      \\ket{\\vb{e}_1,0}\\bra{\\vb{e}_1,0}\n    - \\frac{v}{c^2}\n      \\frac{u'_2}{\n        \\displaystyle\n        1 + \\frac{v}{c^2}u'_1}\n      \\ket{\\vb{e}_2,0}\\bra{\\vb{e}_1,0}\n    \\\\\n    &- \\frac{v}{c^2}\n      \\frac{u'_3}{\n        \\displaystyle\n        1 + \\frac{v}{c^2}u'_1}\n      \\ket{\\vb{e}_3,0}\\bra{\\vb{e}_1,0}\n    + \\ket{\\vb{e}_2,0}\\bra{\\vb{e}_2,0}\n    + \\ket{\\vb{e}_3,0}\\bra{\\vb{e}_3,0}.\n  \\end{aligned}",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:6.5673em;vertical-align:-3.0337em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-r\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:3.5337em;\"><span style=\"top:-5.5337em;\"><span class=\"pstrut\" style=\"height:3.4289em;\"></span><span class=\"mord\"></span></span><span style=\"top:-2.0788em;\"><span class=\"pstrut\" style=\"height:3.4289em;\"></span><span class=\"mord\"></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:3.0337em;\"><span></span></span></span></span></span><span class=\"col-align-l\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:3.5337em;\"><span style=\"top:-5.5337em;\"><span class=\"pstrut\" style=\"height:3.4289em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3214em;\"><span style=\"top:-2.11em;\"><span class=\"pstrut\" style=\"height:3.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:-0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size2\">(</span></span><span class=\"mord\">1</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\"><span class=\"mord mathnormal\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size2\">)</span></span></span></span></span><span style=\"top:-3.38em;\"><span class=\"pstrut\" style=\"height:3.15em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.827em;\"><span class=\"pstrut\" style=\"height:3.15em;\"></span><span class=\"mord\"><span class=\"mord\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.726em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.11em;\"><span class=\"pstrut\" style=\"height:3.1076em;\"></span><span class=\"mord\"><span class=\"mord\">1</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\"><span class=\"mord mathnormal\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-3.3376em;\"><span class=\"pstrut\" style=\"height:3.1076em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.7846em;\"><span class=\"pstrut\" style=\"height:3.1076em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-2.4519em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2481em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.6836em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span></span></span><span style=\"top:-2.0788em;\"><span class=\"pstrut\" style=\"height:3.4289em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.11em;\"><span class=\"pstrut\" style=\"height:3.1076em;\"></span><span class=\"mord\"><span class=\"mord\">1</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\"><span class=\"mord mathnormal\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-3.3376em;\"><span class=\"pstrut\" style=\"height:3.1076em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.7846em;\"><span class=\"pstrut\" style=\"height:3.1076em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-2.4519em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2481em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.6836em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">.</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:3.0337em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-41",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-24",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-71",
                type: "text",
                body: "We can express the velocity "
              },
              {
                id: "inlineMath-29",
                type: "inlineMath",
                body: "\\ket{\\vb{u}}",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span></span></span></span>"
              },
              {
                id: "text-72",
                type: "text",
                body: "as"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-42",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-21",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-16",
                type: "displayMath",
                body: "\\begin{aligned}\n    \\ket{\\vb{u},0} =\\;\n    &\\left(\n      \\frac{1}{\n        \\displaystyle\n        \\gamma\\!\\left(1 + \\frac{v}{c^2}u'_1\\right)}\n        \\ket{\\vb{e}_1,0}\\bra{\\vb{e}_1,0}\n      - \\frac{v}{c^2}\n        \\frac{u'_2}{\n          \\displaystyle\n          1 + \\frac{v}{c^2}u'_1}\n        \\ket{\\vb{e}_2,0}\\bra{\\vb{e}_1,0}\n      \\right.\n      \\\\\n    &\\left.\n      - \\frac{v}{c^2}\n        \\frac{u'_3}{\n          \\displaystyle\n          1 + \\frac{v}{c^2}u'_1}\n        \\ket{\\vb{e}_3,0}\\bra{\\vb{e}_1,0}\n      + \\ket{\\vb{e}_2,0}\\bra{\\vb{e}_2,0}\n      + \\ket{\\vb{e}_3,0}\\bra{\\vb{e}_3,0}\n    \\right)\n    \\\\[0.4em]\n    &\\cdot\\left(\n      v\\gamma\\ket{\\vb{e}_1,0}\n      + \\gamma\\ket{\\vb{u}'}\n    \\right),\n  \\end{aligned}",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:9.3095em;vertical-align:-4.4048em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-r\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:4.9048em;\"><span style=\"top:-6.9048em;\"><span class=\"pstrut\" style=\"height:4.05em;\"></span><span class=\"mord\"><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span></span><span style=\"top:-2.8288em;\"><span class=\"pstrut\" style=\"height:4.05em;\"></span><span class=\"mord\"></span></span><span style=\"top:-0.0052em;\"><span class=\"pstrut\" style=\"height:4.05em;\"></span><span class=\"mord\"></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:4.4048em;\"><span></span></span></span></span></span><span class=\"col-align-l\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:4.9048em;\"><span style=\"top:-6.9048em;\"><span class=\"pstrut\" style=\"height:4.05em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen\"><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.05em;\"><span class=\"pstrut\" style=\"height:5.6em;\"></span><span style=\"width:0.875em;height:3.6em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.875em\" height=\"3.6em\" viewBox=\"0 0 875 3600\"><path d=\"M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1\nc-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,\n-36,557 l0,84c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,\n949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9\nc0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,\n-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189\nl0,-92c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,\n-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3214em;\"><span style=\"top:-2.11em;\"><span class=\"pstrut\" style=\"height:3.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:-0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size2\">(</span></span><span class=\"mord\">1</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\"><span class=\"mord mathnormal\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size2\">)</span></span></span></span></span><span style=\"top:-3.38em;\"><span class=\"pstrut\" style=\"height:3.15em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.827em;\"><span class=\"pstrut\" style=\"height:3.15em;\"></span><span class=\"mord\"><span class=\"mord\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.726em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.11em;\"><span class=\"pstrut\" style=\"height:3.1076em;\"></span><span class=\"mord\"><span class=\"mord\">1</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\"><span class=\"mord mathnormal\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-3.3376em;\"><span class=\"pstrut\" style=\"height:3.1076em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.7846em;\"><span class=\"pstrut\" style=\"height:3.1076em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-2.4519em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2481em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.6836em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mclose nulldelimiter\"></span></span></span></span><span style=\"top:-2.8288em;\"><span class=\"pstrut\" style=\"height:4.05em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen nulldelimiter\"></span><span class=\"mord\">−</span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.11em;\"><span class=\"pstrut\" style=\"height:3.1076em;\"></span><span class=\"mord\"><span class=\"mord\">1</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\"><span class=\"mord mathnormal\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-3.3376em;\"><span class=\"pstrut\" style=\"height:3.1076em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.7846em;\"><span class=\"pstrut\" style=\"height:3.1076em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-2.4519em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2481em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.6836em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">∣</span></span><span class=\"mclose\"><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.05em;\"><span class=\"pstrut\" style=\"height:5.6em;\"></span><span style=\"width:0.875em;height:3.6em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.875em\" height=\"3.6em\" viewBox=\"0 0 875 3600\"><path d=\"M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,\n63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5\nc11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,9\nc-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664\nc-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11\nc0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17\nc242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558\nl0,-144c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,\n-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span></span></span></span><span style=\"top:-0.0052em;\"><span class=\"pstrut\" style=\"height:4.05em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">⋅</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">)</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mpunct\">,</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:4.4048em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-43",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-25",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-73",
                type: "text",
                body: "which simplifies to"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-44",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-22",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-17",
                type: "displayMath",
                body: "\\ket{\\vb{u},0}\n  =\n  \\frac{1}{\n    \\displaystyle\n    1 + \\frac{v}{c^2}u'_1}\n  \\left(\n    (v + u'_1)\\ket{\\vb{e}_1,0}\n    + \\sqrt{1 - \\frac{v^2}{c^2}}\\,\n      u'_2\\,\\ket{\\vb{e}_2,0}\n    + \\sqrt{1 - \\frac{v^2}{c^2}}\\,\n      u'_3\\,\\ket{\\vb{e}_3,0}\n  \\right).",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:3.4336em;vertical-align:-1.6836em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3214em;\"><span style=\"top:-2.11em;\"><span class=\"pstrut\" style=\"height:3.1076em;\"></span><span class=\"mord\"><span class=\"mord\">1</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\"><span class=\"mord mathnormal\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-3.3376em;\"><span class=\"pstrut\" style=\"height:3.1076em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.7846em;\"><span class=\"pstrut\" style=\"height:3.1076em;\"></span><span class=\"mord\"><span class=\"mord\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.6836em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size4\">(</span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord sqrt\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.6994em;\"><span class=\"svg-align\" style=\"top:-4.4em;\"><span class=\"pstrut\" style=\"height:4.4em;\"></span><span class=\"mord\" style=\"padding-left:1em;\"><span class=\"mord\">1</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4171em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span></span></span><span style=\"top:-3.6594em;\"><span class=\"pstrut\" style=\"height:4.4em;\"></span><span class=\"hide-tail\" style=\"min-width:1.02em;height:2.48em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400em\" height=\"2.48em\" viewBox=\"0 0 400000 2592\" preserveAspectRatio=\"xMinYMin slice\"><path d=\"M424,2478\nc-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514\nc0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20\ns-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121\ns209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081\nl0 -0c4,-6.7,10,-10,18,-10 H400000\nv40H1014.6\ns-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185\nc-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2z M1001 80\nh400000v40h-400000z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7406em;\"><span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord sqrt\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.6994em;\"><span class=\"svg-align\" style=\"top:-4.4em;\"><span class=\"pstrut\" style=\"height:4.4em;\"></span><span class=\"mord\" style=\"padding-left:1em;\"><span class=\"mord\">1</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4171em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span></span></span><span style=\"top:-3.6594em;\"><span class=\"pstrut\" style=\"height:4.4em;\"></span><span class=\"hide-tail\" style=\"min-width:1.02em;height:2.48em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400em\" height=\"2.48em\" viewBox=\"0 0 400000 2592\" preserveAspectRatio=\"xMinYMin slice\"><path d=\"M424,2478\nc-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514\nc0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20\ns-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121\ns209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081\nl0 -0c4,-6.7,10,-10,18,-10 H400000\nv40H1014.6\ns-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185\nc-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2z M1001 80\nh400000v40h-400000z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7406em;\"><span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">u</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3011em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">0</span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size4\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">.</span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-45",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-26",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-74",
                type: "text",
                body: "Suppressing the zero time component in the notation, we can write the previous equation"
              },
              {
                id: "text-75",
                type: "text",
                body: "in the more compact vector form"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-46",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-23",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "equation-6",
                type: "equation",
                body: "\\ket{\\vb{u}}\n  =\n  \\frac{1}{\n    \\displaystyle\n    1 + \\frac{\\ip{\\vb{v}}{\\vb{u}'}}{c^2}}\n  \\left(\n    \\frac{\\gamma - 1}{\\gamma}\\,\n    \\frac{\\ip{\\vb{u}'}{\\vb{v}}}{v^2}\\ket{\\vb{v}}\n    + \\ket{\\vb{v}}\n    + \\frac{\\ket{\\vb{u}'}}{\\gamma}\n  \\right).",
                label: "eq:velocity_composition",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:3.4549em;vertical-align:-1.4774em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.9774em;\"><span style=\"top:-3.9774em;\"><span class=\"pstrut\" style=\"height:3.45em;\"></span><span class=\"mord\"><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3214em;\"><span style=\"top:-2.11em;\"><span class=\"pstrut\" style=\"height:3.4289em;\"></span><span class=\"mord\"><span class=\"mord\">1</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mclose\">⟩</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span></span></span><span style=\"top:-3.6589em;\"><span class=\"pstrut\" style=\"height:3.4289em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-4.1059em;\"><span class=\"pstrut\" style=\"height:3.4289em;\"></span><span class=\"mord\"><span class=\"mord\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.0049em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">(</span></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3214em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8804em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mopen\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mclose\">⟩</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8804em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">.</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4774em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-47",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-27",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-76",
                type: "text",
                body: "As a final remark, we should note two important cases. First, from"
              },
              {
                id: "text-77",
                type: "text",
                body: "equation "
              },
              {
                id: "eqref-6",
                type: "eqref",
                body: "eq:velocity_composition"
              },
              {
                id: "text-78",
                type: "text",
                body: ", we notice that the velocity of any"
              },
              {
                id: "text-79",
                type: "text",
                body: "object at rest in "
              },
              {
                id: "inlineMath-30",
                type: "inlineMath",
                body: "F'",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
              },
              {
                id: "text-80",
                type: "text",
                body: "is observed in "
              },
              {
                id: "inlineMath-31",
                type: "inlineMath",
                body: "F",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span></span></span></span>"
              },
              {
                id: "text-81",
                type: "text",
                body: "to move with velocity "
              },
              {
                id: "inlineMath-32",
                type: "inlineMath",
                body: "\\ket{\\vb{v}}",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span></span></span></span>"
              },
              {
                id: "text-82",
                type: "text",
                body: ","
              },
              {
                id: "text-83",
                type: "text",
                body: "as expected. Conversely, any object at rest in "
              },
              {
                id: "inlineMath-33",
                type: "inlineMath",
                body: "F",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span></span></span></span>"
              },
              {
                id: "text-84",
                type: "text",
                body: "is observed in "
              },
              {
                id: "inlineMath-34",
                type: "inlineMath",
                body: "F'",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
              },
              {
                id: "text-85",
                type: "text",
                body: "to move"
              },
              {
                id: "text-86",
                type: "text",
                body: "with velocity "
              },
              {
                id: "inlineMath-35",
                type: "inlineMath",
                body: "-\\ket{\\vb{v}}",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\">−</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span></span></span></span>"
              },
              {
                id: "text-87",
                type: "text",
                body: ", as follows from"
              },
              {
                id: "text-88",
                type: "text",
                body: "equation "
              },
              {
                id: "eqref-7",
                type: "eqref",
                body: "eq:inverse_velocity_composition"
              },
              {
                id: "text-89",
                type: "text",
                body: "."
              },
              {
                id: "text-90",
                type: "text",
                body: "The important point is that, although the velocity vector changes sign when the roles of"
              },
              {
                id: "text-91",
                type: "text",
                body: "the two inertial frames are exchanged, the magnitude of their relative velocity does not."
              },
              {
                id: "text-92",
                type: "text",
                body: "If "
              },
              {
                id: "inlineMath-36",
                type: "inlineMath",
                body: "F'",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
              },
              {
                id: "text-93",
                type: "text",
                body: "moves with velocity "
              },
              {
                id: "inlineMath-37",
                type: "inlineMath",
                body: "\\vb{v}",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span></span></span></span>"
              },
              {
                id: "text-94",
                type: "text",
                body: "relative to "
              },
              {
                id: "inlineMath-38",
                type: "inlineMath",
                body: "F",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span></span></span></span>"
              },
              {
                id: "text-95",
                type: "text",
                body: ", then "
              },
              {
                id: "inlineMath-39",
                type: "inlineMath",
                body: "F",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span></span></span></span>"
              },
              {
                id: "text-96",
                type: "text",
                body: "moves with velocity "
              },
              {
                id: "inlineMath-40",
                type: "inlineMath",
                body: "-\\vb{v}",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord\">−</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span></span></span></span>"
              },
              {
                id: "text-97",
                type: "text",
                body: "relative to "
              },
              {
                id: "inlineMath-41",
                type: "inlineMath",
                body: "F'",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
              },
              {
                id: "text-98",
                type: "text",
                body: ","
              },
              {
                id: "text-99",
                type: "text",
                body: "and therefore both frames assign the same relative speed "
              },
              {
                id: "inlineMath-42",
                type: "inlineMath",
                body: "v",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span></span></span></span>"
              },
              {
                id: "text-100",
                type: "text",
                body: "to their motion. Consequently, they also"
              },
              {
                id: "text-101",
                type: "text",
                body: "associate the same Lorentz factor "
              },
              {
                id: "inlineMath-43",
                type: "inlineMath",
                body: "\\gamma(v)",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"mclose\">)</span></span></span></span>"
              },
              {
                id: "text-102",
                type: "text",
                body: "with their relative motion. This reciprocity will play an"
              },
              {
                id: "text-103",
                type: "text",
                body: "important role in the discussion of the twin paradox."
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
        id: "layoutInlineGroup-28",
        type: "layoutInlineGroup",
        children: [
          {
            id: "text-104",
            type: "text",
            body: "Limiting Cases"
          }
        ]
      },
      intro: [
        {
          id: "contentLayoutGroup-48",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-29",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-105",
                type: "text",
                body: "In this section we derive the limiting formulas for the composition of velocities when one"
              },
              {
                id: "text-106",
                type: "text",
                body: "of the relevant velocities approaches the speed of light."
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
            id: "layoutInlineGroup-30",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-107",
                type: "text",
                body: "A Particle Moving at the Speed of Light in "
              },
              {
                id: "inlineMath-44",
                type: "inlineMath",
                body: "F",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span></span></span></span>"
              }
            ]
          },
          content: [
            {
              id: "contentLayoutGroup-49",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-31",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-108",
                    type: "text",
                    body: "We start by considering the case where "
                  },
                  {
                    id: "inlineMath-45",
                    type: "inlineMath",
                    body: "\\ket{\\vb{u}}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span></span></span></span>"
                  },
                  {
                    id: "text-109",
                    type: "text",
                    body: "approaches the speed of light"
                  },
                  {
                    id: "inlineMath-46",
                    type: "inlineMath",
                    body: "c",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">c</span></span></span></span>"
                  },
                  {
                    id: "text-110",
                    type: "text",
                    body: "and determine the value that "
                  },
                  {
                    id: "inlineMath-47",
                    type: "inlineMath",
                    body: "\\ket{\\vb{u}'}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0019em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span></span></span></span>"
                  },
                  {
                    id: "text-111",
                    type: "text",
                    body: "reaches. To achieve this, we compute"
                  },
                  {
                    id: "text-112",
                    type: "text",
                    body: "the square modulus of "
                  },
                  {
                    id: "inlineMath-48",
                    type: "inlineMath",
                    body: "\\ket{\\vb{u}'}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0019em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span></span></span></span>"
                  },
                  {
                    id: "text-113",
                    type: "text",
                    body: "from "
                  },
                  {
                    id: "eqref-8",
                    type: "eqref",
                    body: "eq:inverse_velocity_composition"
                  },
                  {
                    id: "text-114",
                    type: "text",
                    body: ","
                  },
                  {
                    id: "text-115",
                    type: "text",
                    body: "which reads"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-50",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-24",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-18",
                    type: "displayMath",
                    body: "u'^2\n  =\n  \\frac{1}{\n    \\displaystyle\n    \\left(\n      1 - \\frac{\\ip{\\vb{v}}{\\vb{u}}}{c^2}\n    \\right)^2\n  }\n  \\left(\n    \\frac{\\ip{\\vb{u}}{\\vb{v}}^2}{c^2}\n    + v^2\n    + \\frac{u^2}{\\gamma^2}\n    - 2\\ip{\\vb{u}}{\\vb{v}}\n  \\right).",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8641em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">u</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′2</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:3.9851em;vertical-align:-2.494em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3214em;\"><span style=\"top:-2.11em;\"><span class=\"pstrut\" style=\"height:3.654em;\"></span><span class=\"mord\"><span class=\"minner\"><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">(</span></span><span class=\"mord\">1</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.427em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"mclose\">⟩</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">)</span></span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.654em;\"><span style=\"top:-3.9029em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.884em;\"><span class=\"pstrut\" style=\"height:3.654em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-4.331em;\"><span class=\"pstrut\" style=\"height:3.654em;\"></span><span class=\"mord\"><span class=\"mord\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.494em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">(</span></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4911em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mclose\"><span class=\"mclose\">⟩</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4911em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">u</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8804em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\">2</span><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mclose\">⟩</span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">.</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-51",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-32",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-116",
                    type: "text",
                    body: "When "
                  },
                  {
                    id: "inlineMath-49",
                    type: "inlineMath",
                    body: "\\ket{\\vb{u}} = c\\ket{\\vb{n}}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">c</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span></span></span></span>"
                  },
                  {
                    id: "text-117",
                    type: "text",
                    body: ", where "
                  },
                  {
                    id: "inlineMath-50",
                    type: "inlineMath",
                    body: "\\ket{\\vb{n}}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span></span></span></span>"
                  },
                  {
                    id: "text-118",
                    type: "text",
                    body: "is a unit vector, the equation"
                  },
                  {
                    id: "text-119",
                    type: "text",
                    body: "above simplifies to"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-52",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-25",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-19",
                    type: "displayMath",
                    body: "u'^2\n  =\n  \\frac{c^2}{\n    \\displaystyle\n    \\left(\n      1 - \\frac{\\ip{\\vb{v}}{\\vb{n}}}{c}\n    \\right)^2\n  }\n  \\left(\n    1 - \\frac{\\ip{\\vb{v}}{\\vb{n}}}{c}\n  \\right)^2\n  =\n  c^2,",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8641em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">u</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′2</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:4.148em;vertical-align:-2.494em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4911em;\"><span style=\"top:-2.11em;\"><span class=\"pstrut\" style=\"height:3.654em;\"></span><span class=\"mord\"><span class=\"minner\"><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">(</span></span><span class=\"mord\">1</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.427em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">c</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mclose\">⟩</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">)</span></span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.654em;\"><span style=\"top:-3.9029em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.884em;\"><span class=\"pstrut\" style=\"height:3.654em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-4.331em;\"><span class=\"pstrut\" style=\"height:3.654em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.494em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">(</span></span><span class=\"mord\">1</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.427em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">c</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mclose\">⟩</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">)</span></span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.654em;\"><span style=\"top:-3.9029em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0585em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mpunct\">,</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-53",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-33",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-120",
                    type: "text",
                    body: "which implies that the velocity "
                  },
                  {
                    id: "inlineMath-51",
                    type: "inlineMath",
                    body: "\\ket{\\vb{u}'}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0019em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span></span></span></span>"
                  },
                  {
                    id: "text-121",
                    type: "text",
                    body: "reaches the speed of light when"
                  },
                  {
                    id: "inlineMath-52",
                    type: "inlineMath",
                    body: "\\ket{\\vb{u}}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span></span></span></span>"
                  },
                  {
                    id: "text-122",
                    type: "text",
                    body: "approaches the speed of light."
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
            id: "layoutInlineGroup-34",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-123",
                type: "text",
                body: "A Particle Moving at the Speed of Light in "
              },
              {
                id: "inlineMath-53",
                type: "inlineMath",
                body: "F'",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
              }
            ]
          },
          content: [
            {
              id: "contentLayoutGroup-54",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-35",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-124",
                    type: "text",
                    body: "Similarly, we can determine the limit of the velocity "
                  },
                  {
                    id: "inlineMath-54",
                    type: "inlineMath",
                    body: "\\ket{\\vb{u}}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span></span></span></span>"
                  },
                  {
                    id: "text-125",
                    type: "text",
                    body: "when the velocity"
                  },
                  {
                    id: "inlineMath-55",
                    type: "inlineMath",
                    body: "\\ket{\\vb{u}'}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0019em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span></span></span></span>"
                  },
                  {
                    id: "text-126",
                    type: "text",
                    body: "approaches the speed of light. From the velocity composition formula"
                  },
                  {
                    id: "eqref-9",
                    type: "eqref",
                    body: "eq:velocity_composition"
                  },
                  {
                    id: "text-127",
                    type: "text",
                    body: ", the modulus of the velocity "
                  },
                  {
                    id: "inlineMath-56",
                    type: "inlineMath",
                    body: "\\ket{\\vb{u}}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span></span></span></span>"
                  },
                  {
                    id: "text-128",
                    type: "text",
                    body: "reads"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-55",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-26",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-20",
                    type: "displayMath",
                    body: "u^2\n  =\n  \\frac{1}{\n    \\displaystyle\n    \\left(\n      1 + \\frac{\\ip{\\vb{v}}{\\vb{u}'}}{c^2}\n    \\right)^2\n  }\n  \\left(\n    \\frac{\\ip{\\vb{u}'}{\\vb{v}}^2}{c^2}\n    + v^2\n    + \\frac{u'^2}{\\gamma^2}\n    + 2\\ip{\\vb{u}'}{\\vb{v}}\n  \\right).",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8641em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">u</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:3.9851em;vertical-align:-2.494em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3214em;\"><span style=\"top:-2.11em;\"><span class=\"pstrut\" style=\"height:3.654em;\"></span><span class=\"mord\"><span class=\"minner\"><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">(</span></span><span class=\"mord\">1</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mclose\">⟩</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">)</span></span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.654em;\"><span style=\"top:-3.9029em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.884em;\"><span class=\"pstrut\" style=\"height:3.654em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-4.331em;\"><span class=\"pstrut\" style=\"height:3.654em;\"></span><span class=\"mord\"><span class=\"mord\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.494em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">(</span></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4911em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mopen\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mclose\"><span class=\"mclose\">⟩</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4911em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0556em;\">γ</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">u</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′2</span></span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8804em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\">2</span><span class=\"mopen\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mclose\">⟩</span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">.</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-56",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-36",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-129",
                    type: "text",
                    body: "This differs from the previous expression only by the replacement"
                  },
                  {
                    id: "inlineMath-57",
                    type: "inlineMath",
                    body: "\\vb{v}\\rightarrow-\\vb{v}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">→</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord\">−</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span></span></span></span>"
                  },
                  {
                    id: "text-130",
                    type: "text",
                    body: ". When "
                  },
                  {
                    id: "inlineMath-58",
                    type: "inlineMath",
                    body: "\\ket{\\vb{u}'} = c\\ket{\\vb{n}}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0019em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">c</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span></span></span></span>"
                  },
                  {
                    id: "text-131",
                    type: "text",
                    body: ", where"
                  },
                  {
                    id: "inlineMath-59",
                    type: "inlineMath",
                    body: "\\ket{\\vb{n}}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span></span></span></span>"
                  },
                  {
                    id: "text-132",
                    type: "text",
                    body: "is a unit vector, the equation above simplifies to"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-57",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-27",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-21",
                    type: "displayMath",
                    body: "u^2\n  =\n  \\frac{c^2}{\n    \\displaystyle\n    \\left(\n      1 + \\frac{\\ip{\\vb{v}}{\\vb{n}}}{c}\n    \\right)^2\n  }\n  \\left(\n    1 + \\frac{\\ip{\\vb{v}}{\\vb{n}}}{c}\n  \\right)^2\n  =\n  c^2,",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8641em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">u</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:4.148em;vertical-align:-2.494em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4911em;\"><span style=\"top:-2.11em;\"><span class=\"pstrut\" style=\"height:3.654em;\"></span><span class=\"mord\"><span class=\"minner\"><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">(</span></span><span class=\"mord\">1</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.427em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">c</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mclose\">⟩</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">)</span></span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.654em;\"><span style=\"top:-3.9029em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.884em;\"><span class=\"pstrut\" style=\"height:3.654em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-4.331em;\"><span class=\"pstrut\" style=\"height:3.654em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.494em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">(</span></span><span class=\"mord\">1</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.427em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">c</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mclose\">⟩</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">)</span></span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.654em;\"><span style=\"top:-3.9029em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0585em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mpunct\">,</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-58",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-37",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-133",
                    type: "text",
                    body: "which, also in this case, means that the velocity "
                  },
                  {
                    id: "inlineMath-60",
                    type: "inlineMath",
                    body: "\\ket{\\vb{u}}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span></span></span></span>"
                  },
                  {
                    id: "text-134",
                    type: "text",
                    body: "reaches the speed of light"
                  },
                  {
                    id: "text-135",
                    type: "text",
                    body: "when "
                  },
                  {
                    id: "inlineMath-61",
                    type: "inlineMath",
                    body: "\\ket{\\vb{u}'}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0019em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span></span></span></span>"
                  },
                  {
                    id: "text-136",
                    type: "text",
                    body: "approaches the speed of light."
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
        },
        {
          id: "subsection-3",
          type: "subsection",
          title: {
            id: "layoutInlineGroup-38",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-137",
                type: "text",
                body: "Relative Motion Approaching the Speed of Light"
              }
            ]
          },
          content: [
            {
              id: "contentLayoutGroup-59",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-39",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-138",
                    type: "text",
                    body: "Finally, consider the limit in which the magnitude of the relative velocity approaches the"
                  },
                  {
                    id: "text-139",
                    type: "text",
                    body: "speed of light,"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-60",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-28",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-22",
                    type: "displayMath",
                    body: "\\ket{\\vb{v}} \\longrightarrow c\\ket{\\vb{n}},",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">⟶</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">c</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mpunct\">,</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-61",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-40",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-140",
                    type: "text",
                    body: "where "
                  },
                  {
                    id: "inlineMath-62",
                    type: "inlineMath",
                    body: "\\ket{\\vb{n}}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span></span></span></span>"
                  },
                  {
                    id: "text-141",
                    type: "text",
                    body: "is a unit vector. In this limit, the modulus of the velocity"
                  },
                  {
                    id: "inlineMath-63",
                    type: "inlineMath",
                    body: "\\ket{\\vb{u}}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span></span></span></span>"
                  },
                  {
                    id: "text-142",
                    type: "text",
                    body: "becomes"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-62",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-29",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-23",
                    type: "displayMath",
                    body: "u^2\n  \\longrightarrow\n  \\frac{c^2}{\n    \\displaystyle\n    \\left(\n      1 + \\frac{\\ip{\\vb{u}'}{\\vb{n}}}{c}\n    \\right)^2\n  }\n  \\left(\n    1 + \\frac{\\ip{\\vb{u}'}{\\vb{n}}}{c}\n  \\right)^2\n  =\n  c^2,",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8751em;vertical-align:-0.011em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">u</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">⟶</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:4.148em;vertical-align:-2.494em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4911em;\"><span style=\"top:-2.11em;\"><span class=\"pstrut\" style=\"height:3.654em;\"></span><span class=\"mord\"><span class=\"minner\"><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">(</span></span><span class=\"mord\">1</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">c</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mopen\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mclose\">⟩</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">)</span></span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.654em;\"><span style=\"top:-3.9029em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.884em;\"><span class=\"pstrut\" style=\"height:3.654em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-4.331em;\"><span class=\"pstrut\" style=\"height:3.654em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.494em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">(</span></span><span class=\"mord\">1</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">c</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mopen\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">n</span></span><span class=\"mclose\">⟩</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">)</span></span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.654em;\"><span style=\"top:-3.9029em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0585em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">c</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mpunct\">,</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-63",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-41",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-143",
                    type: "text",
                    body: "independently of the value of "
                  },
                  {
                    id: "inlineMath-64",
                    type: "inlineMath",
                    body: "\\ket{\\vb{u}'}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0019em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">∣</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">⟩</span></span></span></span></span>"
                  },
                  {
                    id: "text-144",
                    type: "text",
                    body: "."
                  }
                ]
              }
            }
          ],
          numbering: {
            path: [
              3,
              3,
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
    }
  ]
} as const satisfies LatexNodeMap["latexDocument"];
