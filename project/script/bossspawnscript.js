const gamePageForBoss = document.querySelector(".game-page");

let currentBossContainer = null;
let currentBossIndex = 0;

function removeStartBattleBox() {
    const startBattleBox = document.querySelector(".interaction-box-battle");
    if (startBattleBox) {
        startBattleBox.remove();
    }
}

function createBossContainer(boss) {
    const bossContainer = document.createElement("div");
    bossContainer.classList.add("boss-container");

    const bossImage = document.createElement("img");
    bossImage.classList.add("boss-image");
    bossImage.src = boss.image;
    bossImage.alt = boss.bossName;

    const bossLineBox = document.createElement("div");
    bossLineBox.classList.add("boss-line-box");
    bossLineBox.textContent = boss.line;

    bossContainer.appendChild(bossImage);
    bossContainer.appendChild(bossLineBox);

    return bossContainer;
}

function spawnBossByIndex(bossIndex) {
    const boss = bossData[bossIndex];

    if (!boss) {
        return;
    }

    currentBossIndex = bossIndex;

    removeStartBattleBox();

    const oldNextBoss = document.querySelector(".interaction-box-next-boss");
    if (oldNextBoss) {
        oldNextBoss.remove();
    }

    if (currentBossContainer) {
        currentBossContainer.remove();
    }

    currentBossContainer = createBossContainer(boss);
    gamePageForBoss.appendChild(currentBossContainer);

    // Boss Bild einblenden mit AnimeJS
    anime({
        targets: currentBossContainer.querySelector(".boss-image"),
        opacity: [0, 1],
        translateY: [-40, 0],
        duration: 800,
        easing: "easeOutQuad"
    });

    // Boss Line Box einblenden mit AnimeJS (kurz verzögert)
    anime({
        targets: currentBossContainer.querySelector(".boss-line-box"),
        opacity: [0, 1],
        translateY: [-20, 0],
        duration: 600,
        delay: 300,
        easing: "easeOutQuad"
    });

    setTimeout(function () {
        const bossLineBox = currentBossContainer.querySelector(".boss-line-box");

        // Boss Line Box ausblenden mit AnimeJS
        anime({
            targets: bossLineBox,
            opacity: [1, 0],
            translateY: [0, -20],
            duration: 500,
            easing: "easeInQuad",
            complete: function () {
                if (bossLineBox) {
                    bossLineBox.classList.add("hidden");
                }

                document.dispatchEvent(new CustomEvent("bossIntroFinished", {
                    detail: {
                        bossIndex: bossIndex,
                        boss: boss
                    }
                }));
            }
        });
    }, 5000);
}

function createNextBossBox() {
    const nextBossBox = document.createElement("div");
    nextBossBox.classList.add("interaction-box");
    nextBossBox.classList.add("interaction-box-next-boss");
    nextBossBox.textContent = "Next Boss";
    gamePageForBoss.appendChild(nextBossBox);
}

function nextBossCollisionLoop() {
    const playerElement = document.getElementById("player");
    const nextBossBox = document.querySelector(".interaction-box-next-boss");

    if (!nextBossBox) {
        return;
    }

    if (!playerElement) {
        requestAnimationFrame(nextBossCollisionLoop);
        return;
    }

    const playerRect = playerElement.getBoundingClientRect();
    const nextBossRect = nextBossBox.getBoundingClientRect();

    const isColliding =
        playerRect.left < nextBossRect.right &&
        playerRect.right > nextBossRect.left &&
        playerRect.top < nextBossRect.bottom &&
        playerRect.bottom > nextBossRect.top;

    if (isColliding) {
        nextBossBox.remove();
        spawnBossByIndex(currentBossIndex + 1);
        return;
    }

    requestAnimationFrame(nextBossCollisionLoop);
}

document.addEventListener("quizRunStarted", function () {
    spawnBossByIndex(0);
});

document.addEventListener("bossDefeated", function () {
    if (currentBossContainer) {
        currentBossContainer.remove();
        currentBossContainer = null;
    }

    const quizContainer = document.querySelector(".quiz-container");
    if (quizContainer) {
        quizContainer.remove();
    }

    const nextBossIndex = currentBossIndex + 1;

    if (nextBossIndex >= bossData.length) {
        document.dispatchEvent(new CustomEvent("allBossesDefeated"));
        return;
    }

    createNextBossBox();
    requestAnimationFrame(nextBossCollisionLoop);
});