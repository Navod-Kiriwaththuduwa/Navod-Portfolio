const heroStylesheet = document.createElement('link');
heroStylesheet.rel = 'stylesheet';
heroStylesheet.href = 'hero-v2.css?v=3';
document.head.appendChild(heroStylesheet);

const momentsStylesheet = document.createElement('link');
momentsStylesheet.rel = 'stylesheet';
momentsStylesheet.href = 'moments-v2.css?v=1';
document.head.appendChild(momentsStylesheet);

const header = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const themeToggle = document.querySelector('.theme-toggle');
const navLinks = document.querySelectorAll('.nav-menu a');

const icons = {
  engineering: `
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <g class="motion-part">
        <circle cx="24" cy="24" r="7"></circle>
        <path d="M24 6v5M24 37v5M6 24h5M37 24h5M11.3 11.3l3.6 3.6M33.1 33.1l3.6 3.6M36.7 11.3l-3.6 3.6M14.9 33.1l-3.6 3.6"></path>
      </g>
      <path d="M18.5 24h11M24 18.5v11"></path>
    </svg>`,
  leadership: `
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <g class="motion-part">
        <circle cx="24" cy="15" r="6"></circle>
        <path d="M13 39c.8-8 4.6-12 11-12s10.2 4 11 12"></path>
      </g>
      <circle cx="10" cy="21" r="4"></circle><path d="M3 38c.6-5 2.9-8 7-8 2.1 0 3.8.8 5 2.2"></path>
      <circle cx="38" cy="21" r="4"></circle><path d="M45 38c-.6-5-2.9-8-7-8-2.1 0-3.8.8-5 2.2"></path>
    </svg>`,
  impact: `
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <g class="motion-part"><circle cx="24" cy="24" r="6"></circle></g>
      <circle cx="24" cy="24" r="13"></circle><circle cx="24" cy="24" r="20"></circle>
    </svg>`,
  manufacturing: `
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M4 25V13l7 4v-6l7 4V8l10 6v11H4Z"></path><path d="M9 25v-4h4v4M19 25v-5h4v5"></path>
    </svg>`,
  energy: `
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M18 2 7 18h9l-2 12 11-17h-9l2-11Z"></path>
    </svg>`,
  research: `
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M12 3h8M14 3v8L7 24a4 4 0 0 0 3.6 5h10.8A4 4 0 0 0 25 24l-7-13V3"></path><path d="M10 22h12"></path>
    </svg>`
};

const pillarData = [
  {
    key: 'engineering',
    detail: 'Where it shows up: NPI, production operations, FactoryLogix MES, PFMEA, engineering changes, RCA and continuous improvement.'
  },
  {
    key: 'leadership',
    detail: 'Where it shows up: production teams, cross-functional coordination, strategic execution, youth leadership and large-scale volunteer networks.'
  },
  {
    key: 'impact',
    detail: 'Where it shows up: scrap reduction, quality improvement, stronger systems, community service and developing people who can lead.'
  }
];

const pillarCards = [...document.querySelectorAll('.pillar-card')];
pillarCards.forEach((card, index) => {
  const data = pillarData[index];
  if (!data) return;
  card.dataset.pillar = data.key;
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-expanded', 'false');
  card.setAttribute('aria-label', `${card.querySelector('h3')?.textContent || 'Professional pillar'} — click to explore`);

  const number = card.querySelector('.pillar-no');
  const icon = document.createElement('div');
  icon.className = 'pillar-icon';
  icon.innerHTML = icons[data.key];
  number?.after(icon);

  const more = document.createElement('div');
  more.className = 'pillar-more';
  more.innerHTML = `<div><p>${data.detail}</p></div>`;
  card.appendChild(more);

  const hint = document.createElement('div');
  hint.className = 'pillar-hint';
  hint.textContent = 'Click to explore +';
  card.appendChild(hint);

  const toggleCard = () => {
    const willOpen = !card.classList.contains('is-active');
    pillarCards.forEach(other => {
      other.classList.remove('is-active');
      other.setAttribute('aria-expanded', 'false');
      const otherHint = other.querySelector('.pillar-hint');
      if (otherHint) otherHint.textContent = 'Click to explore +';
    });
    if (willOpen) {
      card.classList.add('is-active');
      card.setAttribute('aria-expanded', 'true');
      hint.textContent = 'Close −';
    }
  };

  card.addEventListener('click', toggleCard);
  card.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleCard();
    }
  });
});

const projectCards = [...document.querySelectorAll('.project-card')];
projectCards.forEach(card => {
  const category = card.dataset.category;
  if (!icons[category]) return;
  const icon = document.createElement('div');
  icon.className = 'project-category-icon';
  icon.innerHTML = icons[category];
  const title = card.querySelector('h3');
  title?.before(icon);
});

