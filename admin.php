<?php get_header(); ?>
<body>
<div class="app">
  <div id="mountSidebar"></div>
  <main>
    <div id="mountTopbar"></div>
    <div class="admin-shell">
      <h1>Painel administrativo</h1>
      <p class="text-muted text-sm">Edite o conteúdo do site sem precisar mexer no código. Tudo é salvo neste navegador.</p>

      <div class="tabs" id="tabs">
        <button class="tab-btn active" data-tab="conteudo">Conteúdo</button>
        <button class="tab-btn" data-tab="banner">Banner</button>
        <button class="tab-btn" data-tab="whats">WhatsApp</button>
        <button class="tab-btn" data-tab="moto">Motoboy</button>
        <button class="tab-btn" data-tab="reset">Reset</button>
      </div>

      <div class="tab-panel active" data-panel="conteudo">
        <div class="form-card" style="max-width:none">
          <div class="field"><label>Eyebrow do banner</label><input id="f_heroEyebrow"></div>
          <div class="field"><label>Título principal</label><input id="f_heroTitle"></div>
          <div class="field"><label>Subtítulo</label><input id="f_heroSubtitle"></div>
          <div class="field"><label>Aviso de frete</label><input id="f_avisoFrete"></div>
          <div class="field"><label>Aviso de brinde</label><input id="f_avisoBrinde"></div>
          <div class="field"><label>Manifesto</label><textarea id="f_manifesto" rows="3"></textarea></div>
          <button class="btn" id="salvarConteudo">Salvar alterações</button>
        </div>
      </div>

      <div class="tab-panel" data-panel="banner">
        <div class="form-card" style="max-width:none">
          <p class="text-sm text-muted">URL da imagem do banner principal:</p>
          <div class="field"><input id="f_heroImage"></div>
          <img id="previewHero" style="max-height:200px;border-radius:6px;margin:10px 0">
          <button class="btn" id="salvarBanner">Salvar banner</button>
        </div>
      </div>

      <div class="tab-panel" data-panel="whats">
        <div class="form-card" style="max-width:none">
          <div class="field"><label>Número (com DDI, só dígitos)</label><input id="f_whatsappNumero"></div>
          <div class="field"><label>Mensagem padrão</label><textarea id="f_whatsappMensagem" rows="3"></textarea></div>
          <button class="btn" id="salvarWhats">Salvar WhatsApp</button>
        </div>
      </div>

      <div class="tab-panel" data-panel="moto">
        <div class="form-card" style="max-width:none">
          <div class="field"><label>Preço do motoboy (R$)</label><input id="f_motoboyPreco" type="number" step="0.01"></div>
          <div class="field"><label>Prazo de entrega</label><input id="f_motoboyPrazo"></div>
          <button class="btn" id="salvarMoto">Salvar motoboy</button>
        </div>
      </div>

      <div class="tab-panel" data-panel="reset">
        <div class="form-card" style="max-width:none">
          <p class="text-sm">Apagar todas as alterações de conteúdo, estoque e configurações (volta ao padrão).</p>
          <button class="btn btn-outline" id="btnResetar">Resetar tudo</button>
        </div>
      </div>
    </div>
    <div id="mountFooter"></div>
  </main>
</div>
<div id="mountExtras"></div>
<script src="assets/js/products.js"></script>
<script src="assets/js/main.js"></script>
<script src="assets/js/admin.js"></script>
</body>
<?php get_footer(); ?>