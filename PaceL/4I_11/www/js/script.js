var indiceTabella = 0; //Variabile globale

//Funzione per trovare gli elementi di una specifica riga della tabella (num) e ritornare un array
function trovaElementoTabella(num) {

  var tabella = document.getElementById("tabella");
  var righe = tabella.getElementsByTagName("tr");

  var elementi = [];


  for(var i = 0; i < 7; i ++) {
    elementi[i] = righe[num].cells[i].innerText;
  }

  return elementi;

}

function formattaData(data) {
  var dataArray = data.replaceAll('/', '-').split("-");
  var salva = dataArray[0];
  dataArray[0] = dataArray[2];
  dataArray[2] = salva;

  return dataArray[0] + "-" + dataArray[1] + "-" + dataArray[2];
}

function apriFinestraModaleModifica(indice) {

  indiceTabella = indice;

  // Ottieni la finestra modale
  var modal = document.getElementById('idFinestraModaleModifica');
  var elementiUtente = trovaElementoTabella(indice);
  document.getElementById("nomeFinestraModale").value = elementiUtente[1];
  document.getElementById("cognomeFinestraModale").value = elementiUtente[2];
  document.getElementById("dataDiNascitaFinestraModale").value = formattaData(elementiUtente[3]);
  document.getElementById("residenzaFinestraModale").value = elementiUtente[4];
  document.getElementById("telefonoFinestraModale").value = elementiUtente[5];
  document.getElementById("emailFinestraModale").value = elementiUtente[6];

  // Ottieni il pulsante per aprire la finestra modale
  var btn = document.getElementsByClassName('modifica');

  // Ottieni l'elemento <span> che consente di chiudere il modale
  var span = document.getElementsByClassName('close')[0];

  modal.style.display = "block";

  // Quando si clicca sullo <span> (x) la finestra si chiude
  span.onclick = function() {
    modal.style.display = "none";
  }

  // Quando l'utente clicca al di fuori della finestra modale si chiude
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

function confermaFinestraModaleModifica() {
  var nome = document.getElementById("nomeFinestraModale").value;
  var cognome = document.getElementById("cognomeFinestraModale").value;
  var data = document.getElementById("dataDiNascitaFinestraModale").value;
  var residenza = document.getElementById("residenzaFinestraModale").value;
  var telefono = document.getElementById("telefonoFinestraModale").value;
  var email = document.getElementById("emailFinestraModale").value;

  var tabella = document.getElementById("tabella");
  var righe = tabella.getElementsByTagName("tr");
  righe[indiceTabella].cells[1].innerText = nome;
  righe[indiceTabella].cells[2].innerText = cognome;
  righe[indiceTabella].cells[3].innerText = formattaData(data);
  righe[indiceTabella].cells[4].innerText = residenza;
  righe[indiceTabella].cells[5].innerText = telefono;
  righe[indiceTabella].cells[6].innerText = email;

  var modal = document.getElementById('idFinestraModaleModifica');
  modal.style.display = "none";
  event.preventDefault();
}

function apriFinestraModaleElimina() {
  // Ottieni la finestra modale
  var modal = document.getElementById('idFinestraModaleElimina');

  // Ottieni il pulsante per aprire la finestra modale
  var btn = document.getElementsByClassName('elimina');

  // Ottieni l'elemento <span> che consente di chiudere il modale
  var span = document.getElementsByClassName('close')[1];

  modal.style.display = "block";

  // Quando si clicca sullo <span> (x) la finestra si chiude
  span.onclick = function() {
    modal.style.display = "none";
  }

  // Quando l'utente clicca al di fuori della finestra modale si chiude
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}