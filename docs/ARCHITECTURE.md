# Architecture

BachPhysics is a physics notes application.

Direction:

content/notes
-> typed models
-> transforms/preparation
-> rendering

Goals:
- SSR-first
- compile/render as much as possible on the server
- minimal client JavaScript
- clear separation of concerns
- maintainable TypeScript

Server/client rules:
- default to server components
- only use `use client` for:
  - state
  - effects
  - browser APIs
  - interactive UI

Avoid mixing:
- parsing
- transforms
- rendering
- UI state

Math:
- KaTeX is used for equations
- keep math rendering predictable and SSR-compatible

MUI:
- never import from:
  - `@mui/material`
- always use deep imports