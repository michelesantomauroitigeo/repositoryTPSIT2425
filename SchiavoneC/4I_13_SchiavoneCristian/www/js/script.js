// Apertura e chiusura del modal di login
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeBtn = document.getElementById('closeBtn');
const logoutBtn = document.getElementById('logoutBtn');
const productSection = document.getElementById('productSection');

// Mostra il modal di login
loginBtn.onclick = function() {
    loginModal.style.display = "block";
}

// Chiudi il modal di login
closeBtn.onclick = function() {
    loginModal.style.display = "none";
}

// Chiudi il modal quando si clicca fuori dal modal
window.onclick = function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
}

// Gestione del form di login
const loginForm = document.getElementById('loginForm');
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');

loginForm.onsubmit = function(event) {
    event.preventDefault();

    // Reset degli errori
    usernameError.textContent = '';
    passwordError.textContent = '';

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    let isValid = true;

    // Controllo dei campi vuoti
    if (username === "") {
        usernameError.textContent = "Il campo Username è obbligatorio.";
        isValid = false;
    }

    if (password === "") {
        passwordError.textContent = "Il campo Password è obbligatorio.";
        isValid = false;
    }

    // Verifica delle credenziali
    if (isValid && username === "admin" && password === "admin123") {
        // Login riuscito, salva lo stato nel sessionStorage
        sessionStorage.setItem("loggedIn", "true");

        // Nascondi il modal e mostra la sezione per aggiungere prodotti
        loginModal.style.display = "none";
        productSection.style.display = "block";
        loginBtn.style.display = "none";  // Nascondi il bottone Accedi
        logoutBtn.style.display = "inline";  // Mostra il bottone Logout
    } else if (isValid) {
        // Dati errati
        usernameError.textContent = "Dati errati, riprova.";
        passwordError.textContent = "Dati errati, riprova.";
    }
}

// Gestione del logout
logoutBtn.onclick = function() {
    sessionStorage.removeItem("loggedIn");  // Rimuove il flag di login
    productSection.style.display = "none";  // Nasconde la sezione per aggiungere prodotti
    loginBtn.style.display = "inline";  // Mostra di nuovo il bottone Accedi
    logoutBtn.style.display = "none";  // Nasconde il bottone Logout
}
