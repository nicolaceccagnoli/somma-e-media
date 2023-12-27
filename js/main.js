/*

    Somma e media
    Scrivi un programma che dati 5 numeri restituisca in output la somma e la media.

    Esempio:
        Input: a = 1, b = 2, c = 3, d = 4, e = 5
        Output: somma = 15, media = 3
    
    http://www.imparareaprogrammare.it

*/

// Seleziono l'input dall'HTML
const myInputNumber = document.querySelector('input');
console.log('Input', myInputNumber, typeof myInputNumber);

// Seleziono il Bottone dall'HTML
const myButton = document.querySelector('button');
console.log('Mio Bottone', myButton, typeof myButton);

// Seleziono il Contenitore del Risultato dall'HTML
const myResultContainer = document.getElementById('result-container');
console.log('Contenitore del Risultato', myResultContainer, typeof myResultContainer);

myResultContainer.classList.add('container', 'mt-3');

// Creo un elemento HTML
const myAverageContainer = document.createElement('div');

myAverageContainer.classList.add('container', 'mt-3')

// Appendo l'elemento che ho creato al Contenitore del Risultato
document.querySelector('main').append(myAverageContainer);


// Dichiaro un Array vuoto dove andranno a finire i numeri inseriti nell'input
const myNumberArray = [];
console.log('Mio Array', myNumberArray, typeof myNumberArray);

// Creo l'evento del Click sul Bottone 
myButton.addEventListener('click', function(){
    
    // Ad ogni Click sul Bottone Pusho dentro il mio Array i numeri scelti dall'utente
    myNumberArray.push(parseInt(myInputNumber.value));
    console.log(myNumberArray);

    myInputNumber.value = "";

    // Creo una condizione per cui quando ci saranno 5 numeri all'interno dell'array venga stampata in pagina la loro somma
    if (myNumberArray.length == 5) {

        // Dichiaro una Variabile Somma 
        let sum = 0;

        myFunctionSum(myNumberArray, sum, myResultContainer, myAverageContainer);

        myNumberArray.length = 0;
    }


})

/*

    LE MIE FUNZIONI

*/

// Creo la Funzione che mi calcoli la somma dei numeri all'interno dell'Array

function myFunctionSum(myArr, mySum, myDiv, myOtherDiv){

    mySum = 0;

    myArr.forEach(element => {
        mySum += element;
    });

    myDiv.innerHTML = 'La somma dei tuoi numeri è: ' + mySum;

    myOtherDiv.innerHTML = 'La media dei tuoi numeri è: ' + (mySum / myArr.length)

}