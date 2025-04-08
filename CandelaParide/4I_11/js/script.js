

let rigaSelezionata = null; 
document.querySelectorAll(".modifica").forEach(button => {
    button.addEventListener("click", function() {
        document.getElementById("overlay").style.display = "flex";
        document.querySelector("table").style.opacity = "0.5"; 

        rigaSelezionata = this.closest("tr"); 

        document.getElementById("ID").value = rigaSelezionata.cells[0].innerText;
        document.getElementById("nome").value = rigaSelezionata.cells[1].innerText;
        document.getElementById("cognome").value = rigaSelezionata.cells[2].innerText;
        document.getElementById("telefono").value = rigaSelezionata.cells[3].innerText;
    });
});

function modifica() {
    if (rigaSelezionata) {

        rigaSelezionata.cells[0].textContent = document.getElementById("ID").value;
        rigaSelezionata.cells[1].textContent = document.getElementById("nome").value;
        rigaSelezionata.cells[2].textContent = document.getElementById("cognome").value;
        rigaSelezionata.cells[3].textContent = document.getElementById("telefono").value;

        chiudi(); 
    } else {
        console.log("Errore: nessuna riga selezionata."); 
    }
}

function chiudi() {
    document.getElementById("overlay").style.display = "none";
    document.querySelector("table").style.opacity = "1";
    rigaSelezionata = null; // Reset della variabile
}


 document.querySelectorAll("#abilita").forEach(checkbox => {
    checkbox.addEventListener("change" , function(){

        riga=this.closest("tr");    

        if(this.checked){
            riga.style.backgroundColor="red";
        }
        else{
            riga.style.backgroundColor="";

        }
    })
 });



document.querySelectorAll(".elimina").forEach(button => {
    button.addEventListener("click", function() {
        this.closest("tr").remove(); 
    });
});
