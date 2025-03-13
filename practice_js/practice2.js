

// CONDITIONAL STATEMENTS

/**
 * 1. Age Validator
 *  Create a script that checks a person's age and prints a message based on it:
 *
 * If age is less than 18 → "You are a minor."
 * If age is between 18 and 65 → "You are an adult."
 * If age is 65 or above → "You are a senior citizen."
 * */

let age = 18;

if(age < 18) {
	console.log("You are a minor!");
}
// using && to compare specific values in two variables, like range from to, and again from to
else if(age >= 18 && age <= 65  ) {
	console.log("You are an adult!");
}
else{
	console.log("You are senior citizen!");
}


/**
 * 2. Odd or Even Number Checker
 *  Create a variable num and assign it a number.
 *
 * If the number is even, print "Even Number"
 * If the number is odd, print "Odd Number"
 * */

let num = 34;

// Here we are using modular operator '%' , gives remainder after dividing one number by another
if (num % 2 == 0) {
	console.log("Even number");
}
else{
	console.log("Odd number");
}


/**
 * 3. Create a variable score and assign it a value between 0 and 100.
 *
 * If 90 or more, print "A - Excellent"
 * If 80-89, print "B - Very Good"
 * If 70-79, print "C - Good"
 * If 60-69, print "D - Needs Improvement"
 * If below 60, print "F - Failed"
 *  Bonus: Add a condition that checks if the score is out of range (< 0 or > 100) and prints "Invalid Score".
 * */

let score = 50;

if(score >= 90 && score <= 100) {
	console.log("A - Exellent");
}

else if(score >= 80 && score <=90) {
	console.log("B - Very Good");
}

else if(score >= 70 && score <= 79) {
	console.log("C - Good");
}

else if(score >= 60 && score <= 69) {
	console.log("D - Needs Improvement");
}

else if(score > 0 && score <= 59) {
	console.log("Failed");
}

else{
	console.log("Invalid Score");
}



/**
 * Traffic Light System
 *  4.  Create a variable trafficLight with values "red", "yellow", or "green".
 *
 * If red, print "Stop!"
 * If yellow, print "Get Ready!"
 * If green, print "Go!"
 * If any other value is entered, print "Invalid light color!"
 * */

let trafficLight = "red";

if (trafficLight == "red") {
	console.log("Stop!");
}
else if (trafficLight == "yellow") {
	console.log("Get Ready!");
}
else if (trafficLight == "green") {
	console.log("GO!");
}
else{
	console.log("System Error");
}


/**
 * Login System with Multiple Roles
 *  5. Create two variables: username and role.
 *
 * If username is "admin" and role is "superuser", print "Welcome, Admin! You have full access."
 * If username is "editor" and role is "content-manager", print "Welcome, Editor! You can edit content."
 * If username is "user" and role is "viewer", print "Welcome, User! Read-only access."
 * Otherwise, print "Access Denied!"
 * */

let userName = "user";
let role = "eee";

if(userName == "admin" && role == "superuser") {
	console.log("Welcome Admin, You have full access");
}
else if(userName == "editor" && role == "content-manager") {
	console.log("Welcome Editor, You can edit content!");
}
else if(userName == "user" && role == "viewer") {
	console.log("Welcome User, Read only Access");
}
else{
	console.log("Access Denied!");
}
