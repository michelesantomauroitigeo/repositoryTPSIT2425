document.getElementById('logo').addEventListener('click', function () {
    this.src = 'imgs/nuovo_logo.jpg';
});

document.querySelectorAll('.menu-link').forEach(function (link) {
    link.addEventListener('click', function () {
        document.querySelectorAll('.menu-link').forEach(function (l) {
            l.classList.remove('highlight');
        });
        this.classList.add('highlight');
    });
});

document.getElementById('login').addEventListener('click', function () {
    this.textContent = 'Login effettuato';
    this.classList.add('enlarged');
});

document.getElementById('registration').addEventListener('click', function () {
    this.textContent = 'Registrazione effettuata';
    this.classList.add('enlarged');
});
