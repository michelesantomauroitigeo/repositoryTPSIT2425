
function modifica(){
    document.getElementById('finestraModifica').style.display='block';
}

function chiusuraFinestraModifica(){
    document.getElementById('finestraModifica').style.display='none';
}


function Login(){
    document.getElementById('finestra').style.display='block';
}
function chiusuraFinestra(){

    document.getElementById('finestra').style.display='none';
}

function validaLogin(event){
    event.preventDefault(); //non fa inviare il form
    let nomeUtente = document.getElementById("nomeUtente");
    let Password = document.getElementById("Password");
    let controllo = true;

    
    if (nomeUtente.value.trim() === '' || nomeUtente.value.trim() !== "Mario" ) {  
        document.getElementById("n-errore").style.display = 'block'; 
        controllo = false;
    } else {
        document.getElementById("n-errore").style.display = 'none'; 
    }

    if (Password.value.trim() === '' || Password.value.trim() !== "1234") { 
        document.getElementById("p-errore").style.display = 'block'; 
        controllo = false;
    } else {
        document.getElementById("p-errore").style.display = 'none'; 
    }
    
    if(controllo == true){
        window.location.href = "html/amministrazione.html"; 
    }
    return controllo; 
}

function aggiungi(){
    document.getElementById('finestraAggiungi').style.display='block';
}
function chiusuraFinestraAggiungi(){

    document.getElementById('finestraAggiungi').style.display='none';
}
function valida(event) {
    event.preventDefault(); // Impedisce l'invio del form

    let immagine = document.getElementById("immagine");
    let titolo = document.getElementById("titolo");
    let descrizione = document.getElementById("descrizione");
    let controllo = true;

    // Controllo immagine
    if (immagine.files.length === 0) {
        document.getElementById("errore-immagine").style.display = 'block';
        controllo = false;
    } else {
        document.getElementById("errore-immagine").style.display = 'none';
    }

    // Controllo titolo
    if (titolo.value.trim() === '') {
        document.getElementById("errore-titolo").style.display = 'block';
        controllo = false;
    } else {
        document.getElementById("errore-titolo").style.display = 'none';
    }

    // Controllo descrizione
    if (descrizione.value.trim() === '') {
        document.getElementById("errore-descrizione").style.display = 'block';
        controllo = false;
    } else {
        document.getElementById("errore-descrizione").style.display = 'none';
    }

    return controllo; // Non fa nulla se controllo = false
}

function lista() {
    document.getElementById('finestraLista').style.display = 'block';
}

function chiusuraFinestraLista() {
    document.getElementById('finestraLista').style.display = 'none';
}
let rigaCorrente = null;

function modifica(button) {
    // Trova la riga della tabella più vicina al pulsante cliccato
    rigaCorrente = button.closest('tr');

    if (rigaCorrente) {
        // Estrai i dati dalle celle (td)
        let titolo = rigaCorrente.cells[0].textContent;
        let descrizione = rigaCorrente.cells[1].textContent;

        // Popola il form con i dati della riga selezionata
        document.getElementById('nome').value = titolo;
        document.getElementById('descrizione').value = descrizione;

        // Mostra la finestra di modifica
        document.getElementById('finestraModifica').style.display = 'block';
    } else {
        console.error("Riga non trovata.");
    }
}

function salvaModifiche() {
    if (rigaCorrente) {
        // Aggiorna i dati nella tabella
        rigaCorrente.cells[0].textContent = document.getElementById('nome').value;
        rigaCorrente.cells[1].textContent = document.getElementById('descrizione').value;
    }

    // Chiudi la finestra
    chiusuraFinestraModifica();
}

function chiusuraFinestraModifica() {
    document.getElementById('finestraModifica').style.display = 'none';
}
function elimina(pulsante) {
    // Trova la riga della tabella corrispondente al pulsante cliccato
    let rigaSelezionata = pulsante.closest("tr");
    
    // Rimuove la riga dalla tabella
    rigaSelezionata.remove();
}


function Registrati() {
    document.getElementById('finestraRegistrazione').style.display = 'block';
}

function chiusuraFinestraRegistrazione() {
    document.getElementById('finestraRegistrazione').style.display = 'none';
}
function validaRegistrazione(event) {
    event.preventDefault(); // Impedisce l'invio del form

    // Prendi i valori dei campi del modulo
    let nome = document.getElementById("reg-nome");
    let cognome = document.getElementById("reg-cognome");
    let email = document.getElementById("reg-email");
    let utente = document.getElementById("reg-utente");
    let password = document.getElementById("reg-password");
    let confermaPassword = document.getElementById("reg-conferma-password");
    let data = document.getElementById("reg-data");
    let telefono = document.getElementById("reg-telefono");
    let indirizzo = document.getElementById("reg-indirizzo");
    let controllo = true;

    // Controllo Nome
    if (nome.value.trim() === '') {
        document.getElementById("errore-nome").style.display = 'block';
        controllo = false;
    } else {
        document.getElementById("errore-nome").style.display = 'none';
    }

    // Controllo Cognome
    if (cognome.value.trim() === '') {
        document.getElementById("errore-cognome").style.display = 'block';
        controllo = false;
    } else {
        document.getElementById("errore-cognome").style.display = 'none';
    }

    // Controllo Email
    if (email.value.trim() === '') {
        document.getElementById("errore-email").style.display = 'block';
        controllo = false;
    } else {
        document.getElementById("errore-email").style.display = 'none';
    }

    // Controllo Nome Utente
    if (utente.value.trim() === '') {
        document.getElementById("errore-utente").style.display = 'block';
        controllo = false;
    } else {
        document.getElementById("errore-utente").style.display = 'none';
    }

    // Controllo Password
    if (password.value.trim() === '') {
        document.getElementById("errore-password").style.display = 'block';
        controllo = false;
    } else {
        document.getElementById("errore-password").style.display = 'none';
    }

    // Controllo Conferma Password
    if (confermaPassword.value.trim() === '') {
        document.getElementById("errore-conferma-password").style.display = 'block';
        controllo = false;
    } else if (confermaPassword.value !== password.value) {
        document.getElementById("errore-conferma-password").innerHTML = 'Le password non corrispondono';
        document.getElementById("errore-conferma-password").style.display = 'block';
        controllo = false;
    } else {
        document.getElementById("errore-conferma-password").style.display = 'none';
    }

    // Controllo Data di Nascita
    if (data.value.trim() === '') {
        document.getElementById("errore-data").style.display = 'block';
        controllo = false;
    } else {
        document.getElementById("errore-data").style.display = 'none';
    }

    // Controllo Telefono
    if (telefono.value.trim() === '') {
        document.getElementById("errore-telefono").style.display = 'block';
        controllo = false;
    } else {
        document.getElementById("errore-telefono").style.display = 'none';
    }

    // Controllo Indirizzo
    if (indirizzo.value.trim() === '') {
        document.getElementById("errore-indirizzo").style.display = 'block';
        controllo = false;
    } else {
        document.getElementById("errore-indirizzo").style.display = 'none';
    }

    return controllo; // Non fa nulla se controllo = false
}
function abilita(button,idCheck){
    var riga=button.closest('tr');
    var controllo=document.getElementById(idCheck);
    if(controllo.checked){
        riga.style.backgroundColor='green';
         riga.style.Color='white';
    }
    else{
        riga.style.backgroundColor='white';
         riga.style.Color='black';
    }

}