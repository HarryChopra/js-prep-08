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

// Destructuring

var obj = { first: 'Dan', last: 'Coelho' };
var firstName = obj.first;
var lastName = obj.second;

// variable declarations
var [first, last] = [true, false];
first; // true
last; // false
// though this method of multiple assignment is convenient, its less verbose. the variable assignment statement can become long, unmanageable and error prone.

var { first, second } = { second: 1, first: 0 };
first; // 0
second; // 1
//Notice because we are using object types to create these variables, the order can interchange

var myObj = { first: 'Hello', second: 'world' };
var { first, second } = myObj;
first; // Hello
second; // World

// Omitting certain values
var [a, , c] = [1, 2, 3];
a; //1
c; //2

//combining with spread
var [a, ...b] = [1, 2, 3];
a; //1
b; //[2,3]

//swapping two values without temp
var a = 1;
var b = 2;
// var temp = a
// a = b
// b = temp
//can be written as
[a, b] = [b, a];
a; //2
b; //1

//Nested destructuring
var [a, [b, [c, d]]] = [1, [2, [[[3, 4], 5], 6]]];
a; //1
b; //2
c; // [[3,4], 5]
d; // 6

//Freezing objects
Object.freeze(obj);
obj.firstName = 'Harry';
obj; // {first: 'Dan', last: 'Coelho'}
