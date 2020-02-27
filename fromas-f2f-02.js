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
var newSuspectList = [];

function createSuspectList() {
	for (let suspect of suspects) {
		suspectList.push(CreateSuspectObjects(suspect));
	}
}

//// createSuspectList();
console.log(suspectList);
// [ { name: 'Miss Scarlet', color: 'Scarlet', speak: [λ: speak] },
//  { name: 'Colonel Mustard', color: 'Mustard', speak: [λ: speak] },
//  { name: 'Mr. White', color: 'White', speak: [λ: speak] } ]
//// suspectList[1].speak(); // My name is Colonel Mustard

// Achieve the same functionality by writing a _.each function that takes the input list and call back function as two arguments.

//writing a custom function
var _ = {};
_.each = function(list, cb) {
	for (let item of list) {
		cb(item);
	}
};

//application
_.each(suspects, createSuspectList);
console.log(suspectList);

// Improving and making verbose the custom function

_.each = function(list, cb) {
	for (let i = 0; i < list.length; i++) {
		cb(list[i], i); // list, index, item
	}
};

var siblings = ['Loius', 'Charlotte', 'George'];

//application

_.each(siblings, function(name, i) {
	if (siblings[i + 1]) {
		console.log(`${name}, is younger than ${siblings[i + 1]}.`);
	} else {
		console.log(`${name} is the oldest.`);
	}
});

//Loius, is younger than Charlotte.
//Charlotte, is younger than George.
//George is the oldest.

// write a custom each function, again

var _ = {
	each: function(list, cbfn) {
		// is the list an array?
		if (Array.isArray(list)) {
			for (let i = 0; i < list.length; i++) {
				cbfn(list[i], i, list);
			}
		} else {
			// is the list in an object
			for (let key in list) {
				cbfn(list[key], key, list);
			}
		}
	}
};

_.each(['Sean Connery', 'Pierce Brosnan', 'Daniel Craig'], function(name, i, list) {
	if (list[i + 1]) {
		console.log(`${name}, is older than ${list[i + 1]}`);
	} else {
		console.log(`${name}, is the youngest.`);
	}
});

// _.each({ first: 'George', second: 'Charlotte', third: 'Louis' }, function(name, i, list) {
// 	var listLength = Object.keys(list).length;
// 	if (listLength > 1) {
// 		for (let i = 0; i < listLength; i++) {
// 			console.log(`${name}, is older than ${list[Object.keys(list)[i]]}`);
// 		}
// 	} else {
// 		console.log(`${name}, is the youngest.`);
// 	}
// });

// Write a custom map function

_.map = function(list, cb) {
	temp = [];

	for (let item of list) {
		temp.push(cb(item));
	}
	return temp;
};
// can also be written as :

_.map = function(list, cb) {
	temp = [];

	_.each(list, function(item, i, list) {
		temp.push(cb(item, i, list));
	});
	return temp;
};

// Application

console.log(
	_.map(['candlestick', 'lead pipe', 'revolver'], function(item) {
		return `broken ${item}`;
	})
);

// custom filter

_.filter = function(list, cb) {
	//creating a new array
	const storage = [];
	// loop through the array
	for (let i = 0; i < list.length; i++) {
		if (cb(list[i], i, list) === true) {
			storage.push(list[i]);
		}
	}
	return storage;
};

//can be written as
_.filter = function(list, cb) {
	const storage = [];
	_.each(list, function(item, i, list) {
		if (cb(item, i, list) === true) {
			storage.push(item);
		}
	});
	return storage;
};

// application

console.log(
	_.filter(['candlestick', 'lead pipe', 'revolver'], function(item, ind, list) {
		return item == 'candlestick';
	})
);

const videoData = [
	{
		name: 'Miss Scarlet',
		present: true,
		rooms: [
			{ kitchen: false },
			{ ballroom: false },
			{ conservatory: false },
			{ 'dining room': false },
			{ 'billiard room': false },
			{ library: false }
		]
	},
	{
		name: 'Mrs. White',
		present: false,
		rooms: [
			{ kitchen: false },
			{ ballroom: false },
			{ conservatory: false },
			{ 'dining room': false },
			{ 'billiard room': false },
			{ library: false }
		]
	},
	{
		name: 'Reverend Green',
		present: true,
		rooms: [
			{ kitchen: false },
			{ ballroom: false },
			{ conservatory: false },
			{ 'dining room': false },
			{ 'billiard room': false },
			{ library: false }
		]
	},
	{
		name: 'Rusty',
		present: false,
		rooms: [
			{ kitchen: false },
			{ ballroom: false },
			{ conservatory: false },
			{ 'dining room': false },
			{ 'billiard room': false },
			{ library: false }
		]
	},
	{
		name: 'Colonel Mustard',
		present: true,
		rooms: [
			{ kitchen: false },
			{ ballroom: false },
			{ conservatory: false },
			{ 'dining room': false },
			{ 'billiard room': false },
			{ library: false }
		]
	},
	{
		name: 'Professor Plum',
		present: true,
		rooms: [
			{ kitchen: false },
			{ ballroom: false },
			{ conservatory: false },
			{ 'dining room': false },
			{ 'billiard room': false },
			{ library: false }
		]
	}
];

// Return objects where people who are present

console.log(
	_.filter(videoData, function(item, ind, list) {
		return item.present;
	})
);
