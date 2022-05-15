let stone = document.getElementById('stone');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let user = document.getElementById('user');
let computer = document.getElementById('computer');
computer.value = 0;
user.value = 0;

let reset = document.getElementById('resetBtn');

let overlay = document.getElementById('overlay');
let createdDiv = document.createElement('div');
createdDiv.classList.add('bg');
let headerText = document.createElement('h1');
headerText.classList.add('bg-header-text');
let text = document.createElement('h2');
text.classList.add('bg-text');

let randomItem = ["stone", "paper", "scissors"];

let tie = "It's a Tie!";
let lose = "Ohh, you lose a point here!";
let win = "Yayy, you win a point here!";

stone.addEventListener('click', () => {
    selectRandomItem();
    if (randomItemGenerated == "stone") {
        displayOverlay();
        text.textContent = tie;
    }
    else if (randomItemGenerated == "paper") {
        displayOverlay();
        text.textContent = lose;
        computerWin();
    }
    else {
        displayOverlay();
        text.textContent = win;
        userWin();
    }
})

paper.addEventListener('click', () => {
    selectRandomItem();
    if (randomItemGenerated == "paper") {
        displayOverlay();
        text.textContent = tie;
    }
    else if (randomItemGenerated == "scissors") {
        displayOverlay();
        text.textContent = lose;
        computerWin();
    }
    else {
        displayOverlay();
        text.textContent = win;
        userWin();
    }
})

scissors.addEventListener('click', () => {
    selectRandomItem();
    if (randomItemGenerated == "scissors") {
        displayOverlay();
        text.textContent = tie;
    }
    else if (randomItemGenerated == "stone") {
        computerWin();
        displayOverlay();
        text.textContent = lose;
    }
    else {
        userWin();
        displayOverlay();
        text.textContent = win;
    }
})

function selectRandomItem() {
    randomItemGenerated = randomItem[Math.floor(Math.random() * randomItem.length)];
    return randomItemGenerated;
}

function userWin() {
    user.value = parseInt(user.value) + 1;
}

function computerWin() {
    computer.value = parseInt(computer.value) + 1;
}

function displayOverlay() {
    createdDiv.appendChild(headerText);
    createdDiv.appendChild(text);
    overlay.appendChild(createdDiv);

    headerText.textContent = `The computer selected ${randomItemGenerated}`;
    overlay.style.display = "block";
    createdDiv.style.display = "block";

    setTimeout(() => {
        overlay.style.display = "none";
        createdDiv.style.display = "none";
    }, 1000);
}

reset.addEventListener('click', () => {
    computer.value = 0;
    user.value = 0;
})