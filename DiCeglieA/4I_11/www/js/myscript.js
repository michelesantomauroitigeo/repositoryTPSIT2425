
function apriModale(id) {
  document.getElementById("modale-modifica").style.display = "block";

  id = id.replace(/\s/g, '');
  document.forms["form-modifica"]["edit-nome"].value = table.rows[id].cells[1].innerHTML;
  document.forms["form-modifica"]["edit-cognome"].value = table.rows[id].cells[2].innerHTML;
  document.forms["form-modifica"]["edit-email"].value = table.rows[id].cells[3].innerHTML;
  document.forms["form-modifica"]["edit-telefono"].value = table.rows[id].cells[4].innerHTML;
  document.forms["form-modifica"]["edit-data_nascita"].value = table.rows[id].cells[5].innerHTML;
  document.forms["form-modifica"]["edit-username"].value = table.rows[id].cells[6].innerHTML;

  console.log(id);
}
function chiudiModale() {
  document.getElementById("modale-modifica").style.display = "none";
}

var table = document.getElementById("table");

console.log(table.rows[1].cells[1].innerHTML );


