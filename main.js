/* ─────────────────────────────────────────────────────────
   Dr. Rana's Clinic — Main JavaScript
───────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', function () {

  /* ── FAQ Accordion ───────────────────────────────────── */
  document.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = this.closest('.faq-item');
      var isOpen = item.classList.contains('open');

      // Close all items
      document.querySelectorAll('.faq-item').forEach(function (i) {
        i.classList.remove('open');
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      // Open the clicked item if it was previously closed
      if (!isOpen) {
        item.classList.add('open');
        this.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ── Scroll Reveal ───────────────────────────────────── */
  var revealEls = document.querySelectorAll('.reveal');
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(function (el) { revealObserver.observe(el); });

  /* ── Active Nav Link on Scroll ───────────────────────── */
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', function () {
    var scrollY = window.scrollY;

    sections.forEach(function (section) {
      var top    = section.offsetTop - 90;
      var bottom = top + section.offsetHeight;

      if (scrollY >= top && scrollY < bottom) {
        navLinks.forEach(function (a) { a.style.color = ''; });
        var active = document.querySelector(
          '.nav-links a[href="#' + section.id + '"]'
        );
        if (active) active.style.color = 'var(--gold)';
      }
    });
  });

  /* ── Contact Form ────────────────────────────────────── */
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn     = form.querySelector('.form-btn');
      var success = document.getElementById('form-success');

      btn.textContent = 'Sending…';
      btn.disabled    = true;

      setTimeout(function () {
        btn.style.display   = 'none';
        success.style.display = 'block';
      }, 1200);
    });
  }

});
