(function () {
    // const startButton = document.querySelector("#startButton");
    // const inputPlayerOne = document.querySelector("#inputPlayerOne");
    // const inputPlayerTwo = document.querySelector("#inputPlayerTwo");
    // const warningMessage = document.querySelector("#warningMessage");
    // const statusMessage = document.querySelector("#statusMessage");
    // const turnMessage = document.querySelector("#turnMessage");
    const playercontainer = document.querySelector(".player-container");
    const kickButton = document.createElement('button');
    const max = 10;
    const min = 1;
    let playerOneName = '';
    let playerTwoName = '';
    let turnNumberPlayerOne = 1;
    let turnNumberPlayerTwo = 1;
    let scorePlayerOne = 0;
    let scorePlayerTwo = 0;
    let sw = 0;

    function startGame() {
        startButton.style.visibility = 'hidden';
        inputPlayerTwo.disabled = true;
        inputPlayerOne.disabled = true;
        playerOneName = inputPlayerOne.value;
        playerTwoName = inputPlayerTwo.value;
        scoreMessagePlayerTwo.textContent = `Score Player Two: ${scorePlayerTwo}`;
        scoreMessagePlayerOne.textContent = `Score Player One: ${scorePlayerOne}`;
        createKickButton();
    }

    function validateInputs() {
        if (inputPlayerOne.value == inputPlayerTwo.value) {
            setWarningMessage('Warning, names can not be the same, please change it to start the game', 'red');
            startButton.disabled = true;
        } else {
            if (inputPlayerOne.value != '' && inputPlayerTwo.value != '') {
                startButton.disabled = false;
                setWarningMessage('', '');
            } else {
                startButton.disabled = true;
                setWarningMessage('', '');
            }
        }
    }

    function setWarningMessage(p_message, p_color) {
        warningMessage.textContent = p_message;
        warningMessage.style.backgroundColor = p_color;
    }

    function createKickButton() {
        kickButton.textContent = 'Kick Penalty';
        kickButton.addEventListener('click', prepareTurn);
        playercontainer.appendChild(kickButton);
    }

    function prepareTurn() {
        // setTimeout(function () {
        //     kickButton.textContent = 'Playing..................';
        //     registerPenalPlayerOne();
        // }, 1000);

        // setTimeout(function () {
        //     registerPenalPlayerTwo();
        //     kickButton.textContent = 'Kick Penalty';
        // }, 5000);

        if (sw == 0) {
            registerPenalPlayerOne();
            sw = 1;
        } else {
            registerPenalPlayerTwo();
            sw = 0;
        }
    }

    function checkScore() {
        turnMessage.style.color = "green";
        if (scorePlayerOne > scorePlayerTwo) {
            turnMessage.textContent = "Player One Wins!";
        } else if (scorePlayerOne < scorePlayerTwo) {
            turnMessage.textContent = "Player Two Wins!";
        } else {
            turnMessage.textContent = "Empate!";
            kickButton.disabled = false;
            turnNumberPlayerOne = 1;
            turnNumberPlayerTwo = 1;
        }
    }

    function setStatusMessage(p_message, p_color) {
        statusMessage.textContent = p_message;
        statusMessage.style.backgroundColor = p_color;
    }

    function registerPenalPlayerOne() {
        turnMessage.textContent = `Player: ${playerOneName} - Turn: ${turnNumberPlayerOne} `;
        if (turnNumberPlayerOne > 5) {
            kickButton.disabled = true;
            setStatusMessage("Game Over!", "gray");
            checkScore();
        } else {
            let golKeeperPoint = Math.floor(Math.random() * max) + min;
            let penaltyKickerPoint = Math.floor(Math.random() * max) + min;
            if (golKeeperPoint < penaltyKickerPoint) {
                setStatusMessage("GOAL!!!!!!", "green");
                turnNumberPlayerOne += 1;
                scorePlayerOne += 1;
            } else {
                setStatusMessage("Failed Penalty  :(", "red");
                turnNumberPlayerOne += 1;
            }
        }
        scoreMessagePlayerOne.textContent = `Score Player One: ${scorePlayerOne}`;
    }

    function registerPenalPlayerTwo() {
        turnMessage.textContent = `Player: ${playerTwoName} - Turn: ${turnNumberPlayerTwo}`;
        if (turnNumberPlayerTwo > 5) {
            kickButton.disabled = true;
            setStatusMessage("Game Over!", "gray");
            checkScore();
        } else {
            let golKeeperPoint = Math.floor(Math.random() * max) + min;
            let penaltyKickerPoint = Math.floor(Math.random() * max) + min;
            if (golKeeperPoint < penaltyKickerPoint) {
                setStatusMessage("GOAL!!!!!!", "green");
                turnNumberPlayerTwo += 1;
                scorePlayerTwo += 1;
            } else {
                setStatusMessage("Failed Penalty  :(", "red");
                turnNumberPlayerTwo += 1;
            }
        }
        scoreMessagePlayerTwo.textContent = `Score Player Two: ${scorePlayerTwo}`;
    }

    startButton.addEventListener('click', startGame);
    inputPlayerOne.addEventListener('keyup', validateInputs);
    inputPlayerTwo.addEventListener('keyup', validateInputs);
})();

