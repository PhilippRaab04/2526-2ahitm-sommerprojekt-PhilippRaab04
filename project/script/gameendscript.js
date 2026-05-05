const leaderboardKey = "quizDungeonLeaderboard";

function saveToLeaderboard() {
    const name = sessionStorage.getItem("quizDungeonCurrentPlayerName") || "Unknown";
    const points = Number(sessionStorage.getItem("quizDungeonCurrentPoints")) || 0;
    const timeSeconds = Number(sessionStorage.getItem("quizDungeonCurrentTime")) || 0;
    const heartsLeft = Number(sessionStorage.getItem("quizDungeonCurrentHearts")) || 0;

    const heartsUsed = 3 - heartsLeft;

    const minutes = Math.floor(timeSeconds / 60);
    const seconds = timeSeconds % 60;
    const minuteText = minutes < 10 ? "0" + minutes : String(minutes);
    const secondText = seconds < 10 ? "0" + seconds : String(seconds);
    const timeFormatted = minuteText + ":" + secondText;

    const newEntry = {
        name: name,
        points: points,
        time: timeFormatted,
        heartsUsed: heartsUsed
    };

    let leaderboardData = [];

    const saved = localStorage.getItem(leaderboardKey);
    if (saved !== null) {
        leaderboardData = JSON.parse(saved);
    }

    leaderboardData.push(newEntry);
    localStorage.setItem(leaderboardKey, JSON.stringify(leaderboardData));
}

function stopTimer() {
    if (typeof timerInterval !== "undefined" && timerInterval !== null) {
        clearInterval(timerInterval);
    }
}

function removeGameUI() {
    const quizContainer = document.querySelector(".quiz-container");
    if (quizContainer) {
        quizContainer.remove();
    }

    const bossContainer = document.querySelector(".boss-container");
    if (bossContainer) {
        bossContainer.remove();
    }

    const nextBossBox = document.querySelector(".interaction-box-next-boss");
    if (nextBossBox) {
        nextBossBox.remove();
    }
}

function showWinScreen() {
    stopTimer();
    removeGameUI();
    saveToLeaderboard();

    const points = sessionStorage.getItem("quizDungeonCurrentPoints") || "0";
    const timeSeconds = Number(sessionStorage.getItem("quizDungeonCurrentTime")) || 0;

    const minutes = Math.floor(timeSeconds / 60);
    const seconds = timeSeconds % 60;
    const minuteText = minutes < 10 ? "0" + minutes : String(minutes);
    const secondText = seconds < 10 ? "0" + seconds : String(seconds);
    const timeFormatted = minuteText + ":" + secondText;

    const gamePage = document.querySelector(".game-page");

    const endOverlay = document.createElement("div");
    endOverlay.classList.add("end-overlay");

    const endWindow = document.createElement("div");
    endWindow.classList.add("end-window");
    endWindow.classList.add("end-window-win");

    endWindow.innerHTML = `
        <h2 class="end-title end-title-win">Bravo!</h2>
        <p class="end-subtitle">Du hast den Dungeon gemeistert</p>
        <div class="end-stats">
            <span class="end-stat-box">Points: ${points}</span>
            <span class="end-stat-box">Time: ${timeFormatted}</span>
        </div>
        <a href="../subpages/entrance.html" class="end-button">Back to Menu</a>
    `;

    endOverlay.appendChild(endWindow);
    gamePage.appendChild(endOverlay);
}

function showGameOverScreen() {
    stopTimer();
    removeGameUI();
    saveToLeaderboard();

    const points = sessionStorage.getItem("quizDungeonCurrentPoints") || "0";
    const timeSeconds = Number(sessionStorage.getItem("quizDungeonCurrentTime")) || 0;

    const minutes = Math.floor(timeSeconds / 60);
    const seconds = timeSeconds % 60;
    const minuteText = minutes < 10 ? "0" + minutes : String(minutes);
    const secondText = seconds < 10 ? "0" + seconds : String(seconds);
    const timeFormatted = minuteText + ":" + secondText;

    const gamePage = document.querySelector(".game-page");

    const endOverlay = document.createElement("div");
    endOverlay.classList.add("end-overlay");

    const endWindow = document.createElement("div");
    endWindow.classList.add("end-window");
    endWindow.classList.add("end-window-lose");

    endWindow.innerHTML = `
        <h2 class="end-title end-title-lose">Dungeon gescheitert</h2>
        <p class="end-subtitle">Du wurdest besiegt</p>
        <div class="end-stats">
            <span class="end-stat-box">Points: ${points}</span>
            <span class="end-stat-box">Time: ${timeFormatted}</span>
        </div>
        <a href="../subpages/entrance.html" class="end-button">Back to Menu</a>
    `;

    endOverlay.appendChild(endWindow);
    gamePage.appendChild(endOverlay);
}

document.addEventListener("allBossesDefeated", function () {
    showWinScreen();
});

document.addEventListener("gameOver", function () {
    showGameOverScreen();
});