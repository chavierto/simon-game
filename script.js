//Declare gameMemory, userMemory, turn counter & output counter
const gameMemory = [];
const userMemory = [];
let turn = 0;
let blinking = 1;

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
	console.log('click test', userMemory);
	// if (userMemory.length - 1 == turn) {
	checkGame();
	// }
}

//Target start game button. Reset gameMemory, userMemory & turn counter
const buttonEl = document.querySelector('.button');
buttonEl.addEventListener('click', startGame);
function startGame() {
	gameMemory.length = 0;
	userMemory.length = 0;
	randomSequence();
	console.clear();
	repeatSequence(blinking);
	console.log(gameMemory);
}

//Declare checkGame function
function checkGame() {
	if (userMemory[userMemory.length - 1] == gameMemory[turn]) {
		blinking++;
		console.log('Nice! keep going...');
		repeatSequence(blinking);
	} else {
		console.log('Game over!');
	}
	turn++;
	(counterEl.innerHTML = 'Turn:'), turn;
	userMemory = [];
}

//Repeat sequence for user
function lightUp(index) {
	return new Promise((resolve, reject) => {
		document.getElementById(`${gameMemory[index]}`).style.filter =
			'brightness(300%)';
		console.log('light up', index);
		setTimeout(() => {
			document.getElementById(`${gameMemory[index]}`).style.filter = 'none';
		}, 500);
		setTimeout(() => {
			resolve();
		}, 500);
	});
}

async function repeatSequence(index) {
	for (let i = 0; i < index; i++) {
		await lightUp(i);
	}
}
