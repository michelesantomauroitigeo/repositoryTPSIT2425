const loginLink = document.querySelector('.login');
const registrazioneLink = document.querySelector('.registrazione');

loginLink.addEventListener('click', () => {
    loginLink.textContent = 'Login effettuato';
});

registrazioneLink.addEventListener('click', () => {
    registrazioneLink.textContent = 'Registrazione effettuata';
});