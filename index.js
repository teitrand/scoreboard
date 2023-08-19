let home = document.getElementById("home-score")
let guest = document.getElementById("guest-score")
let error = document.getElementById('error')
let maxScore = 99

function updateScore(element, score, teamName) {
    if ((parseInt(element.innerText) + score) <= maxScore) {
        element.innerText = parseInt(element.innerText) + score;
    } else {
        element.innerText = maxScore;
        error.innerText = teamName + " team reached the max score.";
    }
}

function addPoint(homeTeam, score) {
    if (homeTeam == true) {
        updateScore(home, score, "Home");
    } else {
        updateScore(guest, score, "Guest");
    }
}

function reset(){
    home.innerText = 0
    guest.innerText = 0
    error.innerText = null
}
