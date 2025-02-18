document.addEventListener("DOMContentLoaded", function () {
    // Event listener per i pulsanti di eliminazione
    document.querySelectorAll(".delete").forEach(button => {
        button.addEventListener("click", function () {
            this.closest("tr").remove();
        });
    });

    // Event listener per i pulsanti di modifica
    document.querySelectorAll(".edit").forEach((button, index) => {
        button.addEventListener("click", function () {
            apriFinestraModaleModifica(this.closest("tr"));
        });
    });

    // Event listener per i pulsanti di abilitazione (enable)
    document.querySelectorAll(".enable").forEach(button => {
        button.addEventListener("click", function () {
            abilitaRiga(this.closest("tr"));
        });
    });
});

function apriFinestraModaleModifica(riga) {
    const finestraModifica = document.querySelector(".finestra-modifica");
    finestraModifica.style.display = "block";

    document.getElementById("nome").value = riga.cells[0].innerText;
    document.getElementById("cognome").value = riga.cells[1].innerText;
    document.getElementById("username").value = riga.cells[3].innerText;

    const modificaBtn = finestraModifica.querySelector("button:last-of-type");
    modificaBtn.onclick = function () {
        riga.cells[0].innerText = document.getElementById("nome").value;
        riga.cells[1].innerText = document.getElementById("cognome").value;
        riga.cells[3].innerText = document.getElementById("username").value;
        chiudiFinestra();
    };
}

function chiudiFinestra() {
    document.querySelector(".finestra-modifica").style.display = "none";
}

// Funzione per evidenziare o ripristinare il colore della riga
function abilitaRiga(riga) {
    if (riga.style.backgroundColor === "yellow") {
        riga.style.backgroundColor = ""; // Ripristina il colore originale
    } else {
        riga.style.backgroundColor = "yellow"; // Evidenzia la riga
    }
}