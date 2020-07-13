//Create randomSequence
//      random color
//      add color to gameMemory
//      play gameMemory
//      run userInputSequence

// onClick
//     push x to userInput[] -> Which index does it go to?
//     check userInput vs gameMemory
//         if wrong
//             print game over;
//             finish game
//         if right
//             if
//                 userInput.length < gameMemory.length
//                 run userInput
//             if userInput.length === gameMemory.length
//                 run randomSequence

//Declare gameMemory, userMemory & turn counter
const gameMemory = [];
const userMemory = [];
let turn = 0;

//Target board and colored squares, declare buttonClick()
const boardEl = document.querySelector('.board');
boardEl.addEventListener('click', buttonClick);
function buttonClick(event) {
	userMemory.push(event.target.id);
	console.log(event.target.id);
}

//Declare 20 item random sequence
function randomSequence() {
	for (let i = 0; i < 20; i++) {
		gameMemory.push(Math.floor(Math.random() * 4));
	}
}

randomSequence();


//Declare displaySequence to let user know what to input
// displaySequence() = for (i=0; i<= turn; i++) {
//     console.log(gameMemory[i]);
// }

// displaySequence():

// Define 1st turn
// function userInput(input) {
// 	userMemory.push(input);
// 	for (let i = 0; i <= turn && i < 20; i++) {
// 		if (userMemory[turn] !== gameMemory[turn]) {
// 			return 'Game over!';
// 		} else {
// 			turn++;
// 			return 'Nice! continue...';
// 		}
// 	}
// }
