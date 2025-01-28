document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault();

  // Nascondi gli errori precedenti
  document.getElementById("nome-error").textContent = "";
  document.getElementById("cognome-error").textContent = "";
  document.getElementById("email-error").textContent = "";
  document.getElementById("telefono-error").textContent = "";
  document.getElementById("cf-error").textContent = "";
  document.getElementById("altezza-error").textContent = "";
  document.getElementById("peso-error").textContent = "";

  let valid = true;

  // Verifica Nome
  const nome = document.getElementById("nome").value;
  if (nome === "") {
    document.getElementById("nome-error").textContent = "Il nome è obbligatorio.";
    valid = false;
  }

  // Verifica Cognome
  const cognome = document.getElementById("cognome").value;
  if (cognome === "") {
    document.getElementById("cognome-error").textContent = "Il cognome è obbligatorio.";
    valid = false;
  }

  // Verifica Email
  const email = document.getElementById("email").value;
  if (email === "") {
    document.getElementById("email-error").textContent = "L'email è obbligatoria.";
    valid = false;
  }

  // Verifica Numero di Telefono
  const telefono = document.getElementById("telefono").value;
  if (telefono === "") {
    document.getElementById("telefono-error").textContent = "Il numero di telefono è obbligatorio.";
    valid = false;
  } else if (!/^\d{10}$/.test(telefono)) {
    document.getElementById("telefono-error").textContent = "Il numero di telefono deve essere di 10 cifre.";
    valid = false;
  }

  // Verifica Codice Fiscale
  const codiceFiscale = document.getElementById("codice_fiscale").value;
  if (codiceFiscale === "") {
    document.getElementById("cf-error").textContent = "Il codice fiscale è obbligatorio.";
    valid = false;
  }

  // Verifica Altezza
  const altezza = document.getElementById("altezza").value;
  if (altezza === "") {
    document.getElementById("altezza-error").textContent = "L'altezza è obbligatoria.";
    valid = false;
  }

  // Verifica Peso
  const peso = document.getElementById("peso").value;
  if (peso === "") {
    document.getElementById("peso-error").textContent = "Il peso è obbligatorio.";
    valid = false;
  }

  if (valid) {
    alert("Registrazione completata!");
  }
});