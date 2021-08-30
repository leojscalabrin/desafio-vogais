const $button = document.querySelector(".button")
let $text = document.querySelector('.text')
let $resultado = document.querySelector('.resultado')

function contaVogais(texto){
    let vogais = 0;
    let string = texto.toString();

    for (var i = 0; i <= string.length - 1; i++){
        if (string[i] === "a" ||
        string[i] === "e" ||
        string[i] === "i" ||
        string[i] === "o" ||
        string[i] === "u" ||
        string[i] === "ã" ||
        string[i] === "õ" ||
        string[i] === "í" ||
        string[i] === "á" ||
        string[i] === "é" ||
        string[i] === "ó" ||
        string[i] === "à" ||
        string[i] === "ê"){
            vogais += 1;
        }
    } 
    return vogais;
}

function getTexto(){
    const frase = $text.value.toLowerCase();
    return frase;
}

function printResult(){
    texto = getTexto();
    $resultado.textContent = contaVogais(texto) + " 👌";
}

$button.addEventListener('click', function(){
    printResult()
})
