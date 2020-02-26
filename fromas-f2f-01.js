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
