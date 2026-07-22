import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    id: '01',
    title: 'The Journey',
    type: '数字叙事 · 2025',
    tone: 'lavender',
    desc: '「你无法预见未来并将点滴串联，只有回顾时才能明白。」— 一个关于连接人生点滴的交互式叙事平台，让用户记录并发现生命中的隐秘线索。'
  },
  {
    id: '02',
    title: 'Leverage',
    type: '产品设计 · 2024',
    tone: 'blue',
    desc: '「杠杆是判断力的放大器。」— 帮助创作者通过媒体、代码和资本实现被动收入的工具平台，专注于长期价值而非短期回报。'
  },
  {
    id: '03',
    title: 'Compound',
    type: '品牌系统 · 2024',
    tone: 'peach',
    desc: '「所有巨大的回报都来自长期复利。」— 为一家投资教育机构打造的视觉系统，用极简设计传递耐心与时间的力量。'
  },
  {
    id: '04',
    title: 'Design DNA',
    type: '视觉实验 · 2024',
    tone: 'mint',
    desc: '「简单是终极的复杂。」— 一套探索极简主义边界的组件库，每个元素都经过无数次删减，只保留最核心的本质。'
  },
  {
    id: '05',
    title: 'Stillness',
    type: '互动体验 · 2023',
    tone: 'rose',
    desc: '「平静是超能力。」— 一个引导冥想和自我反思的数字空间，让用户在喧嚣世界中找到内心的安宁。'
  },
  {
    id: '06',
    title: 'Focus',
    type: '应用设计 · 2023',
    tone: 'sand',
    desc: '「成功需要说一千次不。」— 一款帮助用户识别并坚持最重要事务的专注工具，基于纳瓦尔的优先级哲学。'
  },
]

export default function App() {
  return <div className="site-shell">
    <header className="nav"><a className="brand" href="#top">姜.</a><nav>{['About','Work','Capabilities','Contact'].map(x => <a key={x} href={'#'+x.toLowerCase()}>{x}</a>)}</nav><a className="nav-contact" href="mailto:jwy777234@gmail.com">Let’s talk <ArrowUpRight size={15}/></a></header>
    <main id="top">
      <section className="hero section-pad"><div className="eyebrow">JIANG HAOYU · DESIGNER / CREATOR</div><h1>Ideas, made<br/><em>meaningful.</em></h1><div className="hero-bottom"><p>你好，我是姜皓宇。我用设计、技术与内容，创造清晰而有温度的数字体验。</p><a className="pill primary" href="#work">查看我的作品 <ArrowUpRight size={17}/></a></div><div className="hero-visual"><div className="visual-orb"/><span>YOUR PORTRAIT / PROJECT IMAGE</span></div></section>
      <section id="about" className="about section-pad"><div className="section-label">01 / 关于我</div><div className="about-grid"><h2>用细节表达<br/><span>独特观点。</span></h2><div><p className="lead">我关注让数字产品变得简单、有用，并且真正属于人的细节。</p><p>从最初的想法到最终的交互，我在策略、设计与技术之间工作，把有潜力的想法变成值得回访的体验。</p><a className="text-link" href="#contact">了解更多 <ArrowUpRight size={16}/></a></div></div></section>
      <section id="work" className="work section-pad"><div className="section-head"><div className="section-label">02 / 精选作品</div><a className="text-link" href="#contact">查看全部项目 <ArrowUpRight size={16}/></a></div><div className="project-grid">{projects.map((project)=><article className="project" key={project.id}><div className={'project-art '+project.tone}><span>{project.id}</span><div className="art-lines"/></div><div className="project-meta"><div><h3>{project.title}</h3><p>{project.type}</p></div><ArrowUpRight size={20}/></div><p className="project-desc">{project.desc}</p></article>)}</div></section>
      <section id="capabilities" className="capabilities section-pad"><div className="section-label">03 / 能力</div><div className="cap-grid"><h2>我能带来<br/><span>什么。</span></h2><div className="cap-list">{['品牌与视觉设计','数字产品设计','创意开发','动效与交互'].map((x,i)=><div className="cap-item" key={x}><span>0{i+1}</span><strong>{x}</strong><ArrowUpRight size={18}/></div>)}</div></div></section>
      <section id="contact" className="contact"><div className="section-label">04 / 联系我</div><h2>有好的想法？<br/><span>一起把它实现。</span></h2><a className="pill primary" href="mailto:jwy777234@gmail.com">jwy777234@gmail.com <ArrowUpRight size={17}/></a><div className="contact-foot"><span>© 2025 姜皓宇</span><span>欢迎合作 · 期待与你交流</span></div></section>
    </main>
  </div>
}
