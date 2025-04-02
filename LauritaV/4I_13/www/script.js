function finestra () {
    document.getElementById("finestra-login").style.display = "block";
}
function chiudiLogin () {
    document.getElementsById("finestra-login").style.display = "none";
    
}
function Login() {
    let usern = document.getElementById("username");
    let passw = document.getElementById("password");
    let valido = true;
    let usererrore = document.getElementById("user-errore");
    let passwerrore = document.getElementById("passw-errore");

    if (usern.value === '') {
        usererrore.style.display = "block";
        valido = false;
    } else {
        usererrore.style.display = "none";
    }
    if (passw.value === '') {
        passwerrore.style.display = "block";
        valido = false;
    } else {
        passwerrore.style.display = "none";
    }

    return valido;
}