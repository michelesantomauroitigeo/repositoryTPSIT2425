function ApriLogin() {
    const loginBox = document.getElementById('finestra-login');
    loginBox.style.display = 'block';
}

function salvaFinestra() {
    if(valido==true){
        const loginBox = document.getElementById('finestra-login');
        loginBox.style.display = 'none';
    }
}

function chiudiFinestra() { 
        const loginBox = document.getElementById('finestra-login');
        loginBox.style.display = 'none';
}

function ValidaLogin(event) {
    event.preventDefault();

    let valido = true;
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const mess1 = document.getElementById("mess1");
    const mess2 = document.getElementById("mess2");

    // Reset messaggi
    mess1.innerText = '';
    mess2.innerText = '';

    if (username.value.trim() === "") {
        mess1.innerText = "Il campo username è obbligatorio.";
        mess1.style.color = "red";
        username.style.borderColor = "red";
        valido = false;
    } else {
        username.style.borderColor = "";
    }

    if (password.value.trim() === "") {
        mess2.innerText = "Il campo password è obbligatorio.";
        mess2.style.color = "red";
        password.style.borderColor = "red";
        valido = false;
    } else {
        password.style.borderColor = "";
    }
}
