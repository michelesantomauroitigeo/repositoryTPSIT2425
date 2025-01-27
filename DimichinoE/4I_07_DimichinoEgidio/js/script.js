// Cambia immagine quando si clicca sul logo
document.getElementById('logo').addEventListener('click', function() {
    const logoImg = document.querySelector('#logo img');
    logoImg.src = 'imgs/logo-agg.jpg';
});

document.querySelectorAll('.menu-ogg').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.menu-ogg').forEach(link => link.style.backgroundColor = '');
        this.style.backgroundColor = 'yellow';
    });
});

// Modifica testo e stile dei pulsanti Login e Registrazione
document.querySelectorAll('.destra-menu a').forEach(item => {

    item.addEventListener('click', function() {
        if (this.classList.contains('login')) {
            this.textContent = 'Login effettuato';
        } else if (this.classList.contains('registrazione')) {
            this.textContent = 'Registrazione effettuata';
        }
        // Ingrandisce il testo
        this.style.fontSize = '18px';
        this.style.fontWeight = 'bold';
    });
});

