let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

//Home
function homeAddBtn1() {
    homeScore.innerHTML = Number(homeScore.innerHTML) + 1;
}

function homeAddBtn2() {
    homeScore.innerHTML = Number(homeScore.innerHTML) + 2;
}

function homeAddBtn3() {
    homeScore.innerHTML = Number(homeScore.innerHTML) + 3;
}

function homeMinusBtn1() {
    homeScore.innerHTML = Number(homeScore.innerHTML) - 1;
}

function homeMinusBtn2() {
    homeScore.innerHTML = Number(homeScore.innerHTML) - 2;
}
function homeMinusBtn3() {
    homeScore.innerHTML = Number(homeScore.innerHTML) - 3;
}

//guest
function questAddBtn1() {
    guestScore.innerHTML = Number(guestScore.innerHTML) + 1;
}

function questAddBtn2() {
    guestScore.innerHTML = Number(guestScore.innerHTML) + 2;
}

function questAddBtn3() {
    guestScore.innerHTML = Number(guestScore.innerHTML) + 3;
}

function guestMinusBtn1() {
    guestScore.innerHTML = Number(guestScore.innerHTML) - 1;
}

function guestMinusBtn2() {
    guestScore.innerHTML = Number(guestScore.innerHTML) - 2;
}

function guestMinusBtn3() {
    guestScore.innerHTML = Number(guestScore.innerHTML) - 3;
}

//reset 

function reset() {
    homeScore.innerHTML = 0;
    guestScore.innerHTML = 0;
}