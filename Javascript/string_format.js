/*
Creation of string formtat as format() function in python
*/

String.prototype.format = function () {
   // store arguments in an array
   var args = arguments;
   // use replace to iterate over the string
   // select the match and check if related argument is present
   // if yes, replace the match with the argument
   return this.replace(/{([0-9]+)}/g, function (match, index) {
     // check if the argument is present
     return typeof args[index] == 'undefined' ? match : args[index];
   });
 };

let firstCard = 6
let secondCard = 9

let sum = firstCard + secondCard

console.log("Hello, your firt card is {0}, your second card is {1} and the sum is {2}".format(firstCard, secondCard, sum))

// Another way to do this
console.log(`Hello, your firt card is ${firstCard}, your second card is ${secondCard} and the sum is ${sum}`)

// Useful methods for strings

console.log("charAt()".charAt(1))

console.log("concat()".concat(" with this"))

console.log("indexOf()".indexOf('x'))

console.log("lastIndexOf()".lastIndexOf("dex"))

console.log("replace".replace("plac", "shap"))

console.log("1,2,3,4,5,6".split(",").map(item => parseInt(item)))

// Para más metodos ver guardados en instragram :D