let home = document.getElementById("home-score")
let guest = document.getElementById("guest-score")
let error = document.getElementById('error')
let maxScore = 99

function addPoint(homeTeam, score){
    if(homeTeam == 1){
        if((parseInt(home.innerText) + score) <= maxScore){
            home.innerText = parseInt(home.innerText) + score
        }else{
            home.innerText = maxScore
            error.innerText = "Home team reached the max score"
        }
    }else{
        if((parseInt(guest.innerText) + score) <= maxScore){
            guest.innerText = parseInt(guest.innerText) + score
        }else{  
            guest.innerText = maxScore
            error.innerText = "Guest team reached the max score"
        }
    }
}

function reset(){
    home.innerText = 0
    guest.innerText = 0;
}