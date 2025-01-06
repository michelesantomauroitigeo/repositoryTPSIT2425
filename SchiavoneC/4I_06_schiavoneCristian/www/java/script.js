// Funzione JavaScript per cambiare il colore di sfondo
function changeBackgroundColor() {
    const colors = ['#FF5733', '#FF8D1A', '#FF33B5', '#33FF57', '#33A1FF', '#FFEB33', '#FF33A1', '#33FFDA'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}