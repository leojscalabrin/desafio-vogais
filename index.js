const $button = document.querySelector(".button")
let $text = document.querySelector('.text')
let $resultado = document.querySelector('.resultado')

function contaVogais(texto){
    
    let vogais = 0;
    let string = texto.toString();

    for (var i = 0; i <= string.length - 1; i++){
        if (string.charAt(i) === "a" ||
        string.charAt(i) === "e" ||
        string.charAt(i) === "i" ||
        string.charAt(i) === "o" ||
        string.charAt(i) === "u" ||
        string.charAt(i) === "ã" ||
        string.charAt(i) === "õ" ||
        string.charAt(i) === "í" ||
        string.charAt(i) === "á" ||
        string.charAt(i) === "é" ||
        string.charAt(i) === "ó" ||
        string.charAt(i) === "à" ||
        string.charAt(i) === "ê"){
            vogais += 1;
        }
    } 
    return vogais;
}

console.log(contaVogais('eu amo churros'))
console.log(contaVogais('sssssss'))
console.log(contaVogais('salve mano de boas'))

function getTexto(){
    const frase = $text.value.toLowerCase();
    return frase;
}

function printResult(){
    $resultado.textContent = contaVogais(getTexto()) + " 👌";
}

$button.addEventListener('click', function(){
    printResult()
})
