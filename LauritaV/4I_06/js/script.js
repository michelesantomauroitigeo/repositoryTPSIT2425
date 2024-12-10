function cambiotesto() {
    document.getElementById("testo").innerHTML="Testo cambiato!";
}
function stile() {
    document.getElementById('testo').style.fontSize='35px';
}
function nascondi() {
    document.getElementById("testo").style.display = "none";
}
function mostra() {
    document.getElementById("testo").style.display = "block";
}

function apri() {
    document.getElementById('porta').src="imgs/aperto.png"
}
function chiudi() {
    document.getElementById('porta').src="imgs/chiuso.png"
}