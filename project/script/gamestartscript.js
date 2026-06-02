const musicPopupOverlay = document.getElementById("music-popup-overlay");
const musicPopupYesButton = document.getElementById("music-popup-yes-button");
const musicPopupNoButton = document.getElementById("music-popup-no-button");
const backgroundMusic = document.getElementById("background-music");

const namePopupOverlay = document.getElementById("name-popup-overlay");
const playerNameInput = document.getElementById("player-name-input");
const startRunButton = document.getElementById("start-run-button");
const playerElementForStart = document.getElementById("player");

let currentPlayerName = "";
let runHasStarted = false;
let startTriggerActive = false;
let musicChoiceFinished = false;

window.gameMusicEnabled = false;

function finishMusicChoice(enableMusic) {
    window.gameMusicEnabled = enableMusic;
    musicChoiceFinished = true;

    if (enableMusic) {
        backgroundMusic.volume = 0.2;
        backgroundMusic.play().catch(function () {});
    } else {
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0;
    }

    musicPopupOverlay.classList.add("hidden");
}

function getStartBattleBox() {
    return document.querySelector(".interaction-box-battle");
}

function isPlayerCollidingWithStartBattle() {
    const startBattleBox = getStartBattleBox();

    if (!playerElementForStart || !startBattleBox) {
        return false;
    }

    const playerRect = playerElementForStart.getBoundingClientRect();
    const startBattleRect = startBattleBox.getBoundingClientRect();

    const isColliding =
        playerRect.left < startBattleRect.right &&
        playerRect.right > startBattleRect.left &&
        playerRect.top < startBattleRect.bottom &&
        playerRect.bottom > startBattleRect.top;

    return isColliding;
}

function openNamePopup() {
    if (runHasStarted) {
        return;
    }

    if (musicChoiceFinished == false) {
        return;
    }

    namePopupOverlay.classList.remove("hidden");
    playerNameInput.focus();
}

function startRun() {
    const enteredName = playerNameInput.value.trim();

    if (enteredName == "") {
        alert("Please enter a name first.");
        return;
    }

    currentPlayerName = enteredName;
    runHasStarted = true;

    sessionStorage.setItem("quizDungeonCurrentPlayerName", currentPlayerName);
    sessionStorage.setItem("quizDungeonCurrentPoints", "0");
    sessionStorage.setItem("quizDungeonCurrentHearts", "3");
    sessionStorage.setItem("quizDungeonCurrentBossIndex", "0");
    sessionStorage.setItem("quizDungeonCurrentTime", "0");

    namePopupOverlay.classList.add("hidden");

    document.dispatchEvent(new CustomEvent("quizRunStarted", {
        detail: {
            playerName: currentPlayerName
        }
    }));
}

function checkStartBattleCollision() {
    if (runHasStarted) {
        return;
    }

    if (musicChoiceFinished == false) {
        return;
    }

    const isColliding = isPlayerCollidingWithStartBattle();

    if (isColliding && startTriggerActive == false) {
        startTriggerActive = true;
        openNamePopup();
    }

    if (isColliding == false) {
        startTriggerActive = false;
    }
}

musicPopupYesButton.addEventListener("click", function () {
    finishMusicChoice(true);
});

musicPopupNoButton.addEventListener("click", function () {
    finishMusicChoice(false);
});

startRunButton.addEventListener("click", function () {
    startRun();
});

playerNameInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        startRun();
    }
});

function startCollisionLoop() {
    checkStartBattleCollision();
    requestAnimationFrame(startCollisionLoop);
}

requestAnimationFrame(startCollisionLoop);