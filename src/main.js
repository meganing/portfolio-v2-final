import { profile } from './content/profile.js';
import { projects } from './content/projects.js';
import { capabilities } from './content/capabilities.js';
import { experience } from './content/experience.js';
import { direction } from './content/direction.js';

const sortedProjects = [...projects].sort((a, b) => a.order - b.order);
const sortedExperience = [...experience].sort((a, b) => a.order - b.order);
const isConfirmed = value => value && !String(value).trim().startsWith('[');
const externalLink = (url, label) => url ? `<a class="text-link" href="${url}" target="_blank" rel="noopener">${label} <span aria-hidden="true">↗</span></a>` : '';

function posterMarkup(project) {
  if (!project.poster) return '';
  return `<button class="poster-trigger" type="button" aria-label="Open ${project.title} poster" data-poster-src="${project.poster}" data-poster-title="${project.title}" data-poster-alt="${project.posterAlt}"><img src="${project.poster}" alt="${project.posterAlt}" width="720" height="520" loading="lazy"></button>`;
}

function posterButtonMarkup(project) {
  if (!project.poster) return '';
  return `<button class="text-link poster-text-trigger" type="button" data-poster-src="${project.poster}" data-poster-title="${project.title}" data-poster-alt="${project.posterAlt}">View poster <span aria-hidden="true">↗</span></button>`;
}

