---
layout: default
title: "Zhuoyue Zhang"
---

<div style="display:flex; align-items:center; gap:30px; background:#fefcf7; padding:20px; border-radius:12px; box-shadow:0 4px 16px rgba(0,0,0,0.05);">

  <!-- 左边头像 -->
  <img src="/assets/img/IMG_8109.JPG" alt="Zhuoyue Zhang" width="180" style="border-radius:12px; box-shadow:0 4px 12px rgba(0,0,0,.12);">

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
    <div class="research-title">
      Explainable AI for Maritime Autonomous Surface Ships (MASS): Adaptive Interfaces and Trustworthy Human-AI Collaboration
      <a href="https://doi.org/10.48550/arXiv.2509.15959"
         target="_blank" rel="noopener noreferrer">[paper]</a>
    </div>
    <div class="research-authors"><strong>Zhuoyue Zhang</strong>, Haitong Xu.</div>
  </div>
</div>

  <div class="research-item">
    <div class="research-title">A Cognition-Enhanced Urban-EPR Framework for Prediction and Interpretation under Age Heterogeneity</div>
    <div class="research-authors"><strong>Zhuoyue Zhang</strong>, Qi Ryan Wang.</div>
  </div>

# Awards
<ul class="awards-list">
  <li>Institute Superior Tecnico (IST) 2025 <em>Research Assistant Scholarship</em></li>
  <li>European Institute of Innovation and Technology (EIT) Urban Mobility Master School 2024 <em>Merit Scholarship</em></li>
  <li>CUHK(SZ) 2021, 2022, 2023 <em>Shaw College Accomplishment Scholarship</em></li>
</ul>

# Education
<!-- ============ Education ============ -->
<section class="edu-section" id="education">

  <div class="edu-timeline">
    <!-- 1) KTH -->
    <div class="edu-item">
      <div class="edu-left">
        <div class="edu-date">2024–26</div>
        <div class="edu-logo" style="--zoom:1.08;">
          <img src="https://cdn.brandfetch.io/idCCf1QEQj/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" alt="KTH Royal Institute of Technology">
        </div>
      </div>
      <div class="edu-right">
        <div class="edu-degree">MSc, Transportation &amp; Mobility Management</div>
        <div class="edu-school">KTH Royal Institute of Technology</div>
        <div class="edu-location">Stockholm, Sweden</div>
      </div>
    </div>

    <!-- 2) Northeastern -->
    <div class="edu-item">
      <div class="edu-left">
        <div class="edu-date">2025</div>
        <div class="edu-logo" style="--zoom:1.15;">
          <img src="https://brand.northeastern.edu/wp-content/uploads/2025/01/seal-black.svg" alt="Northeastern University">
        </div>
      </div>
      <div class="edu-right">
        <div class="edu-degree">Visiting Student, Civil and Environmental Engineering</div>
        <div class="edu-school">Northeastern University</div>
        <div class="edu-location">Boston, USA</div>
      </div>
    </div>

    <!-- 3) IST (EIT) -->
    <div class="edu-item">
      <div class="edu-left">
        <div class="edu-date">2024–25</div>
        <div class="edu-logo" style="--zoom:1.08;">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/ULisboa_logo.svg/406px-ULisboa_logo.svg.png" alt="Instituto Superior Técnico">
        </div>
      </div>
      <div class="edu-right">
        <div class="edu-degree">EIT MSc Dual Degree Program, Transportation Systems</div>
        <div class="edu-school">Instituto Superior Técnico</div>
        <div class="edu-location">Lisbon, Portugal</div>
      </div>
    </div>

    <!-- 4) CUHK(SZ) -->
    <div class="edu-item">
      <div class="edu-left">
        <div class="edu-date">2020–24</div>
        <div class="edu-logo" style="--zoom:1.18;">
          <img src="https://images.seeklogo.com/logo-png/45/2/the-chinese-university-of-hong-kong-logo-png_seeklogo-456292.png" alt="CUHK Shenzhen">
        </div>
      </div>
      <div class="edu-right">
        <div class="edu-degree">BSc, Mathematics &amp; Applied Mathematics</div>
        <div class="edu-school">The Chinese University of Hong Kong, Shenzhen</div>
        <div class="edu-location">Shenzhen, China</div>
      </div>
    </div>

    <!-- 5) TU Darmstadt -->
    <div class="edu-item">
      <div class="edu-left">
        <div class="edu-date">2023</div>
        <div class="edu-logo" style="--zoom:1.08;">
          <img src="https://upload.wikimedia.org/wikipedia/de/thumb/d/d2/TU_Darmstadt_Athene.svg/648px-TU_Darmstadt_Athene.svg.png" alt="Technical University of Darmstadt">
        </div>
      </div>
      <div class="edu-right">
        <div class="edu-degree">Exchange Program, Mathematics</div>
        <div class="edu-school">Technical University of Darmstadt</div>
        <div class="edu-location">Darmstadt, Germany</div>
      </div>
    </div>
  </div>
