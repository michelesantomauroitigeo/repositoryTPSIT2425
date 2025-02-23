function verificaForm() {
  var valid = true;

  if (document.forms["form"]["nome"].value === "") {
    document.getElementById("nomeErr").textContent = "Il nome è richiesto.";
    valid = false;
  } else document.getElementById("nomeErr").textContent = "";

  if (document.forms["form"]["cognome"].value === "") {
    document.getElementById("nomeErr").textContent = "Il cognome è richiesto.";
    valid = false;
    console.log("da qua è passato");
    console.log(valid);
  } else document.getElementById("nomeErr").textContent = "";

  if (document.forms["form"]["email"].value === "") {
    document.getElementById("emailErr").textContent = "L'email è obbligatoria.";
    valid = false;
  } 
  else if (document.forms["form"]["confermaEmail"].value === "") {
    document.getElementById("emailErr").textContent = "L'email è obbligatoria.";
    valid = false;
  }
  else if (document.forms["form"]["email"].value !== document.forms["form"]["confermaEmail"].value) {
    document.getElementById("emailErr").textContent =
      "le mail devono essere uguali";
    valid = false;
  } else document.getElementById("emailErr").textContent = "";




  if (document.forms["form"]["password"].value === "") {
    document.getElementById("passwordErr").textContent =
      "La password è obbligatoria.";
    valid = false;
  } 

  else if (document.forms["form"]["confermaPassword"].value === "") {
    document.getElementById("passwordErr").textContent =
      "La password è obbligatoria.";

    valid = false;
  }else if (document.forms["form"]["password"].value !== document.forms["form"]["confermaPassword"].value) {
    document.getElementById("passwordErr").textContent =
      "le password devono essere uguali";
    valid = false;
  } else document.getElementById("passwordErr").textContent = "";


  console.log("Registrazione");
  return valid;
}
