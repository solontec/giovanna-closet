<?php 

/*
Template Name: Login
*/
get_header(); ?>

<body>
<div class="app">
  <div id="mountSidebar"></div>
  <main>
    <div id="mountTopbar"></div>
    <form class="form-card" onsubmit="event.preventDefault();alert('Login simulado.');">
      <h1>Entrar</h1>
      <div class="field"><label>E-mail</label><input type="email" required></div>
      <div class="field"><label>Senha</label><input type="password" required></div>
      <button class="btn btn-block">Entrar</button>
      <p style="font-size:12px;margin-top:14px;text-align:center">Não tem conta? <a href="<?php echo home_url('/cadastro/'); ?>">Cadastre-se</a></p>
    </form>
    <div id="mountFooter"></div>
  </main>
</div>
<div id="mountExtras"></div>
<script src="<?php echo get_template_directory_uri(); ?>/assets/js/products.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/assets/js/main.js"></script>
</body>
<?php get_footer(); ?>