const startButton = document.querySelector("#startButton");
const inputPlayerOne = document.querySelector("#inputPlayerOne");
const inputPlayerTwo = document.querySelector("#inputPlayerTwo");
const warningMessage = document.querySelector("#warningMessage");
const statusMessage = document.querySelector("#statusMessage");
const kickButton = document.createElement('button');
const max = 10;
const min = 1;
let turnNumber = 1;
let scorePlayerOne = 0;
let scorePlayerTwo = 0;

function startGame() {
    if (inputPlayerOne.value === inputPlayerTwo.value) {
        warningMessage.textContent = 'Warning, names are the same';
    }
    startButton.style.visibility = 'hidden';
    createKickButton();
}

function validateInputs() {
    if (inputPlayerOne.value != "" && inputPlayerTwo.value != "") {
        startButton.disabled = false;
    }
}

function createKickButton() {

    kickButton.textContent = 'Kick Penalty';
    kickButton.addEventListener('click', registerPenal);
    document.body.appendChild(kickButton);
}

function registerPenal() {
    turnMessage.textContent = `Turn number: ${turnNumber}`;
    if (turnNumber >= 5) {
        kickButton.disabled = true;
        statusMessage.textContent = "game over";
    } else {
        let golKeeperPoint = Math.floor(Math.random() * max) + min;
        let penaltyKickerPoint = Math.floor(Math.random() * max) + min;
        if (golKeeperPoint < penaltyKickerPoint) {
            statusMessage.textContent = "goal";
            turnNumber += 1;
        } else {
            statusMessage.textContent = "failed penalty";
            turnNumber += 1;
        }
    }
}

startButton.addEventListener('click', startGame);
inputPlayerOne.addEventListener('keypress', validateInputs);
inputPlayerTwo.addEventListener('keypress', validateInputs);
