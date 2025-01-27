function validateForm() {
    const input_email = document.getElementById("e-mail");
    const input_usern = document.getElementById("usern");
    const input_pwd = document.getElementById("pwd");

    let Valido = true;

    if (input_email.value.trim() === '') {
        const errorElement = document.getElementById("email-errore");
        input_email.classList.add('errore'); 
        errorElement.style.display = 'block'; 
        Valido = false;
    } else {
        const errorElement = document.getElementById("email-errore");
        input_email.classList.remove('errore'); 
        errorElement.style.display = 'none'; 
    }

    if (input_usern.value.trim() === '') {
        const errorElement = document.getElementById("usern-errore");
        input_usern.classList.add('errore'); 
        errorElement.style.display = 'block'; 
        Valido = false;
    } else {
        const errorElement = document.getElementById("usern-errore");
        input_usern.classList.remove('errore'); 
        errorElement.style.display = 'none'; 
    }

    if (input_pwd.value.trim() === '') {
        const errorElement = document.getElementById("pwd-errore");
        input_pwd.classList.add('errore'); 
        errorElement.style.display = 'block'; 
        Valido = false;
    } else {
        const errorElement = document.getElementById("pwd-errore");
        input_pwd.classList.remove('error'); 
        errorElement.style.display = 'none'; 
    }

    return Valido;
  }