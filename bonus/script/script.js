/*Consegna:

-snack 5
-snack 6
-snack 7
-snack 9

*/

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