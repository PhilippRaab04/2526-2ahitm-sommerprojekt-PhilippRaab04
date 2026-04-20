const gamePage = document.querySelector(".game-page");

function createInteractionBox(text, className) {
    const box = document.createElement("div");
    box.classList.add("interaction-box");
    box.classList.add(className);
    box.textContent = text;
    return box;
}

const itemsBox = createInteractionBox("Items", "interaction-box-items");
const battleBox = createInteractionBox("Start Quiz Battle", "interaction-box-battle");
const rewardsBox = createInteractionBox("Rewards", "interaction-box-rewards");

gamePage.appendChild(itemsBox);
gamePage.appendChild(battleBox);
gamePage.appendChild(rewardsBox);