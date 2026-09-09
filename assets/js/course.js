/* ============================================================
   课程页渲染 —— 模块卡片 + 30 节列表
   ============================================================ */
(function () {
  'use strict';

  // —— 6 大模块 ——
  const grid = document.getElementById('moduleGrid');
  if (grid) {
    grid.innerHTML = MODULES.map((m) => `
      <article class="module-card">
        <div class="module-card__head">
          <span class="module-card__code">${m.code}</span>
          <span class="module-card__lessons">节次 ${m.lessons}</span>
        </div>
        <h3 class="module-card__title">${m.name}</h3>
        <p class="module-card__goal">${m.goal}</p>
        <div class="module-card__meta">5 节 · 2.5 学时</div>
      </article>
    `).join('');
  }

  // —— 30 节 ——
  const list = document.getElementById('lessonList');
  if (list) {
    list.innerHTML = LESSONS.map(([no, title, mod, cite]) => `
      <li class="lesson-item">
        <div class="lesson-item__num">
          <span class="lesson-item__mod">${mod}</span>
          <span class="lesson-item__order">${String(no).padStart(2, '0')}</span>
        </div>
        <div class="lesson-item__body">
          <h4 class="lesson-item__title">第 ${no} 节 · ${title}</h4>
          <p class="lesson-item__cite">${cite}</p>
        </div>
        <div class="lesson-item__dur">25 min</div>
      </li>
    `).join('');
  }
})();