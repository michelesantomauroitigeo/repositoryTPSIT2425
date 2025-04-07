        // Ottieni il modale e il pulsante per aprirlo
        var modal = document.getElementById("myModal");
        var openModalBtn = document.getElementById("openModalBtn");
        var closeModalBtn = document.getElementById("closeModalBtn");

        // Quando clicchi sul pulsante, apri il modale
        openModalBtn.onclick = function() {
            modal.style.display = "block";
        }

        // Quando clicchi fuori dal modale, chiudilo
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }