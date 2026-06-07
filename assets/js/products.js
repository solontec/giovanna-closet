/* products.js — catálogo (substitui src/lib/products.ts) */
window.CLOSET_PRODUCTS = [
  {
    id: "top-cropped-preto",
    name: "Top Cropped Preto",
    price: 79.9, originalPrice: 109.9,
    image: window.THEME_URL + "/assets/images/p1.jpg",
    category: "Tops",
    description: "Top cropped preto com decote em V. Tecido com leve elasticidade, modela o corpo sem apertar.",
    sizes: ["P","M","G"],
    stock: { P:4, M:6, G:2 },
    sold: 142, lastUnit: false,
    colors: [{name:"Preto",hex:"#1a1a1a"},{name:"Branco",hex:"#ffffff"}],
  },
  {
    id: "vestido-vermelho",
    name: "Vestido Curto Vermelho",
    price: 149.9,
    image: "/wordpress/wp-content/themes/closet-giovanna/assets/images/p2.jpg",
    category: "Vestidos",
    description: "Vestido curto vermelho justo ao corpo, alças finas. Perfeito para uma noite especial.",
    sizes: ["P","M","G"], stock: { P:2,M:3,G:1 }, sold: 98,
    colors: [{name:"Vermelho",hex:"#c1272d"},{name:"Preto",hex:"#1a1a1a"}],
  },
  {
    id: "moletom-diesel",
    name: "Moletom Diesel Preto",
    price: 249.9, originalPrice: 319.9,
    image: "assets/images/p3.jpg",
    category: "Moletons",
    description: "Moletom oversized Diesel em algodão peluciado. Conforto e estilo urbano.",
    sizes: ["P","M","G","GG"], stock: { P:1,M:2,G:1,GG:0 }, sold: 210, lastUnit: true,
    colors: [{name:"Preto",hex:"#1a1a1a"},{name:"Cinza",hex:"#7a7a7a"}],
  },
  {
    id: "cropped-couro",
    name: "Cropped Couro Preto",
    price: 169.9,
    image: "/wordpress/wp-content/themes/closet-giovanna/assets/images/p4.jpg",
    category: "Tops",
    description: "Cropped em couro ecológico com bojo estruturado. Corte que valoriza a silhueta.",
    sizes: ["P","M","G"], stock: { P:3,M:4,G:2 }, sold: 76,
    colors: [{name:"Preto",hex:"#1a1a1a"}],
  },
  {
    id: "camiseta-nike-rosa",
    name: "Camiseta Nike Rosa",
    price: 119.9,
    image: "assets/images/p5.jpg",
    category: "Camisetas",
    description: "Camiseta Nike em algodão, estampa do logo no centro. Caimento confortável.",
    sizes: ["Único"], stock: { "Único":8 }, sold: 305,
    colors: [{name:"Rosa",hex:"#f5a6b8"},{name:"Branco",hex:"#ffffff"},{name:"Preto",hex:"#1a1a1a"}],
  },
  {
    id: "jaqueta-college",
    name: "Jaqueta College Listras",
    price: 289.9, originalPrice: 359.9,
    image: "assets/images/p6.jpg",
    category: "Jaquetas",
    description: "Jaqueta college com listras laterais. Estilo varsity, moderno e versátil.",
    sizes: ["P","M","G"], stock: { P:2,M:5,G:3 }, sold: 188,
    colors: [{name:"Preto",hex:"#1a1a1a"},{name:"Branco",hex:"#ffffff"}],
  },
];

window.MEDIDAS_PADRAO = {
  P:  { busto:"82 cm", cintura:"62 cm", quadril:"88 cm", comprimento:"60 cm" },
  M:  { busto:"88 cm", cintura:"68 cm", quadril:"94 cm", comprimento:"62 cm" },
  G:  { busto:"94 cm", cintura:"74 cm", quadril:"100 cm", comprimento:"64 cm" },
  GG: { busto:"100 cm", cintura:"80 cm", quadril:"106 cm", comprimento:"66 cm" },
  "Único": { busto:"82–96 cm", cintura:"62–76 cm", quadril:"88–102 cm", comprimento:"62 cm" },
};

window.brl = (n) => Number(n).toLocaleString("pt-BR", { style:"currency", currency:"BRL" });

/* Persistência (espelha o StoreProvider) */
(function () {
  try {
    const saved = localStorage.getItem("closet:produtos");
    if (saved) window.CLOSET_PRODUCTS = JSON.parse(saved);
  } catch {}
  window.salvarProdutos = function () {
    localStorage.setItem("closet:produtos", JSON.stringify(window.CLOSET_PRODUCTS));
  };
})();
