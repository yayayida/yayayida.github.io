---
layout: default
title: "Zhuoyue Zhang"
description: "MSc student at KTH working on urban mobility, geographic modeling, and human-AI systems."
---

<section class="hero hero--home">
  <div class="hero__copy">
    <h1>Zhuoyue Zhang</h1>
    <p class="hero__subtitle">Urban mobility · geographic modeling · human-AI systems</p>
    <div class="link-row" aria-label="Profile links">
      <a class="text-link" href="mailto:zhuoyuezhang@link.cuhk.edu.cn">Email</a>
      <a class="text-link" href="https://scholar.google.com/citations?user=KLOZubsAAAAJ&hl=zh-CN&oi=ao" target="_blank" rel="noopener">Google Scholar</a>
      <a class="text-link" href="https://www.linkedin.com/in/zhuoyue-z-a15059302/" target="_blank" rel="noopener">LinkedIn</a>
      <a class="text-link" href="{{ '/cv/' | relative_url }}">CV</a>
    </div>
  </div>

  <div class="hero__visual" aria-label="Portrait">
    <figure class="portrait-card">
      <img src="{{ '/assets/img/IMG_8109.JPG' | relative_url }}" alt="Zhuoyue Zhang portrait in a bookshop" loading="eager">
    </figure>
  </div>

  <div class="hero-glance" aria-label="Homepage overview">
    <a href="{{ '/research/' | relative_url }}">
      <span>Current</span>
      <strong>Urban mobility modeling</strong>
    </a>
    <a href="{{ '/projects/' | relative_url }}">
      <span>Selected</span>
      <strong>Research and spatial analysis</strong>
    </a>
    <a href="#places">
      <span>Path</span>
      <strong>Asia · Europe · North America</strong>
    </a>
  </div>
</section>

<section class="section section--featured">
  <div class="section-head">
    <div>
      <p class="eyebrow">Selected Work</p>
      <h2>Projects</h2>
    </div>
  </div>
  <div class="feature-grid">
    <a class="feature-card feature-card--large" href="{{ '/rwm-epr/' | relative_url }}">
      <img class="feature-card__image" src="{{ '/assets/rwm-epr-waiting-time.png' | relative_url }}" alt="RWM-EPR waiting-time distribution">
      <div class="feature-card__body">
        <span class="project-card__type">Ongoing Research</span>
        <h3>Recency-Weighted Memory EPR Model</h3>
        <p>Interpretable memory mechanisms for urban return behavior.</p>
        <div class="mini-tags">
          <span>Human mobility</span>
          <span>Interpretability</span>
          <span>Urban EPR</span>
        </div>
      </div>
    </a>
    <a class="feature-card" href="{{ '/mass-collab/' | relative_url }}">
      <img class="feature-card__image" src="{{ '/assets/MASS-operation.png' | relative_url }}" alt="MASS operation diagram">
      <div class="feature-card__body">
        <span class="project-card__type">Preprint</span>
        <h3>Human-AI Collaboration in MASS</h3>
        <p>Adaptive interfaces and trustworthy automation.</p>
      </div>
    </a>
    <a class="feature-card" href="{{ '/urban-expansion-moita/' | relative_url }}">
      <img class="feature-card__image" src="{{ '/assets/Scenario2.png' | relative_url }}" alt="Urban expansion scenario in Moita">
      <div class="feature-card__body">
        <span class="project-card__type">Urban Planning</span>
        <h3>Urban Expansion Scenario in Moita</h3>
        <p>Land-use scenarios and planning decisions.</p>
      </div>
    </a>
  </div>
  <div class="link-row">
    <a class="text-link" href="{{ '/projects/' | relative_url }}">All projects</a>
    <a class="text-link" href="{{ '/research/' | relative_url }}">Research page</a>
  </div>
</section>

