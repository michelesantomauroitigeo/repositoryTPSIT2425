function popup(){
        document.getElementById("overlay").style.display = "flex";
}

function chiudi(){
    document.getElementById("overlay").style.display = "none";
}

function login() {
    const username = document.getElementById("username");
    const password = document.getElementById("password");

    let valida = true;

    if (username.value.trim() === ''|| username.value.trim()=== "Paride") {
        document.getElementById("errore").style.display = 'block';
        valida = false;
    } else {
        document.getElementById("errore").style.display = 'none';
    }

    if (password.value.trim() === ''|| password.value.trim()=== "Gigio1") {
        document.getElementById("errore").style.display = 'block';
        valida = false;
    } else {
        document.getElementById("errore").style.display = 'none';

    }

    return valida;
}