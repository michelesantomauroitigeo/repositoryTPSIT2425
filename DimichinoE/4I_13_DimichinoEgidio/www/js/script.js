function Finestra(){
	document.getElementById("finestra").style.display='block';
}

function invio(event){
    event.preventDefault(); //non fa inviare il form
    let nome = document.getElementById("nome");
    let password = document.getElementById("password");
    let validita = true;

    
    if (nome.value.trim() === '' || nome.value.trim() !== "Egidio" ) {  
        document.getElementById("nomeErrato").style.display = 'block'; 
        validita = false;
    } else {
        document.getElementById("nomeErrato").style.display = 'none'; 
    }

    if (password.value.trim() === '' || password.value.trim() !== "Topogigio") { 
        document.getElementById("passwordErrata").style.display = 'block'; 
        validita = false;
    } else {
        document.getElementById("passwordErrata").style.display = 'none'; 
    }
    
    if(validita == true){
        window.location.href = "html/prodotti.html"; 
    }
    return validita; 
}

