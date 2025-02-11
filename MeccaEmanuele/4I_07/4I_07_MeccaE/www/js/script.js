

document.getElementById('logo').addEventListener('click', function() {
    const image = document.getElementById('image');
    image.src = 'https://1000logos.net/wp-content/uploads/2017/08/Pixar-emblem.jpg'; // logo
    image.alt = 'Nuova immagine azienda';
});

        //Prodotti Chi Siamo Contatti

    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
    item.addEventListener('click', function() {
    
    menuItems.forEach(i => i.classList.remove('active'));

        //Evidenziamento

    if (this.id === 'prodotti' || this.id === 'chi-siamo' || this.id === 'contatti') {
       this.classList.add('active');
    }

        //Login e Registrazione

     if (this.id === 'login') {
        this.classList.add('large-text');
        this.textContent = 'Login Effettuato';
    } else if (this.id === 'registrazione') {
        this.classList.add('large-text');
        this.textContent = 'Registrazione Effettuata';
     }

    });

});

