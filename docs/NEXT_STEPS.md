# Next Steps
# Publication Checklist

Before publishing an essay, complete the following checklist.

## Content

- [ ] Add opening quotation
- [ ] Add historical notes where appropriate
- [ ] Add bibliography
- [ ] Add primary references
- [ ] Add further reading section

## Figures

- [ ] Add figure credits
- [ ] Verify image licensing and attributions
- [ ] Check captions for consistency

## Mathematics

- [ ] Verify notation consistency
- [ ] Check equation numbering
- [ ] Verify cross-references
- [ ] Check symbols and definitions for consistency
- [ ] Verify units and conventions

## Editorial

- [ ] Final proofreading
- [ ] Improve wording where necessary
- [ ] Check section titles
- [ ] Verify hyperlinks
- [ ] Remove temporary notes and TODOs

## Layout

- [ ] Review typography
- [ ] Check equation spacing
- [ ] Review figure placement
- [ ] Check page breaks
- [ ] Ensure consistent visual rhythm

---

## Lorentz Transformations

### Historical quotation

- [ ] Add opening quotation (Einstein, Lorentz, or Minkowski)

### Primary sources

- [ ] Hendrik A. Lorentz (1904)
- [ ] Henri Poincaré (1905)
- [ ] Albert Einstein — *On the Electrodynamics of Moving Bodies* (1905)
- [ ] Hermann Minkowski — *Space and Time* (1908)

### Modern references

- [ ] Jackson — *Classical Electrodynamics*
- [ ] Rindler — *Introduction to Special Relativity*
- [ ] Landau & Lifshitz — *The Classical Theory of Fields*
- [ ] Misner, Thorne & Wheeler — *Gravitation*
- [ ] Weinberg — *Gravitation and Cosmology*
 
 You’re right—the nested fenced code blocks broke the Markdown rendering.

Use this version instead; it avoids inner triple backticks entirely:

## Equation Reference Preview — Enhancements

The equation-reference preview is intended to reduce the interruption caused by searching for equations elsewhere in a long derivation. A reader should be able to inspect a referenced equation without losing the current reading position.

### Core behavior

- [x] Clicking an equation reference opens a preview of the referenced equation.
- [x] The preview appears without navigating away from the current location.
- [x] The equation label is displayed in the preview.
- [ ] Close the preview by clicking outside it.
- [ ] Close the preview with the `Escape` key.
- [ ] Return focus to the equation reference after closing.
- [ ] Add an accessible label for screen readers.

### Navigation

- [ ] Add a **Jump to equation** action.
- [ ] Preserve the reader's original scroll position.
- [ ] Add a **Return to previous location** action after jumping.
- [ ] Support opening the referenced equation in a new tab.
- [ ] Add a **Copy equation link** action.

### Presentation

- [ ] Anchor the preview near the clicked reference when sufficient space is available.
- [ ] Fall back to a centered preview for wide equations or small screens.
- [ ] Add a subtle opening animation:
  - opacity from `0` to `1`
  - scale from `0.98` to `1`
  - duration around `120–160 ms`
- [ ] Constrain very wide equations and allow horizontal scrolling when necessary.
- [ ] Ensure the preview remains readable in both light and dark modes.
- [ ] Use the same typography and equation rendering as the original equation.

### Persistent previews

- [ ] Add a **Pin equation** action.
- [ ] Allow a pinned equation to remain visible while the reader continues scrolling.
- [ ] Allow more than one pinned equation, subject to a reasonable limit.
- [ ] Add **Unpin** and **Close all** actions.

### Context and mathematical dependencies

- [ ] Show the section containing the equation.
- [ ] Show a short contextual sentence when useful.
- [ ] Show equations used in the derivation of the referenced equation.
- [ ] Show later equations that depend on it.
- [ ] Allow navigation through the equation dependency graph.
- [ ] Distinguish between:
  - definitions
  - intermediate equations
  - principal results
  - assumptions
  - identities

### Mobile behavior

- [ ] Display the preview as a bottom sheet on narrow screens.
- [ ] Keep the equation reference visible when possible.
- [ ] Allow horizontal scrolling for long equations.
- [ ] Make close, pin, and navigation controls easy to tap.

---

## Cross-Page Equation References

Equation previews currently work only when the referenced equation belongs to the same rendered page. Cross-page references require a site-wide equation registry.

### Site-wide equation registry

- [ ] Generate a registry during the build process.
- [ ] Give every equation a globally unique identifier.
- [ ] Store, for each equation:
  - equation identifier
  - source LaTeX
  - essay identifier
  - page route
  - section title
  - displayed equation number
  - optional descriptive title
- [ ] Detect duplicate equation identifiers during the build.
- [ ] Warn or fail the build when a reference cannot be resolved.

### Suggested registry shape

    export interface EquationRegistryEntry {
      id: string;
      latex: string;
      route: string;
      essayId: string;
      sectionTitle?: string;
      displayNumber?: string;
      title?: string;
    }

    export type EquationRegistry = Record<string, EquationRegistryEntry>;

Example:

    export const equationRegistry: EquationRegistry = {
      "eq:transformation_of_time": {
        id: "eq:transformation_of_time",
        latex:
          String.raw`ct'=\gamma\left(-\frac{v}{c}
          \langle\mathbf e_1,\mathbf x\rangle+ct\right)`,
        route: "/special-relativity/lorentz-transformations",
        essayId: "lorentz-transformations",
        sectionTitle: "Transformation of Time",
        title: "Transformation of time",
      },
    };

### Cross-page preview behavior

- [ ] Resolve the equation identifier against the global registry.
- [ ] Render the equation in the current page without loading the entire destination essay.
- [ ] Display the source essay and section in the preview.
- [ ] Add **Open in source essay**.
- [ ] Add **Open in new tab**.
- [ ] Add **Copy equation link**.
- [ ] Gracefully handle missing or outdated references.

### Build pipeline

- [ ] Extract every labeled equation from the LaTeX AST.
- [ ] Store the original LaTeX before rendering to KaTeX.
- [ ] Associate each equation with its generated route and section.
- [ ] Emit the registry as a static TypeScript or JSON asset.
- [ ] Load registry entries lazily when the preview opens.
- [ ] Add automated tests for:
  - same-page references
  - cross-page references
  - missing references
  - duplicate labels
  - renamed routes
  - equations containing custom macros

### Stable equation links

Use a permanent URL pattern such as:

    /special-relativity/lorentz-transformations#eq:transformation_of_time

- [ ] Keep equation labels stable when equations are reordered.
- [ ] Do not use displayed equation numbers as identifiers.
- [ ] Redirect old equation links when labels or routes change.
- [ ] Scroll to and temporarily highlight an equation opened from a direct link.

---

## Longer-Term Ideas

- [ ] Show a preview on hover while retaining click behavior.
- [ ] Add a reader preference to disable hover previews.
- [ ] Allow equations to be collected into a temporary working set.
- [ ] Export pinned equations as Markdown or LaTeX.
- [ ] Show definitions of symbols used in the equation.
- [ ] Highlight where each symbol was first defined.
- [ ] Add backlinks showing every location that references an equation.
- [ ] Build a visual map of dependencies across essays.