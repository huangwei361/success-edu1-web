/* ============================================================
   轻量交互 —— 渐进显隐 + 移动菜单
   ============================================================ */
(function () {
  'use strict';

  // —— 移动菜单切换 ——
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');
  const backdrop = document.getElementById('navBackdrop');
  if (toggle && menu) {
    const close = () => {
      menu.classList.remove('is-open');
      if (backdrop) backdrop.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    };
    const open = () => {
      menu.classList.add('is-open');
      if (backdrop) backdrop.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
    };
    toggle.addEventListener('click', () => {
      if (menu.classList.contains('is-open')) close();
      else open();
    });
    if (backdrop) {
      backdrop.addEventListener('click', close);
    }
    // 点菜单项后关闭（移动端）
    menu.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', close);
    });
  }

  // —— 滚动渐进显隐 ——
  if ('IntersectionObserver' in window) {
    const reveals = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
  }

  // —— 当前页高亮 ——
  const path = location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav__link').forEach((a) => {
    const href = a.getAttribute('href');
    if (!href) return;
    const normalized = href.replace(/\/$/, '') || '/';
    if (normalized === path) {
      a.classList.add('nav__link--active');
    } else {
      a.classList.remove('nav__link--active');
    }
  });
})();