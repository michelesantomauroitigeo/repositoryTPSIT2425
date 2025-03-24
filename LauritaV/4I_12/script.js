function validateForm() {
	let valido = true;
	let contaerrori = 0;
	
	if (document.getElementById("InputNome").value.trim() === "") {
		document.getElementById("ValidaNome").style.display = "block";
        document.getElementById("NomeCorretto").style.display = "none";
		contaerrori ++;
	} else {
        document.getElementById("NomeCorretto").style.display = "block";
        document.getElementById("ValidaNome").style.display = "none";
    }
	


	let sesso = document.getElementById("InputSesso").value;
	
	if (sesso.length > 1 || sesso === "") {
		document.getElementById("ValidaSesso").style.display = "block";
        document.getElementById("SessoCorretto").style.display = "none";
		contaerrori ++;
	} else {
        document.getElementById("SessoCorretto").style.display = "block";
        document.getElementById("ValidaSesso").style.display = "none";
    }

	if ( contaerrori > 0) {
		valido = false;
	}

	return valido;
}

let arear=document.getElementById("Accesso");
arear.onclick = function() {
	document.getElementById("finestra").style.display = "block";
}

let chiusura = document.getElementById ("chiusura");
chiusura.onclick = function () {
	document.getElementById("finestra").style.display = "none";
}