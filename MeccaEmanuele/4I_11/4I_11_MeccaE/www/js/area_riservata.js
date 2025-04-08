function checkAdminAccess(event) {
            // Preveniamo il comportamento di default del link
            event.preventDefault();

            // Chiediamo l'utente di inserire il nome
            var user = prompt("Inserisci il nome utente:");

            // Verifica se il nome utente è 'Mekka'
            if (user === "Mekka") {
                // Se il nome è corretto, reindirizza alla pagina di amministrazione
                window.location.href = "amministrazione.html";
            } else {
                // Altrimenti, mostra un messaggio di errore
                alert("Accesso negato. Il nome utente non è corretto.");
            }
        }