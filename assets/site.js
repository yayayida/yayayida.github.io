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

const journeyPins = document.querySelectorAll("[data-place]");
const journeyCards = document.querySelectorAll("[data-place-card]");

if (journeyPins.length && journeyCards.length) {
  const setActivePlace = (place) => {
    journeyPins.forEach((pin) => {
      const isActive = pin.dataset.place === place;
      pin.classList.toggle("is-active", isActive);
      pin.setAttribute("aria-pressed", String(isActive));
    });
    journeyCards.forEach((card) => card.classList.toggle("is-active", card.dataset.placeCard === place));
  };

  journeyPins.forEach((pin) => {
    pin.addEventListener("mouseenter", () => setActivePlace(pin.dataset.place));
    pin.addEventListener("focus", () => setActivePlace(pin.dataset.place));
    pin.addEventListener("click", () => setActivePlace(pin.dataset.place));
  });

  journeyCards.forEach((card) => {
    card.addEventListener("mouseenter", () => setActivePlace(card.dataset.placeCard));
    card.addEventListener("focusin", () => setActivePlace(card.dataset.placeCard));
  });

  setActivePlace("kth");
}

const revealItems = document.querySelectorAll(".card, .research-card, .project-card, .feature-card, .timeline-item, .note-card, .city");

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
