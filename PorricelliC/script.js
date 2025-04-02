function login(){
document.get.ElementById('finestraLogin').styledisplay='none';

}

funciotn validaLogin(){
event.preventDefault();
const nomeUtente=document.getElementById("nome utente");
const password=document.getElementById("password");
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
     if(password.value.trim() ==='')
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
   
    if(password.value.trim() ==='')
    {
       document.getElementById("p-errore").style.display = 'block';
         nome.classList.add('errore');
         controllo=false;
     }
     
    else{
          document.getElementById("p-errore").style.display = 'none';
           nome.classList.remove('errore');
    }

    return Controllo; 