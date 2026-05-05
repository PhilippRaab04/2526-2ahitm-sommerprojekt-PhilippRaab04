const openLeaderboardButton = document.getElementById("open-leaderboard-button");
const closeLeaderboardButton = document.getElementById("close-leaderboard-button");
const leaderboardOverlay = document.getElementById("leaderboard-overlay");
const leaderboardList = document.getElementById("leaderboard-list");

const leaderboardStorageKey = "quizDungeonLeaderboard";

function getLeaderboardData() {
    const saved = localStorage.getItem(leaderboardStorageKey);

    if (saved === null) {
        return [];
    }

    return JSON.parse(saved);
}

function sortLeaderboardData(leaderboardData) {
    leaderboardData.sort(function (a, b) {
        return b.points - a.points;
    });
}

function createLeaderboardEntry(playerData, rank) {
    const leaderboardEntry = document.createElement("div");
    leaderboardEntry.classList.add("leaderboard-entry");

    leaderboardEntry.innerHTML = `
        <span class="leaderboard-rank">${rank}</span>
        <span>${playerData.name}</span>
        <span class="leaderboard-points">${playerData.points}</span>
        <span class="leaderboard-time">${playerData.time}</span>
        <span class="leaderboard-hearts">${playerData.heartsUsed}</span>
    `;

    return leaderboardEntry;
}

function renderLeaderboard() {
    leaderboardList.innerHTML = "";

    const leaderboardData = getLeaderboardData();
    sortLeaderboardData(leaderboardData);

    if (leaderboardData.length == 0) {
        leaderboardList.innerHTML = "<p style='text-align:center; color:#fff8ef; font-family:magical-world,serif; font-size:1.4rem;'>No runs yet.</p>";
        return;
    }

    for (let i = 0; i < leaderboardData.length; i++) {
        const leaderboardEntry = createLeaderboardEntry(leaderboardData[i], i + 1);
        leaderboardList.appendChild(leaderboardEntry);
    }
}

openLeaderboardButton.addEventListener("click", function () {
    renderLeaderboard();
    leaderboardOverlay.classList.remove("hidden");
});

closeLeaderboardButton.addEventListener("click", function () {
    leaderboardOverlay.classList.add("hidden");
});

leaderboardOverlay.addEventListener("click", function (event) {
    if (event.target == leaderboardOverlay) {
        leaderboardOverlay.classList.add("hidden");
    }
});