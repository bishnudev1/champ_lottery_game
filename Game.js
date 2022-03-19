console.log('Lottery Game Made With HTML, CSS & Javascript')

let winSound = new Audio('win.wav');
let lostSound = new Audio('lost.wav');
let turnSound = new Audio('turn.wav');

let rand1 = Math.floor((Math.random() * 35) + 1);
let rand2 = Math.floor((Math.random() * 30) + 1);
let rand3 = Math.floor((Math.random() * 30) + 1);
let rand4 = Math.floor((Math.random() * 28) + 1);
let rand5 = Math.floor((Math.random() * 35) + 1);

let showresult = (rand1 + rand2 + rand3 + rand4 + rand5);

const submitname = document.getElementById('submitname');
const playgame = document.getElementById('playgame');
let welcomeUser = document.getElementById('welcomeUser');
const newgame = document.getElementById('newgame');
let subContainer = document.getElementById('subContainer');
let mainSubContainer = document.getElementById('mainSubContainer');
const checkResult = document.getElementById('checkResult');
subContainer.style.display = "none";
mainSubContainer.style.display = "block";
checkResult.style.display = "none";
let j = 6;
let k = 0;

submitname.addEventListener('click', (e) => {
    let inputval = document.getElementById('inputval').value;
    console.log(inputval);
    if (inputval !== null && inputval !== '') {
        mainSubContainer.style.display = "none";
        subContainer.style.display = "block";
        welcomeUser.innerHTML = `Welcome ${inputval} to Champ Lottery Game`;
    }
    else{
        alert('Enter your name to play the game !')
    }
});

newgame.addEventListener('click', () => {
    window.location.reload();
});

const gameResult = (showresult) => {
    let result = document.getElementById('result');
    if (showresult >= 100) {
        winSound.play();
        result.innerHTML = `Congrats you earned total ${showresult} points & won`;
    }
    else {
        lostSound.play();
        result.innerHTML = `You only made ${showresult} points & lost`;
    }
}

checkResult.addEventListener('click', () => {
    gameResult(showresult);
});

playgame.addEventListener('click', () => {
    turnSound.play();
    j--;
    k++;
    let turns = document.getElementById('turns');
    if (j >= 1) {
        turns.innerHTML = `You Have ${j - 1} Turns Left`;
    }
    let randnum = document.getElementById('randnum');
    if (k < 6) {
        if (j === 5) {
            randnum.innerHTML = `You Have Got ${rand1}`;
        }
        if (j === 4) {
            randnum.innerHTML = `You Have Got ${rand2}`;
        }
        if (j === 3) {
            randnum.innerHTML = `You Have Got ${rand3}`;
        }
        if (j === 2) {
            randnum.innerHTML = `You Have Got ${rand4}`;
        }
        if (j === 1) {
            randnum.innerHTML = `You Have Got ${rand5}`;
        }
    }
    if(k===5){
    checkResult.style.display = "block";
    }
});