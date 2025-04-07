const NOMEUTENTE = "admin";
const PASSWORD = "admin";

function apriLoginModale() {
    document.getElementById("modale-login").style.display = "block";
}

function chiudiLoginModale() {
    document.getElementById("modale-login").style.display = "none";
}


function verificaForm() {
    var valid = true;
  
    if (document.forms["form"]["username"].value !== NOMEUTENTE) {
      document.getElementById("nomeErr").textContent = "l'username è sbagliato.";
      valid = false;
    } else document.getElementById("nomeErr").textContent = "";

    if (document.forms["form"]["username"].value === "") {
        document.getElementById("nomeErr").textContent = "Username richiesto.";
        valid = false;
      } 
      
  
  
  
    if (document.forms["form"]["password"].value != PASSWORD) {
        document.getElementById("passwordErr").textContent =
          "password sbagliata.";
          console.log("password sbagliata");
        valid = false;
    } else document.getElementById("passwordErr").textContent = ""; 
    if (document.forms["form"]["password"].value === "") {
      document.getElementById("passwordErr").textContent =
        "La password è obbligatoria.";
      valid = false;
    } 
    console.log("Registrazione");
    return valid;
  }
  