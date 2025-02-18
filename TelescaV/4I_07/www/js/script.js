function cambiaImmagine() {
    document.getElementById('nuovaImmagine').style.display = 'block';
}

function evidenziaLink(elemento) {
    var link = document.querySelectorAll('nav a');
    link.forEach(link => link.style.backgroundColor = 'transparent');
    elemento.style.backgroundColor = 'yellow';
}

function gestisciLogin(elemento) {
    elemento.style.fontSize = '150%';
    elemento.innerHTML = 'Login effettuato';
}

function gestisciRegistrazione(elemento) {
    elemento.style.fontSize = '150%';
    elemento.innerHTML = 'Registrazione effettuata';
}
