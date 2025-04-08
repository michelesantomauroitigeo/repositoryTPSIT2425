document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevenire l'invio del form

    let isValid = true;

    // Validazione del campo email
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    // Validazione del campo username
    const username = document.getElementById('username');
    const usernameError = document.getElementById('usernameError');
    if (!username.value) {
        usernameError.style.display = 'block';
        isValid = false;
    } else {
        usernameError.style.display = 'none';
    }

    // Validazione del campo password (con lunghezza minima)
    const password = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
    if (!password.value ) {  
        passwordError.style.display = 'block';
        isValid = false;
    } else {
        passwordError.style.display = 'none';
    }

    // Se tutti i campi sono validi, invia il form e reindirizza alla pagina successiva
    if (isValid) {
        window.location.href = "file:///C:/Users/emadi/OneDrive/Documenti/GitHub/MeccaEmanuele/4I_11/4I_11_MeccaE/www/html/area_riservata.html"; 
    }
});