function render() {
  document.querySelector('#app').innerHTML = `
    <a class="skip-link" href="#main-content">Skip to main content</a>
    <header class="site-header">
      <a class="brand" href="#intro" aria-label="Back to top"><span class="brand-dot" aria-hidden="true"></span><strong>${profile.shortName}</strong></a>
      <nav class="desktop-nav" aria-label="Primary navigation"><a href="#work">Work</a><a href="#strengths">Strengths</a><a href="#journey">Journey</a><a href="#direction">Direction</a><a href="#contact">Contact</a></nav>
      <span class="availability"><span aria-hidden="true"></span>${profile.location.replace(', Thailand', '')} · open to opportunities</span>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav">Menu</button>
    </header>
    <nav id="mobile-nav" class="mobile-nav" aria-label="Mobile navigation"><a href="#work">Work</a><a href="#strengths">Strengths</a><a href="#journey">Journey</a><a href="#direction">Direction</a><a href="#contact">Contact</a></nav>

    <main id="main-content">
      <section id="intro" class="section intro" data-section="intro" aria-labelledby="intro-title">
        <div class="intro-copy"><p class="eyebrow">Applied AI · agents · interaction</p><h1 id="intro-title">I turn ambiguous problems into useful, <em>human-centred AI products.</em></h1><p class="lede">${profile.supporting}</p><div class="hero-actions"><a class="button button-primary" href="#work">Explore my work <span aria-hidden="true">→</span></a>${externalLink(profile.githubUrl, 'GitHub')}${externalLink(profile.linkedinUrl, 'LinkedIn')}</div></div>
        <figure class="hero-art"><img src="public/assets/editorial/hero-cat.png" alt="A simple editorial illustration of a white cat holding a notebook about ideas, agents, people and robots" width="620" height="540"><figcaption><strong>${profile.name}</strong><span>${profile.role}</span></figcaption></figure>
      </section>

      <section id="work" class="section work-section" data-section="work" aria-labelledby="work-title">
        <div class="section-heading"><div><p class="eyebrow">01 · projects</p><h2 id="work-title">Real problems.<br><em>Thoughtful solutions.</em></h2></div><p class="section-intro">Posters offer the visual overview. For the GitHub projects, the repository is the next layer of detail.</p></div>
        <div class="carousel" data-carousel tabindex="0" aria-label="Project carousel"><button class="carousel-arrow carousel-prev" type="button" aria-label="Previous project">←</button><div class="carousel-window"><div class="carousel-track">${sortedProjects.map((project, index) => `<article class="project-card ${project.poster ? '' : 'project-card--text'} project-card--${project.tone}" data-project-index="${index}" data-position="${index}" aria-hidden="${index === 0 ? 'false' : 'true'}">${posterMarkup(project)}<div class="project-copy"><p class="project-meta">0${index + 1} · ${project.technologies.join(' · ')}</p><h3>${project.title}</h3>${project.award ? `<p class="project-award"><span aria-hidden="true">★</span> ${project.award}</p>` : ''}<p>${project.summary}</p>${isConfirmed(project.contribution) ? `<p class="contribution"><strong>What I did</strong>${project.contribution}</p>` : ''}<div class="project-links">${project.poster ? posterButtonMarkup(project) : externalLink(project.githubUrl, 'View repository')}</div></div></article>`).join('')}</div></div><button class="carousel-arrow carousel-next" type="button" aria-label="Next project">→</button><div class="carousel-dots" role="tablist" aria-label="Choose a project">${sortedProjects.map((project, index) => `<button type="button" role="tab" aria-label="Show ${project.title}" aria-selected="${index === 0}" data-carousel-dot="${index}"></button>`).join('')}</div></div>
      </section>

      <section id="strengths" class="section capabilities-section" data-section="strengths" aria-labelledby="strengths-title">
        <div class="section-heading"><div><p class="eyebrow">02 · core strengths</p><h2 id="strengths-title">What I bring<br><em>to the work.</em></h2></div><div class="deck-controls"><button class="deck-toggle" type="button" aria-expanded="false" data-deck-toggle>Spread the deck <span aria-hidden="true">→</span></button></div></div>
        <div class="capability-stage"><div class="capability-deck" data-capability-deck>${capabilities.map((cap, index) => `<button class="capability-card" type="button" data-capability-index="${index}" aria-pressed="${index === 0}"><span class="card-index">0${index + 1}</span><h3>${cap.title}</h3><p>${cap.text}</p></button>`).join('')}</div></div>
      </section>

      <section id="journey" class="section journey-section" data-section="journey" aria-labelledby="journey-title">
        <div class="section-heading section-heading--solo"><div><p class="eyebrow">03 · experience</p><h2 id="journey-title">Experience,<br><em>in practice.</em></h2></div></div>
        <div class="journey-path" data-journey><ol class="journey-list">${sortedExperience.map(item => `<li class="journey-node" data-journey-node><p class="node-date">${item.dates}</p><div class="node-copy"><h3>${item.role}</h3><p class="node-organisation">${item.organisation}</p><p>${item.summary}</p></div></li>`).join('')}</ol></div>
      </section>

      <section id="direction" class="section direction-section" data-section="direction" aria-labelledby="direction-title">
        <div class="direction-copy"><p class="eyebrow">04 · current direction</p><h2 id="direction-title">Where I’m<br><em>heading next.</em></h2><p class="section-intro">${direction.subtitle}</p><ul>${direction.bullets.map(item => `<li>${item}</li>`).join('')}</ul></div><div class="career-map" data-career-map><p class="map-label">The fields I’m exploring</p><div class="career-orbit">${direction.compassLabels.map((label, index) => `<span class="career-interest interest-${index + 1}">${label}</span>`).join('')}<div class="career-pointer" data-career-pointer aria-hidden="true"><i class="ph ph-navigation-arrow"></i></div><p class="career-center"><span>Current focus</span>${direction.destination}</p></div></div>
      </section>

      <section id="contact" class="section connect-section" data-section="contact" aria-labelledby="contact-title">
        <div class="contact-copy"><p class="eyebrow">05 · let’s connect</p><h2 id="contact-title">Have a good<br><em>project in mind?</em></h2></div><div class="contact-action"><p>If you share similar interests or have an opportunity in mind, I’d love to hear from you.</p><button class="button button-dark" type="button" data-resume-request data-email="${profile.email}">Request my résumé <span aria-hidden="true">↗</span></button><p class="resume-status" data-resume-status aria-live="polite"></p><div class="contact-links">${externalLink(`mailto:${profile.email}`, 'Email')}${externalLink(profile.linkedinUrl, 'LinkedIn')}${externalLink(profile.githubUrl, 'GitHub')}</div></div><div class="contact-cats" aria-hidden="true"><img src="public/assets/painted/black-cat.png" alt=""><img src="public/assets/painted/orange-cat.png" alt=""></div>
      </section>
    </main>
    <footer class="site-footer"><span>© 2026 ${profile.name}</span><span>Made with curiosity</span></footer>
    <img class="scroll-cat" data-scroll-cat src="public/assets/painted/orange-cat.png" alt="" aria-hidden="true">
    <dialog class="poster-dialog" data-poster-dialog aria-labelledby="poster-dialog-title"><button class="dialog-close" type="button" aria-label="Close poster">×</button><div class="dialog-content" data-dialog-content></div><h2 id="poster-dialog-title" class="sr-only" data-dialog-title></h2></dialog>`;
}

function setupNav() {
  const toggle = document.querySelector('.menu-toggle'); const mobile = document.querySelector('.mobile-nav');
  toggle.addEventListener('click', () => { const open = mobile.classList.toggle('is-open'); toggle.setAttribute('aria-expanded', String(open)); toggle.textContent = open ? 'Close' : 'Menu'; });
  mobile.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { mobile.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); toggle.textContent = 'Menu'; }));
  const links = [...document.querySelectorAll('.desktop-nav a, .mobile-nav a')];
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) links.forEach(link => link.toggleAttribute('aria-current', link.getAttribute('href') === `#${entry.target.id}`)); }), { rootMargin: '-35% 0px -55%' });
  document.querySelectorAll('[data-section]').forEach(section => observer.observe(section));
}

