function verificaForm() {
	let contaErrori = 0;
	let valoreCampoNome = document.forms["formRegistrazione"]["campoNome"].value;
	if (valoreCampoNome == "") {
		contaErrori++;
		//console.log('Attenzione, il campo non puo essere vuoto !');
		//alert("Attenzione, il campo non puo' essere vuoto !");
		document.getElementById("messaggioErroreNome").innerHTML = "Attenzione, il campo non puo essere vuoto !";
	} else {
		document.getElementById("messaggioErroreNome").innerHTML = "";		
	}

	let valoreCampoCognome = document.forms["formRegistrazione"]["campoCognome"].value;
		if (valoreCampoCognome == "") {
		contaErrori++;
		//console.log('Attenzione, il campo non puo essere vuoto !');
		//alert("Attenzione, il campo non puo' essere vuoto !");
		document.getElementById("messaggioErroreCognome").innerHTML = "Attenzione, il campo non puo essere vuoto !";
	} else {
		document.getElementById("messaggioErroreCognome").innerHTML = "";		
	}

	if (contaErrori != 0) {
		return false;
	}
}