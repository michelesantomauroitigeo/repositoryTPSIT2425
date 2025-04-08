function login(event) {
    event.preventDefault();
    document.getElementById("errore-credenziali").style.display = "none";
    document.getElementById("errore-username").style.display = "none";
    document.getElementById("errore-password").style.display = "none";

    // Credenziali corrette
    const USERNAME_CORRETTO = "Paride";
    const PASSWORD_CORRETTA = "Gigio1";
    
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    
    //  Controllo campi vuoti
    if(username === "" || password === "") {
        if(username === "") {
            document.getElementById("errore-username").style.display = "block";
        }
        if(password === "") {
            document.getElementById("errore-password").style.display = "block";
        }
        return false;
    }
    //  Controllo credenziali 
    if(username !== USERNAME_CORRETTO || password !== PASSWORD_CORRETTA) {
        document.getElementById("errore-credenziali").style.display = "block";
        return false;
    }
    window.location.href = "html/area_riservata.html";
    return true;
}

function popup() {
    document.getElementById("overlay").style.display = "flex";
}

function chiudi() {
    document.getElementById("overlay").style.display = "none";
}