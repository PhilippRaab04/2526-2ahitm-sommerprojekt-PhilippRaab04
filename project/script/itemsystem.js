const itemDefinitions = {
    fiftyFifty: {
        name: "50:50 Amulet",
        description: "Removes two wrong answers from the current question.",
        image: "../media/items/5050amulett.png"
    },
    extraLife: {
        name: "Extra Life",
        description: "Gives you one extra heart.",
        image: "../media/items/extralife.png"
    },
    secondChance: {
        name: "Question Switch",
        description: "Swaps the current question for another one of the same difficulty.",
        image: "../media/items/secondchance.png"
    }
};

window.itemInventory = {
    fiftyFifty: 0,
    extraLife: 0,
    secondChance: 0
};

let pendingRewardsQueue = [];
let hardQuestionsAnsweredCount = 0;
let lastRewardItemKey = null;

let itemsPopupOverlay = null;
let rewardsPopupOverlay = null;
let itemsPopupList = null;
let rewardsPopupContent = null;

let itemsCollisionActive = false;
let rewardsCollisionActive = false;

function createPopupButton(text, className) {
    const button = document.createElement("button");
    button.type = "button";
    button.classList.add(className);
    button.textContent = text;
    return button;
}

function createItemSystemUI() {
    itemsPopupOverlay = document.createElement("div");
    itemsPopupOverlay.classList.add("item-popup-overlay", "hidden");

    const itemsWindow = document.createElement("section");
    itemsWindow.classList.add("item-popup-window");

    const itemsCloseButton = createPopupButton("X", "item-popup-close");
    const itemsTitle = document.createElement("h2");
    itemsTitle.classList.add("item-popup-title");
    itemsTitle.textContent = "Items";

    itemsPopupList = document.createElement("div");
    itemsPopupList.classList.add("item-popup-grid");

    itemsWindow.appendChild(itemsCloseButton);
    itemsWindow.appendChild(itemsTitle);
    itemsWindow.appendChild(itemsPopupList);
    itemsPopupOverlay.appendChild(itemsWindow);
    document.body.appendChild(itemsPopupOverlay);

    rewardsPopupOverlay = document.createElement("div");
    rewardsPopupOverlay.classList.add("reward-popup-overlay", "hidden");

    const rewardsWindow = document.createElement("section");
    rewardsWindow.classList.add("reward-popup-window");

    const rewardsCloseButton = createPopupButton("X", "reward-popup-close");
    const rewardsTitle = document.createElement("h2");
    rewardsTitle.classList.add("reward-popup-title");
    rewardsTitle.textContent = "Rewards";

    rewardsPopupContent = document.createElement("div");
    rewardsPopupContent.classList.add("reward-popup-content");

    rewardsWindow.appendChild(rewardsCloseButton);
    rewardsWindow.appendChild(rewardsTitle);
    rewardsWindow.appendChild(rewardsPopupContent);
    rewardsPopupOverlay.appendChild(rewardsWindow);
    document.body.appendChild(rewardsPopupOverlay);

    itemsCloseButton.addEventListener("click", function () {
        closeItemsPopup();
    });

    rewardsCloseButton.addEventListener("click", function () {
        closeRewardsPopup();
    });

    itemsPopupOverlay.addEventListener("click", function (event) {
        if (event.target == itemsPopupOverlay) {
            closeItemsPopup();
        }
    });

    rewardsPopupOverlay.addEventListener("click", function (event) {
        if (event.target == rewardsPopupOverlay) {
            closeRewardsPopup();
        }
    });
}

function getTotalItemCount() {
    return window.itemInventory.fiftyFifty +
        window.itemInventory.extraLife +
        window.itemInventory.secondChance;
}

function updateInteractionBoxLabels() {
    const itemsBox = document.querySelector(".interaction-box-items");
    const rewardsBox = document.querySelector(".interaction-box-rewards");

    if (itemsBox) {
        const totalItems = getTotalItemCount();
        itemsBox.textContent = totalItems > 0 ? "Items (" + totalItems + ")" : "Items";
    }

    if (rewardsBox) {
        rewardsBox.textContent = pendingRewardsQueue.length > 0
            ? "Rewards (" + pendingRewardsQueue.length + ")"
            : "Rewards";

        if (pendingRewardsQueue.length > 0) {
            rewardsBox.classList.add("interaction-box-rewards-ready");
        } else {
            rewardsBox.classList.remove("interaction-box-rewards-ready");
        }
    }
}

