/*
WHAT DO I NEED?
+four colored boxes
+A random array -> gameMemory
-A way to display the array in instances with increasing items
-+A way to blink the buttons matching the instances used to display the array -> ***Blink function. can be called by clicking the button on user turn, or by showing the sequence of displaySequence
+A record of the guesses the user is making
+The ability to check if the guesses are true or false
+The ability to display if the guess was false
-If the guess is true, he ability to continue checking guesses until the final item in the turn.
+A way to know what turn it is
*/

//BEGIN CODE HERE

//Declare gameMemory, userMemory, turn counter & displaySequence counter
//Turn counts the level, userClick counts the clicks within a level
const gameMemory = [];
let userMemory = [];
let turn = 0;
let userClick = 0;

const counterEl = document.querySelector('.counter');

//Declare a 20 item random requence
function randomSequence() {
	for (let i = 0; i < 20; i++) {
		gameMemory.push(String(Math.floor(Math.random() * 4)));
	}
}

//Target board and colored squares, declare buttonClick()
const boardEl = document.querySelector('.board');
boardEl.addEventListener('click', buttonClick);
function buttonClick(event) {
	userMemory.push(event.target.id);
	console.log(userMemory);
	if (event.target.id === '0') {
		yellowBlink();
	}
	if (event.target.id === '1') {
		blueBlink();
	}
	if (event.target.id === '2') {
		greenBlink();
	}
	if (event.target.id === '3') {
		redBlink();
	}
	userClick++;
	if (userClick === turn + 1) {
		console.log('user memory', userMemory);
		console.log('game memory', gameMemory);
		checkGame();
	}
}

//Target colored boxes individually to be able to set up blinking and run displaySequence

const yellow = document.getElementById('0');
const blue = document.getElementById('1');
const green = document.getElementById('2');
const red = document.getElementById('3');

//Define blinking of colors
function yellowBlink() {
	yellow.style.filter = 'brightness(400%)';
	setTimeout(() => {
		yellow.style.filter = 'none';
	}, 200);
}

function blueBlink() {
	blue.style.filter = 'brightness(400%)';
	setTimeout(() => {
		blue.style.filter = 'none';
	}, 200);
}

function greenBlink() {
	green.style.filter = 'brightness(400%)';
	setTimeout(() => {
		green.style.filter = 'none';
	}, 200);
}

function redBlink() {
	red.style.filter = 'brightness(400%)';
	setTimeout(() => {
		red.style.filter = 'none';
	}, 200);
}

//blink() function useful for calling blinks on displaySequence, passing through the value of the array to blink and it calls on the appropriate colored blink

function blink(value) {
	if (value === '0') {
		yellowBlink();
	} else if (value === '1') {
		blueBlink();
	} else if (value === '2') {
		greenBlink();
	} else if (value === '3') {
		redBlink();
	}
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
	// console.log(gameMemory);
}

//Declare checkGame function
function checkGame() {
	const gameMemoryCurrent = gameMemory.slice(0, turn + 1);
	if (userMemory.toString() === gameMemoryCurrent.toString()) {
		turn++;
		counterEl.innerHTML = `Round: ${turn + 1}`;
		repeatSequence();
		userMemory = [];
		userClick = 0;
	}
	if (userMemory.toString() !== gameMemoryCurrent.toString()) {
		console.log('Game over!');
	}
	if (turn === 20) {
		setTimeout(() => {
			alert('You won!');
		}, 500);
	}
}

//Repeat sequence for user
function repeatSequence() {
	for (let i = 0; i <= turn; i++) {
		setTimeout(() => {
			blink(gameMemory[i]);
		}, (i + 1) * 400);
	}
}
