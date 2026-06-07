/* home.js — WordPress */

(function () {

  function init() {

    const s = window.getSettings();

    const heroImg = document.getElementById("heroImg");

    if (heroImg) {
      heroImg.src = s.heroImage;
    }

    const heroEyebrow = document.getElementById("heroEyebrow");
    const heroTitle = document.getElementById("heroTitle");
    const heroSubtitle = document.getElementById("heroSubtitle");
    const manifesto = document.getElementById("manifesto");

    if (heroEyebrow) heroEyebrow.textContent = s.heroEyebrow;
    if (heroTitle) heroTitle.textContent = s.heroTitle;
    if (heroSubtitle) heroSubtitle.textContent = s.heroSubtitle;
    if (manifesto) manifesto.textContent = s.manifesto;

    const ps = window.CLOSET_PRODUCTS || [];

    if (!ps.length) return;

    const cats = [
      {
        label: "Vestidos",
        img: (ps.find(p => p.category === "Vestidos") || ps[0]).image
      },
      {
        label: "Tops",
        img: (ps.find(p => p.category === "Tops") || ps[0]).image
      },
      {
        label: "Jaquetas",
        img: (ps.find(p => p.category === "Jaquetas") || ps[0]).image
      }
    ];

    const catsGrid = document.getElementById("catsGrid");

    if (catsGrid) {

      catsGrid.innerHTML = cats.map(c => `

        <a class="cat-card"
           href="/wordpress/produtos/?q=${encodeURIComponent(c.label)}">

          <div class="img">
            <img
              src="${c.img}"
              alt="${c.label}"
              loading="lazy">
          </div>

          <p>${c.label}</p>

        </a>

      `).join("");

    }

    const destaquesGrid = document.getElementById("destaquesGrid");

    if (destaquesGrid) {

      destaquesGrid.innerHTML =
        ps.slice(0, 6)
          .map(window.cardHTML)
          .join("");

    }

  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();