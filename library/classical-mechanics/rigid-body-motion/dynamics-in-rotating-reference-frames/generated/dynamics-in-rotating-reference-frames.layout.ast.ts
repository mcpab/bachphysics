import type { LatexNodeMap } from "../../../../../../../packages/mcpab-katek/src/latex/ParsedNode.ts";

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
                body: "This essay develops the dynamics of particles as observed in a rotating reference frame."
              },
              {
                id: "text-3",
                type: "text",
                body: "We begin by recalling the kinematical relations required"
              },
              {
                id: "text-4",
                type: "text",
                body: "to compare time derivatives in inertial and rotating frames, then derive the transformation"
              },
              {
                id: "text-5",
                type: "text",
                body: "of the acceleration and the inertial forces that arise from it."
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
            id: "layoutInlineGroup-3",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-6",
                type: "text",
                body: "Kinematical Preliminaries"
              }
            ]
          },
          content: [
            {
              id: "contentLayoutGroup-2",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-4",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-7",
                    type: "text",
                    body: "Let "
                  },
                  {
                    id: "inlineMath-1",
                    type: "inlineMath",
                    body: "\\vb{A}(t)",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span></span></span></span>"
                  },
                  {
                    id: "text-8",
                    type: "text",
                    body: "be the orthogonal matrix that maps the components of a vector in the inertial"
                  },
                  {
                    id: "text-9",
                    type: "text",
                    body: "frame to its components in the rotating frame:"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-3",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-1",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "equation-1",
                    type: "equation",
                    body: "\\vb{g}'(t) = \\vb{A}(t)\\,\\vb{g}(t),\n  \\qquad\n  \\vb{g}(t) = \\vb{A}^{\\top}(t)\\,\\vb{g}'(t).",
                    label: "rotating-frames:frame-transformation",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.2851em;vertical-align:-0.3926em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8926em;\"><span style=\"top:-2.9674em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9251em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3926em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-4",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-5",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-10",
                    type: "text",
                    body: "The angular velocity vector is defined as the time derivative of the infinitesimal rotation vector,"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-5",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-2",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "equation-2",
                    type: "equation",
                    body: "\\boldsymbol{\\omega} = \\lim_{\\Delta t\\to0}\\frac{d\\boldsymbol{\\Omega}}{\\Delta t}.",
                    label: "rotating-frames:angular-velocity-definition",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.1158em;vertical-align:-0.8079em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3079em;\"><span style=\"top:-3.3079em;\"><span class=\"pstrut\" style=\"height:3.3714em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mop op-limits\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.6944em;\"><span style=\"top:-2.3557em;margin-left:0em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">Δ</span><span class=\"mord mathnormal mtight\">t</span><span class=\"mrel mtight\">→</span><span class=\"mord mtight\">0</span></span></span></span><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span><span class=\"mop\">lim</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7443em;\"><span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3714em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">Δ</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathbf\">Ω</span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\">.</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8079em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-6",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-6",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-11",
                    type: "text",
                    body: "The corresponding transformation law for time derivatives is"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-7",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-3",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "equation-3",
                    type: "equation",
                    body: "\\frac{d\\vb{g}}{dt}\n  = \\vb{A}^{\\top}(t)\\!\\left(\n      \\boldsymbol{\\omega}\\times\\vb{g}' + \\frac{d\\vb{g}'}{dt}\n    \\right).",
                    label: "rotating-frames:time-derivative-rule",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.4em;vertical-align:-0.95em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.45em;\"><span style=\"top:-3.45em;\"><span class=\"pstrut\" style=\"height:3.45em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3714em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord text\"><span class=\"mord textbf\">g</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9251em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:-0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">(</span></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">.</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.95em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-8",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-7",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-12",
                    type: "text",
                    body: "These equations summarize all the results from rigid-body kinematics required in the remainder of this essay."
                  }
                ]
              }
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
      title: {
        id: "layoutInlineGroup-8",
        type: "layoutInlineGroup",
        children: [
          {
            id: "text-13",
            type: "text",
            body: "Equations of Motion in a Rotating Frame"
          }
        ]
      },
      intro: [
        {
          id: "contentLayoutGroup-9",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-9",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-14",
                type: "text",
                body: "In this section we derive the equations of motion of a particle as observed in a rotating frame of reference"
              },
              {
                id: "text-15",
                type: "text",
                body: "with respect to an inertial one.We restrict our discussion to the case of constant angular velocity. The resulting equations"
              },
              {
                id: "text-16",
                type: "text",
                body: "introduce the Coriolis and centrifugal forces that arise in a rotating frame."
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-10",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-10",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-17",
                type: "text",
                body: "We begin with the transformation law for time derivatives, Eq. "
              },
              {
                id: "eqref-1",
                type: "eqref",
                body: "rotating-frames:time-derivative-rule"
              },
              {
                id: "text-18",
                type: "text",
                body: "."
              },
              {
                id: "text-19",
                type: "text",
                body: "Differentiating once more gives the second derivative of the position vector in the inertial frame,"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-11",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-4",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-1",
                type: "displayMath",
                body: "\\frac{d^2\\vb{r}(t)}{dt^2} =\n    \\frac{d\\vb{A}^\\top}{dt}\\!\\left(\\boldsymbol{\\omega}\\times\\vb{r}' + \\frac{d\\vb{r}'}{dt}\\right)\n    + \\vb{A}^\\top\\!\\left(\\boldsymbol{\\omega}\\times\\frac{d\\vb{r}'}{dt} + \\frac{d^2\\vb{r}'}{dt^2}\\right)",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.1771em;vertical-align:-0.686em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4911em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.5521em;vertical-align:-0.95em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.6021em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9251em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:-0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">(</span></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.4411em;vertical-align:-0.95em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9251em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:-0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">(</span></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4911em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">)</span></span></span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-12",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-11",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-20",
                type: "text",
                body: "From the orthogonality of the rotation matrix, "
              },
              {
                id: "inlineMath-2",
                type: "inlineMath",
                body: "\\vb{A}^\\top\\vb{A} = \\vb{I}",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.9251em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9251em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6861em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">I</span></span></span></span></span>"
              },
              {
                id: "text-21",
                type: "text",
                body: ":"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-13",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-5",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-2",
                type: "displayMath",
                body: "\\frac{d\\vb{A}^\\top}{dt}\\,\\vb{A} + \\vb{A}\\,\\frac{d\\vb{A}^\\top}{dt} = 0",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.2881em;vertical-align:-0.686em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.6021em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9251em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.2881em;vertical-align:-0.686em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.6021em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9251em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">0</span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-14",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-12",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-22",
                type: "text",
                body: "we obtain:"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-15",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-6",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-3",
                type: "displayMath",
                body: "\\frac{d\\vb{A}^\\top}{dt} = -\\vb{A}^\\top\\frac{d\\vb{A}}{dt}\\,\\vb{A}^\\top",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.2881em;vertical-align:-0.686em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.6021em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9251em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.0574em;vertical-align:-0.686em;\"></span><span class=\"mord\">−</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9251em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3714em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9251em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-16",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-13",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-23",
                type: "text",
                body: "Inserting this expression in the equation above, and using the invariance of the cross product under proper orthogonal transformations,,"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-17",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-7",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-4",
                type: "displayMath",
                body: "\\begin{aligned}\n    \\frac{d^2\\vb{r}(t)}{dt^2}\n    &= -\\vb{A}^\\top\\frac{d\\vb{A}}{dt}\\,\\vb{A}^\\top\n       \\!\\left(\\boldsymbol{\\omega}\\times\\vb{r}' + \\frac{d\\vb{r}'}{dt}\\right)\n       + \\vb{A}^\\top\\!\\left(\\boldsymbol{\\omega}\\times\\frac{d\\vb{r}'}{dt} + \\frac{d^2\\vb{r}'}{dt^2}\\right) \\\\\n    &= -\\vb{A}^\\top\\frac{d\\vb{A}}{dt}\n       \\!\\left(\\vb{A}^\\top\\boldsymbol{\\omega}\\times\\vb{A}^\\top\\vb{r}'\n         + \\vb{A}^\\top\\frac{d\\vb{r}'}{dt}\\right)\n       + \\vb{A}^\\top\\!\\left(\\boldsymbol{\\omega}\\times\\frac{d\\vb{r}'}{dt} + \\frac{d^2\\vb{r}'}{dt^2}\\right) \\\\\n    &= -\\vb{A}^\\top\\!\\left(\\vb{A}\\!\\left(\\vb{A}^\\top\\boldsymbol{\\omega}\\times\\vb{A}^\\top\\vb{r}'\n         + \\vb{A}^\\top\\frac{d\\vb{r}'}{dt}\\right)\\right)\\times\\boldsymbol{\\omega}\n       + \\vb{A}^\\top\\!\\left(\\boldsymbol{\\omega}\\times\\frac{d\\vb{r}'}{dt} + \\frac{d^2\\vb{r}'}{dt^2}\\right) \\\\\n    &= -\\vb{A}^\\top\\!\\left(\\boldsymbol{\\omega}\\times\\vb{r}' + \\frac{d\\vb{r}'}{dt}\\right)\\times\\boldsymbol{\\omega}\n       + \\vb{A}^\\top\\!\\left(\\boldsymbol{\\omega}\\times\\frac{d\\vb{r}'}{dt} + \\frac{d^2\\vb{r}'}{dt^2}\\right)\n  \\end{aligned}",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:10.6646em;vertical-align:-5.0823em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-r\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:5.5823em;\"><span style=\"top:-7.5823em;\"><span class=\"pstrut\" style=\"height:3.4911em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4911em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span></span></span><span style=\"top:-4.8411em;\"><span class=\"pstrut\" style=\"height:3.4911em;\"></span><span class=\"mord\"></span></span><span style=\"top:-2.1em;\"><span class=\"pstrut\" style=\"height:3.4911em;\"></span><span class=\"mord\"></span></span><span style=\"top:0.6411em;\"><span class=\"pstrut\" style=\"height:3.4911em;\"></span><span class=\"mord\"></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:5.0823em;\"><span></span></span></span></span></span><span class=\"col-align-l\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:5.5823em;\"><span style=\"top:-7.5823em;\"><span class=\"pstrut\" style=\"height:3.4911em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\">−</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9251em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3714em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9251em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:-0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">(</span></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9251em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:-0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">(</span></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4911em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">)</span></span></span></span></span><span style=\"top:-4.8411em;\"><span class=\"pstrut\" style=\"height:3.4911em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\">−</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9251em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3714em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:-0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">(</span></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9251em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9251em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9251em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9251em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:-0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">(</span></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4911em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">)</span></span></span></span></span><span style=\"top:-2.1em;\"><span class=\"pstrut\" style=\"height:3.4911em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\">−</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9251em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:-0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">(</span></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mspace\" style=\"margin-right:-0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">(</span></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9251em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9251em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9251em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">)</span></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9251em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:-0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">(</span></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4911em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">)</span></span></span></span></span><span style=\"top:0.6411em;\"><span class=\"pstrut\" style=\"height:3.4911em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\">−</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9251em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:-0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">(</span></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9251em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">⊤</span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:-0.1667em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">(</span></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4911em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">)</span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:5.0823em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-18",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-14",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-24",
                type: "text",
                body: "we arrive at the equation:"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-19",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-8",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-5",
                type: "displayMath",
                body: "\\vb{A}\\,\\frac{d^2\\vb{r}(t)}{dt^2} =\n    \\boldsymbol{\\omega}\\times(\\boldsymbol{\\omega}\\times\\vb{r}')\n    + 2\\boldsymbol{\\omega}\\times\\frac{d\\vb{r}'}{dt}\n    + \\frac{d^2\\vb{r}'}{dt^2}.",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.1771em;vertical-align:-0.686em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4911em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0519em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7278em;vertical-align:-0.0833em;\"></span><span class=\"mord\">2</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.1149em;vertical-align:-0.686em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.1771em;vertical-align:-0.686em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4911em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord mathnormal\">t</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7401em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\">.</span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-20",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-15",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-25",
                type: "text",
                body: "Introducing the inertial acceleration "
              },
              {
                id: "inlineMath-3",
                type: "inlineMath",
                body: "\\vb{a} = \\frac{d^2\\vb{r}(t)}{dt^2}",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">a</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.4539em;vertical-align:-0.345em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1089em;\"><span style=\"top:-2.655em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">d</span><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">t</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7463em;\"><span style=\"top:-2.786em;margin-right:0.0714em;\"><span class=\"pstrut\" style=\"height:2.5em;\"></span><span class=\"sizing reset-size3 size1 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.485em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">d</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8913em;\"><span style=\"top:-2.931em;margin-right:0.0714em;\"><span class=\"pstrut\" style=\"height:2.5em;\"></span><span class=\"sizing reset-size3 size1 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mord text mtight\"><span class=\"mord textbf mtight\">r</span></span><span class=\"mopen mtight\">(</span><span class=\"mord mathnormal mtight\">t</span><span class=\"mclose mtight\">)</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.345em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span></span></span></span>"
              },
              {
                id: "text-26",
                type: "text",
                body: ", and"
              },
              {
                id: "text-27",
                type: "text",
                body: "the acceleration measured in the rotating frame as "
              },
              {
                id: "inlineMath-4",
                type: "inlineMath",
                body: "\\vb{a}' = \\frac{d^2\\vb{r}'(t)}{dt^2}",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7519em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">a</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.4539em;vertical-align:-0.345em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1089em;\"><span style=\"top:-2.655em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">d</span><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">t</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7463em;\"><span style=\"top:-2.786em;margin-right:0.0714em;\"><span class=\"pstrut\" style=\"height:2.5em;\"></span><span class=\"sizing reset-size3 size1 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.485em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">d</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8913em;\"><span style=\"top:-2.931em;margin-right:0.0714em;\"><span class=\"pstrut\" style=\"height:2.5em;\"></span><span class=\"sizing reset-size3 size1 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mord mtight\"><span class=\"mord text mtight\"><span class=\"mord textbf mtight\">r</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8278em;\"><span style=\"top:-2.931em;margin-right:0.0714em;\"><span class=\"pstrut\" style=\"height:2.5em;\"></span><span class=\"sizing reset-size3 size1 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mopen mtight\">(</span><span class=\"mord mathnormal mtight\">t</span><span class=\"mclose mtight\">)</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.345em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span></span></span></span>"
              },
              {
                id: "text-28",
                type: "text",
                body: ", we obtain"
              },
              {
                id: "text-29",
                type: "text",
                body: "the acceleration transformation:"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-21",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-9",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "equation-4",
                type: "equation",
                body: "\\vb{a}' = -\\boldsymbol{\\omega}\\times(\\boldsymbol{\\omega}\\times\\vb{r}')\n    - 2\\boldsymbol{\\omega}\\times\\frac{d\\vb{r}'}{dt}\n    + \\vb{A}\\,\\vb{a}",
                label: "rotating-frames:acceleration-transformation",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.1149em;vertical-align:-0.8074em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3074em;\"><span style=\"top:-3.3074em;\"><span class=\"pstrut\" style=\"height:3.4289em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">a</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\">−</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\">2</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">a</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8074em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-22",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-16",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-30",
                type: "text",
                body: "Equation "
              },
              {
                id: "eqref-2",
                type: "eqref",
                body: "rotating-frames:acceleration-transformation"
              },
              {
                id: "text-31",
                type: "text",
                body: "is purely kinematical."
              },
              {
                id: "text-32",
                type: "text",
                body: "No dynamical assumptions have been introduced yet. By applying Newton's second law"
              },
              {
                id: "text-33",
                type: "text",
                body: "to the rotating frame, we identify"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-23",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-10",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-6",
                type: "displayMath",
                body: "\\mathbf F' = m\\mathbf a',",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8019em;\"></span><span class=\"mord\"><span class=\"mord mathbf\">F</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.9963em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\">m</span><span class=\"mord\"><span class=\"mord mathbf\">a</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mpunct\">,</span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-24",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-17",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-34",
                type: "text",
                body: "and Eq. "
              },
              {
                id: "eqref-3",
                type: "eqref",
                body: "rotating-frames:acceleration-transformation"
              },
              {
                id: "text-35",
                type: "text",
                body: "becomes"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-25",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-11",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "equation-5",
                type: "equation",
                body: "\\vb{F}' = -m\\boldsymbol{\\omega}\\times(\\boldsymbol{\\omega}\\times\\vb{r}')\n    - 2 m \\boldsymbol{\\omega}\\times\\frac{d\\vb{r}'}{dt}\n    + m\\vb{A}\\,\\vb{a}",
                label: "rotating-frames:forces-transformation",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.1149em;vertical-align:-0.8074em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3074em;\"><span style=\"top:-3.3074em;\"><span class=\"pstrut\" style=\"height:3.4289em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">F</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8279em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\">−</span><span class=\"mord mathnormal\">m</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\">2</span><span class=\"mord mathnormal\">m</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\">m</span><span class=\"mord text\"><span class=\"mord textbf\">A</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">a</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8074em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-26",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-18",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-36",
                type: "text",
                body: "In this equation there are terms that originate entirely from the kinematics of"
              },
              {
                id: "text-37",
                type: "text",
                body: "the rotating frame. They are interpreted as apparent forces and are responsible"
              },
              {
                id: "text-38",
                type: "text",
                body: "for the distinctive dynamics observed in non-inertial reference frames."
              }
            ]
          }
        }
      ],
      subsections: [
        {
          id: "subsection-2",
          type: "subsection",
          title: {
            id: "layoutInlineGroup-19",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-39",
                type: "text",
                body: "The Centrifugal Force"
              }
            ]
          },
          content: [
            {
              id: "contentLayoutGroup-27",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-20",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-40",
                    type: "text",
                    body: "The centrifugal force is the first term of equation "
                  },
                  {
                    id: "eqref-4",
                    type: "eqref",
                    body: "rotating-frames:forces-transformation"
                  },
                  {
                    id: "text-41",
                    type: "text",
                    body: ","
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-28",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-12",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "equation-6",
                    type: "equation",
                    body: "\\vb{F}_\\text{cf} = -m\\boldsymbol{\\omega}\\times(\\boldsymbol{\\omega}\\times\\vb{r}')\n    = m\\bigl( \\omega^2\\vb{r}'-\\boldsymbol{\\omega}\\ip{\\boldsymbol{\\omega}}{\\vb{r}'} \\bigr)",
                    label: "rotating-frames:centrifugal-force",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.2241em;vertical-align:-0.3621em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8621em;\"><span style=\"top:-2.9979em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">F</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3361em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord text mtight\"><span class=\"mord mtight\">cf</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\">−</span><span class=\"mord mathnormal\">m</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\">m</span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">ω</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mopen\">⟨</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mclose\">⟩</span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3621em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-29",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-21",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-42",
                    type: "text",
                    body: "which has a magnitude proportional to the square of the angular velocity, and is directed perpendicular to"
                  },
                  {
                    id: "text-43",
                    type: "text",
                    body: "the rotation axis and away from it. This force depends only on the angular velocity of the rotating frame"
                  },
                  {
                    id: "text-44",
                    type: "text",
                    body: "and on the position of the body. It is independent of the body's velocity in the rotating frame. "
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-30",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-22",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-45",
                    type: "text",
                    body: "The centrifugal force admits the potential"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-31",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-13",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-7",
                    type: "displayMath",
                    body: "V_\\text{cf}\n  =\n  \\frac{m}{2}\n  \\left(\n    -\\ip{\\vb r'}{\\vb r'}\\,\n    \\ip{\\boldsymbol\\omega}{\\boldsymbol\\omega}\n    +\n    \\ip{\\boldsymbol\\omega}{\\vb r'}^2\n  \\right),",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8333em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3361em;\"><span style=\"top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord text mtight\"><span class=\"mord mtight\">cf</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.7936em;vertical-align:-0.686em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">2</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">m</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord\">−</span><span class=\"mopen\">⟨</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mclose\">⟩</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mclose\">⟩</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mclose\"><span class=\"mclose\">⟩</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size1\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mpunct\">,</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-32",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-23",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-46",
                    type: "text",
                    body: "and it is therefore a conservative force, since"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-33",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-14",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-8",
                    type: "displayMath",
                    body: "\\vb F_\\text{cf}\n  =\n  -\\grad_{\\vb r'} V_\\text{cf}.",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8361em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">F</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3361em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord text mtight\"><span class=\"mord mtight\">cf</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8333em;vertical-align:-0.15em;\"></span><span class=\"mord\">−</span><span class=\"mord\"><span class=\"mord\">∇</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.328em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\"><span class=\"mord text mtight\"><span class=\"mord textbf mtight\">r</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.6828em;\"><span style=\"top:-2.786em;margin-right:0.0714em;\"><span class=\"pstrut\" style=\"height:2.5em;\"></span><span class=\"sizing reset-size3 size1 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3361em;\"><span style=\"top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord text mtight\"><span class=\"mord mtight\">cf</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mord\">.</span></span></span></span></span>"
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
          id: "subsection-3",
          type: "subsection",
          title: {
            id: "layoutInlineGroup-24",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-47",
                type: "text",
                body: "The Coriolis Force"
              }
            ]
          },
          content: [
            {
              id: "contentLayoutGroup-34",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-25",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-48",
                    type: "text",
                    body: "The Coriolis force is the term proportional to the velocity of the body in the"
                  },
                  {
                    id: "text-49",
                    type: "text",
                    body: "rotating frame appearing in equation "
                  },
                  {
                    id: "eqref-5",
                    type: "eqref",
                    body: "rotating-frames:forces-transformation"
                  },
                  {
                    id: "text-50",
                    type: "text",
                    body: ","
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-35",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-15",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "equation-7",
                    type: "equation",
                    body: "{\\vb F}_\\text{cor} = -2m\\boldsymbol{\\omega}\\times\\frac{d\\vb{r}'}{dt}",
                    label: "rotating-frames:coriolis-force",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.1149em;vertical-align:-0.8074em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3074em;\"><span style=\"top:-3.3074em;\"><span class=\"pstrut\" style=\"height:3.4289em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">F</span></span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord text mtight\"><span class=\"mord mtight\">cor</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\">−</span><span class=\"mord\">2</span><span class=\"mord mathnormal\">m</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8074em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-36",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-26",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-51",
                    type: "text",
                    body: "This force arises only from the motion of the body with respect to the rotating"
                  },
                  {
                    id: "text-52",
                    type: "text",
                    body: "frame. Since it is always perpendicular to the velocity, it performs no work on"
                  },
                  {
                    id: "text-53",
                    type: "text",
                    body: "the body. "
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-37",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-27",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-54",
                    type: "text",
                    body: "The Coriolis force has the same mathematical structure as the Lorentz force in"
                  },
                  {
                    id: "text-55",
                    type: "text",
                    body: "electromagnetism. Although it is not conservative, since it depends explicitly on the velocity,"
                  },
                  {
                    id: "text-56",
                    type: "text",
                    body: "it can nevertheless be derived from the generalized potential "
                  },
                  {
                    id: "inlineMath-5",
                    type: "inlineMath",
                    body: "V_\\text{cor}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8333em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord text mtight\"><span class=\"mord mtight\">cor</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-57",
                    type: "text",
                    body: "determined as,"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-38",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-16",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-9",
                    type: "displayMath",
                    body: "V_\\text{cor} = -m\\ip{\\boldsymbol{\\omega}\\times\\vb{r}'}{\\dot{\\vb{r}'}}",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8333em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord text mtight\"><span class=\"mord mtight\">cor</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\">−</span><span class=\"mord mathnormal\">m</span><span class=\"mopen\">⟨</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0519em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.1648em;vertical-align:-0.25em;\"></span><span class=\"mord accent\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9148em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.6779em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.2469em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"accent-body\" style=\"left:-0.1389em;\"><span class=\"mord\">˙</span></span></span></span></span></span></span><span class=\"mclose\">⟩</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-39",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-28",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-58",
                    type: "text",
                    body: "so that the Coriolis force derives from a generalized potential:"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-40",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-17",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-10",
                    type: "displayMath",
                    body: "\\vb{F}_\\text{cor} = \\frac{d}{dt}\\frac{\\partial V_\\text{cor}}{\\partial\\dot{\\vb{r}'}}\n    - \\frac{\\partial V_\\text{cor}}{\\partial\\vb{r}'}",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8361em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">F</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord text mtight\"><span class=\"mord mtight\">cor</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.1762em;vertical-align:-0.8048em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3714em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3714em;\"><span style=\"top:-2.1952em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\" style=\"margin-right:0.0556em;\">∂</span><span class=\"mord accent\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.9148em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.6779em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.2469em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"accent-body\" style=\"left:-0.1389em;\"><span class=\"mord\">˙</span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\" style=\"margin-right:0.0556em;\">∂</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord text mtight\"><span class=\"mord mtight\">cor</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8048em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.0574em;vertical-align:-0.686em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3714em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\" style=\"margin-right:0.0556em;\">∂</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.6779em;\"><span style=\"top:-2.989em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\" style=\"margin-right:0.0556em;\">∂</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord text mtight\"><span class=\"mord mtight\">cor</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-41",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-29",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-59",
                    type: "text",
                    body: "To verify that the generalized potential indeed reproduces the Coriolis force,"
                  },
                  {
                    id: "text-60",
                    type: "text",
                    body: "we use the cyclic permutation identity of the scalar triple product,"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-42",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-18",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-11",
                    type: "displayMath",
                    body: "\\ip{\\vb a\\times\\vb b}{\\vb c}\n  =\n  \\ip{\\vb b\\times\\vb c}{\\vb a}\n  =\n  \\ip{\\vb c\\times\\vb a}{\\vb b},",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">a</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">b</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"mclose\">⟩</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">b</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">a</span></span><span class=\"mclose\">⟩</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">c</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">a</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">b</span></span><span class=\"mclose\">⟩</span><span class=\"mpunct\">,</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-43",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-30",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-61",
                    type: "text",
                    body: "to rewrite the scalar product so that the vector with respect to which the"
                  },
                  {
                    id: "text-62",
                    type: "text",
                    body: "gradient is taken appears directly in the scalar product rather than in the"
                  },
                  {
                    id: "text-63",
                    type: "text",
                    body: "cross product. This allows the required derivatives with respect to"
                  },
                  {
                    id: "inlineMath-6",
                    type: "inlineMath",
                    body: "\\vb r",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">r</span></span></span></span></span>"
                  },
                  {
                    id: "text-64",
                    type: "text",
                    body: "and "
                  },
                  {
                    id: "inlineMath-7",
                    type: "inlineMath",
                    body: "\\dot{\\vb r}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6813em;\"></span><span class=\"mord accent\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.6813em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">r</span></span></span><span style=\"top:-3.0134em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"accent-body\" style=\"left:-0.1389em;\"><span class=\"mord\">˙</span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-65",
                    type: "text",
                    body: "to be computed immediately. "
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-44",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-31",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-66",
                    type: "text",
                    body: "Unlike an ordinary potential, a generalized potential may depend explicitly on"
                  },
                  {
                    id: "text-67",
                    type: "text",
                    body: "both the position and the velocity of the body. Such potentials naturally arise"
                  },
                  {
                    id: "text-68",
                    type: "text",
                    body: "in systems whose forces are linear in the velocity, such as the Coriolis force"
                  },
                  {
                    id: "text-69",
                    type: "text",
                    body: "and the Lorentz force in electromagnetism."
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
          id: "subsection-4",
          type: "subsection",
          title: {
            id: "layoutInlineGroup-32",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-70",
                type: "text",
                body: "Lagrange Equations of Motion in a Rotating Frame"
              }
            ]
          },
          content: [
            {
              id: "contentLayoutGroup-45",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-33",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-71",
                    type: "text",
                    body: "In the remainder of this section, we will denote the time derivative "
                  },
                  {
                    id: "inlineMath-8",
                    type: "inlineMath",
                    body: "da/dt",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">a</span><span class=\"mord\">/</span><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span></span>"
                  },
                  {
                    id: "text-72",
                    type: "text",
                    body: "to"
                  },
                  {
                    id: "inlineMath-9",
                    type: "inlineMath",
                    body: "\\dot{a}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6679em;\"></span><span class=\"mord accent\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.6679em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord mathnormal\">a</span></span><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"accent-body\" style=\"left:-0.1389em;\"><span class=\"mord\">˙</span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-73",
                    type: "text",
                    body: "to simplify the equations. Unless otherwise stated, all vectors will be expressed in the rotating frame,"
                  },
                  {
                    id: "text-74",
                    type: "text",
                    body: "and "
                  },
                  {
                    id: "inlineMath-10",
                    type: "inlineMath",
                    body: "\\vb r",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">r</span></span></span></span></span>"
                  },
                  {
                    id: "text-75",
                    type: "text",
                    body: "will denote the position vector in that frame. In this section"
                  },
                  {
                    id: "text-76",
                    type: "text",
                    body: "we would like to briefly touch on the functional form of the Lagrangian"
                  },
                  {
                    id: "text-77",
                    type: "text",
                    body: "in the rotating frame of a body subject to "
                  },
                  {
                    body: "zero net force  in the inertial frame",
                    id: "textbf-1",
                    type: "textbf"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-46",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-34",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-78",
                    type: "text",
                    body: "The Lagrangian is obtained by adding to the kinetic energy all potential contributions, including generalized potentials when present."
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-47",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-19",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-12",
                    type: "displayMath",
                    body: "L = T - V",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\">L</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7667em;vertical-align:-0.0833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-48",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-35",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-79",
                    type: "text",
                    body: "As the centrifugal and Coriolis forces admit potentials,  the Lagrangian of the system reads:"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-49",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-20",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-13",
                    type: "displayMath",
                    body: "L = \\frac{1}{2}m\\ip{\\dot{\\vb{r}}}{\\dot{\\vb{r}}}\n    +\\frac{m}{2}\\bigl(\n      \\ip{\\vb{r}}{\\vb{r}}\\ip{\\boldsymbol{\\omega}}{\\boldsymbol{\\omega}}\n      - \\ip{\\boldsymbol{\\omega}}{\\vb{r}}^2\n    \\bigr)\n    + m\\ip{\\boldsymbol{\\omega}\\times\\vb{r}}{\\dot{\\vb{r}}}.",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\">L</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.0074em;vertical-align:-0.686em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3214em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">2</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord mathnormal\">m</span><span class=\"mopen\">⟨</span><span class=\"mord accent\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.6813em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">r</span></span></span><span style=\"top:-3.0134em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"accent-body\" style=\"left:-0.1389em;\"><span class=\"mord\">˙</span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord accent\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.6813em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">r</span></span></span><span style=\"top:-3.0134em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"accent-body\" style=\"left:-0.1389em;\"><span class=\"mord\">˙</span></span></span></span></span></span></span><span class=\"mclose\">⟩</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.7936em;vertical-align:-0.686em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">2</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">m</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mopen\"><span class=\"delimsizing size1\">(</span></span><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"mclose\">⟩</span><span class=\"mopen\">⟨</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mclose\">⟩</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2141em;vertical-align:-0.35em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"mclose\"><span class=\"mclose\">⟩</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mclose\"><span class=\"delimsizing size1\">)</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">m</span><span class=\"mopen\">⟨</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord accent\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.6813em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">r</span></span></span><span style=\"top:-3.0134em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"accent-body\" style=\"left:-0.1389em;\"><span class=\"mord\">˙</span></span></span></span></span></span></span><span class=\"mclose\">⟩</span><span class=\"mord\">.</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-50",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-36",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-80",
                    type: "text",
                    body: "The Lagrange equations of motion are given by:"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-51",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-21",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-14",
                    type: "displayMath",
                    body: "\\frac{d}{dt}\\frac{\\partial L}{\\partial\\dot{\\vb{r}}} - \\frac{\\partial L}{\\partial\\vb{r}} = 0",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.0574em;vertical-align:-0.686em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3714em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3714em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\" style=\"margin-right:0.0556em;\">∂</span><span class=\"mord accent\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.6813em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">r</span></span></span><span style=\"top:-3.0134em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"accent-body\" style=\"left:-0.1389em;\"><span class=\"mord\">˙</span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\" style=\"margin-right:0.0556em;\">∂</span><span class=\"mord mathnormal\">L</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.0574em;vertical-align:-0.686em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3714em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\" style=\"margin-right:0.0556em;\">∂</span><span class=\"mord text\"><span class=\"mord textbf\">r</span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\" style=\"margin-right:0.0556em;\">∂</span><span class=\"mord mathnormal\">L</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">0</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-52",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-37",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-81",
                    type: "text",
                    body: "The first term of the Lagrangian gives:"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-53",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-22",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-15",
                    type: "displayMath",
                    body: "\\frac{d}{dt}\\frac{\\partial L}{\\partial\\dot{\\vb{r}}} = m\\ddot{\\vb{r}} + m{\\boldsymbol \\omega} \\times \\dot{\\vb{r}}",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.0574em;vertical-align:-0.686em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3714em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3714em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\" style=\"margin-right:0.0556em;\">∂</span><span class=\"mord accent\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.6813em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">r</span></span></span><span style=\"top:-3.0134em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"accent-body\" style=\"left:-0.1389em;\"><span class=\"mord\">˙</span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\" style=\"margin-right:0.0556em;\">∂</span><span class=\"mord mathnormal\">L</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7646em;vertical-align:-0.0833em;\"></span><span class=\"mord mathnormal\">m</span><span class=\"mord accent\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.6813em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">r</span></span></span><span style=\"top:-3.0134em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"accent-body\" style=\"left:-0.25em;\"><span class=\"mord\">¨</span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord mathnormal\">m</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6813em;\"></span><span class=\"mord accent\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.6813em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">r</span></span></span><span style=\"top:-3.0134em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"accent-body\" style=\"left:-0.1389em;\"><span class=\"mord\">˙</span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-54",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-38",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-82",
                    type: "text",
                    body: "The second term of the Lagrangian gives:"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-55",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-23",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-16",
                    type: "displayMath",
                    body: "\\frac{\\partial L}{\\partial\\vb{r}} = m (\\boldsymbol{\\omega}^2 {\\vb r} -\\ip{\\boldsymbol{\\omega}}{\\vb r}\\boldsymbol{\\omega} ) +\n  m\\dot{\\vb{r}}\\times \\boldsymbol{\\omega}",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.0574em;vertical-align:-0.686em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3714em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\" style=\"margin-right:0.0556em;\">∂</span><span class=\"mord text\"><span class=\"mord textbf\">r</span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\" style=\"margin-right:0.0556em;\">∂</span><span class=\"mord mathnormal\">L</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.1141em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">m</span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">r</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"mclose\">⟩</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7646em;vertical-align:-0.0833em;\"></span><span class=\"mord mathnormal\">m</span><span class=\"mord accent\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.6813em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">r</span></span></span><span style=\"top:-3.0134em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"accent-body\" style=\"left:-0.1389em;\"><span class=\"mord\">˙</span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-56",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-39",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-83",
                    type: "text",
                    body: "The Lagrange equations of motion in the rotating frame are therefore"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-57",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-24",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-17",
                    type: "displayMath",
                    body: "m\\ddot{\\vb r}\n  + 2m\\boldsymbol{\\omega}\\times\\dot{\\vb r}\n  + m\\left(\n    \\ip{\\boldsymbol{\\omega}}{\\vb r}\\boldsymbol{\\omega}\n    - \\omega^2\\vb r\n  \\right)\n  = 0.",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7646em;vertical-align:-0.0833em;\"></span><span class=\"mord mathnormal\">m</span><span class=\"mord accent\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.6813em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">r</span></span></span><span style=\"top:-3.0134em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"accent-body\" style=\"left:-0.25em;\"><span class=\"mord\">¨</span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7278em;vertical-align:-0.0833em;\"></span><span class=\"mord\">2</span><span class=\"mord mathnormal\">m</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7646em;vertical-align:-0.0833em;\"></span><span class=\"mord accent\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.6813em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">r</span></span></span><span style=\"top:-3.0134em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"accent-body\" style=\"left:-0.1389em;\"><span class=\"mord\">˙</span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2141em;vertical-align:-0.35em;\"></span><span class=\"mord mathnormal\">m</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size1\">(</span></span><span class=\"mopen\">⟨</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"mclose\">⟩</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">ω</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size1\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">0.</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-58",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-40",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-84",
                    type: "text",
                    body: "Dividing by "
                  },
                  {
                    id: "inlineMath-11",
                    type: "inlineMath",
                    body: "m",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">m</span></span></span></span>"
                  },
                  {
                    id: "text-85",
                    type: "text",
                    body: ", we obtain"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-59",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-25",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-18",
                    type: "displayMath",
                    body: "\\ddot{\\vb r}\n  =\n  -2\\boldsymbol{\\omega}\\times\\dot{\\vb r}\n  + \\omega^2\\vb r\n  - \\ip{\\boldsymbol{\\omega}}{\\vb r}\\boldsymbol{\\omega},",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6813em;\"></span><span class=\"mord accent\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.6813em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">r</span></span></span><span style=\"top:-3.0134em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"accent-body\" style=\"left:-0.25em;\"><span class=\"mord\">¨</span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7278em;vertical-align:-0.0833em;\"></span><span class=\"mord\">−</span><span class=\"mord\">2</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7646em;vertical-align:-0.0833em;\"></span><span class=\"mord accent\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.6813em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">r</span></span></span><span style=\"top:-3.0134em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"accent-body\" style=\"left:-0.1389em;\"><span class=\"mord\">˙</span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.9474em;vertical-align:-0.0833em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">ω</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">r</span></span><span class=\"mclose\">⟩</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mpunct\">,</span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-60",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-41",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-86",
                    type: "text",
                    body: "which is identical to equation"
                  },
                  {
                    id: "eqref-6",
                    type: "eqref",
                    body: "rotating-frames:acceleration-transformation"
                  },
                  {
                    id: "text-87",
                    type: "text",
                    body: "."
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-61",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-42",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-88",
                    type: "text",
                    body: "It has to be noted that a conservative force in the inertial frame is not necessarily"
                  },
                  {
                    id: "text-89",
                    type: "text",
                    body: "conservative in the rotating frame. A simple example can be easily constructed by considering"
                  },
                  {
                    id: "text-90",
                    type: "text",
                    body: "a constant force in the plane "
                  },
                  {
                    id: "inlineMath-12",
                    type: "inlineMath",
                    body: "z=0",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">0</span></span></span></span>"
                  },
                  {
                    id: "text-91",
                    type: "text",
                    body: "of the inertial frame such as:"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-62",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-26",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-19",
                    type: "displayMath",
                    body: "\\vb{F} = F_x\\,\\vb{i} + F_y\\,\\vb{j}",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6861em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">F</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8444em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">x</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">i</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.9805em;vertical-align:-0.2861em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0359em;\">y</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">j</span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-63",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-43",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-92",
                    type: "text",
                    body: "where "
                  },
                  {
                    id: "inlineMath-13",
                    type: "inlineMath",
                    body: "F_x",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8333em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">x</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-93",
                    type: "text",
                    body: "and "
                  },
                  {
                    id: "inlineMath-14",
                    type: "inlineMath",
                    body: "F_y",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.9694em;vertical-align:-0.2861em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0359em;\">y</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-94",
                    type: "text",
                    body: "are constants and "
                  },
                  {
                    id: "inlineMath-15",
                    type: "inlineMath",
                    body: "\\vb{i}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">i</span></span></span></span></span>"
                  },
                  {
                    id: "text-95",
                    type: "text",
                    body: ", "
                  },
                  {
                    id: "inlineMath-16",
                    type: "inlineMath",
                    body: "\\vb{j}",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">j</span></span></span></span></span>"
                  },
                  {
                    id: "text-96",
                    type: "text",
                    body: "are the unit vectors of the"
                  },
                  {
                    id: "text-97",
                    type: "text",
                    body: "inertial frame. The force in a frame rotating with constant angular velocity "
                  },
                  {
                    id: "inlineMath-17",
                    type: "inlineMath",
                    body: "\\omega",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">ω</span></span></span></span>"
                  },
                  {
                    id: "text-98",
                    type: "text",
                    body: "around"
                  },
                  {
                    id: "text-99",
                    type: "text",
                    body: "the axis "
                  },
                  {
                    id: "inlineMath-18",
                    type: "inlineMath",
                    body: "z",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.044em;\">z</span></span></span></span>"
                  },
                  {
                    id: "text-100",
                    type: "text",
                    body: "is given by:"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-64",
              type: "contentLayoutGroup",
              children: {
                id: "layoutBlockNodeGroup-27",
                type: "layoutBlockNodeGroup",
                children: [
                  {
                    id: "displayMath-20",
                    type: "displayMath",
                    body: "\\vb{F}' =\n  \\begin{pmatrix}\n    \\cos\\omega t  & \\sin\\omega t & 0 \\\\\n    -\\sin\\omega t & \\cos\\omega t & 0 \\\\\n    0             & 0            & 1\n  \\end{pmatrix}\n  \\vb{F}\n  = (F_x\\cos(\\omega t) + F_y\\sin(\\omega t))\\,\\vb{i}'\n  + (-F_x\\sin(\\omega t) + F_y\\cos(\\omega t))\\,\\vb{j}'",
                    html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8279em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">F</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8279em;\"><span style=\"top:-3.139em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:3.6em;vertical-align:-1.55em;\"></span><span class=\"minner\"><span class=\"mopen\"><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.05em;\"><span class=\"pstrut\" style=\"height:5.6em;\"></span><span style=\"width:0.875em;height:3.6em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.875em\" height=\"3.6em\" viewBox=\"0 0 875 3600\"><path d=\"M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1\nc-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,\n-36,557 l0,84c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,\n949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9\nc0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,\n-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189\nl0,-92c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,\n-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.21em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mop\">cos</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">ω</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">−</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mop\">sin</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">ω</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-1.81em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.21em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mop\">sin</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">ω</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mop\">cos</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">ω</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-1.81em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.21em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span><span style=\"top:-1.81em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span></span><span class=\"mclose\"><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.05em;\"><span class=\"pstrut\" style=\"height:5.6em;\"></span><span style=\"width:0.875em;height:3.6em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.875em\" height=\"3.6em\" viewBox=\"0 0 875 3600\"><path d=\"M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,\n63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5\nc11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,9\nc-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664\nc-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11\nc0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17\nc242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558\nl0,-144c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,\n-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">F</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">x</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mop\">cos</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">ω</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.1223em;vertical-align:-0.2861em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0359em;\">y</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mop\">sin</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">ω</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">))</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">i</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8362em;\"><span style=\"top:-3.1473em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord\">−</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">x</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mop\">sin</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">ω</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.1223em;vertical-align:-0.2861em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">F</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0359em;\">y</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mop\">cos</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">ω</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">))</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">j</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8362em;\"><span style=\"top:-3.1473em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span></span>"
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-65",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-44",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-101",
                    type: "text",
                    body: "where "
                  },
                  {
                    id: "inlineMath-19",
                    type: "inlineMath",
                    body: "\\vb{i}'",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8362em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">i</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8362em;\"><span style=\"top:-3.1473em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-102",
                    type: "text",
                    body: ", "
                  },
                  {
                    id: "inlineMath-20",
                    type: "inlineMath",
                    body: "\\vb{j}'",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0307em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">j</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8362em;\"><span style=\"top:-3.1473em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
                  },
                  {
                    id: "text-103",
                    type: "text",
                    body: "are the unit vectors of the rotating frame. The force in the"
                  },
                  {
                    id: "text-104",
                    type: "text",
                    body: "rotating frame is time-dependent, and does not have a generalized potential as it does not"
                  },
                  {
                    id: "text-105",
                    type: "text",
                    body: "explicitly depend on the velocity. Each case will have to be considered individually to"
                  },
                  {
                    id: "text-106",
                    type: "text",
                    body: "determine whether the dynamics can be described in a Lagrangian formalism, and in general the"
                  },
                  {
                    id: "text-107",
                    type: "text",
                    body: "equations of motion "
                  },
                  {
                    id: "eqref-7",
                    type: "eqref",
                    body: "rotating-frames:acceleration-transformation"
                  },
                  {
                    id: "text-108",
                    type: "text",
                    body: "will have to be used."
                  },
                  {
                    id: "text-109",
                    type: "text",
                    body: "The existence of a Lagrangian for the inertial forces provides an elegant alternative formulation"
                  },
                  {
                    id: "text-110",
                    type: "text",
                    body: "of the dynamics in rotating reference frames. Nevertheless, when additional external forces are present,"
                  },
                  {
                    id: "text-111",
                    type: "text",
                    body: "each case must be analyzed individually to determine whether a Lagrangian description exists"
                  },
                  {
                    id: "text-112",
                    type: "text",
                    body: "or whether the equations of motion must instead be used directly."
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
        }
      ],
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
        id: "layoutInlineGroup-45",
        type: "layoutInlineGroup",
        children: [
          {
            id: "text-113",
            type: "text",
            body: "Life in a Rotating Reference Frame"
          }
        ]
      },
      intro: [
        {
          id: "contentLayoutGroup-66",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-46",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-114",
                type: "text",
                body: "The dynamics of rotating reference frames is often counterintuitive, and even situations with which"
              },
              {
                id: "text-115",
                type: "text",
                body: "we are very familiar become surprisingly subtle when examined in detail. One such example is the carousel. "
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-67",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-47",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-116",
                type: "text",
                body: "If you are an observer at rest in the inertial frame fixed to the Earth, life is quite simple for you. All people standing in front of"
              },
              {
                id: "text-117",
                type: "text",
                body: "the carousel are not moving and you see the people on the carousel going moving in circles around the centre of"
              },
              {
                id: "text-118",
                type: "text",
                body: "rotation of the carousel, which has an angular velocity "
              },
              {
                id: "inlineMath-21",
                type: "inlineMath",
                body: "\\boldsymbol{\\omega}",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span></span></span></span>"
              },
              {
                id: "text-119",
                type: "text",
                body: "parallel to the axis perpendicular to the Earth"
              },
              {
                id: "text-120",
                type: "text",
                body: "surface, which we call "
              },
              {
                id: "inlineMath-22",
                type: "inlineMath",
                body: "{\\vb e}_z",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.044em;\">z</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
              },
              {
                id: "text-121",
                type: "text",
                body: ". "
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-68",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-48",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-122",
                type: "text",
                body: "If you are on the carousel, reality is more complicated"
              },
              {
                id: "text-123",
                type: "text",
                body: "First, you have to hold on to something in order not to fly away. You clearly perceive and measure a force that pushes"
              },
              {
                id: "text-124",
                type: "text",
                body: "you away from the center of rotation, whose magnitude increases with your distance from the center."
              },
              {
                id: "text-125",
                type: "text",
                body: "Furthermore, you see the people standing on the Earth moving around you in circles with constant angular velocity."
              },
              {
                id: "text-126",
                type: "text",
                body: "This is quite a strange observation, because you cannot explain why they are not pushed away by the same force that you yourself must resist in order not to fly away."
              },
              {
                id: "text-127",
                type: "text",
                body: "Even more interestingly, if something anchored to the carousel for"
              },
              {
                id: "text-128",
                type: "text",
                body: "some reason slips away, it also starts to go in circle although following a more complicated dynamics as the people on the Earth."
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-69",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-49",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-129",
                type: "text",
                body: "The resolution of these apparent paradoxes lies in the combined action of the centrifugal and Coriolis forces in the rotating frame."
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-70",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-50",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-130",
                type: "text",
                body: "Consider a person standing on the Earth. Since the Earth is at rest in the"
              },
              {
                id: "text-131",
                type: "text",
                body: "inertial frame, its position vector "
              },
              {
                id: "inlineMath-23",
                type: "inlineMath",
                body: "\\vb g(t)",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span></span></span></span>"
              },
              {
                id: "text-132",
                type: "text",
                body: "is constant in time, and therefore"
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
                id: "displayMath-21",
                type: "displayMath",
                body: "\\frac{d\\vb g}{dt}=0.",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.0574em;vertical-align:-0.686em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3714em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord text\"><span class=\"mord textbf\">g</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">0.</span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-72",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-51",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-133",
                type: "text",
                body: "Using the transformation law relating the components of a vector in the fixed"
              },
              {
                id: "text-134",
                type: "text",
                body: "and rotating frames,"
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
                id: "displayMath-22",
                type: "displayMath",
                body: "\\frac{d\\vb g}{dt}\n  =\n  A^{-1}(t)\n  \\left(\n    \\boldsymbol{\\omega}\\times\\vb g'\n    +\n    \\frac{d\\vb g'}{dt}\n  \\right),",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.0574em;vertical-align:-0.686em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3714em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord text\"><span class=\"mord textbf\">g</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.4em;vertical-align:-0.95em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">A</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">−</span><span class=\"mord mtight\">1</span></span></span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">(</span></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mpunct\">,</span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-74",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-52",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-135",
                type: "text",
                body: "we conclude that"
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
                id: "displayMath-23",
                type: "displayMath",
                body: "\\frac{d\\vb g'}{dt}\n  =\n  -\\,\\boldsymbol{\\omega}\\times\\vb g'.",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.1149em;vertical-align:-0.686em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord\">−</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.9963em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mord\">.</span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-76",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-53",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-136",
                type: "text",
                body: "Thus, an observer on the carousel sees every point fixed on the Earth moving"
              },
              {
                id: "text-137",
                type: "text",
                body: "with a velocity equal to the opposite of the local rotational velocity of the"
              },
              {
                id: "text-138",
                type: "text",
                body: "carousel."
              },
              {
                id: "text-139",
                type: "text",
                body: "The differential equation"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-77",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-31",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-24",
                type: "displayMath",
                body: "\\frac{d\\vb g'}{dt}\n  =\n  -\\boldsymbol{\\omega}\\times\\vb g'",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.1149em;vertical-align:-0.686em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord\">−</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.9963em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-78",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-54",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-140",
                type: "text",
                body: "can be solved explicitly. We seek a solution of the form"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-79",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-32",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-25",
                type: "displayMath",
                body: "\\vb g'(t)\n  =\n  \\vb k\\,e^{-i\\alpha t},",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0519em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0691em;vertical-align:-0.1944em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">k</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">e</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8747em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">−</span><span class=\"mord mathnormal mtight\">i</span><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0037em;\">α</span><span class=\"mord mathnormal mtight\">t</span></span></span></span></span></span></span></span></span><span class=\"mpunct\">,</span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-80",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-55",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-141",
                type: "text",
                body: "where "
              },
              {
                id: "inlineMath-24",
                type: "inlineMath",
                body: "\\vb k",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">k</span></span></span></span></span>"
              },
              {
                id: "text-142",
                type: "text",
                body: "is a complex constant vector. Substituting into the differential"
              },
              {
                id: "text-143",
                type: "text",
                body: "equation gives"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-81",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-33",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-26",
                type: "displayMath",
                body: "i\\alpha\\vb k\n  =\n  -\\boldsymbol{\\omega}\\times\\vb k.",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord mathnormal\">i</span><span class=\"mord mathnormal\" style=\"margin-right:0.0037em;\">α</span><span class=\"mord text\"><span class=\"mord textbf\">k</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord\">−</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">k</span></span><span class=\"mord\">.</span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-82",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-56",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-144",
                type: "text",
                body: "Writing the complex vector as"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-83",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-34",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-27",
                type: "displayMath",
                body: "\\vb k\n  =\n  \\vb a+i\\vb b,",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">k</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">a</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.8889em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\">i</span><span class=\"mord text\"><span class=\"mord textbf\">b</span></span><span class=\"mpunct\">,</span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-84",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-57",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-145",
                type: "text",
                body: "with "
              },
              {
                id: "inlineMath-25",
                type: "inlineMath",
                body: "\\vb a",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">a</span></span></span></span></span>"
              },
              {
                id: "text-146",
                type: "text",
                body: "and "
              },
              {
                id: "inlineMath-26",
                type: "inlineMath",
                body: "\\vb b",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">b</span></span></span></span></span>"
              },
              {
                id: "text-147",
                type: "text",
                body: "real vectors, we obtain"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-85",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-35",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-28",
                type: "displayMath",
                body: "i\\alpha(\\vb a+i\\vb b)\n  =\n  -\\boldsymbol{\\omega}\\times(\\vb a+i\\vb b),",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">i</span><span class=\"mord mathnormal\" style=\"margin-right:0.0037em;\">α</span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">a</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">i</span><span class=\"mord text\"><span class=\"mord textbf\">b</span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord\">−</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">a</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">i</span><span class=\"mord text\"><span class=\"mord textbf\">b</span></span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-86",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-58",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-148",
                type: "text",
                body: "which, upon separating the real and imaginary parts, yields"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-87",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-36",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-29",
                type: "displayMath",
                body: "\\begin{aligned}\n  \\alpha\\vb a &= -\\,\\boldsymbol{\\omega}\\times\\vb b,\n  \\\\\n  \\alpha\\vb b &= \\phantom{-}\\boldsymbol{\\omega}\\times\\vb a.\n\\end{aligned}",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.7em;vertical-align:-1.1em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-r\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.6em;\"><span style=\"top:-3.76em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0037em;\">α</span><span class=\"mord text\"><span class=\"mord textbf\">a</span></span></span></span><span style=\"top:-2.26em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0037em;\">α</span><span class=\"mord text\"><span class=\"mord textbf\">b</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1em;\"><span></span></span></span></span></span><span class=\"col-align-l\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.6em;\"><span style=\"top:-3.76em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\">−</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">b</span></span><span class=\"mpunct\">,</span></span></span><span style=\"top:-2.26em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\" style=\"color:transparent;\">−</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">a</span></span><span class=\"mord\">.</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-88",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-59",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-149",
                type: "text",
                body: "The second equation implies"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-89",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-37",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-30",
                type: "displayMath",
                body: "\\vb b\n  =\n  \\frac{1}{\\alpha}\n  \\boldsymbol{\\omega}\\times\\vb a.",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">b</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.0074em;vertical-align:-0.686em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3214em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0037em;\">α</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">a</span></span><span class=\"mord\">.</span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-90",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-60",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-150",
                type: "text",
                body: "Substituting the expression for "
              },
              {
                id: "inlineMath-27",
                type: "inlineMath",
                body: "\\vb b",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6944em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">b</span></span></span></span></span>"
              },
              {
                id: "text-151",
                type: "text",
                body: "into the first equation yields"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-91",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-38",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-31",
                type: "displayMath",
                body: "\\alpha\\vb a\n  =\n  -\\frac{1}{\\alpha}\n  \\boldsymbol{\\omega}\\times\n  \\left(\n    \\boldsymbol{\\omega}\\times\\vb a\n  \\right),",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0037em;\">α</span><span class=\"mord text\"><span class=\"mord textbf\">a</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.0074em;vertical-align:-0.686em;\"></span><span class=\"mord\">−</span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3214em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0037em;\">α</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">(</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">a</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">)</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mpunct\">,</span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-92",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-61",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-152",
                type: "text",
                body: "or equivalently,"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-93",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-39",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-32",
                type: "displayMath",
                body: "\\alpha^2\\vb a\n  =\n  -\\boldsymbol{\\omega}\\times\n  \\left(\n    \\boldsymbol{\\omega}\\times\\vb a\n  \\right).",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8641em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0037em;\">α</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mord text\"><span class=\"mord textbf\">a</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord\">−</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">(</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">a</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">)</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\">.</span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-94",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-62",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-153",
                type: "text",
                body: "Using the vector identity"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-95",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-40",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-33",
                type: "displayMath",
                body: "\\vb u\\times(\\vb v\\times\\vb w)\n  =\n  \\ip{\\vb u}{\\vb w}\\vb v\n  -\n  \\ip{\\vb u}{\\vb v}\\vb w,",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">w</span></span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">w</span></span><span class=\"mclose\">⟩</span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord text\"><span class=\"mord textbf\">u</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">v</span></span><span class=\"mclose\">⟩</span><span class=\"mord text\"><span class=\"mord textbf\">w</span></span><span class=\"mpunct\">,</span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-96",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-63",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-154",
                type: "text",
                body: "we obtain"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-97",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-41",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-34",
                type: "displayMath",
                body: "\\alpha^2\\vb a\n  =\n  -\\left(\n    \\ip{\\boldsymbol{\\omega}}{\\vb a}\\boldsymbol{\\omega}\n    -\n    \\omega^2\\vb a\n  \\right),",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8641em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0037em;\">α</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mord text\"><span class=\"mord textbf\">a</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.2141em;vertical-align:-0.35em;\"></span><span class=\"mord\">−</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size1\">(</span></span><span class=\"mopen\">⟨</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">a</span></span><span class=\"mclose\">⟩</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">ω</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mord text\"><span class=\"mord textbf\">a</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size1\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mpunct\">,</span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-98",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-64",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-155",
                type: "text",
                body: "which may be rewritten as"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-99",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-42",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-35",
                type: "displayMath",
                body: "\\left(\n    \\alpha^2-\\omega^2\n  \\right)\\vb a\n  +\n  \\ip{\\boldsymbol{\\omega}}{\\vb a}\\boldsymbol{\\omega}\n  =\n  0.",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.2141em;vertical-align:-0.35em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size1\">(</span></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0037em;\">α</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">ω</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size1\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">a</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">a</span></span><span class=\"mclose\">⟩</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">0.</span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-100",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-65",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-156",
                type: "text",
                body: "Since the two vectors "
              },
              {
                id: "inlineMath-28",
                type: "inlineMath",
                body: "\\vb a",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">a</span></span></span></span></span>"
              },
              {
                id: "text-157",
                type: "text",
                body: "and "
              },
              {
                id: "inlineMath-29",
                type: "inlineMath",
                body: "\\boldsymbol{\\omega}",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span></span></span></span>"
              },
              {
                id: "text-158",
                type: "text",
                body: "are linearly"
              },
              {
                id: "text-159",
                type: "text",
                body: "independent, the above equation implies"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-101",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-43",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-36",
                type: "displayMath",
                body: "\\alpha^2=\\omega^2,\n  \\qquad\n  \\ip{\\boldsymbol{\\omega}}{\\vb a}=0.",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8641em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0037em;\">α</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.1141em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">ω</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">a</span></span><span class=\"mclose\">⟩</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">0.</span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-102",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-66",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-160",
                type: "text",
                body: "Hence,"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-103",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-44",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-37",
                type: "displayMath",
                body: "\\alpha=\\pm\\omega,",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0037em;\">α</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7778em;vertical-align:-0.1944em;\"></span><span class=\"mord\">±</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">ω</span><span class=\"mpunct\">,</span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-104",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-67",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-161",
                type: "text",
                body: "The general solution is therefore given by"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-105",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-45",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-38",
                type: "displayMath",
                body: "\\vb g'(t)\n  =\n  \\left(\n    \\vb a\n    +\n    \\frac{i}{\\alpha}\\,\n    \\boldsymbol{\\omega}\\times\\vb a\n  \\right)\n  e^{-i\\alpha t}\n  +\n  \\vb g_0',\n  \\qquad\n  \\alpha=\\pm\\omega,",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0519em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:2.4em;vertical-align:-0.95em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">(</span></span><span class=\"mord text\"><span class=\"mord textbf\">a</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.3365em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0037em;\">α</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">i</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">a</span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">e</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8747em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">−</span><span class=\"mord mathnormal mtight\">i</span><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0037em;\">α</span><span class=\"mord mathnormal mtight\">t</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0489em;vertical-align:-0.247em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0037em;\">α</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7778em;vertical-align:-0.1944em;\"></span><span class=\"mord\">±</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">ω</span><span class=\"mpunct\">,</span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-106",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-68",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-162",
                type: "text",
                body: "where "
              },
              {
                id: "inlineMath-30",
                type: "inlineMath",
                body: "\\vb g_0'",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.2481em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-2.4519em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2481em;\"><span></span></span></span></span></span></span></span></span></span>"
              },
              {
                id: "text-163",
                type: "text",
                body: "is any constant vector parallel to"
              },
              {
                id: "inlineMath-31",
                type: "inlineMath",
                body: "\\boldsymbol{\\omega}",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span></span></span></span>"
              },
              {
                id: "text-164",
                type: "text",
                body: "."
              },
              {
                id: "text-165",
                type: "text",
                body: "To obtain a more explicit expression, we define the orthonormal basis"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-107",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-46",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-39",
                type: "displayMath",
                body: "\\vb a=a\\,\\vb e_x,\n  \\qquad\n  \\boldsymbol{\\omega}=\\omega\\,\\vb e_z,",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">a</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6389em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\">a</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">x</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:2em;\"></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6389em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">ω</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.044em;\">z</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-108",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-69",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-166",
                type: "text",
                body: "where "
              },
              {
                id: "inlineMath-32",
                type: "inlineMath",
                body: "\\vb e_x",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">x</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
              },
              {
                id: "text-167",
                type: "text",
                body: "is chosen along the direction of "
              },
              {
                id: "inlineMath-33",
                type: "inlineMath",
                body: "\\vb a",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">a</span></span></span></span></span>"
              },
              {
                id: "text-168",
                type: "text",
                body: "and"
              },
              {
                id: "inlineMath-34",
                type: "inlineMath",
                body: "\\vb e_z",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.5944em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.044em;\">z</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>"
              },
              {
                id: "text-169",
                type: "text",
                body: "is parallel to the axis of rotation. Since"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-109",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-47",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-40",
                type: "displayMath",
                body: "\\vb e_y=\\vb e_z\\times\\vb e_x,",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.7305em;vertical-align:-0.2861em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0359em;\">y</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7333em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.044em;\">z</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6389em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">x</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-110",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-70",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-170",
                type: "text",
                body: "we obtain"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-111",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-48",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-41",
                type: "displayMath",
                body: "\\boldsymbol{\\omega}\\times\\vb a\n  =\n  \\omega a\\,\\vb e_y,",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">a</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7305em;vertical-align:-0.2861em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">ω</span><span class=\"mord mathnormal\">a</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0359em;\">y</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-112",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-71",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-171",
                type: "text",
                body: "and the solution becomes"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-113",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-49",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-42",
                type: "displayMath",
                body: "\\vb g'(t)\n  =\n  a\n  \\left(\n    \\vb e_x\n    +\n    i\\frac{\\omega}{\\alpha}\\vb e_y\n  \\right)\n  e^{-i\\alpha t}\n  +\n  \\vb g_0'.",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0519em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.836em;vertical-align:-0.686em;\"></span><span class=\"mord mathnormal\">a</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size2\">(</span></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">x</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\">i</span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0037em;\">α</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">ω</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0359em;\">y</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size2\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">e</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8747em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">−</span><span class=\"mord mathnormal mtight\">i</span><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0037em;\">α</span><span class=\"mord mathnormal mtight\">t</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0489em;vertical-align:-0.247em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mord\">.</span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-114",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-72",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-172",
                type: "text",
                body: "The physical solutions are obtained by taking the real part of the complex"
              },
              {
                id: "text-173",
                type: "text",
                body: "solutions. Using"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-115",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-50",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-43",
                type: "displayMath",
                body: "e^{-i\\alpha t}\n  =\n  \\cos(\\alpha t)-i\\sin(\\alpha t),",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8747em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">e</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8747em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">−</span><span class=\"mord mathnormal mtight\">i</span><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0037em;\">α</span><span class=\"mord mathnormal mtight\">t</span></span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mop\">cos</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0037em;\">α</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">i</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mop\">sin</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0037em;\">α</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-116",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-73",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-174",
                type: "text",
                body: "we find"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-117",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-51",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-44",
                type: "displayMath",
                body: "\\begin{aligned}\n  \\vb g'(t)\n  &=\n  \\Re\\left[\n    a\\left(\n      \\vb e_x\n      -\n      i\\frac{\\omega}{\\alpha}\\vb e_y\n    \\right)\n    e^{-i\\alpha t}\n  \\right]\n  +\n  \\vb g'_0\n  \\\\\n  &=\n  a\\left[\n    \\cos(\\alpha t)\\vb e_x\n    -\n    \\frac{\\omega}{\\alpha}\n    \\sin(\\alpha t)\\vb e_y\n  \\right]\n  +\n  \\vb g'_0,\n\\end{aligned}",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:3.972em;vertical-align:-1.736em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-r\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.236em;\"><span style=\"top:-4.236em;\"><span class=\"pstrut\" style=\"height:3.15em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span></span></span><span style=\"top:-2.1em;\"><span class=\"pstrut\" style=\"height:3.15em;\"></span><span class=\"mord\"></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.736em;\"><span></span></span></span></span></span><span class=\"col-align-l\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.236em;\"><span style=\"top:-4.236em;\"><span class=\"pstrut\" style=\"height:3.15em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\">ℜ</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size2\">[</span></span><span class=\"mord mathnormal\">a</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size2\">(</span></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">x</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord mathnormal\">i</span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0037em;\">α</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">ω</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0359em;\">y</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size2\">)</span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">e</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8747em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">−</span><span class=\"mord mathnormal mtight\">i</span><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0037em;\">α</span><span class=\"mord mathnormal mtight\">t</span></span></span></span></span></span></span></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size2\">]</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-2.1em;\"><span class=\"pstrut\" style=\"height:3.15em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\">a</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size2\">[</span></span><span class=\"mop\">cos</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0037em;\">α</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">x</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0037em;\">α</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">ω</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mop\">sin</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0037em;\">α</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0359em;\">y</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size2\">]</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.736em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-118",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-74",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-175",
                type: "text",
                body: "where "
              },
              {
                id: "inlineMath-35",
                type: "inlineMath",
                body: "\\vb g'_0",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.2481em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-2.4519em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2481em;\"><span></span></span></span></span></span></span></span></span></span>"
              },
              {
                id: "text-176",
                type: "text",
                body: "is constant and parallel to the axis of rotation."
              },
              {
                id: "text-177",
                type: "text",
                body: "For "
              },
              {
                id: "inlineMath-36",
                type: "inlineMath",
                body: "\\alpha=\\omega",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0037em;\">α</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">ω</span></span></span></span>"
              },
              {
                id: "text-178",
                type: "text",
                body: ", this gives"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-119",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-52",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-45",
                type: "displayMath",
                body: "\\vb g'(t)\n  =\n  a\\left[\n    \\cos(\\omega t)\\vb e_x\n    -\n    \\sin(\\omega t)\\vb e_y\n  \\right]\n  +\n  \\vb g'_0.",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.0519em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0361em;vertical-align:-0.2861em;\"></span><span class=\"mord mathnormal\">a</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">[</span><span class=\"mop\">cos</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">ω</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">x</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mop\">sin</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">ω</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0359em;\">y</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">]</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0489em;vertical-align:-0.247em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mord\">.</span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-120",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-75",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-179",
                type: "text",
                body: "For "
              },
              {
                id: "inlineMath-37",
                type: "inlineMath",
                body: "\\alpha=-\\omega",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0037em;\">α</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord\">−</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">ω</span></span></span></span>"
              },
              {
                id: "text-180",
                type: "text",
                body: ", we obtain"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-121",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-53",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-46",
                type: "displayMath",
                body: "\\begin{aligned}\n  \\vb g'(t)\n  &=\n  a\\left[\n    \\cos(-\\omega t)\\vb e_x\n    -\n    \\frac{\\omega}{-\\omega}\n    \\sin(-\\omega t)\\vb e_y\n  \\right]\n  +\n  \\vb g'_0\n  \\\\\n  &=\n  a\\left[\n    \\cos(\\omega t)\\vb e_x\n    -\n    \\sin(\\omega t)\\vb e_y\n  \\right]\n  +\n  \\vb g'_0.\n\\end{aligned}",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:3.9em;vertical-align:-1.7em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-r\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.2em;\"><span style=\"top:-4.2em;\"><span class=\"pstrut\" style=\"height:3.45em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span></span></span><span style=\"top:-2.11em;\"><span class=\"pstrut\" style=\"height:3.45em;\"></span><span class=\"mord\"></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.7em;\"><span></span></span></span></span></span><span class=\"col-align-l\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.2em;\"><span style=\"top:-4.2em;\"><span class=\"pstrut\" style=\"height:3.45em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\">a</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">[</span></span><span class=\"mop\">cos</span><span class=\"mopen\">(</span><span class=\"mord\">−</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">ω</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">x</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.1076em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">−</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">ω</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">ω</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7693em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mop\">sin</span><span class=\"mopen\">(</span><span class=\"mord\">−</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">ω</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0359em;\">y</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\"><span class=\"delimsizing size3\">]</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-2.11em;\"><span class=\"pstrut\" style=\"height:3.45em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\">a</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">[</span><span class=\"mop\">cos</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">ω</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">x</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mop\">sin</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">ω</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0359em;\">y</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">]</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-2.453em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.247em;\"><span></span></span></span></span></span></span><span class=\"mord\">.</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.7em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-122",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-76",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-181",
                type: "text",
                body: "Thus, both values of "
              },
              {
                id: "inlineMath-38",
                type: "inlineMath",
                body: "\\alpha",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0037em;\">α</span></span></span></span>"
              },
              {
                id: "text-182",
                type: "text",
                body: "produce the same real solution."
              },
              {
                id: "text-183",
                type: "text",
                body: "The same result can be obtained directly from the rotation matrix. Consider,"
              },
              {
                id: "text-184",
                type: "text",
                body: "for simplicity, a point whose position in the fixed frame is"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-123",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-54",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-47",
                type: "displayMath",
                body: "\\vb g=a\\vb e_x+\\vb g_0,",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6389em;vertical-align:-0.1944em;\"></span><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.7333em;vertical-align:-0.15em;\"></span><span class=\"mord mathnormal\">a</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">x</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6886em;vertical-align:-0.2441em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.207em;\"><span style=\"top:-2.4559em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2441em;\"><span></span></span></span></span></span></span><span class=\"mpunct\">,</span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-124",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-77",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-185",
                type: "text",
                body: "where "
              },
              {
                id: "inlineMath-39",
                type: "inlineMath",
                body: "\\vb g_0",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.6886em;vertical-align:-0.2441em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.207em;\"><span style=\"top:-2.4559em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2441em;\"><span></span></span></span></span></span></span></span></span></span>"
              },
              {
                id: "text-186",
                type: "text",
                body: "is parallel to the axis of rotation. Its components in the"
              },
              {
                id: "text-187",
                type: "text",
                body: "rotating frame are obtained by applying the rotation matrix "
              },
              {
                id: "inlineMath-40",
                type: "inlineMath",
                body: "A(t)",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">A</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span></span></span></span>"
              },
              {
                id: "text-188",
                type: "text",
                body: ":"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-125",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-55",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-48",
                type: "displayMath",
                body: "\\begin{aligned}\n  \\vb g'(t)\n  &=\n  A(t)\\vb g\n  \\\\\n  &=\n  a\n  \\begin{pmatrix}\n    \\cos(\\omega t) & \\sin(\\omega t) & 0 \\\\\n    -\\sin(\\omega t) & \\cos(\\omega t) & 0 \\\\\n    0 & 0 & 1\n  \\end{pmatrix}\n  \\begin{pmatrix}\n    1\\\\\n    0\\\\\n    0\n  \\end{pmatrix}\n  +\n  \\vb g_0\n  \\\\\n  &=\n  a\\left[\n    \\cos(\\omega t)\\vb e_x\n    -\n    \\sin(\\omega t)\\vb e_y\n  \\right]\n  +\n  \\vb g_0.\n\\end{aligned}",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:6.6em;vertical-align:-3.05em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-r\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:3.55em;\"><span style=\"top:-6.76em;\"><span class=\"pstrut\" style=\"height:4.05em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span></span></span><span style=\"top:-4.05em;\"><span class=\"pstrut\" style=\"height:4.05em;\"></span><span class=\"mord\"></span></span><span style=\"top:-1.36em;\"><span class=\"pstrut\" style=\"height:4.05em;\"></span><span class=\"mord\"></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:3.05em;\"><span></span></span></span></span></span><span class=\"col-align-l\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:3.55em;\"><span style=\"top:-6.76em;\"><span class=\"pstrut\" style=\"height:4.05em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\">A</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mord text\"><span class=\"mord textbf\">g</span></span></span></span><span style=\"top:-4.05em;\"><span class=\"pstrut\" style=\"height:4.05em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\">a</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen\"><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.05em;\"><span class=\"pstrut\" style=\"height:5.6em;\"></span><span style=\"width:0.875em;height:3.6em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.875em\" height=\"3.6em\" viewBox=\"0 0 875 3600\"><path d=\"M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1\nc-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,\n-36,557 l0,84c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,\n949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9\nc0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,\n-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189\nl0,-92c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,\n-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.21em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mop\">cos</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">ω</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span></span></span><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">−</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mop\">sin</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">ω</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span></span></span><span style=\"top:-1.81em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.21em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mop\">sin</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">ω</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span></span></span><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mop\">cos</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">ω</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span></span></span><span style=\"top:-1.81em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"arraycolsep\" style=\"width:0.5em;\"></span><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.21em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span><span style=\"top:-1.81em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">1</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span></span><span class=\"mclose\"><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.05em;\"><span class=\"pstrut\" style=\"height:5.6em;\"></span><span style=\"width:0.875em;height:3.6em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.875em\" height=\"3.6em\" viewBox=\"0 0 875 3600\"><path d=\"M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,\n63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5\nc11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,9\nc-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664\nc-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11\nc0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17\nc242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558\nl0,-144c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,\n-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen\"><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.05em;\"><span class=\"pstrut\" style=\"height:5.6em;\"></span><span style=\"width:0.875em;height:3.6em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.875em\" height=\"3.6em\" viewBox=\"0 0 875 3600\"><path d=\"M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1\nc-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,\n-36,557 l0,84c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,\n949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9\nc0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,\n-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189\nl0,-92c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,\n-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-c\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.21em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">1</span></span></span><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span><span style=\"top:-1.81em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span></span><span class=\"mclose\"><span class=\"delimsizing mult\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.05em;\"><span style=\"top:-4.05em;\"><span class=\"pstrut\" style=\"height:5.6em;\"></span><span style=\"width:0.875em;height:3.6em;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0.875em\" height=\"3.6em\" viewBox=\"0 0 875 3600\"><path d=\"M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,\n63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5\nc11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,9\nc-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664\nc-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11\nc0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17\nc242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558\nl0,-144c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,\n-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z\"/></svg></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.55em;\"><span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.207em;\"><span style=\"top:-2.4559em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2441em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-1.36em;\"><span class=\"pstrut\" style=\"height:4.05em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\">a</span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">[</span><span class=\"mop\">cos</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">ω</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">x</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mop\">sin</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">ω</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">e</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0359em;\">y</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2861em;\"><span></span></span></span></span></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">]</span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.207em;\"><span style=\"top:-2.4559em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">0</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2441em;\"><span></span></span></span></span></span></span><span class=\"mord\">.</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:3.05em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-126",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-78",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-189",
                type: "text",
                body: "This is precisely the same solution obtained from the differential equation"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-127",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-56",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-49",
                type: "displayMath",
                body: "\\frac{d\\vb g'}{dt}\n  =\n  -\\boldsymbol{\\omega}\\times\\vb g'.",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.1149em;vertical-align:-0.686em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord\">−</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.9963em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mord\">.</span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-128",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-79",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-190",
                type: "text",
                body: "Now that we have determined the trajectory of a person standing on the Earth"
              },
              {
                id: "text-191",
                type: "text",
                body: "as observed from the rotating frame, we can compute the centrifugal force"
              },
              {
                id: "text-192",
                type: "text",
                body: "acting on this person,"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-129",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-57",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-50",
                type: "displayMath",
                body: "\\vb F_\\text{cf}\n  =\n  m\\omega^2\\vb g'(t),",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8361em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">F</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3361em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord text mtight\"><span class=\"mord mtight\">cf</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.1141em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">m</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">ω</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mpunct\">,</span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-130",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-80",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-193",
                type: "text",
                body: "where we have used the fact that the solution satisfies"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-131",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-58",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-51",
                type: "displayMath",
                body: "\\ip{\\boldsymbol{\\omega}}{\\vb g'}=0.",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">⟨</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">∣</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.0519em;vertical-align:-0.25em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mclose\">⟩</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6444em;\"></span><span class=\"mord\">0.</span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-132",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-81",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-194",
                type: "text",
                body: "The Coriolis force is,"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-133",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-59",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-52",
                type: "displayMath",
                body: "\\begin{aligned}\n  \\vb F_\\text{cor}\n  &=\n  -2m\\boldsymbol{\\omega}\\times\n  \\frac{d\\vb g'}{dt}\n  \\\\\n  &=\n  2m\\boldsymbol{\\omega}\\times\n  \\left(\n    \\boldsymbol{\\omega}\\times\\vb g'\n  \\right),\n\\end{aligned}",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:3.6149em;vertical-align:-1.5574em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-r\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.0574em;\"><span style=\"top:-4.0574em;\"><span class=\"pstrut\" style=\"height:3.4289em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">F</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord text mtight\"><span class=\"mord mtight\">cor</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-2.2314em;\"><span class=\"pstrut\" style=\"height:3.4289em;\"></span><span class=\"mord\"></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.5574em;\"><span></span></span></span></span></span><span class=\"col-align-l\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.0574em;\"><span style=\"top:-4.0574em;\"><span class=\"pstrut\" style=\"height:3.4289em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\">−</span><span class=\"mord\">2</span><span class=\"mord mathnormal\">m</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span></span></span><span style=\"top:-2.2314em;\"><span class=\"pstrut\" style=\"height:3.4289em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\">2</span><span class=\"mord mathnormal\">m</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"minner\"><span class=\"mopen delimcenter\" style=\"top:0em;\">(</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mclose delimcenter\" style=\"top:0em;\">)</span></span><span class=\"mspace\" style=\"margin-right:0.1667em;\"></span><span class=\"mpunct\">,</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.5574em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-134",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-82",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-195",
                type: "text",
                body: "where we have used"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-135",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-60",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-53",
                type: "displayMath",
                body: "\\frac{d\\vb g'}{dt}\n  =\n  -\\boldsymbol{\\omega}\\times\\vb g'.",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.1149em;vertical-align:-0.686em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.4289em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord mathnormal\">t</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">d</span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.6667em;vertical-align:-0.0833em;\"></span><span class=\"mord\">−</span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">×</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.9963em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mord\">.</span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-136",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-83",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-196",
                type: "text",
                body: "Since "
              },
              {
                id: "inlineMath-41",
                type: "inlineMath",
                body: "\\vb g'",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.9463em;vertical-align:-0.1944em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.7519em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>"
              },
              {
                id: "text-197",
                type: "text",
                body: "is orthogonal to "
              },
              {
                id: "inlineMath-42",
                type: "inlineMath",
                body: "\\boldsymbol{\\omega}",
                html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4444em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord boldsymbol\" style=\"margin-right:0.037em;\">ω</span></span></span></span></span></span>"
              },
              {
                id: "text-198",
                type: "text",
                body: ", we obtain"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-137",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-61",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-54",
                type: "displayMath",
                body: "\\begin{aligned}\n  \\vb F_\\text{cor}\n  &=\n  -2m\\omega^2\\vb g'(t).\n\\end{aligned}",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1.2241em;vertical-align:-0.3621em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-r\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8621em;\"><span style=\"top:-2.9979em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">F</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord text mtight\"><span class=\"mord mtight\">cor</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3621em;\"><span></span></span></span></span></span><span class=\"col-align-l\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8621em;\"><span style=\"top:-2.9979em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\">−</span><span class=\"mord\">2</span><span class=\"mord mathnormal\">m</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">ω</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3621em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-138",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-84",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-199",
                type: "text",
                body: "The total apparent force acting on the person in the rotating frame is therefore"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-139",
          type: "contentLayoutGroup",
          children: {
            id: "layoutBlockNodeGroup-62",
            type: "layoutBlockNodeGroup",
            children: [
              {
                id: "displayMath-55",
                type: "displayMath",
                body: "\\begin{aligned}\n  \\vb F_\\text{tot}\n  &=\n  \\vb F_\\text{cf}\n  +\n  \\vb F_\\text{cor}\n  \\\\\n  &=\n  m\\omega^2\\vb g'(t)\n  -\n  2m\\omega^2\\vb g'(t)\n  \\\\\n  &=\n  -m\\omega^2\\vb g'(t).\n\\end{aligned}",
                html: "<span class=\"katex-display\"><span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:4.2482em;vertical-align:-1.8741em;\"></span><span class=\"mord\"><span class=\"mtable\"><span class=\"col-align-r\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.3741em;\"><span style=\"top:-4.5341em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">F</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2806em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord text mtight\"><span class=\"mord mtight\">tot</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"></span></span><span style=\"top:-1.4859em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.8741em;\"><span></span></span></span></span></span><span class=\"col-align-l\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:2.3741em;\"><span style=\"top:-4.5341em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">F</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3361em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord text mtight\"><span class=\"mord mtight\">cf</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">F</span></span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord text mtight\"><span class=\"mord mtight\">cor</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span><span style=\"top:-3.01em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord mathnormal\">m</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">ω</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mord\">2</span><span class=\"mord mathnormal\">m</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">ω</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span></span></span><span style=\"top:-1.4859em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\"></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mord\">−</span><span class=\"mord mathnormal\">m</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">ω</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8641em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mord\"><span class=\"mord text\"><span class=\"mord textbf\">g</span></span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8019em;\"><span style=\"top:-3.113em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">t</span><span class=\"mclose\">)</span><span class=\"mord\">.</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.8741em;\"><span></span></span></span></span></span></span></span></span></span></span></span>"
              }
            ]
          }
        },
        {
          id: "contentLayoutGroup-140",
          type: "contentLayoutGroup",
          children: {
            id: "layoutInlineGroup-85",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-200",
                type: "text",
                body: "This is precisely the centripetal force required to keep the person on the Earth"
              },
              {
                id: "text-201",
                type: "text",
                body: "moving on the circular trajectory observed from the rotating frame."
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
            id: "layoutInlineGroup-86",
            type: "layoutInlineGroup",
            children: [
              {
                id: "text-202",
                type: "text",
                body: "A Final Comment"
              }
            ]
          },
          content: [
            {
              id: "contentLayoutGroup-141",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-87",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-203",
                    type: "text",
                    body: "At this point it is worth pausing to discuss a few important conceptual points"
                  },
                  {
                    id: "text-204",
                    type: "text",
                    body: "that, although implicit throughout our derivation, play a fundamental role in"
                  },
                  {
                    id: "text-205",
                    type: "text",
                    body: "the dynamics of rotating reference frames. "
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-142",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-88",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-206",
                    type: "text",
                    body: "So far, we have assumed that Newton's first principle of dynamics holds in the"
                  },
                  {
                    id: "text-207",
                    type: "text",
                    body: "rotating frame. An observer standing on the carousel could verify this"
                  },
                  {
                    id: "text-208",
                    type: "text",
                    body: "experimentally by measuring the force required to keep a mass "
                  },
                  {
                    id: "inlineMath-43",
                    type: "inlineMath",
                    body: "m",
                    html: "<span class=\"katex\"><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.4306em;\"></span><span class=\"mord mathnormal\">m</span></span></span></span>"
                  },
                  {
                    id: "text-209",
                    type: "text",
                    body: "at rest at"
                  },
                  {
                    id: "text-210",
                    type: "text",
                    body: "different positions on the carousel. The measured force would be precisely the"
                  },
                  {
                    id: "text-211",
                    type: "text",
                    body: "centrifugal force. Likewise, the observer could measure the force required to"
                  },
                  {
                    id: "text-212",
                    type: "text",
                    body: "keep a body moving with constant velocity. Repeating this experiment for"
                  },
                  {
                    id: "text-213",
                    type: "text",
                    body: "different velocities would allow the observer to determine the combined action"
                  },
                  {
                    id: "text-214",
                    type: "text",
                    body: "of the centrifugal and Coriolis forces. The fact that such experiments can be"
                  },
                  {
                    id: "text-215",
                    type: "text",
                    body: "performed and lead to well-defined force fields is a remarkable property of"
                  },
                  {
                    id: "text-216",
                    type: "text",
                    body: "rotating frames and is by no means obvious. "
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-143",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-89",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-217",
                    type: "text",
                    body: "Once these force fields have been determined - assuming no other forces are"
                  },
                  {
                    id: "text-218",
                    type: "text",
                    body: "present - the observer can predict the motion of any body from its initial"
                  },
                  {
                    id: "text-219",
                    type: "text",
                    body: "conditions by solving Newton's second law or, equivalently, the Lagrange"
                  },
                  {
                    id: "text-220",
                    type: "text",
                    body: "equations. Thus, in the rotating frame, Newton's second law, Hamilton's"
                  },
                  {
                    id: "text-221",
                    type: "text",
                    body: "principle, the Lagrange equations, and the Hamilton equations remain perfectly"
                  },
                  {
                    id: "text-222",
                    type: "text",
                    body: "valid descriptions of the dynamics. "
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-144",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-90",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-223",
                    type: "text",
                    body: "What would nevertheless surprise the observer is that the apparent forces do"
                  },
                  {
                    id: "text-224",
                    type: "text",
                    body: "not satisfy Newton's third principle of dynamics. In particular, there is no"
                  },
                  {
                    id: "text-225",
                    type: "text",
                    body: "body in the universe on which acts a force equal and opposite to the"
                  },
                  {
                    id: "text-226",
                    type: "text",
                    body: "centrifugal force. This lack of an action-reaction pair is one of the reasons"
                  },
                  {
                    id: "text-227",
                    type: "text",
                    body: "why the centrifugal and Coriolis forces are referred to as "
                  },
                  {
                    body: "apparent",
                    id: "emph-1",
                    type: "emph"
                  },
                  {
                    id: "text-228",
                    type: "text",
                    body: "forces. "
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-145",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-91",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-229",
                    type: "text",
                    body: "In classical mechanics, inertial reference frames are precisely those in"
                  },
                  {
                    id: "text-230",
                    type: "text",
                    body: "which Newton's three principles of dynamics hold. The rotating frame considered in this"
                  },
                  {
                    id: "text-231",
                    type: "text",
                    body: "chapter is therefore not an inertial frame. Remarkably, by introducing the centrifugal"
                  },
                  {
                    id: "text-232",
                    type: "text",
                    body: "and Coriolis forces, Newton's first and second principles can be restored, allowing"
                  },
                  {
                    id: "text-233",
                    type: "text",
                    body: "the dynamics to be described exactly as in an inertial frame. Newton's third principle,"
                  },
                  {
                    id: "text-234",
                    type: "text",
                    body: "however, cannot be recovered: there is no body on which acts a force equal and opposite to the centrifugal or Coriolis"
                  },
                  {
                    id: "text-235",
                    type: "text",
                    body: "force. This is one of the defining characteristics of apparent forces. "
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-146",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-92",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-236",
                    type: "text",
                    body: "One should not conclude that every force that fails to satisfy"
                  },
                  {
                    id: "text-237",
                    type: "text",
                    body: "the simple action-reaction principle is therefore an apparent force."
                  },
                  {
                    id: "text-238",
                    type: "text",
                    body: "The Lorentz force on a charge moving in a magnetic field provides an important counterexample."
                  },
                  {
                    id: "text-239",
                    type: "text",
                    body: "Unlike the centrifugal and Coriolis forces, the Lorentz"
                  },
                  {
                    id: "text-240",
                    type: "text",
                    body: "force cannot be eliminated by changing the reference frame. It represents a"
                  },
                  {
                    id: "text-241",
                    type: "text",
                    body: "genuine physical interaction and therefore belongs to a completely different category. "
                  }
                ]
              }
            },
            {
              id: "contentLayoutGroup-147",
              type: "contentLayoutGroup",
              children: {
                id: "layoutInlineGroup-93",
                type: "layoutInlineGroup",
                children: [
                  {
                    id: "text-242",
                    type: "text",
                    body: "There is, however, an even deeper reason why these forces are regarded as"
                  },
                  {
                    id: "text-243",
                    type: "text",
                    body: "apparent. The Lorentz force"
                  },
                  {
                    id: "text-244",
                    type: "text",
                    body: "is fundamentally different from the centrifugal and Coriolis forces. No"
                  },
                  {
                    id: "text-245",
                    type: "text",
                    body: "change of coordinates can eliminate the Lorentz force, since it originates from"
                  },
                  {
                    id: "text-246",
                    type: "text",
                    body: "the electromagnetic interaction and, in special relativity, arises from the"
                  },
                  {
                    id: "text-247",
                    type: "text",
                    body: "transformation of the electric field of the charge in its rest frame. The"
                  },
                  {
                    id: "text-248",
                    type: "text",
                    body: "centrifugal and Coriolis forces, on the other hand, can be made to disappear"
                  },
                  {
                    id: "text-249",
                    type: "text",
                    body: "completely simply by observing the same motion from an inertial frame, such as"
                  },
                  {
                    id: "text-250",
                    type: "text",
                    body: "the frame of an observer standing on the Earth. It is this dependence on the"
                  },
                  {
                    id: "text-251",
                    type: "text",
                    body: "choice of reference frame that ultimately distinguishes apparent forces from"
                  },
                  {
                    id: "text-252",
                    type: "text",
                    body: "genuine physical interactions."
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
    }
  ]
} as const satisfies LatexNodeMap["latexDocument"];
