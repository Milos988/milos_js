// LOOPS (petlje)
// We can use them to run the same code over and over again, each time with the same or different values (arrays, objects etc)

/**
 * Type of the loops
 * for, forEach, while, do while, for in, for of
 * most used loops: for, forEach, for in, while, do while, do
 * */

// for loop (for known as a counter loop)  'for(argument) {execute code}'
/**
 * let i -> name is not important at all, but we use 'i'  ;)
 * 		-> i = iteration (process of repetition)
 * 	-> i < 100;
 * 		-> condition up to when loop is working
 * 	-> because i - 0 (<100 less than 100) this is infinity loop, it will never stop
 * 		After every repetition increase i for 1 (one)
 * 		-> let i = 1; i < 100; i++
 *
 * */
/**
for(let i = 0; i < 100; i++) {
	console.log(i);
}
**/
// Test
	// find number of items in array and use in for loop


let cars = [
		"Toyota", "Ford", "BMW", "Honda", "Mercedes-Benz", "Audi", "Tesla", "Chevrolet",
		"Volkswagen", "Hyundai", "Nissan", "Kia", "Mazda", "Subaru", "Porsche", "Lexus",
		"Jaguar", "Land Rover", "Volvo", "Ferrari", "Lamborghini", "Maserati", "Bugatti",
		"Alfa Romeo", "Peugeot", "Renault", "Skoda", "Citroën", "Chrysler", "Dodge",
		"Jeep", "Ram", "Mini", "Suzuki", "Mitsubishi", "Genesis", "Acura", "Infiniti"
	];

console.log(cars);


let len = cars.length;
console.log(len);

/**
for(let i = 0; i < len; i++){
	console.log(cars[i]);
}
**/


//HOMEWORK
/**
 * if cars name start with A, don't print
 * **/

for(let i = 0; i < len; i++){
let firstLetter = cars[i][0].toLowerCase();

if (firstLetter === "a"){
	continue;   // if  conditions comes to the word with letter a, skip and continue
}
	console.log(cars[i]);
}