</section>

<style>
/* ===== Education（日期在左，图标在竖线右侧） ===== */
.edu-section{ margin: 0 0 24px; }
.edu-section h2{ margin: 0 0 14px; }

/* 关键变量 */
.edu-timeline{
  --line-w: 3px;            /* 竖线粗细 */
  --line-color: #fbbf24;    /* 竖线颜色 */
  --logo-size: 56px;        /* 圆形直径 */
  --date-col: 64px;         /* 日期列宽 */
  --gap: 12px;              /* 日期与圆形的间距 */
  --line-clear: 6px;        /* 竖线距离圆形左边的空隙 */
  --left-col: calc(var(--date-col) + var(--gap) + var(--logo-size));
  position: relative;
}

/* 竖线：放在“日期与圆形之间”，并与圆形保持 line-clear 的距离 */
.edu-timeline::before{
  content:"";
  position:absolute;
  left: calc(var(--date-col) + var(--gap) - var(--line-clear) - var(--line-w));
  top:0; bottom:0;
  width: var(--line-w);
  background: var(--line-color);
  z-index: 0;
}

/* 每条记录：左栏(日期+圆形) | 右栏文字 */
.edu-item{
  display: grid;
  grid-template-columns: var(--left-col) 1fr;
  column-gap: 18px;
  padding: 18px 0;
}

/* 左栏拆两列：日期 | 圆形（圆形在竖线右侧） */
.edu-left{
  display: grid;
  grid-template-columns: var(--date-col) var(--logo-size);
  column-gap: var(--gap);
  align-items: center;
  justify-items: center;
  z-index: 1; /* 圆形在竖线上层 */
}

/* 日期样式（右对齐） */
.edu-date{
  margin: 0;
  text-align: right;
  font-size: .82rem;
  color: #6b7280;
  font-style: italic;
  line-height: 1;
}

/* 圆形 Logo */
.edu-logo{
  width: var(--logo-size);
  height: var(--logo-size);
  border-radius: 50%;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 2px 6px rgba(0,0,0,.08);
  display: flex; align-items: center; justify-content: center;
}
.edu-logo img{
  width: 100%; height: 100%;
  object-fit: contain;
  transform: scale(var(--zoom,1));
  transition: transform .2s ease;
}
.edu-logo:hover img{ transform: scale(calc(var(--zoom,1) * 1.06)); }

/* 右栏文字 */
.edu-degree{ font-weight: 700; font-size: 1.05rem; margin-bottom: 4px; }
.edu-school{ color: #333; margin-bottom: 2px; }
.edu-location{ color: #555; font-size: .9rem; font-style: italic; }

/* 移动端 */
@media (max-width:640px){
  .edu-timeline{ --logo-size:48px; --date-col:56px; --line-clear:5px; }
}
</style>

<hr>
<div class="small">Last updated: August 27, 2025</div>
