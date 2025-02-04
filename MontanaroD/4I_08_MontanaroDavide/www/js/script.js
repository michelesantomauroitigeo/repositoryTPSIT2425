function controlloRegistrazione() {
    const input_nome = document.getElementById("nome");
    const input_cognome = document.getElementById("cognome");
    const input_username = document.getElementById("username");
    const input_email = document.getElementById("email");
    const input_telefono = document.getElementById("telefono");
    const input_password = document.getElementById("password");

    let Controllo = true; 

    if (input_nome.value.trim() === '') {
        document.getElementById("nome-error").style.display = 'block';
        input_nome.classList.add('errore');
        Controllo = false; 
    } else {
        document.getElementById("nome-error").style.display = 'none';
        input_nome.classList.remove('errore');
    }

    if (input_cognome.value.trim() === '') {
        document.getElementById("cognome-error").style.display = 'block';
        input_cognome.classList.add('errore');
        Controllo = false;
    } else {
        document.getElementById("cognome-error").style.display = 'none';
        input_cognome.classList.remove('errore');
    }

    if (input_username.value.trim() === '') {
        document.getElementById("username-error").style.display = 'block';
        input_username.classList.add('errore');
        Controllo = false;
    } else {
        document.getElementById("username-error").style.display = 'none';
        input_username.classList.remove('errore');
    }

    if (input_email.value.trim() === '') {
        document.getElementById("email-error").style.display = 'block';
        input_email.classList.add('errore');
        Controllo = false;
    } else {
        document.getElementById("email-error").style.display = 'none';
        input_email.classList.remove('errore');
    }

    if (input_telefono.value.trim() === '') {
        document.getElementById("telefono-error").style.display = 'block';
        input_telefono.classList.add('errore');
        Controllo = false;
    } else {
        document.getElementById("telefono-error").style.display = 'none';
        input_telefono.classList.remove('errore');
    }

    if (input_password.value.trim() === '') {
        document.getElementById("password-error").style.display = 'block';
        input_password.classList.add('errore');
        Controllo = false;
    } else {
        document.getElementById("password-error").style.display = 'none';
        input_password.classList.remove('errore');
    }

    return Controllo; 
}

console.log("Errori:");