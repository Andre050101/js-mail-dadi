/*Consegna:

Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Non è necessario provvedere alla validazione delle email

*/

const archivioMail = [                     /*Archivio mail presenti nel sistema*/
    "agiancristiano90@gmail.com",
    "m.rossi@gmail.com",
    "l.bianchi@yahoo.it",
    "giulia.verdi@libero.it",
    "alessandro.sanna@alice.it",
    "s.martini@tiscali.it",
    "laura.lombardi@fastwebnet.it"
]

const mail = prompt("Prego, inserisca pure la sua e-mail:");    /*Richiesta mail a utente*/

let mailPresence = false;   /*Tiene traccia del se la mail appartiene all'array, di base settata su false, poi se troviamo la corrispondenza cambiamo in true*/

for(let i = 0; i < archivioMail.length; i++){       /*Controllo di appartenenza della mail all'aray, con eventuale conseguente aggiornamento di mailPresence*/
    if(archivioMail[i] === mail)
        mailPresence = true;
}

/*Output risultato*/
if(mailPresence === true)
    console.log("Congratulazioni, la sua mail appartiene ai nostri archivi");
else
    console.log("Siamo spiacenti, la sua mail non appartiene ai nostri archivi");