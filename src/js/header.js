import '../css/header.css';

// ---------- Mobile menu ----------

const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.mobile-menu__close');

if (burger && mobileMenu && closeBtn) {
  burger.addEventListener('click', () => {
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });

  mobileMenu.addEventListener('click', e => {
    if (e.target === mobileMenu) {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

// ---------- Active links (desktop + mobile) ----------

const currentPath = window.location.pathname;

// desktop pill
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  // link.pathname вже враховує /goit-advancedjs-hw-03/
  if (link.pathname === currentPath) {
    link.classList.add('nav-link--active');
  }
});

// mobile menu links
const mobileLinks = document.querySelectorAll('.mobile-menu__links a');
mobileLinks.forEach(link => {
  if (link.pathname === currentPath) {
    link.classList.add('mobile-link--active');
  }

  link.addEventListener('click', () => {
    mobileMenu?.classList.remove('open');
    document.body.style.overflow = '';
  });
});
