let dino = document.getElementById("dinobhai");
let mycactus = document.getElementById("mycactus");
let myresult = document.getElementById("myresult");
let dinohide = document.getElementById("dinohide");
let score = document.getElementById("score");
var count = 0;

function jump() {
    dino.style.top = "90px";

    setTimeout(() => {
        dino.style.top = "153px";
    }, 400);
    count++;
}

window.addEventListener("keydown", jump);


setInterval(function gameover() {
    let cactusleft = parseInt(window.getComputedStyle(mycactus).getPropertyValue("left"));

    let dinotop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

    if ((dinotop > 111) && (cactusleft < 43)) {
        myresult.style.display = "block";
        dinohide.style.display = "none";
        score.innerHTML = `Score : ${count}`;
    }
}, 10);


// top 111
// left 43