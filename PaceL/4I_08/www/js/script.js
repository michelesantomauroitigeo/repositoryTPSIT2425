function preventSubmit(event) {
    event.preventDefault(); // Previene l'invio del form
    let valid = true;

    // Aggiungi qui la validazione dei campi
    let nome = document.getElementById('nome').value;
    let cognome = document.getElementById('cognome').value;
    let dataNascita = document.getElementById('data_nascita').value;
    let residenza = document.getElementById('residenza').value;
    let telefono = document.getElementById('telefono').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let   confermaPassword = document.getElementById('conferma_password').value;

    // Esegui la validazione dei campi e mostra gli errori se necessario
    if (nome === "") {
        document.getElementById('erroreNome').textContent = "Campo obbligatorio.";
        valid = false;
    }

    if (cognome === "") {
        document.getElementById('erroreCognome').textContent = "Campo obbligatorio.";
        valid = false;
    }

    if (dataNascita === "") {
        document.getElementById('erroreDataNascita').textContent = "Campo obbligatorio.";
        valid = false;
    }

    if (residenza === "") {
        document.getElementById('erroreResidenza').textContent = "Campo obbligatorio.";
        valid = false;
    }

    if (telefono === "") {
        document.getElementById('erroreTelefono').textContent = "Campo obbligatorio.";
        valid = false;
    }

    if (email === "") {
        document.getElementById('erroreEmail').textContent = "Campo obbligatorio.";
        valid = false;
    }

    if (password === "") {
        document.getElementById('errorePassword').textContent = "Campo obbligatorio.";
        valid = false;
    }

    if (confermaPassword !== password) {
        document.getElementById('erroreConfermaPassword').textContent = "Le password non coincidono.";
        valid = false;
    }

    // Se tutti i campi sono validi, invia il modulo
    if (valid) {
        alert("Registrazione completata con successo!");
        // Qui puoi aggiungere il codice per inviare il modulo via AJAX o tramite un altro metodo
    }

    return valid;
}


// Aggiungi l'event listener per rimuovere il messaggio di errore quando l'utente modifica un campo
document.getElementById('nome').addEventListener('input', function() {
    if (this.value !== "") {
        document.getElementById('erroreNome').textContent = "";
    }
});

document.getElementById('cognome').addEventListener('input', function() {
    if (this.value !== "") {
        document.getElementById('erroreCognome').textContent = "";
    }
});

document.getElementById('data_nascita').addEventListener('input', function() {
    if (this.value !== "") {
        document.getElementById('erroreDataNascita').textContent = "";
    }
});

document.getElementById('residenza').addEventListener('input', function() {
    if (this.value !== "") {
        document.getElementById('erroreResidenza').textContent = "";
    }
});

document.getElementById('telefono').addEventListener('input', function() {
    if (this.value !== "") {
        document.getElementById('erroreTelefono').textContent = "";
    }
});

document.getElementById('email').addEventListener('input', function() {
    if (this.value !== "") {
        document.getElementById('erroreEmail').textContent = "";
    }
});

document.getElementById('password').addEventListener('input', function() {
    if (this.value !== "") {
        document.getElementById('errorePassword').textContent = "";
    }
});

document.getElementById('conferma_password').addEventListener('input', function() {
    if (this.value === document.getElementById('password').value) {
        document.getElementById('erroreConfermaPassword').textContent = "";
    }
});