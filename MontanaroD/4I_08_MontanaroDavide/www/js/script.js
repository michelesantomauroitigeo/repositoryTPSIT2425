function verificaForm() {
    let contaErrori = 0;

    let valoreCampoNome = document.forms["formRegistrazione"]["campoNome"].value;
    if (valoreCampoNome == "") {
        contaErrori++;
        console.log('Attenzione, il campo non puo essere vuoto !');
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

     let valoreCampoData = document.forms["formRegistrazione"]["campoData"].value;
        if (valoreCampoData == "") {
        contaErrori++;
        //console.log('Attenzione, il campo non puo essere vuoto !');
        //alert("Attenzione, il campo non puo' essere vuoto !");
        document.getElementById("messaggioErroreData").innerHTML = "Attenzione, il campo non puo essere vuoto !";
    } else {
        document.getElementById("messaggioErroreData").innerHTML = "";       
    }

    let valoreCampoEmail = document.forms["formRegistrazione"]["campoEmail"].value;
        if (valoreCampoEmail == "") {
        contaErrori++;
        //console.log('Attenzione, il campo non puo essere vuoto !');
        //alert("Attenzione, il campo non puo' essere vuoto !");
        document.getElementById("messaggioErroreEmail").innerHTML = "Attenzione, il campo non puo essere vuoto !";
    } else {
        document.getElementById("messaggioErroreEmail").innerHTML = "";       
    }

    let valoreCampoUtente = document.forms["formRegistrazione"]["campoUtente"].value;
        if (valoreCampoUtente == "") {
        contaErrori++;
        //console.log('Attenzione, il campo non puo essere vuoto !');
        //alert("Attenzione, il campo non puo' essere vuoto !");
        document.getElementById("messaggioErroreUtente").innerHTML = "Attenzione, il campo non puo essere vuoto !";
    } else {
        document.getElementById("messaggioErroreUtente").innerHTML = "";       
    }

    let valoreCampoPassword = document.forms["formRegistrazione"]["campoPassword"].value;
        if (valoreCampoPassword == "") {
        contaErrori++;
        //console.log('Attenzione, il campo non puo essere vuoto !');
        //alert("Attenzione, il campo non puo' essere vuoto !");
        document.getElementById("messaggioErrorePassword").innerHTML = "Attenzione, il campo non puo essere vuoto !";
    } else {
        document.getElementById("messaggioErrorePassword").innerHTML = "";       
    }

    let valoreCampoTelefono = document.forms["formRegistrazione"]["campoTelefono"].value;
        if (valoreCampoTelefono == "") {
        contaErrori++;
        //console.log('Attenzione, il campo non puo essere vuoto !');
        //alert("Attenzione, il campo non puo' essere vuoto !");
        document.getElementById("messaggioErroreTelefono").innerHTML = "Attenzione, il campo non puo essere vuoto !";
    } else {
        document.getElementById("messaggioErroreTelefono").innerHTML = "";       
    }

    if (contaErrori != 0) {
        return false;
    }
}