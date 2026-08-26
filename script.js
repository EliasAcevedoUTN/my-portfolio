// ---------- Year ----------
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// ---------- Mobile menu ----------
const hamburger = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

function openMenu(){
  mobileMenu.classList.add('open');
  hamburger.classList.add('active');
  hamburger.setAttribute('aria-expanded', 'true');
  document.body.classList.add('menu-open');
}
function closeMenu(){
  mobileMenu.classList.remove('open');
  hamburger.classList.remove('active');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
}
hamburger.addEventListener('click', () => {
  mobileMenu.classList.contains('open') ? closeMenu() : openMenu();
});

// Close on link click, Escape key, or click outside the nav content
document.querySelectorAll('.mnav-link').forEach(a => {
  a.addEventListener('click', closeMenu);
});
document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape' && mobileMenu.classList.contains('open')) closeMenu();
});
mobileMenu.addEventListener('click', (e) => {
  if(e.target === mobileMenu) closeMenu();
});

// Close mobile menu automatically if window is resized past the breakpoint
window.addEventListener('resize', () => {
  if(window.innerWidth > 900 && mobileMenu.classList.contains('open')) closeMenu();
});

// ---------- Mobile nav background on scroll ----------
const mobileNav = document.querySelector('.mobile-nav');
if(mobileNav){
  window.addEventListener('scroll', () => {
    mobileNav.classList.toggle('scrolled', window.scrollY > 8);
  }, { passive:true });
}

// ---------- Scroll reveal ----------
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => revealObserver.observe(el));

// ---------- Active section tracking (desktop sidebar + mobile quick-nav pills) ----------
const navLinks = document.querySelectorAll('.sidebar nav a');
const subnavPills = document.querySelectorAll('.subnav-pill');
const sections = document.querySelectorAll('main section[id]');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    const id = entry.target.id;

    const link = document.querySelector('.sidebar nav a[href="#' + id + '"]');
    if(link){
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }

    const pill = document.querySelector('.subnav-pill[href="#' + id + '"]');
    if(pill){
      subnavPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      pill.scrollIntoView({ behavior:'smooth', inline:'center', block:'nearest' });
    }
  });
}, { rootMargin: '-140px 0px -55% 0px', threshold: 0 });
sections.forEach(s => navObserver.observe(s));

// ---------- Terminal typing animation ----------
const terminalBody = document.getElementById('terminalBody');
const terminalScript = [
  { type:'cmd', text: 'whoami' },
  { type:'out', text: 'Elias Acevedo — Fullstack Developer' },
  { type:'cmd', text: 'cat stack.yml' },
  { type:'out', text: '<span class="key">backend:</span> Java, Spring Boot, Spring Security' },
  { type:'out', text: '<span class="key">frontend:</span> Angular, TypeScript, RxJS' },
  { type:'out', text: '<span class="key">infra:</span> Docker, Kubernetes, OpenShift' },
  { type:'out', text: '<span class="key">ai_workflow:</span> tests, docs, code review' },
  { type:'cmd', text: 'echo $STATUS' },
  { type:'out', text: 'open_to_remote_us_roles ✓' },
];

function buildTerminal(){
  if(!terminalBody) return;
  terminalBody.innerHTML = '';
  let delay = 300;
  terminalScript.forEach((line) => {
    const div = document.createElement('div');
    div.className = 'terminal-line';
    if(line.type === 'cmd'){
      div.innerHTML = '<span class="prompt">➜</span> <span class="cmd">' + line.text + '</span>';
    } else {
      div.innerHTML = '<span class="terminal-out">' + line.text + '</span>';
    }
    terminalBody.appendChild(div);
    setTimeout(() => { div.classList.add('shown'); }, delay);
    delay += line.type === 'cmd' ? 420 : 260;
  });
  setTimeout(() => {
    const lastCmd = document.createElement('div');
    lastCmd.className = 'terminal-line shown';
    lastCmd.innerHTML = '<span class="prompt">➜</span> <span class="caret"></span>';
    terminalBody.appendChild(lastCmd);
  }, delay + 200);
}
buildTerminal();

// ---------- Copy to clipboard ----------
function copyToClipboard(text, message){
  navigator.clipboard.writeText(text).then(() => showToast(message));
}
function showToast(msg){
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 1800);
}
