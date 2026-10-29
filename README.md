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

Update the relevant HTML page for content, `styles.css` for appearance, and `i18n.js` for translated text. Keep the three language versions consistent.

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
