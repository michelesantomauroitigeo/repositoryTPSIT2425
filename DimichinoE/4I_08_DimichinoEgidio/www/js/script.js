document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita l'invio del modulo

    let valid = true;

    // Rimuovi i messaggi di errore
    document.querySelectorAll('.error-message').forEach(function(error) {
        error.style.display = 'none';
    });

    // Controlla se i campi sono vuoti
    if (document.getElementById('nome').value === '') {
        document.getElementById('nome-error').textContent = 'Nome richiesto';
        document.getElementById('nome-error').style.display = 'block';
        valid = false;
    }

    if (document.getElementById('cognome').value === '') {
        document.getElementById('cognome-error').textContent = 'Cognome richiesto';
        document.getElementById('cognome-error').style.display = 'block';
        valid = false;
    }

    if (document.getElementById('codice_fiscale').value === '') {
        document.getElementById('cf-error').textContent = 'Codice fiscale richiesto';
        document.getElementById('cf-error').style.display = 'block';
        valid = false;
    }

    if (document.getElementById('altezza').value === '') {
        document.getElementById('altezza-error').textContent = 'Altezza richiesta';
        document.getElementById('altezza-error').style.display = 'block';
        valid = false;
    }

    if (document.getElementById('peso').value === '') {
        document.getElementById('peso-error').textContent = 'Peso richiesto';
        document.getElementById('peso-error').style.display = 'block';
        valid = false;
    }

    // Se tutti i campi sono compilati, puoi inviare il modulo
    if (valid) {
        alert('Modulo inviato correttamente!');
        // Qui puoi aggiungere codice per inviare il modulo effettivamente
    }
});