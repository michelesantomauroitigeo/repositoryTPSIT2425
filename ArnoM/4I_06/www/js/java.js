// Funzione per cambiare l'immagine
function changeImage(imagePath) {
    document.getElementById('myImage').src = `imgs/${imagePath}`;
}

// Assegnazione degli eventi ai pulsanti
document.getElementById('openButton').addEventListener('click', function() {
    changeImage('portaaperta.png');
});

document.getElementById('closeButton').addEventListener('click', function() {
    changeImage('porta.png');
});
