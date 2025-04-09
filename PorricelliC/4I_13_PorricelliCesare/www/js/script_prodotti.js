function aperturaFinestra() {
    document.getElementById("finestraModale").style.display = 'block'; 
}

function chiusuraFinestra() {
    document.getElementById("finestraModale").style.display = 'none'; 
}

function aperturaFinestraLista() {
    document.getElementById("finestraLista").style.display = 'block'; 
}

function chisuraFinestraLista() {
    document.getElementById("finestraLista").style.display = 'none'; 
}

function aperturaCaricamentoProdotto() {
    document.getElementById("finestraCaricaProdotto").style.display = 'block';
}

function chiusuraFinestraCaricamento() {
    document.getElementById("finestraCaricaProdotto").style.display = 'none';
}

function controllo() {
    console.log("ciao");
    
    let nome = document.getElementById("nome");
    let descrizione = document.getElementById("descrizione");
    let prezzo = document.getElementById("prezzo");
    let immagine = document.getElementById("file");
    
    let validita = true;

    if (nome.value.trim() === '') {  
        document.getElementById("errorNome").style.display = 'block'; 
        validita = false;
    } else {
        document.getElementById("errorNome").style.display = 'none'; 
    }

    if (descrizione.value.trim() === '') { 
        document.getElementById("errorDescrizione").style.display = 'block'; 
        validita = false;
    } else {
        document.getElementById("errorDescrizione").style.display = 'none'; 
    }

    if (prezzo.value.trim() === '') { 
        document.getElementById("errorPrezzo").style.display = 'block'; 
        validita = false;
    } else {
        document.getElementById("errorPrezzo").style.display = 'none'; 
    }

    if (immagine.value.trim() === '') { 
        document.getElementById("errorImmagine").style.display = 'block'; 
        validita = false;
    } else {
        document.getElementById("errorImmagine").style.display = 'none'; 
    }

    return validita;
}

function login(event) {
    event.preventDefault();
    
    let username = document.getElementById("nomeUtente").value;
    let password = document.getElementById("passwordUtente").value;
    
    if (username === "cesare" && password === "cesare") {
        document.getElementById("btnListaProdotti").style.display = 'block';
        document.getElementById("btnCaricaProdotti").style.display = 'block';
        chiusuraFinestra(); 
    } else {
        alert("Credenziali errate");
    }
}

let prodotti = [];

function caricaProdotti() {
    let listaProdotti = document.getElementById("corpoTabella");
    listaProdotti.innerHTML = '';

    for (let i = 0; i < prodotti.length; i++) {
        let prodotto = prodotti[i];
        let tr = document.createElement("tr");
        
        let tdNome = document.createElement("td");
        tdNome.textContent = prodotto.nome;
        tr.appendChild(tdNome);
        
        let tdDescrizione = document.createElement("td");
        tdDescrizione.textContent = prodotto.descrizione;
        tr.appendChild(tdDescrizione);
        
        let tdPrezzo = document.createElement("td");
        tdPrezzo.textContent = prodotto.prezzo;
        tr.appendChild(tdPrezzo);
        
        listaProdotti.appendChild(tr);
    }
    aperturaFinestraLista();
}

function caricaNuovoProdotto(event) {
    event.preventDefault();
    
    let nome = document.getElementById("nomeProdotto").value;
    let descrizione = document.getElementById("descrizioneProdotto").value;
    let prezzo = document.getElementById("prezzoProdotto").value;
    let immagine = document.getElementById("immagineProdotto").value;
    
    if (nome && descrizione && prezzo && immagine) {
        let nuovoProdotto = {
            nome: nome,
            descrizione: descrizione,
            prezzo: prezzo,
            immagine: immagine
        };
        
        prodotti.push(nuovoProdotto);
        alert("Prodotto aggiunto con successo!");
        chiusuraFinestraCaricamento();
    } else {
        alert("Tutti i campi sono obbligatori!");
    }
}

