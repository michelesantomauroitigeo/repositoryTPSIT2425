function verificaForm()
{
	let contaErrori = 0;

	let valoreCampoUsername = document.forms["formAccedi"]["campoUsername"].value;
	if(valoreCampoUsername == ""){
		contaErrori++;
		document.getElementById('messaggioErroreUsername').innerHTML="Attenzione compila questo campo!";
	}else{
		document.getElementById('messaggioErroreUsername').innerHTML="";
	}

	let valoreCampoPassword = document.forms["formAccedi"]["campoPassword"].value;
	if(valoreCampoPassword == ""){
		contaErrori++;
		document.getElementById('messaggioErrorePassword').innerHTML="Attenzione compila questo campo!";
	}else{
		document.getElementById('messaggioErrorePassword').innerHTML="";
	}

	if(contaErrori !=0){
		return false;
	}
}