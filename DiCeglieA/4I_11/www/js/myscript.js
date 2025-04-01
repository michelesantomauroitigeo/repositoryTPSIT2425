var idInUso;
function apriModale(id) {
  document.getElementById("modale-modifica").style.display = "block";

  idInUso = id.replace(/\s/g, '');
  document.forms["form-modifica"]["edit-nome"].value = table.rows[idInUso].cells[1].innerHTML;
  document.forms["form-modifica"]["edit-cognome"].value = table.rows[idInUso].cells[2].innerHTML;
  document.forms["form-modifica"]["edit-email"].value = table.rows[idInUso].cells[3].innerHTML;
  document.forms["form-modifica"]["edit-telefono"].value = table.rows[idInUso].cells[4].innerHTML;
  document.forms["form-modifica"]["edit-data_nascita"].value = table.rows[idInUso].cells[5].innerHTML;
  document.forms["form-modifica"]["edit-username"].value = table.rows[idInUso].cells[6].innerHTML;

  
  console.log(idInUso);
}
function chiudiModale() {
  document.getElementById("modale-modifica").style.display = "none";
  document.getElementById("modale-elimina").style.display = "none";
}

var table = document.getElementById("table");

console.log(table.rows[1].cells[1].innerHTML );

function modificaInfo() {
  table.rows[idInUso].cells[1].innerHTML=document.forms["form-modifica"]["edit-nome"].value
  table.rows[idInUso].cells[2].innerHTML=document.forms["form-modifica"]["edit-cognome"].value
  table.rows[idInUso].cells[3].innerHTML=document.forms["form-modifica"]["edit-email"].value
  table.rows[idInUso].cells[4].innerHTML=document.forms["form-modifica"]["edit-telefono"].value
  table.rows[idInUso].cells[5].innerHTML=document.forms["form-modifica"]["edit-data_nascita"].value
  table.rows[idInUso].cells[6].innerHTML=document.forms["form-modifica"]["edit-username"].value
}

function apriModaleElimina(id)
{
  document.getElementById("modale-elimina").style.display = "block";

  idInUso = id.replace(/\s/g, '');
 
}

function chiudiModaleElimina() {
  document.getElementById("modale-elimina").style.display = "none";
}

function eliminaUtente() {

  table.deleteRow(idInUso);
}