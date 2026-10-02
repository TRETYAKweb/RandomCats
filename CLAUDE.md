# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

RandomCats (GitHub: TRETYAKweb/RandomCats) — a static single-page site: a "start" screen, then a screen that shows a random cat image fetched from an API and counts clicks as "coins".

## Development

No build step, package manager, linter, or tests — plain HTML/CSS/vanilla JS. Open `index.html` directly in a browser, or serve the folder (e.g. `python3 -m http.server`) for consistent `fetch` behavior.

## Architecture

- `index.html` contains two sections that act as screens: `#start-section` (`.start`) and `#random-cats-section` (`.random-cats`). Only one is visible at a time.
- Screen switching is done in `js/index.js` by setting inline `style.display` (`flex` for start, `block` for random-cats). The initial state comes from CSS: `.random-cats` has `display: none` in `css/style.css`. Keep these in sync if the layout changes.
- The coin counter is stored directly in the DOM (`#coin` innerHTML is incremented on each "Random Cat" click and reset to 0 by the close button) — there is no JS state variable.
- Cat images come from `http://aws.random.cat/meow`; the response's `file` field is assigned to `#img`'s `src`. Errors are only logged to the console.
- JS selects elements by `id`; CSS styles by BEM classes (`block__element`, e.g. `random-cats__btn`). Both must be preserved when editing markup.
- Styling: `css/reset.css` then `css/style.css`. The custom font `Wonder-boys` is loaded via `@font-face` from `fonts/`. Decorative icons (coin, heart, button decor) are applied as CSS `::before`/`::after` backgrounds from `images/`.
