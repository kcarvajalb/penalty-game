// window.addEventListener('load', function () {
(function () {
    const startButton = document.querySelector("#startButton");
    const inputPlayerOne = document.querySelector("#inputPlayerOne");
    const inputPlayerTwo = document.querySelector("#inputPlayerTwo");
    const warningMessage = document.querySelector("#warningMessage");
    const statusMessage = document.querySelector("#statusMessage");
    const turnMessage = document.querySelector("#turnMessage");
    // const playercontainer = document.querySelector(".player-container");
    // const players = document.querySelectorAll(".player-container input");
    const kickButton = document.createElement('button');
    const max = 10;
    const min = 1;
    let playerOneName = '';
    let playerTwoName = '';
    let turnNumberPlayerOne = 1;
    let turnNumberPlayerTwo = 1;
    let scorePlayerOne = 0;
    let scorePlayerTwo = 0;
    let isPlaying = false;

    scoreMessagePlayerTwo.textContent = `Score Player Two: ${scorePlayerTwo}`;
    scoreMessagePlayerOne.textContent = `Score Player One: ${scorePlayerOne}`;

    function startGame() {
        startButton.style.visibility = 'hidden';
        inputPlayerTwo.disabled = true;
        inputPlayerOne.disabled = true;
        playerOneName = inputPlayerOne.value;
        playerTwoName = inputPlayerTwo.value;
        createKickButton();
    }

    function validateInputs() {
        if (inputPlayerOne.value == inputPlayerTwo.value) {
            warningMessage.textContent = 'Warning, names are the same';
            startButton.disabled = true;
        } else {
            if (inputPlayerOne.value != "" && inputPlayerTwo.value != "") {
                startButton.disabled = false;
                warningMessage.textContent = '';
            } else {
                startButton.disabled = true;
                warningMessage.textContent = '';
            }
        }
    }

    function createKickButton() {
        kickButton.textContent = 'Kick Penalty';
        kickButton.addEventListener('click', prepareTurn);
        document.body.appendChild(kickButton);
    }

    function prepareTurn() {
        setTimeout(function () {
            registerPenalPlayerOne();
        }, 1000);

        setTimeout(function () {
            registerPenalPlayerTwo();
        }, 5000);
    }

    function registerPenalPlayerOne() {
        turnMessage.textContent = `Turn number: ${turnNumberPlayerOne} for player: ${playerOneName}`;
        if (turnNumberPlayerOne > 5) {
            kickButton.disabled = true;
            statusMessage.textContent = "game over";
        } else {
            let golKeeperPoint = Math.floor(Math.random() * max) + min;
            let penaltyKickerPoint = Math.floor(Math.random() * max) + min;
            if (golKeeperPoint < penaltyKickerPoint) {
                statusMessage.textContent = "goal";
                turnNumberPlayerOne += 1;
                scorePlayerOne += 1;
            } else {
                statusMessage.textContent = "failed penalty";
                turnNumberPlayerOne += 1;
            }
        }
        scoreMessagePlayerOne.textContent = `Score Player One: ${scorePlayerOne}`;
    }

    function registerPenalPlayerTwo() {
        turnMessage.textContent = `Turn number: ${turnNumberPlayerTwo} for player: ${playerTwoName}`;
        if (turnNumberPlayerTwo > 5) {
            kickButton.disabled = true;
            statusMessage.textContent = "game over";
        } else {
            let golKeeperPoint = Math.floor(Math.random() * max) + min;
            let penaltyKickerPoint = Math.floor(Math.random() * max) + min;
            if (golKeeperPoint < penaltyKickerPoint) {
                statusMessage.textContent = "goal";
                turnNumberPlayerTwo += 1;
                scorePlayerTwo += 1;
            } else {
                statusMessage.textContent = "failed penalty";
                turnNumberPlayerTwo += 1;

            }
        }
        scoreMessagePlayerTwo.textContent = `Score Player Two: ${scorePlayerTwo}`;
    }

    startButton.addEventListener('click', startGame);
    inputPlayerOne.addEventListener('keyup', validateInputs);
    inputPlayerTwo.addEventListener('keyup', validateInputs);
})();

