const p1 = {
    score: 0,
    button: document.querySelector("#pOneBtn"),
    display: document.querySelector("#p1Score")
}

const p2 = {
    score: 0,
    button: document.querySelector("#pTwoBtn"),
    display: document.querySelector("#p2Score")
}

const reset = document.querySelector("#resetBtn");
const scoreSelector = document.querySelector("#scoreSelector");


let roundScore = 11;
scoreSelector.addEventListener("change", function () {
    roundScore = parseInt(this.value);
    resetScore();
})

function updateScore(player, opponent) {
    player.score += 1;
    player.display.innerText = player.score;
    if (parseInt(player.score) === roundScore) {
        player.button.disabled = true;
        opponent.button.disabled = true;
        GameOver();
    }
}

p1.button.addEventListener("click", function () {
    updateScore(p1, p2);
})


p2.button.addEventListener("click", function () {
    updateScore(p2, p1);
})

function GameOver() {
    if (p1.score > p2.score) {
        p1.display.classList.add("has-text-success");
        p2.display.classList.add("has-text-danger");
    } else {
        p1.display.classList.add("has-text-danger");
        p2.display.classList.add("has-text-success");
    }
}

reset.addEventListener("click", resetScore)

// apejimas
function resetScore() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.innerText = 0;
        p.button.disabled = false;
        p.display.classList.remove("has-text-success", "has-text-danger");
    }
}

// function resetScore() {
//     p1.score = 0;
//     p2.score = 0;
//     p1.display.innerText = 0;
//     p2.display.innerText = 0;
//     p1.button.disabled = false;
//     p2.button.disabled = false;
//     isGameOver = false;
//     p1.display.classList.remove("win", "lose");
//     p2.display.classList.remove("win", "lose")
// }







