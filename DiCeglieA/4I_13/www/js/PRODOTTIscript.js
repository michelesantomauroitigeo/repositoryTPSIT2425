var righa;

function Aprimodale(button) {
    document.getElementById('modal').style.display='block';

     righa=button.closest('tr')
    var nome=righa.cells[0].innerHTML;
    var prezzo=righa.cells[1].innerHTML;

    document.forms["modifica-form"]["nome"].value=nome;
    document.forms["modifica-form"]["prezzo"].value=prezzo;

    
}

function salvaModifiche() {
    
    righa.cells[0].innerHTML=document.forms["modifica-form"]["nome"].value;
    righa.cells[1].innerHTML=document.forms["modifica-form"]["prezzo"].value;
    
    document.getElementById('modal').style.display='none';
}