// "use ";

// //* VARIAVEIS E CONSTANTES GLOBAIS
// //criando constante para pegar todas as classes "celulas"
const celulasNode = document.querySelectorAll(".celula");
const celulasArr = Array.from(celulasNode);

let fimDeJogo = false;
const celulaUnidade = document.getElementById("0");

// // const celula = document.getElementById("0")

var nivel = 3;

var checarVezJogada = true;

//Criando constante para cada jogadar para escrever na celula
const div = document.getElementById("tabuleiro");

const JOGADOR_X = "X";

const JOGADOR_O = "O";

// pontoO = 0;
// pontoX = 0;

// function marcarPonto(vencedor) {
//    switch(vencedor){
//
//         case "X":
//             pontoX += 1;
//             document.getElementById("placarJogador1").innerText = pontoX;
//         break;
//         case "O":
//             pontoO += 1;
//             document.getElementById("placarJogador2").innerText = pontoO;
//         break;
//    }
// }

// function mostrarVez(vezJogada){
//     let vez;
//     let apagarVez
//     switch(vezJogada){
//         case "O":
//             vez = document.getElementById("x").style.display = "flex"
//             apagarVez = document.getElementById("o").style.display = "none"
//         break;
//         case "X":
//             vez = document.getElementById("o").style.display = "flex"
//             apagarVez = document.getElementById("x").style.display = "none"
//         break;
//         default:
//             apagarVez = document.getElementById("x","o").style.display = "none"
//         break;
//    }
// }

const combinacoesGanhar = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

// function percorrerCelulasVazias() {
//     const percorrerCelulas = (arr) => arr.innerHTML ==""
//     celulasArr.filter(percorrerCelulas)
//     return celulasArr

//     // console.log(celulasArr)
// }

//! FUNÇÕES PARA A APLICAÇÃO
//*função de jogar que recebe o id da celula

//função de jogar (colocar um simbolo na celula) que recebe o id da celula
function jogar(id) {
    //Variavel celula que possui consigo o id
    const celula = document.getElementById(id);

    vezJogada = checarVezJogada ? JOGADOR_X : JOGADOR_O;

    // console.log(checarVezJogada);
    declararVencedor(vezJogada);
    celula.textContent = vezJogada;
    celula.classList.add(vezJogada);

    switch (nivel) {
        case 3:
            if (vezJogada == "O" || checarVezJogada == false) {
                if (celulasArr[0].className == "celula X") {
                    celulasArr[4].innerHTML = "O";
                    console.log(checarVezJogada);

                    if (celulasArr[1].className == "celula X") {
                        celulasArr[2].innerHTML = "O";

                        if (celulasArr[6].className == "celula X") {
                            celulasArr[3].innerHTML = "O";

                            if (celulasArr[7].className == "celula X") {
                                celulasArr[8].innerHTML = "O";

                                if (celulasArr[5].className == "celula X") {
                                    return declararEmpate();
                                }

                                return (checarVezJogada = true);
                            } else if (celulasArr[8].className == "celula X") {
                                celulasArr[7].innerHTML = "O";

                                if (celulasArr[5].className == "celula X") {
                                    return declararEmpate();
                                }

                                return (checarVezJogada = true);
                            }

                            return (checarVezJogada = true);
                        }
                        return (checarVezJogada = true);
                    }
                    return (checarVezJogada = true);
                }

                // if (celulasArr[6].className == "celula X") {
                //     celulasArr[4].innerHTML = "O";
                //     console.log(celulasArr[0].className);
                //     // return (checarVezJogada = true);
                // }
                // if (celulasArr[8].className == "celula X") {
                //     celulasArr[4].innerHTML = "O";
                //     console.log(celulasArr[0].className);
                //     // return (checarVezJogada = true);
                // }

                // if (
                //     celulasArr[0].className == "celula X" &&
                //     celulasArr[1].className == "celula X"
                // ) {
                //     celulasArr[2].innerHTML = "O";
                //     console.log(celulasArr[1].className);
                //     return (checarVezJogada = true);
                // }
            }

            break;

        case 2:
            break;

        case 3:
            break;
    }

    //     /*Coloca dentro da célula, atraves de uma escrita, a vez da jogada,
    //         ou seja, o jogador da jogada atual*/

    // mostrarVez(vezJogada);
}

