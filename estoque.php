<?php
/*
Template Name: Estoque
*/
get_header();
?>
<body>
<div class="app">
  <div id="mountSidebar"></div>
  <main>
    <div id="mountTopbar"></div>
    <div class="admin-shell">
      <h1>Estoque</h1>
      <div style="margin-bottom:16px;display:flex;gap:10px;flex-wrap:wrap">
        <input id="filtroEstoque" placeholder="Buscar peça..." style="flex:1;min-width:200px;padding:10px;border:1px solid var(--border);border-radius:6px">
      </div>
      <div class="estoque-grid" id="estoqueGrid"></div>
    </div>
    <div id="mountFooter"></div>
  </main>
</div>
<div id="mountExtras"></div>
<script src="assets/js/products.js"></script>
<script src="assets/js/main.js"></script>
<script src="assets/js/estoque.js"></script>
</body>
<?php get_footer(); ?>