function setupCarousel() {
  const root = document.querySelector('[data-carousel]'); const cards = [...root.querySelectorAll('.project-card')]; const dots = [...root.querySelectorAll('[data-carousel-dot]')]; let current = 0; let startX = null;
  const show = next => { current = (next + cards.length) % cards.length; cards.forEach((card, index) => { let offset = (index - current + cards.length) % cards.length; if (offset > cards.length / 2) offset -= cards.length; card.dataset.position = String(offset); card.setAttribute('aria-hidden', Math.abs(offset) > 1 ? 'true' : 'false'); }); dots.forEach((dot, index) => { dot.classList.toggle('is-active', index === current); dot.setAttribute('aria-selected', String(index === current)); }); };
  root.querySelector('.carousel-prev').addEventListener('click', () => show(current - 1)); root.querySelector('.carousel-next').addEventListener('click', () => show(current + 1)); dots.forEach((dot, index) => dot.addEventListener('click', () => show(index)));
  root.addEventListener('keydown', event => { if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); show(current + (event.key === 'ArrowRight' ? 1 : -1)); } });
  root.addEventListener('pointerdown', event => { startX = event.clientX; }); root.addEventListener('pointerup', event => { if (startX !== null && Math.abs(event.clientX - startX) > 45) show(current + (event.clientX < startX ? 1 : -1)); startX = null; });
  const dialog = document.querySelector('[data-poster-dialog]'); root.addEventListener('click', event => { const trigger = event.target.closest('.poster-trigger, .poster-text-trigger'); if (!trigger || trigger.closest('.project-card').dataset.position !== '0') return; document.querySelector('[data-dialog-title]').textContent = trigger.dataset.posterTitle; document.querySelector('[data-dialog-content]').innerHTML = `<img src="${trigger.dataset.posterSrc}" alt="${trigger.dataset.posterAlt}">`; dialog.showModal(); });
  document.querySelector('.dialog-close').addEventListener('click', () => dialog.close()); dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); }); show(0);
}

function setupDeck() {
  const deck = document.querySelector('[data-capability-deck]'); const toggle = document.querySelector('[data-deck-toggle]'); const cards = [...deck.querySelectorAll('.capability-card')];
  const setSpread = open => { deck.classList.toggle('is-spread', open); toggle.setAttribute('aria-expanded', String(open)); toggle.innerHTML = open ? 'Restack the deck <span aria-hidden="true">↙</span>' : 'Spread the deck <span aria-hidden="true">→</span>'; };
  toggle.addEventListener('click', () => setSpread(!deck.classList.contains('is-spread'))); cards.forEach((card, index) => card.addEventListener('click', () => { setSpread(true); cards.forEach((other, otherIndex) => other.setAttribute('aria-pressed', String(index === otherIndex))); }));
}

function setupResumeRequest() {
  const button = document.querySelector('[data-resume-request]'); const status = document.querySelector('[data-resume-status]'); if (!button) return;
  button.addEventListener('click', async () => { const email = button.dataset.email; try { await navigator.clipboard.writeText(email); } catch { const field = document.createElement('textarea'); field.value = email; field.setAttribute('readonly', ''); field.style.position = 'fixed'; field.style.opacity = '0'; document.body.append(field); field.select(); document.execCommand('copy'); field.remove(); } button.innerHTML = 'Email copied <span aria-hidden="true">✓</span>'; status.textContent = `Email ${email} copied. Send me a message to request the résumé.`; setTimeout(() => { button.innerHTML = 'Request my résumé <span aria-hidden="true">↗</span>'; }, 3200); });
}

function setupScrollStory() {
  const journey = document.querySelector('[data-journey]'); const nodes = [...document.querySelectorAll('[data-journey-node]')]; const careerMap = document.querySelector('[data-career-map]'); const pointer = document.querySelector('[data-career-pointer]'); const cat = document.querySelector('[data-scroll-cat]'); const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const update = () => { const journeyBox = journey.getBoundingClientRect(); const journeyProgress = reduced ? 1 : Math.min(1, Math.max(0, (innerHeight * .82 - journeyBox.top) / (journeyBox.height * .88))); journey.style.setProperty('--timeline-progress', journeyProgress); nodes.forEach((node, index) => node.classList.toggle('is-visible', reduced || journeyProgress > (index + .65) / nodes.length)); const mapBox = careerMap.getBoundingClientRect(); const mapProgress = reduced ? 1 : Math.min(1, Math.max(0, (innerHeight * .82 - mapBox.top) / (mapBox.height + innerHeight * .35))); const searchAngle = -128 + mapProgress * 492; pointer.style.setProperty('--pointer-rotation', `${mapProgress > .84 ? 42 : searchAngle}deg`); careerMap.classList.toggle('is-settled', reduced || mapProgress > .84); if (!reduced && innerWidth > 900) { const maxTop = document.documentElement.scrollHeight - 620; const pageProgress = scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight); cat.style.top = `${Math.min(maxTop, 760 + pageProgress * (maxTop - 760))}px`; cat.classList.toggle('is-hidden', pageProgress > .93); } };
  addEventListener('scroll', update, { passive: true }); addEventListener('resize', update); update();
}

render(); setupNav(); setupCarousel(); setupDeck(); setupResumeRequest(); setupScrollStory();
