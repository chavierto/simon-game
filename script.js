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

//Define gameMemory
const gameMemory = [];

//Define 20 item random requence
function randomSequence() {
	for (let i = 0; i < 20; i++) {
		gameMemory.push(Math.floor(Math.random() * 4));
	}
	console.log(gameMemory);
}

randomSequence();
