function Login(){
    document.getElementById('finestra').style.display = 'block';
}

function chiusuraFinestra(){
    document.getElementById('finestra').style.display = 'none';
}

function validaLogin() {
    event.preventDefault();
    const nomeUtente = document.getElementById("nomeUtente");
    const password = document.getElementById("Password");
    let controllo = true;

    if (nomeUtente.value.trim() === '') {
        document.getElementById("n-errore").style.display = 'block';
        nome.classList.add('errore');
        controllo = false;
    } else {
        document.getElementById("n-errore").style.display = 'none';
        nome.classList.remove('errore');
    }

    if (password.value.trim() === '') {
        document.getElementById("p-errore").style.display = 'block';
        password.classList.add('errore');
        controllo = false;
    } else {
        document.getElementById("p-errore").style.display = 'none';
        password.classList.remove('errore');
    }

    return controllo;
}
