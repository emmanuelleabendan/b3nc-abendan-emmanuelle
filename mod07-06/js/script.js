/*var	userName;
var firstName;
var lastName;

userName = "emmanuelleabendan";
firstName = "Emmanuelle";
lastName = "Abendan";

console.log(userName);
console.log(firstName);
console.log(lastName);


var message = "Your name is " + firstName + " " + lastName + " and your username is " + userName + ".";


document.getElementById("yourMessage").innerHTML = message;*/


/***If Statement***/
/*var userName;
var passWord;

userName = "emmanuelleabendan";
passWord = "abc123";

if (userName == "emmanuelleabendan") {
	console.log("Your username is correct.");
} else {
	console.log("Username entered is incorrect.");
}

if (passWord == "abc123") {
	console.log("Your password is correct.")
} else {
	console.log("Password entered is incorrect.")
}*/


/*Loops (while, do while for)*/

/*var counter = 0;
while (counter <= 10) {
	console.log(counter);
	counter++;
}*/

/*var counter = 0;
while (counter <= 100) {
	if (counter % 2 == 0) {
		console.log(counter);
	}
	counter = counter + 1;
}*/

/*var yourName = "Juan Dela Cruz";
var counter = 0;
var markup = "";
while (counter < 10) {
	markup = markup + "<p>" + yourName + "</p>";
	console.log(markup);
	counter = counter + 1;
}

document.getElementById("yourMessage").innerHTML = markup;*/

var expression = "";
function updateDisplay(val) {

	expression = expression + val;
	document.getElementById("display").innerHTML = expression;
	// return expression;
}

function computeExpression() {
	// console.log(expression);
	var result = eval(expression);
	
	document.getElementById("display").innerHTML = result;
	expression = result; /*makes result new initial value*/
}

function clearExpression() {
	val = 0;
	expression = "";
	newVal = expression + val; /*makes sure display is fresh 0*/
	document.getElementById("display").innerHTML = parseInt(newVal);
}

function delChar() {
	expression = expression.substr(0, expression.length-1);

	if (expression == "") {
		document.getElementById("display").innerHTML = 0;
	} else {
		document.getElementById("display").innerHTML = expression;
	}
}

