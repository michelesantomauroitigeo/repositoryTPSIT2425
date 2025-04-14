
function aperturaFinestra(){
        document.getElementById("finestraModale").style.display = 'block'; 
}

function chiusuraFinestra(){
        document.getElementById("finestraModale").style.display = 'none'; 
}

function aperturaFinestraLista(){
    document.getElementById("finestraLista").style.display = 'block'; 
}

function chisuraFinestraLista(){
    document.getElementById("finestraLista").style.display = 'none'; 
}


function controllo(){
    console.log("ciao");
    let nome = document.getElementById("nome");
    let descrizione = document.getElementById("descrizione");
    let prezzo = document.getElementById("prezzo");
    let sconto = document.getElementById("sconto");
    let immagine = document.getElementById("file");
    let validita = true;

    
    if (nome.value.trim() === '' ) {  
        document.getElementById("errorNome").style.display = 'block'; 
        validita = false;
    } else {
        document.getElementById("errorNome").style.display = 'none'; 
    }

    if (prezzo.value.trim() === '') { 
        document.getElementById("errorPrezzo").style.display = 'block'; 
        validita = false;
    } else {
        document.getElementById("errorPrezzo").style.display = 'none'; 
    }

    if (descrizione.value.trim() === '') { 
        document.getElementById("errorDescrizione").style.display = 'block'; 
        validita = false;
    } else {
        document.getElementById("errorDescrizione").style.display = 'none'; 
    }

    if (prezzo.value.trim() === '') { 
        document.getElementById("errorPrezzo").style.display = 'block'; 
        validita = false;
    } else {
        document.getElementById("errorPrezzo").style.display = 'none'; 
    }

    if (sconto.value.trim() === '') { 
        document.getElementById("errorSconto").style.display = 'block'; 
        validita = false;
    } else {
        document.getElementById("errorSconto").style.display = 'none'; 
    }

    if (immagine.value.trim() === '') { 
        document.getElementById("errorImmagine").style.display = 'block'; 
        validita = false;
    } else {
        document.getElementById("errorImmagine").style.display = 'none'; 
    }

    console.log(validita);
    
    return validita;  
}
