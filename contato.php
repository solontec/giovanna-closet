<?php
/*
Template Name: Contato
*/
get_header();
?>
<body>
<div class="app">
  <div id="mountSidebar"></div>
  <main>
    <div id="mountTopbar"></div>
    <section><div class="container" style="max-width:640px">
      <h1>Fale com a gente</h1>
      <p class="text-muted">Tire dúvidas, peça personalizações ou consulte tamanhos.</p>
      <form class="form-card" style="max-width:none" onsubmit="event.preventDefault();alert('Mensagem enviada!');this.reset();">
        <div class="field"><label>Nome</label><input required></div>
        <div class="field"><label>E-mail</label><input type="email" required></div>
        <div class="field"><label>Mensagem</label><textarea rows="5" required></textarea></div>
        <button class="btn btn-block">Enviar mensagem</button>
      </form>
    </div></section>
    <div id="mountFooter"></div>
  </main>
</div>
<div id="mountExtras"></div>
<script src="<?php echo get_template_directory_uri(); ?>/assets/js/products.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/assets/js/main.js"></script>
</body>
<?php get_footer(); ?>