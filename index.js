

function addPoint(homeTeam, score){
    let home = document.getElementById("home-score")
    let guest = document.getElementById("guest-score");
    if(homeTeam == 1){
        home.innerText = parseInt(home.innerText) + score
    }else{
        guest.innerText = parseInt(guest.innerText) + score
    }
}
