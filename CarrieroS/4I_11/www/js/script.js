function modifica() {
    document.getElementsByClassName("Finestra_Dati")[0].style.display = "block";
    document.body.classList.add('oscuramento');
}


function chiudiFinestradati() {
    document.getElementsByClassName("Finestra_Dati")[0].style.display = "none";
    document.body.classList.remove('oscuramento');
}

function elimina(button) {
    document.getElementById('finestaModaleEliminazione').style.display = 'block';
    let riga = button.closest('tr');
    const pulsante = document.getElementById('pulsanteSalva');
    pulsante.onclick = function() {
        riga.style.display = 'none';
        chiusuraFinestraElinazione();
    };
}


function elimina(button) {
    document.getElementById('finesta_Eliminazione').style.display = 'block';
    let riga = button.closest('tr');
    const pulsante = document.getElementById('pulsanteSalva');
    pulsante.onclick = function() {
        riga.style.display = 'none';
        chiusuraFinestraelinazione();
    };
}

function chiudiFinestraelimina() {
    document.getElementById('finesta_Eliminazione').style.display = 'none';
}