

/**
 * Create two variables
 * name, password
 * 		name value admin
 * 		password value tajnasifra
 *
 *
 * 	Conditional statement
 * 		if name is admin and password is tajnasifra
 * 			print 'Welcome Back!'
 * 		if name is toma and password is tajnasifra
 * 			print 'Welcome Toma!'
 *
 * 		if is something else
 * 			print 'Wrong password or name'
 *
 *
 **/


let uname = "admin";
let password = "tajnasifra";

if(uname == "admin" && password == "tajnasifra") {
	console.log("Welcome back!");
}

else if(uname == "toma" && password == "tajnasifra") {
	console.log("Welcome Toma!");
}

else {
	console.log("Wrong Name or Password!");
}