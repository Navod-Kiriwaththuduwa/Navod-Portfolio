const heroStylesheet=document.createElement('link');heroStylesheet.rel='stylesheet';heroStylesheet.href='hero-v2.css?v=4';document.head.appendChild(heroStylesheet);
const photoStylesheet=document.createElement('link');photoStylesheet.rel='stylesheet';photoStylesheet.href='photos-v3.css?v=1';document.head.appendChild(photoStylesheet);

const header=document.querySelector('.site-header');
const navToggle=document.querySelector('.nav-toggle');
const navMenu=document.querySelector('.nav-menu');
const themeToggle=document.querySelector('.theme-toggle');
const navLinks=[...document.querySelectorAll('.nav-menu a')];

const icons={
 engineering:`<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><g class="motion-part"><circle cx="24" cy="24" r="7"></circle><path d="M24 6v5M24 37v5M6 24h5M37 24h5M11.3 11.3l3.6 3.6M33.1 33.1l3.6 3.6M36.7 11.3l-3.6 3.6M14.9 33.1l-3.6 3.6"></path></g><path d="M18.5 24h11M24 18.5v11"></path></svg>`,
 leadership:`<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><g class="motion-part"><circle cx="24" cy="15" r="6"></circle><path d="M13 39c.8-8 4.6-12 11-12s10.2 4 11 12"></path></g><circle cx="10" cy="21" r="4"></circle><path d="M3 38c.6-5 2.9-8 7-8 2.1 0 3.8.8 5 2.2"></path><circle cx="38" cy="21" r="4"></circle><path d="M45 38c-.6-5-2.9-8-7-8-2.1 0-3.8.8-5 2.2"></path></svg>`,
 impact:`<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><g class="motion-part"><circle cx="24" cy="24" r="6"></circle></g><circle cx="24" cy="24" r="13"></circle><circle cx="24" cy="24" r="20"></circle></svg>`,
 manufacturing:`<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 25V13l7 4v-6l7 4V8l10 6v11H4Z"></path><path d="M9 25v-4h4v4M19 25v-5h4v5"></path></svg>`,
 energy:`<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 2 7 18h9l-2 12 11-17h-9l2-11Z"></path></svg>`,
 research:`<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3h8M14 3v8L7 24a4 4 0 0 0 3.6 5h10.8A4 4 0 0 0 25 24l-7-13V3"></path><path d="M10 22h12"></path></svg>`
};

const pillarData=[
 {key:'engineering',detail:'Where it shows up: NPI, production operations, FactoryLogix MES, PFMEA, engineering changes, RCA and continuous improvement.'},
 {key:'leadership',detail:'Where it shows up: production teams, cross-functional coordination, strategic execution, youth leadership and large-scale volunteer networks.'},
 {key:'impact',detail:'Where it shows up: scrap reduction, quality improvement, stronger systems, community service and developing people who can lead.'}
];
const pillarCards=[...document.querySelectorAll('.pillar-card')];
pillarCards.forEach((card,index)=>{const data=pillarData[index];if(!data)return;card.dataset.pillar=data.key;card.setAttribute('role','button');card.setAttribute('tabindex','0');card.setAttribute('aria-expanded','false');card.setAttribute('aria-label',`${card.querySelector('h3')?.textContent||'Professional pillar'} — click to explore`);const number=card.querySelector('.pillar-no');const icon=document.createElement('div');icon.className='pillar-icon';icon.innerHTML=icons[data.key];number?.after(icon);const more=document.createElement('div');more.className='pillar-more';more.innerHTML=`<div><p>${data.detail}</p></div>`;card.appendChild(more);const hint=document.createElement('div');hint.className='pillar-hint';hint.textContent='Click to explore +';card.appendChild(hint);const toggle=()=>{const open=!card.classList.contains('is-active');pillarCards.forEach(other=>{other.classList.remove('is-active');other.setAttribute('aria-expanded','false');const h=other.querySelector('.pillar-hint');if(h)h.textContent='Click to explore +'});if(open){card.classList.add('is-active');card.setAttribute('aria-expanded','true');hint.textContent='Close −'}};card.addEventListener('click',toggle);card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();toggle()}})});

const projectCards=[...document.querySelectorAll('.project-card')];
projectCards.forEach(card=>{const category=card.dataset.category;if(!icons[category])return;const icon=document.createElement('div');icon.className='project-category-icon';icon.innerHTML=icons[category];card.querySelector('h3')?.before(icon)});

