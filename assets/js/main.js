/* main.js — layout, menu lateral, busca, carrinho lateral, WhatsApp.
   Inicializa partials e listeners globais em todas as páginas. */

(function () {
  /* ---------- Configurações persistidas ---------- */
  const SETTINGS_KEY = "closet:settings";
  const DEFAULT_SETTINGS = {
    heroEyebrow: "Coleção · 2026",
    heroTitle: "NEWS DA SEMANA",
    heroSubtitle: "As peças novas que acabaram de chegar no closet.",
    heroImage: window.THEME_URL + "/assets/images/hero.jpg",
    avisoFrete: "FRETE GRÁTIS PARA TODO BRASIL ACIMA DE R$ 299",
    avisoBrinde: "BRINDE EM PEDIDOS ACIMA DE R$ 180",
    manifesto: "“Menos peças. Mais identidade. Cada item é pensado para durar estações — não tendências.”",
    whatsappNumero: "5511958062781",
    whatsappMensagem: "Olá! Vim do site da Closet Giovanna Barbalho e gostaria de ajuda.",
    motoboyPreco: 25,
    motoboyPrazo: "Entrega no mesmo dia",
  };
  function loadSettings() {
    try {
      const s = localStorage.getItem(SETTINGS_KEY);
      return s ? Object.assign({}, DEFAULT_SETTINGS, JSON.parse(s)) : Object.assign({}, DEFAULT_SETTINGS);
    } catch { return Object.assign({}, DEFAULT_SETTINGS); }
  }
  window.getSettings = loadSettings;
  window.saveSettings = function (patch) {
    const cur = loadSettings();
    const next = Object.assign({}, cur, patch);
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(next));
    return next;
  };

  /* ---------- Layout (sidebar + topbar + carrinho + whatsapp) ---------- */
 const NAV = [
  { href: window.SITE_URL + "/", label:"Início" },
  { href: window.SITE_URL + "/produtos/", label:"Produtos" },
  { href: window.SITE_URL + "/mais-vendidos/", label:"Mais vendidos" },
  { href: window.SITE_URL + "/duvidas/", label:"Dúvidas" },
  { href: window.SITE_URL + "/contato/", label:"Contato" },
  { href: window.SITE_URL + "/sobre/", label:"Sobre" },
];
  const CATS = ["Tops","Vestidos","Moletons","Camisetas","Jaquetas"];
  const ADMIN = [
  { href: window.SITE_URL + "/admin/", label:"Painel administrativo" },
  { href: window.SITE_URL + "/estoque/", label:"Estoque" },
];
  const CONTA = [
  { href: window.SITE_URL + "/login/", label:"Entrar" },
  { href: window.SITE_URL + "/cadastro/", label:"Cadastre-se" },
];

  function renderSidebar() {
    const here = location.pathname.split("/").pop() || "index.php";
    const link = (i) =>
      `<li><a class="${i.href===here?'active':''}" href="${i.href}">${i.label}</a></li>`;
    const catLink = (c) =>
      `<li><a href="${window.SITE_URL}/produtos/?q=${encodeURIComponent(c)}">${c}</a></li>`;
    return `
      <aside class="menu-lateral" id="menuLateral">
        <div class="logo-wrap">
          <a href="${window.SITE_URL}/"><img src="${window.THEME_URL}/assets/images/logo-closet.png" alt="Closet Giovanna Barbalho"></a>
        </div>
        <div class="menu-grupo">
          <div class="label">Navegação</div>
          <ul>${NAV.map(link).join("")}</ul>
        </div>
        <div class="menu-grupo">
          <div class="label">Categorias</div>
          <ul>${CATS.map(catLink).join("")}</ul>
        </div>
        <div class="menu-grupo">
          <div class="label">Administração</div>
          <ul>${ADMIN.map(link).join("")}</ul>
        </div>
        <div class="menu-grupo">
          <div class="label">Conta</div>
          <ul>${CONTA.map(link).join("")}</ul>
        </div>
        <div class="menu-footer">Frete grátis acima de R$ 299 · Brinde acima de R$ 180</div>
      </aside>
      <div class="menu-overlay" id="menuOverlay"></div>
    `;
  }

  function renderTopbar() {
    const s = loadSettings();
    return `
      <div class="barra-topo">
        <div class="aviso-bar">${s.avisoFrete} · ${s.avisoBrinde}</div>
        <div class="topo-row">
          <button class="btn-menu-mobile" id="btnAbrirMenu" aria-label="Abrir menu">☰</button>
          <form class="busca" id="formBusca" role="search">
            <input type="search" id="inputBusca" placeholder="Buscar peças..." aria-label="Buscar">
            <button type="submit" aria-label="Buscar">🔍</button>
          </form>
          <button class="btn-carrinho" id="btnCarrinho">
            Carrinho <span class="badge" id="badgeCarrinho">0</span>
          </button>
        </div>
      </div>
    `;
  }

  function renderCarrinhoLateral() {
    return `
      <div class="carrinho-overlay" id="carrinhoOverlay"></div>
      <aside class="carrinho-lateral" id="carrinhoLateral" aria-hidden="true">
        <header>
          <h3>Seu carrinho</h3>
          <button id="btnFecharCarrinho" aria-label="Fechar">✕</button>
        </header>
        <div class="carrinho-items" id="carrinhoItems"></div>
        <footer>
          <div class="total"><span>Subtotal</span><span id="carrinhoSubtotal">R$ 0,00</span></div>
          <a href="${window.SITE_URL}/carrinho/">" class="btn btn-outline btn-block">Ver carrinho</a>
          <a href="${window.SITE_URL}/checkout/" class="btn btn-block">Finalizar compra</a>
        </footer>
      </aside>
    `;
  }

  function renderFooter() {
    return `
      <footer class="site-footer">
        <div class="cols">
          <div>
            <h4>Closet</h4>
            <p style="font-size:12px;color:var(--muted-foreground)">Moda feminina selecionada com carinho por Giovanna Barbalho.</p>
          </div>
          <div>
            <h4>Comprar</h4>
            <ul>
              <li><a href="${window.SITE_URL}/produtos/">Todos os produtos</a></li>
              <li><a href="${window.SITE_URL}/mais-vendidos/">Mais vendidos</a></li>
              <li><a href="${window.SITE_URL}/produtos/?q=Vestidos">Vestidos</a></li>
              <li><a href="${window.SITE_URL}/produtos/?q=Tops">Tops</a></li>
            </ul>
          </div>
          <div>
            <h4>Ajuda</h4>
            <ul>
              <li><a href="${window.SITE_URL}/duvidas/">Dúvidas frequentes</a></li>
              <li><a href="${window.SITE_URL}/contato/">Fale conosco</a></li>
              <li><a href="${window.SITE_URL}/sobre/">Sobre nós</a></li>
            </ul>
          </div>
          <div>
            <h4>Conta</h4>
            <ul>
              <li><a href="${window.SITE_URL}/login/">Entrar</a></li>
              <li><a href="${window.SITE_URL}/cadastro/">Cadastre-se</a></li>
              <li><a href="${window.SITE_URL}/admin/">Administrador</a></li>
            </ul>
          </div>
        </div>
        <div class="bottom">© <span id="ano"></span> Closet Giovanna Barbalho. Todos os direitos reservados.</div>
      </footer>
    `;
  }

  function renderWhatsApp() {
    const s = loadSettings();
    const url = `https://wa.me/${s.whatsappNumero}?text=${encodeURIComponent(s.whatsappMensagem)}`;
    return `<a class="wa-btn" href="${url}" target="_blank" rel="noopener" aria-label="Falar no WhatsApp">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 3.5A11 11 0 0 0 3.2 17l-1.2 4.5 4.6-1.2A11 11 0 1 0 20.5 3.5Zm-8.5 18a9 9 0 0 1-4.6-1.3l-.3-.2-2.7.7.7-2.6-.2-.3A9 9 0 1 1 12 21.5Zm5-6.7c-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.6.1l-.9 1c-.2.2-.3.2-.6.1a7.3 7.3 0 0 1-3.6-3.1c-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5l-.9-2c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3a3.1 3.1 0 0 0-1 2.3c0 1.3 1 2.6 1.1 2.8a10.7 10.7 0 0 0 4.4 3.9c.6.3 1.1.5 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.6-.3Z"/></svg>
    </a>`;
  }

  /* ---------- Carrinho ---------- */
  const CART_KEY = "cart";
  function loadCart() {
    try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch { return []; }
  }
  function saveCart(items) { localStorage.setItem(CART_KEY, JSON.stringify(items)); }
  function getProduct(id) { return (window.CLOSET_PRODUCTS || []).find(p => p.id === id); }

  window.cart = {
    items: loadCart(),
    add(productId, size, qty=1) {
      const i = this.items.findIndex(x => x.id===productId && x.size===size);
      if (i>=0) this.items[i].qty += qty;
      else this.items.push({ id:productId, size, qty });
      saveCart(this.items); this.render();
    },
    remove(productId, size) {
      this.items = this.items.filter(x => !(x.id===productId && x.size===size));
      saveCart(this.items); this.render();
    },
    setQty(productId, size, qty) {
      const it = this.items.find(x => x.id===productId && x.size===size);
      if (it) { it.qty = Math.max(1, qty); saveCart(this.items); this.render(); }
    },
    clear() { this.items = []; saveCart(this.items); this.render(); },
    count() { return this.items.reduce((s,x)=>s+x.qty,0); },
    subtotal() {
      return this.items.reduce((s,x) => {
        const p = getProduct(x.id); return s + (p ? p.price * x.qty : 0);
      }, 0);
    },
    render() {
      const badge = document.getElementById("badgeCarrinho");
      if (badge) badge.textContent = this.count();
      const listEl = document.getElementById("carrinhoItems");
      const subEl = document.getElementById("carrinhoSubtotal");
      if (!listEl) return;
      if (this.items.length === 0) {
        listEl.innerHTML = `<p style="color:var(--muted-foreground);font-size:13px;text-align:center;padding:32px 0;">Seu carrinho está vazio.</p>`;
      } else {
        listEl.innerHTML = this.items.map(it => {
          const p = getProduct(it.id); if (!p) return "";
          return `
            <div class="carrinho-item">
              <img src="${p.image}" alt="${p.name}">
              <div>
                <div class="nome">${p.name}</div>
                <div class="tamanho">Tamanho: ${it.size}</div>
                <div class="qty">
                  <button data-act="dec" data-id="${p.id}" data-size="${it.size}">−</button>
                  <span>${it.qty}</span>
                  <button data-act="inc" data-id="${p.id}" data-size="${it.size}">+</button>
                  <button data-act="rm" data-id="${p.id}" data-size="${it.size}" style="margin-left:8px;font-size:11px;color:var(--sale);">remover</button>
                </div>
              </div>
              <div class="preco">${brl(p.price * it.qty)}</div>
            </div>`;
        }).join("");
      }
      if (subEl) subEl.textContent = brl(this.subtotal());
    },
    open() {
      const ov = document.getElementById("carrinhoOverlay");
      const c = document.getElementById("carrinhoLateral");
      if (ov && c) { ov.classList.add("open"); c.classList.add("open"); c.setAttribute("aria-hidden","false"); }
    },
    close() {
      const ov = document.getElementById("carrinhoOverlay");
      const c = document.getElementById("carrinhoLateral");
      if (ov && c) { ov.classList.remove("open"); c.classList.remove("open"); c.setAttribute("aria-hidden","true"); }
    },
  };

  /* ---------- Bootstrap do layout ---------- */
  function mount() {
    const sidebarMount = document.getElementById("mountSidebar");
    const topMount = document.getElementById("mountTopbar");
    const footMount = document.getElementById("mountFooter");
    const extrasMount = document.getElementById("mountExtras");
    if (sidebarMount) sidebarMount.innerHTML = renderSidebar();
    if (topMount) topMount.innerHTML = renderTopbar();
    if (footMount) footMount.innerHTML = renderFooter();
    if (extrasMount) extrasMount.innerHTML = renderCarrinhoLateral() + renderWhatsApp();

    const ano = document.getElementById("ano");
    if (ano) ano.textContent = new Date().getFullYear();

    // mobile menu
    const btnMenu = document.getElementById("btnAbrirMenu");
    const menu = document.getElementById("menuLateral");
    const menuOv = document.getElementById("menuOverlay");
    if (btnMenu && menu && menuOv) {
      btnMenu.addEventListener("click", () => { menu.classList.add("open"); menuOv.classList.add("open"); });
      menuOv.addEventListener("click", () => { menu.classList.remove("open"); menuOv.classList.remove("open"); });
    }

    // carrinho
    const btnCart = document.getElementById("btnCarrinho");
    const btnFechar = document.getElementById("btnFecharCarrinho");
    const cartOv = document.getElementById("carrinhoOverlay");
    if (btnCart) btnCart.addEventListener("click", () => window.cart.open());
    if (btnFechar) btnFechar.addEventListener("click", () => window.cart.close());
    if (cartOv) cartOv.addEventListener("click", () => window.cart.close());

    // delegação de ações dentro do carrinho
    document.addEventListener("click", (e) => {
      const t = e.target.closest("[data-act]");
      if (!t) return;
      const id = t.dataset.id, size = t.dataset.size;
      const item = window.cart.items.find(x => x.id===id && x.size===size);
      if (!item) return;
      if (t.dataset.act === "inc") window.cart.setQty(id, size, item.qty + 1);
      if (t.dataset.act === "dec") window.cart.setQty(id, size, item.qty - 1);
      if (t.dataset.act === "rm")  window.cart.remove(id, size);
    });

    // busca
    const form = document.getElementById("formBusca");
    const input = document.getElementById("inputBusca");
    if (form && input) {
      const cur = new URLSearchParams(location.search).get("q");
      if (cur) input.value = cur;
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const q = input.value.trim();
        location.href = window.SITE_URL + "/produtos/" + (q ? `?q=${encodeURIComponent(q)}` : "");
      });
    }

    window.cart.render();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else { mount(); }
})();
