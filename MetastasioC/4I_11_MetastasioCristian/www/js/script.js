function modifica() {
    document.getElementsByClassName("finestra")[0].style.display = "block";
    document.body.classList.add('oscuramento');
}

function chiudiFinestra() {
    document.getElementsByClassName("finestra")[0].style.display = "none";
    document.body.classList.remove('oscuramento');
}