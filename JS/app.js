const bars = document.getElementById('bars');
const mobileMenu = document.getElementById('mobileMenu'); // To const variabler som bliver hentet fra HTML via getElementById

bars.addEventListener('click', function () {
    mobileMenu.classList.toggle('active')     //addEventlistener i dette tilfælde "click" på const "bars" til Fuctionen på "mobileMenu" toggle som viser/fjerner   
})