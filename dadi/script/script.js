/*Consegna:

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

*/
const min = 1; //Variabile min dado
const max = 6; //Variabile max dado

function numeroCasualeDa1A6(min, max){  /*Funzione che da numero casuale da 1 a 6*/
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numeroComputer = numeroCasualeDa1A6(min, max);    //Numero random computer
const numeroGiocatore = numeroCasualeDa1A6(min, max);   //Numero random giocatore

console.log("Numero Computer: "+numeroComputer); //stampa numero computer
console.log("Numero Giocatore: "+numeroGiocatore); //stampa numero giocatore


if(numeroComputer > numeroGiocatore)    /*Confronto e output risultato*/
    console.log("Vince computer!")
else if(numeroComputer < numeroGiocatore)
    console.log("Vince giocatore!")
else
    console.log("Pareggio!")