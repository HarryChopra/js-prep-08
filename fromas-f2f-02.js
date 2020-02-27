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

// loop through all the properties of the suspect objects and mark them if they are guilty

function foobar() {
	for (let suspect of game.suspects) {
		if (suspect['color'] == 'red') {
			console.log(suspect.name);
		}
	}
}

foobar(); // Miss Scarlet
