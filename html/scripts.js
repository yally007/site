// Função para scroll suave até a seção de loja quando o botão é clicado
document.querySelector('.banner button').addEventListener('click', function() {
    document.getElementById('loja').scrollIntoView({ behavior: 'smooth' });
});
// Selecionando todos os botões de adicionar ao carrinho
const botoesAdicionar = document.querySelectorAll('.adicionar');

// Adicionando um evento para cada botão
botoesAdicionar.forEach(function(botao) {
    botao.addEventListener('click', function() {
        const nomeProduto = this.previousElementSibling.previousElementSibling.textContent;
        console.log(`${nomeProduto} foi adicionado ao carrinho!`);
        
        // Mudando o texto do botão para "Adicionado"
        this.textContent = "Adicionado";
        this.disabled = true;  // Desabilita o botão após o clique
    });
});
