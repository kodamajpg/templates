/**
 * ============================================================
 *  MAIN.JS — Plantilla Madre Simple
 * ============================================================
 *  Inyecta dinámicamente los datos de CONFIG en el DOM.
 *  También gestiona: scroll spy del header, acordeón FAQ,
 *  animaciones de entrada, formulario con Web3Forms y
 *  botón flotante de WhatsApp.
 * ============================================================
 */

document.addEventListener("DOMContentLoaded", () => {

  /* ── 1. HELPERS ─────────────────────────────────────────── */
  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  function setAttr(selector, value, attr = "textContent") {
    const el = $(selector);
    if (!el) return;
    if (attr === "textContent") { el.textContent = value; }
    else if (attr === "href")   { el.href = value; }
    else if (attr === "src")    { el.src = value; }
    else                        { el.setAttribute(attr, value); }
  }

  /* ── 2. INYECCIÓN DE DATOS GLOBALES ─────────────────────── */
  // Título de la página
  document.title = `${CONFIG.businessName} | ${CONFIG.tagline}`;
  $$("[data-config='businessName']").forEach(el => el.textContent = CONFIG.businessName);

  // Header: logo, teléfono
  setAttr("[data-config='logoText']",  `${CONFIG.logoIcon} ${CONFIG.businessName}`);
  const headerCta = $("[data-config='headerCta']");
  if (headerCta) {
    headerCta.href        = `tel:${CONFIG.phoneCall.replace(/\s/g, "")}`;
    headerCta.textContent = CONFIG.phoneCall;
  }

  // Web3Forms key en el formulario oculto
  const w3fInput = $("input[name='access_key']");
  if (w3fInput) w3fInput.value = CONFIG.web3formsKey;

  /* ── 3. NAVEGACIÓN ──────────────────────────────────────── */
  const navList = $("#nav-list");
  if (navList) {
    navList.innerHTML = CONFIG.navLinks.map(link => `
      <li>
        <a class="nav__link" href="${link.href}">${link.label}</a>
      </li>
    `).join("");
  }

  /* ── 4. HERO SECTION ────────────────────────────────────── */
  setAttr("#hero-headline",    CONFIG.hero.headline);
  setAttr("#hero-subheadline", CONFIG.hero.subheadline);
  setAttr("#hero-cta-btn",     CONFIG.hero.ctaLabel);

  // Trust badges bajo el headline
  const trustRow = $("#hero-trust-badges");
  if (trustRow) {
    trustRow.innerHTML = CONFIG.hero.trustBadges.map(b => `
      <span class="trust-badge"><span class="trust-badge__icon">${b.icon}</span> ${b.text}</span>
    `).join("");
  }

  // Formulario: poblar selects
  function populateSelect(id, options, placeholder) {
    const sel = $(`#${id}`);
    if (!sel) return;
    sel.innerHTML = `<option value="" disabled selected>${placeholder}</option>` +
      options.map(o => `<option value="${o}">${o}</option>`).join("");
  }
  populateSelect("form-service",   CONFIG.hero.formFields.serviceOptions,   "Tipo de servicio");
  populateSelect("form-size",      CONFIG.hero.formFields.sizeOptions,      "Tamaño del jardín");
  populateSelect("form-frequency", CONFIG.hero.formFields.frequencyOptions, "Frecuencia");

  /* ── 5. ESTADÍSTICAS DE CONFIANZA ───────────────────────── */
  const statsGrid = $("#trust-stats-grid");
  if (statsGrid) {
    statsGrid.innerHTML = CONFIG.trustStats.map(s => `
      <div class="trust-stat">
        <span class="trust-stat__value">${s.value}</span>
        <span class="trust-stat__label">${s.label}</span>
      </div>
    `).join("");
  }

  /* ── 6. SERVICIOS ───────────────────────────────────────── */
  const servicesGrid = $("#services-grid");
  if (servicesGrid) {
    servicesGrid.innerHTML = CONFIG.services.map(s => `
      <article class="service-card" id="service-${s.id}" aria-label="${s.title}">
        ${s.badge ? `<span class="service-card__badge">${s.badge}</span>` : ""}
        <div class="service-card__img-wrap">
          <img src="${s.image}" alt="${s.imageAlt}" loading="lazy" class="service-card__img" />
        </div>
        <div class="service-card__body">
          <h3 class="service-card__title">${s.title}</h3>
          <p class="service-card__desc">${s.description}</p>
          <a href="#contacto" class="service-card__link" aria-label="Saber más sobre ${s.title}">
            Saber más <span aria-hidden="true">→</span>
          </a>
        </div>
      </article>
    `).join("");
  }

  /* ── 7. TESTIMONIOS ─────────────────────────────────────── */
  const testimonialsGrid = $("#testimonials-grid");
  if (testimonialsGrid) {
    testimonialsGrid.innerHTML = CONFIG.testimonials.map(t => `
      <article class="testimonial-card" aria-label="Reseña de ${t.name}">
        <div class="testimonial-card__stars" aria-label="${t.stars} estrellas">
          ${"★".repeat(t.stars)}${"☆".repeat(5 - t.stars)}
        </div>
        <blockquote class="testimonial-card__text">"${t.text}"</blockquote>
        <footer class="testimonial-card__author">
          <div class="testimonial-card__avatar" aria-hidden="true">${t.avatar}</div>
          <div>
            <strong class="testimonial-card__name">${t.name}</strong>
            <span class="testimonial-card__role">${t.role}</span>
          </div>
        </footer>
      </article>
    `).join("");
  }

  /* ── 8. FEATURE SECTION ─────────────────────────────────── */
  setAttr("#feature-headline",    CONFIG.feature.headline);
  setAttr("#feature-subheadline", CONFIG.feature.subheadline);
  const featureImg = $("#feature-img");
  if (featureImg) {
    featureImg.src = CONFIG.feature.image;
    featureImg.alt = CONFIG.feature.imageAlt;
  }
  const featureHighlights = $("#feature-highlights");
  if (featureHighlights) {
    featureHighlights.innerHTML = CONFIG.feature.highlights.map(h => `
      <div class="feature-highlight">
        <span class="feature-highlight__icon">${h.icon}</span>
        <div>
          <span class="feature-highlight__label">${h.label}</span>
          <span class="feature-highlight__value">${h.value}</span>
        </div>
      </div>
    `).join("");
  }
  const featureCtaBtn = $("#feature-cta");
  if (featureCtaBtn) {
    featureCtaBtn.href        = CONFIG.feature.ctaHref;
    featureCtaBtn.textContent = CONFIG.feature.ctaLabel;
  }

  /* ── 9. FAQ ACCORDION ───────────────────────────────────── */
  setAttr("#faq-title",    CONFIG.faqTitle);
  setAttr("#faq-subtitle", CONFIG.faqSubtitle);

  const faqContainer = $("#faq-list");
  if (faqContainer) {
    faqContainer.innerHTML = CONFIG.faqs.map((faq, i) => `
      <div class="faq-item" id="faq-item-${i}">
        <button
          class="faq-item__trigger"
          aria-expanded="false"
          aria-controls="faq-answer-${i}"
          id="faq-trigger-${i}"
        >
          <span>${faq.question}</span>
          <span class="faq-item__icon" aria-hidden="true">+</span>
        </button>
        <div
          class="faq-item__answer"
          role="region"
          id="faq-answer-${i}"
          aria-labelledby="faq-trigger-${i}"
          hidden
        >
          <p>${faq.answer}</p>
        </div>
      </div>
    `).join("");

    // Accordion toggle logic (accesible)
    $$(".faq-item__trigger", faqContainer).forEach(btn => {
      btn.addEventListener("click", () => {
        const expanded  = btn.getAttribute("aria-expanded") === "true";
        const answerId  = btn.getAttribute("aria-controls");
        const answerEl  = $(`#${answerId}`);
        const icon      = $(".faq-item__icon", btn);

        // Cierra todos los demás
        $$(".faq-item__trigger", faqContainer).forEach(b => {
          b.setAttribute("aria-expanded", "false");
          const aId = b.getAttribute("aria-controls");
          const aEl = $(`#${aId}`);
          if (aEl) aEl.hidden = true;
          const ic = $(".faq-item__icon", b);
          if (ic) ic.textContent = "+";
          b.closest(".faq-item").classList.remove("is-open");
        });

        // Abre el actual si estaba cerrado
        if (!expanded) {
          btn.setAttribute("aria-expanded", "true");
          if (answerEl) answerEl.hidden = false;
          if (icon) icon.textContent = "−";
          btn.closest(".faq-item").classList.add("is-open");
        }
      });
    });
  }

  /* ── 10. FOOTER ─────────────────────────────────────────── */
  setAttr("#footer-business-name", CONFIG.businessName);
  setAttr("#footer-description",   CONFIG.footer.description);
  setAttr("#footer-copyright",     CONFIG.footer.copyright);
  setAttr("#footer-email",         CONFIG.email);
  setAttr("#footer-email",         `mailto:${CONFIG.email}`, "href");
  setAttr("#footer-phone",         CONFIG.phoneCall);
  setAttr("#footer-phone",         `tel:${CONFIG.phoneCall.replace(/\s/g, "")}`, "href");
  setAttr("#footer-address",       CONFIG.address);

  const legalLinks = $("#footer-legal");
  if (legalLinks) {
    legalLinks.innerHTML = CONFIG.footer.legalLinks.map(l =>
      `<a href="${l.href}" class="footer__legal-link">${l.label}</a>`
    ).join(" · ");
  }

  const socialLinks = $("#footer-social");
  if (socialLinks) {
    socialLinks.innerHTML = `
      <a href="${CONFIG.social.instagram}" class="footer__social-link" target="_blank" rel="noopener" aria-label="Instagram">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
      </a>
      <a href="${CONFIG.social.facebook}" class="footer__social-link" target="_blank" rel="noopener" aria-label="Facebook">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
      </a>
      <a href="${CONFIG.social.youtube}" class="footer__social-link" target="_blank" rel="noopener" aria-label="YouTube">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
      </a>
    `;
  }

  /* ── 11. WHATSAPP FLOTANTE ──────────────────────────────── */
  const waBtn = $("#whatsapp-float");
  if (waBtn) {
    const waUrl = `https://wa.me/${CONFIG.phoneWhatsApp}?text=${encodeURIComponent(CONFIG.whatsAppMessage)}`;
    waBtn.href       = waUrl;
    waBtn.target     = "_blank";
    waBtn.rel        = "noopener noreferrer";
    waBtn.setAttribute("aria-label", "Contactar por WhatsApp");
  }

  /* ── 12. CTA CIERRE ─────────────────────────────────────── */
  setAttr("#closing-cta-title", `Schedule your ${CONFIG.businessName.split(" ")[0].toLowerCase()} service today`);
  const closingCtaBtn = $("#closing-cta-btn");
  if (closingCtaBtn) {
    const waUrl = `https://wa.me/${CONFIG.phoneWhatsApp}?text=${encodeURIComponent(CONFIG.whatsAppMessage)}`;
    closingCtaBtn.href = waUrl;
    closingCtaBtn.target = "_blank";
    closingCtaBtn.rel    = "noopener noreferrer";
  }

  /* ── 13. HEADER STICKY (scroll spy) ────────────────────── */
  const header = $("header.header");
  const scrollThreshold = 60;

  window.addEventListener("scroll", () => {
    if (window.scrollY > scrollThreshold) {
      header.classList.add("header--scrolled");
    } else {
      header.classList.remove("header--scrolled");
    }
  }, { passive: true });

  /* ── 14. MOBILE NAV TOGGLE ──────────────────────────────── */
  const hamburger = $("#nav-hamburger");
  const navMenu   = $("#nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("nav__menu--open");
      hamburger.setAttribute("aria-expanded", isOpen);
      hamburger.querySelector(".hamburger__icon").textContent = isOpen ? "✕" : "☰";
    });

    // Cierra el menú al hacer clic en un enlace
    $$(".nav__link", navMenu).forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("nav__menu--open");
        hamburger.setAttribute("aria-expanded", "false");
        hamburger.querySelector(".hamburger__icon").textContent = "☰";
      });
    });
  }

  /* ── 15. SCROLL SUAVE ───────────────────────────────────── */
  $$("a[href^='#']").forEach(a => {
    a.addEventListener("click", e => {
      const target = document.getElementById(a.getAttribute("href").slice(1));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  /* ── 16. INTERSECTION OBSERVER (Animaciones de entrada) ─── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

  $$(".animate-on-scroll").forEach(el => observer.observe(el));

  /* ── 17. FORMULARIO — Web3Forms ─────────────────────────── */
  const heroForm = $("#hero-form");
  if (heroForm) {
    heroForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const btn = heroForm.querySelector("button[type='submit']");
      const originalText = btn.textContent;
      btn.textContent = "Enviando…";
      btn.disabled    = true;

      try {
        const data = new FormData(heroForm);
        const res  = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body:   data,
        });
        const json = await res.json();

        if (json.success) {
          showFormMessage(heroForm, "✅ ¡Solicitud enviada! Te contactamos en menos de 24h.", "success");
          heroForm.reset();
        } else {
          throw new Error(json.message || "Error al enviar");
        }
      } catch (err) {
        showFormMessage(heroForm, `❌ ${err.message}. Llámanos directamente.`, "error");
      } finally {
        btn.textContent = originalText;
        btn.disabled    = false;
      }
    });
  }

  function showFormMessage(form, msg, type) {
    let msgEl = form.querySelector(".form-feedback");
    if (!msgEl) {
      msgEl = document.createElement("p");
      msgEl.className = "form-feedback";
      form.appendChild(msgEl);
    }
    msgEl.textContent   = msg;
    msgEl.dataset.type  = type;
    setTimeout(() => { msgEl.textContent = ""; }, 6000);
  }

  /* ── 18. COUNTER ANIMATION ──────────────────────────────── */
  function animateCounter(el) {
    const target   = parseFloat(el.dataset.target);
    const suffix   = el.dataset.suffix || "";
    const duration = 1800;
    const start    = performance.now();

    function update(now) {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3);
      const current  = Math.floor(eased * target);
      el.textContent = current + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        $$("[data-target]", entry.target).forEach(animateCounter);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  const statsSection = $("#trust-stats-grid");
  if (statsSection) counterObserver.observe(statsSection);

});
