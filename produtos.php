<?php

/*
Template Name: Produtos
*/

get_header(); 

?>
<body>
<div class="app">
  <div id="mountSidebar"></div>
  <main>
    <div id="mountTopbar"></div>
    <section>
      <div class="container">
        <div class="section-head"><p class="eyebrow">Catálogo</p><h2 id="tituloProdutos">Todos os produtos</h2></div>
        <div class="produtos-grid" id="listaProdutos"></div>
      </div>
    </section>
    <div id="mountFooter"></div>
  </main>
</div>
<div id="mountExtras"></div>
<script src="<?php echo get_template_directory_uri(); ?>/assets/js/products.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/assets/js/main.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/assets/js/card.js"></script>
<script>
(function () {
  const q = (new URLSearchParams(location.search).get("q") || "").trim().toLowerCase();
  if (q) document.getElementById("tituloProdutos").textContent = `Resultados para "${q}"`;
  const lista = window.CLOSET_PRODUCTS.filter(p =>
    !q || p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
  const el = document.getElementById("listaProdutos");
  el.innerHTML = lista.length ? lista.map(window.cardHTML).join("")
    : `<p style="grid-column:1/-1;text-align:center;color:var(--muted-foreground)">Nenhuma peça encontrada.</p>`;
})();
</script>
</body>
<?php get_footer(); ?>