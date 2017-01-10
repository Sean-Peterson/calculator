var add = function(number1, number2) {
return number1 + number2;
}
var diff = function(number1, number2) {
return number1 - number2;
}
var quotient = function(number1, number2) {
return number1 / number2;
}
var product = function(number1, number2) {
return number1 * number2;
}

var number1 = parseInt(prompt("Pick a number:"));
var number2 = parseInt(prompt("Pick another number:"));

alert(quotient(number1, number2))
