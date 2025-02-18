document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Verifica che gli elementi di errore esistano e nascondi gli errori precedenti
    const errorElements = {
        "username-error": null,
        "nome-error": null,
        "cognome-error": null,
        "email-error": null,
        "telefono-error": null,
        "data-error": null,
        "password-error": null
    };

    // Verifica e inizializza gli elementi di errore
    for (let id in errorElements) {
        const element = document.getElementById(id);
        if (element) {
            errorElements[id] = element;
            element.textContent = "";
        } else {
            console.error(`Elemento ${id} non trovato nel DOM`);
        }
    }

    let valid = true;

    // Verifica Nome
    const nomeInput = document.getElementById("nome");
    if (nomeInput) {
        const nome = nomeInput.value;
        if (nome.trim() === "" && errorElements["nome-error"]) {
            errorElements["nome-error"].textContent = "Il nome è obbligatorio.";
            valid = false;
        }
    } else {
        console.error("Elemento 'nome' non trovato nel DOM");
        valid = false;
    }

    // Verifica Cognome
    const cognomeInput = document.getElementById("cognome");
    if (cognomeInput) {
        const cognome = cognomeInput.value;
        if (cognome.trim() === "" && errorElements["cognome-error"]) {
            errorElements["cognome-error"].textContent = "Il cognome è obbligatorio.";
            valid = false;
        }
    } else {
        console.error("Elemento 'cognome' non trovato nel DOM");
        valid = false;
    }

    // Verifica Email
    const emailInput = document.getElementById("email");
    if (emailInput) {
        const email = emailInput.value;
        if (email.trim() === "" && errorElements["email-error"]) {
            errorElements["email-error"].textContent = "L'email è obbligatoria.";
            valid = false;
        }
    } else {
        console.error("Elemento 'email' non trovato nel DOM");
        valid = false;
    }

    // Verifica Numero di Telefono
    const telefonoInput = document.getElementById("telefono");
    if (telefonoInput) {
        const telefono = telefonoInput.value;
        if (telefono.trim() === "" && errorElements["telefono-error"]) {
            errorElements["telefono-error"].textContent = "Il numero di telefono è obbligatorio.";
            valid = false;
        } else if (!/^\d{10}$/.test(telefono) && errorElements["telefono-error"]) {
            errorElements["telefono-error"].textContent = "Il numero di telefono deve essere di 10 cifre.";
            valid = false;
        }
    } else {
        console.error("Elemento 'telefono' non trovato nel DOM");
        valid = false;
    }

    // Verifica Data di Nascita
    const dataInput = document.getElementById("data");
    if (dataInput) {
        const data = dataInput.value;
        if (data.trim() === "" && errorElements["data-error"]) {
            errorElements["data-error"].textContent = "La data di nascita è obbligatoria.";
            valid = false;
        }
    } else {
        console.error("Elemento 'data' non trovato nel DOM");
        valid = false;
    }

    // Verifica Username
    const usernameInput = document.getElementById("username");
    if (usernameInput) {
        const username = usernameInput.value;
        if (username.trim() === "" && errorElements["username-error"]) {
            errorElements["username-error"].textContent = "L'username è obbligatorio.";
            valid = false;
        }
    } else {
        console.error("Elemento 'username' non trovato nel DOM");
        valid = false;
    }

    // Verifica Password
    const passwordInput = document.getElementById("password");
    if (passwordInput) {
        const password = passwordInput.value;
        if (password.trim() === "" && errorElements["password-error"]) {
            errorElements["password-error"].textContent = "La password è obbligatorio.";
            valid = false;
        }
    } else {
        console.error("Elemento 'password' non trovato nel DOM");
        valid = false;
    }

    if (valid) {
        alert("Registrazione completata!");
    }
});