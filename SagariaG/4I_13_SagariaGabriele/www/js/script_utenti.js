function abilita(button,idCheck){
    let riga= button.closest('tr');
    let controllo = document.getElementById(idCheck);
    if (controllo.checked){ //checked serve a vedere se la checkbox è attiva o è spenta
        riga.style.backgroundColor='green';
        riga.style.color='white';
        console.log("checkbox attivata");
    } else {
        console.log("checkbox disattivata");
        riga.style.backgroundColor='white';
        riga.style.color='black';
    }
            
}
