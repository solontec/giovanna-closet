<?php 
/*
Template Name: CMais-vendidos
*/

get_header(); ?>
<body>
<div class="app">
  <div id="mountSidebar"></div>
  <main>
    <div id="mountTopbar"></div>
    <section><div class="container">
      <div class="section-head"><p class="eyebrow">Top do closet</p><h2>Mais vendidos</h2></div>
      <div class="produtos-grid" id="grid"></div>
    </div></section>
    <div id="mountFooter"></div>
  </main>
</div>
<div id="mountExtras"></div>
<script src="assets/js/products.js"></script>
<script src="assets/js/main.js"></script>
<script src="assets/js/card.js"></script>
<script>
document.getElementById("grid").innerHTML =
  [...window.CLOSET_PRODUCTS].sort((a,b)=>(b.sold||0)-(a.sold||0)).map(window.cardHTML).join("");
</script>
</body>
<?php get_footer(); ?>