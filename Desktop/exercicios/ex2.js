exercicio2.js
let produtos = [
    { nome: "Camiseta", preco: 322, categoria: "Roupas" },
    { nome: "Tênis", preco: 121, categoria: "Calçados" },
    { nome: "Smartphone", preco: 2000.00, categoria: "Eletrônicos" },
    { nome: "Jaqueta", preco: 170, categoria: "Roupas" },
    { nome: "Fone de Ouvido", preco: 159, categoria: "Eletrônicos" },
    { nome: "Relógio", preco: 120, categoria: "Acessórios" }
  ];
  
  function filtrarPorCategoria(categoria) {
    return produtos.filter(produto => produto.categoria === categoria);
  }
  
  let produtosDeRoupas = filtrarPorCategoria("Eletrônicos");
  
  console.log(produtosDeRoupas);