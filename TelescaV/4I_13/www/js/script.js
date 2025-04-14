// Gestione del login
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();  // Impedisce il comportamento di invio predefinito del form

    // Ottieni i valori inseriti nei campi
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Controllo credenziali (simulato)
    if (username === 'admin' && password === 'admin') {
        // Se credenziali corrette, reindirizza alla pagina di amministrazione
        window.location.href = '../html/admin.html';  // Reindirizzamento alla pagina di amministrazione
    } else {
        alert('Credenziali errate!');
    }
});
