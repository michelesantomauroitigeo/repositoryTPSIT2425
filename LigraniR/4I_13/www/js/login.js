function Login() {
    document.getElementById('finestra').style.display = 'block';
}

function chiusuraFinestra() {
    document.getElementById('finestra').style.display = 'none';
}

function validaLogin(event) {
    event.preventDefault(); // Prevenire il comportamento di default del form

    // Nascondi i messaggi di errore
    document.getElementById("errore-credenziali").style.display = "none";  
    document.getElementById("n-errore").style.display = 'none';
    document.getElementById("p-errore").style.display = 'none';
    
    const USERNAME_CORRETTO = "admin";
    const PASSWORD_CORRETTA = "1234";
    const nomeUtente = document.getElementById("nomeUtente");
    const password = document.getElementById("Password");
    let controllo = true;

    // Controllo del nome utente
    if (nomeUtente.value.trim() === '') {
        document.getElementById("n-errore").style.display = 'block';
        nomeUtente.classList.add('errore');
        controllo = false;
    } else {
        document.getElementById("n-errore").style.display = 'none';
        nomeUtente.classList.remove('errore');
    }

    // Controllo della password
    if (password.value.trim() === '') {
        document.getElementById("p-errore").style.display = 'block';
        password.classList.add('errore');
        controllo = false;
    } else {
        document.getElementById("p-errore").style.display = 'none';
        password.classList.remove('errore');
    }

    // Se i campi sono vuoti, non eseguire il login
    if (!controllo) {
        return false;
    }

    // Controllo delle credenziali
    if (nomeUtente.value !== USERNAME_CORRETTO || password.value !== PASSWORD_CORRETTA) {
        document.getElementById("errore-credenziali").style.display = "block";
        return false;
    }

    // Reindirizza alla pagina dopo il login
    window.location.href = "html/gestione.html";
    return true;
}

// Aggiungi il listener al form per l'evento submit
document.getElementById("loginForm").addEventListener("submit", validaLogin);