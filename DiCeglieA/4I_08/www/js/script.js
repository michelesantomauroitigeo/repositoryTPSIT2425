
    var valid = true;

    if (document.getElementById("nome").value === "") {
        document.getElementById("NomeErr").textContent = "Il nome è richiesto.";
        valid = false;
    }

    if (document.getElementById("cognome").value === "") {
        document.getElementById("nomeErr").textContent = "Il cognome è richiesto.";
        valid = false;
    }

    if (document.getElementById("email").value === "") {
        document.getElementById("emailErr").textContent = "L'email è obbligatoria.";
        valid = false;
    }

    if (document.getElementById("ConfermaEmail").value === "") {
        document.getElementById("emailErr").textContent = "L'email è obbligatoria.";
        valid = false;
    }

    if (
        document.getElementById("email").value !=
        document.getElementById("ConfermaEmail").value
    ) {
        document.getElementById("emailErr").textContent = "Le email non corrispondono.";
        valid = false;
    }

    if (document.getElementById("password").value === "") {
        document.getElementById("passwordErr").textContent = "La password è obbligatoria.";
        valid = false;
    }

    if (document.getElementById("ConfermaPassword").value === "") {
        document.getElementById("passwordErr").textContent = "La password è obbligatoria.";
        valid = false;
    }

    if (
        document.getElementById("password").value !=
        document.getElementById("ConfermaPassword").value
    ) {
        document.getElementById("passwordErr").textContent = "Le password non corrispondono.";
        valid = false;
    }

    if (valid === true) {
        alert("Registrazione completata!");
    }
;

console.log("Registrazione");

