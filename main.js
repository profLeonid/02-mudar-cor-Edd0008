// Ativa o modo estrito do JavaScript.
// e torna o código mais seguro e previsível
'use strict'

// Seleciona o elemento HTML que possui o id "trocar-cor"
const btnTrocarCor = document.getElementById('trocar-cor')
const btnTrocarCorVerde = document.getElementById('VERDE')
const btnTrocarCorAzul = document.getElementById('AZUL')

// Função responsável por alterar a cor do fundo
function trocarCor(){
     
    let cor = document.getElementById('cor').value

// Se o usuário digitar "amarelo", converte para o valor CSS "yellow"
    if (cor == "azul"){
        cor = 'blue'
        
// Converte "vermelho" para "red"
    }else if (cor == 'vermelho'){
        cor = 'red'

// Converte "preto" para "black"
    }else if (cor == 'roxo'){
        cor = 'purple'

// Converte "verde" para "green"
    }else if (cor == 'verde'){
        cor = 'green'
    
    }
    
    document.documentElement.style.setProperty('--cor-bg', cor)
}
btnTrocarCor.addEventListener('click',trocarCor )
