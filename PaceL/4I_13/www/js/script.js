function apriFinestraLogin() {
	let modal = document.getElementById("finestraLogin");
	let btn = document.getElementById("loginButton");
	let span = document.getElementsByClassName("close")[0];

	btn.onclick = function() {
		modal.style.display = "block";
	}

	span.onclick = function() {
		modal.style.display = "none";
	}

	window.onclick = function(event) {
		if (event.target == modal) {
   			modal.style.display = "none";
  		}
	}
}

function apriFinestraRegistrazione() {
	let modal = document.getElementById("finestraRegistrazione");
	let btn = document.getElementById("registerButton");
	let span = document.getElementsByClassName("close")[1];

	btn.onclick = function() {
		modal.style.display = "block";
	}

	span.onclick = function() {
		modal.style.display = "none";
	}

	window.onclick = function(event) {
		if (event.target == modal) {
   			modal.style.display = "none";
  		}
	}
}

function apriFinestraAmministrazione() {
	let modal = document.getElementById("finestraAmministrazione");
	let btn = document.getElementById("adminButton");
	let span = document.getElementsByClassName("close")[2];

	btn.onclick = function() {
		modal.style.display = "block";
	}

	span.onclick = function() {
		modal.style.display = "none";
	}

	window.onclick = function(event) {
		if (event.target == modal) {
   			modal.style.display = "none";
  		}
	}
}

function verificaCampiAmministrazione() {
	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;

	if (username === "") {
		event.preventDefault();
		document.getElementById("erroreUsername").textContent = "Compila questo campo.";
	} else if (username !== "Lorenzo17") {
		event.preventDefault();
		document.getElementById("erroreUsername").textContent = "";
		document.getElementById("erroreCredenziali").textContent = "Username o password invalidi.";
		document.getElementById("erroreCredenziali").style.color = "red";
	} else {
		document.getElementById("erroreUsername").textContent = "";
	}

	if (password === "") {
		event.preventDefault();
		document.getElementById("errorePassword").textContent = "Compila questo campo.";
	} else if (password !== "admin17") {
		event.preventDefault();
		document.getElementById("errorePassword").textContent = "";
		document.getElementById("erroreCredenziali").textContent = "Username o password invalidi.";
		document.getElementById("erroreCredenziali").style.color = "red";
	} else {
		document.getElementById("errorePassword").textContent = "";
	}
}

function verificaCampiLogin() {
	let username = document.getElementById("usernameLogin").value;
	let password = document.getElementById("passwordLogin").value;

	if (username === "") {
		event.preventDefault();
		document.getElementById("erroreUsernameLogin").textContent = "Compila questo campo.";
		document.getElementById("erroreUsernameLogin").style.color = "red";
	} else {
		document.getElementById("erroreUsername").textContent = "";
	}

	if (password === "") {
		event.preventDefault();
		document.getElementById("errorePasswordLogin").textContent = "Compila questo campo.";
		document.getElementById("errorePasswordLogin").style.color = "red";
	} else {
		document.getElementById("errorePasswordLogin").textContent = "";
	}
}

function verificaCampiRegistrazione() {
	let nome = document.getElementById("nome").value;
	let cognome = document.getElementById("cognome").value;
	let data = document.getElementById("data_nascita").value;
	let email = document.getElementById("email").value;
	let password = document.getElementById("passwordRegistrazione").value;

	if (nome === "") {
		event.preventDefault();
		document.getElementById("erroreNome").textContent = "Compila questo campo.";
		document.getElementById("erroreNome").style.color = "red";
	} else if (nome !== "") {
		document.getElementById("erroreNome").textContent = "";
	}

	if (cognome === "") {
		event.preventDefault();
		document.getElementById("erroreCognome").textContent = "Compila questo campo.";
		document.getElementById("erroreCognome").style.color = "red";
	} else if (cognome !== "") {
		document.getElementById("erroreCognome").textContent = "";
	}

	if (data === "") {
		event.preventDefault();
		document.getElementById("erroreDataNascita").textContent = "Compila questo campo.";
		document.getElementById("erroreDataNascita").style.color = "red";
	} else if (data !== "") {
		document.getElementById("erroreDataNascita").textContent = "";
	}

	if (email === "") {
		event.preventDefault();
		document.getElementById("erroreEmail").textContent = "Compila questo campo.";
		document.getElementById("erroreEmail").style.color = "red";
	} else if (email !== "") {
		document.getElementById("erroreEmail").textContent = "";
	}

	if (password === "") {
		event.preventDefault();
		document.getElementById("errorePasswordRegistrazione").textContent = "Compila questo campo.";
		document.getElementById("errorePasswordRegistrazione").style.color = "red";
	} else if (password !== "") {
		document.getElementById("errorePasswordRegistrazione").textContent = "";
	}
}