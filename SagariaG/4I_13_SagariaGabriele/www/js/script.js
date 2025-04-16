
function aperturaFinestra(){
        document.getElementById("finestraModale").style.display = 'block'; 
}

function chiusuraFinestra(){
        document.getElementById("finestraModale").style.display = 'none'; 
}


function controllo(event){
event.preventDefault(); // Blocca l'invio del form 
    let nome = document.getElementById("nome");
    let password = document.getElementById("password");
    let validita = true;

    
    if (nome.value.trim() === '' || nome.value.trim() !== "maurizio89" ) {  
        document.getElementById("errorNome").style.display = 'block'; 
        validita = false;
    } else {
        document.getElementById("errorNome").style.display = 'none'; 
    }

    if (password.value.trim() === '' || password.value.trim() !== "ciao") { 
        document.getElementById("errorPassword").style.display = 'block'; 
        validita = false;
    } else {
        document.getElementById("errorPassword").style.display = 'none'; 
    }

    console.log(validita);
    if(validita == true){
        window.location.href = "html/amministratore.html"; // se ritorna true apre un altra pagina
    }
    return validita;  
}

function aperturaFinestraRegistrazione(){
    document.getElementById("finestraModaleReg").style.display='block';
    document.getElementById("finestraModale").style.display = 'none'; 

}


function controlloReg(event){
    event.preventDefault(); // Blocca l'invio del form 
    let nome = document.getElementById("nomeReg");
    let password = document.getElementById("passwordReg");
    let email = document.getElementById("emailReg");
    let data = document.getElementById("dataReg");

    let validita = true;

    if (nome.value.trim() === '' ) {  
        document.getElementById("errorNomeReg").style.display = 'block'; 
        validita = false;
    } else {
        document.getElementById("errorNomeReg").style.display = 'none'; 
    }

    if (password.value.trim() === '') { 
        document.getElementById("errorPasswordReg").style.display = 'block'; 
        validita = false;
    } else {
        document.getElementById("errorPasswordReg").style.display = 'none'; 
    }

    if (email.value.trim() === '') { 
        document.getElementById("errorEmailReg").style.display = 'block'; 
        validita = false;
    } else {
        document.getElementById("errorEmailReg").style.display = 'none'; 
    }

    if (data.value.trim() === '') { 
        document.getElementById("errorDataReg").style.display = 'block'; 
        validita = false;
    } else {
        document.getElementById("errorDataReg").style.display = 'none'; 
    }

    // Sposta il pulsante fuori dal return
    let pulsante = document.getElementById("pulsanteReg");
    pulsante.onclick = function(){
        chiusuraFinestraRegistrazione();  
    };

    return validita;
}

function chiusuraFinestraRegistrazione(){
    document.getElementById("finestraModaleReg").style.display='none';
}
