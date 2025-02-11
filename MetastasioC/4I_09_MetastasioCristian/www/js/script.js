function validateForm() {
    let valid = true;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let telefono = document.getElementById("telefono").value;
    let nome = document.getElementById("nome").value;
    let cognome =document.getElementById("cognome"),value;
    document.getElementById("userError").textContent = "";
    document.getElementById("passError").textContent = "";
    document.getElementById("telError").textContent = "";
    document.getElementById("nameError").textContent ="";
    document.getElementById("surnameError").textContent ="";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
    
    if (username === "") {
        document.getElementById("userError").textContent = "Compilamento obbligatorio";
        valid = false;
    }
    
    if (password === "") {
        document.getElementById("passError").textContent = "Compilamento obbligatorio";
        valid = false;
    }
        if (telefono === "") {
        document.getElementById("telError").textContent = "Compilamento obbligatorio";
        valid = false;
    }
    
        if (username === "") {
        document.getElementById("nameError").textContent = "Compilamento obbligatorio";
        valid = false;
    }

        if (username === "") {
        document.getElementById("surnameError").textContent = "Compilamento obbligatorio";
        valid = false;
    }
    
    
    
    return valid;
}
