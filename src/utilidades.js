export const catalogo = [
    {
        id: "1",
        nome: "Moleton Lakers",
        marca: "NBA",
        preco: 199,
        imagem: "card-produto-1.jpg",
        feminino: false,
    },
    {
        id: "2",
        nome: "Moleton Celtics",
        marca: "NBA",
        preco: 199,
        imagem: "card-produto-2.jpg",
        feminino: false,
    },
    {
        id: "3",
        nome: "Moleton Warriors",
        marca: "NBA",
        preco: 199,
        imagem: "card-produto-3.jpg",
        feminino: false,
    },
    {
        id: "4",
        nome: "Moleton Bulls",
        marca: "NBA",
        preco: 199,
        imagem: "card-produto-4.jpg",
        feminino: false,
    },
    {
        id: "5",
        nome: "Camiseta Nets",
        marca: "NBA",
        preco: 70,
        imagem: "card-produto-5.jpg",
        feminino: true,
    },
    {
        id: "6",
        nome: "Camiseta Bulls",
        marca: "NBA",
        preco: 70,
        imagem: "card-produto-6.jpg",
        feminino: true,
    },
    {
        id: "7",
        nome: "Camiseta Nuggets Branca",
        marca: "NBA",
        preco: 70,
        imagem: "card-produto-7.jpg",
        feminino: true,
    },
    {
        id: "8",
        nome: "Camiseta Nuggets Roxa",
        marca: "NBA",
        preco: 70,
        imagem: "card-produto-8.jpg",
        feminino: true,
    },    
];

export function salvarLocalStorage(chave, informacao) {
    localStorage.setItem(chave, JSON.stringify(informacao));
}

export function lerLocalStorage(chave) {
   return JSON.parse(localStorage.getItem(chave));
}

export function apagarDoLocalStorage(chave) {
    localStorage.removeItem(chave);
}

export function desenharProdutoCarrinhoSimples(idProduto, idContainerHtml, quantidadeProduto) {
    const produto = catalogo.find((p) => p.id === idProduto);
      const containerProdutosCarrinho = document.getElementById(idContainerHtml);
     
  
  
      const elementoArticle = document.createElement("article");
      
      const articleClasses = ["flex", "bg-stone-200", "rounded-lg", "p-1", "relative", "mb-2", "w-96"];
      
      for (const articleClass of articleClasses) {
        elementoArticle.classList.add(articleClass);
      }
     
      const cartaoProdutoCarrinho = `
      <img src="./assets/img/${produto.imagem}" alt="Carrinho: ${produto.nome}" class="h-24 rounded-lg ">
      <div class="p-3 flex flex-col justify-between">
        <p class="text-slate-400 text-xs">NBA</p>            
        <p class="text-slate-900 text-sm ">${produto.nome}</p>
        <p class="text-green-700 text-lg">$${produto.preco}</p>
      </div>
      <div class="flex text-slate-950 items-end absolute bottom-0 right-2 text-lg">        
        <p id="quantidade${produto.id}" class="ml-2">${quantidadeProduto}</p>        
      </div>`;
      
      elementoArticle.innerHTML = cartaoProdutoCarrinho;  
    containerProdutosCarrinho.appendChild(elementoArticle); 
  }