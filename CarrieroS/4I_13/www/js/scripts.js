function finestralogin() {
    document.getElementById("finestra_Login").style.display = "block";
}

function chiudiFinestra() {
    document.getElementById("finestra_Login").style.display = "none";
}

function accedi() {
    var utente = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    var utenteCorretto = "admin";
    var passwordCorretta = "1234";

    if (utente === utenteCorretto && pass === passwordCorretta) {
        alert("Accesso effettuato con successo!");
        chiudiFinestra();
        window.open("html/amministrazione.html", "_blank"); // <-- aggiunto qui
    } else {
        alert("Nome utente o password errati.");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("prodottiform");

    form?.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("productName").value;
        const desc = document.getElementById("productDescription").value;
        const imgSrc = document.getElementById("productImage").value;

        const productDiv = document.createElement("div");
        productDiv.className = "product";

        productDiv.innerHTML = `
            <img src="${imgSrc}" alt="${name}">
            <h3>${name}</h3>
            <p>${desc}</p>
        `;

        document.querySelector(".products").appendChild(productDiv);

        form.reset();
    });
});

function gestprodotti() {
    window.open("gestione-prodotti.html", "_blank");
}

function modpassword() {
    window.open("modifica-password.html", "_blank");
}

document.getElementById("password-form").addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("old-password-error").textContent = "";
    document.getElementById("new-password-error").textContent = "";
    document.getElementById("confirm-password-error").textContent = "";

    let valid = true;

    const oldPasswordElement = document.getElementById("old-password");
    if (oldPasswordElement) {
        const oldPassword = oldPasswordElement.value;
        const correctOldPassword = "1234";

        if (oldPassword.trim() === "") {
            document.getElementById("old-password-error").textContent = "La vecchia password e obbligatoria.";
            valid = false;
        } else if (oldPassword.trim() !== correctOldPassword) {
            document.getElementById("old-password-error").textContent = "La vecchia password non e corretta.";
            valid = false;
        }
    }

    const newPasswordElement = document.getElementById("new-password");
    if (newPasswordElement) {
        const newPassword = newPasswordElement.value;
        if (newPassword.trim() === "") {
            document.getElementById("new-password-error").textContent = "La nuova password e obbligatoria.";
            valid = false;
        }
    }

    const confirmPasswordElement = document.getElementById("confirm-password");
    if (confirmPasswordElement) {
        const confirmPassword = confirmPasswordElement.value;
        if (confirmPassword.trim() === "") {
            document.getElementById("confirm-password-error").textContent = "La conferma della password e obbligatoria.";
            valid = false;
        } else if (confirmPassword !== newPassword.value) {
            document.getElementById("confirm-password-error").textContent = "Le password non corrispondono.";
            valid = false;
        }
    }

    if (valid) {
        alert("Password cambiata con successo!");
    }
});
