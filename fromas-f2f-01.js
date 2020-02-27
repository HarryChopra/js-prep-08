// Objects & Arrays
// Dot Assignment

var person = {};
person.name = 'Mrs. White';
person; //{ name: 'Mrs. White' }

var myArr = [];
console.log(myArr.length);

// Arrays have properties, because they are object type as well
myArr.customFn = 'Hello!';
myArr.push(10);
var what = myArr;
console.log(myArr); // [ 10, customFn: 'Hello!' ]

// Access with Dots

var who = person.name;
console.log(who); // Mrs. White

// Reassigning the original memory space
// The content of 'Who' remains the same, because there is a difference between storing by reference and by value
// Note: Primitive values get stored as value, while Non-primitive values (functions, objects, arrays etc) get stored as reference.
person.name = 'Mr. White';
console.log(who); // Mrs. White
myArr[0] = 9;
console.log(what);

//Arrays
console.log(person.who);
var person = [];
person.name = 'Mrs. White';
var who = person.name;
who; // Mrs. White

// What is an array
typeof person === 'array'; //false
typeof person === 'object'; // true
// The only difference bw array and object is that is an object but in addition has some array methods

person[plea]; // plea is not defined
var plea = 'wouldShe';

//Properties of an array can be written as:
person['plea'] = 'I would never!';
person; // [ name: 'Mrs. White', wouldShe: 'I would never!' ]

var yArr = [];
yArr.push(10);
yArr; // [10]
console.log(yArr.length); // 1

yArr[5] = 1;
yArr; // [ 10, , , , , 1 ]
console.log(yArr.length); // 6

//Create an object using bracket and dot notation that represents the characters and related data you may find in a game of clue

var game = {}; // intialise as an object literal
game.murderer = '??';

game['weapons'] = ['lasers', 'angry cats', 'dish soap'];
//Because the data needs to be organised we rewrite this as
game['weapons'] = [
	{ type: 'lasers', location: 'lab' },
	{ type: 'angry cats', location: 'conservatory' },
	{ type: 'dish soap', location: 'library' }
];

game.name = [];
game.name.push('Miss Scarlet');
game.name.push('Mr. Green');
console.log(game.name);
