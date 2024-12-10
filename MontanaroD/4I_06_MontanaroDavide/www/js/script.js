// Funzione per mostrare o nascondere i membri del team
function toggleCeoInfo() {
    const ceo1 = document.getElementById("ceo1");
    const ceo2 = document.getElementById("ceo2");

    // Alterna la visibilità
    if (ceo1.style.display === "none") {
        ceo1.style.display = "block";
        ceo2.style.display = "block";
    } else {
        ceo1.style.display = "none";
        ceo2.style.display = "none";
    }
}


function cambiaDimensioneTesto() {
    const ceoDescription = document.querySelectorAll(".ceo-member p");

    ceoDescription.forEach(paragraph => {
        let currentSize = window.getComputedStyle(paragraph).fontSize;
        currentSize = parseFloat(currentSize);
        paragraph.style.fontSize = (currentSize * 1.2) + "px";
    });
}


function diminuisciDimensioneTesto() {
    const ceoDescription = document.querySelectorAll(".ceo-member p");

    ceoDescription.forEach(paragraph => {
        let currentSize = window.getComputedStyle(paragraph).fontSize;
        currentSize = parseFloat(currentSize);
        paragraph.style.fontSize = (currentSize / 1.2) + "px"; 
    });
}


function modificaContenutoCeo() {
    const ceo1Desc = document.querySelector("#ceo1 p");
    ceo1Desc.innerHTML = "Il contenuto di Anna Maria Gentile è stato aggiornato dinamicamente tramite JavaScript.";

    const ceo2Desc = document.querySelector("#ceo2 p");
    ceo2Desc.innerHTML = "Il contenuto di Nicola Vita è stato aggiornato dinamicamente tramite JavaScript.";
}
