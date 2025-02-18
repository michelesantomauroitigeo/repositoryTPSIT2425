// Ottieni la finestra modale
var modal = document.getElementById('idFinestraModale');

// Ottieni il pulsante per aprire la finestra modale
var btn = document.getElementsByClassName('modifica');

// Ottieni l'elemento <span> che consente di chiudere il modale
var span = document.getElementsByClassName('close')[0];

for(var i = 0; i < btn.length; i ++) {
  // Quando si clicca sul pulsante, si apre la finestra modale
  btn[i].onclick = function() {
    modal.style.display = "block";
  }
}

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
