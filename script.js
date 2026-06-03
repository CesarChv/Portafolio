/* ============================================================
   CESAR CHAVEZ · RPG PORTFOLIO — interacciones
   ============================================================ */
(function () {
  "use strict";

  /* ---- Reveal on scroll + disparo de barras ---- */
  var revealEls = document.querySelectorAll(".reveal");
  var fills = document.querySelectorAll(".bar-fill, .skill__fill");

  function fillBar(el) {
    if (el.dataset.done) return;
    var pct = el.getAttribute("data-pct");
    if (pct) {
      el.style.width = pct + "%";
      el.dataset.done = "1";
    }
  }

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          // anima las barras dentro del bloque revelado
          e.target.querySelectorAll &&
            e.target.querySelectorAll(".bar-fill, .skill__fill").forEach(fillBar);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.18, rootMargin: "0px 0px -40px 0px" });

    revealEls.forEach(function (el) { io.observe(el); });

    // observador independiente para barras que no estén envueltas en .reveal
    var ioBar = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { fillBar(e.target); ioBar.unobserve(e.target); }
      });
    }, { threshold: 0.4 });
    fills.forEach(function (el) { ioBar.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
    fills.forEach(fillBar);
  }

  /* ---- Menú móvil ---- */
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("navmenu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      menu.classList.toggle("open");
    });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { menu.classList.remove("open"); });
    });
  }

  /* ---- Glow del cursor sobre los paneles (parallax sutil de luz) ---- */
  var panels = document.querySelectorAll(".quest, .ach, .skill-cat, .stat");
  panels.forEach(function (p) {
    p.addEventListener("pointermove", function (ev) {
      var r = p.getBoundingClientRect();
      var x = ((ev.clientX - r.left) / r.width) * 100;
      var y = ((ev.clientY - r.top) / r.height) * 100;
      p.style.background =
        "radial-gradient(380px circle at " + x + "% " + y + "%, rgba(74,168,255,0.10), transparent 60%)," +
        "linear-gradient(180deg, rgba(20,39,90,0.55), rgba(12,22,51,0.78))";
    });
    p.addEventListener("pointerleave", function () {
      p.style.background = "";
    });
  });
})();
