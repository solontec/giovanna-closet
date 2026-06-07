<?php
/*
Template Name: Cadastro
*/
get_header();
?>
<body>
<div class="app">
  <div id="mountSidebar"></div>
  <main>
    <div id="mountTopbar"></div>
    <form class="form-card" onsubmit="event.preventDefault();alert('Conta criada!');">
      <h1>Cadastre-se</h1>
      <div class="field"><label>Nome</label><input required></div>
      <div class="field"><label>E-mail</label><input type="email" required></div>
      <div class="field"><label>Senha</label><input type="password" required></div>
      <button class="btn btn-block">Criar conta</button>
    </form>
    <div id="mountFooter"></div>
  </main>
</div>
<div id="mountExtras"></div>
<script src="assets/js/products.js"></script>
<script src="assets/js/main.js"></script>
</body>
<?php get_footer(); ?>