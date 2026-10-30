# Developer portfolio

A multilingual personal website presenting projects, experience and contact information. Built with HTML, CSS and JavaScript, with Russian, Kazakh and English language options.

[View the website](https://yasmina777-kz.github.io/portfolio/)

## Run locally

The site has no package installation or build step. With Git and Python 3 installed:

```sh
git clone https://github.com/yasmina777-kz/portfolio.git
cd portfolio
python3 -m http.server 8080 --bind 127.0.0.1
```

Open <http://localhost:8080>. On Windows, use `py -m http.server 8080 --bind 127.0.0.1` if `python3` is unavailable. Stop the server with Ctrl+C.

## Project structure

| File | Purpose |
| --- | --- |
| `index.html` | Home page and featured projects |
| `about.html` | About the developer |
| `projects.html` | Project showcase |
| `experience.html` | Experience |
| `contact.html` | Contact page |
| `styles.css` | Shared styles |
| `script.js` | Page interactions |
| `i18n.js` | Translations and language switching |

## Editing

Update the relevant HTML page for structure and fallback text. Use `styles.css` for the base appearance and `enhancements.css` for the project gallery and motion.

### Updating translated text

Text with `data-i18n` is replaced when the page loads or the language changes. Editing only the text inside the HTML element will not change what visitors see with JavaScript enabled.

The scripts load in this order: `i18n.js`, `project-content.js`, `script.js`, then `interactions.js`. `project-content.js` merges its values into the base dictionary and **overrides matching keys in `i18n.js`**. Keep this order on every page.

1. Find the element's translation key, such as `hero_lede` or `mentor_text`.
2. If the key exists in `project-content.js`, update it there; otherwise update it in `i18n.js`. For example, changing `hero_lede` only in `i18n.js` has no visible effect because the project dictionary overrides it.
3. Update all three dictionary entries: `ru`, `kz` and `en`. The dictionary uses `kz`; the rendered document uses the HTML language code `kk` for Kazakh.
4. Keep the HTML fallback text meaningful. For translated attributes such as image descriptions, use `data-i18n-attr="alt:translation_key"` and add the key in all three languages.
5. Preview locally, switch through RU / KZ / EN, and reload. The last selected language is remembered, so a reload alone does not check all translations. Check both the home page and project page when a key is shared.

Translation strings can contain HTML and are inserted with `innerHTML`; keep them as trusted, repository-maintained copy rather than user input.

Before publishing, check navigation between all five pages, the RU/KZ/EN switcher, mobile layout and project/contact links.

## Related project

[Chatra backend](https://github.com/yasmina777-kz/chatra-with-avatar-B) — an educational platform API built with FastAPI and SQLAlchemy.

## Project gallery and motion

- `project-content.js`: added and updated project copy in RU / KZ / EN.
- `enhancements.css`: responsive gallery, entrance and hover motion, lightbox styling.
- `interactions.js`: image dialog, Escape/focus handling, motion preference and mobile navigation accessibility.
- `assets/`: three optimized project covers and their original screenshots.

Motion respects `prefers-reduced-motion` and can be paused using the footer control. Content remains visible if JavaScript or IntersectionObserver is unavailable. Image links open the original files without JavaScript.

### Image sources

Captured on 2026-10-29 using the actual interfaces:

- Chatra: public landing page at https://chatra.aican.cloud/landing.
- AI Mentor: landing page running locally from https://github.com/yasmina777-kz/lecturer-app.
- RugPull: scanner screen running locally from https://github.com/whynicky19/RugPull-Frontend (interface label: TokenScan). No scan results were fabricated.

The `*-cover.jpg` files are decorative AI-generated browser mockups based on these screenshots, created with the built-in image generation tool. `*-screen.jpg` files are unedited captures. The gallery labels the covers and offers the original on click. Project features are described separately from the pictured landing / scanner screens.
