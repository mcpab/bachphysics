# Architecture

BachPhysics is a server-first publishing platform for long-form essays in physics and mathematics.

## Pipeline

```
content / notes
    ↓
typed models
    ↓
transforms
    ↓
rendering
```

Keep each stage independent.

## Goals

- SSR-first
- Compile and render as much as possible on the server.
- Minimal client JavaScript.
- Clear separation of concerns.
- Maintainable TypeScript.
- Predictable rendering.

## Server / Client

Default to Server Components.

Only use `use client` when required for:

- state
- effects
- browser APIs
- interactive UI

Avoid mixing:

- parsing
- transforms
- rendering
- UI state

## Mathematics

- Use KaTeX for mathematics.
- Keep rendering deterministic and SSR-compatible.
- Mathematical content should be independent of presentation.

## UI

- Never import from `@mui/material`.
- Always use deep imports.
- Favor composition over large components.

## Editorial Philosophy

BachPhysics should feel like a carefully typeset scientific monograph rather than a documentation website.

The interface should disappear behind the content. Prefer typography, spacing, and layout over decorative UI elements.

As the library grows, the renderer may introduce semantic editorial objects such as:

- Definition
- Theorem / Proposition
- Proof
- Example
- Physical Interpretation
- Historical Note

These are editorial concepts, not UI callout components.

Differentiate them primarily through typography, spacing, and subtle layout—not colored boxes, icons, or decorative panels.

**Physical Interpretation** is intended to become a distinctive BachPhysics element, connecting mathematical derivations to their physical meaning.