function Modifica(){
    document.getElementById('finestra').style.display='block';
}

function chiusuraFinestra(){
    document.getElementById('finestra').style.display='none';
}
function elimina(){
    document.getElementById('finestra1').style.display='block';
}

function chiusuraFinestra1(){
    document.getElementById('finestra1').style.display='none';
}

let rigaCorrente = null; // Variabile globale per tenere traccia della riga selezionata
let Controllo = null;

function Modifica(button) {
    // Trova la riga della tabella più vicina al pulsante cliccato
    rigaCorrente = button.closest('tr');

    if (rigaCorrente) {
        // Estrai i dati dalle celle (td)
        let nome = rigaCorrente.cells[0].textContent;
        let cognome = rigaCorrente.cells[1].textContent;
        let email = rigaCorrente.cells[2].textContent;
        let username = rigaCorrente.cells[3].textContent;
        let dataNascita = rigaCorrente.cells[4].textContent.split('/').reverse().join('-'); // Converti data in formato YYYY-MM-DD

        // Popola il form con i dati dell'utente selezionato
        document.getElementById('nome').value = nome;
        document.getElementById('cognome').value = cognome;
        document.getElementById('email').value = email;
        document.getElementById('username').value = username;
        document.getElementById('data-nascita').value = dataNascita;

        // Mostra la finestra di modifica
        document.getElementById('finestra').style.display = 'block';
    } else {
        console.error("Riga non trovata.");
    }
}

function salvaModifiche() {
    if (rigaCorrente) {
        // Aggiorna i dati nella tabella
        rigaCorrente.cells[0].textContent = document.getElementById('nome').value;
        rigaCorrente.cells[1].textContent = document.getElementById('cognome').value;
        rigaCorrente.cells[2].textContent = document.getElementById('email').value;
        rigaCorrente.cells[3].textContent = document.getElementById('username').value;
        rigaCorrente.cells[4].textContent = document.getElementById('data-nascita').value.split('-').reverse().join('/'); // Converti data in formato DD/MM/YYYY
    }

    // Chiudi la finestra
    chiusuraFinestra();
}

function chiusuraFinestra() {
    document.getElementById('finestra').style.display = 'none';
    
}

function abilita(button,idCheck){
    var riga=button.closest('tr');
    var controllo=document.getElementById(idCheck);
    if(controllo.checked){
        riga.style.backgroundColor='red';
         riga.style.Color='white';
    }
    else{
        riga.style.backgroundColor='white';
         riga.style.Color='black';
    }

}

