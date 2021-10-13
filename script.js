"use "

//* VARIAVEIS E CONSTANTES GLOBAIS
    //criando constante para pegar todas as classes "celulas"
    const celulas = document.querySelectorAll(".celula")
    
    //
    let checarVezJogada = true
    
    //Criando constante para cada jogadar para escrever na celula
    const JOGADOR_X = "X"
    const JOGADOR_O = "O"

    const combinacoesGanhar =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]


//* FUNÇÕES PARA A APLICAÇÃO

    function jogarNovamente() {
        
        location.reload();
    
    }

    //função de jogar (colocar um simbolo na celula) que recebe o id da celula
    function jogar(id){
        //Variavel celula que possui consigo o id
        const celula = document.getElementById(id)
        
        /* 
        Ternário para a jogada
            Se checar a vez da jogada for verdadeiro, executar JOG_X, senão, executar JOG_O
            (isso acontece pois o primeiro jogador é sempre o x)
        */
        vezJogada = checarVezJogada ? JOGADOR_X : JOGADOR_O
        //

        /*Coloca dentro da célula, atraves de uma escrita, a vez da jogada, 
        ou seja, o jogador da jogada atual*/
        celula.textContent = vezJogada
        celula.classList.add(vezJogada)
        declararVencedor(vezJogada)
       
    }

    function declararVencedor(vezJogada){
        const vencedor = combinacoesGanhar.some((comb) => {

            return comb.every((index) => {
                return celulas[index].classList.contains(vezJogada)
            })
        })

        if (vencedor){
            encerrarJogo(vezJogada)
        }
        else if (declararEmpate()){
            encerrarJogo()
        }
        else{
             //Esse faz com que o ciclo de um acabe, ou seja, ele possa alternar entre X e O
        //Fazendo com que a vez da jogada seja falso, e alternando o jogador X para o O
        checarVezJogada = !checarVezJogada
        }
    }

    function declararEmpate (){
        let x = 0
        let o = 0

        for (index in celulas){
            if(!isNaN(index)){
                if (celulas[index].classList.contains(JOGADOR_X)){
                    x++
                }
            }
            if(!isNaN(index)){
                if (celulas[index].classList.contains(JOGADOR_O)){
                    o++
                }
            }
        }
        return x + o === 9 ? true : false
    }

    function encerrarJogo(vencedor = null){

        const telaReiniciar = document.getElementById("telaReiniciar")
        const h1 = document.getElementById("statusJogo")

        telaReiniciar.style.display = "block"

        if (vencedor) {
            h1.innerHTML = `O player ${vencedor} venceu`
        }
        else {
            h1.innerHTML = "Empate"
        }
    }


//* ADICIONANDO EVENTO DE CLICK
    document.addEventListener("click", (event) => {
        if(event.target.matches(".celula")){
            jogar(event.target.id)
        }
    })

    document.getElementById("continuarJogar").addEventListener("click", jogarNovamente);