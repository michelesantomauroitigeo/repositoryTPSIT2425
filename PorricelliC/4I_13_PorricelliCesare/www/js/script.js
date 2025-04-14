function aperturaFinestra() {
    document.getElementById("finestraModale").style.display = 'block'; 
}

function chiusuraFinestra() {
    document.getElementById("finestraModale").style.display = 'none'; 
}

function login(event) {
    event.preventDefault();

    const username = document.getElementById("nomeUtente").value;
    const password = document.getElementById("passwordUtente").value;

    if (username === 'cesare' && password === 'cesare') {
        document.getElementById("finestraModale").style.display = 'none';
        document.getElementById("btnListaProdotti").style.display = 'block';
        document.getElementById("btnCaricaProdotto").style.display = 'block';
    } else {
        alert("Credenziali errate, riprova.");
    }
}

function caricaProdotti() {
    const prodotti = [
        { nome: "Aspirina 500mg", descrizione: "Un'ottima soluzione per il mal di testa", prezzo: "€4,50" },
        { nome: "Paracetamolo 1000mg", descrizione: "Antidolorifico e antipiretico", prezzo: "€5,00" },
        { nome: "Amuchina Gel", descrizione: "Gel igienizzante per mani", prezzo: "€2,80" },
        { nome: "Zyrtec 10mg", descrizione: "Antistaminico per allergie stagionali", prezzo: "€8,50" },
        { nome: "Fluimucil 600mg", descrizione: "Per il trattamento della tosse e del raffreddore", prezzo: "€7,00" },
        { nome: "Cefalexina 500mg", descrizione: "Antibiotico per infezioni batteriche", prezzo: "€6,20" },
        { nome: "Bepanthenol Crema", descrizione: "Crema lenitiva per la pelle irritata", prezzo: "€10,00" },
        { nome: "Enterogermina 8 fiale", descrizione: "Per il riequilibrio della flora intestinale", prezzo: "€14,90" },
        { nome: "Faringegutt Spray", descrizione: "Per il sollievo da mal di gola", prezzo: "€5,80" },
        { nome: "Neosaldina 12 compresse", descrizione: "Per il trattamento del mal di testa", prezzo: "€6,50" }
    ];

    const tbody = document.getElementById("corpoTabella");

    prodotti.forEach(prodotto => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${prodotto.nome}</td>
            <td>${prodotto.descrizione}</td>
            <td>${prodotto.prezzo}</td>
        `;
        tbody.appendChild(tr);
    });

    document.getElementById("btnListaProdotti").style.display = 'none';
    document.getElementById("finestraLista").style.display = 'block';
}

function chiusuraFinestraLista() {
    document.getElementById("finestraLista").style.display = 'none';
}

function apriFormCarica() {
    document.getElementById("aggiungiProdottoForm").style.display = 'block';
}

function aggiungiProdotto(event) {
    event.preventDefault();

    const nome = document.getElementById("nomeProdotto").value;
    const descrizione = document.getElementById("descrizioneProdotto").value;
    const prezzo = document.getElementById("prezzoProdotto").value;

    if (nome && descrizione && prezzo) {
        const prodotto = {
            nome: nome,
            descrizione: descrizione,
            prezzo: prezzo
        };

        const ulProdotti = document.getElementById("listaProdotti");
        const li = document.createElement("li");
        li.classList.add("PRODOTTO");
        li.innerHTML = `
            <img src="imgs/default.jpg" alt="${nome}">
            <div class="INFO">
                <span class="NOME">${nome}</span>
                <p>${descrizione}</p>
                <span class="PREZZO">${prezzo}</span>
            </div>
        `;
        ulProdotti.appendChild(li);

        document.getElementById("aggiungiProdottoForm").style.display = 'none'; // Nascondi il modulo
    }
}




