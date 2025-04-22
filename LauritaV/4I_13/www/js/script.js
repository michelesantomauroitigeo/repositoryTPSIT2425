function apriLogin() {
    document.getElementsByClassName("finestra-login")[0].style.display = "block";
}

function chiudiLogin() {
    document.getElementsByClassName("finestra-login")[0].style.display = "none";
}

function Login() {
    let usern = document.getElementById("username");
    let passw = document.getElementById("password");
    let usererrore = document.getElementById("user-errore");
    let passwerrore = document.getElementById("password-errore");
    let contaerrori = 0;

    //controlli su username e password
    usererrore.style.display = "none";
    passwerrore.style.display = "none";

    if (usern.value === '') {
        usererrore.style.display = "block";
        contaerrori++;
    }
    if (passw.value === '') {
        passwerrore.style.display = "block";
        contaerrori++;
    }

    if (contaerrori > 0) {
        return false;
    }

    if (usern.value === "admin" && passw.value === "12345") {
        window.location.href = "html/admin.html";
        return false; 
    } else document.getElementById("campo-sbagliato").style.display = 'block'; {
        return false;
    }
}