// VARIAVEIS
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
const informacoes = document.querySelectorAll('.informacoes')

console.log(imagens);

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        const botaoSelecionado = document.querySelector('.botao.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        botao.classList.add("selecionado");

        const imagemAtiva = document.querySelector('.imagem.ativa');
        imagemAtiva.classList.remove('ativa');

        imagens[indice].classList.add("ativa");

        const informacaoAtiva = document.querySelector('.informacoes.ativa');
        informacaoAtiva.classList.remove('ativa');

        informacoes[indice].classList.add("ativa");
    });
});