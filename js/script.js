const rock = document.querySelectorAll('.rock');
const diglett = document.querySelectorAll('.diglett');
const scoreBoard = document.querySelector('.scoreboard');
const pop = document.querySelector('#pop');
const win = document.querySelector('#win');
const countdown = document.querySelector('#countdown')

let rockBefore;
let finish;
let score;

function randRock(rock) {
    const r = Math.floor(Math.random() * rock.length);
    const rRand = rock[r];
    if (rRand == rockBefore) {
        randRock(rock);
    }
    rockBefore = rRand;
    return rRand;
}

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function showDiglett() {
    const rRand = randRock(rock);
    const tRandom = randomTime(500, 800);
    finish = false;
    rRand.classList.add('muncul');

    setTimeout(() => {
        rRand.classList.remove('muncul');
        if (!finish) {
            showDiglett();
        }
    }, tRandom);
}

function start() {
    countdown.play();
    setTimeout(() => {
        finish = false;
        score = 0;
        scoreBoard.textContent = 0;
        var text = document.getElementById("tombol");
        text.style.display = "none";
        showDiglett();
        setTimeout(() => {
            finish = true;
        }, 15000);
    }, 5000);

}

function whack() {
    score++;
    this.parentNode.classList.remove('muncul');
    pop.play();
    scoreBoard.textContent = score;
    if (score == 10) {
        var text = document.getElementById("tombol");
        if (text.style.display == "block") {
            text.style.display = "none";
        } else {
            text.style.display = "block";
        }
        setTimeout(() => {
            finish = true;
        }, 0);
        // win.play();
        // win.volume = 0.5;
    }
}

diglett.forEach(d => {
    d.addEventListener('click', whack);
});

function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");
}