const FileSaver = require('file-saver');

var player1;
var player2;
var epic;
var moveCounter;
var gameProgress = false;

function goteSente() {
    var gosen = Math.random();

    if (gosen > 0.5) {
        player1 = player1 + " (Sente)";
        player2 = player2 + " (Gote)";
        document.getElementById("notitle").innerHTML = player1;
        document.getElementById("yestitle").innerHTML = player2
    } else if (gosen <= 0.5) {
        player2 = player2 + " (Sente)";
        player1 = player1 + " (Gote)";
        document.getElementById("notitle").innerHTML = player1;
        document.getElementById("yestitle").innerHTML = player2
    }
}

function smallBrain() {
    player1 = document.getElementById("input1").value;
    document.getElementById("notitle").innerHTML = player1;
}

function beeegBrain() {
    player2 = document.getElementById("input2").value;
    if (player2!=null) {
        goteSente();
        epic = player1+" vs "+player2;
        document.getElementById("output").innerHTML = epic;
        document.getElementById("p2btn").disabled;
    } else {
        document.getElementById.disabled;
    }
}

function notation() {
    var moveinput = document.getElementById("inputnot").value;
    if (player1 != null && player2 != null) {
        epic = epic + "\n" + moveinput;
        document.getElementById("inputnot").innerHTML = " ";
        document.getElementById("output").innerHTML = epic;
    } else {
        document.getElementById("notbtn").disabled;
    }
}

function generateNotation() {
    
}