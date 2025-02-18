function modifica() {
    document.getElementsByClassName("Finestra_Dati")[0].style.display = "block";
    document.body.classList.add('oscuramento');
}

function chiudiFinestra() {
    document.getElementsByClassName("Finestra_Dati")[0].style.display = "none";
    document.body.classList.remove('oscuramento');
}