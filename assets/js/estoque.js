/* estoque.js — CRUD de estoque por tamanho */
(function () {
  const ALL_SIZES = ["P","M","G","GG","Único"];

  function renderCard(p) {
    const sizes = ALL_SIZES.map(sz => {
      const qty = (p.stock && p.stock[sz] != null) ? p.stock[sz] : (p.sizes.includes(sz) ? 0 : null);
      if (qty === null) return "";
      return `<div class="estoque-size">
        <div class="lbl">${sz}</div>
        <div class="controls">
          <button data-id="${p.id}" data-sz="${sz}" data-act="-">−</button>
          <span id="qty-${p.id}-${sz}">${qty}</span>
          <button data-id="${p.id}" data-sz="${sz}" data-act="+">+</button>
        </div>
      </div>`;
    }).join("");
    return `<div class="estoque-card">
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <div class="preco">${brl(p.price)} · ${p.category}</div>
      <div class="estoque-sizes">${sizes}</div>
    </div>`;
  }

  function renderAll(filtro = "") {
    const f = filtro.trim().toLowerCase();
    const lista = window.CLOSET_PRODUCTS.filter(p =>
      !f || p.name.toLowerCase().includes(f) || p.category.toLowerCase().includes(f));
    document.getElementById("estoqueGrid").innerHTML = lista.map(renderCard).join("")
      || `<p style="color:var(--muted-foreground)">Nada encontrado.</p>`;
  }

  document.getElementById("filtroEstoque").addEventListener("input", (e) => renderAll(e.target.value));
  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-act]"); if (!t || !t.dataset.sz) return;
    const id = t.dataset.id, sz = t.dataset.sz;
    const p = window.CLOSET_PRODUCTS.find(x => x.id === id); if (!p) return;
    p.stock = p.stock || {};
    const cur = p.stock[sz] || 0;
    p.stock[sz] = Math.max(0, cur + (t.dataset.act === "+" ? 1 : -1));
    const span = document.getElementById(`qty-${id}-${sz}`);
    if (span) span.textContent = p.stock[sz];
    window.salvarProdutos();
  });

  renderAll();
})();
