import { LatexPropsOverrides } from "@mcpab/katex";

export const affineGeometryLatexPropsOverrides = {
    section: {
        $all: {
            contentGroupGap: 1.75,    // 14px
            titleMarginBottom: 2.5,  // 20px
        },
    },
    subsection: {
        $all: {
            contentGroupGap: 1.75,
            titleMarginBottom: 2.5,
        },
    },
    definition: {
        $all: {
            contentGroupGap: 1.5, // 12px
            contentMarginTop: 2.5, // 20px
            marginBottom: {
                xs: 1,    // 8px
                md: 1.5,  // 12px
            },
        },
    },
    proposition: {
        $all: {
            contentGroupGap: 1.5,
            contentMarginTop: 2.5,
            marginBottom: {
                xs: 1,    // 8px
                md: 1.5,  // 12px
            },
        },
    },
    theorem: {
        $all: {
            contentGroupGap: 1.5,
            contentMarginTop: 2.5,
            marginBottom: {
                xs: 1,    // 8px
                md: 1.5,  // 12px
            },
        },
    },
    lemma: {
        $all: {
            contentGroupGap: 1.5,
            contentMarginTop: 2.5,
            marginBottom: {
                xs: 1,    // 8px
                md: 1.5,  // 12px
            },
        },
    },
    corollary: {
        $all: {
            contentGroupGap: 1.5,
            contentMarginTop: 2.5,
            marginBottom: {
                xs: 1,    // 8px
                md: 1.5,  // 12px
            },
        },
    },
    proof: {
        $all: {
            contentGroupGap: {
                xs: 1.5,  // 12px
                md: 1.75, // 14px
            },
            contentMarginTop: 2.5,
            marginBottom: {
                xs: 1.5, // 12px
                md: 2,   // 16px
            },
        },
    },
    displayMath: {
        $all: {
            slotsProps: {
                border: {
                    latexBorderStyle: 'none',
                    sx: {
                        px: 0.5,
                        py: 0,
                        '& .katex-display': {
                            margin: '0.25rem 0',
                        },
                    },
                },
                label: {
                    format: 'default',
                },
            },
        },
    },
} satisfies LatexPropsOverrides;
