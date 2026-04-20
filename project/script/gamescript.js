const player = document.getElementById("player");

const runFrames = [
    "../media/sprite/1run.png",
    "../media/sprite/2run.png",
    "../media/sprite/3run.png",
    "../media/sprite/4run.png",
    "../media/sprite/5run.png",
    "../media/sprite/6run.png",
    "../media/sprite/7run.png",
    "../media/sprite/8run.png",
    "../media/sprite/9run.png",
    "../media/sprite/10run.png"
];

let playerX = 0;
let playerY = 0;

let currentFrameIndex = 0;
let isMoving = false;

const pressedKeys = {
    w: false,
    a: false,
    s: false,
    d: false
};

const moveSpeed = 0.22;
const animationSpeed = 90;

function getRootFontSize() {
    return parseFloat(getComputedStyle(document.documentElement).fontSize);
}

function getPlayerWidthInRem() {
    return player.offsetWidth / getRootFontSize();
}

function getPlayerHeightInRem() {
    return player.offsetHeight / getRootFontSize();
}

function updatePlayerPosition() {
    player.style.left = playerX + "rem";
    player.style.top = playerY + "rem";
}

function setStartPosition() {
    const rootFontSize = getRootFontSize();
    const windowWidthInRem = window.innerWidth / rootFontSize;
    const windowHeightInRem = window.innerHeight / rootFontSize;

    const playerWidthInRem = getPlayerWidthInRem();
    const playerHeightInRem = getPlayerHeightInRem();

    playerX = (windowWidthInRem / 2) - (playerWidthInRem / 2);
    playerY = windowHeightInRem - playerHeightInRem;

    updatePlayerPosition();
}

function updatePlayerDirection() {
    if (pressedKeys.a) {
        player.style.transform = "scaleX(-1)";
    }

    if (pressedKeys.d) {
        player.style.transform = "scaleX(1)";
    }
}

function updateMovementState() {
    if (pressedKeys.w || pressedKeys.a || pressedKeys.s || pressedKeys.d) {
        isMoving = true;
    } else {
        isMoving = false;
        currentFrameIndex = 0;
        player.src = runFrames[0];
    }
}

function movePlayer() {
    if (pressedKeys.w) {
        playerY -= moveSpeed;
    }

    if (pressedKeys.s) {
        playerY += moveSpeed;
    }

    if (pressedKeys.a) {
        playerX -= moveSpeed;
    }

    if (pressedKeys.d) {
        playerX += moveSpeed;
    }

    const rootFontSize = getRootFontSize();
    const windowWidthInRem = window.innerWidth / rootFontSize;
    const windowHeightInRem = window.innerHeight / rootFontSize;

    const playerWidthInRem = getPlayerWidthInRem();
    const playerHeightInRem = getPlayerHeightInRem();

    const maxX = windowWidthInRem - playerWidthInRem;
    const maxY = windowHeightInRem - playerHeightInRem;

    if (playerX < 0) {
        playerX = 0;
    }

    if (playerX > maxX) {
        playerX = maxX;
    }

    if (playerY < 0) {
        playerY = 0;
    }

    if (playerY > maxY) {
        playerY = maxY;
    }

    updatePlayerPosition();
    updatePlayerDirection();
}

function animatePlayer() {
    if (isMoving) {
        currentFrameIndex++;

        if (currentFrameIndex >= runFrames.length) {
            currentFrameIndex = 0;
        }

        player.src = runFrames[currentFrameIndex];
    }
}

function gameLoop() {
    updateMovementState();
    movePlayer();
    requestAnimationFrame(gameLoop);
}

document.addEventListener("keydown", function (event) {
    const key = event.key.toLowerCase();

    if (key == "w") {
        pressedKeys.w = true;
    }

    if (key == "a") {
        pressedKeys.a = true;
    }

    if (key == "s") {
        pressedKeys.s = true;
    }

    if (key == "d") {
        pressedKeys.d = true;
    }
});

document.addEventListener("keyup", function (event) {
    const key = event.key.toLowerCase();

    if (key == "w") {
        pressedKeys.w = false;
    }

    if (key == "a") {
        pressedKeys.a = false;
    }

    if (key == "s") {
        pressedKeys.s = false;
    }

    if (key == "d") {
        pressedKeys.d = false;
    }
});

window.addEventListener("load", function () {
    setStartPosition();
});

window.addEventListener("resize", function () {
    setStartPosition();
});

setInterval(animatePlayer, animationSpeed);
requestAnimationFrame(gameLoop);