/* Site behaviour. No build step, no dependencies.
   Header/footer, news, and publications are all rendered from /data/*.js */
(function () {
  "use strict";

  var S = window.SITE || {};
  var PUBS = window.PUBLICATIONS || [];
  var NEWS = window.NEWS || [];
  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var TYPE_LABEL = { journal: "Journal", conference: "Conference", preprint: "Preprint", abstract: "Abstract", thesis: "Thesis" };

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function contactHref() {
    return S.email ? "mailto:" + S.email : (S.links && S.links.harvard) || "#";
  }
  function fmtDate(d) {
    var p = String(d).split("-");
    if (p.length === 1) return p[0];
    return MONTHS[parseInt(p[1], 10) - 1] + " " + p[0];
  }

  /* ---------- header + footer ---------- */
  function currentPage() {
    var f = location.pathname.split("/").pop();
    return f === "" ? "index.html" : f;
  }

  function buildHeader() {
    var host = $("#site-header");
    if (!host) return;
    var page = currentPage();
    var links = (S.nav || []).map(function (n) {
      var cur = n.href === page ? ' aria-current="page"' : "";
      return '<a href="' + esc(n.href) + '"' + cur + ">" + esc(n.label) + "</a>";
    }).join("");
    host.className = "site-header";
    host.innerHTML =
      '<div class="wrap">' +
      '<a class="brand" href="index.html">' + esc(S.name) + "</a>" +
      '<button class="icon-btn menu-btn" type="button" aria-expanded="false" aria-controls="nav">Menu</button>' +
      '<nav class="nav" id="nav" aria-label="Main">' + links +
      '<button class="icon-btn" type="button" id="theme-toggle" aria-label="Switch between light and dark theme">Theme</button>' +
      "</nav></div>";

    var btn = $(".menu-btn", host), nav = $("#nav", host);
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    $("#theme-toggle", host).addEventListener("click", function () {
      var root = document.documentElement;
      var isDark = root.dataset.theme === "dark" ||
        (!root.dataset.theme && window.matchMedia("(prefers-color-scheme: dark)").matches);
      var next = isDark ? "light" : "dark";
      root.dataset.theme = next;
      try { localStorage.setItem("theme", next); } catch (e) { /* storage may be unavailable */ }
    });
  }

  function buildFooter() {
    var host = $("#site-footer");
    if (!host) return;
    var L = S.links || {};
    var items = [];
    if (S.email) items.push('<a href="mailto:' + esc(S.email) + '">Email</a>');
    if (L.harvard) items.push('<a href="' + esc(L.harvard) + '">Harvard profile</a>');
    if (L.scholar) items.push('<a href="' + esc(L.scholar) + '">Google Scholar</a>');
    if (L.github) items.push('<a href="' + esc(L.github) + '">GitHub</a>');
    if (L.linkedin) items.push('<a href="' + esc(L.linkedin) + '">LinkedIn</a>');
    if (L.orcid) items.push('<a href="' + esc(L.orcid) + '">ORCID</a>');
    host.className = "site-footer";
    host.innerHTML =
      '<div class="wrap"><div>\u00A9 ' + new Date().getFullYear() + " " + esc(S.name) +
      '. Views expressed here are my own.</div><div class="links">' + items.join("") + "</div></div>";
  }

  /* ---------- small bindings ---------- */
  function bindLinks() {
    $$("[data-contact]").forEach(function (a) { a.href = contactHref(); });
    $$("[data-link]").forEach(function (a) {
      var url = (S.links || {})[a.getAttribute("data-link")];
      if (url) { a.href = url; } else {
        var box = a.closest("[data-hide-if-empty]") || a;
        box.hidden = true;
      }
    });
    $$("[data-email-text]").forEach(function (el) {
      if (S.email) { el.textContent = S.email; el.href = "mailto:" + S.email; }
      else { var li = el.closest("[data-hide-if-empty]") || el; li.hidden = true; }
    });
  }

  function bindStats() {
    var peer = PUBS.filter(function (p) { return p.type === "journal" || p.type === "conference"; }).length;
    var awards = PUBS.filter(function (p) { return p.award; }).length;
    var map = { peer: peer, awards: awards, all: PUBS.length };
    $$("[data-stat]").forEach(function (el) {
      var k = el.getAttribute("data-stat");
      if (k in map) el.textContent = map[k];
    });
  }

  /* ---------- publication formatting ---------- */
  function authorsHtml(a) {
    return esc(a).replace(/D\. Duong-Tran(\*)?/g, "<b>$&</b>");
  }
  function pubHtml(p, opts) {
    opts = opts || {};
    var venue = "<em>" + esc(p.venue) + "</em>" + (p.detail ? ", " + esc(p.detail) : "") + ", " + esc(p.year) + ".";
    var tags = "";
    if (!opts.compact) tags += '<span class="kind">' + esc(TYPE_LABEL[p.type] || p.type) + "</span>";
    if (p.award) tags += '<span class="award">' + esc(p.award) + "</span>";
    var links = "";
    if (p.links) {
      links = '<span class="links">' + Object.keys(p.links).map(function (k) {
        return '<a href="' + esc(p.links[k]) + '">' + esc(k) + "</a>";
      }).join("") + "</span>";
    }
    var scholar = "https://scholar.google.com/scholar?q=" + encodeURIComponent('"' + p.title + '"');
    if (!p.links && !opts.compact) links = '<span class="links"><a href="' + scholar + '">Find on Scholar</a></span>';
    return '<li class="pub"><span class="t">' + esc(p.title) + "</span>" +
      '<span class="a">' + authorsHtml(p.authors) + "</span>" +
      '<span class="v">' + venue + "</span>" +
      ((tags || links) ? '<span class="tags">' + tags + links + "</span>" : "") + "</li>";
  }

  /* ---------- renderers ---------- */
  function renderNews() {
    $$("[data-news]").forEach(function (host) {
      var limit = parseInt(host.getAttribute("data-limit"), 10) || NEWS.length;
      var items = NEWS.slice().sort(function (a, b) { return String(b.date).localeCompare(String(a.date)); }).slice(0, limit);
      host.innerHTML = items.map(function (n) {
        var link = n.link ? ' <a class="link" href="' + esc(n.link) + '">' + esc(n.linkLabel || "Read more") + "</a>" : "";
        return '<li><time datetime="' + esc(n.date) + '">' + esc(fmtDate(n.date)) + "</time><p>" + esc(n.text) + link + "</p></li>";
      }).join("");
    });
  }

  function renderAwards() {
    $$("[data-awards]").forEach(function (host) {
      var items = PUBS.filter(function (p) { return p.award; })
        .sort(function (a, b) { return b.year - a.year; });
      host.innerHTML = items.map(function (p) {
        return '<li><span class="award">' + esc(p.award) + '</span><span class="title">' + esc(p.title) + "</span>" +
          '<span class="meta">' + esc(p.venue) + ", " + esc(p.year) + "</span></li>";
      }).join("");
    });
  }

  function renderFeatured() {
    $$("[data-featured]").forEach(function (host) {
      var items = PUBS.filter(function (p) { return p.featured; }).sort(function (a, b) { return b.year - a.year; });
      host.innerHTML = items.map(function (p) { return pubHtml(p, { compact: false }); }).join("");
    });
  }

  function renderThemePubs() {
    $$("[data-theme-pubs]").forEach(function (host) {
      var theme = host.getAttribute("data-theme-pubs");
      var limit = parseInt(host.getAttribute("data-limit"), 10) || 5;
      var items = PUBS.filter(function (p) {
        return (p.themes || []).indexOf(theme) > -1 && (p.type === "journal" || p.type === "conference");
      }).sort(function (a, b) { return (b.award ? 1 : 0) - (a.award ? 1 : 0) || b.year - a.year; }).slice(0, limit);
      host.innerHTML = items.map(function (p) { return pubHtml(p, { compact: true }); }).join("");
    });
  }

  function renderPubsPage() {
    var host = $("#pubs");
    if (!host) return;
    var state = { type: "all", q: "" };
    var chipsHost = $("#chips"), search = $("#search"), count = $("#count");

    var counts = { all: PUBS.length };
    PUBS.forEach(function (p) { counts[p.type] = (counts[p.type] || 0) + 1; });
    var order = ["all", "journal", "conference", "preprint", "abstract", "thesis"].filter(function (t) { return counts[t]; });
    chipsHost.innerHTML = order.map(function (t) {
      var label = t === "all" ? "All" : TYPE_LABEL[t];
      return '<button class="chip" type="button" data-type="' + t + '" aria-pressed="' + (t === "all") + '">' + label + " (" + counts[t] + ")</button>";
    }).join("");

    function draw() {
      var q = state.q.trim().toLowerCase();
      var list = PUBS.filter(function (p) {
        if (state.type !== "all" && p.type !== state.type) return false;
        if (!q) return true;
        return (p.title + " " + p.authors + " " + p.venue + " " + p.year + " " + (p.award || "")).toLowerCase().indexOf(q) > -1;
      }).sort(function (a, b) { return b.year - a.year; });

      count.textContent = list.length + " of " + PUBS.length + " shown";
      if (!list.length) { host.innerHTML = '<p class="empty">No publications match. Clear the search or choose \u201CAll\u201D.</p>'; return; }

      var out = "", year = null;
      list.forEach(function (p) {
        if (p.year !== year) {
          if (year !== null) out += "</ol>";
          year = p.year;
          out += '<h2 class="pub-year">' + esc(year) + '</h2><ol class="pub-list">';
        }
        out += pubHtml(p);
      });
      host.innerHTML = out + "</ol>";
    }

    chipsHost.addEventListener("click", function (e) {
      var b = e.target.closest(".chip");
      if (!b) return;
      state.type = b.getAttribute("data-type");
      $$(".chip", chipsHost).forEach(function (c) { c.setAttribute("aria-pressed", String(c === b)); });
      draw();
    });
    search.addEventListener("input", function () { state.q = search.value; draw(); });
    draw();
  }

  function init() {
    buildHeader();
    buildFooter();
    bindLinks();
    bindStats();
    renderNews();
    renderAwards();
    renderFeatured();
    renderThemePubs();
    renderPubsPage();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
