(() => {
  document.documentElement.classList.add("js-enabled");
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  const year = document.querySelector("#year");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (year) year.textContent = new Date().getFullYear();

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
      nav.classList.toggle("is-open", !isOpen);
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Abrir menu");
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
        nav.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Abrir menu");
        menuButton.focus();
      }
    });

    document.addEventListener("click", (event) => {
      if (menuButton.getAttribute("aria-expanded") === "true" &&
          !nav.contains(event.target) && !menuButton.contains(event.target)) {
        nav.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Abrir menu");
      }
    });

    window.matchMedia("(min-width: 801px)").addEventListener("change", () => {
      nav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Abrir menu");
    });
  }

  const revealItems = document.querySelectorAll(".reveal");
  revealItems.forEach((item) => {
    const delay = Number(item.dataset.delay || 0);
    item.style.setProperty("--delay", `${delay}ms`);
  });

  if ("IntersectionObserver" in window && !reducedMotion) {
    const observer = new IntersectionObserver((entries, instance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          instance.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  // O brilho do cursor é um detalhe sutil e só aparece em dispositivos com mouse.
  const glow = document.querySelector(".cursor-glow");
  if (glow && window.matchMedia("(pointer: fine)").matches && !reducedMotion) {
    window.addEventListener("pointermove", (event) => {
      glow.style.left = `${event.clientX}px`;
      glow.style.top = `${event.clientY}px`;
    }, { passive: true });
  }

  // Caso a foto ainda não tenha sido adicionada, exibe o espaço reservado do layout.
  document.querySelectorAll(".hero-photo img").forEach((image) => {
    const showPlaceholder = () => image.parentElement.classList.add("photo-placeholder");
    image.addEventListener("error", showPlaceholder, { once: true });
    if (image.complete && image.naturalWidth === 0) showPlaceholder();
  });
})();
