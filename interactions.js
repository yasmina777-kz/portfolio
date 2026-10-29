/* Progressive enhancements: all content and image links work without this file. */
document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const dict = () => window.TRANSLATIONS[root.lang === 'kk' ? 'kz' : root.lang] || window.TRANSLATIONS.ru;
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav-links');
  toggle?.addEventListener('click', () => toggle.setAttribute('aria-expanded', String(nav.classList.contains('open'))));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && nav?.classList.contains('open')) {
      nav.classList.remove('open'); toggle.classList.remove('active'); toggle.setAttribute('aria-expanded','false'); toggle.focus();
    }
  });
  const motion = document.createElement('button');
  motion.className = 'motion-control';
  motion.type = 'button';
  let paused = reduced.matches;
  try { paused = paused || localStorage.getItem('yasmina-motion') === 'paused'; } catch {}
  const labelMotion = () => { motion.textContent = paused ? dict().motion_resume : dict().motion_pause; motion.setAttribute('aria-pressed', String(paused)); };
  const setMotion = () => { root.classList.toggle('motion-paused',paused); labelMotion(); };
  setMotion();
  motion.addEventListener('click', () => { paused = !paused; setMotion(); try { localStorage.setItem('yasmina-motion',paused?'paused':'on'); } catch {} });
  document.querySelector('.footer-bottom')?.append(motion);
  reduced.addEventListener('change', e => { if(e.matches) { paused=true; setMotion(); } });
  const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { if (!paused && !reduced.matches) entry.target.classList.add('is-revealed'); observer.unobserve(entry.target); }
  }), {threshold:0.12}) : null;
  document.querySelectorAll('.reveal,.card,.section-head,.project-info,.cta-band').forEach(el => { el.classList.add('reveal'); observer?.observe(el); });
  const dialog = document.createElement('dialog');
  dialog.className = 'screenshot-dialog';
  dialog.setAttribute('aria-labelledby','screenshot-title');
  dialog.innerHTML = '<div class="dialog-bar"><strong id="screenshot-title"></strong><button type="button">×</button></div><img alt=""><p></p>';
  document.body.append(dialog);
  const close = dialog.querySelector('button');
  const image = dialog.querySelector('img');
  const localize = () => { labelMotion(); close.setAttribute('aria-label',dict().close_preview); dialog.querySelector('p').textContent=dict().original_note; };
  localize();
  new MutationObserver(localize).observe(root,{attributes:true,attributeFilter:['lang']});
  let trigger;
  document.querySelectorAll('[data-preview]').forEach(link => link.addEventListener('click', e => {
    if (typeof dialog.showModal !== 'function' || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault(); trigger=link;
    image.src=link.href; image.alt=link.dataset.previewTitle;
    dialog.querySelector('strong').textContent=link.dataset.previewTitle;
    dialog.showModal(); close.focus();
  }));
  close.addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect(); if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
  dialog.addEventListener('close',()=>trigger?.focus());
});
