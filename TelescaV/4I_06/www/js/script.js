const immagineLibro = document.getElementById('immagineLibro');
const bottone = document.getElementById('bottoneToggle');

let libroAperto = false;

bottone.addEventListener('click', () => {
    libroAperto = !libroAperto;
    if (libroAperto) {
        immagineLibro.src = 'imgs/libro_aperto.png';
        bottone.textContent = 'Chiudi il Libro';
    } else {
        immagineLibro.src = 'imgs/libro_chiuso.png';
        bottone.textContent = 'Apri il Libro';
    }
});