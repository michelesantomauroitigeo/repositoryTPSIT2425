// Funzione per aggiornare l'immagine, l'introduzione, la descrizione e il cast
function updateContent(imagePath, introduction, description, castList) {
    // Recupera l'elemento immagine dalla pagina HTML
    const imgElement = document.getElementById('myImage');
    // Recupera l'elemento introduzione dalla pagina HTML
    const introElement = document.getElementById('introduction');
    // Recupera l'elemento descrizione dalla pagina HTML
    const descElement = document.getElementById('description');
    // Recupera l'elemento cast dalla pagina HTML
    const castElement = document.getElementById('cast');

    // Aggiorna il percorso dell'immagine se l'elemento esiste
    if (imgElement) imgElement.src = `imgs/${imagePath}`;
    // Aggiorna il contenuto di testo dell'introduzione se l'elemento esiste
    if (introElement) introElement.textContent = introduction;
    // Aggiorna il contenuto di testo della descrizione se l'elemento esiste
    if (descElement) descElement.textContent = description;

    // Aggiorna la lista del cast se l'elemento esiste
    if (castElement) {
        castElement.innerHTML = ''; // Svuota il contenuto precedente del cast
        // Per ogni attore nella lista, crea un nuovo elemento <li>
        castList.forEach(actor => {
            const li = document.createElement('li'); // Crea un elemento <li>
            li.textContent = actor; // Imposta il nome dell'attore come contenuto di testo
            castElement.appendChild(li); // Aggiunge il <li> alla lista del cast
        });
    }
}

// Aggiunge gli eventi click ai pulsanti
// Esegue il codice una volta che il DOM è completamente caricato
document.addEventListener('DOMContentLoaded', () => {
    // Recupera i pulsanti per "Solo Leveling" e "Batman" dalla pagina HTML
    const soloButton = document.getElementById('soloBottone');
    const batmanButton = document.getElementById('batmanBottone');

    // Verifica se entrambi i pulsanti esistono nella pagina
    if (soloButton && batmanButton) {
        // Aggiunge un evento click al pulsante di "Solo Leveling"
        soloButton.addEventListener('click', function () {
            // Aggiorna il contenuto della pagina con i dettagli di "Solo Leveling"
            updateContent(
                'solo-leveling-reawakening.png', // Percorso immagine
                'Solo Leveling: Reawakening', // Titolo introduttivo
                'Scopri la nuova avventura di Jin-Woo mentre affronta sfide epiche!', // Descrizione
                ['Jin-Woo (Protagonista)', 'Il Re delle Ombre', 'Hwang Dong-Su'] // Cast
            );
        });

        // Aggiunge un evento click al pulsante di "Batman"
        batmanButton.addEventListener('click', function () {
            // Aggiorna il contenuto della pagina con i dettagli di "Batman"
            updateContent(
                'locandina.jpeg', // Percorso immagine
                'Batman: The Dark Knight', // Titolo introduttivo
                'Unisciti a Bruce Wayne nella sua lotta contro il crimine a Gotham City.', // Descrizione
                ['Christian Bale (Batman)', 'Heath Ledger (Joker)', 'Gary Oldman (Jim Gordon)'] // Cast
            );
        });
    } else {
        // Logga un messaggio di errore se i pulsanti non sono stati trovati
        console.error('Pulsanti non trovati!');
    }
});
