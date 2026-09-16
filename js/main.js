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

// Side rail: show current section label
const railLabel = document.querySelector('[data-rail]');
const sections = document.querySelectorAll('[data-section]');

if (railLabel && sections.length) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        railLabel.textContent = entry.target.dataset.label;
      }
    });
  }, { threshold: 0.5 });

  sections.forEach(section => sectionObserver.observe(section));
}

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

// Contact form (placeholder handler — wire up to real backend/CTA later)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('상담 신청이 접수되었습니다. 실제 서비스에서는 이 부분을 예약 시스템/전화 연결로 교체해주세요.');
    contactForm.reset();
  });
}
