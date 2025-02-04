document.querySelector("form").addEventListener("submit", function () {
    console.log("invio del form funzionante");

    const inputs = document.querySelectorAll("input[type='text'], input[type='password']");
    console.log("Selezione degli input funzionante:");

    document.querySelectorAll(".mess-errore").forEach(msg => {
        msg.remove();
        console.log("Messaggio di errore rimosso");

    });

    inputs.forEach(input => {
        
        if (input.value.trim() === "") {
            input.style.border = "2px solid red"; 

            const errore = document.createElement("span");
            errore.classList.add("mess-errore");
            errore.textContent = " * Campo obbligatorio";

            input.parentNode.insertBefore(errore, input.nextSibling);


        } else {
            input.style.border = "1px solid black";
            console.log("Compilazione campo funzionante");
        }
    });
    console.log("Controllo dei campi completato");


});
