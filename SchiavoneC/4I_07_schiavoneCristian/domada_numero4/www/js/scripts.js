function changeLogo() {
    document.querySelector('.logo').textContent = 'NUOVO LOGO';
}

function highlightLink(link) {
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    link.classList.add('active');
}

function modifyAuth(link, newText) {
    link.textContent = newText;
    link.classList.add('clicked');
}