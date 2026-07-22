# MacBook Air 个人网站

一个高还原度的 Apple 风格个人网站，使用 React + Vite + Tailwind CSS + Framer Motion 构建。

## 项目特色

- 🎨 **Apple 设计语言**: 精确还原 Apple 官网的配色、字体和间距系统
- ✨ **丰富的动效**: 使用 Framer Motion 实现流畅的入场动画和微交互
- 📱 **完全响应式**: 在桌面、平板和移动端都有出色的体验
- 🚀 **现代化技术栈**: React 18 + Vite + Tailwind CSS
- 🎯 **高可维护性**: 清晰的组件结构和设计系统

## 技术栈

- **框架**: React 18 + Vite
- **样式**: Tailwind CSS + CSS Modules
- **动效**: Framer Motion + GSAP
- **字体**: Inter (Google Fonts) - 作为 SF Pro 的 Web 替代方案
- **图标**: Lucide React

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:5173 查看网站

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 项目结构

```
个人网站/
├── src/
│   ├── components/          # React 组件
│   │   ├── Navigation.jsx  # 导航栏
│   │   ├── Hero.jsx        # 首屏
│   │   ├── ProductShowcase.jsx  # 产品展示
│   │   ├── MediaGrid.jsx   # 媒体网格
│   │   └── Footer.jsx      # 页脚
│   ├── styles/
│   │   └── global.css      # 全局样式
│   ├── App.jsx             # 主应用组件
│   └── main.jsx            # React 入口
├── public/                  # 静态资源
├── index.html               # HTML 模板
├── package.json            # 项目配置
├── vite.config.js          # Vite 配置
└── tailwind.config.js      # Tailwind 配置
```

## 设计系统

### 配色方案

```css
--color-text-primary: #1d1d1f;    /* 主要文字 */
--color-text-blue: #0066cc;       /* 链接和强调文字 */
--color-text-black: #000000;      /* 黑色文字 */
--color-bg-light: #f5f5f7;        /* 浅色背景 */
--color-bg-white: #ffffff;        /* 白色背景 */
--color-accent-blue: #0071e3;      /* 强调色/按钮背景 */
```

### 字体系统

- **显示字体**: SF Pro Display (替代方案: Inter)
- **正文字体**: SF Pro Text (替代方案: Inter)
- **图标字体**: SF Pro Icons

### 间距系统

基于 8px 网格: 8px, 16px, 24px, 32px, 48px, 64px, 96px

## 组件说明

### Navigation

固定顶部导航栏，包含 Apple logo 和主要导航链接。具有以下特性：
- 滚动时添加玻璃拟态效果
- 响应式设计，移动端显示汉堡菜单
- 平滑的 Hover 动画

### Hero

首屏区域，包含：
- MacBook Air 主标题和副标题
- 双笔记本箭头形状 SVG 视觉
- CTA 按钮组
- 分层入场动画

### ProductShowcase

产品特性网格，展示 MacBook Air 的核心功能：
- M3 芯片
- 全天候电池
- Liquid Retina 显示屏
- 存储选项
- Wi-Fi 6E
- MagSafe 充电

### MediaGrid

编辑式媒体网格，展示其他 Apple 产品：
- iPhone
- iPad Air
- Shop iPhone
- Trade-in 选项

### Footer

页脚区域，包含：
- 链接分类
- 社交媒体图标
- 法律链接
- 版权信息

## 自定义

### 修改配色

在 `tailwind.config.js` 中修改颜色配置：

```javascript
colors: {
  apple: {
    text: {
      primary: '#1d1d1f',  // 修改这里
      // ...
    }
  }
}
```

### 修改内容

编辑对应组件中的文本和链接：

- 导航链接: `src/components/Navigation.jsx`
- 首屏内容: `src/components/Hero.jsx`
- 产品特性: `src/components/ProductShowcase.jsx`
- 媒体网格: `src/components/MediaGrid.jsx`

### 替换图片

将 SVG 组件替换为你自己的图片：

```jsx
<img src="/path/to/image.jpg" alt="描述" className="w-full h-auto" />
```

## 部署

### Vercel

1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. 自动构建和部署

### Netlify

1. 将代码推送到 GitHub
2. 在 Netlify 中导入项目
3. 配置构建设置:
   - Build command: `npm run build`
   - Publish directory: `dist`

### 静态托管

```bash
npm run build
# 将 dist 目录上传到你的托管服务
```

## 性能优化

- 使用 Vite 的快速 HMR
- 组件懒加载
- 图片优化 (使用 WebP 格式)
- CSS 按需加载
- Tree-shaking

## 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 许可

本项目仅供学习和个人使用。

## 贡献

欢迎提交 Issue 和 Pull Request！

## 未来改进

- [ ] 添加更多产品页面
- [ ] 集成 CMS 以便内容管理
- [ ] 添加购物车功能
- [ ] 多语言支持
- [ ] 暗色模式
- [ ] PWA 支持

---

Made with ❤️ inspired by Apple's design language