function declararVencedor(vezJogada) {
    const vencedor = combinacoesGanhar.some((comb) => {
        return comb.every((index) => {
            return celulasNode[index].classList.contains(vezJogada);
        });
    });

    if (vencedor) {
        encerrarJogo(vezJogada);
        marcarPonto(vencedor);
    } else if (declararEmpate()) {
        encerrarJogo();
    } else {
        //Esse faz com que o ciclo de um acabe, ou seja, ele possa alternar entre X e O
        //Fazendo com que a vez da jogada seja falso, e alternando o jogador X para o O
        checarVezJogada = !checarVezJogada;
    }
}

function declararEmpate() {
    const telaReiniciar = document.getElementById("telaReiniciar");
    const h1 = document.getElementById("statusJogo");

    telaReiniciar.style.display = "block";
    h1.innerHTML = "Empate";
}

function encerrarJogo(vencedor = null) {
    const telaReiniciar = document.getElementById("telaReiniciar");
    const h1 = document.getElementById("statusJogo");

    telaReiniciar.style.display = "block";

    if (vencedor) {
        h1.innerHTML = `O jogador ${vencedor} venceu`;
        marcarPonto(vencedor);
    } else {
        h1.innerHTML = "Empate";
    }
}

function jogarNovamente() {
    // telaReiniciar.style.display = "none";
    // celulas.forEach(e => e.innerHTML = "");
    location.reload();
}

function pararJogar() {
    window.location.href = "../index.html";
}

//* ADICIONANDO EVENTO DE CLICK
document.addEventListener("click", (event) => {
    if (event.target.matches(".celula")) {
        jogar(event.target.id);
    }
});

//!nivel 1

// document
//     .getElementById("continuarJogar")
//     .addEventListener("click", jogarNovamente);
// document.getElementById("pararJogar").addEventListener("click", pararJogar);

// ("use script");

// const celulas = document.querySelectorAll(".celula");
// let fimDeJogo = false;
// // let checarvezJogada = true;
// const jogadorX = "X";
// const jogadorO = "O";

// const combinacoesGanhar = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
// ];

// document.addEventListener("click", (event) => {
//     if (event.target.matches(".celula")) {
//         //console.log(event.target.id);
//         jogada(event.target.id, jogadorX);
//         setTimeout(() => jogarComMaquina(), 700);
//     }
// });

// function jogarComMaquina() {
//     const posicoesDisponiveis = [];
//     for (index in celulas) {
//         if (!isNaN(index)) {
//             if (
//                 !celulas[index].classList.contains("X") &&
//                 !celulas[index].classList.contains("O")
//             ) {
//                 posicoesDisponiveis.push(index);
//             }
//         }
//     }

//     const posicaoAleatoria = Math.floor(
//         Math.random() * posicoesDisponiveis.length
//     );

//     if (!fimDeJogo) {
//         jogada(posicoesDisponiveis[posicaoAleatoria], jogadorO);
//     }
// }

// function jogada(id, vezJogada) {
//     const celula = document.getElementById(id);
//     celula.textContent = vezJogada;
//     celula.classList.add(vezJogada);
//     checarVencendor(vezJogada);
// }

// function checarVencendor(vezJogada) {
//     const vencedor = combinacoesGanhar.some((comb) => {
//         return comb.every((index) => {
//             return celulas[index].classList.contains(vezJogada);
//         });
//     });

//     if (vencedor) {
//         encerrarJogo(vezJogada);
//     } else if (checarEmpate()) {
//         encerrarJogo();
//     }
// }

// function checarEmpate() {
//     let x = 0;
//     let o = 0;

//     for (index in celulas) {
//         if (!isNaN(index)) {
//             if (celulas[index].classList.contains(jogadorX)) {
//                 x++;
//             }

//             if (celulas[index].classList.contains(jogadorO)) {
//                 o++;
//             }
//         }
//     }

//     return x + o === 9 ? true : false;
// }

// function encerrarJogo(vencedor = null) {
//     fimDeJogo = true;
//     const telaReiniciar = document.getElementById("telaReiniciar");
//     const h1 = document.getElementById("statusJogo");

//     telaReiniciar.style.display = "block";

//     if (vencedor) {
//         h1.innerHTML = `O jogador ${vencedor} venceu`;
//     } else {
//         h1.innerHTML = "Empate";
//     }
// }
