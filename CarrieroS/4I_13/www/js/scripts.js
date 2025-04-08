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