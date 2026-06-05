<?php get_header(); ?>
<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Closet Giovanna Barbalho — moda feminina</title>
<meta name="description" content="Peças femininas selecionadas com carinho.">
<link rel="stylesheet" href="assets/css/style.css">
<link rel="stylesheet" href="assets/css/responsive.css">
</head>
<body>
<div class="app">
  <div id="mountSidebar"></div>
  <main>
    <div id="mountTopbar"></div>

    <section class="hero">
      <img id="heroImg" alt="News da semana — Closet Giovanna Barbalho">
      <div class="overlay">
        <p class="eyebrow" id="heroEyebrow"></p>
        <h1 id="heroTitle"></h1>
        <p id="heroSubtitle"></p>
        <a href="produtos.html" class="btn">Ver novidades</a>
      </div>
    </section>

    <section class="cta-row">
      <div class="inner">
        <p class="tracking-luxury text-xs text-muted">Coleção outono · 2026</p>
        <div style="display:flex;gap:12px;flex-wrap:wrap">
          <a href="produtos.html" class="btn">Comprar agora</a>
          <a href="produtos.html" class="btn btn-accent">Ver novidades</a>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="section-head">
          <p class="eyebrow">Por categoria</p>
          <h2>Comprar por estilo</h2>
        </div>
        <div class="cats-grid" id="catsGrid"></div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="section-head"><p class="eyebrow">Edição limitada</p><h2>Destaques</h2></div>
        <div class="produtos-grid" id="destaquesGrid"></div>
      </div>
    </section>

    <section class="vantagens">
      <div class="grid">
        <div class="vantagem"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 3h15v13H1zM16 8h4l3 3v5h-7"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/></svg><div><div class="t">Entrega rápida</div><div class="d">Para todo o Brasil</div></div></div>
        <div class="vantagem"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg><div><div class="t">12x sem juros</div><div class="d">Em todas as peças</div></div></div>
        <div class="vantagem"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg><div><div class="t">Troca grátis</div><div class="d">Até 30 dias</div></div></div>
        <div class="vantagem"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg><div><div class="t">Compra segura</div><div class="d">Site protegido</div></div></div>
      </div>
    </section>

    <section class="manifesto">
      <div class="inner">
        <p class="eyebrow">Nosso manifesto</p>
        <p id="manifesto"></p>
      </div>
    </section>

    <div id="mountFooter"></div>
  </main>
</div>
<div id="mountExtras"></div>

<script src="<?php echo get_template_directory_uri(); ?>/assets/js/products.js"></script>

<script src="<?php echo get_template_directory_uri(); ?>/assets/js/main.js"></script>

<script src="<?php echo get_template_directory_uri(); ?>/assets/js/card.js"></script>

<script src="<?php echo get_template_directory_uri(); ?>/assets/js/home.js"></script>
<?php get_footer(); ?>

</body>
</html>

