// ============================================
// Theme + Language + Mobile nav controller
// ============================================
document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Mobile nav toggle ---------- */
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      const isOpen = links.classList.toggle('open');
      toggle.classList.toggle('active', isOpen);
    });
  }

  /* ---------- Theme toggle (dark / light) ---------- */
  const THEME_KEY = 'yasmina-theme';
  const root = document.documentElement;
  const themeBtn = document.querySelector('.theme-toggle');

  function applyTheme(theme) {
    if (theme === 'light') {
      root.setAttribute('data-theme', 'light');
    } else {
      root.removeAttribute('data-theme');
    }
  }

  let savedTheme = 'dark';
  try { savedTheme = localStorage.getItem(THEME_KEY) || 'dark'; } catch (e) {}
  applyTheme(savedTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      const current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
      const next = current === 'light' ? 'dark' : 'light';
      applyTheme(next);
      try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
    });
  }

  /* ---------- Language switcher ---------- */
  const LANG_KEY = 'yasmina-lang';
  const langBtns = document.querySelectorAll('.lang-btn');

  function applyLang(lang) {
    if (!window.TRANSLATIONS || !window.TRANSLATIONS[lang]) return;
    const dict = window.TRANSLATIONS[lang];

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      // format: "attr:key" e.g. "placeholder:contact_placeholder"
      const spec = el.getAttribute('data-i18n-attr');
      spec.split(';').forEach(function (pair) {
        const parts = pair.split(':').map(function (s) { return s.trim(); });
        const attr = parts[0], key2 = parts[1];
        if (attr && key2 && dict[key2] !== undefined) {
          el.setAttribute(attr, dict[key2]);
        }
      });
    });

    document.documentElement.setAttribute('lang', lang === 'kz' ? 'kk' : lang);

    langBtns.forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
  }

  let savedLang = 'ru';
  try { savedLang = localStorage.getItem(LANG_KEY) || 'ru'; } catch (e) {}
  applyLang(savedLang);

  langBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const lang = btn.getAttribute('data-lang');
      applyLang(lang);
      try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
    });
  });

  /* ---------- Contact form (mailto) ---------- */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('cf-name').value.trim();
      const email = document.getElementById('cf-email').value.trim();
      const message = document.getElementById('cf-message').value.trim();

      const subject = encodeURIComponent('Portfolio contact from ' + name);
      const body = encodeURIComponent(
        message + '\n\n— ' + name + ' (' + email + ')'
      );

      window.location.href = 'mailto:yasmin.yuldasheva@icloud.com?subject=' + subject + '&body=' + body;
    });
  }
});