/* Contextual real photography */
const cebItem=[...document.querySelectorAll('.timeline-item')].find(item=>item.textContent.includes('Broadlands Hydro Power Project'));
if(cebItem){const content=cebItem.querySelector('.timeline-content');const fig=document.createElement('figure');fig.className='context-photo reveal';fig.innerHTML=`<img src="assets/photos/06-engineering-broadlands.jpg" alt="Broadlands Dam project field experience" loading="lazy"><figcaption>Broadlands Hydro Power Project · practical engineering exposure in a major infrastructure environment</figcaption>`;content?.appendChild(fig)}

const qualityProject=projectCards.find(card=>card.textContent.includes('Reducing Transformer Scrap'));
if(qualityProject){qualityProject.classList.add('has-photo');const photo=document.createElement('div');photo.className='project-photo';photo.innerHTML=`<img src="assets/photos/02-quality-award-team.jpg" alt="Quality and productivity project team receiving recognition" loading="lazy"><span class="project-photo-badge">Quality & Productivity · Team Achievement</span>`;qualityProject.prepend(photo)}

const leadershipCopy=document.querySelector('.leadership-copy');
if(leadershipCopy){const visual=document.createElement('div');visual.className='leadership-photo-feature reveal';visual.innerHTML=`<img src="assets/photos/01-leadership-podium.jpg" alt="Speaking during a Leo leadership event" loading="lazy"><div class="leadership-photo-caption"><span>Leadership in action</span><strong>Communicating, representing and building people through responsibility.</strong></div>`;leadershipCopy.appendChild(visual)}

const educationCards=[...document.querySelectorAll('.education-card')];
const engineeringEducation=educationCards.find(card=>card.textContent.includes('Electronics & Power Systems'));
if(engineeringEducation){engineeringEducation.classList.add('photo-education');const image=document.createElement('div');image.className='education-story-image';image.innerHTML=`<img src="assets/photos/04-graduation-speech.jpg" alt="Speaking at graduation" loading="lazy">`;engineeringEducation.appendChild(image)}

/* Interactive visual story */
const storyData=[
 {src:'assets/photos/01-leadership-podium.jpg',kicker:'Leadership',title:'Speaking with purpose',detail:'Public leadership, communication and representation across the Leo movement.'},
 {src:'assets/photos/02-quality-award-team.jpg',kicker:'Engineering impact',title:'Quality improvement as a team',detail:'Recognition connected to measurable manufacturing and quality improvement.'},
 {src:'assets/photos/03-award-portrait.jpg',kicker:'Recognition',title:'A milestone earned through improvement',detail:'A professional achievement representing applied quality and productivity work.'},
 {src:'assets/photos/05-international-forum.jpg',kicker:'International exposure',title:'Representing beyond borders',detail:'Leadership experiences connecting Sri Lankan Leo service with an international network.'},
 {src:'assets/photos/04-graduation-speech.jpg',kicker:'Education',title:'Engineering foundation',detail:'A milestone in the technical journey and the beginning of the professional chapter.'},
 {src:'assets/photos/07-service-field.jpg',kicker:'Service',title:'Leadership on the ground',detail:'Community work and service experience that shaped a people-centred leadership approach.'},
 {src:'assets/photos/08-leadership-award-stage.jpg',kicker:'Growth',title:'Recognition along the leadership journey',detail:'One of the milestones from years of club, district and multiple-district responsibility.'}
];
const oldMoments=document.getElementById('moments');if(oldMoments)oldMoments.remove();
const oldLightbox=document.querySelector('.photo-lightbox');if(oldLightbox)oldLightbox.remove();
const aboutSection=document.getElementById('about');
if(aboutSection){const section=document.createElement('section');section.className='section-pad real-moments-section';section.id='moments';section.innerHTML=`<div class="container"><div class="real-moments-head reveal"><div class="section-heading"><p class="eyebrow">Beyond the résumé</p><h2>Moments that shaped the journey.</h2><p>Engineering, leadership and service become more meaningful when the real experiences behind them are visible.</p></div><p class="real-moments-note">Hover to explore each moment. Select a photograph to open the full story and move through the collection.</p></div><div class="story-grid">${storyData.slice(0,4).map((item,index)=>`<button class="story-card reveal" type="button" data-story-index="${index}" ${index?`data-delay="${index*65}"`:''}><img src="${item.src}" alt="${item.title}" loading="lazy"><span class="story-info"><span><span class="story-kicker">${item.kicker}</span><strong class="story-title">${item.title}</strong></span><span class="story-open">↗</span></span></button>`).join('')}</div></div>`;aboutSection.after(section)}

