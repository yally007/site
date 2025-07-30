// Função para scroll suave até a seção de loja quando o botão é clicado
document.querySelector('.banner button').addEventListener('click', function() {
    document.getElementById('loja').scrollIntoView({ behavior: 'smooth' });
});
document.addEventListener('DOMContentLoaded', function () {

    const produtos = document.querySelectorAll('.produto'); // Seleciona todos os produtos
    const itensCarrinho = document.getElementById('itens-carrinho'); // Carrinho de compras
    const totalElement = document.getElementById('total'); // Elemento que mostra o total
    const vazioElement = document.getElementById('vazio'); // Elemento que mostra a mensagem "Carrinho vazio"
    let carrinho = []; // Array para armazenar os itens do carrinho

    // Função para adicionar um item ao carrinho
    function adicionarAoCarrinho(produto) {
        const nome = produto.querySelector('h3').innerText;
        const preco = parseFloat(produto.querySelector('.preco').innerText.replace('R$', '').trim().replace(',', '.'));
        const img = produto.querySelector('img').src;

        // Adicionar ou aumentar a quantidade do item no carrinho
        const itemCarrinho = {
            nome,
            preco,
            img,
            quantidade: 1
        };

        const produtoExistente = carrinho.find(item => item.nome === nome);
        
        if (produtoExistente) {
            produtoExistente.quantidade++; // Incrementa a quantidade do produto no carrinho
        } else {
            carrinho.push(itemCarrinho); // Se não existir, adiciona um novo item ao carrinho
        }

        renderizarCarrinho();
    }

    // Função para remover item do carrinho
    function removerDoCarrinho(nomeProduto) {
        carrinho = carrinho.filter(item => item.nome !== nomeProduto);
        renderizarCarrinho();
    }

    // Função para renderizar o carrinho na tela
    function renderizarCarrinho() {
        itensCarrinho.innerHTML = ''; // Limpa o conteúdo do carrinho

        if (carrinho.length === 0) {
            vazioElement.style.display = 'block'; // Exibe a mensagem de carrinho vazio
        } else {
            vazioElement.style.display = 'none'; // Oculta a mensagem de carrinho vazio
        }

        // Adicionar cada item ao carrinho
        carrinho.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('item');

            itemElement.innerHTML = `
                <img src="${item.img}" alt="${item.nome}" width="50">
                <span>${item.nome}</span>
                <span>R$ ${item.preco.toFixed(2).replace('.', ',')}</span>
                <span>Quantidade: ${item.quantidade}</span>
                <button onclick="removerDoCarrinho('${item.nome}')">Remover</button>
            `;

            itensCarrinho.appendChild(itemElement);
        });

        // Atualizar o total
        const total = carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
        totalElement.innerHTML = `<strong>Total:</strong> R$ ${total.toFixed(2).replace('.', ',')}`;
    }

    // Adicionar evento de clique nos botões "Comprar"
    produtos.forEach(produto => {
        const botaoCompra = produto.querySelector('button.comprar-btn');
        if (botaoCompra) {
            botaoCompra.addEventListener('click', function () {
                adicionarAoCarrinho(produto);
            });
        }
    });

    // Função de scroll suave para a seção de loja
    document.querySelector('.banner button').addEventListener('click', function() {
        document.getElementById('loja').scrollIntoView({ behavior: 'smooth' });
    });

});
