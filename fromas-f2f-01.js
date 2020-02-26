// Dot Assignment

var person = {};
person.name = 'Mrs. White';
person; //{ name: 'Mrs. White' }

var myArr = [];
console.log(myArr.length);
myArr.customFn = 'Hello!';
myArr.push(10);
console.log(myArr); // [ 10, customFn: 'Hello!' ]

// Access with Dots

var who = person.name;
console.log(who); // Mrs. White

// Reassigning the original memory space
// The content of 'Who' remains the same, because there is a difference between storing by reference and by value
person.name = 'Mr. White';
console.log(who); // Mrs. White
