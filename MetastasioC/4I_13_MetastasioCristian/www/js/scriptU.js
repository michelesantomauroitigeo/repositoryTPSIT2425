function apriModaleUtente(tipo) {
  document.getElementById("modaleUtente").style.display = "block";

  if (tipo === "modifica") {
    document.getElementById("titoloModale").innerText = "Modifica Utente";
  } 
  else if (tipo === "aggiungi") {
    document.getElementById("titoloModale").innerText = "Aggiungi Utente";
  }
}

function chiudiModaleUtente() {
  document.getElementById("modaleUtente").style.display = "none";
}
