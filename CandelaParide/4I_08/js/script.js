function login() {
    const nome = document.getElementById("nome");
    const cognome = document.getElementById("cognome");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const telefono = document.getElementById("telefono");
    const nascita = document.getElementById("nascita");
    const password = document.getElementById("password");

    let valida = true;

    if (username.value.trim() === '') {
        document.getElementById("username-errore").style.display = 'block';
        username.classList.add('errore');
        valida = false;
    } else {
        document.getElementById("username-errore").style.display = 'none';
        username.classList.remove('errore');
    }

    if (nome.value.trim() === '') {
        document.getElementById("nome-errore").style.display = 'block';
        nome.classList.add('errore');
        valida = false;
    } else {
        document.getElementById("nome-errore").style.display = 'none';
        nome.classList.remove('errore');
    }

    if (cognome.value.trim() === '') {
        document.getElementById("cognome-errore").style.display = 'block';
        cognome.classList.add('errore');
        valida = false;
    } else {
        document.getElementById("cognome-errore").style.display = 'none';
        cognome.classList.remove('errore');
    }

    if (email.value.trim() === '') {
        document.getElementById("email-errore").style.display = 'block';
        email.classList.add('errore');
        valida = false;
    } else {
        document.getElementById("email-errore").style.display = 'none';
        email.classList.remove('errore');
    }

    if (telefono.value.trim() === '') {
        document.getElementById("telefono-errore").style.display = 'block';
        telefono.classList.add('errore');
        valida = false;
    } else {
        document.getElementById("telefono-errore").style.display = 'none';
        telefono.classList.remove('errore');
    }

    if (nascita.value === '') {  
        document.getElementById("nascita-errore").style.display = 'block';
        nascita.classList.add('errore');
        valida = false;
    } else {
        document.getElementById("nascita-errore").style.display = 'none';
        nascita.classList.remove('errore');
    }

    if (password.value.trim() === '') {
        document.getElementById("password-errore").style.display = 'block';
        password.classList.add('errore');
        valida = false;
    } else {
        document.getElementById("password-errore").style.display = 'none';
        password.classList.remove('errore');
    }

    return valida;
}
