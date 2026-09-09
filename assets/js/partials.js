/* ============================================================
   页面复用 —— 导航 / 页脚
   用法：<div id="navMount"></div> <div id="footerMount"></div> + <script src="partials.js" data-active="manager-core"></script>
   ============================================================ */
(function () {
  'use strict';

  const active = (document.currentScript && document.currentScript.dataset.active) || '';

  const NAV = `
<nav class="nav" aria-label="主导航">
  <div class="container nav__inner">
    <a href="/" class="nav__brand" aria-label="返回首页">
      <span class="nav__logo">成</span>
      <span>成功学教育</span>
    </a>
    <button class="nav__toggle" id="navToggle" aria-label="切换菜单" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
    <ul class="nav__menu" id="navMenu">
      <li><a class="nav__link" href="/" data-key="home">首页</a></li>
      <li><a class="nav__link" href="/courses/manager-core.html" data-key="manager-core">主力课程</a></li>
      <li><a class="nav__link" href="/for-enterprise.html" data-key="for-enterprise">企业内训</a></li>
      <li><a class="nav__link" href="/methodology.html" data-key="methodology">方法论</a></li>
      <li><a class="nav__link" href="/about.html" data-key="about">关于我们</a></li>
      <li><a class="nav__link" href="/contact.html" data-key="contact">联系我们</a></li>
      <li><a class="btn btn--outline btn--sm nav__cta" href="/contact.html">咨询课程</a></li>
    </ul>
  </div>
</nav>`;

  const FOOTER = `
<footer class="footer">
  <div class="container">
    <div class="footer__top">
      <div class="footer__brand-col">
        <div class="footer__brand">成功学教育</div>
        <p class="footer__desc">成人职业能力教育。基于公开管理学方法论的录播课与陪伴式社群。</p>
      </div>
      <div class="footer__col">
        <h4>课程</h4>
        <ul>
          <li><a href="/courses/manager-core.html">管理者主力课</a></li>
          <li><a href="#">财务认知基础</a></li>
          <li><a href="#">刻意练习</a></li>
        </ul>
      </div>
      <div class="footer__col">
        <h4>了解</h4>
        <ul>
          <li><a href="/methodology.html">方法论来源</a></li>
          <li><a href="/about.html">关于我们</a></li>
          <li><a href="/for-enterprise.html">企业内训</a></li>
          <li><a href="/contact.html">联系我们</a></li>
        </ul>
      </div>
      <div class="footer__col">
        <h4>合规</h4>
        <ul>
          <li><a href="/legal/refund.html">退课规则</a></li>
          <li><a href="#">隐私政策</a></li>
          <li><a href="#">服务条款</a></li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      <span>© 2026 成功学教育公司 · 鄂 ICP 备 XXXXXXXX 号</span>
      <span>本站所有方法论均标注公开出处 · 不使用未署名「研究表明」</span>
    </div>
  </div>
</footer>`;

  // 注入
  const navMount = document.getElementById('navMount');
  if (navMount) navMount.outerHTML = NAV;
  const footerMount = document.getElementById('footerMount');
  if (footerMount) footerMount.outerHTML = FOOTER;

  // 高亮
  if (active) {
    const link = document.querySelector(`.nav__link[data-key="${active}"]`);
    if (link) link.classList.add('nav__link--active');
  }
})();