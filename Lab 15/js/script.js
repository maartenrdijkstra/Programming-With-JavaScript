/*eslint-env global*/
const MAX_ROLL = 6;

let $ = function (id) {
    return document.getElementById(id);
};

let getRandomNumber = function (max) {
    return Math.floor(Math.random() * max) + 1;
};

let changePlayer = function () {
    if ($("current").innerHTML === $("player1").value) {
        $("current").innerHTML = $("player2").value;
    } else {
        $("current").innerHTML = $("player1").value;
    }
    $("die").value = "0";
    $("total").value = "0";
    $("roll").focus();
};

let newGame = function () {
    $("score1").value = "0";
    $("score2").value = "0";

    if ($("player1").value.trim() === "" || $("player2").value.trim() === "") {
        window.alert("Please enter two player names");
        $("turn").removeAttribute("class");
    } else {
        $("turn").setAttribute("class", "open");
        changePlayer();
    }
};

let rollDice = function () {
    let total, die;
    total = parseInt($("total").value);
    die = getRandomNumber(MAX_ROLL);
    if (die === 1) {
        total = 0;
        changePlayer();
    } else {
        total = total + die;
    }
    $("die").value = die;
    $("total").value = total;
};

let holdTurn = function () {
    let score, total;
    total = parseInt($("total").value);
    if ($("current").innerHTML === $("player1").value) {
        score = $("score1");
    } else {
        score = $("score2");
    }
    score.value = parseInt(score.value) + total;
    if (score.value >= 100) {
        window.alert($("current").innerHTML + " wins!");
        newGame();
    } else {
        changePlayer();
    }
};

window.addEventListener("load", function () {
    $("new_game").addEventListener("click", newGame);
    $("roll").addEventListener("click", rollDice);
    $("hold").addEventListener("click", holdTurn);
});
