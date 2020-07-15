/*
WHAT DO I NEED?

+four colored boxes

+A random array -> gameMemory

-A way to display the array in instances with increasing items

-+A way to blink the buttons matching the instances used to display the array -> ***Blink function. can be called by clicking the button on user turn, or by showing the sequence of displaySequence

+A record of the guesses the user is making

+The ability to check if the guesses is true or false

-The ability to display if the guess was false

-If the guess is true, he ability to continue checking guesses until the final item in the turn.

+A way to know what turn it is



*/

//BEGIN CODE HERE

//Declare gameMemory, userMemory, turn counter & displaySequence counter
const gameMemory = [];
const userMemory = [];
let turn = 0;
let userClick = 0;

const counterEl = document.querySelector('.counter');

//Declare 20 item random requence
function randomSequence() {
	for (let i = 0; i < 20; i++) {
		gameMemory.push(Math.floor(Math.random() * 4));
	}
}

//Target board and colored squares, declare buttonClick()
const boardEl = document.querySelector('.board');
boardEl.addEventListener('click', buttonClick);
function buttonClick(event) {
	userMemory.push(event.target.id);
	if (event.target.id == 0) {
		yellowBlink();
	}
	if (event.target.id == 1) {
		blueBlink();
	}
	if (event.target.id == 2) {
		greenBlink();
	}
	if (event.target.id == 3) {
		redBlink();
	}
	checkGame();
}

//Target colored boxes individually to be able to set up blinking and run displaySequence

const yellow = document.getElementById('0');
const blue = document.getElementById('1');
const green = document.getElementById('2');
const red = document.getElementById('3');

//Define blinking of colors
function yellowBlink() {
	yellow.style.filter = 'brightness(300%)';
	setTimeout(() => {
		yellow.style.filter = 'none';
	}, 150);
}

function blueBlink() {
	blue.style.filter = 'brightness(300%)';
	setTimeout(() => {
		blue.style.filter = 'none';
	}, 150);
}

function greenBlink() {
	green.style.filter = 'brightness(300%)';
	setTimeout(() => {
		green.style.filter = 'none';
	}, 150);
}

function redBlink() {
	red.style.filter = 'brightness(300%)';
	setTimeout(() => {
		red.style.filter = 'none';
	}, 150);
}

//Target start game button. Reset gameMemory, userMemory & turn counter
const buttonEl = document.querySelector('.button');
buttonEl.addEventListener('click', startGame);
function startGame() {
	gameMemory.length = 0;
	userMemory.length = 0;
	userClick = 0;
	turn = 0;
	counterEl.innerHTML = `Round: ${turn + 1}`;
	randomSequence();
	repeatSequence();
	console.clear();
	console.log(gameMemory);
}

//Declare checkGame function
function checkGame() {
	if (userMemory[userClick] == gameMemory[userClick]) {
		turn++;
		console.log('Nice! keep going...');
		repeatSequence();
	}
	if (userMemory[userClick] != gameMemory[userClick]) {
		alert('Game over!');
	}
	userClick++;
	if (userClick == 20) {
		alert('You Won!');
		turn++;
	}
}

//Repeat sequence for user

function blink(value) {
	if (value == 0) {
		yellowBlink();
	} else if (value == 1) {
		blueBlink();
	} else if (value == 2) {
		greenBlink();
	} else if (value == 3) {
		redBlink();
	}
	return;
}

function repeatSequence() {
	if (turn == 0) {
		blink(gameMemory[0]);
	} else {
		let i = 0;
		while (i < turn) {
			setTimeout(() => {
				blink(gameMemory[i]);
			}, 250);
			i++;
		}
	}
}
