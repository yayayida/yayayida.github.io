---
layout: default
title: "Zhuoyue Zhang"
---

<div style="display:flex; align-items:center; gap:30px; background:#fefcf7; padding:20px; border-radius:12px; box-shadow:0 4px 16px rgba(0,0,0,0.05);">

  <!-- 左边头像 -->
  <img src="/assets/img/IMG_8112.jpeg" alt="Zhuoyue Zhang" width="180" style="border-radius:12px; box-shadow:0 4px 12px rgba(0,0,0,.12);">

  <!-- 右边文字 -->
  <div>
    <h1 style="margin-bottom:6px;">Zhuoyue Zhang</h1>
    <p style="margin:0; font-size:1.05rem; color:#444;">MSc Student, Geographic Modeling and Simulation & Urban Informatics<br>
    KTH Royal Institute of Technology, Stockholm, Sweden</p> 

    <!-- 联系方式 -->
    <p style="margin-top:12px; margin-bottom:0; font-size:0.95rem;">
      <a href="mailto:zhuoyuez@kth.se" style="margin-right:18px; text-decoration:none; color:#222; font-weight:500;">
        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/maildotru.svg"
             alt="Email" width="18" style="vertical-align: middle; margin-right:6px;">
        zhuoyuez@kth.se
      </a>
      <a href="https://www.linkedin.com/in/zhuoyue-z-a15059302/" target="_blank" style="text-decoration:none; color:#0077b5; font-weight:500;">
        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
             alt="LinkedIn" width="18" style="vertical-align: middle; margin-right:6px; filter: invert(34%) sepia(98%) saturate(2313%) hue-rotate(186deg) brightness(92%) contrast(95%);">
        LinkedIn
      </a>
    </p>
  </div>

</div>

<!-- Nav -->
<style>
  .navbar{
    display:grid;
    grid-template-columns: repeat(4, minmax(0,1fr)); /* 四个按钮均分整行 */
    gap:16px;
    margin:20px 0 28px;
  }
  .navbar a{
    display:block;
    text-align:center;
    padding:14px 0;
    border:2px solid #fcd34d;       /* 金黄描边 */
    border-radius:12px;
    background:#fef3c7;              /* 浅黄底 */
    color:#b45309 !important;        /* 深琥珀字色 */
    text-decoration:none !important; /* 去掉下划线 */
    font-weight:700;
    font-size:1.05rem;
    line-height:1;
    transition:all .2s ease;
  }
  .navbar a:hover{
  background: linear-gradient(90deg, #fcd34d, #fbbf24);
  transform: translateY(-2px);
  box-shadow:0 4px 12px rgba(249,115,22,.25);
}
  /* 小屏自适应：手机上两列 */
  @media (max-width: 640px){
    .navbar{ grid-template-columns: repeat(2, minmax(0,1fr)); }
  }
</style>

<div class="navbar">
  <a href="#research">Research</a>
  <a href="#awards">Awards</a>
  <a href="#education">Education</a>
</div>
<div class="edu-left">
  <div class="edu-logo" style="--zoom:1.05;">
    <img src="https://cdn.brandfetch.io/idCCf1QEQj/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" alt="KTH">
  </div>
  <div class="edu-date">2024–</div>
</div>
<div class="edu-left">
  <div class="edu-logo" style="--zoom:1.35;">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/TU_Darmstadt_Logo.svg/1599px-TU_Darmstadt_Logo.svg.png" alt="TU Darmstadt">
  </div>
  <div class="edu-date">2023</div>
</div>

<style>
/* Research 卡片 */
.research-list {
  display: grid;
  gap: 16px;
  margin: 12px 0 28px;
}
.research-item {
  background: #fffdf8;
  border: 1px solid #fcd34d;
  border-radius: 10px;
  padding: 14px 18px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  transition: transform .2s ease, box-shadow .2s ease;
}
.research-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.12);
}
.research-title {
  font-weight: 700;
  color: #111;
  margin-bottom: 6px;
}
.research-authors {
  font-size: 0.95rem;
  color: #444;
}
.research-authors strong {
  color: #b45309; /* 深琥珀色，高亮自己名字 */
}

/* Awards 列表 */
.awards-list {
  list-style: none;
  padding-left: 0;
  margin: 12px 0 28px;
}
.awards-list li {
  padding: 8px 12px;
  margin-bottom: 10px;
  border-left: 4px solid #fcd34d;
  background: #fffef9;
  border-radius: 6px;
  font-size: 0.95rem;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
}
.awards-list li::before {
  content: "🏆 ";
}
</style>

