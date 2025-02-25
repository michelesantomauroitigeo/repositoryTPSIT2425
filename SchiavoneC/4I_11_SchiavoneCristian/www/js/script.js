function chiusuraFinestra(){
    document.getElementById('finestraModale').style.display='none';
}

function aperturaFinestra(button) {
    const finestra = document.getElementById('finestraModale').style.display='block';
    let riga= button.closest('tr');
    let valore1= riga.cells[1].textContent;
    let valore2= riga.cells[2].textContent;
    let valore3= riga.cells[3].textContent;
    let valore4= riga.cells[4].textContent;
    let valore5= riga.cells[5].textContent;
    let valore6= riga.cells[6].textContent;

    document.getElementById('nome').value= valore1;
    document.getElementById('cognome').value= valore2;
    document.getElementById('email').value= valore3;
    document.getElementById('telefono').value= valore4;
    document.getElementById('dataNascita').value= valore5;
    document.getElementById('username').value= valore6;

   const pulsante=document.getElementById('pulsanteModifica');
   pulsante.onclick = function(){
        riga.cells[1].textContent=document.getElementById('nome').value;
        riga.cells[2].textContent=document.getElementById('cognome').value;
        riga.cells[3].textContent=document.getElementById('email').value;
        riga.cells[4].textContent=document.getElementById('telefono').value;
        riga.cells[5].textContent=document.getElementById('dataNascita').value;
        riga.cells[6].textContent=document.getElementById('username').value;
        chiusuraFinestra();
   };
}

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



function aperturaFinestraElimina(button){
    document.getElementById('finestaModaleEliminazione').style.display='block';
    let riga= button.closest('tr');
    const pulsante = document.getElementById('pulsanteSalva');
    pulsante.onclick =function(){
        riga.style.display='none';
        chiusuraFinestraElinazione();
    };
}

function chiusuraFinestraElinazione(){
    document.getElementById('finestaModaleEliminazione').style.display='none';
}