function renderItemsPopup() {
    itemsPopupList.innerHTML = "";

    const itemKeys = ["fiftyFifty", "extraLife", "secondChance"];

    for (let i = 0; i < itemKeys.length; i++) {
        const itemKey = itemKeys[i];
        const itemData = itemDefinitions[itemKey];
        const itemCount = window.itemInventory[itemKey];

        const itemCard = document.createElement("div");
        itemCard.classList.add("item-card");

        const itemImage = document.createElement("img");
        itemImage.classList.add("item-card-image");
        itemImage.src = itemData.image;
        itemImage.alt = itemData.name;

        const itemName = document.createElement("h3");
        itemName.classList.add("item-card-title");
        itemName.textContent = itemData.name;

        const itemDescription = document.createElement("p");
        itemDescription.classList.add("item-card-description");
        itemDescription.textContent = itemData.description;

        const itemCountText = document.createElement("div");
        itemCountText.classList.add("item-card-count");
        itemCountText.textContent = "Amount: " + itemCount;

        const useButton = createPopupButton("Use", "item-card-button");
        useButton.dataset.itemKey = itemKey;

        if (itemCount <= 0) {
            useButton.disabled = true;
        }

        useButton.addEventListener("click", function () {
            useInventoryItem(itemKey);
        });

        itemCard.appendChild(itemImage);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemDescription);
        itemCard.appendChild(itemCountText);
        itemCard.appendChild(useButton);

        itemsPopupList.appendChild(itemCard);
    }
}

function renderRewardsPopup() {
    rewardsPopupContent.innerHTML = "";

    if (pendingRewardsQueue.length == 0) {
        const emptyText = document.createElement("p");
        emptyText.classList.add("reward-empty-text");
        emptyText.textContent = "No reward is waiting for you right now.";
        rewardsPopupContent.appendChild(emptyText);
        return;
    }

    const nextRewardKey = pendingRewardsQueue[0];
    const rewardData = itemDefinitions[nextRewardKey];

    const rewardPreview = document.createElement("div");
    rewardPreview.classList.add("reward-preview");

    const rewardImage = document.createElement("img");
    rewardImage.classList.add("reward-preview-image");
    rewardImage.src = rewardData.image;
    rewardImage.alt = rewardData.name;

    const rewardName = document.createElement("h3");
    rewardName.classList.add("reward-preview-title");
    rewardName.textContent = rewardData.name;

    const rewardDescription = document.createElement("p");
    rewardDescription.classList.add("reward-preview-description");
    rewardDescription.textContent = rewardData.description;

    const claimButton = createPopupButton("Claim", "reward-claim-button");
    claimButton.addEventListener("click", function () {
        claimNextReward();
    });

    rewardPreview.appendChild(rewardImage);
    rewardPreview.appendChild(rewardName);
    rewardPreview.appendChild(rewardDescription);
    rewardPreview.appendChild(claimButton);

    rewardsPopupContent.appendChild(rewardPreview);
}

function openItemsPopup() {
    renderItemsPopup();
    itemsPopupOverlay.classList.remove("hidden");
}

function closeItemsPopup() {
    itemsPopupOverlay.classList.add("hidden");
}

function openRewardsPopup() {
    renderRewardsPopup();
    rewardsPopupOverlay.classList.remove("hidden");
}

function closeRewardsPopup() {
    rewardsPopupOverlay.classList.add("hidden");
}

function getRandomRewardItemKey() {
    const rewardKeys = ["fiftyFifty", "extraLife", "secondChance"];

    let possibleRewardKeys = rewardKeys;

    if (lastRewardItemKey != null) {
        possibleRewardKeys = rewardKeys.filter(function (itemKey) {
            return itemKey != lastRewardItemKey;
        });
    }

    const randomIndex = Math.floor(Math.random() * possibleRewardKeys.length);
    const selectedRewardKey = possibleRewardKeys[randomIndex];

    lastRewardItemKey = selectedRewardKey;
    return selectedRewardKey;
}

