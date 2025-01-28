document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Nascondi gli errori precedenti
  document.getElementById("usernameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";

  let valid = true;

  // Verifica Nome utente
  const username = document.getElementById("username").value;
  if (username === "") {
    document.getElementById("usernameError").textContent = "Il nome utente è obbligatorio.";
    valid = false;
  }

  // Verifica Email
  const email = document.getElementById("email").value;
  if (email === "") {
    document.getElementById("emailError").textContent = "L'email è obbligatoria.";
    valid = false;
  }

  // Verifica Password
  const password = document.getElementById("password").value;
  if (password === "") {
    document.getElementById("passwordError").textContent = "La password è obbligatoria.";
    valid = false;
  }

  if (valid) {
    alert("Registrazione completata!");
  }
});
