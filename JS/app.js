const bars = document.getElementById('bars'); // id'et bars til min const variabel "bars"
const mobileMenu = document.getElementById('mobileMenu'); // id'et mobileMenu til const varibal mobilemenu

bars.addEventListener('click', function () {
    mobileMenu.classList.toggle('active')     /*addEventlistener i dette tilfælde "click" på const "bars" til Fuctionen
                                                på "mobileMenu" toggle som viser/fjerner active classen som er designet i css'en  */
})

var vid = document.getElementById("myVideo");

function enableMute() {
    vid.muted = true;
}

function disableMute() {
    vid.muted = false;
}

function checkMute() {
    alert(vid.muted);
} 