function claimNextReward() {
    if (pendingRewardsQueue.length == 0) {
        return;
    }

    const claimedRewardKey = pendingRewardsQueue.shift();
    window.itemInventory[claimedRewardKey]++;

    updateInteractionBoxLabels();
    renderRewardsPopup();
    renderItemsPopup();

    if (pendingRewardsQueue.length == 0) {
        closeRewardsPopup();
    }
}

function useInventoryItem(itemKey) {
    if (window.itemInventory[itemKey] <= 0) {
        return;
    }

    if (itemKey === "fiftyFifty") {
        if (!window.isQuestionCurrentlyActive()) {
            alert("You can only use this item while a question is active.");
            return;
        }

        const success = window.hideTwoWrongAnswersForCurrentQuestion();

        if (!success) {
            alert("50:50 cannot be used right now.");
            return;
        }
    }

    if (itemKey == "extraLife") {
        if (window.currentHearts >= 3) {
            alert("You already have full hearts.");
            return;
        }

        window.currentHearts++;
        updateHudHearts();
        sessionStorage.setItem("quizDungeonCurrentHearts", String(window.currentHearts));
    }

    if (itemKey == "secondChance") {
        if (!window.isQuestionCurrentlyActive()) {
            alert("You can only use this item while a question is active.");
            return;
        }

        const success = window.rerollCurrentQuestionForCurrentBoss();

        if (!success) {
            alert("No other question of this difficulty is available.");
            return;
        }
    }

    window.itemInventory[itemKey]--;
    updateInteractionBoxLabels();
    renderItemsPopup();
}

function isPlayerCollidingWithElement(targetElement) {
    const playerElement = document.getElementById("player");

    if (!playerElement || !targetElement) {
        return false;
    }

    const playerRect = playerElement.getBoundingClientRect();
    const targetRect = targetElement.getBoundingClientRect();

    const isColliding =
        playerRect.left < targetRect.right &&
        playerRect.right > targetRect.left &&
        playerRect.top < targetRect.bottom &&
        playerRect.bottom > targetRect.top;

    return isColliding;
}

function itemSystemCollisionLoop() {
    const itemsBox = document.querySelector(".interaction-box-items");
    const rewardsBox = document.querySelector(".interaction-box-rewards");

    const questionActive = window.isQuestionCurrentlyActive();

    if (questionActive && itemsBox) {
        const itemsCollisionNow = isPlayerCollidingWithElement(itemsBox);

        if (itemsCollisionNow && itemsCollisionActive == false) {
            itemsCollisionActive = true;
            openItemsPopup();
        }

        if (itemsCollisionNow == false) {
            itemsCollisionActive = false;
        }
    } else {
        itemsCollisionActive = false;
        closeItemsPopup();
    }

    if (rewardsBox && pendingRewardsQueue.length > 0) {
        const rewardsCollisionNow = isPlayerCollidingWithElement(rewardsBox);

        if (rewardsCollisionNow && rewardsCollisionActive == false) {
            rewardsCollisionActive = true;
            openRewardsPopup();
        }

        if (rewardsCollisionNow == false) {
            rewardsCollisionActive = false;
        }
    } else {
        rewardsCollisionActive = false;
        closeRewardsPopup();
    }

    requestAnimationFrame(itemSystemCollisionLoop);
}

document.addEventListener("questionAnswered", function (event) {
    if (event.detail.difficulty == "schwer") {
        hardQuestionsAnsweredCount++;

        if (hardQuestionsAnsweredCount % 2 == 0) {
            pendingRewardsQueue.push(getRandomRewardItemKey());
            updateInteractionBoxLabels();
        }
    }
});

document.addEventListener("quizRunStarted", function () {
    window.itemInventory.fiftyFifty = 1;
    window.itemInventory.extraLife = 0;
    window.itemInventory.secondChance = 0;

    pendingRewardsQueue = [];
    hardQuestionsAnsweredCount = 0;
    lastRewardItemKey = null;

    updateInteractionBoxLabels();
    closeItemsPopup();
    closeRewardsPopup();
});

document.addEventListener("bossDefeated", function () {
    closeItemsPopup();
    closeRewardsPopup();
});

document.addEventListener("gameOver", function () {
    closeItemsPopup();
    closeRewardsPopup();
});

document.addEventListener("allBossesDefeated", function () {
    closeItemsPopup();
    closeRewardsPopup();
});

createItemSystemUI();
updateInteractionBoxLabels();
requestAnimationFrame(itemSystemCollisionLoop);