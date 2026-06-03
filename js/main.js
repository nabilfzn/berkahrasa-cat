(function () {
  const WA_DEFAULT_MESSAGE = "Halo, saya ingin menanyakan layanan katering Berkah Rasa.";

  const $ = (selector, scope = document) => scope.querySelector(selector);

  function waLink(message = WA_DEFAULT_MESSAGE) {
    return `${CONTENT.brand.whatsappURL}?text=${encodeURIComponent(message)}`;
  }

  function waIcon() {
    return `
      <svg class="wa-icon" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
        <path fill="currentColor" d="M16 3.2c-6.95 0-12.6 5.47-12.6 12.2 0 2.18.6 4.28 1.74 6.12L3.2 28.8l7.48-1.9A12.94 12.94 0 0 0 16 28c6.95 0 12.6-5.47 12.6-12.2S22.95 3.2 16 3.2Zm0 22.56c-1.7 0-3.37-.43-4.84-1.24l-.42-.24-4.44 1.13 1.16-4.24-.28-.44a10.03 10.03 0 0 1-1.54-5.33C5.64 9.9 10.3 5.44 16 5.44s10.36 4.46 10.36 9.96S21.7 25.76 16 25.76Zm5.68-7.5c-.31-.15-1.84-.88-2.13-.98-.29-.1-.5-.15-.7.15-.21.3-.81.98-.99 1.18-.18.2-.36.22-.67.07-.31-.15-1.3-.46-2.47-1.48-.91-.79-1.53-1.77-1.71-2.07-.18-.3-.02-.46.14-.61.14-.13.31-.35.47-.52.16-.18.21-.3.31-.5.1-.2.05-.37-.03-.52-.08-.15-.7-1.64-.96-2.25-.25-.59-.51-.51-.7-.52h-.6c-.21 0-.55.07-.83.37-.29.3-1.1 1.04-1.1 2.54s1.13 2.95 1.29 3.15c.16.2 2.22 3.28 5.38 4.6.75.31 1.34.5 1.8.64.76.23 1.45.2 2 .12.61-.09 1.84-.73 2.1-1.43.26-.7.26-1.31.18-1.43-.08-.13-.29-.2-.6-.35Z"/>
      </svg>
    `;
  }

  function icon(name) {
    const icons = {
      leaf: '<path d="M25 4C14 4 7 10 7 21c0 4 3 7 7 7 10 0 14-12 14-24Z"/><path d="M7 25c4-8 9-12 18-17"/>',
      shield: '<path d="M16 3 27 7v8c0 7-4.7 11.2-11 14C9.7 26.2 5 22 5 15V7l11-4Z"/><path d="m11 16 3 3 7-8"/>',
      clock: '<circle cx="16" cy="16" r="11"/><path d="M16 9v8l5 3"/>',
      tag: '<path d="M4 17 17 4h9v9L13 26 4 17Z"/><circle cx="22" cy="9" r="1.5"/>'
    };
    return `<svg class="about__icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" focusable="false">${icons[name] || icons.leaf}</svg>`;
  }

  function imageMarkup({ src, alt, className = "", width = 900, height = 675, loading = "lazy", extra = "" }) {
    const loadingAttr = loading ? ` loading="${loading}"` : "";
    return `
      <img class="${className}" src="${src}" alt="${alt}" width="${width}" height="${height}"${loadingAttr} ${extra}>
    `;
  }

  function renderNavbar() {
    $("#navbar").innerHTML = `
      <div class="container navbar__inner">
        <a class="navbar__brand" href="#hero" aria-label="${CONTENT.brand.name}">
          <img class="navbar__logo" src="./images/logo.svg" alt="" width="40" height="40">
          <span>${CONTENT.brand.shortName}</span>
        </a>
        <button class="navbar__toggle" type="button" aria-label="Buka menu navigasi" aria-expanded="false">
          <span class="navbar__toggle-lines" aria-hidden="true"></span>
        </button>
        <div class="navbar__menu">
          <div class="navbar__links">
            ${CONTENT.nav.map((item) => `<a class="navbar__link" href="${item.href}">${item.label}</a>`).join("")}
          </div>
          <a class="btn-primary-wa" href="${waLink()}" target="_blank" rel="noopener noreferrer" aria-label="Hubungi Berkah Rasa Catering via WhatsApp">${waIcon()} WhatsApp</a>
        </div>
      </div>
    `;
  }

  function renderHero() {
    $("#hero").innerHTML = `
      <div class="container hero__grid">
        <div class="hero__content">
          <div class="hero__badge">${CONTENT.hero.badge}</div>
          <h1 class="hero__title" id="hero-title">${CONTENT.hero.headline}</h1>
          <p class="hero__lead">${CONTENT.hero.subheadline}</p>
          <div class="hero__actions">
            <a class="btn-primary-wa" href="${waLink()}" target="_blank" rel="noopener noreferrer" aria-label="Pesan Berkah Rasa Catering via WhatsApp">${waIcon()} ${CONTENT.hero.ctaPrimary}</a>
            <a class="btn-secondary" href="#layanan">${CONTENT.hero.ctaSecondary}</a>
          </div>
          <div class="hero__stats" aria-label="Ringkasan Berkah Rasa Catering">
            ${CONTENT.stats.map((item) => `<span>${item.number} ${item.label}</span>`).join("<span aria-hidden='true'>-</span>")}
          </div>
        </div>
        <div class="hero__image-frame">
          ${imageMarkup({ src: CONTENT.hero.image, alt: CONTENT.hero.imageAlt, className: "hero__image", width: 1200, height: 800, loading: "", extra: 'fetchpriority="high"' })}
        </div>
      </div>
    `;
  }

  function renderAbout() {
    $("#tentang").innerHTML = `
      <div class="container">
        <div class="about__intro anim-fadeup">
          <div>
            <p class="section-kicker">${CONTENT.about.kicker}</p>
            <h2 class="section-title" id="about-title">${CONTENT.about.title}</h2>
          </div>
          <div class="about__copy">${CONTENT.about.paragraphs.map((text) => `<p>${text}</p>`).join("")}</div>
        </div>
        <div class="about__features anim-stagger">
          ${CONTENT.about.features.map((item) => `
            <article class="about__card anim-fadeup">
              ${icon(item.icon)}
              <h3 class="about__card-title">${item.title}</h3>
              <p class="about__card-text">${item.text}</p>
            </article>
          `).join("")}
        </div>
      </div>
    `;
  }

  function renderServices(activeIndex = 0) {
    const active = CONTENT.services.items[activeIndex];
    $("#layanan").innerHTML = `
      <div class="container">
        <p class="section-kicker anim-fadeup">${CONTENT.services.kicker}</p>
        <h2 class="section-title anim-fadeup" id="services-title">${CONTENT.services.title}</h2>
        <p class="section-lead anim-fadeup">${CONTENT.services.lead}</p>
        <div class="services__tab-row" data-active-index="${activeIndex}">
          <button class="services__nav-button" type="button" data-service-nav="prev" aria-label="Lihat format sajian sebelumnya">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <div class="services__tabs" role="tablist" aria-label="Pilihan layanan katering">
            ${CONTENT.services.items.map((item, index) => `
              <button class="services__tab ${index === activeIndex ? "is-active" : ""}" type="button" role="tab" aria-selected="${index === activeIndex}" data-service-index="${index}">${item.name}</button>
            `).join("")}
          </div>
          <button class="services__nav-button" type="button" data-service-nav="next" aria-label="Lihat format sajian berikutnya">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
        <article class="services__panel anim-fadeup" role="tabpanel">
          <div class="services__media">
            ${imageMarkup({ src: active.image, alt: active.imageAlt })}
          </div>
          <div class="services__content">
            <h3 class="services__name">${active.name}</h3>
            <p class="services__description">${active.description}</p>
            <ul class="services__menu">
              ${active.menu.map((menu) => `<li class="services__menu-item"><span class="services__menu-name">${menu.name}</span><span class="services__menu-price">${menu.price}</span></li>`).join("")}
            </ul>
            <a class="btn-primary-wa" href="${waLink(active.waText)}" target="_blank" rel="noopener noreferrer" aria-label="Tanya paket ${active.name} via WhatsApp">${waIcon()} Tanya Paket ${active.name}</a>
          </div>
        </article>
      </div>
    `;
  }

  function renderGallery() {
    $("#galeri").innerHTML = `
      <div class="container">
        <p class="section-kicker anim-fadeup">${CONTENT.gallery.kicker}</p>
        <h2 class="section-title anim-fadeup" id="gallery-title">${CONTENT.gallery.title}</h2>
        <p class="section-lead anim-fadeup">${CONTENT.gallery.lead}</p>
        <div class="gallery__grid anim-stagger">
          ${CONTENT.gallery.items.map((item) => `
            <a class="gallery__item anim-fadeup" href="${item.image}" aria-label="Lihat foto ${item.label}">
              ${imageMarkup({ src: item.image, alt: item.alt })}
              <span class="gallery__caption">${item.label}</span>
            </a>
          `).join("")}
        </div>
      </div>
    `;
  }

  function renderTestimonials() {
    $("#testimoni").innerHTML = `
      <div class="container">
        <p class="section-kicker anim-fadeup">${CONTENT.testimonials.kicker}</p>
        <h2 class="section-title anim-fadeup" id="testimonials-title">${CONTENT.testimonials.title}</h2>
        <p class="section-lead anim-fadeup">${CONTENT.testimonials.lead}</p>
        <div class="testimonials__grid anim-stagger">
          ${CONTENT.testimonials.items.map((item) => `
            <article class="testimonials__card anim-fadeup">
              <div class="testimonials__stars" aria-label="Rating 5 dari 5">*****</div>
              <p class="testimonials__quote">${item.quote}</p>
              <p class="testimonials__name">${item.name}</p>
              <p class="testimonials__meta">${item.event} - ${item.city}</p>
            </article>
          `).join("")}
        </div>
      </div>
    `;
  }

  function renderCoverage() {
    $("#area").innerHTML = `
      <div class="container coverage__grid">
        <div>
          <p class="section-kicker anim-fadeup">${CONTENT.coverage.kicker}</p>
          <h2 class="section-title anim-fadeup" id="coverage-title">${CONTENT.coverage.title}</h2>
          <p class="section-lead anim-fadeup">${CONTENT.coverage.lead}</p>
          <div class="coverage__areas">
            ${CONTENT.coverage.areas.map((area) => `<article class="coverage__area anim-fadeup"><h3>${area.city}</h3><p>${area.text}</p></article>`).join("")}
          </div>
        </div>
        <div class="coverage__map anim-fadeup" aria-hidden="true">
          <svg viewBox="0 0 520 360" fill="none">
            <path d="M90 235c60-70 120-72 172-40 57 36 103 14 160-42" stroke="var(--color-primary-300)" stroke-width="20" stroke-linecap="round"/>
            <circle cx="176" cy="206" r="52" fill="var(--color-primary-700)"/>
            <circle cx="352" cy="150" r="58" fill="var(--color-accent-500)"/>
            <path d="M176 172c20 0 36 16 36 36 0 26-36 62-36 62s-36-36-36-62c0-20 16-36 36-36Z" fill="var(--color-neutral-50)"/>
            <circle cx="176" cy="207" r="11" fill="var(--color-primary-700)"/>
            <path d="M352 111c22 0 40 18 40 40 0 29-40 69-40 69s-40-40-40-69c0-22 18-40 40-40Z" fill="var(--color-neutral-50)"/>
            <circle cx="352" cy="151" r="12" fill="var(--color-accent-500)"/>
          </svg>
        </div>
      </div>
    `;
  }

  function renderFaq() {
    $("#faq").innerHTML = `
      <div class="container">
        <p class="section-kicker anim-fadeup">${CONTENT.faq.kicker}</p>
        <h2 class="section-title anim-fadeup" id="faq-title">${CONTENT.faq.title}</h2>
        <p class="section-lead anim-fadeup">${CONTENT.faq.lead}</p>
        <div class="faq__list">
          ${CONTENT.faq.items.map((item, index) => `
            <article class="faq__item anim-fadeup ${index === 0 ? "is-open" : ""}">
              <button class="faq__question" type="button" aria-expanded="${index === 0}" aria-controls="faq-answer-${index}">
                <span>${item.question}</span>
                <svg class="faq__chevron" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
              </button>
              <div class="faq__answer" id="faq-answer-${index}">
                <div class="faq__answer-inner"><p>${item.answer}</p></div>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    `;
  }

  function renderCta() {
    $("#kontak").innerHTML = `
      <div class="container cta-final__inner anim-fadeup">
        <svg class="cta-final__decor" viewBox="0 0 120 120" fill="none" aria-hidden="true">
          <path d="M16 88c34-7 55-30 64-70 20 25 18 57-6 78-18 16-40 18-58-8Z" fill="currentColor"/>
        </svg>
        <h2 class="cta-final__title" id="cta-title">${CONTENT.cta.title}</h2>
        <p class="cta-final__text">${CONTENT.cta.text}</p>
        <a class="btn-primary-wa" href="${waLink()}" target="_blank" rel="noopener noreferrer" aria-label="Konsultasi via WhatsApp">${waIcon()} ${CONTENT.cta.button}</a>
      </div>
    `;
  }

  function renderFooter() {
    $("#footer").innerHTML = `
      <div class="container">
        <div class="footer__grid">
          <div>
            <p class="footer__brand">${CONTENT.brand.name}</p>
            <p class="footer__tagline">${CONTENT.brand.tagline}</p>
            <p class="footer__text">${CONTENT.footer.description}</p>
          </div>
          <div>
            <h2 class="footer__heading">Navigasi</h2>
            <ul class="footer__links">${CONTENT.nav.map((item) => `<li><a href="${item.href}">${item.label}</a></li>`).join("")}</ul>
          </div>
          <div>
            <h2 class="footer__heading">Kontak</h2>
            <ul class="footer__contacts">
              <li><a href="${waLink()}" target="_blank" rel="noopener noreferrer">WA ${CONTENT.brand.phoneDisplay}</a></li>
              <li><a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">${CONTENT.brand.instagram}</a></li>
              <li><a href="mailto:${CONTENT.brand.email}">${CONTENT.brand.email}</a></li>
              <li>${CONTENT.brand.address}</li>
            </ul>
          </div>
        </div>
        <div class="footer__bottom">${CONTENT.footer.copyright}</div>
      </div>
    `;
  }

  function bindInteractions() {
    const navbar = $("#navbar");
    const toggle = $(".navbar__toggle");
    const links = document.querySelectorAll(".navbar__link, .footer__links a, .btn-secondary");

    function closeNav() {
      navbar.classList.remove("is-open");
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    }

    toggle.addEventListener("click", () => {
      const isOpen = navbar.classList.toggle("is-open");
      document.body.classList.toggle("nav-open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    window.addEventListener("scroll", () => {
      navbar.classList.toggle("scrolled", window.scrollY > 80);
    }, { passive: true });

    links.forEach((link) => link.addEventListener("click", closeNav));

    $("#layanan").addEventListener("click", (event) => {
      const tab = event.target.closest("[data-service-index]");
      const nav = event.target.closest("[data-service-nav]");
      if (!tab && !nav) return;
      const current = Number($(".services__tab-row", $("#layanan")).dataset.activeIndex);
      const nextIndex = nav
        ? (nav.dataset.serviceNav === "next"
          ? (current + 1) % CONTENT.services.items.length
          : (current - 1 + CONTENT.services.items.length) % CONTENT.services.items.length)
        : Number(tab.dataset.serviceIndex);
      renderServices(nextIndex);
      bindServiceObserver();
      syncActiveServiceTab();
    });

    $("#faq").addEventListener("click", (event) => {
      const button = event.target.closest(".faq__question");
      if (!button) return;
      const item = button.closest(".faq__item");
      const isOpen = item.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  }

  function observeAnimations(scope = document) {
    const targets = scope.querySelectorAll(".anim-fadeup");
    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    targets.forEach((el) => observer.observe(el));
  }

  function bindServiceObserver() {
    observeAnimations($("#layanan"));
  }

  function syncActiveServiceTab() {
    const activeTab = $(".services__tab.is-active", $("#layanan"));
    if (activeTab && typeof activeTab.scrollIntoView === "function") {
      activeTab.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }

  function renderSchema() {
    $("#local-business-schema").textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: CONTENT.brand.name,
      description: CONTENT.footer.description,
      telephone: CONTENT.brand.phoneDisplay,
      email: CONTENT.brand.email,
      address: CONTENT.brand.address,
      areaServed: CONTENT.brand.serviceAreas,
      url: "./"
    });
  }

  function init() {
    renderNavbar();
    renderHero();
    renderAbout();
    renderServices();
    renderGallery();
    renderTestimonials();
    renderCoverage();
    renderFaq();
    renderCta();
    renderFooter();
    $("#floating-wa").href = waLink();
    $("#floating-wa").innerHTML = waIcon();
    renderSchema();
    bindInteractions();
    observeAnimations();
    syncActiveServiceTab();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
