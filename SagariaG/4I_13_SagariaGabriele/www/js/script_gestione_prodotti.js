
function aperturaFinestra(){
        document.getElementById("finestraModale").style.display = 'block'; 
}

function chiusuraFinestra(){
        document.getElementById("finestraModale").style.display = 'none'; 
}


function controllo(){
    console.log("ciao");
    let nome = document.getElementById("nome");
    let descrizione = document.getElementById("descrizione");
    let prezzo = document.getElementById("prezzo");
    let sconto = document.getElementById("sconto");
    let immagine = document.getElementById("file");
    let validita = true;

    
    if (nome.value.trim() === '' ) {  
        document.getElementById("errorNome").style.display = 'block'; 
        validita = false;
    } else {
        document.getElementById("errorNome").style.display = 'none'; 
    }

    if (prezzo.value.trim() === '') { 
        document.getElementById("errorPrezzo").style.display = 'block'; 
        validita = false;
    } else {
        document.getElementById("errorPrezzo").style.display = 'none'; 
    }

    if (descrizione.value.trim() === '') { 
        document.getElementById("errorDescrizione").style.display = 'block'; 
        validita = false;
    } else {
        document.getElementById("errorDescrizione").style.display = 'none'; 
    }

    if (prezzo.value.trim() === '') { 
        document.getElementById("errorPrezzo").style.display = 'block'; 
        validita = false;
    } else {
        document.getElementById("errorPrezzo").style.display = 'none'; 
    }

    if (sconto.value.trim() === '') { 
        document.getElementById("errorSconto").style.display = 'block'; 
        validita = false;
    } else {
        document.getElementById("errorSconto").style.display = 'none'; 
    }

    if (immagine.value.trim() === '') { 
        document.getElementById("errorImmagine").style.display = 'block'; 
        validita = false;
    } else {
        document.getElementById("errorImmagine").style.display = 'none'; 
    }

    console.log(validita);
    
    return validita;  
}


function eliminaRiga(button){
    let riga= button.closest('tr');
    riga.style.display="none";
}

function modificaRiga(button) {
    document.getElementById("finestraModale_Modifica").style.display = "block";
    
    let riga = button.closest("tr");


    let valore1 = riga.cells[0].textContent;
    let valore2 = riga.cells[1].textContent;
    let valore3 = riga.cells[2].textContent;

    document.getElementById("nome_modifica").value = valore1;
    document.getElementById("descrizione_modifica").value = valore2;
    document.getElementById("prezzo_modifica").value = valore3;


    let pulsante = document.getElementById("pulsante_salva");

    pulsante.onclick = null;
    
    pulsante.onclick = function(event) {
        event.preventDefault(); 

        console.log("Salvataggio attivato");

        // Aggiorna la riga con i nuovi valori
        riga.cells[0].textContent = document.getElementById("nome_modifica").value;
        riga.cells[1].textContent = document.getElementById("descrizione_modifica").value;
        riga.cells[2].textContent = document.getElementById("prezzo_modifica").value;


        chiusuraFinestraModifica();
    };
}

// Funzione per chiudere la finestra modale
function chiusuraFinestraModifica() {
    document.getElementById("finestraModale_Modifica").style.display = "none";
}
