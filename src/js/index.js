// OBJETIVO - quando clicar no pokedev da listagem temos que esconder o cartão do pokedev aberto 
//    e mostrar o cartão correspondente ao que foi selecionado na listagem
//        PASSO 1 - precisamos criar uma variável no JS pra trabalhar com a listagem de pokedevs
//        PASSO 2 - Identificar o evento de clique no elemento da listagem
//        PASSO 3 - remover a classe aberto só do cartão que tá aberto
//        PASSO 4 - ao clicar em um pokedev da lista pegamos o id desse pokedev pra saber qual 
//     cartão abrir
//        PASSO 5 - remover a classe ativo que marca o pokedev selecionado na listagem
//        PASSO 6 - adicinar a classe ativo no pokedev selecionado na listagem

// PASSO 1 - precisamos criar uma variável no JS pra trabalhar com a listagem de pokedevs

const listaSelecaoLockcats = document.querySelectorAll(".Lockcats"); 


// PASSO 2 - Identificar o evento de clique no elemento da listagem

listaSelecaoLockcats.forEach(Lockcats => {
    Lockcats.addEventListener("click", () =>{
        //PASSO 3 - remover a classe aberto só do cartão que tá aberto 
        EscondercartaoBlueCats();

        // PASSO 4 - ao clicar em um pokedev da lista pegamos o id desse pokedev pra saber qual 

        const idLockcatsSelecionado = MostrarCartaoBlueCatsSelecionado(Lockcats);
        
        //  PASSO 5 - remover a classe ativo que marca o pokedev selecionado na listagem
        desativarLockcatsativoNaListagem();

        // PASSO 6 - adicinar a classe ativo no pokedev selecionado na listagem

        AtivarLockcatsSelecionadoNaListagem(idLockcatsSelecionado);


        
    
        
    })
    
})


function AtivarLockcatsSelecionadoNaListagem(idLockcatsSelecionado) {
    const LockcatsSelecionadoNaListagem = document.getElementById(idLockcatsSelecionado);

    LockcatsSelecionadoNaListagem.classList.add("ativo");
}

function desativarLockcatsativoNaListagem() {
    const LockcatsAtivoNaListagem = document.querySelector(".ativo");
    LockcatsAtivoNaListagem.classList.remove("ativo");
}

function MostrarCartaoBlueCatsSelecionado(Lockcats) {
    const idLockcatsSelecionado = Lockcats.attributes.id.value;
    const idDoLockcatsParaAbrir = "cartao-" + idLockcatsSelecionado;
    console.log(idLockcatsSelecionado);
    const cartaoLockcatsParaAbrir = document.getElementById(idDoLockcatsParaAbrir);
    cartaoLockcatsParaAbrir.classList.add("aberto");
    return idLockcatsSelecionado;
}

function EscondercartaoBlueCats() {
    const cartaoLockcatsAberto = document.querySelector(".aberto");
    cartaoLockcatsAberto.classList.remove("aberto");
}