const storyLightbox=document.createElement('div');storyLightbox.className='story-lightbox';storyLightbox.setAttribute('role','dialog');storyLightbox.setAttribute('aria-modal','true');storyLightbox.setAttribute('aria-label','Portfolio story viewer');storyLightbox.innerHTML=`<button class="story-lightbox-close" type="button" aria-label="Close viewer">×</button><div class="story-lightbox-shell"><button class="story-lightbox-btn story-prev" type="button" aria-label="Previous story">←</button><div class="story-lightbox-media"><img alt="Selected portfolio moment"><div class="story-lightbox-caption" aria-live="polite"></div></div><button class="story-lightbox-btn story-next" type="button" aria-label="Next story">→</button></div>`;document.body.appendChild(storyLightbox);
const storyImage=storyLightbox.querySelector('img');const storyCaption=storyLightbox.querySelector('.story-lightbox-caption');let activeStory=0;let lastStoryTrigger=null;
function showStory(index){activeStory=(index+storyData.length)%storyData.length;const item=storyData[activeStory];storyImage.src=item.src;storyImage.alt=item.title;storyCaption.innerHTML=`<strong>${item.title}</strong><span>${item.kicker} · ${item.detail} · ${activeStory+1} of ${storyData.length}</span>`}
function openStory(index,trigger){lastStoryTrigger=trigger;showStory(index);storyLightbox.classList.add('open');document.body.style.overflow='hidden';storyLightbox.querySelector('.story-lightbox-close').focus()}
function closeStory(){storyLightbox.classList.remove('open');document.body.style.overflow='';lastStoryTrigger?.focus()}
document.querySelectorAll('.story-card').forEach(card=>card.addEventListener('click',()=>openStory(Number(card.dataset.storyIndex),card)));
storyLightbox.querySelector('.story-lightbox-close').addEventListener('click',closeStory);storyLightbox.querySelector('.story-prev').addEventListener('click',()=>showStory(activeStory-1));storyLightbox.querySelector('.story-next').addEventListener('click',()=>showStory(activeStory+1));storyLightbox.addEventListener('click',e=>{if(e.target===storyLightbox)closeStory()});document.addEventListener('keydown',e=>{if(!storyLightbox.classList.contains('open'))return;if(e.key==='Escape')closeStory();if(e.key==='ArrowLeft')showStory(activeStory-1);if(e.key==='ArrowRight')showStory(activeStory+1)});

function setHeaderState(){header?.classList.toggle('scrolled',window.scrollY>18)}setHeaderState();window.addEventListener('scroll',setHeaderState,{passive:true});
navToggle?.addEventListener('click',()=>{const open=navMenu.classList.toggle('open');navToggle.setAttribute('aria-expanded',String(open));navToggle.setAttribute('aria-label',open?'Close navigation':'Open navigation')});
navLinks.forEach(link=>link.addEventListener('click',()=>{navMenu.classList.remove('open');navToggle?.setAttribute('aria-expanded','false');navToggle?.setAttribute('aria-label','Open navigation')}));
const savedTheme=localStorage.getItem('portfolio-theme');if(savedTheme==='dark'||(!savedTheme&&window.matchMedia('(prefers-color-scheme: dark)').matches))document.body.classList.add('dark');
themeToggle?.addEventListener('click',()=>{document.body.classList.toggle('dark');localStorage.setItem('portfolio-theme',document.body.classList.contains('dark')?'dark':'light')});
const filterButtons=[...document.querySelectorAll('.filter-btn')];filterButtons.forEach(button=>button.addEventListener('click',()=>{const filter=button.dataset.filter;filterButtons.forEach(btn=>btn.classList.remove('active'));button.classList.add('active');projectCards.forEach(card=>card.classList.toggle('hidden',!(filter==='all'||card.dataset.category===filter)))}));

const revealObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){const delay=entry.target.dataset.delay||0;entry.target.style.setProperty('--delay',`${delay}ms`);entry.target.classList.add('visible');revealObserver.unobserve(entry.target)}})},{threshold:.12,rootMargin:'0px 0px -40px'});document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));
const sections=[...document.querySelectorAll('main section[id]')].filter(section=>section.id!=='moments');const sectionObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(!entry.isIntersecting)return;navLinks.forEach(link=>link.classList.toggle('active',link.getAttribute('href')===`#${entry.target.id}`))})},{rootMargin:'-35% 0px -55% 0px',threshold:0});sections.forEach(section=>sectionObserver.observe(section));
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
