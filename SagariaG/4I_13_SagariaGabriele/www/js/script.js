function aperturaFinestra(){
	document.getElementById("finestraModale").style.display='block';
	console.log("ciao");
}

function controllo(){
	let nome=document.getElementById("nome");
	let password=document.getElementById("password");
	let validita=true;
	if(nome==""){
		document.getElementById("errorNome").style.display='none';
		validita=true;
	}else{
		document.getElementById("errorNome").style.display='block';
		validita=false;
	}
	if(password=="ciao"){
		document.getElementById("errorPassword").style.display='none';
		validita=true;
	}
	else{
		document.getElementById("errorPassword").style.display='block';
		validita=false;
	}
	console.log(validita);
	return validita;
}