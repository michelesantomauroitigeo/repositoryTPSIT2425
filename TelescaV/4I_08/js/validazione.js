document.getElementById('form-registrazione').addEventListener('submit', function (e) {
    e.preventDefault();

    // Pulizia messaggi di errore
    document.querySelectorAll('.errore').forEach(function (elemento) {
        elemento.textContent = '';
    });

    let campiValidi = true;

    // Lista dei campi e relativi messaggi di errore
    const campi = [
        { id: 'nome', messaggio: 'Il nome è obbligatorio' },
        { id: 'cognome', messaggio: 'Il cognome è obbligatorio' },
        { id: 'email', messaggio: 'L\'email è obbligatoria' },
        { id: 'password', messaggio: 'La password è obbligatoria' },
        { id: 'telefono', messaggio: 'Il numero di telefono è obbligatorio' },
        { id: 'indirizzo', messaggio: 'L\'indirizzo è obbligatorio' },
        { id: 'indirizzo-secondario', messaggio: 'L\'indirizzo secondario è obbligatorio' }
    ];

    // Validazione dei campi
    campi.forEach(campo => {
        const valore = document.getElementById(campo.id).value.trim();
        if (!valore) {
            document.getElementById(`errore-${campo.id}`).textContent = campo.messaggio;
            campiValidi = false;
        }
    });

    // Se tutti i campi sono validi
    if (campiValidi) {
        alert('Registrazione completata!');
    }
});
