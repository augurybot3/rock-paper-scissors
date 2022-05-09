const rock = function () {
    document.querySelector('#inputRock').addEventListener('click', this);
    document.getElementById('userPlay').innerHTML = "rock";
    return "rock";
}
const paper = function () {
    document.getElementById('inputPaper').addEventListener('click', this);
    document.getElementById('userPlay').innerHTML = "paper";
    return "paper";
}
const scissors = function () {
    document.querySelector('#inputScissors').addEventListener('click', this);
    document.getElementById('userPlay').innerHTML = "scissors";
    return "scissors";
}
function randomPick() {

    let pick;
    pick = Math.floor(Math.random() * 3) + 1;
    if (pick === 1) {
        pick = "rock";
        document.getElementById('computerPlay').innerText = pick;
        return pick;
    }
    if (pick === 2) {
        pick = `paper`;
        document.getElementById('computerPlay').innerHTML = pick;
        return pick;
    }
    if (pick === 3) {
        pick = "scissors";
        document.getElementById('computerPlay').innerHTML = pick;
        return pick;

    }
    return pick;
}
function showWinner() {
    var youChose = document.getElementById('userPlay').innerHTML;
    var itChose = document.getElementById('computerPlay').innerHTML;
    var youItChose;
    if (youChose == itChose) {
        youItChose = "draw";
        document.getElementById('winner').innerText = youItChose;
        return youItChose;
    }
    if (youChose == "rock" && itChose == 'paper') {
        youItChose = "loser";
        document.getElementById('winner').innerText = youItChose;
        return youItChose;
    }
    if (youChose == "rock" && itChose == 'scissors') {
        youItChose = "win";
        document.getElementById('winner').innerText = youItChose;
        return youItChose;
    }
    if (youChose == "paper" && itChose == 'rock') {
        youItChose = "win";
        document.getElementById('winner').innerText = youItChose;
        return youItChose;
    }
    if (youChose == "paper" && itChose == 'scissors') {
        youItChose = "loser";
        document.getElementById('winner').innerText = youItChose;
        return youItChose;
    }
    if (youChose == "scissors" && itChose == 'rock') {
        youItChose = "loser"
        document.getElementById('winner').innerText = youItChose;
        return youItChose;
    }
    if (youChose == "scissors" && itChose == 'paper') {
        youItChose = "win";
        document.getElementById('winner').innerText = youItChose;
        return youItChose;
    }
    document.getElementById('winner').innerText = youItChose;
    return youItChose;
}
function tally() {
    let tallied = document.getElementById('winner').innerHTML;
    let gameTally = tallied.length;
    let prevCompTally = document.getElementById('computerTW').innerHTML;
    let prevHumTally = document.getElementById('humanTW').innerHTML;
    let ct = prevCompTally;
    let ht = prevHumTally;
    if (gameTally == 3){
        let cgt = Number(ct) + 0 ;
        let hgt = Number(ht) + 1 ;
        document.getElementById('computerTW').innerHTML = cgt;
        document.getElementById('humanTW').innerHTML = hgt;
    }
    if (gameTally == 4){
        let cgt = Number(ct) + 0 ;
        let hgt = Number(ht) + 0 ;
        document.getElementById('computerTW').innerHTML = cgt;
        document.getElementById('humanTW').innerHTML = hgt;
    }
    if (gameTally == 5){
        let cgt = Number(ct) + 1 ;
        let hgt = Number(ht) + 0 ;
        document.getElementById('computerTW').innerHTML = cgt;
        document.getElementById('humanTW').innerHTML = hgt;
    }   
    console.log(gameTally);
    return gameTally;
    
}
document.querySelector('#inputRock').addEventListener('click', randomPick);
document.querySelector('#inputPaper').addEventListener('click', randomPick);
document.querySelector('#inputScissors').addEventListener('click', randomPick);
document.querySelector('#inputRock').addEventListener('click', showWinner);
document.querySelector('#inputPaper').addEventListener('click', showWinner);
document.querySelector('#inputScissors').addEventListener('click', showWinner);
document.querySelector('#inputRock').addEventListener('click', tally);
document.querySelector('#inputPaper').addEventListener('click', tally);
document.querySelector('#inputScissors').addEventListener('click', tally);




