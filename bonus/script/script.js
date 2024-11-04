//-snack 5: Crea un array vuoto, chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.
/*
const array = [];
let n;

for(let i = 0; i < 6; i++){
    n=parseInt(prompt("inserisci un numero:"));
    while(isNaN(n)=== true){
        n=parseInt(prompt("numero non valido, reinserisci numero:"));
    }
    if(n%2 !== 0)
        array.push(n);
}

if(array.length===0)
    console.log("L'array di numeri dispari è vuoto!")
else
    console.log("L'array di numeri dispari presenta "+array.length+" elementi, i quali sono: "+array);
*/
//-snack 6: Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.
let N = parseInt(prompt("Inserisci numero N:"));

while(isNaN(N) || N < 0){
    N = parseInt(prompt("Numero invaido, reinserisci numero N:"));
}

for(let i = 0; i <= N; i++){
    let cubo = Math.pow(i, 3);
    console.log("il cubo di "+i+" è "+cubo);
}


