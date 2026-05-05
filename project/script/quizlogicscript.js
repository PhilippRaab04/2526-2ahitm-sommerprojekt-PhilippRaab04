const difficultyOrder = ["leicht", "mittel", "schwer"];

let currentBossData = null;
let currentDifficultyIndex = 0;
let usedQuestionIdsForCurrentBoss = [];
let answerCooldown = false;

function getPointsForCorrectAnswer(schwierigkeit) {
    if (schwierigkeit == "leicht") {
        return 1;
    }
    if (schwierigkeit == "mittel") {
        return 2;
    }
    if (schwierigkeit == "schwer") {
        return 3;
    }
    return 0;
}

function getPointsLossForWrongAnswer(schwierigkeit) {
    if (schwierigkeit == "leicht") {
        return 3;
    }
    if (schwierigkeit == "mittel") {
        return 2;
    }
    if (schwierigkeit == "schwer") {
        return 1;
    }
    return 0;
}

function highlightHoveredAnswer() {
    const answerBoxes = document.querySelectorAll(".quiz-answer-box");

    for (let i = 0; i < answerBoxes.length; i++) {
        answerBoxes[i].classList.remove("quiz-answer-box-active");
    }

    const collidedAnswerBox = getCollidedAnswerBox();

    if (collidedAnswerBox) {
        collidedAnswerBox.classList.add("quiz-answer-box-active");
    }
}

function getCollidedAnswerBox() {
    const playerElement = document.getElementById("player");

    if (!playerElement) {
        return null;
    }

    const playerRect = playerElement.getBoundingClientRect();
    const answerBoxes = document.querySelectorAll(".quiz-answer-box");

    for (let i = 0; i < answerBoxes.length; i++) {
        const answerRect = answerBoxes[i].getBoundingClientRect();

        const isColliding =
            playerRect.left < answerRect.right &&
            playerRect.right > answerRect.left &&
            playerRect.top < answerRect.bottom &&
            playerRect.bottom > answerRect.top;

        if (isColliding) {
            return answerBoxes[i];
        }
    }

    return null;
}

function loadNextQuestionOrFinishBoss() {
    currentDifficultyIndex++;

    if (currentDifficultyIndex >= difficultyOrder.length) {
        document.dispatchEvent(new CustomEvent("bossDefeated", {
            detail: {
                boss: currentBossData
            }
        }));
        return;
    }

    const nextDifficulty = difficultyOrder[currentDifficultyIndex];
    const nextQuestion = renderQuestionForBossAndDifficulty(
        currentBossData,
        nextDifficulty,
        usedQuestionIdsForCurrentBoss
    );

    if (nextQuestion) {
        usedQuestionIdsForCurrentBoss.push(nextQuestion.id);
    }
}

function handleCorrectAnswer(answerBox) {
    answerBox.classList.add("quiz-answer-box-correct");

    window.currentPoints += getPointsForCorrectAnswer(currentRenderedQuestion.schwierigkeit);
    updateHudPoints();

    sessionStorage.setItem("quizDungeonCurrentPoints", String(window.currentPoints));

    setTimeout(function () {
        loadNextQuestionOrFinishBoss();
        answerCooldown = false;
    }, 1200);
}

function handleWrongAnswer(answerBox) {
    answerBox.classList.add("quiz-answer-box-wrong");

    window.currentPoints -= getPointsLossForWrongAnswer(currentRenderedQuestion.schwierigkeit);

    if (window.currentPoints < 0) {
        window.currentPoints = 0;
    }

    window.currentHearts--;

    if (window.currentHearts < 0) {
        window.currentHearts = 0;
    }

    updateHudPoints();
    updateHudHearts();

    sessionStorage.setItem("quizDungeonCurrentPoints", String(window.currentPoints));
    sessionStorage.setItem("quizDungeonCurrentHearts", String(window.currentHearts));

    setTimeout(function () {
        if (window.currentHearts <= 0) {
            document.dispatchEvent(new CustomEvent("gameOver"));
            answerCooldown = false;
            return;
        }

        loadNextQuestionOrFinishBoss();
        answerCooldown = false;
    }, 1200);
}

function checkAnswerCollision() {
    if (answerCooldown) {
        return;
    }

    if (!currentRenderedQuestion) {
        return;
    }

    const collidedAnswerBox = getCollidedAnswerBox();

    if (!collidedAnswerBox) {
        return;
    }

    answerCooldown = true;

    const selectedAnswerIndex = Number(collidedAnswerBox.dataset.answerIndex);
    const correctAnswerIndex = currentRenderedQuestion.richtigeAntwort;

    if (selectedAnswerIndex == correctAnswerIndex) {
        handleCorrectAnswer(collidedAnswerBox);
    } else {
        handleWrongAnswer(collidedAnswerBox);
    }
}

document.addEventListener("bossIntroFinished", function (event) {
    currentBossData = event.detail.boss;
    currentDifficultyIndex = 0;
    usedQuestionIdsForCurrentBoss = [];

    const firstQuestion = currentRenderedQuestion;

    if (firstQuestion) {
        usedQuestionIdsForCurrentBoss.push(firstQuestion.id);
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key.toLowerCase() == "e") {
        checkAnswerCollision();
    }
});

function quizLogicLoop() {
    highlightHoveredAnswer();
    requestAnimationFrame(quizLogicLoop);
}

requestAnimationFrame(quizLogicLoop);