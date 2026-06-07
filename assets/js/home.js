/* home.js — render dinâmico da Home */
(function () {
  function init() {
    const s = window.getSettings();
    const heroImg = document.getElementById("heroImg");
    if (heroImg) heroImg.src = s.heroImage;
    document.getElementById("heroEyebrow").textContent = s.heroEyebrow;
    document.getElementById("heroTitle").textContent = s.heroTitle;
    document.getElementById("heroSubtitle").textContent = s.heroSubtitle;
    document.getElementById("manifesto").textContent = s.manifesto;

    const ps = window.CLOSET_PRODUCTS;
    // categorias
    const cats = [
      { label:"Vestidos", img: (ps.find(p=>p.category==='Vestidos')||ps[0]).image },
      { label:"Tops",     img: (ps.find(p=>p.category==='Tops')||ps[0]).image },
      { label:"Jaquetas", img: (ps.find(p=>p.category==='Jaquetas')||ps[0]).image },
    ];
    document.getElementById("catsGrid").innerHTML = cats.map(c => `
      <a class="cat-card" href="produtos.html?q=${encodeURIComponent(c.label)}">
        <div class="img"><img src="${c.img}" alt="${c.label}" loading="lazy"></div>
        <p>${c.label}</p>
      </a>`).join("");

    // destaques (6 primeiros)
    document.getElementById("destaquesGrid").innerHTML =
      ps.slice(0,6).map(window.cardHTML).join("");
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
