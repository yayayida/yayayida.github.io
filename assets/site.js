const mapPoints = document.querySelectorAll("[data-city]");
const mapLabel = document.querySelector("[data-map-label]");

document.querySelectorAll("img:not([loading])").forEach((image) => {
  image.loading = "lazy";
  image.decoding = "async";
});

if (mapPoints.length && mapLabel) {
  const activateCity = (point) => {
    mapPoints.forEach((item) => item.classList.remove("is-active"));
    point.classList.add("is-active");
    const x = Math.min(70, Math.max(34, Number(point.dataset.x)));
    const y = Math.min(82, Math.max(18, Number(point.dataset.y)));
    mapLabel.style.left = `${x}%`;
    mapLabel.style.top = `${y}%`;
    mapLabel.innerHTML = `<strong>${point.dataset.city}</strong><span>${point.dataset.note}</span>`;
  };

  mapPoints.forEach((point) => {
    point.addEventListener("mouseenter", () => activateCity(point));
    point.addEventListener("focus", () => activateCity(point));
  });

  activateCity(mapPoints[0]);
}

const revealItems = document.querySelectorAll(".card, .research-card, .project-card, .feature-card, .timeline-item, .research-experience-row, .education-row, .note-card, .city");

if ("IntersectionObserver" in window) {
  revealItems.forEach((item) => item.classList.add("reveal"));
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));
}

const interestsScene = document.querySelector(".interests-scene");
const artworkButtons = Array.from(document.querySelectorAll("[data-artwork]"));
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const ropeCanvas = document.querySelector("[data-rope-canvas]");

