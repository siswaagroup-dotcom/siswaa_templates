# Creative Architecture Diagnosis

## Current shape

`src/App.jsx` owns category selection, template selection, the preview toolbar, and the shared `BusinessWebsite` renderer. `src/data/templateCatalog.js` builds all 55 templates by combining each industry with the same five global `designVariants`. The selected template changes `template.mode`, but all categories still render through the same page component.

## What currently forces sameness

- `BusinessWebsite` renders a fixed announcement, header, split hero, intro, services, feature, project gallery, testimonial, FAQ, CTA, and footer sequence.
- Navigation is selected from only two category checks (store and restaurant); the rest share one navigation pattern.
- Service, feature, project, testimonial, FAQ, and CTA sections use the same markup and order. Variant CSS changes selected grids, spacing, and type, not the story composition.
- `variantStyles` provides a global five-mode palette and font mapping. Category records mostly change content, image sets, and services.
- Gallery cards use static stock-image posters rather than live template compositions.

## Style leakage and boundaries

- `src/builder.css` combines builder chrome, preview chrome, and the rendered websites in one global stylesheet.
- `:root`, `html`, `body`, `button`, `a`, and broad component selectors are global. Business-site styles are mostly rooted under `.business-site`, but the site uses builder-level font variables and shared dialog styles.
- `src/styles.css` contains a second, global veterinary-site design. `src/main.jsx` still carries that legacy implementation alongside the current `App` mount, so those selectors are a potential source of leakage if the old page is re-enabled.
- There is no per-template CSS module, shadow root, or ownership boundary for art direction.

## Data and runtime

- The catalog contains 11 industries and generates five IDs per category; all template records reuse the same five design names and modes.
- The preview route is hash-based in `App.jsx`; variant switching updates the selected template ID through that same route flow.
- The preview correctly mounts the complete shared React page, but changing a variant does not currently replace the full composition.
- The project uses React 18 and Vite with `lucide-react`; `package.json` defines a production build but no test, lint, or type-check script.
- No separate template implementation or creative metadata currently exists under `src/templates/`.

## Current redesign progress

Pets 01 now has a standalone package at `src/templates/pets/01-curious-dog/`, with its own header, hero, sections, footer, CSS module, metadata, original SVG dog, and eight-image manifest. The app lazy-loads that package for `pets-01`; Pets 02-05 still use the earlier shared `PetExperience` renderer, and all other categories still use `BusinessWebsite`.

The first package passes its local animation and image checks and compiles. The global uniqueness gate correctly remains red because 54 standalone template folders are still missing; the image gate likewise reports the ten categories without manifests. These results are coverage failures, not waived checks.