<section class="section section--places" id="places">
  <div class="section-head">
    <div>
      <p class="eyebrow">Path</p>
      <h2>Places</h2>
    </div>
  </div>
  <div class="journey-map" aria-label="Academic path map">
    <div class="map-stage" aria-label="Continents with academic regions">
      <svg class="continent-map" viewBox="0 0 1000 430" role="img" aria-label="Continents map showing North America, Europe, and Asia">
        <path class="continent continent--america" d="M92 145 C132 82, 219 78, 279 111 C336 142, 354 196, 318 241 C281 287, 207 295, 151 268 C94 241, 55 195, 92 145 Z" />
        <path class="continent continent--america" d="M220 280 C261 297, 299 338, 275 380 C250 423, 185 407, 163 360 C145 321, 176 276, 220 280 Z" />
        <path class="continent continent--europe" d="M450 115 C496 78, 572 82, 617 124 C660 164, 633 222, 578 229 C523 236, 456 206, 434 165 C424 146, 430 129, 450 115 Z" />
        <path class="continent continent--asia" d="M608 116 C710 70, 854 88, 925 157 C974 204, 936 279, 852 286 C755 294, 660 253, 607 198 C576 166, 577 132, 608 116 Z" />
        <path class="continent continent--asia" d="M563 238 C605 253, 641 291, 622 338 C601 394, 522 380, 506 324 C492 280, 523 231, 563 238 Z" />
      </svg>
      <button class="journey-pin" data-place="america" style="--x: 23%; --y: 42%;" aria-label="North America"><span>1</span></button>
      <button class="journey-pin" data-place="europe" style="--x: 54%; --y: 30%;" aria-label="Europe"><span>5</span></button>
      <button class="journey-pin" data-place="asia" style="--x: 78%; --y: 50%;" aria-label="Asia"><span>2</span></button>
    </div>

    <div class="journey-list" aria-label="School timeline">
      <article class="journey-card" data-place-card="europe">
        <img src="{{ '/assets/logos/kth.svg' | relative_url }}" alt="KTH Royal Institute of Technology logo">
        <div><strong>KTH Royal Institute of Technology</strong><span>2024-26</span></div>
      </article>
      <article class="journey-card" data-place-card="europe">
        <img src="{{ '/assets/logos/ist.svg' | relative_url }}" alt="Instituto Superior Tecnico logo">
        <div><strong>Instituto Superior Tecnico</strong><span>2024-25</span></div>
      </article>
      <article class="journey-card" data-place-card="america">
        <img src="{{ '/assets/logos/northeastern.svg' | relative_url }}" alt="Northeastern University logo">
        <div><strong>Northeastern University</strong><span>2025</span></div>
      </article>
      <article class="journey-card" data-place-card="asia">
        <img src="{{ '/assets/logos/pku.svg' | relative_url }}" alt="Peking University logo">
        <div><strong>Peking University Shenzhen Graduate School</strong><span>Visiting Student and RA · 2024.7</span></div>
      </article>
      <article class="journey-card" data-place-card="europe">
        <img src="{{ '/assets/logos/rtu.svg' | relative_url }}" alt="Riga Technical University logo">
        <div><strong>Riga Technical University</strong><span>Summer School · 2025.8</span></div>
      </article>
      <article class="journey-card" data-place-card="europe">
        <img src="{{ '/assets/logos/tartu.svg' | relative_url }}" alt="University of Tartu logo">
        <div><strong>University of Tartu</strong><span>Summer School · 2025.8</span></div>
      </article>
      <article class="journey-card" data-place-card="asia">
        <img src="{{ '/assets/logos/cuhk.svg' | relative_url }}" alt="The Chinese University of Hong Kong, Shenzhen logo">
        <div><strong>The Chinese University of Hong Kong, Shenzhen</strong><span>2020-24</span></div>
      </article>
      <article class="journey-card" data-place-card="europe">
        <img src="{{ '/assets/logos/tu-darmstadt.svg' | relative_url }}" alt="Technical University of Darmstadt logo">
        <div><strong>Technical University of Darmstadt</strong><span>2023</span></div>
      </article>
    </div>
  </div>
</section>
