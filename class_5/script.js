//Vezba
// find why result is else


let name = "Admin"; // variable value is with capital A
name = name.toLowerCase(); // on this way we can convert any type of letters to Lower case

if(name == "admin") {  // we trying to compare variable name and value 'admin', lower a
	console.log("Pozdrav Admine!");
}
else{
	console.log("Vi niste Administrator!");
}


// Vezba
// If value of 'name' start with later 'a', print 'start with a'

if(name[0] == "a") { // name[0] == "a"; -> variable name index 0 from the value Admin is A
	console.log("Your name start with 'A'");
}

/**
 * Conclusion
 * any string is actually Array in background
 * Ex. name = "admin";
 * that admin is array and has 5 letters
 * each letter is like an index, start from 0 to 4
 * we can use if, switch or we can create array with values for Vowel and use method 'includes'
 * */

//Vezba
/**
 * Check does it value for variable name start with 'Vowel' (a, e, i, o, u)
 * print 'Name stat with vowel!'
 * */
// switch
switch(name[0]) {
	case "a": case "e": case"i": case "o": case "u":
		console.log("Name start with Vowel!");
		break;
}
//array and includes
let vowel = ["a", "e", "i", "o", "u"];
if(vowel.includes(name[0])) {  // if variable 'vowel' include values for 'name[0]'
	console.log("Your name start with Vowel!"); // print this
}

// If with ===
/**
 * == compare the values
 * === compare type of the data
 * */

//Ex.

let number = "2";
if(number === 2) { // in this case print wil be else, because variable number is "2" (string) and in if we compare === 2, what is number (integer)
	console.log("Number is 2");
}
else{
	console.log("Number is not 2");
}