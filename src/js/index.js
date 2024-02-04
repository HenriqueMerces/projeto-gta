/*

Objetivo 1 - quando o usuário clicar nobotão de selição de plataformas deve abrir uma caixa com os botões de seleção de plataforma
    
    passo 1 - pegar o botão de seleção de plataforma no JS para poder verificar quando o usuário clicar em cima dele
    
    Passo 2 - Pegar o elemento do conteudo que precisa ser mostrado 

    Passo 3 - pegar o clique do usuario no JS

    Passo 4 - quando o usuário clicar, adicionar a classe ativos nalistagem de plataforma dentro do botão para que o conteúdo apareça  


Objetivo 2 - caso a lista de botões de plataforma ja esteja aparecedo o usuário clica em cima do botão, o conteudo deve ser escondido 

    passo 1 - verificar se o botão ja esta aberto, se sim, devemos remover a calasse ativo para que ele esconda o conteúdo novamente 

*/

const botao = document.querySelector(".btn-plataforma");

const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas")


botao.addEventListener("click", () => {
   elementoPlataformas.classList.toggle("ativo");
} );

