let rigaSelezionata = null;

document.querySelectorAll(".modifica").forEach(button => {
    button.addEventListener("click", function() {
        document.getElementById("overlay").style.display = "flex";
        document.querySelector("table").style.opacity = "0.5";

        rigaSelezionata = this.closest("tr");
        
        
        document.getElementById("prodotto").value = rigaSelezionata.cells[1].innerText;
        document.getElementById("prezzo").value = rigaSelezionata.cells[2].innerText.replace(',', '.');
    });
});

function modifica() {
    if (rigaSelezionata) {
        rigaSelezionata.cells[1].textContent = document.getElementById("prodotto").value;
        rigaSelezionata.cells[2].textContent = document.getElementById("prezzo").value.replace('.', ',');
        chiudi();
    }
}

function chiudi() {
    document.getElementById("overlay").style.display = "none";
    document.querySelector("table").style.opacity = "1";
    rigaSelezionata = null;
}

document.querySelectorAll(".elimina").forEach(button => {
    button.addEventListener("click", function() {
            this.closest("tr").remove();

    });
});