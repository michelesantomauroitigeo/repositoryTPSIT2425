// Funzione per aggiornare l'immagine, l'introduzione, la descrizione e il cast
function updateContent(imagePath, introduction, description, castList) {
    const imgElement = document.getElementById('myImage');
    const introElement = document.getElementById('introduction');
    const descElement = document.getElementById('description');
    const castElement = document.getElementById('cast');

    if (imgElement) imgElement.src = `imgs/${imagePath}`;
    if (introElement) introElement.textContent = introduction;
    if (descElement) descElement.textContent = description;

    if (castElement) {
        castElement.innerHTML = ''; // Svuota il cast precedente
        castList.forEach(actor => {
            const li = document.createElement('li');
            li.textContent = actor;
            castElement.appendChild(li);
        });
    }
}

// Aggiunge gli eventi click ai pulsanti
document.addEventListener('DOMContentLoaded', () => {
    const soloButton = document.getElementById('soloBottone');
    const batmanButton = document.getElementById('batmanBottone');

    if (soloButton && batmanButton) {
        soloButton.addEventListener('click', function () {
            updateContent(
                'solo-leveling-reawakening.png',
                'Solo Leveling: Reawakening',
                'Scopri la nuova avventura di Jin-Woo mentre affronta sfide epiche!',
                ['Jin-Woo (Protagonista)', 'Il Re delle Ombre', 'Hwang Dong-Su']
            );
        });

        batmanButton.addEventListener('click', function () {
            updateContent(
                'locandina.jpeg',
                'Batman: The Dark Knight',
                'Unisciti a Bruce Wayne nella sua lotta contro il crimine a Gotham City.',
                ['Christian Bale (Batman)', 'Heath Ledger (Joker)', 'Gary Oldman (Jim Gordon)']
            );
        });
    } else {
        console.error('Pulsanti non trovati!');
    }
});