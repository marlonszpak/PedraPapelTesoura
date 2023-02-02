const pessoaJogando = document.querySelectorAll(".pessoa .jogada")
const computadorJogando = document.querySelectorAll(".computador .jogada")

pessoaJogando.forEach((opçao) => {
    opçao.onclick = () =>{
        limparSelecionado(pessoaJogando)
    
        opçao.style.opacity = "1"
        opçao.setAttribute("data-selected", true)

        jogadaDoComputador()

        const opçaoPessoa = opçao.getAttribute("data-value")
        const opçaoComputador = jogadaDoComputador()

        resultado(opçaoPessoa, opçaoComputador)
    }
})

const jogadaDoComputador = () => {
    limparSelecionado(computadorJogando)

    const opçaoRandom = Math.floor(Math.random() * computadorJogando.length)
    const opçaoSelecionada = computadorJogando[opçaoRandom]

    opçaoSelecionada.style.opacity = "1"
    opçaoSelecionada.setAttribute("data-selected", "true")

    return opçaoSelecionada.getAttribute("data-value")
}
const limparSelecionado = (array) => {
    array.forEach((value) => {
        value.setAttribute("data-selected", "false")
        value.style.opacity = "0.5"
    })
}

const resultado = (opçaoPessoa, opçaoComputador)  => {
    const mensagemResultado = document.querySelector(".res")
    if(opçaoPessoa === opçaoComputador){
        mensagemResultado.textContent = "Empatou !"
    }
    else if(opçaoPessoa === "pedra" && opçaoComputador === "tesoura" ||
            opçaoPessoa === "papel" && opçaoComputador === "pedra"   ||
            opçaoPessoa === "tesoura" && opçaoComputador === "papel"){
            mensagemResultado.textContent = "Voce Ganhou !"
    }
    else if( opçaoPessoa === "pedra" && opçaoComputador === "papel" ||
          opçaoPessoa === "papel" && opçaoComputador === "tesoura" ||
          opçaoPessoa === "tesoura" && opçaoComputador === "pedra"){
          mensagemResultado.textContent = "Voce Perdeu !"
    }
}                                          