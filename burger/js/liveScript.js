//DICHIARAZIONE FUNZIONI e VARIABILI
var submitBtn = document.getElementById("button");
var validCoupon = ["boolean2021","class33","5dollarCheese"];
var priceField = document.getElementById("price");
var discount = document.getElementById("coupon");

// salvo in una variabile somma 50$ è la base del burger    
var somma = 50;

// funzione per la somma se l'elemento è check aggiunge il valore al total 
function addToSum(total, elementHTML) {
    if (elementHTML.checked) {
        total += parseInt(elementHTML.value);
    }
    
    return total;
}

submitBtn.addEventListener("click", function () {
    var nomeBurgerField = document.getElementById("name");
    // var cheeseField = document.getElementById("cheese");
    // var tomatoFiled = document.getElementById("tomato");
    // ...
    
    // mi prendo il valore dei checkbox figli di .ingredient
    var listaIngredienti = document.querySelectorAll(".ingredient [type='checkbox']");
    
    console.log(listaIngredienti);


    // ciclo la lista
    for (var i = 0; i < listaIngredienti.length; i++) {
        var ingrediente = listaIngredienti[i];

        somma = addToSum(somma, ingrediente);
        // se è selezionato dall'utente
        // if (ingrediente.checked) {
        //     somma += parseInt(ingrediente.value);
        // }
    }



    // se il nome del burger non viene inserito stampo un messaggio di errore
    if (!nomeBurgerField.value) {
        alert("inserire il nome del burger");
    }

    // controllo se viene inserito uno sconto valido e sconta del 30% il totale
    if(discount) {
        somma -= somma * 0.2;
    }

    // inietto il prezzo finale nell'HTML
    priceField.innerHTML = somma;


})


// Note
// post correzione Florian







