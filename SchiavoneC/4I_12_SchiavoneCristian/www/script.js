function verificaForm() {
    let contaErrori = 0;

    let valoreCampoNome = document.forms["formAccesso"]["campoNome"].value;
    if (valoreCampoNome == "") {
        contaErrori++;
        console.log('Attenzione, il campo non puo essere vuoto !');
        document.getElementById("messaggioErroreNome").innerHTML = "Attenzione, il campo non puo essere vuoto !";
    } else {
        document.getElementById("messaggioErroreNome").innerHTML = "";      
    }

    let valoreCampoPassword =document.forms["formAccesso"]["campoPassword"].value;
    if(caloreCampoPaaword ==""){
    	contaErrori++;
    	console.log('Attenzione, il campo non puo essere vuoto !');
        document.getElementById("messaggioErrorePassword").innerHTML = "Attenzione, il campo non puo essere vuoto !";
    } else {
        document.getElementById("messaggioErrorePassword").innerHTML = "";      
    }