function Modifica(){
    document.getElementById('finestra').style.display='block';
}

function chiusuraFinestra(){
    document.getElementById('finestra').style.display='none';
}


function elimina(){
    document.getElementById('finestra1').style.display='block';
}

function chiusuraFinestra1(){
    document.getElementById('finestra1').style.display='none';
}



function Abilita(){
    document.getElementById('finestra2').style.display='block';
}

function chiusuraFinestra2(){
    document.getElementById('finestra2').style.display='none';
}



function disabilita(){
    document.getElementById('finestra3').style.display='block';
}

function chiusuraFinestra3(){
    document.getElementById('finestra3').style.display='none';
}
function Abilita(checkbox) {
        var riga = checkbox.closest('tr'); // Trova la riga più vicina al checkbox
        if (checkbox.checked) {
          riga.style.backgroundColor = 'red'; // Cambia il colore di sfondo della riga quando è selezionato
        } else {
          riga.style.backgroundColor = 'white'; // Ripristina il colore di sfondo della riga quando non è selezionato
        }
      }
