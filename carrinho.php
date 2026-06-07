<?php
/*
Template Name: Carrinho
*/
get_header();
?>
<body>
<div class="app">
  <div id="mountSidebar"></div>
  <main>
    <div id="mountTopbar"></div>
    <section><div class="container">
      <h1 style="margin-bottom:24px">Seu carrinho</h1>
      <div id="carrinhoPagina"></div>
      <div style="margin-top:20px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px">
       
        <a href="<?php echo home_url('/confirmacao/'); ?>" class="btn btn-outline">Continuar comprando</a>
        <div style="text-align:right">
          <div style="font-size:13px;color:var(--muted-foreground)">Subtotal</div>
          <div id="subtotalPag" style="font-size:22px;font-weight:600"></div>
          <a href="<?php echo home_url('/checkout/'); ?>" class="btn" style="margin-top:8px">
    Finalizar compra
</a>
        </div>
      </div>
    </div></section>
    <div id="mountFooter"></div>
  </main>
</div>
<div id="mountExtras"></div>
<script src="assets/js/products.js"></script> 
<script src="<?php echo get_template_directory_uri(); ?>/assets/js/main.js"></script>
<script>
function renderPagina() {
  const box = document.getElementById("carrinhoPagina");
  const sub = document.getElementById("subtotalPag");
  const items = window.cart.items;
  if (!items.length) {
    box.innerHTML = `<p style="color:var(--muted-foreground)">Seu carrinho está vazio. <a href="${home_url('/produtos/')}>Ver produtos</a></p>`;
    sub.textContent = brl(0); return;
  }
  box.innerHTML = items.map(it => {
    const p = window.CLOSET_PRODUCTS.find(x=>x.id===it.id); if (!p) return "";
    return `<div class="carrinho-item" style="grid-template-columns:90px 1fr auto;padding:16px 0">
      <img src="${p.image}" alt="${p.name}" style="height:110px;width:90px">
      <div>
        <div class="nome" style="font-size:14px">${p.name}</div>
        <div class="tamanho">Tamanho: ${it.size}</div>
        <div class="qty">
          <button data-act="dec" data-id="${p.id}" data-size="${it.size}">−</button>
          <span>${it.qty}</span>
          <button data-act="inc" data-id="${p.id}" data-size="${it.size}">+</button>
          <button data-act="rm" data-id="${p.id}" data-size="${it.size}" style="margin-left:8px;font-size:11px;color:var(--sale)">remover</button>
        </div>
      </div>
      <div class="preco" style="font-weight:600">${brl(p.price*it.qty)}</div>
    </div>`;
  }).join("");
  sub.textContent = brl(window.cart.subtotal());
}
const origRender = window.cart.render.bind(window.cart);
window.cart.render = function() { origRender(); renderPagina(); };
renderPagina();
</script>
</body>

<?php get_footer(); ?>