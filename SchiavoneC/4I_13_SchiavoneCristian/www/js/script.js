// Funzione per il login
function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  // Verifica delle credenziali
  if (username === "admin" && password === "admin123") {
    // Successo nel login, reindirizza alla pagina di amministrazione
    window.location.href = "amministrazione.html";
  } else {
    // Messaggio di errore per login errato
    document.getElementById("error_username").textContent = "Credenziali errate!";
    document.getElementById("error_password").textContent = "Credenziali errate!";
  }
}

// Funzione per la registrazione dell'utente
function registrazione() {
  var username = document.getElementById("username_reg").value;
  var email = document.getElementById("email_reg").value;
  var password = document.getElementById("password_reg").value;
  var confirmPassword = document.getElementById("confirm_password_reg").value;
  
  // Validazione del form di registrazione
  if (username === "" || email === "" || password === "" || confirmPassword === "") {
    alert("Tutti i campi devono essere compilati!");
    return;
  }

  if (password !== confirmPassword) {
    alert("Le password non corrispondono!");
    return;
  }

  // Salvataggio dell'utente (simulato in questa versione, normalmente sarebbe in un database)
  localStorage.setItem("utenteRegistrato", JSON.stringify({ username: username, email: email, password: password }));
  
  // Successo nella registrazione
  alert("Registrazione completata con successo!");
  window.location.href = "login.html";
}

// Funzione per aggiungere un nuovo prodotto
function aggiungiProdotto() {
  var nomeProdotto = document.getElementById("nomeProdotto").value;
  var descrizioneProdotto = document.getElementById("descrizioneProdotto").value;
  var prezzoProdotto = document.getElementById("prezzoProdotto").value;
  var immagineProdotto = document.getElementById("immagineProdotto").value;

  if (nomeProdotto === "" || descrizioneProdotto === "" || prezzoProdotto === "" || immagineProdotto === "") {
    alert("Tutti i campi devono essere compilati!");
    return;
  }

  // Simulazione salvataggio prodotto
  var prodotti = JSON.parse(localStorage.getItem("prodotti")) || [];
  prodotti.push({ nome: nomeProdotto, descrizione: descrizioneProdotto, prezzo: prezzoProdotto, immagine: immagineProdotto });
  localStorage.setItem("prodotti", JSON.stringify(prodotti));

  // Successo nell'aggiungere il prodotto
  alert("Prodotto aggiunto con successo!");
  window.location.href = "gestione_prodotti.html"; // Reindirizza alla pagina di gestione prodotti
}

// Funzione per visualizzare i prodotti nella pagina di gestione
function visualizzaProdotti() {
  var prodotti = JSON.parse(localStorage.getItem("prodotti")) || [];
  var listaProdotti = document.getElementById("listaProdotti");
  listaProdotti.innerHTML = ""; // Pulisce la lista esistente

  prodotti.forEach(function(prodotto, index) {
    var prodottoDiv = document.createElement("div");
    prodottoDiv.classList.add("product");

    prodottoDiv.innerHTML = `
      <img src="${prodotto.immagine}" alt="${prodotto.nome}">
      <h3>${prodotto.nome}</h3>
      <p>${prodotto.descrizione}</p>
      <span class="price">€${prodotto.prezzo}</span>
      <button onclick="modificaProdotto(${index})">Modifica</button>
      <button onclick="eliminaProdotto(${index})">Elimina</button>
    `;

    listaProdotti.appendChild(prodottoDiv);
  });
}

// Funzione per modificare un prodotto
function modificaProdotto(index) {
  var prodotti = JSON.parse(localStorage.getItem("prodotti")) || [];
  var prodotto = prodotti[index];

  document.getElementById("nomeProdotto").value = prodotto.nome;
  document.getElementById("descrizioneProdotto").value = prodotto.descrizione;
  document.getElementById("prezzoProdotto").value = prodotto.prezzo;
  document.getElementById("immagineProdotto").value = prodotto.immagine;

  // Aggiungi logica per aggiornare il prodotto
  prodotti.splice(index, 1); // Rimuove il prodotto da modificare
  localStorage.setItem("prodotti", JSON.stringify(prodotti));
}

// Funzione per eliminare un prodotto
function eliminaProdotto(index) {
  var prodotti = JSON.parse(localStorage.getItem("prodotti")) || [];
  prodotti.splice(index, 1); // Rimuove il prodotto dalla lista
  localStorage.setItem("prodotti", JSON.stringify(prodotti));

  alert("Prodotto eliminato con successo!");
  window.location.href = "gestione_prodotti.html"; // Ricarica la pagina di gestione prodotti
}

// Funzione per la gestione degli utenti
function visualizzaUtenti() {
  var utenti = JSON.parse(localStorage.getItem("utenti")) || [];
  var listaUtenti = document.getElementById("listaUtenti");
  listaUtenti.innerHTML = ""; // Pulisce la lista esistente

  utenti.forEach(function(utente, index) {
    var utenteDiv = document.createElement("div");
    utenteDiv.classList.add("user-item");

    utenteDiv.innerHTML = `
      <p><strong>Username:</strong> ${utente.username}</p>
      <p><strong>Email:</strong> ${utente.email}</p>
      <p><strong>Data Registrazione:</strong> ${utente.dataRegistrazione}</p>
      <p><strong>Ultimo Accesso:</strong> ${utente.ultimoAccesso || "Non effettuato"}</p>
      <button onclick="abilitaDisabilitaUtente(${index})">${utente.abilitato ? "Disabilita" : "Abilita"}</button>
    `;

    listaUtenti.appendChild(utenteDiv);
  });
}

// Funzione per abilitare o disabilitare un utente
function abilitatoDisabilitaUtente(index) {
  var utenti = JSON.parse(localStorage.getItem("utenti")) || [];
  utenti[index].abilitato = !utenti[index].abilitato; // Toggle lo stato abilitato/disabilitato
  localStorage.setItem("utenti", JSON.stringify(utenti));

  alert("Stato dell'utente aggiornato!");
  visualizzaUtenti(); // Ricarica la lista degli utenti
}

// Funzione per registrare un utente
function registraUtente() {
  var username = document.getElementById("username_reg").value;
  var email = document.getElementById("email_reg").value;
  var password = document.getElementById("password_reg").value;

  var utenti = JSON.parse(localStorage.getItem("utenti")) || [];
  utenti.push({
    username: username,
    email: email,
    password: password,
    dataRegistrazione: new Date().toLocaleDateString(),
    abilitato: true,
  });

  localStorage.setItem("utenti", JSON.stringify(utenti));

  alert("Utente registrato con successo!");
  window.location.href = "login.html";
}

// Funzione per aggiornare l'ultimo accesso dell'utente (chiamato all'accesso)
function aggiornaUltimoAccesso() {
  var utenti = JSON.parse(localStorage.getItem("utenti")) || [];
  var username = document.getElementById("username").value;
  var utente = utenti.find(utente => utente.username === username);

  if (utente) {
    utente.ultimoAccesso = new Date().toLocaleDateString();
    localStorage.setItem("utenti", JSON.stringify(utenti));
  }
}
