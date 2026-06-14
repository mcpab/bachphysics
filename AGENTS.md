# AGENTS.md

Before editing code:

1. Read:
   - docs/ARCHITECTURE.md
   - docs/CONVENTIONS.md
2. Briefly summarize understanding.
3. Keep edits focused and minimal.

Project:
- Next.js
- React
- TypeScript
- pnpm
- KaTeX
- physics notes / scientific content
- use the family of mcpab-* packages for rendering basic components and LaTex
- LaTeX compilation is done off-line using mcpab-katex package
 
Main goals:
- SSR-first rendering
- clear server/client boundaries
- maintainable architecture
- readable scientific content

Rules:
- Prefer server components.
- Do not add `use client` unless necessary.
- Keep parsing/data/rendering separated when possible.
- Never import MUI from `@mui/material`.
- Use deep imports:
  - `@mui/material/Box`
  - `@mui/material/Typography`
- Avoid `any`.
- Prefer explicit and descriptive types.
- Use descriptive names.
- Add comments explaining WHY.
- Do not refactor unrelated files.
- Preserve existing architecture.

If architecture is unclear:
- make the smallest reasonable change
- document assumptions
- avoid large refactors