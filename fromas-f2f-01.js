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

//Freezing object
Object.freeze(obj);
obj.firstName = 'Harry';
obj; // {first: 'Dan', last: 'Coelho'}

// === Objects

var {user: x} = {user: 5};
console.log(x);
// => 5


// Fail-safe
var {user: x} = {user2: 5};
console.log(x);
// => undefined


// More values
var {prop: x, prop2: y} = {prop: 5, prop2: 10};
console.log(x, y);
// => 5 10

// Short-hand syntax
var { prop, prop2} = {prop: 5, prop2: 10};
console.log(prop, prop2);
// => 5 10

// Equal to:
var { prop: prop, prop2: prop2} = {prop: 5, prop2: 10};
console.log(prop, prop2);
// => 5 10

// Oops: This doesn't work:
var a, b;
{ a, b } = {a: 1, b: 2};

// But this does work
var a, b;
({ a, b } = {a: 1, b: 2});
console.log(a, b);
// => 1 2

// This due to the grammar in JS.
// Starting with { implies a block scope, not an object literal.
// () converts to an expression.

// From Harmony Wiki:
// Note that object literals cannot appear in
// statement positions, so a plain object
// destructuring assignment statement
//  { x } = y must be parenthesized either
// as ({ x } = y) or ({ x }) = y.




// Combine objects and arrays
var {prop: x, prop2: [, y]} = {prop: 5, prop2: [10, 100]};
console.log(x, y);
// => 5 100


// Deep objects
var {
  prop: x,
  prop2: {
    prop2: {
      nested: [ , , b]
    }
  }
} = { prop: "Hello", prop2: { prop2: { nested: ["a", "b", "c"]}}};
console.log(x, b);
// => Hello c


// === Combining all to make fun happen

// All well and good, can we do more? Yes!
// Using as method parameters
var foo = function ({prop: x}) {
  console.log(x);
};

foo({invalid: 1});
foo({prop: 1});
// => undefined
// => 1


// Can also use with the advanced example
var foo = function ({
  prop: x,
  prop2: {
    prop2: {
      nested: b
    }
  }
}) {
  console.log(x, ...b);
};
foo({ prop: "Hello", prop2: { prop2: { nested: ["a", "b", "c"]}}});
// => Hello a b c


// In combination with other ES2015 features.

// Computed property names
const name = 'fieldName';
const computedObject = { [name]: name }; // (where object is { 'fieldName': 'fieldName' })
const { [name]: nameValue } = computedObject;
console.log(nameValue)
// => fieldName



// Rest and defaults
var ajax = function ({ url = "localhost", port: p = 80}, ...data) {
  console.log("Url:", url, "Port:", p, "Rest:", data);
};

ajax({ url: "someHost" }, "additional", "data", "hello");
// => Url: someHost Port: 80 Rest: [ 'additional', 'data', 'hello' ]

ajax({ }, "additional", "data", "hello");
// => Url: localhost Port: 80 Rest: [ 'additional', 'data', 'hello' ]


// Ooops: Doesn't work (in traceur)
var ajax = ({ url = "localhost", port: p = 80}, ...data) => {
  console.log("Url:", url, "Port:", p, "Rest:", data);
};
ajax({ }, "additional", "data", "hello");
// probably due to traceur compiler

But this does:
var ajax = ({ url: url = "localhost", port: p = 80}, ...data) => {
  console.log("Url:", url, "Port:", p, "Rest:", data);
};
ajax({ }, "additional", "data", "hello");


// Like _.pluck
var users = [
  { user: "Name1" },
  { user: "Name2" },
  { user: "Name2" },
  { user: "Name3" }
];
var names = users.map( ({ user }) => user );
console.log(names);
// => [ 'Name1', 'Name2', 'Name2', 'Name3' ]


// Advanced usage with Array Comprehension and default values
var users = [
  { user: "Name1" },
  { user: "Name2", age: 2 },
  { user: "Name2" },
  { user: "Name3", age: 4 }
];

[for ({ user, age = "DEFAULT AGE" } of users) console.log(user, age)];
// => Name1 DEFAULT AGE
// => Name2 2
// => Name2 DEFAULT AGE
// => Name3 4