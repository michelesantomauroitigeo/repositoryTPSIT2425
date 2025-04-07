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

function verificaCampi() {
	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;

	if (username === "") {
		event.preventDefault();
		document.getElementById("erroreUsername").textContent = "Compila questo campo.";
	} else {
		document.getElementById("erroreUsername").textContent = "";
	}

	if (password === "") {
		event.preventDefault();
		document.getElementById("errorePassword").textContent = "Compila questo campo.";
	} else {
		document.getElementById("errorePassword").textContent = "";
	}
}