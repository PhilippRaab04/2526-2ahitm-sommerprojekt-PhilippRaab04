const gamePageForQuiz = document.querySelector(".game-page");

let currentQuizContainer = null;
let currentRenderedQuestion = null;

let fiftyFiftyAlreadyUsedForCurrentQuestion = false;

function getRandomQuestionByDifficulty(fragenArray, schwierigkeit, usedQuestionIds) {
    const passendeFragen = [];

    for (let i = 0; i < fragenArray.length; i++) {
        const frage = fragenArray[i];

        if (frage.schwierigkeit == schwierigkeit && usedQuestionIds.includes(frage.id) === false) {
            passendeFragen.push(frage);
        }
    }

    if (passendeFragen.length == 0) {
        return null;
    }

    const randomIndex = Math.floor(Math.random() * passendeFragen.length);
    return passendeFragen[randomIndex];
}

function createQuestionBox(frageText) {
    const questionBox = document.createElement("div");
    questionBox.classList.add("quiz-question-box");
    questionBox.textContent = frageText;
    return questionBox;
}

function createAnswersGrid(antworten) {
    const answersGrid = document.createElement("div");
    answersGrid.classList.add("quiz-answers-grid");

    for (let i = 0; i < antworten.length; i++) {
        const answerBox = document.createElement("div");
        answerBox.classList.add("quiz-answer-box");
        answerBox.classList.add("quiz-answer-box-" + (i + 1));
        answerBox.dataset.answerIndex = String(i + 1);
        answerBox.textContent = antworten[i];
        answersGrid.appendChild(answerBox);
    }

    return answersGrid;
}

function createQuizContainer(frageObjekt) {
    const quizContainer = document.createElement("div");
    quizContainer.classList.add("quiz-container");

    const questionBox = createQuestionBox(frageObjekt.frage);
    const answersGrid = createAnswersGrid(frageObjekt.antworten);

    quizContainer.appendChild(questionBox);
    quizContainer.appendChild(answersGrid);

    return quizContainer;
}

function renderQuestionForBossAndDifficulty(boss, schwierigkeit, usedQuestionIds) {
    if (currentQuizContainer) {
        currentQuizContainer.remove();
    }

    const frage = getRandomQuestionByDifficulty(boss.fragen, schwierigkeit, usedQuestionIds);

    if (frage === null) {
        return null;
    }

    currentRenderedQuestion = frage;
    currentQuizContainer = createQuizContainer(frage);
    fiftyFiftyAlreadyUsedForCurrentQuestion = false;

    gamePageForQuiz.appendChild(currentQuizContainer);

    return frage;
}

function isQuestionCurrentlyActive() {
    return currentQuizContainer != null && currentRenderedQuestion !== null;
}

function hideTwoWrongAnswersForCurrentQuestion() {
    if (!isQuestionCurrentlyActive()) {
        return false;
    }

    if (fiftyFiftyAlreadyUsedForCurrentQuestion) {
        return false;
    }

    const answerBoxes = currentQuizContainer.querySelectorAll(".quiz-answer-box");
    const wrongAnswerBoxes = [];

    for (let i = 0; i < answerBoxes.length; i++) {
        const answerIndex = Number(answerBoxes[i].dataset.answerIndex);

        if (answerIndex != currentRenderedQuestion.richtigeAntwort) {
            wrongAnswerBoxes.push(answerBoxes[i]);
        }
    }

    if (wrongAnswerBoxes.length < 2) {
        return false;
    }

    wrongAnswerBoxes.sort(function () {
        return Math.random() - 0.5;
    });

    wrongAnswerBoxes[0].classList.add("quiz-answer-box-hidden");
    wrongAnswerBoxes[1].classList.add("quiz-answer-box-hidden");

    fiftyFiftyAlreadyUsedForCurrentQuestion = true;
    return true;
}

function clearCurrentQuestion() {
    if (currentQuizContainer) {
        currentQuizContainer.remove();
        currentQuizContainer = null;
    }

    currentRenderedQuestion = null;
    fiftyFiftyAlreadyUsedForCurrentQuestion = false;
}

window.isQuestionCurrentlyActive = isQuestionCurrentlyActive;
window.hideTwoWrongAnswersForCurrentQuestion = hideTwoWrongAnswersForCurrentQuestion;

document.addEventListener("bossIntroFinished", function (event) {
    renderQuestionForBossAndDifficulty(event.detail.boss, "leicht", []);
});

document.addEventListener("bossDefeated", function () {
    clearCurrentQuestion();
});

document.addEventListener("gameOver", function () {
    clearCurrentQuestion();
});

document.addEventListener("allBossesDefeated", function () {
    clearCurrentQuestion();
});