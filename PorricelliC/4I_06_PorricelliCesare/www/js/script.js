// Cambia il contenuto di un tag HTML
document.getElementById("main-title").innerHTML = "Benvenuti al nostro Panificio!";

// Cambia un attributo di un tag HTML
document.getElementById("logo-img").setAttribute("src", "imgs/nuovo_logo.jpeg");

// Cambia la dimensione del testo
document.getElementById("welcome-msg").style.fontSize = "24px";

// Mostra e nasconde un componente HTML
document.getElementById("main-content").style.display = "none";

// Funzione per alternare la visibilità del contenuto principale
document.getElementById("main-content").style.display = "block";
