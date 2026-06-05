/* card.js — gera o HTML de um produto-card (reutilizado em várias páginas) */
window.cardHTML = function (p) {
  const installment = p.price / 12;
  const discount = p.originalPrice ? Math.round((1 - p.price / p.originalPrice) * 100) : 0;
  const swatches = (p.colors||[]).slice(0,3).map(c =>
    `<span class="swatch" title="${c.name}" style="background:${c.hex}"></span>`).join("");
  const extra = (p.colors||[]).length > 3 ? `<span style="font-size:10px;color:var(--muted-foreground)">+${p.colors.length-3}</span>` : "";
  const badge = discount > 0
    ? `<span class="badge">${discount}% OFF</span>`
    : (p.price > 299 ? `<span class="badge frete">Frete grátis</span>` : "");
  return `
    <div class="produto-card">
      <a href="produto.html?id=${p.id}" class="img-wrap">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        ${badge}
      </a>
      <div class="info">
        <div class="swatches">${swatches}${extra}</div>
        <a class="nome" href="produto.html?id=${p.id}">${p.name}</a>
        ${p.originalPrice ? `<div class="text-xs text-muted line-through">${brl(p.originalPrice)}</div>` : ""}
        <div class="preco">${brl(p.price)} ${discount>0?`<span class="text-xs text-sale" style="font-weight:600;margin-left:6px">${discount}% OFF</span>`:""}</div>
        <div class="parcelas">12 x de ${brl(installment)}</div>
        ${p.lastUnit ? `<div class="ultima">Atenção, última peça! Garanta a sua!</div>` : ""}
        <button class="btn btn-accent btn-sm" data-add="${p.id}">Comprar</button>
      </div>
    </div>`;
};

document.addEventListener("click", (e) => {
  const t = e.target.closest("[data-add]");
  if (!t) return;
  const p = window.CLOSET_PRODUCTS.find(x => x.id === t.dataset.add);
  if (!p) return;
  const size = (p.sizes && p.sizes[0]) || "Único";
  window.cart.add(p.id, size, 1);
  window.cart.open();
});
