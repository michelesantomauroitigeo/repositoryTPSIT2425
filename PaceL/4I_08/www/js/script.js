function preventSubmit(event) {
    event.preventDefault(); // Previene l'invio del form
    let valid = true;

    // Aggiungi qui la validazione dei campi
    const nome = document.getElementById('nome').value;
    const cognome = document.getElementById('cognome').value;
    const dataNascita = document.getElementById('data_nascita').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confermaPassword = document.getElementById('conferma_password').value;

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