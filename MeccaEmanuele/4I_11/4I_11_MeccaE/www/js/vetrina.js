document.addEventListener('DOMContentLoaded', () => {
    const loginLink = document.getElementById('loginLink');
    const registerLink = document.getElementById('registerLink'); // Aggiunto il link di registrazione
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('RegisterModal'); // Modale di registrazione
    const closeModal = document.querySelectorAll('.close');
    const loginBtn = document.getElementById('loginBtn'); // Bottone di login
    const registerBtn = document.getElementById('registerBtn'); // Bottone di registrazione
    const errorLoginMsg = document.getElementById('error'); // Messaggio di errore login
    const errorRegisterMsg = document.getElementById('error'); // Messaggio di errore registrazione

    // Apri modale Login al click
    loginLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.style.display = 'block';
    });

    // Apri modale Registrazione al click
    registerLink.addEventListener('click', (e) => {
        e.preventDefault();
        registerModal.style.display = 'block';
    });

    // Funzione per chiudere entrambi i modali
    closeModal.forEach(closeButton => {
        closeButton.addEventListener('click', () => {
            loginModal.style.display = 'none';
            registerModal.style.display = 'none';
            errorLoginMsg.style.display = 'none';
            errorRegisterMsg.style.display = 'none';
        });
    });

    // Chiudi modale cliccando fuori dal modale
    window.addEventListener('click', (e) => {
        if (e.target == loginModal || e.target == registerModal) {
            loginModal.style.display = 'none';
            registerModal.style.display = 'none';
            errorLoginMsg.style.display = 'none';
            errorRegisterMsg.style.display = 'none';
        }
    });

    // Login
    loginBtn.addEventListener('click', () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === "Emanuele" && password === "1234567") {
            window.location.href = "html/area_riservata.html"; // Redirige a pagina riservata
        } else {
            errorLoginMsg.style.display = 'block'; // Mostra messaggio di errore
        }
    });

    // Registrazione
    registerBtn.addEventListener('click', () => {
        const email = document.getElementById('email').value;
        const username = document.getElementById('username').value; // Nome utente per la registrazione
        const password = document.getElementById('password').value;

        // Aggiungi la logica di controllo registrazione (esempio semplice)
        if (username === "Emanuele") {
            errorRegisterMsg.textContent = "Nome utente già utilizzato";
            errorRegisterMsg.style.display = 'block'; // Mostra errore se l'utente è già registrato
        } else {
            alert("Registrazione avvenuta con successo!"); // Simulazione registrazione
            registerModal.style.display = 'none'; // Chiude la modale dopo la registrazione
        }
    });
});
