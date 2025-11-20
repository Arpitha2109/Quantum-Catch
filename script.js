const startBtn = document.getElementById("startBtn");
const gameArea = document.getElementById("gameArea");
const box = document.getElementById("box");
const scoreDisplay = document.getElementById("score");

let score = 0;

startBtn.addEventListener("click", () => {
    startBtn.style.opacity = "0";
    setTimeout(() => {
        gameArea.classList.remove("hidden");
        box.style.display = "block";
        moveBox();
    }, 500);
});

box.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
    moveBox();
});

function moveBox() {
    const areaWidth = gameArea.clientWidth - 40;
    const areaHeight = gameArea.clientHeight - 40;

    const x = Math.random() * areaWidth;
    const y = Math.random() * areaHeight;

    box.style.left = x + "px";
    box.style.top = y + "px";
}
