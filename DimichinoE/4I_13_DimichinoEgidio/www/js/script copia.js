function mostraForm() {
    document.getElementById("formProdotto").classList.remove("hidden");
    document.getElementById("listaProdotti").classList.add("hidden");
}

function mostraLista() {
    document.getElementById("formProdotto").classList.add("hidden");
    document.getElementById("listaProdotti").classList.remove("hidden");
}

function validaForm() {
    let valido = true;

    // Pulizia errori
    document.getElementById("erroreNome").innerText = "";
    document.getElementById("erroreDescrizione").innerText = "";
    document.getElementById("errorePrezzo").innerText = "";

    const nome = document.getElementById("nomeProdotto").value.trim();
    const descrizione = document.getElementById("descrizione").value.trim();
    const prezzo = document.getElementById("prezzo").value.trim();

    if (nome === "") {
        document.getElementById("erroreNome").innerText = "Questo campo è obbligatorio";
        valido = false;
    }
    if (descrizione === "") {
        document.getElementById("erroreDescrizione").innerText = "Questo campo è obbligatorio";
        valido = false;
    }
    if (prezzo === "") {
        document.getElementById("errorePrezzo").innerText = "Questo campo è obbligatorio";
        valido = false;
    }

    return valido;
}
