// js/main.js

// Año dinámico
(function () {
  var y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());
})();

// Scroll suave con offset por header sticky (fallback)
(function () {
  var header = document.querySelector(".topbar");
  var offset = header ? header.offsetHeight + 10 : 0;

  document.addEventListener("click", function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;

    var id = a.getAttribute("href");
    if (!id || id === "#") return;

    var target = document.querySelector(id);
    if (!target) return;

    e.preventDefault();
    var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: top, behavior: "smooth" });
    history.pushState(null, "", id);
  });
})();
