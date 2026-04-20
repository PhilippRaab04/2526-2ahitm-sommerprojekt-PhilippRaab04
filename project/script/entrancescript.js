const openSettingsButton = document.getElementById("open-settings-button");
const closeSettingsButton = document.getElementById("close-settings-button");
const settingsOverlay = document.getElementById("settings-overlay");

const openTutorialButton = document.getElementById("open-tutorial-button");
const closeTutorialButton = document.getElementById("close-tutorial-button");
const tutorialOverlay = document.getElementById("tutorial-overlay");

const musicToggleButton = document.getElementById("music-toggle-button");
const volumeSlider = document.getElementById("volume-slider");
const backgroundMusic = document.getElementById("background-music");

let musicIsOn = false;

backgroundMusic.volume = volumeSlider.value / 100;

openSettingsButton.addEventListener("click", function () {
    settingsOverlay.classList.remove("hidden");
});

closeSettingsButton.addEventListener("click", function () {
    settingsOverlay.classList.add("hidden");
});

settingsOverlay.addEventListener("click", function (event) {
    if (event.target == settingsOverlay) {
        settingsOverlay.classList.add("hidden");
    }
});

openTutorialButton.addEventListener("click", function () {
    tutorialOverlay.classList.remove("hidden");
});

closeTutorialButton.addEventListener("click", function () {
    tutorialOverlay.classList.add("hidden");
});

tutorialOverlay.addEventListener("click", function (event) {
    if (event.target == tutorialOverlay) {
        tutorialOverlay.classList.add("hidden");
    }
});

musicToggleButton.addEventListener("click", function () {
    if (musicIsOn == false) {
        backgroundMusic.play();
        musicIsOn = true;
        musicToggleButton.textContent = "On";
    } else {
        backgroundMusic.pause();
        musicIsOn = false;
        musicToggleButton.textContent = "Off";
    }
});

volumeSlider.addEventListener("input", function () {
    backgroundMusic.volume = volumeSlider.value / 100;
});