if (interestsScene && ropeCanvas && artworkButtons.length) {
  const ropeContext = ropeCanvas.getContext("2d");
  const ropeElements = Array.from(interestsScene.querySelectorAll(".art-rope"));
  const clamp = (value, minimum, maximum) => Math.min(maximum, Math.max(minimum, value));
  const artworkStates = artworkButtons.map((button, index) => {
    const card = button.closest(".art-piece");
    const metadata = [button.dataset.time, button.dataset.place].filter(Boolean);
    if (metadata.length) {
      button.setAttribute("aria-label", `${button.getAttribute("aria-label")}. ${metadata.join(", ")}`);
    }

    return {
      button,
      card,
      ropeIndex: Number(card.dataset.rope || 0),
      phase: index * 1.731 + .47,
      damping: 1,
      width: 0,
      xProgress: .5,
    };
  });

  if (ropeContext && ropeElements.length === 3) {
    interestsScene.classList.add("has-rope-canvas");
    let ropeLayouts = [];
    let sceneWidth = 0;
    let sceneHeight = 0;
    let gustStartedAt = performance.now() + 3100;
    let nextGustAt = gustStartedAt + 12500;
    let animationFrame;

    const catenary = (progress) => {
      const curve = 1.12;
      const edge = Math.cosh(curve) - 1;
      return 1 - (Math.cosh(curve * (progress * 2 - 1)) - 1) / edge;
    };

    const gustEnvelope = (time, progress, row) => {
      if (reducedMotion.matches) return 0;
      const travelDelay = progress * 1.35 + row * .16;
      const localTime = (time - gustStartedAt) / 1000 - travelDelay;
      if (localTime <= 0 || localTime >= 3.25) return 0;
      const riseAndFall = Math.sin(Math.PI * localTime / 3.25) ** 2;
      return riseAndFall * (.82 + .18 * Math.sin(localTime * 4.1 + row));
    };

    const ropePoint = (layout, progress, time, row) => {
      const x = layout.left + layout.width * progress;
      const slope = Math.tan(layout.turn) * (x - (layout.left + layout.width / 2));
      const gust = gustEnvelope(time, progress, row);
      const travelingRipple = gust * Math.sin(progress * Math.PI * 2.2 + time * .0042 + row) * 2.1;
      const breathing = reducedMotion.matches ? 0 : Math.sin(time * .00043 + row * 1.8) * .55;
      const y = layout.top + layout.sag * catenary(progress) + slope + breathing - gust * 2.2 + travelingRipple;
      return { x, y, gust };
    };

    const measureScene = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      sceneWidth = interestsScene.clientWidth;
      sceneHeight = interestsScene.clientHeight;
      ropeCanvas.width = Math.round(sceneWidth * ratio);
      ropeCanvas.height = Math.round(sceneHeight * ratio);
      ropeContext.setTransform(ratio, 0, 0, ratio, 0, 0);

      ropeLayouts = ropeElements.map((rope) => {
        const styles = getComputedStyle(rope);
        return {
          left: rope.offsetLeft,
          top: rope.offsetTop,
          width: rope.offsetWidth,
          sag: rope.offsetHeight,
          turn: parseFloat(styles.getPropertyValue("--rope-turn")) * Math.PI / 180,
        };
      });

      artworkStates.forEach((state) => {
        state.width = state.card.offsetWidth;
        const layout = ropeLayouts[state.ropeIndex];
        const center = state.card.offsetLeft + state.width / 2;
        state.xProgress = clamp((center - layout.left) / layout.width, 0, 1);
      });
    };

    const drawRopes = (time) => {
      ropeContext.clearRect(0, 0, sceneWidth, sceneHeight);
      ropeLayouts.forEach((layout, row) => {
        ropeContext.beginPath();
        for (let step = 0; step <= 96; step += 1) {
          const point = ropePoint(layout, step / 96, time, row);
          if (step === 0) ropeContext.moveTo(point.x, point.y);
          else ropeContext.lineTo(point.x, point.y);
        }
        ropeContext.setLineDash([]);
        ropeContext.lineWidth = 1.65;
        ropeContext.strokeStyle = "rgba(98, 70, 51, .78)";
        ropeContext.shadowColor = "rgba(255, 255, 255, .55)";
        ropeContext.shadowBlur = 1;
        ropeContext.shadowOffsetY = 1;
        ropeContext.stroke();

        ropeContext.beginPath();
        for (let step = 0; step <= 96; step += 1) {
          const point = ropePoint(layout, step / 96, time, row);
          if (step === 0) ropeContext.moveTo(point.x, point.y + 1.35);
          else ropeContext.lineTo(point.x, point.y + 1.35);
        }
        ropeContext.setLineDash([1.5, 5]);
        ropeContext.lineWidth = .8;
        ropeContext.strokeStyle = "rgba(166, 123, 86, .55)";
        ropeContext.shadowColor = "transparent";
        ropeContext.stroke();
      });
      ropeContext.setLineDash([]);
    };

    const positionArtworks = (time) => {
      artworkStates.forEach((state, index) => {
        const point = ropePoint(ropeLayouts[state.ropeIndex], state.xProgress, time, state.ropeIndex);
        const weight = clamp(state.width / 142, .34, 1);
        const lightness = 1.18 - weight * .48;
        const hovering = state.card.matches(":hover") || state.card.matches(":focus-within");
        const dampingTarget = hovering ? 0 : 1;
        state.damping += (dampingTarget - state.damping) * (hovering ? .055 : .032);

        const seconds = time / 1000;
        const quietSway = Math.sin(seconds * (.48 + index * .017) + state.phase) * (.46 * lightness)
          + Math.sin(seconds * (.91 + index * .011) + state.phase * 1.7) * (.16 * lightness);
        const gustSway = point.gust * lightness
          * (Math.sin(seconds * 3.1 + state.phase) * 2.2 + Math.sin(seconds * 1.35 + index) * 1.1);
        const movement = reducedMotion.matches ? 0 : state.damping;
        const windX = movement * (Math.sin(seconds * .62 + state.phase) * .55 * lightness + point.gust * 3.2 * lightness);
        const windY = movement * (Math.sin(seconds * .73 + state.phase * .8) * .35 - point.gust * 1.4 * lightness);
        const windTurn = movement * (quietSway + gustSway);
        const curlX = movement * (Math.sin(seconds * .56 + state.phase) * .35 + point.gust * .8) * lightness;
        const curlY = movement * (Math.sin(seconds * .71 + state.phase * 1.3) * .55 + point.gust * 1.3) * lightness;
        const flex = movement * Math.sin(seconds * 1.04 + state.phase * 2) * .07 * lightness;

        state.card.style.top = `${point.y + 12}px`;
        state.card.style.setProperty("--wind-x", `${windX.toFixed(3)}px`);
        state.card.style.setProperty("--wind-y", `${windY.toFixed(3)}px`);
        state.card.style.setProperty("--wind-turn", `${windTurn.toFixed(3)}deg`);
        state.card.style.setProperty("--paper-curl-x", `${curlX.toFixed(3)}deg`);
        state.card.style.setProperty("--paper-curl-y", `${curlY.toFixed(3)}deg`);
        state.card.style.setProperty("--paper-flex", `${flex.toFixed(3)}deg`);
      });
    };

    const animateGallery = (time) => {
      if (!reducedMotion.matches && time >= nextGustAt) {
        gustStartedAt = time;
        nextGustAt = time + 10500 + Math.random() * 6500;
      }
      drawRopes(time);
      positionArtworks(time);
      animationFrame = window.requestAnimationFrame(animateGallery);
    };

    measureScene();
    animationFrame = window.requestAnimationFrame(animateGallery);
    if ("ResizeObserver" in window) {
      const sceneObserver = new ResizeObserver(measureScene);
      sceneObserver.observe(interestsScene);
    } else {
      window.addEventListener("resize", measureScene);
    }

    reducedMotion.addEventListener("change", () => {
      window.cancelAnimationFrame(animationFrame);
      measureScene();
      animationFrame = window.requestAnimationFrame(animateGallery);
    });
  }
}

