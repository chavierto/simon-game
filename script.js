//Declare gameMemory, userMemory & turn counter
const gameMemory = [];
const userMemory = [];
let turn = 0;

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
	checkGame();
	turn++;
	console.log(event.target.id);
}

//Target start game button
const buttonEl = document.querySelector('.button');
buttonEl.addEventListener('click', startGame);
function startGame() {
	gameMemory.length = 0;
	userMemory.length = 0;
	randomSequence();
	document.getElementById('gameMemory.[${turn}]');
	console.log(gameMemory);
}

//Declare checkGame function
function checkGame() {
	if (userMemory[turn] == gameMemory[turn]) {
		console.log('Nice! keep going...');
	} else {
		console.log('Game over!');
	}
}
