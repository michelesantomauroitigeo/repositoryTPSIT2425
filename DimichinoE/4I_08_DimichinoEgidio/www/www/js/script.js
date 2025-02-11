function validaLogin() {
    const nome = document.getElementById("nome");
    const cognome = document.getElementById("cognome");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    let controllo=true;
    if(nome.value.trim() ==='')
    {
       document.getElementById("n-errore").style.display = 'block';
         nome.classList.add('errore');
         controllo=false;
     }
     
    else{
          document.getElementById("n-errore").style.display = 'none';
           nome.classList.remove('errore');
    }
     if(cognome.value.trim() ==='')
    {
       document.getElementById("c-errore").style.display = 'block';
         nome.classList.add('errore');
         controllo=false;
     }
     
    else{
          document.getElementById("c-errore").style.display = 'none';
           nome.classList.remove('errore');
    }
    if(username.value.trim() ==='')
    {
       document.getElementById("u-errore").style.display = 'block';
         nome.classList.add('errore');
         controllo=false;
     }
     
    else{
          document.getElementById("u-errore").style.display = 'none';
           nome.classList.remove('errore');
    }
     if(username.value.trim() ==='')
    {
       document.getElementById("e-errore").style.display = 'block';
         nome.classList.add('errore');
         controllo=false;
     }
     
    else{
          document.getElementById("e-errore").style.display = 'none';
           nome.classList.remove('errore');
    }
   
    if(telefono.value.trim() ==='')
    {
       document.getElementById("p-errore").style.display = 'block';
         nome.classList.add('errore');
         controllo=false;
     }
     
    else{
          document.getElementById("p-errore").style.display = 'none';
           nome.classList.remove('errore');
    }

    return controllo; 

}