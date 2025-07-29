// Função para scroll suave até a seção de loja quando o botão é clicado
document.querySelector('.banner button').addEventListener('click', function() {
    document.getElementById('loja').scrollIntoView({ behavior: 'smooth' });
});
