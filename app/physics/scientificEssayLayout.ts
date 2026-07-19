import type { LatexDocumentLayoutConfig } from "@mcpab/katex/react";

export const scientificEssayLayout = {
  editorialMaxWidth: "52rem",

  sectionTitleSx: {
    fontSize: {
      xs: "2.1458rem",
      sm: "2.75rem",
      md: "2.875rem",
      lg: "3.125rem", // 50px
    },
    mb: "16px",
  },

  subsectionTitleSx: {
    fontSize: {
      xs: "1.8333rem",
      sm: "2.125rem",
      md: "2.3125rem", // 37px
      lg: "2.4375rem", // 39px
    },
    mb: "14px",
  },

  sectionContentMarginTop: 0,
  subsectionContentMarginTop: 0,
  chapterTitleSx: {
    fontSize: "clamp(2.5rem, 5.5vw, 4.8rem)",
  },

  sectionNumberingPolicy: {
    separator: ".",

    section: {
      style: "upper-roman",
      numbered: true,
      suffix: ".",
    },

    subsection: {
      style: "decimal",
      numbered: true,
      includeAncestors:false,
      suffix:'.'
    },

    subsubsection: {
      style: "decimal",
      numbered: false,
    },
  },

} satisfies LatexDocumentLayoutConfig;