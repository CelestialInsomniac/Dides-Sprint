const background = document.getElementById('background');
const transitionSound = document.getElementById('transitionSound');
let currentIndex = 0;
let timer;
let isClicked = false;

// Definiere die Hintergrundbilder für Desktop und Mobile
let desktopImages = ['backgrounds/desktop/bg_desktop_1.svg', 'backgrounds/desktop/bg_desktop_2.svg', 'backgrounds/desktop/bg_desktop_3.svg', 'backgrounds/desktop/bg_desktop_4.svg', 'backgrounds/desktop/bg_desktop_5.svg', 'backgrounds/desktop/bg_desktop_6.svg'];
let mobileImages = ['backgrounds/mobile/bg_mobile_1.svg', 'backgrounds/mobile/bg_mobile_2.svg', 'backgrounds/mobile/bg_mobile_3.svg', 'backgrounds/mobile/bg_mobile_4.svg', 'backgrounds/mobile/bg_mobile_5.svg', 'backgrounds/mobile/bg_mobile_6.svg'];

// Verwende die entsprechenden Hintergrundbilder basierend auf der Bildschirmgröße
let images = window.innerWidth <= 768 ? mobileImages : desktopImages;

function changeBackground() {
    background.style.backgroundImage = `url('${images[currentIndex]}')`;
}

function playTransitionSound() {
    transitionSound.play();
}

function handleFirstClick() {
    clearTimeout(timer); // Stoppe den Timer für das vierte Bild, falls er noch aktiv ist
    currentIndex = 2; // Wechsle zum dritten Bild
    changeBackground();
    startFourthImageTimer();
}

function handleSecondClick() {
    currentIndex = 3; // Wechsle zum vierten Bild
    changeBackground();
    startFifthImageTimer();
}

function startFourthImageTimer() {
    timer = setTimeout(function () {
        currentIndex = 3; // Wechsle zum vierten Bild
        changeBackground();
        playTransitionSound(); // Spiele den Übergangssound ab
        transitionSound.volume = 0.5; // Setze die Lautstärke auf 50%
        startFifthImageTimer();
    }, 500); // Warte 2 Sekunden nach dem dritten Bildwechsel
}

function startFifthImageTimer() {
    timer = setTimeout(function () {
        currentIndex = 4; // Wechsle zum fünften Bild
        changeBackground();
        startSixthImageTimer();
    }, 4000); // Warte 3 Sekunden nach dem vierten Bildwechsel
}

function startSixthImageTimer() {
    timer = setTimeout(function () {
        currentIndex = 5; // Wechsle zum sechsten Bild
        changeBackground();
    }, 5000); // Warte 3 Sekunden nach dem fünften Bildwechsel
}

function handleClick() {
    if (!isClicked) {
        isClicked = true;
        handleFirstClick();
    }
}

timer = setTimeout(function () {
    currentIndex = 1; // Starte den Timer für das zweite Bild nach 4 Sekunden
    changeBackground();
    background.addEventListener('click', handleClick);
}, 4000);

changeBackground(); // Initiale Anzeige des ersten Bildes
