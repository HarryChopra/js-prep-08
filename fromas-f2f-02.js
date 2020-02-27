const game = {
	suspects: [
		{ name: 'Rusty', color: 'orange' },
		{ name: 'Miss Scarlet', color: 'red' }
	]
};

// loop through the suspect array

function foo() {
	for (let suspect of game.suspects) {
		console.log(suspect);
	}
}

foo(); // { name: 'Rusty', color: 'orange' } { name: 'Miss Scarlet', color: 'red' }
