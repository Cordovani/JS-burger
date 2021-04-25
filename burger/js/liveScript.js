//DICHIARAZIONE FUNZIONI e VARIABILI
var submitBtn = document.getElementById("button");

// // scandisce la collezione passando un ID  e restituisce 
// // --- querySelectorAll() restituisce una NodeList 
// function scanNodeList() {
//     return document.querySelectorAll(".class");
// }

// // controlla se in una collezione ci sono elementi checked, passando un ID restituisce un booleano 
// function isChecked(id) {
//     return document.getElementById(id).checked;
// }


submitBtn.addEventListener("click", function () { }) {
    var nomeBurgerField = document.getElementById("name");
    // var cheeseField = document.getElementById("cheese");
    // var tomatoFiled = document.getElementById("tomato");
    // ...
    
    // mi prendo il valore dei checkbox figli di .ingredient
    var listaIngredienti = document.querySelectorAll(".ingredient [type='checkbox']");
    
    console.log(listaIngredienti);
    
    // salvo in una variabile somma 50$ è la base del burger    
    var somma = 50;

    // ciclo la lista
    for (var i = 0; i < listaIngredienti.length(); i++){
        var ingrediente = listaIngredienti[i];
        
        // se è selezionato dall'utente
        if(ingrediente.checked){
            somma += parseInt(ingrediente.value);
        }
    }
    
    if (!nomeBurgerField.value) {
            alert("inserire il nome del burger");
        }

}



//CORPO DEL PROGRAMMA


// controllo gli ingredienti con il check


// controllo che venga inserito il nome del burger


// se il nome del burger non viene inserito stampo un messaggio di errore


// controllo se viene inserito uno sconto


// genero il prezzo 


