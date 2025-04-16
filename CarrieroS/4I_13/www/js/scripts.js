function finestralogin() {
    document.getElementById("finestra_Login").style.display = "flex";
}

function chiudiFinestra() {
    document.getElementById("finestra_Login").style.display = "none";
}

function accedi() {
    const utente = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    const utenteCorretto = "stefy";
    const passwordCorretta = "1234";

    if (utente === utenteCorretto && pass === passwordCorretta) {
        alert("Accesso effettuato con successo!");
        chiudiFinestra();
        window.open("html/amministrazione.html", "_blank");
    } else {
        alert("Nome utente o password errati.");
    }
}

// Chiudi finestra se clicchi fuori
window.addEventListener("click", function(e) {
    const popup = document.getElementById("finestra");
    const overlay = document.getElementById("finestra_Login");
    if (e.target === overlay) {
        chiudiFinestra();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("prodottiform");

    form?.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("prodottiName").value;
        const desc = document.getElementById("prodottiDescription").value;
        const imgSrc = document.getElementById("prodottiImage").value;

        const prodottiDiv = document.createElement("div");
        prodottiDiv.className = "prodotti";

        prodottiDiv.innerHTML = `
            <img src="${imgSrc}" alt="${name}">
            <h3>${name}</h3>
            <p>${desc}</p>
        `;

        document.querySelector(".prodotti").appendChild(prodottiDiv);

        form.reset();
    });
});

function mostraPagina(idPagina) {
    // Nasconde tutte le "pagine"
    const pagine = document.querySelectorAll('.pagina');
    pagine.forEach(pagina => {
        pagina.classList.remove('pagina-attiva');
    });

    // Mostra solo la pagina richiesta
    const paginaAttiva = document.getElementById(idPagina);
    if (paginaAttiva) {
        paginaAttiva.classList.add('pagina-attiva');
    }
}


let prodottoDaEliminare = null;
let bottoneCliccato = null;

function eliminaProdotto(nomeProdotto) {
    document.getElementById("nome-prodotto").innerText = nomeProdotto;
    document.getElementById("finestra-conferma").style.display = "flex";
}

function chiudiPopup() {
    document.getElementById("finestra-conferma").style.display = "none";
    prodottoDaEliminare = null;
    bottoneCliccato = null;
}

function confermaEliminazione() {
    chiudiPopup();
}

function modificaProdotto(nomeProdotto) {
    document.getElementById("nome-prodotto-modifica").innerText = nomeProdotto;
    document.getElementById("finestra-modifica").style.display = "flex";
}

function chiudiPopupModifica() {
    document.getElementById("finestra-modifica").style.display = "none";
}

function renderProdotti() {
    const tbody = document.querySelector('#tabellaProdotti tbody');
    tbody.innerHTML = '';
    prodotti.forEach((p, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><img src="${p.immagine}" alt="${p.nome}" style="width: 80px;"></td>
            <td>${p.nome}</td>
            <td>${p.descrizione}</td>
            <td>
                <button onclick="modificaProdotto(${index})">Modifica</button>
                <button onclick="eliminaProdotto(${index})">Elimina</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("prodottiform").addEventListener("submit", function (e) {
        e.preventDefault();
        const nome = document.getElementById("prodottiName").value;
        const descrizione = document.getElementById("prodottiDescription").value;
        const immagine = document.getElementById("prodottiImage").value;
        prodotti.push({ nome, descrizione, immagine });
        renderProdotti();
        this.reset();
    });

    renderProdotti();
});

const utenti = [
    {
        nome: "stefy",
        registrazione: "2024-12-01",
        ultimoAccesso: "2025-04-10",
        abilitato: true
    },
    {
        nome: "mario89",
        registrazione: "2025-01-15",
        ultimoAccesso: "2025-03-28",
        abilitato: false
    },
    {
        nome: "giulia22",
        registrazione: "2024-11-20",
        ultimoAccesso: "2025-04-05",
        abilitato: true
    }
];

function renderUtenti() {
    const tbody = document.getElementById("utenti-body");
    tbody.innerHTML = "";
    utenti.forEach((utente, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${utente.nome}</td>
            <td>${utente.registrazione}</td>
            <td>${utente.ultimoAccesso}</td>
            <td>
                <label class="switch">
                    <input type="checkbox" ${utente.abilitato ? "checked" : ""} onchange="toggleUtente(${index}, this.checked)">
                    <span class="slider"></span>
                </label>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function toggleUtente(index, stato) {
    utenti[index].abilitato = stato;
    console.log(`Utente "${utenti[index].nome}" ${stato ? 'abilitato' : 'disabilitato'}`);
}

document.addEventListener("DOMContentLoaded", renderUtenti);
