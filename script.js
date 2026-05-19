/* ============================================================
   Moonlight Étoile — Global JavaScript
   ============================================================ */

(function () {
  'use strict';

  /* ── Navbar: scroll shadow ───────────────────────────────── */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const onScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 24);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Hamburger / Mobile Nav ──────────────────────────────── */
  const hamburger  = document.querySelector('.hamburger');
  const mobileNav  = document.querySelector('.mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-nav a');

  function closeMobileNav() {
    hamburger?.classList.remove('open');
    mobileNav?.classList.remove('open');
    document.body.style.overflow = '';
  }

  hamburger?.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    mobileNav?.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  mobileLinks.forEach(link => link.addEventListener('click', closeMobileNav));

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMobileNav();
  });

  /* ── Active nav link highlight ───────────────────────────── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar__links a, .mobile-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ── Scroll Reveal (IntersectionObserver) ────────────────── */
  const revealEls = document.querySelectorAll('[data-reveal]');
  if (revealEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
    );
    revealEls.forEach(el => observer.observe(el));
  }

  /* ── Cart System ─────────────────────────────────────────── */
  const CART_KEY = 'MoonlightEtoile_cart';

  function getCart() {
    try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
    catch { return []; }
  }

  function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartBadge();
  }

  function updateCartBadge() {
    const cart  = getCart();
    const total = cart.reduce((sum, i) => sum + i.qty, 0);
    document.querySelectorAll('.cart-badge').forEach(badge => {
      badge.textContent = total;
      badge.style.display = total > 0 ? 'flex' : 'none';
    });
  }

  window.MoonlightEtoile = window.MoonlightEtoile || {};

  window.MoonlightEtoile.updateCartBadge = updateCartBadge;

  window.MoonlightEtoile.addToCart = function (name, price, variant) {
    const cart = getCart();
    const key  = name + (variant ? '-' + variant : '');
    const existing = cart.find(i => i.key === key);
    if (existing) {
      existing.qty++;
    } else {
      cart.push({ key, name, price, variant: variant || '', qty: 1 });
    }
    saveCart(cart);
    showToast(`${name} added to cart`);
  };

  window.MoonlightEtoile.removeFromCart = function (key) {
    const cart = getCart().filter(i => i.key !== key);
    saveCart(cart);
  };

  window.MoonlightEtoile.getCart = getCart;

  updateCartBadge();

  /* ── Toast System ────────────────────────────────────────── */
  let toastContainer = document.querySelector('.toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span class="toast__dot"></span><span>${message}</span>`;
    toastContainer.appendChild(toast);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => toast.classList.add('show'));
    });

    setTimeout(() => {
      toast.classList.remove('show');
      toast.addEventListener('transitionend', () => toast.remove(), { once: true });
    }, 2800);
  }

  window.MoonlightEtoile.showToast = showToast;

  /* ── Quick Add buttons (product cards) ───────────────────── */
  document.querySelectorAll('[data-add-to-cart]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const name  = btn.dataset.name  || 'Product';
      const price = btn.dataset.price || '0';
      window.MoonlightEtoile.addToCart(name, price);
    });
  });

  /* ── Smooth scroll for anchor links ──────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = (navbar?.offsetHeight || 72) + 16;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

})();
