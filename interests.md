---
layout: default
title: "Interests | Zhuoyue Zhang"
permalink: /interests/
description: "Personal interests, drawing, and independent explorations by Zhuoyue Zhang."
---

<section class="interests-preview" aria-label="Personal artwork preview">
  <div class="interests-scene">
    <div class="interests-ropes" aria-hidden="true">
      <canvas class="interests-rope-canvas" data-rope-canvas></canvas>
      <span class="art-rope art-rope--1"></span>
      <span class="art-rope art-rope--2"></span>
      <span class="art-rope art-rope--3"></span>
    </div>

    <div class="interests-art-grid">
      <figure class="art-piece postcard--wiesbaden-one" data-rope="0">
        <button class="art-piece__button" type="button" data-artwork data-time="2023.3" data-place="Wiesbaden" aria-label="View artwork: A watercolor-style travel sketch from Wiesbaden">
          <img src="{{ '/assets/interest-art-wiesbaden-one.jpg' | relative_url }}" width="1080" height="1080" alt="A watercolor-style travel sketch from Wiesbaden" loading="lazy">
        </button>
      </figure>
      <figure class="art-piece postcard--wiesbaden-two" data-rope="0">
        <button class="art-piece__button" type="button" data-artwork data-time="2023.3" data-place="Wiesbaden" aria-label="View artwork: A watercolor-style travel sketch of Wiesbaden architecture and flowers">
          <img src="{{ '/assets/interest-art-wiesbaden-two.jpg' | relative_url }}" width="1080" height="1080" alt="A watercolor-style travel sketch of Wiesbaden architecture and flowers" loading="lazy">
        </button>
      </figure>

      <figure class="art-piece art-piece--kraft postcard--arch" data-rope="1">
        <button class="art-piece__button" type="button" data-artwork data-time="2023.4" data-place="Munich" aria-label="View artwork: An architectural drawing of a memorial arch">
          <img src="{{ '/assets/interest-art-arch.jpg' | relative_url }}" width="1080" height="1080" alt="An architectural drawing of a memorial arch" loading="lazy">
        </button>
      </figure>
      <figure class="art-piece postcard--bridge" data-rope="1">
        <button class="art-piece__button" type="button" data-artwork data-time="2023.4" data-place="Munich" aria-label="View artwork: An illustrated railway bridge and surrounding landscape">
          <img src="{{ '/assets/interest-art-bridge.jpg' | relative_url }}" width="1080" height="1080" alt="An illustrated railway bridge and surrounding landscape" loading="lazy">
        </button>
      </figure>

      <figure class="art-piece art-piece--hero postcard--cities" data-rope="0">
        <button class="art-piece__button" type="button" data-artwork data-time="2023.3" data-place="Frankfurt" aria-label="View artwork: City photographs paired with colorful architectural drawings">
          <img src="{{ '/assets/interest-art-cities.jpg' | relative_url }}" width="1080" height="1440" alt="City photographs paired with colorful architectural drawings" loading="lazy">
        </button>
      </figure>
      <figure class="art-piece art-piece--hero postcard--shadow" data-rope="1">
        <button class="art-piece__button" type="button" data-artwork data-time="2023.4" data-place="Darmstadt" aria-label="View artwork: A muted illustration of a guitarist's shadow cast across a door">
          <img src="{{ '/assets/interest-art-guitar-shadow.jpg' | relative_url }}" width="1080" height="1439" alt="A muted illustration of a guitarist's shadow cast across a door" loading="lazy">
        </button>
      </figure>

      <figure class="art-piece art-piece--hero art-piece--kraft postcard--guitar" data-rope="2">
        <button class="art-piece__button" type="button" data-artwork data-time="2023.6" data-place="Darmstadt" aria-label="View artwork: A guitar decorated with an original illustrated character design">
          <img src="{{ '/assets/interest-art-guitar.jpg' | relative_url }}" width="1080" height="1440" alt="A guitar decorated with an original illustrated character design" loading="lazy">
        </button>
      </figure>
      <figure class="art-piece art-piece--hero art-piece--kraft postcard--wall" data-rope="1">
        <button class="art-piece__button" type="button" data-artwork data-time="2023.5" data-place="Darmstadt" aria-label="View artwork: A sunlit wall displaying drawings and mixed-media artwork">
          <img src="{{ '/assets/interest-art-wall.jpg' | relative_url }}" width="1080" height="1438" alt="A sunlit wall displaying drawings and mixed-media artwork" loading="lazy">
        </button>
      </figure>

      <figure class="art-piece postcard--wiesbaden-three" data-rope="2">
        <button class="art-piece__button" type="button" data-artwork data-time="2023.3" data-place="Wiesbaden" aria-label="View artwork: A watercolor-style travel sketch of Wiesbaden church architecture">
          <img src="{{ '/assets/interest-art-wiesbaden-three.jpg' | relative_url }}" width="1080" height="1080" alt="A watercolor-style travel sketch of Wiesbaden church architecture" loading="lazy">
        </button>
      </figure>
      <figure class="art-piece postcard--munich" data-rope="2">
        <button class="art-piece__button" type="button" data-artwork data-time="2023.4" data-place="Munich" aria-label="View artwork: A muted travel illustration of a figure in the Munich landscape">
          <img src="{{ '/assets/interest-art-munich.jpg' | relative_url }}" width="1080" height="1080" alt="A muted travel illustration of a figure in the Munich landscape" loading="lazy">
        </button>
      </figure>
    </div>

    <p class="interests-coming">Coming soon.</p>
  </div>

  <dialog class="art-lightbox" data-art-lightbox aria-label="Artwork viewer">
    <button class="art-lightbox__close" type="button" data-lightbox-close aria-label="Close artwork viewer">&times;</button>
    <button class="art-lightbox__nav art-lightbox__nav--previous" type="button" data-lightbox-previous aria-label="View previous artwork">&#8592;</button>
    <figure class="art-lightbox__figure">
      <img class="art-lightbox__image" data-lightbox-image src="" alt="">
      <figcaption class="art-lightbox__caption" data-lightbox-caption hidden></figcaption>
    </figure>
    <button class="art-lightbox__nav art-lightbox__nav--next" type="button" data-lightbox-next aria-label="View next artwork">&#8594;</button>
  </dialog>
</section>
