function finestralogin() {
    document.getElementsByClassName("finestra_Login")[0].style.display = "block";
    document.body.classList.add('oscuramento');
}

function chiudiFinestra() {
    document.getElementsByClassName("finestra_Login")[0].style.display = "none";
    document.body.classList.remove('oscuramento');
}

