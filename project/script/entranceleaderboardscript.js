const openLeaderboardButton = document.getElementById("open-leaderboard-button");
const closeLeaderboardButton = document.getElementById("close-leaderboard-button");
const leaderboardOverlay = document.getElementById("leaderboard-overlay");
const leaderboardList = document.getElementById("leaderboard-list");

const leaderboardStorageKey = "quizDungeonLeaderboard";

function createDummyLeaderboardData() {
    return [
        {
            name: "Philipp",
            points: 1850,
            time: "04:28",
            heartsUsed: 1
        },
        {
            name: "Daniel",
            points: 1720,
            time: "05:14",
            heartsUsed: 2
        },
        {
            name: "Max",
            points: 1610,
            time: "05:47",
            heartsUsed: 1
        },
        {
            name: "Nico",
            points: 1490,
            time: "06:09",
            heartsUsed: 3
        },
        {
            name: "Theo",
            points: 1380,
            time: "07:02",
            heartsUsed: 2
        }
    ];
}

/*wird noch gelöscht*/

function saveDummyDataIfEmpty() {
    const savedLeaderboard = localStorage.getItem(leaderboardStorageKey);

    if (savedLeaderboard == null) {
        const dummyData = createDummyLeaderboardData();
        localStorage.setItem(leaderboardStorageKey, JSON.stringify(dummyData));
    }
}

function getLeaderboardData() {
    const savedLeaderboard = localStorage.getItem(leaderboardStorageKey);

    if (savedLeaderboard === null) {
        return [];
    }

    return JSON.parse(savedLeaderboard);
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

    for (let i = 0; i < leaderboardData.length; i++) {
        const leaderboardEntry = createLeaderboardEntry(leaderboardData[i], i + 1);
        leaderboardList.appendChild(leaderboardEntry);
    }
}


/*wird noch gelöscht*/
saveDummyDataIfEmpty();

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