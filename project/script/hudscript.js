const gamePageForHud = document.querySelector(".game-page");

let hudContainer = null;
let hudNameBox = null;
let hudPointsBox = null;
let hudHeartsBox = null;
let hudHeartsWrapper = null;
let hudTimeBox = null;

window.currentPoints = 0;
window.currentHearts = 3;
window.timerInterval = null;
let elapsedSeconds = 0;

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    let minuteText = String(minutes);
    let secondText = String(remainingSeconds);

    if (minutes < 10) {
        minuteText = "0" + minuteText;
    }

    if (remainingSeconds < 10) {
        secondText = "0" + secondText;
    }

    return minuteText + ":" + secondText;
}

function createHudBox(className) {
    const box = document.createElement("div");
    box.classList.add("hud-box");
    box.classList.add(className);
    return box;
}

function createHeartsDisplay(heartsAmount) {
    const heartsWrapper = document.createElement("div");
    heartsWrapper.classList.add("hud-hearts-wrapper");

    for (let i = 0; i < heartsAmount; i++) {
        const heartImage = document.createElement("img");
        heartImage.classList.add("hud-heart-image");
        heartImage.src = "../media/heart.png";
        heartImage.alt = "Heart";
        heartsWrapper.appendChild(heartImage);
    }

    return heartsWrapper;
}

function createHud(playerName) {
    if (hudContainer) {
        hudContainer.remove();
    }

    hudContainer = document.createElement("div");
    hudContainer.classList.add("hud-container");

    hudNameBox = createHudBox("hud-box-name");
    hudPointsBox = createHudBox("hud-box-points");
    hudHeartsBox = createHudBox("hud-box-hearts");
    hudTimeBox = createHudBox("hud-box-time");

    hudContainer.appendChild(hudNameBox);
    hudContainer.appendChild(hudPointsBox);
    hudContainer.appendChild(hudHeartsBox);
    hudContainer.appendChild(hudTimeBox);

    gamePageForHud.appendChild(hudContainer);

    hudNameBox.textContent = "Name: " + playerName;
}

function updateHudPoints() {
    if (hudPointsBox) {
        hudPointsBox.textContent = "Points: " + window.currentPoints;
    }
}

function updateHudHearts() {
    if (!hudHeartsBox) {
        return;
    }

    hudHeartsBox.innerHTML = "";

    const heartsLabel = document.createElement("span");
    heartsLabel.textContent = "Hearts: ";

    hudHeartsWrapper = createHeartsDisplay(window.currentHearts);

    hudHeartsBox.appendChild(heartsLabel);
    hudHeartsBox.appendChild(hudHeartsWrapper);
}

function updateHudTime() {
    if (hudTimeBox) {
        hudTimeBox.textContent = "Time: " + formatTime(elapsedSeconds);
    }
}

function startHudTimer() {
    if (window.timerInterval) {
        clearInterval(window.timerInterval);
    }

    window.timerInterval = setInterval(function () {
        elapsedSeconds++;
        updateHudTime();
        sessionStorage.setItem("quizDungeonCurrentTime", String(elapsedSeconds));
    }, 1000);
}

document.addEventListener("quizRunStarted", function (event) {
    window.currentPoints = 0;
    window.currentHearts = 3;
    elapsedSeconds = 0;

    createHud(event.detail.playerName);
    updateHudPoints();
    updateHudHearts();
    updateHudTime();
    startHudTimer();
});