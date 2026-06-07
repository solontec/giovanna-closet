<?php
/*
Template Name: Checkout
*/
get_header();
?>

<body>
<div class="app">
  <div id="mountSidebar"></div>
  <main>
    <div id="mountTopbar"></div>
    <section><div class="container" style="max-width:760px">
      <h1>Finalizar compra</h1>
      <form id="formCheckout" class="form-card" style="max-width:none">
        <h2 style="font-size:16px;margin-top:0">Dados de entrega</h2>
        <div class="field"><label>Nome completo</label><input required name="nome"></div>
        <div class="field"><label>Telefone</label><input required name="tel"></div>
        <div class="field"><label>Endereço</label><input required name="end"></div>
        <div class="field"><label>CEP</label><input required name="cep" maxlength="9"></div>

        <h2 style="font-size:16px;margin-top:24px">Entrega</h2>
        <div class="field">
          <label><input type="radio" name="entrega" value="correios" checked> Correios — R$ 22,90</label><br>
          <label><input type="radio" name="entrega" value="motoboy"> Motoboy — R$ <span id="precoMoto"></span> (mesmo dia)</label>
        </div>

        <h2 style="font-size:16px;margin-top:24px">Pagamento</h2>
        <div class="field">
          <label><input type="radio" name="pag" value="pix" checked> PIX (5% de desconto)</label><br>
          <label><input type="radio" name="pag" value="cartao"> Cartão de crédito (até 12x)</label>
        </div>

        <div style="background:var(--card);border:1px solid var(--border);padding:14px;border-radius:6px;margin:16px 0">
          <div style="display:flex;justify-content:space-between;font-size:13px"><span>Subtotal</span><span id="ckSub"></span></div>
          <div style="display:flex;justify-content:space-between;font-size:13px"><span>Entrega</span><span id="ckEnt"></span></div>
          <div style="display:flex;justify-content:space-between;font-weight:600;margin-top:6px"><span>Total</span><span id="ckTot"></span></div>
        </div>

        <button type="submit" class="btn btn-block">Concluir pedido</button>
      </form>
    </div></section>
    <div id="mountFooter"></div>
  </main>
</div>
<div id="mountExtras"></div>
<script src="assets/js/products.js"></script>
<script src="assets/js/main.js"></script>
<script>
const s = window.getSettings();
document.getElementById("precoMoto").textContent = s.motoboyPreco.toFixed(2).replace(".",",");
function recalc() {
  const sub = window.cart.subtotal();
  const ent = document.querySelector('[name=entrega]:checked').value === 'motoboy' ? s.motoboyPreco : 22.9;
  document.getElementById("ckSub").textContent = brl(sub);
  document.getElementById("ckEnt").textContent = brl(ent);
  document.getElementById("ckTot").textContent = brl(sub + ent);
}
document.querySelectorAll('[name=entrega]').forEach(r=>r.addEventListener('change',recalc));
recalc();
document.getElementById("formCheckout").addEventListener("submit",(e)=>{
  e.preventDefault();
  window.cart.clear();
  location.href = "confirmacao.html";
});
</script>
</body>
<?php get_footer(); ?>