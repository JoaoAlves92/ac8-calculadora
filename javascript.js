function resetar_tela(){
    document.getElementById("resultado").value = null;
}

function pega_numero(num){
    var tela = document.getElementById("resultado");
    tela.value = tela.value + num;
}

function pega_operacao(operador){
    var tela = document.getElementById("resultado");
    if (!(operador in tela.value.split(''))){
        tela.value = tela.value + operador
    }
}

function calcular(){
    var tela = document.getElementById("resultado");
    var resultado = eval(tela.value)
    tela.value = resultado
}