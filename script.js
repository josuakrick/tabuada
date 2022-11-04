
// Seleção dos elementos
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicatorInput = document.querySelector("#multiplicator");
// Variável capturada para limpar o campo de texto quando a tabuada for impressa
const multiplicationTable = document.querySelector("#multiplication-operations");

// Variável do span para adicionar o número da tabuada que o usuário digitou
const numberTitle = document.querySelector("#multiplication-title span");

// Funções
function createTable(number, multiplicatorNumber) {
// Limpando o campo quando a tabuada é impressa
     multiplicationTable.innerHTML = "";

     for(i = 1; i <= multiplicatorNumber; i++) {
        const result = number * i;
    // As crases nos permitem criar um template html que será inserido dentro do html
        const template = `<div class="row">
                     <div class="operation">${number} x ${i}</div>
                     <div class="result">${result}</div>
                </div>`;
// Esse método new DOMParser nos permite transformar o template string em html
// Primeiro o colocamos em uma variavels
        const parser = new DOMParser();
// e agora aqui embaixo colocamos o método parseFromString com dois valores
// o primeiro a variável com o template, e o segundo referente a referência, como text/html
        const htmlTemplate = parser.parseFromString(template, "text/html")
// Aqui estamos selecionando o conjunto html que criamos acima para dentro de uma variável
        const row = htmlTemplate.querySelector(".row");
// Aqui estamos usando para adicionar o novo template após o campo ser limpo
        multiplicationTable.appendChild(row);
     }
     numberTitle.innerText= number;
}

// Eventos
// Estamos criando o evento através do form porque será ele que através do submit irá retornar algo
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;
    // O sinal de + antes serve para retornar um valor inteiro
    const multiplicatorNumber = +multiplicatorInput.value;
// Esse if serve para garantir que nada será impresso se um dos valores estiver em branco
    if(!multiplicatorNumber  || !multiplicationNumber) return;

    createTable(multiplicationNumber, multiplicatorNumber)
})
