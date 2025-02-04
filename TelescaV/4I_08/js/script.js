function verificaForm() {
  let contaErrori = 0;

  
  let valoreCampoNome = document.forms["formRegistrazione"]["campoNome"].value;
  if (valoreCampoNome == "") {
    contaErrori++;
    document.getElementById("messaggioErroreNome").innerHTML = "Questo campo &egrave; obbligatorio!";
  } else {
    document.getElementById("messaggioErroreNome").innerHTML = "";
  }


  let valoreCampoCognome = document.forms["formRegistrazione"]["campoCognome"].value;
  if (valoreCampoCognome == "") {
    contaErrori++;
    document.getElementById("messaggioErroreCognome").innerHTML = "Questo campo &egrave; obbligatorio!";
  } else {
    document.getElementById("messaggioErroreCognome").innerHTML = "";
  }

  let valoreCampoEmail = document.forms["formRegistrazione"]["campoEmail"].value;
  if (valoreCampoEmail == "") {
    contaErrori++;
    document.getElementById("messaggioErroreEmail").innerHTML = "Questo campo &egrave; obbligatorio!";
  } else {
    document.getElementById("messaggioErroreEmail").innerHTML = "";
  }

 
  let valoreCampoUsername = document.forms["formRegistrazione"]["campoUsername"].value;
  if (valoreCampoUsername == "") {
    contaErrori++;
    document.getElementById("messaggioErroreUsername").innerHTML = "Questo campo &egrave; obbligatorio!";
  } else {
    document.getElementById("messaggioErroreUsername").innerHTML = "";
  }

  let valoreCampoPassword = document.forms["formRegistrazione"]["campoPassword"].value;
  if (valoreCampoPassword == "") {
    contaErrori++;
    document.getElementById("messaggioErrorePassword").innerHTML = "Questo campo &egrave; obbligatorio!";
  } else {
    document.getElementById("messaggioErrorePassword").innerHTML = "";
  }

  // Verifica Indirizzo (aggiunto)
  let valoreCampoIndirizzo = document.forms["formRegistrazione"]["campoIndirizzo"].value;
  if (valoreCampoIndirizzo == "") {
    contaErrori++;
    document.getElementById("messaggioErroreIndirizzo").innerHTML = "Questo campo &egrave; obbligatorio!";
  } else {
    document.getElementById("messaggioErroreIndirizzo").innerHTML = "";
  }

  
  if (contaErrori != 0) {
    return false;
  }
}
