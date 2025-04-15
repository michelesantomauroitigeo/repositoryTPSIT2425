
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

    
     if (nome.value.trim() === '' || nome.value.trim() !== "potodo" ) {  
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
        window.location.href = "html/admin.html"; // se ritorna true apre un altra pagina
        console.log("Sto per aprire la nuova pagina...");
    }

}