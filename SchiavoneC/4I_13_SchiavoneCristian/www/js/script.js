// Gestione del form di modifica password
const passwordForm = document.getElementById('passwordForm');

if (passwordForm) {
    passwordForm.onsubmit = function (event) {
        event.preventDefault();

        // Reset errori
        document.getElementById('usernameError').textContent = '';
        document.getElementById('oldPasswordError').textContent = '';
        document.getElementById('newPasswordError').textContent = '';

        const username = document.getElementById('username').value;
        const oldPassword = document.getElementById('oldPassword').value;
        const newPassword = document.getElementById('newPassword').value;

        let isValid = true;

        // Controllo campi vuoti
        if (username === "") {
            document.getElementById('usernameError').textContent = "Il campo Username è obbligatorio.";
            isValid = false;
        }

        if (oldPassword === "") {
            document.getElementById('oldPasswordError').textContent = "Il campo Vecchia Password è obbligatorio.";
            isValid = false;
        }

        if (newPassword === "") {
            document.getElementById('newPasswordError').textContent = "Il campo Nuova Password è obbligatorio.";
            isValid = false;
        }

        // Se tutti i campi sono validi, continua con il cambiamento della password
        if (isValid) {
            // Aggiungi il codice per la modifica della password
            alert("Password cambiata con successo!");

            // Reset campi form dopo successo (opzionale)
            passwordForm.reset();
        }
    }
}

// Apertura e chiusura del modal di login (se necessario, in base al tuo codice esistente)
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeBtn = document.getElementById('closeBtn');
const logoutBtn = document.getElementById('logoutBtn');
const productSection = document.getElementById('productSection');

// Mostra il modal di login
if (loginBtn) {
    loginBtn.onclick = function () {
        loginModal.style.display = "block";
    }
}

// Chiudi il modal di login
if (closeBtn) {
    closeBtn.onclick = function () {
        loginModal.style.display = "none";
    }
}

// Chiudi il modal quando si clicca fuori dal modal
window.onclick = function (event) {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
}

// Gestione del form di login
const loginForm = document.getElementById('loginForm');
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');

if (loginForm) {
    loginForm.onsubmit = function (event) {
        event.preventDefault();

        // Reset errori
        usernameError.textContent = '';
        passwordError.textContent = '';

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        let isValid = true;

        // Controllo campi vuoti
        if (username === "") {
            usernameError.textContent = "Il campo Username è obbligatorio.";
            isValid = false;
        }

        if (password === "") {
            passwordError.textContent = "Il campo Password è obbligatorio.";
            isValid = false;
        }

        // Verifica credenziali
        if (isValid && username === "admin" && password === "admin123") {
            sessionStorage.setItem("loggedIn", "true");

            // Redirect alla pagina admin
            window.location.href = "html/admin.html";
        } else if (isValid) {
            usernameError.textContent = "Dati errati, riprova.";
            passwordError.textContent = "Dati errati, riprova.";
        }
    }
}

// Logout (opzionale se lo usi da index)
if (logoutBtn) {
    logoutBtn.onclick = function () {
        sessionStorage.removeItem("loggedIn");
        productSection.style.display = "none";
        loginBtn.style.display = "inline";
        logoutBtn.style.display = "none";
    }
}
