const gamePageForQuiz = document.querySelector(".game-page");

let currentQuizContainer = null;
let currentRenderedQuestion = null;

function getRandomQuestionByDifficulty(fragenArray, schwierigkeit, usedQuestionIds) {
    const passendeFragen = [];

    for (let i = 0; i < fragenArray.length; i++) {
        const frage = fragenArray[i];

        if (frage.schwierigkeit == schwierigkeit && usedQuestionIds.includes(frage.id) === false) {
            passendeFragen.push(frage);
        }
    }

    if (passendeFragen.length === 0) {
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

    if (!frage) {
        return null;
    }

    currentRenderedQuestion = frage;
    currentQuizContainer = createQuizContainer(frage);
    gamePageForQuiz.appendChild(currentQuizContainer);

    return frage;
}

document.addEventListener("bossIntroFinished", function (event) {
    renderQuestionForBossAndDifficulty(event.detail.boss, "leicht", []);
});