/*! Medicina Fora — CMP + Consent Mode v2 + AdSense loader (só após consentimento) */
(function () {
  "use strict";

  var STORAGE_KEY = "mf_cookie_consent";
  var CONSENT_VERSION = 1;
  /** Publisher ID do AdSense. Vazio = loader inativo. */
  var ADSENSE_PUB_ID = 'ca-pub-2981303662156389';

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = window.gtag || gtag;

  gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
    wait_for_update: 500
  });

  function readConsent() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      var data = JSON.parse(raw);
      if (!data || data.v !== CONSENT_VERSION) return null;
      return data;
    } catch (e) {
      return null;
    }
  }

  function writeConsent(advertising) {
    var data = {
      v: CONSENT_VERSION,
      date: new Date().toISOString(),
      essential: true,
      advertising: !!advertising
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {}
    return data;
  }

  function applyConsent(advertising) {
    var state = advertising ? "granted" : "denied";
    gtag("consent", "update", {
      ad_storage: state,
      ad_user_data: state,
      ad_personalization: state,
      analytics_storage: state
    });
    if (advertising) {
      loadAdSense();
    }
  }

  var adsenseLoaded = false;
  function loadAdSense() {
    if (adsenseLoaded) return;
    if (!ADSENSE_PUB_ID || !/^ca-pub-\d+$/.test(ADSENSE_PUB_ID)) return;
    adsenseLoaded = true;
    var s = document.createElement("script");
    s.async = true;
    s.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" +
      encodeURIComponent(ADSENSE_PUB_ID);
    s.crossOrigin = "anonymous";
    document.head.appendChild(s);
  }

  function rootPrefix() {
    var script = document.querySelector('script[src*="cookies.js"]');
    if (!script) return "/";
    var src = script.getAttribute("src") || "";
    return src.replace(/js\/cookies\.js(\?.*)?$/, "");
  }

  function buildBanner() {
    var prefix = rootPrefix();
    var el = document.createElement("div");
    el.id = "mf-cookie-banner";
    el.className = "mf-cookie";
    el.setAttribute("role", "dialog");
    el.setAttribute("aria-modal", "false");
    el.setAttribute("aria-labelledby", "mf-cookie-title");
    el.setAttribute("aria-describedby", "mf-cookie-desc");
    el.hidden = true;
    el.innerHTML =
      '<div class="mf-cookie-inner">' +
      '<div class="mf-cookie-copy">' +
      '<p id="mf-cookie-desc">Usamos cookies essenciais e, se você permitir, cookies de publicidade (Google). ' +
      '<a href="' +
      prefix +
      'cookies/">Cookies</a> · <a href="' +
      prefix +
      'privacidade/">Privacidade</a></p>' +
      "</div>" +
      '<div class="mf-cookie-actions">' +
      '<button type="button" class="mf-cookie-btn" data-mf-action="accept">Aceitar</button>' +
      '<button type="button" class="mf-cookie-btn mf-cookie-btn--ghost" data-mf-action="reject">Recusar</button>' +
      '<button type="button" class="mf-cookie-link" data-mf-action="prefs">Preferências</button>' +
      "</div>" +
      '<div class="mf-cookie-prefs" id="mf-cookie-prefs" hidden>' +
      '<h2 id="mf-cookie-title">Preferências de cookies</h2>' +
      '<div class="mf-cookie-row">' +
      '<div class="mf-cookie-row-text"><strong>Essenciais</strong>' +
      "<span>Necessários para o site funcionar. Sempre ativos.</span></div>" +
      '<span class="mf-cookie-badge">Sempre on</span>' +
      "</div>" +
      '<div class="mf-cookie-row">' +
      '<div class="mf-cookie-row-text"><strong>Publicidade / anúncios</strong>' +
      "<span>Permite o Google AdSense mostrar anúncios.</span></div>" +
      '<label class="mf-cookie-toggle">' +
      '<input type="checkbox" id="mf-cookie-ad" name="advertising">' +
      '<span class="mf-cookie-toggle-ui" aria-hidden="true"></span>' +
      '<span class="sr-only">Ativar publicidade</span>' +
      "</label>" +
      "</div>" +
      '<div class="mf-cookie-prefs-actions">' +
      '<button type="button" class="mf-cookie-btn" data-mf-action="save">Salvar escolhas</button>' +
      '<button type="button" class="mf-cookie-btn mf-cookie-btn--ghost" data-mf-action="accept">Aceitar tudo</button>' +
      "</div>" +
      "</div>" +
      "</div>";
    document.body.appendChild(el);
    return el;
  }

  function showBanner(banner, openPrefs) {
    banner.hidden = false;
    document.body.classList.add("mf-cookie-open");
    if (openPrefs) {
      var prefs = banner.querySelector("#mf-cookie-prefs");
      if (prefs) prefs.hidden = false;
    }
  }

  function hideBanner(banner) {
    banner.hidden = true;
    document.body.classList.remove("mf-cookie-open");
    var prefs = banner.querySelector("#mf-cookie-prefs");
    if (prefs) prefs.hidden = true;
  }

  function decide(advertising, banner) {
    writeConsent(advertising);
    applyConsent(advertising);
    hideBanner(banner);
  }

  function bind(banner) {
    banner.addEventListener("click", function (ev) {
      var btn = ev.target.closest("[data-mf-action]");
      if (!btn || !banner.contains(btn)) return;
      var action = btn.getAttribute("data-mf-action");
      var prefs = banner.querySelector("#mf-cookie-prefs");
      var adToggle = banner.querySelector("#mf-cookie-ad");
      if (action === "accept") {
        decide(true, banner);
      } else if (action === "reject") {
        decide(false, banner);
      } else if (action === "prefs") {
        if (prefs) prefs.hidden = !prefs.hidden;
      } else if (action === "save") {
        decide(!!(adToggle && adToggle.checked), banner);
      }
    });

    document.addEventListener("click", function (ev) {
      var link = ev.target.closest(".mf-cookie-prefs-link, [data-mf-cookie-prefs]");
      if (!link) return;
      ev.preventDefault();
      var existing = readConsent();
      var adToggle = banner.querySelector("#mf-cookie-ad");
      if (adToggle) adToggle.checked = !!(existing && existing.advertising);
      showBanner(banner, true);
    });
  }

  function init() {
    var existing = readConsent();
    if (existing) {
      applyConsent(!!existing.advertising);
    }

    var banner = buildBanner();
    bind(banner);

    if (!existing) {
      showBanner(banner, false);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
