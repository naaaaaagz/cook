# Separate static pages

The runtime pages are index.html (welcome), recipes.html (searchable list),
recipe.html?id=RECIPE_ID, kitchen.html and cook.html?id=RECIPE_ID.
Keep all links relative so the same files work under a project path such as /cook/.
There is no hash router, numbered list pagination or framework. Optional email
accounts use managed Supabase Auth/PostgreSQL; see account-setup/README.md. Account
activation and real email delivery are separate from the local static-page checks.

Adding or changing recipes does not require generating recipe HTML files.
The existing Sheets-derived JavaScript remains the recipe source used at runtime.

## Shared HTML

Edit tools/page-template.html, then run:

    node tools/build-pages.cjs
    node tools/build-pages.cjs --check

The generator writes five fixed, workspace-local targets. Each contains one screen;
shared dialogs, controls, CSP, fonts and scripts remain consistent. No recipe content
is generated or altered. The browser does not fetch HTML fragments.

The generator, template, this document and pages-tests.cjs are explicit exceptions
to the tools/ ignore rule, so fresh clones can maintain the pages. Existing private
tools and data stay ignored. Include these four sources, the five generated HTML
files, js/page-session.js and runtime edits when committing. No build is required
to serve the committed pages.

## Choices and cooking

js/page-session.js carries a versioned JSON snapshot in sessionStorage, scoped by
the site's path. This deliberately replaces the old nothing-stored rule for the
owner's request to carry choices between pages. No localStorage, cookies, audio,
speech transcripts are stored by the tab snapshot. Ingredient keys, filters,
search, options, layout, language, theme and units are kept for the browser tab's
page session. Session restoration is controlled by the browser; this is not an
account backup or cross-device sync on its own. Optional accounts separately save
only kitchen/layout, language, theme, textures and units to the account database;
account auth uses a separate tab-storage key. See account-setup/README.md.

Saved choices and layout coordinates are validated before use. Blocked/quota-full
storage prevents internal navigation and explains why, rather than silently
discarding choices. Other app keys and other project paths are not cleared.

Cooking stores recipe/step IDs, fixed choices, completed steps and start timestamps,
not DOM nodes or recipe functions. Timers continue by timestamp across a kitchen
editor round trip. A changed recipe step structure invalidates the saved cook.
Opening cook.html without a matching saved cook returns to its recipe details.
Explicit Exit uses the existing confirmation; browser reload/leave while running
uses the browser's native warning. Native mobile warnings are browser-dependent.
Microphone listening and delayed microphone startup are stopped on navigation.

## Verification

    node tools/pages-tests.cjs
    node tools/review-tests.cjs
    node tools/build-pages.cjs --check
    git diff --check

The pagination tests cover the five documents, relative assets/CSP, all recipe URLs,
session format/blocked storage and choice validation. Browser checks additionally
cover real document navigation, kitchen return paths, running timers, preferences,
search, invalid IDs and direct links. Physical devices and production are separate.

References:
- https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
- https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
