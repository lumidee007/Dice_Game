let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

const player1Dice = document.querySelector("#player1Dice");
const player2Dice = document.querySelector("#player2Dice");

const player1Scoreboard = document.querySelector("#player1Scoreboard");
const player2Scoreboard = document.querySelector("#player2Scoreboard")
const message = document.querySelector("#message");
const Dice = document.querySelector("#dice-1");
const rollBtn = document.querySelector("#rollBtn");
const resetBtn = document.querySelector("#resetBtn");
let path = "images";


function showDisplayButton() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}


rollBtn.addEventListener('click', () => {

    let randNumber = Math.floor(Math.random() * 6) + 1

    if (player1Turn) {

        player1Score += randNumber;
        Dice.style.display = "block";
        Dice.src = path + "/" + "dice-" + randNumber + ".png";
        player1Scoreboard.textContent = player1Score;
        player1Dice.textContent = randNumber;
        player1Dice.classList.remove("active");
        player2Dice.classList.add("active");
        message.textContent = "Next Player: 2";


    } else {
        player2Score += randNumber;
        Dice.style.display = "block";
        Dice.src = path + "/" + "dice-" + randNumber + ".png";
        player2Scoreboard.textContent = player2Score;
        player2Dice.textContent = randNumber;
        player2Score += randNumber;
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Next Player: 1"
    }

    if (player1Score >= 20) {
        message.textContent = "Player 1 won";
        showDisplayButton();

    } else if (player2Score >= 20) {
        message.textContent = "Player 2 won"
        showDisplayButton();
    }

    // switch between players
    if (!player1Turn) {
        player1Turn = true;
    } else {
        player1Turn = false;
    }


})

resetBtn.addEventListener('click', () => reset());

function reset() {
    message.textContent = 'Player 1 Turn';
    player1Scoreboard.textContent = 0;
    player2Scoreboard.textContent = 0;
    player1Score = 0;
    player2Score = 0;
    player1Dice.textContent = "-";
    player2Dice.textContent = '-';
    rollBtn.style.display = "block";
    resetBtn.style.display = "none";
    Dice.style.display = "none";


    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")

    if (player1Score >= 20) {
        player1Dice.classList.add("active");
    } else if (player2Score >= 20) {
        player2Dice.classList.remove("active");
        player1Dice.classList.add("active");
    }
}