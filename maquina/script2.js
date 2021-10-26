
var jogo = [];

//elementos visuais, as posições
var tabuleiro = [];

//Vez da jogada
var vezJogada = 0; //0 = player ; 1 = cpu

var jogadaCpu = 1;

//verifica o vencedor
var verifica;

//ve se o jogo esta acontecendo
var jogando = true;


var nivel = 1;

// var nivelMedio = 2;


// var nivelDificil = 3;

var quemComeca = 1;

// var simboloJogador = document.getElementById("simbolo");

// var celula = document.querySelector(".celula");

ponto0 = 0;
pontoX = 0;

function marcarX () {
	pontoX += 1;
	document.getElementById("placarJogador1").innerText = pontoX;
}

function marcarO () {
	pontoO += 1;
	document.getElementById("placarJogador2").innerText = pontoO;
}







function cpuJoga(){
    if(jogando){
        var l, c;
        if(nivel == 1){
            do{
                //l recebe da biblioteca de math, um numero redondo de forma randomica (o 2 serve para as posições 0,1,2)
                l = Math.round(Math.random()*2);
                c = Math.round(Math.random()*2);
            } 
            while (jogo[l][c] != "");
            jogo[l][c] = "O";
        }
        else if(nivel == 2){
                //nivel 2
        }
        verifica = verificarVitoria();
        if(verifica != ""){
            alert(verifica + "venceu");
            jogando = false;
        }
        atualizarTabuleiro();
        vezJogada = 0;
    }
}

function verificarVitoria(){
    var l, c;
    for(l=0; l<3; l++){
        
        if(jogo[l][0] == jogo[l][1] && jogo[l][1] == jogo[l][2]){
            return jogo[l][0];
        }
    }

    for(c=0; c<3; c++){
        
        if(jogo[0][c] == jogo[1][c] && jogo[1][c] == jogo[2][c]){
            return jogo[0][c];
        }
    }
    if(jogo[0][0] == jogo[1][1] && jogo[1][1] == jogo[2][2]){
        return jogo[0][0];
    }
    if(jogo[0][2] == jogo[1][1] && jogo[1][1] == jogo[2][0]){
        return jogo[0][2];
    }
    return "";
}


function jogar (posicao){
    if(jogando && vezJogada == 0 ){
        switch(posicao){

            case 1:
                if(jogo[0][0] == ""){
                    jogo[0][0] == "X";
                    vezJogada = 1;
                }
            break;

            case 2:
                if(jogo[0][1] ==""){
                    jogo[0][1] == "X";
                    vezJogada = 1;
                }
            break;

            case 3:
                if(jogo[0][2] == ""){
                    jogo[0][2] == "X";
                    vezJogada = 1;
                }
            break;

            case 4:
                if(jogo[1][0]==""){
                    jogo[1][0]== "X";
                    vezJogada = 1;
                }
            break;

            case 5:
                if(jogo[1][1]==""){
                    jogo[1][1]== "X";
                    vezJogada = 1;
                }
            break;

            case 6:
                if(jogo[1][2]==""){
                    jogo[1][2]== "X";
                    vezJogada = 1;
                }
            break;

            case 7:
                if(jogo[2][0]==""){
                    jogo[2][0]== "X";
                    vezJogada = 1;
                }
            break;

            case 8:
                if(jogo[2][1]==""){
                    jogo[2][1]== "X";
                    vezJogada = 1;
                }
            break;

            default: //caso 9
                if(jogo[2][2]==""){
                    jogo[2][2]== "X";
                    vezJogada = 1;
                }
            break;
        }
        if(vezJogada == 1){
            atualizarTabuleiro();
            verifica = verificarVitoria();
            if(verifica != ""){
                alert(verifica + "venceu");
                jogando = false;
            }
            cpuJoga();
        }
        
    }
}

//percorre o tabuleiro
function atualizarTabuleiro(){
    //for que percorre as ls
    for(var l=0; l<3; l++){
        //for que percorre as cs
        for(var c = 0; c < 3; c++){
            if(jogo[1][c] == "X"){
               tabuleiro[1][c].innerHTML = "X";
            }
            else if(jogo[1][c] == "O"){
                tabuleiro[1][c].innerHTML = "O";
            }
            else{
                tabuleiro[1][c].innerHTML = "";
            }
        }
    }
}


function inicia(){
    jogando = true;
    jogadaCpu = 1;
    jogo = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
    tabuleiro = [
        [
            document.getElementById("c0"), 
            document.getElementById("c1"), 
            document.getElementById("c2")
        ],
        [
            document.getElementById("c3"),
            document.getElementById("c4"),
            document.getElementById("c5")
        ],
        [
            document.getElementById("c6"),
            document.getElementById("c7"),
            document.getElementById("c8")
        ]
    ];

    atualizarTabuleiro();
    if(quemComeca == 1){
        quemComeca == 0;
        vezJogada == quemComeca;
        alert("jogador")
    }
    else{
        quemComeca == 1;
        vezJogada == quemComeca;
        cpuJoga();
    }


}

window.addEventListener("load",inicia);