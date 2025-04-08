function Login(){
    document.getElementById('finestra').style.display='block';
}
function chiusuraFinestra(){

    document.getElementById('finestra').style.display='none';
}

function validaLogin(event){
    event.preventDefault(); //non fa inviare il form
    let nomeUtente = document.getElementById("nomeUtente");
    let Password = document.getElementById("Password");
    let controllo = true;

    
    if (nomeUtente.value.trim() === '' || nomeUtente.value.trim() !== "Mario" ) {  
        document.getElementById("n-errore").style.display = 'block'; 
        controllo = false;
    } else {
        document.getElementById("n-errore").style.display = 'none'; 
    }

    if (Password.value.trim() === '' || Password.value.trim() !== "1234") { 
        document.getElementById("p-errore").style.display = 'block'; 
        controllo = false;
    } else {
        document.getElementById("p-errore").style.display = 'none'; 
    }
    
    if(controllo == true){
        window.location.href = "html/amministrazione.html"; 
    }
    return controllo; 
}

function aggiungi(){
    document.getElementById('finestraAggiungi').style.display='block';
}
function chiusuraFinestraAggiungi(){

    document.getElementById('finestraAggiungi').style.display='none';
}
function valida(event) {
    event.preventDefault(); // Impedisce l'invio del form

    let immagine = document.getElementById("immagine");
    let titolo = document.getElementById("titolo");
    let descrizione = document.getElementById("descrizione");
    let controllo = true;

    // Controllo immagine
    if (immagine.files.length === 0) {
        document.getElementById("errore-immagine").style.display = 'block';
        controllo = false;
    } else {
        document.getElementById("errore-immagine").style.display = 'none';
    }

    // Controllo titolo
    if (titolo.value.trim() === '') {
        document.getElementById("errore-titolo").style.display = 'block';
        controllo = false;
    } else {
        document.getElementById("errore-titolo").style.display = 'none';
    }

    // Controllo descrizione
    if (descrizione.value.trim() === '') {
        document.getElementById("errore-descrizione").style.display = 'block';
        controllo = false;
    } else {
        document.getElementById("errore-descrizione").style.display = 'none';
    }

    return controllo; // Non fa nulla se controllo = false
}

function lista() {
    document.getElementById('finestraLista').style.display = 'block';
}

function chiusuraFinestraLista() {
    document.getElementById('finestraLista').style.display = 'none';
}
