# success-edu-web

> 成功学教育公司 · 官方网站源代码

基于公开管理学方法论的成人职业能力教育网站。纯静态 HTML + 现代 CSS + vanilla JS，无任何前端框架依赖。

## 技术栈

- **HTML5**（语义化标签 + ARIA）
- **CSS**：CSS 自定义属性（Design Token）+ Grid + Container Queries 友好的响应式
- **JS**：原生 vanilla JS（无依赖），IntersectionObserver 滚动显隐
- **字体**：Google Fonts（Noto Serif SC + Noto Sans SC）
- **托管**：GitHub Pages / Vercel / Netlify 均可零成本部署

## 目录结构

```
.
├── index.html              首页
├── courses/
│   └── manager-core.html   主力课程详情
├── for-enterprise.html     企业内训（B 端）
├── methodology.html        方法论来源
├── about.html              关于我们
├── contact.html            联系我们
├── legal/
│   └── refund.html         退课规则
├── 404.html                错误页
└── assets/
    ├── css/
    │   ├── reset.css       极简 reset
    │   ├── tokens.css      设计 token（颜色 / 字号 / 间距）
    │   ├── layout.css      布局系统
    │   ├── components.css  通用组件
    │   ├── pages.css       全局页面专用
    │   ├── course.css      课程页专用
    │   ├── page-enterprise.css
    │   ├── page-methodology.css
    │   ├── page-about.css
    │   ├── page-contact.css
    │   ├── page-legal.css
    │   └── page-404.css
    ├── js/
    │   ├── main.js         全站交互（菜单 / 滚动）
    │   ├── partials.js     导航 / 页脚复用
    │   ├── course-data.js  6 大模块 + 30 节数据
    │   └── course.js       课程页渲染
    └── img/                （占位，未来加图片）
```

## 设计原则

- **配色克制**：深蓝 `#1F3A68` + 金 `#C0954E` + 米 `#F5F1E8`
- **字体衬线 + 黑体**：思源宋体（标题）+ 思源黑体（正文）
- **零玄学词**：不出现能量 / 振频 / 气场 / 灵魂 / 疗愈等
- **零效果承诺**：不出现年入百万 / 21 天改变 / 阶层跃迁
- **透明定价**：¥1,500 / 期，首期内测 ¥999（限 50 名）

## 本地预览

```bash
python -m http.server 8765
# 浏览器打开 http://127.0.0.1:8765
```

## 部署到 GitHub Pages

1. 推送代码到 GitHub（`main` 分支）
2. 仓库 → Settings → Pages → Source 选 `main` 分支根目录
3. 等待 1–2 分钟，访问 `https://<用户名>.github.io/success-edu-web/`

## 部署到 Vercel（推荐，国内访问友好）

```bash
npm i -g vercel
vercel --prod
```

## 部署到 Netlify

```bash
npm i -g netlify-cli
netlify deploy --prod --dir .
```

## 合规自检（每页必查）

| 项 | 状态 |
|---|---|
| 无玄学词 | ✅ |
| 无绝对化用语 | ✅ |
| 无效果承诺 | ✅ |
| 无医疗暗示 | ✅ |
| 方法论标注作者 + 年份 | ✅ |
| 退课规则有专门页面 | ✅ |
| 价格透明，无虚假折扣 | ✅ |
| 不收集非必要用户信息 | ✅ |

## 待办

- [ ] 替换占位内容（邮箱 / ICP / 讲师姓名）
- [ ] 加 `sitemap.xml` 和 `robots.txt`
- [ ] 加 favicon
- [ ] 接表单后端（Formspree / Tally / 自建）
- [ ] 接 Google Analytics / 百度统计
- [ ] 性能优化（图片压缩 / 字体子集化）
- [ ] PWA 配置（可选）

## License

内部项目，未经授权不得使用。