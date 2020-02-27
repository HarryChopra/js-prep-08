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

// Destructure this nested data structure into two variables with the strings red and orange
var { color1, color2 } = { color1: game.suspects[0].color, color2: game.suspects[1].color };
color1; // orange
color2; // red

var [{ color: color3 }, { color: color4 }] = game.suspects;
color3; //orange
color4; // red

// List transformation

function CreateSuspectObjects(name) {
	return {
		name: name,
		color: name.split(' ')[1],
		speak() {
			console.log(`My name is ${name}`);
		}
	};
}

var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];

var suspectList = [];

function createSuspectList() {
	for (let suspect of suspects) {
		suspectList.push(CreateSuspectObjects(suspect));
	}
}

createSuspectList();
console.log(suspectList);
// [ { name: 'Miss Scarlet', color: 'Scarlet', speak: [λ: speak] },
//  { name: 'Colonel Mustard', color: 'Mustard', speak: [λ: speak] },
//  { name: 'Mr. White', color: 'White', speak: [λ: speak] } ]
suspectList[1].speak(); // My name is Colonel Mustard
