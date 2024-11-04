//-snack 5: Crea un array vuoto, chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.
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




//-snack 6: Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

let N = parseInt(prompt("Inserisci numero N:"));

while(isNaN(N) || N < 0){
    N = parseInt(prompt("Numero invaido, reinserisci numero N:"));
}

for(let i = 0; i <= N; i++){
    let cubo = Math.pow(i, 3);
    console.log("il cubo di "+i+" è "+cubo);
}




//-snack 7: Stampa le potenze di 2 fino a 1000.

let potenza = 0;
let i = 0;
while(potenza < 1000){
    potenza = Math.pow(2, i);
    if(potenza <1000)
        console.log("2 elevato alla "+i+" vale "+potenza);
    i++;
}


//-snack 9: Calcola la somma e la media dei primi 10 numeri.
let somma = 0;
let n2 = 0;
for(let i = 0; i < 10; i++){
    n2 = parseInt(prompt("inserisci numero:"));
    while(isNaN(n2)){
        n2 = parseInt(prompt("numero invalido, inserisci numero:"));
    }
    somma += n2;
}

let media = somma / 10;

console.log("La somma dei numeri inseriti è "+somma+",  mentre la media è: "+media);