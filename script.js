const background = document.getElementById('background');
const transitionSound = document.getElementById('transitionSound');
let currentIndex = 0;
let timer;
let isClicked = false;

// Hintergrundbild-Arrays
let desktopImages = ['backgrounds/desktop/bg_desktop_1.svg', 'backgrounds/desktop/bg_desktop_2.svg', 'backgrounds/desktop/bg_desktop_3.svg', 'backgrounds/desktop/bg_desktop_4.svg', 'backgrounds/desktop/bg_desktop_5.svg', 'backgrounds/desktop/bg_desktop_6.svg'];
let mobileImages = ['backgrounds/mobile/bg_mobile_1.svg', 'backgrounds/mobile/bg_mobile_2.svg', 'backgrounds/mobile/bg_mobile_3.svg', 'backgrounds/mobile/bg_mobile_4.svg', 'backgrounds/mobile/bg_mobile_5.svg', 'backgrounds/mobile/bg_mobile_6.svg'];

let images = window.innerWidth <= 768 ? mobileImages : desktopImages;

function changeBackground() {
    background.style.backgroundImage = `url('${images[currentIndex]}')`;
}

function playTransitionSound() {
    transitionSound.play();
}

function handleFirstClick() {
    clearTimeout(timer);
    currentIndex = 2;
    changeBackground();
    startFourthImageTimer();
}

function handleSecondClick() {
    currentIndex = 3;
    changeBackground();
    startFifthImageTimer();
}

function startFourthImageTimer() {
    timer = setTimeout(function () {
        currentIndex = 3;
        changeBackground();
        playTransitionSound();
        transitionSound.volume = 0.5;
        startFifthImageTimer();
    }, 500);
}

function startFifthImageTimer() {
    timer = setTimeout(function () {
        currentIndex = 4;
        changeBackground();
        startSixthImageTimer();
    }, 4000);
}

function startSixthImageTimer() {
    timer = setTimeout(function () {
        currentIndex = 5;
        changeBackground();
    }, 5000);
}

function handleClick() {
    if (!isClicked) {
        isClicked = true;
        handleFirstClick();
    }
}

timer = setTimeout(function () {
    currentIndex = 1;
    changeBackground();
    background.addEventListener('click', handleClick);
}, 4000);

changeBackground();
