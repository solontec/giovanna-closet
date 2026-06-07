/* admin.js — tabs e edição de configurações */
(function () {
  const tabs = document.getElementById("tabs");
  tabs.addEventListener("click", (e) => {
    const b = e.target.closest(".tab-btn"); if (!b) return;
    document.querySelectorAll(".tab-btn").forEach(x => x.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach(x => x.classList.remove("active"));
    b.classList.add("active");
    document.querySelector(`[data-panel=${b.dataset.tab}]`).classList.add("active");
  });

  const s = window.getSettings();
  ["heroEyebrow","heroTitle","heroSubtitle","avisoFrete","avisoBrinde","manifesto",
   "heroImage","whatsappNumero","whatsappMensagem","motoboyPreco","motoboyPrazo"
  ].forEach(k => {
    const el = document.getElementById("f_"+k);
    if (el) el.value = s[k] != null ? s[k] : "";
  });
  const prev = document.getElementById("previewHero");
  prev.src = s.heroImage;
  document.getElementById("f_heroImage").addEventListener("input", (e) => prev.src = e.target.value);

  function save(keys, msg) {
    const patch = {};
    keys.forEach(k => {
      const v = document.getElementById("f_"+k).value;
      patch[k] = (k === "motoboyPreco") ? parseFloat(v) || 0 : v;
    });
    window.saveSettings(patch);
    alert(msg || "Salvo!");
  }

  document.getElementById("salvarConteudo").addEventListener("click", () =>
    save(["heroEyebrow","heroTitle","heroSubtitle","avisoFrete","avisoBrinde","manifesto"], "Conteúdo salvo."));
  document.getElementById("salvarBanner").addEventListener("click", () =>
    save(["heroImage"], "Banner salvo."));
  document.getElementById("salvarWhats").addEventListener("click", () =>
    save(["whatsappNumero","whatsappMensagem"], "WhatsApp salvo."));
  document.getElementById("salvarMoto").addEventListener("click", () =>
    save(["motoboyPreco","motoboyPrazo"], "Motoboy salvo."));

  document.getElementById("btnResetar").addEventListener("click", () => {
    if (!confirm("Apagar todas as alterações?")) return;
    localStorage.removeItem("closet:settings");
    localStorage.removeItem("closet:produtos");
    localStorage.removeItem("cart");
    alert("Resetado!"); location.reload();
  });
})();
