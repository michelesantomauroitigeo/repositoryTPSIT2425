function validateForm() {
  var nome = document.getElementById('nome').value.trim();
  var cognome = document.getElementById('cognome').value.trim();
  var telefono = document.getElementById('telefono').value.trim();
  var codiceFiscale = document.getElementById('codice-fiscale').value.trim();
  var altezza = document.getElementById('altezza').value.trim();
  var peso = document.getElementById('peso').value.trim();
  var errorMessaggio = document.getElementById('error-message');

  // Controllo se i campi sono vuoti
  if (!nome || !cognome || !telefono || !codiceFiscale || !altezza || !peso) {
    errorMessaggio.innerText = 'Per favore, riempire tutti i campi.';
    return false;
  }

  // Controllo se altezza e peso sono numeri positivi
  if (isNaN(altezza) || altezza <= 0) {
    errorMessaggio.innerText = 'Inserire un\'altezza valida.';
    return false;
  }

  if (isNaN(peso) || peso <= 0) {
    errorMessaggio.innerText = 'Inserire un peso valido.';
    return false;
  }

  // Se tutti i controlli passano
  errorMessaggio.innerText = '';
  alert('Registrazione completata con successo!');
  return true;
}
