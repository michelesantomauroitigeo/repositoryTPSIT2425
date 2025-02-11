document.getElementById("Finestra_Dati").style.display = "none";

document.querySelectorAll(".modifica").forEach(bottone => {
    bottone.addEventListener("click", function(e) {
        // Ottiene la riga della tabella parent del bottone cliccato
        const riga = e.target.closest('tr');

        // Mostra la finestra modale
        document.getElementById("Finestra_Dati").style.display = "flex";

        // Aggiunge l'effetto di oscuramento
        document.body.classList.add('oscuramento');

        function chiudiFinestra() {
            // Nasconde la finestra modale
            document.getElementById("Finestra_Dati").style.display = "none";


            // Ripristina l'opacità della tabella
            document.querySelector("table").style.opacity = "1";

            // Rimuove la classe di oscuramento dal body
            document.body.classList.remove('oscuramento');

            // Resetta il form
            document.querySelector(".Finestra-modifica").reset();
        }

        // Aggiunge gli event listener per i pulsanti di chiusura
        document.querySelector(".chiudiFinestra").addEventListener("click", chiudiFinestra);
        document.querySelector(".Bottone-Annulla").addEventListener("click", chiudiFinestra);
    });
});