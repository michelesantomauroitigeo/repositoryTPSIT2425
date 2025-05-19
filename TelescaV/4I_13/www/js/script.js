document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Impedisce il ricaricamento della pagina

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Credenziali fisse di esempio
            if (username === 'admin' && password === '1234') {
                // Reindirizza alla pagina della collezione
                window.location.href = 'collezione.html';
            } else {
                alert('Credenziali non valide. Riprova.');
            }
        });
    }
});

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
        if(confirm("Sei sicuro di voler eliminare questo prodotto?")) {
            this.closest("tr").remove();
        }
    });
});
