// Funzione per il controllo di validità del modulo
function Controllo() {
    var x = document.forms["form"]["nome"].value;
    if (x == null || x == "") {
        alert("Il campo Nome è obbligatorio.");
        return false;
    }
    return true;
}
