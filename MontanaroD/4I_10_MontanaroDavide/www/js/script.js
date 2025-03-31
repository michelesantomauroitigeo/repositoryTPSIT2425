
let rigaSelezionata = null;

function Modifica(pulsante) {
    // Trova la riga della tabella corrispondente al pulsante cliccato
     rigaSelezionata = pulsante.closest("tr");
    let datiCelle = rigaSelezionata.getElementsByTagName("td");

    // Riempie i campi del form con i dati dell'utente selezionato
    document.getElementById("fname").value = datiCelle[1].textContent;  
    document.getElementById("lname").value = datiCelle[2].textContent;  
    document.getElementById("eta").value = datiCelle[3].textContent;    
    document.getElementById("residenza").value = datiCelle[4].textContent;  
    document.getElementById("email").value = datiCelle[5].textContent;  
    document.getElementById("telefono").value = datiCelle[6].textContent;  
    document.getElementById("username").value = datiCelle[7].textContent;  

    // Mostra la finestra di modifica
    document.getElementById('finestra').style.display = 'block';
}

function SalvaModifiche() {
    if (rigaSelezionata) {
        let datiCelle = rigaSelezionata.getElementsByTagName("td");

        // Aggiorna i valori della tabella con i nuovi dati inseriti
        datiCelle[1].textContent = document.getElementById("fname").value;
        datiCelle[2].textContent = document.getElementById("lname").value;
        datiCelle[3].textContent = document.getElementById("eta").value;
        datiCelle[4].textContent = document.getElementById("residenza").value;
        datiCelle[5].textContent = document.getElementById("email").value;
        datiCelle[6].textContent = document.getElementById("telefono").value;
        datiCelle[7].textContent = document.getElementById("username").value;

        // Chiude la finestra dopo aver salvato
        chiusuraFinestra();
    }
}

function Elimina(pulsante) {
    // Trova la riga della tabella corrispondente al pulsante cliccato
    let rigaSelezionata = pulsante.closest("tr");
    
    // Rimuove la riga dalla tabella
    rigaSelezionata.remove();
}



function chiusuraFinestra() {
    document.getElementById('finestra').style.display = 'none';
    rigaSelezionata = null;
}
