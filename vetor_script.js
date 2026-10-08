/*inicializando a lista de produtos na variável 'produtos'*/
const produtos = [
    { id: 1, nome: "Minecraft",         categoria: "Sandbox",    preco: 99.90},
    { id: 2, nome: "World of Warships", categoria: "Estratégia", preco: 59.90},
    { id: 3, nome: "Injustice 2",       categoria: "Luta",       preco: 79.90},
    { id: 4, nome: "Wolverine",         categoria: "Ação",       preco: 249.90},
    { id: 5, nome: "EA FC 27",          categoria: "Esporte",    preco: 299.90}
];
/*Inicializando as variáveis*/
let categoriaAtual = "Todas";
let carrinho = []; 
/*Selecionando elementos do DOM e armazenando em variáveis para manipulação posterior*/          
const campoBusca    = document.getElementById("busca");
const lista         = document.getElementById("lista");
const mensagemVazia = document.getElementById("vazio");
const botoes        = document.querySelectorAll(".btn-categoria");
const itensCarrinho = document.getElementById("itensCarrinho");
const qtdCarrinho   = document.getElementById("qtdCarrinho");
const totalCarrinho = document.getElementById("total");
/*Adicionando o valor da moeda nacional 'R$'*/
function formatarPreco(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
/*Mostrar  produtos*/
function mostrarProdutos() {
    const texto = campoBusca.value.toLowerCase();
    /*Filtrar produtos por nome e categoria*/
    const filtrados = produtos.filter(
        function (produto) {
        const combinarNome = produto.nome.toLowerCase().includes(texto);
        const combinarCategoria = categoriaAtual === "Todas" || produto.categoria === categoriaAtual;
        return combinarNome && combinarCategoria;
    });

    /*Desenhar um card para cada produto filtrado*/
    lista.innerHTML = "";

    filtrados.forEach(function (produto) {
        lista.innerHTML += `
            <article class="card">
                <span class="categoria">${produto.categoria}</span>
                <h3>${produto.nome}</h3>
                <p class="preco">${formatarPreco(produto.preco)}</p>
                <button onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao carrinho</button>
            </article>
        `;
    });

    /*Se não sobrar nenhum produto, exibir mensagem*/
    if (filtrados.length === 0) {
        mensagemVazia.classList.add("visivel");
    } else {
        mensagemVazia.classList.remove("visivel");
    }
}
/*Fazendo a interação do usuário -> 'adicionar ao carrinho' e 'remover do carrinho'*/
function adicionarAoCarrinho(id) {
    const produto = produtos.find(function (p) {
        return p.id === id;
    });
 
    carrinho.push(produto);   
    atualizarCarrinho();      
}
/*Remover do carrinho*/
function removerDoCarrinho(posicao) {
    carrinho.splice(posicao, 1);  
    atualizarCarrinho();
}
 
/*Atualizar o carrinho de compras*/
function atualizarCarrinho() {
    itensCarrinho.innerHTML = "";
    let total = 0;
 
    carrinho.forEach(function (produto, posicao) {
        total += produto.preco;
 
        itensCarrinho.innerHTML += `
            <li>
                <span>${produto.nome} - ${formatarPreco(produto.preco)}</span>
                <button onclick="removerDoCarrinho(${posicao})">Remover</button>
            </li>
        `;
    });
    qtdCarrinho.textContent = carrinho.length;
    totalCarrinho.textContent = formatarPreco(total);
}
/*Ao digitar na busca, mostra os produtos de novo*/
campoBusca.addEventListener("input", mostrarProdutos);
 
/*Botão categoria*/
botoes.forEach(function (botao) {
    botao.addEventListener("click", function () {
        categoriaAtual = botao.dataset.categoria;  
        botoes.forEach(function (b) {
            b.classList.remove("ativo");
        });
        botao.classList.add("ativo");
        mostrarProdutos();
    });
});
mostrarProdutos();
atualizarCarrinho();