// Quick nav: scroll to top
const quickTop = document.getElementById('quickTop');
if (quickTop) {
  quickTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Reveal on scroll
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// FAQ accordion (independent per item, height sized to actual content)
document.querySelectorAll('.faq-item').forEach(item => {
  const btn = item.querySelector('.faq-q');
  const answer = item.querySelector('.faq-a');
  btn.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    if (isOpen) {
      item.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      answer.style.maxHeight = '';
    } else {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});

// Active nav link tracks the section currently in view
const navLinks = mainNav.querySelectorAll('a[href^="#"]');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const id = entry.target.id;
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
    });
  });
}, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

document.querySelectorAll('[data-section]').forEach(section => sectionObserver.observe(section));
