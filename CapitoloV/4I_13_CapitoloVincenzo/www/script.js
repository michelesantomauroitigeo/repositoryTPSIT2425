function ApriLogin(){
	document.getElemetById("finestra-login").style.dysplay='block';
}

function ValidaLogin(){
	let Controllo=true;

	const input_username = document.getElementById("username");
	const input_password = document.getElementById("password");

	if(input_username.value.trim()!=="Vincenzo2008"){
		document.getElementById("mess1").textContent("Hai sbagliato username!!");
		Controllo=false;
	}

	if(input_password.value.trim()!=="Capitolo10"){
		document.getElementById("mess1").textContent("Hai sbagliato password!!");
		Controllo=false;
	}	
}

function ChiudiFinestra(){
	document.getElemetById("finestra-login").style.dysplay='none';
}
