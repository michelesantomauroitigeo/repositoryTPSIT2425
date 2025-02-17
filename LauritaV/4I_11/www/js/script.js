//finestra di modifica apertura e chiusura 
let modifica = document.getElementsByClassName("icon edit");

for (let i = 0; i < modifica.length; i ++) {
    modifica[i].onclick = function() {

        let riga = this.parentNode.parentNode;
        let nome = riga.cells[1].innerText;
        let cognome = riga.cells[2].innerText;
        let email = riga.cells[3].innerText;
        let username = riga.cells[4].innerText;
        let telefono = riga.cells[5].innerText;
        let data_nascita = riga.cells[6].innerText; 

        document.getElementById("editNome").value = nome;
        document.getElementById("editCognome").value = cognome;
        document.getElementById("editEmail").value = email;
        document.getElementById("editUsername").value = username;
        document.getElementById("editTelefono").value = telefono;
        document.getElementById("editDataNascita").value = data_nascita;

        document.getElementsByClassName("finestra-modifica")[0].style.display = "block";
        document.body.classList.add('oscuramento');
    }
}

function chiudiFinestra () {
        document.getElementsByClassName("finestra-modifica")[0].style.display = "none";
        document.body.classList.remove('oscuramento');
}