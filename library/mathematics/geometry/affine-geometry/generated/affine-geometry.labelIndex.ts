import type { LatexLabelNodeIndex } from "@mcpab/katex/reference";

export const labelIndex = {
  "thm:affine-composition": {
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
  }
} as const satisfies LatexLabelNodeIndex;