# About me
I am an MSc student in the **Department of Civil and Architecture Engineering** at **KTH Royal Institute of Technology**, enrolled in a dual-degree program that included my first year at **Instituto Superior Técnico** in Lisbon. I am passionate about understanding and predicting human mobility behavior in the context of transportation systems and the geographic social environment. My research integrates reinforcement learning, urban informatics, and geographic modeling and simulation to uncover patterns of movement and decision-making.  

I worked as a research assistant at <a href="http://www.centec.tecnico.ulisboa.pt/en/index.aspx" target="_blank" style="color:#d97706; font-weight:600;">CENTEC</a> at Instituto Superior Técnico, supervised by <a href="https://scholar.google.com/citations?user=zrsb6awAAAAJ&hl=en" target="_blank" style="color:#1d4ed8; font-weight:600;">Prof. Haitong Xu</a>. I also spent a wonderful summer at the <a href="https://sites.google.com/view/uirlab/home?authuser=0" target="_blank" style="color:#d97706; font-weight:600;">Ryan Wang Lab</a> at Northeastern University in Boston, collaborating with <a href="https://coe.northeastern.edu/people/wang-qi/" target="_blank" style="color:#1d4ed8; font-weight:600;">Prof. Qi Ryan Wang</a>. My recent interests focus on **Exploration and Preference Return Models**.  

# Research

### Ongoing Works
<div class="research-list">
  <div class="research-item">
    <div class="research-title">Automation Transparency and Adaptive Design Paradigms for Maritime Autonomous Surface Ships</div>
    <div class="research-authors"><strong>Zhuoyue Zhang</strong>, Haitong Xu, Carlos Guedes Soares.</div>
  </div>

  <div class="research-item">
    <div class="research-title">A Cognition-Enhanced Urban-EPR Framework for Prediction and Interpretation under Age Heterogeneity</div>
    <div class="research-authors"><strong>Zhuoyue Zhang</strong>, Qi Ryan Wang.</div>
  </div>
</div>

# Awards
<ul class="awards-list">
  <li>Institute Superior Tecnico (IST) 2025 <em>Research Assistant Scholarship</em></li>
  <li>European Institute of Innovation and Technology (EIT) Urban Mobility Master School 2024 <em>Merit Scholarship</em></li>
  <li>CUHK(SZ) 2021, 2022, 2023 <em>Shaw College Accomplishment Scholarship</em></li>
</ul>

# Education

<style>
  /* === 更稳的时间轴布局 === */
  .edu-timeline{
    --gutter: 100px;                /* 左栏宽度（Logo+日期） */
    --line-x: calc(var(--gutter)/2);/* 竖线居中到左栏 */
    position: relative;
    margin: 20px 0;
  }
  .edu-timeline::before{
    content:"";
    position:absolute;
    left: calc(var(--line-x) - 1.5px);
    top:0; bottom:0;
    width:3px; background:#fbbf24;
    z-index: 0;                     /* 竖线在最底层 */
  }

  .edu-item{
    display:grid;
    grid-template-columns: var(--gutter) 1fr;
    column-gap: 18px;
    padding: 18px 0;
    position: relative;
  }

  /* 左列：圆形 Logo + 日期 */
  .edu-left{
    display:flex;
    flex-direction:column;
    align-items:center;
    z-index: 1;                     /* 保证在竖线上层 */
  }
  .edu-logo{
    width:56px; height:56px;
    border-radius:50%;
    overflow:hidden;                /* 强制圆形裁切 */
    background:#fff;
    box-shadow:0 2px 6px rgba(0,0,0,.08);
    display:flex; align-items:center; justify-content:center;
  }
  .edu-logo img{
    width:100%; height:100%;
    object-fit:contain;             /* 各校 Logo 比例不同也不变形 */
    transform: scale(var(--zoom, 1));/* 可选：单项放大 */
    transition: transform .2s ease;
  }
  .edu-logo:hover img{ transform: scale(calc(var(--zoom,1) * 1.06)); }

  .edu-date{
    margin-top:6px;
    font-size:.82rem;
    color:#6b7280;
    font-style:italic;
    line-height:1;
    text-align:center;
    padding: 2px 4px;               /* 给日期一点“呼吸感”，避免看起来紧贴竖线 */
  }

  /* 右列文字 */
  .edu-degree{font-weight:700;font-size:1.05rem;margin-bottom:4px}
  .edu-school{color:#333;margin-bottom:2px}
  .edu-location{color:#555;font-size:.9rem;font-style:italic}

  /* 移动端微调 */
  @media (max-width:640px){
    .edu-timeline{ --gutter: 88px; }
    .edu-logo{ width:48px; height:48px; }
  }
</style>



<hr>
<div class="small">Last updated: August 27, 2025</div>
