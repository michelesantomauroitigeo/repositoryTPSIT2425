document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault();

  // Nascondi gli errori precedenti
  document.getElementById("username-error").textContent = "";
  document.getElementById("nome-error").textContent = "";
  document.getElementById("cognome-error").textContent = "";
  document.getElementById("email-error").textContent = "";
  document.getElementById("telefono-error").textContent = "";
  document.getElementById("data-error").textContent = "";
  document.getElementById("password-error").textContent = "";

  let valid = true;

  // Verifica Nome
  const nome = document.getElementById("nome").value;
  if (nome.trim() === "") {
    document.getElementById("nome-error").textContent = "Il nome è obbligatorio.";
    valid = false;
  }

  // Verifica Cognome
  const cognome = document.getElementById("cognome").value;
  if (cognome.trim() === "") {
    document.getElementById("cognome-error").textContent = "Il cognome è obbligatorio.";
    valid = false;
  }

  // Verifica Email
  const email = document.getElementById("email").value;
  if (email.trim() === "") {
    document.getElementById("email-error").textContent = "L'email è obbligatoria.";
    valid = false;
  }

  // Verifica Numero di Telefono
  const telefono = document.getElementById("telefono").value;
  if (telefono.trim() === "") {
    document.getElementById("telefono-error").textContent = "Il numero di telefono è obbligatorio.";
    valid = false;
  } else if (!/^\d{10}$/.test(telefono)) {
    document.getElementById("telefono-error").textContent = "Il numero di telefono deve essere di 10 cifre.";
    valid = false;
  }

  // Verifica Data di Nascita
  const data = document.getElementById("data").value;
  if (data.trim() === "") {
    document.getElementById("data-error").textContent = "La data di nascita è obbligatoria.";
    valid = false;
  }

  // Verifica Username
  const username = document.getElementById("username").value;
  if (username.trim() === "") {
    document.getElementById("username-error").textContent = "L'username è obbligatorio.";
    valid = false;
  }

  // Verifica Password
  const password = document.getElementById("password").value;
  if (password.trim() === "") {
    document.getElementById("password-error").textContent = "La password è obbligatorio.";
    valid = false;
  }

  if (valid) {
    alert("Registrazione completata!");
  }
});