const artLightbox = document.querySelector("[data-art-lightbox]");

if (artLightbox && artworkButtons.length) {
  const lightboxImage = artLightbox.querySelector("[data-lightbox-image]");
  const lightboxCaption = artLightbox.querySelector("[data-lightbox-caption]");
  const closeButton = artLightbox.querySelector("[data-lightbox-close]");
  const previousButton = artLightbox.querySelector("[data-lightbox-previous]");
  const nextButton = artLightbox.querySelector("[data-lightbox-next]");
  let activeArtwork = 0;

  const renderArtwork = (index) => {
    activeArtwork = (index + artworkButtons.length) % artworkButtons.length;
    const artwork = artworkButtons[activeArtwork];
    const sourceImage = artwork.querySelector("img");
    const metadata = [artwork.dataset.time, artwork.dataset.place].filter(Boolean);

    lightboxImage.src = sourceImage.currentSrc || sourceImage.src;
    lightboxImage.alt = sourceImage.alt;
    lightboxCaption.textContent = metadata.join(" · ");
    lightboxCaption.hidden = metadata.length === 0;
  };

  const openLightbox = (index) => {
    renderArtwork(index);
    document.body.classList.add("has-art-lightbox");
    if (typeof artLightbox.showModal === "function") {
      artLightbox.showModal();
    } else {
      artLightbox.setAttribute("open", "");
    }
    closeButton.focus();
  };

  const closeLightbox = () => {
    if (typeof artLightbox.close === "function") {
      artLightbox.close();
    } else {
      artLightbox.removeAttribute("open");
      document.body.classList.remove("has-art-lightbox");
      artworkButtons[activeArtwork].focus();
    }
  };

  artworkButtons.forEach((button, index) => {
    button.addEventListener("click", () => openLightbox(index));
  });

  closeButton.addEventListener("click", closeLightbox);
  previousButton.addEventListener("click", () => renderArtwork(activeArtwork - 1));
  nextButton.addEventListener("click", () => renderArtwork(activeArtwork + 1));

  artLightbox.addEventListener("click", (event) => {
    if (event.target === artLightbox) closeLightbox();
  });

  artLightbox.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      closeLightbox();
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      renderArtwork(activeArtwork - 1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      renderArtwork(activeArtwork + 1);
    }
  });

  artLightbox.addEventListener("close", () => {
    document.body.classList.remove("has-art-lightbox");
    artworkButtons[activeArtwork].focus();
  });
}
