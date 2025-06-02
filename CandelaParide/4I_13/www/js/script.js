const USERNAME_CORRETTO = "Admin";
const PASSWORD_CORRETTA = "admin123";

function login(event) {
    event.preventDefault();
    document.getElementById("errore-credenziali").style.display = "none";
    document.getElementById("errore-username").style.display = "none";
    document.getElementById("errore-password").style.display = "none";

    // Credenziali corrette
 
    
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



//registrazione

function mostraRegistrazione() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("overlay-registrazione").style.display = "flex";
}

function mostraLogin() {
    document.getElementById("overlay-registrazione").style.display = "none";
    document.getElementById("overlay").style.display = "flex";
}

function chiudiRegistrazione() {
    document.getElementById("overlay-registrazione").style.display = "none";
}

function registrati(event) {
    event.preventDefault();

    // Nascondi tutti gli errori all'inizio
    document.getElementById("errore-email-reg").style.display = "none";
    document.getElementById("errore-username-reg").style.display = "none";
    document.getElementById("errore-password-reg").style.display = "none";
    document.getElementById("errore-conf-password-reg").style.display = "none";

    const email = document.getElementById("email-reg").value.trim();
    const usernameReg = document.getElementById("username-reg").value.trim();
    const password = document.getElementById("password-reg").value.trim();
    const confPassword = document.getElementById("conf-password-reg").value.trim();

    let validaReg = true; 

    if(email === "" || !email.includes('@')) {
        document.getElementById("errore-email-reg").style.display = "block";
        validaReg = false;
    }

    if(usernameReg === "") {
        document.getElementById("errore-username-reg").style.display = "block";
        validaReg = false;
    }

    if(password === "") {
        document.getElementById("errore-password-reg").style.display = "block";
        validaReg = false;
    }

    if(password !== confPassword) {
        document.getElementById("errore-conf-password-reg").style.display = "block";
        validaReg = false;
    }

    if(validaReg) {
        chiudiRegistrazione();
        window.location.href = "html/area_riservata.html"; 
    }
    
    return false;
}