const momentData = [
  {
    crop: 'graduation',
    type: 'Academic milestone',
    title: 'Graduation & Engineering Foundation',
    source: 'https://raw.githubusercontent.com/Navod-Kiriwaththuduwa/NavodK/main/banner1.jpg',
    backgroundSize: '230% auto',
    backgroundPosition: '0% 50%'
  },
  {
    crop: 'speaking',
    type: 'Leadership in action',
    title: 'Speaking & Public Leadership',
    source: 'https://raw.githubusercontent.com/Navod-Kiriwaththuduwa/NavodK/main/banner1.jpg',
    backgroundSize: '230% auto',
    backgroundPosition: '100% 50%'
  },
  {
    crop: 'recognition',
    type: 'Recognition',
    title: 'A Milestone Worth Remembering',
    source: 'https://raw.githubusercontent.com/Navod-Kiriwaththuduwa/NavodK/main/banner3.jpg',
    backgroundSize: '178% auto',
    backgroundPosition: '72% 50%'
  }
];

const aboutSection = document.getElementById('about');
if (aboutSection) {
  const moments = document.createElement('section');
  moments.className = 'section-pad moments-section';
  moments.id = 'moments';
  moments.innerHTML = `
    <div class="container">
      <div class="moments-heading reveal">
        <div class="section-heading">
          <p class="eyebrow">Beyond the résumé</p>
          <h2>Real moments from the journey.</h2>
          <p>These are focused photo moments extracted from the original banner artwork, so the people and experiences—not the banner design—remain the focus.</p>
        </div>
        <p class="moments-note">Each card isolates a specific moment from the source artwork. Select one to explore the cropped view.</p>
      </div>
      <div class="moments-grid">
        ${momentData.map((moment, index) => `
          <button class="moment-card reveal" type="button" data-photo-index="${index}" data-crop="${moment.crop}" ${index ? `data-delay="${index * 70}"` : ''}>
            <span class="moment-photo" aria-hidden="true"></span>
            <span class="moment-overlay">
              <span>
                <span class="moment-type">${moment.type}</span>
                <strong class="moment-title">${moment.title}</strong>
              </span>
              <span class="moment-open">↗</span>
            </span>
          </button>`).join('')}
      </div>
    </div>`;
  aboutSection.after(moments);
}

const lightbox = document.createElement('div');
lightbox.className = 'photo-lightbox';
lightbox.setAttribute('role', 'dialog');
lightbox.setAttribute('aria-modal', 'true');
lightbox.setAttribute('aria-label', 'Photo viewer');
lightbox.innerHTML = `
  <button class="lightbox-close" type="button" aria-label="Close photo viewer">×</button>
  <div class="lightbox-shell">
    <button class="lightbox-btn lightbox-prev" type="button" aria-label="Previous photograph">←</button>
    <div class="lightbox-media">
      <div class="lightbox-crop" role="img"></div>
      <div class="lightbox-caption" aria-live="polite"></div>
    </div>
    <button class="lightbox-btn lightbox-next" type="button" aria-label="Next photograph">→</button>
  </div>`;
document.body.appendChild(lightbox);

const lightboxCrop = lightbox.querySelector('.lightbox-crop');
const lightboxCaption = lightbox.querySelector('.lightbox-caption');
let activePhoto = 0;
let lastPhotoTrigger = null;

function showPhoto(index) {
  activePhoto = (index + momentData.length) % momentData.length;
  const moment = momentData[activePhoto];
  lightboxCrop.style.backgroundImage = `url('${moment.source}')`;
  lightboxCrop.style.backgroundSize = moment.backgroundSize;
  lightboxCrop.style.backgroundPosition = moment.backgroundPosition;
  lightboxCrop.setAttribute('aria-label', moment.title);
  lightboxCaption.innerHTML = `<strong>${moment.title}</strong><span>${moment.type} · ${activePhoto + 1} of ${momentData.length}</span>`;
}

function openLightbox(index, trigger) {
  lastPhotoTrigger = trigger;
  showPhoto(index);
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
  lightbox.querySelector('.lightbox-close').focus();
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
  lastPhotoTrigger?.focus();
}

document.querySelectorAll('.moment-card').forEach(card => {
  card.addEventListener('click', () => openLightbox(Number(card.dataset.photoIndex), card));
});
lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
lightbox.querySelector('.lightbox-prev').addEventListener('click', () => showPhoto(activePhoto - 1));
lightbox.querySelector('.lightbox-next').addEventListener('click', () => showPhoto(activePhoto + 1));
lightbox.addEventListener('click', event => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', event => {
  if (!lightbox.classList.contains('open')) return;
  if (event.key === 'Escape') closeLightbox();
  if (event.key === 'ArrowLeft') showPhoto(activePhoto - 1);
  if (event.key === 'ArrowRight') showPhoto(activePhoto + 1);
});

function setHeaderState() {
  header?.classList.toggle('scrolled', window.scrollY > 18);
}
setHeaderState();
window.addEventListener('scroll', setHeaderState, { passive: true });

navToggle?.addEventListener('click', () => {
  const open = navMenu.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
    navToggle?.setAttribute('aria-label', 'Open navigation');
  });
});

const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.body.classList.add('dark');
}

themeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('portfolio-theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    projectCards.forEach(card => {
      const show = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !show);
    });
  });
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || 0;
      entry.target.style.setProperty('--delay', `${delay}ms`);
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const sections = [...document.querySelectorAll('main section[id]')].filter(section => section.id !== 'moments');
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
    });
  });
}, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
sections.forEach(section => sectionObserver.observe(section));

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
