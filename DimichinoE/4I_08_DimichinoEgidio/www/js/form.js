function validateForm() {
  // Nascondi il messaggio di errore
  document.getElementById('errorMessage').style.display = 'none';
  
  // Ottieni tutti gli input del modulo
  const fields = document.querySelectorAll("#userForm input[type='text']");
  let isValid = true;
  
  // Controlla se tutti i campi sono compilati
  fields.forEach(field => {
    if (field.value.trim() === '') {
      isValid = false;
    }
  });
  
  if (!isValid) {
    // Se uno dei campi non è compilato, mostra il messaggio di errore
    document.getElementById('errorMessage').style.display = 'block';
    return false; // Non invia il modulo
  }
  
  return true; // Invia il modulo
}