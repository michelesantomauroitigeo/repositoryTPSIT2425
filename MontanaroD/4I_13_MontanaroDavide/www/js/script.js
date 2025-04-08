
function aperturaFinestra() {
    document.getElementById("finestraModale").style.display = 'block'; 
}


function chiudiFinestra(){
    document.getElementById("finestraModale").style.display = 'none'; 

}


function verifica() {
    let nome = document.getElementById("nome").value; 
    let password = document.getElementById("password").value;
    let validita = true;

    // Verifica se il nome è vuoto
    if (nome === "") {
        document.getElementById("errorNome").style.display = 'block';
        validita = false;
    } else {
        document.getElementById("errorNome").style.display = 'none';
    }


    if (password !== "Davidemont07@.") {
        document.getElementById("errorPassword").style.display = 'block';
        validita = false;
    } else {
        document.getElementById("errorPassword").style.display = 'none';
    }

    console.log(validita);
    return validita; 
}

document.getElementById("buttonAccedi").addEventListener("click", aperturaFinestra);
