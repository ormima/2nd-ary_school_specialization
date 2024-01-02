alert("You have to be at least 18 years old to see this content!");

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const res = document.getElementById("result");

rock.addEventListener("click", () => {
    res.innerText = " ";
    let a = Math.round(Math.random()*10);
    if(a <= 3){
        res.innerText = "My powerfull AI script also picked rock so it`s a draw :|";
    } else if(a <= 6){
        res.innerText = "My powerfull AI script picked paper so you lose this time :c";
    } else {
        res.innerText = "My powerfull AI script picked scissors so you win (*o*)";
    };
});
paper.addEventListener("click", () => {
    res.innerText = " ";
    let a = Math.round(Math.random()*10);
    if(a <= 3){
        res.innerText = "My powerfull AI script picked rock so you win (*o*)";
    } else if(a <= 6){
        res.innerText = "My powerfull AI script also picked paper so it`s a draw :|";
    } else {
        res.innerText = "My powerfull AI script picked scissors so you lose this time :c";
    };
});
scissors.addEventListener("click", () => {
    res.innerText = " ";
    let a = Math.round(Math.random()*10);
    if(a <= 3){
        res.innerText = "My powerfull AI script picked rock so you lose this time :c";
    } else if(a <= 6){
        res.innerText = "My powerfull AI script picked paper so you win (*o*)";
    } else {
        res.innerText = "My powerfull AI script also picked scissors so it`s a draw :|";
    };
});

