function aggiungiProdotto () {
	var tabella = document.getElementById("tabellaGestioneProdotti");
	var tbody = document.getElementsByTagName("tbody")[0];
	var colonne = document.getElementsByTagName("th").lenght;
	var tr = document.createElement("tr");

	for(var i=0; i<colonne; i++) {
		var td = document.createElement("td");
		var tx = document.getElementById("aggiungiProdotto");
		td.appendChild(tx);
		tr.appendChild(td);
	}
	tbody.appendchild(tr);
}