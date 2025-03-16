
// TEST

/**
 * Create variable 'name' with name value
 * if name is Admin, print Hello Admin, if it is not, print You are not admin
 * */

let name = "Milos";
let password = "tajnaSifra";
let userType = "moderator";
let dayOfWeek = "nedelja";

if(name == "Milos")  {
	console.log("Hello Milos");
}
else{
	console.log("You are not Milos");
}


/**
 * Create variable password with value 'tajnaSifra'
 * if password is 'tajnaSifra' print 'Your Password is correct'
 *
 */


if(password == "tajnaSifra") {
	console.log("Password Correct!");
}
else{
	console.log("Incorrect Password!");
}

/**
 * Now try to get same results, but only with one if for both, name and password
 * */
// && AND operator
// || OR operator

if(name == "Milos" && password == "tajnaSifra") {
	console.log("Password is Correct");
}
else{
	console.log("Icorrect Password");
}

/**
 * Create variable 'userType' value admin
 * 		if userType is admin or moderator
 * 			print 'Welcome admin'
 * 		if it'd not print 'you are regular member'
 *
 * */

if(userType == "admin" || userType == "moderator") {
	console.log("Welcome Admin!");
}
else{
	console.log("You are regular member");
}

// Another way to check values in variable, without OR and AND operators
// We can add values in array
// Now, check does it userType exist in allowedType
// Using .includes we can haWe much more clean code and also avoid spelling mistakes
// .includes print the values TRUE or FALSE

let allowedType = ["admin", "moderator"]; // same like allowedType.includes("admin", "moderator");

let typeCheck = allowedType.includes(userType);

if(typeCheck) { // Same like is(typeCheck == true)
	console.log("You are ADMIN");
}
else{
	console.log("You are Regular Member");
}

/**
 * Test
 * Create variable 'dayOfWeek' add values monday
 * check if day is saturday or Sunday, if is true print weekend
 * if is Friday print weekend is coming
 * if is any other day print Work days
 * */



if(dayOfWeek == "subota" || dayOfWeek == "nedelja") {
	console.log("Weekend");
}
else if(dayOfWeek == "petak") {
	console.log("Weekend is coming!");
}
else{
	console.log("Work Work");
}


// Homework
// Use switch to do the same like in test for dayOfWeek
// SWITCH similar to if, case ""; to brake: is the  same like one if,
// Default is same like ELSE


switch(dayOfWeek) { // using variable 'dayOfWeek'
	case "subota":  // in case is "subota"
	console.log("Weekend Weekend");  // Print "Weekennd Weekend"
	break;  // Instruction is finished

	case "nedelja":
	console.log("Weekend Weekend");
	break;

	case "petak":
	console.log("Weekend is coming Friday");

	default: // same like Else, if it's not any case print "Work Work"
		console.log("WORK WORK!");
}

