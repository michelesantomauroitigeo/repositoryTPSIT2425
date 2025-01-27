// Funzione per mostrare o nascondere le informazioni sui CEO
function toggleCeoInfo() {
    const ceo1 = document.getElementById('ceo1');
    const ceo2 = document.getElementById('ceo2');
    
    // Alterna la visibilità delle informazioni dei CEO
    if (ceo1.style.display === "none") {
        ceo1.style.display = "block";
        ceo2.style.display = "block";
    } else {
        ceo1.style.display = "none";
        ceo2.style.display = "none";
    }
}

// Funzione per modificare il contenuto delle informazioni sui CEO
function modificaContenutoCeo() {
    const ceo1 = document.getElementById('ceo1');
    const ceo2 = document.getElementById('ceo2');
    
    // Modifica il contenuto dei paragrafi dei CEO
    ceo1.querySelector('p').textContent = "Il contenuto per Anna Maria Gentile è stato aggiornato.";
    ceo2.querySelector('p').textContent = "Il contenuto per Nicola Vita è stato aggiornato.";
}

// Funzione per aumentare la dimensione del testo
function cambiaDimensioneTesto() {
    const ceo1 = document.getElementById('ceo1');
    const ceo2 = document.getElementById('ceo2');
    
    // Aumenta la dimensione del testo per entrambe le sezioni dei CEO
    ceo1.style.fontSize = "18px";
    ceo2.style.fontSize = "18px";
}

// Funzione per diminuire la dimensione del testo
function diminuisciDimensioneTesto() {
    const ceo1 = document.getElementById('ceo1');
    const ceo2 = document.getElementById('ceo2');
    
    // Riduce la dimensione del testo per entrambe le sezioni dei CEO
    ceo1.style.fontSize = "14px";
    ceo2.style.fontSize = "14px";
}
