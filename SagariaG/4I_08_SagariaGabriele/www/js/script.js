function Controllo() {
    let validita = true;
    console.log('Validità Prima del controllo= '+validita);
    console.log('');
    
    const controlloNome = document.getElementById('nome');
    const nomeError = document.getElementById('errorNome');
    if (controlloNome.value.trim() === '') {
        nomeError.style.display = 'block';
        controlloNome.style.border="1px solid red";
        validita = false;
    } else {
        nomeError.style.display = 'none';
    }

     console.log('');
    
    const controlloCognome = document.getElementById('cognome');
    const cognomeError= document.getElementById('errorCognome');
    console.log('Valore inserito nella casella di input cognome: '+controlloCognome.value);
    if(controlloCognome.value.trim() === ''){
        cognomeError.style.display = 'block';
        controlloCognome.style.border="1px solid red";
        validita = false;
    } else{
        cognomeError.style.display = 'none';
    }

    console.log('');

    const controlloTelefono = document.getElementById('telefono');
    const telefonoError = document.getElementById('errorTelefono');
    console.log('Valore inserito nella casella di input telefono: '+controlloTelefono.value);
    if(controlloTelefono.value.trim() === ''){
        telefonoError.style.display ='block';
        controlloTelefono.style.border="1px solid red";
        validita=false;
    }else{
        telefonoError.style.display= 'none';
    }

    console.log('');

    const controlloUsername = document.getElementById('username');
    const usernameError = document.getElementById('errorUsername');
    console.log('Valore inserito nella casella di input username: '+controlloUsername.value);
    if(controlloUsername.value.trim()=== '') {
        usernameError.style.display='block';
        controlloUsername.style.border="1px solid red";
        validita=false;
    }else {
        usernameError.style.display='none';
    }

    console.log('');
    
    const controlloData = document.getElementById('data');
    const dataError = document.getElementById('errorData');
    console.log('Valore inserito nella casella di input data: '+controlloData.value);
    if(controlloData.value.trim()=== '') {
        dataError.style.display='block';
        controlloData.style.border="1px solid red";
        validita=false;
    }else {
        dataError.style.display='none';
    }

    console.log('');

    const controlloEmail = document.getElementById('email');
    const emailError = document.getElementById('errorEmail');
    console.log('Valore inserito nella casella di input email: '+controlloEmail.value);
    if(controlloEmail.value.trim()=== '') {
        emailError.style.display='block';
        controlloEmail.style.border="1px solid red";
        validita=false;
    }else {
        emailError.style.display='none';
    }

    console.log('');

    const controlloPassword = document.getElementById('password');
    const passwordError = document.getElementById('errorPassword')
    console.log('Valore inserito nella casella di input password: '+controlloPassword.value);;
    if(controlloPassword.value.trim()=== '') {
        passwordError.style.display='block';
        controlloPassword.style.border="1px solid red";
        validita=false;
    }else {
        passwordError.style.display='none';
    }

    return validita;
}


















