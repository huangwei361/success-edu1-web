/* ============================================================
   页面复用 —— 导航 / 页脚
   用法：<div id="navMount"></div> <div id="footerMount"></div> + <script src="partials.js" data-active="manager-core"></script>
   ============================================================ */
(function () {
  'use strict';

  // 计算从当前页面到 site 根的相对路径前缀
  // 解决了 GitHub Pages 仓库页 (/<repo>/...) 下 absolute 根路径会跳到用户首页的 bug
  //   /success-edu1-web/about.html                  → base = ''
  //   /success-edu1-web/courses/manager-core.html   → base = '../'
  //   /success-edu1-web/legal/refund.html           → base = '../'
  //   /about.html  (user site)                      → base = ''
  function getBase() {
    var path = window.location.pathname;
    var dir = path.substring(0, path.lastIndexOf('/') + 1);
    var segments = dir.split('/').filter(function (p) { return p; });
    // segments[0] 是仓库名 / 用户名，剩余段是目录深度
    var depth = Math.max(0, segments.length - 1);
    var base = '';
    for (var i = 0; i < depth; i++) base += '../';
    return base;
  }

  var base = getBase();
  var active = (document.currentScript && document.currentScript.dataset.active) || '';

  var BACKDROP = '<div class="nav-backdrop" id="navBackdrop" aria-hidden="true"></div>';

  var NAV = ''
    + BACKDROP
    + '<nav class="nav" aria-label="主导航">'
    + '  <div class="container nav__inner">'
    + '    <a href="' + base + '" class="nav__brand" aria-label="返回首页">'
    + '      <span class="nav__logo">成</span>'
    + '      <span>成功学教育</span>'
    + '    </a>'
    + '    <button class="nav__toggle" id="navToggle" aria-label="切换菜单" aria-expanded="false">'
    + '      <span></span><span></span><span></span>'
    + '    </button>'
    + '    <ul class="nav__menu" id="navMenu">'
    + '      <li><a class="nav__link" href="' + base + '" data-key="home">首页</a></li>'
    + '      <li><a class="nav__link" href="' + base + 'courses/manager-core.html" data-key="manager-core">主力课程</a></li>'
    + '      <li><a class="nav__link" href="' + base + 'for-enterprise.html" data-key="for-enterprise">企业内训</a></li>'
    + '      <li><a class="nav__link" href="' + base + 'methodology.html" data-key="methodology">方法论</a></li>'
    + '      <li><a class="nav__link" href="' + base + 'about.html" data-key="about">关于我们</a></li>'
    + '      <li><a class="nav__link" href="' + base + 'contact.html" data-key="contact">联系我们</a></li>'
    + '      <li><a class="btn btn--outline btn--sm nav__cta" href="' + base + 'contact.html">咨询课程</a></li>'
    + '    </ul>'
    + '  </div>'
    + '</nav>';

  var FOOTER = ''
    + '<footer class="footer">'
    + '  <div class="container">'
    + '    <div class="footer__top">'
    + '      <div class="footer__brand-col">'
    + '        <div class="footer__brand">成功学教育</div>'
    + '        <p class="footer__desc">成人职业能力教育。基于公开管理学方法论的录播课与陪伴式社群。</p>'
    + '      </div>'
    + '      <div class="footer__col">'
    + '        <h4>课程</h4>'
    + '        <ul>'
    + '          <li><a href="' + base + 'courses/manager-core.html">管理者主力课</a></li>'
    + '          <li><a href="#">财务认知基础</a></li>'
    + '          <li><a href="#">刻意练习</a></li>'
    + '        </ul>'
    + '      </div>'
    + '      <div class="footer__col">'
    + '        <h4>了解</h4>'
    + '        <ul>'
    + '          <li><a href="' + base + 'methodology.html">方法论来源</a></li>'
    + '          <li><a href="' + base + 'about.html">关于我们</a></li>'
    + '          <li><a href="' + base + 'for-enterprise.html">企业内训</a></li>'
    + '          <li><a href="' + base + 'contact.html">联系我们</a></li>'
    + '        </ul>'
    + '      </div>'
    + '      <div class="footer__col">'
    + '        <h4>合规</h4>'
    + '        <ul>'
    + '          <li><a href="' + base + 'legal/refund.html">退课规则</a></li>'
    + '          <li><a href="#">隐私政策</a></li>'
    + '          <li><a href="#">服务条款</a></li>'
    + '        </ul>'
    + '      </div>'
    + '    </div>'
    + '    <div class="footer__bottom">'
    + '      <span>© 2026 成功学教育公司 · 鄂 ICP 备 XXXXXXXX 号</span>'
    + '      <span>本站所有方法论均标注公开出处 · 不使用未署名「研究表明」</span>'
    + '    </div>'
    + '  </div>'
    + '</footer>';

  // 注入
  var navMount = document.getElementById('navMount');
  if (navMount) navMount.outerHTML = NAV;
  var footerMount = document.getElementById('footerMount');
  if (footerMount) footerMount.outerHTML = FOOTER;

  // 高亮当前页
  if (active) {
    var link = document.querySelector('.nav__link[data-key="' + active + '"]');
    if (link) link.classList.add('nav__link--active');
  }
})();
