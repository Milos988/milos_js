
// Tasks to Practice (JavaScript Basics, Arrays, and Objects)
/**
 * Variables & Data Types
 * Task 1:
 * Create three variables:
 *
 * myName (string)
 * myAge (number)
 * isStudent (boolean)
 * Print them all using console.log()
 * */

let myName = "Milos";
let myAge = 36;
let isStudent = true;

console.log(myName + " " + myAge + " " + isStudent);


/**
 * String Concatenation
 * Task 2:
 * Create a variable called introduction that contains:
 *
 * "Hi, my name is NAME and I am AGE years old."
 * Use either string concatenation (+) or template literals (`${}`).
 *
 * Print introduction to the console
 * */

let introduction = "Hi, my name is " +myName + " and I am " +  myAge + " years old.";

console.log(introduction);

/**
 * Array Manipulation
 * Task 3:
 *
 * Create an array called colors with three colors.
 * Add one more color at the end of the array.
 * Remove the first color from the array.
 * Print the final colors array.
 * */

let colors = ["Blue", "Red", "Black"];
console.log(colors);

colors.push("Pink");
console.log(colors);

colors.splice(0,1);
console.log(colors);


/**
 * Accessing Array Elements
 * Task 4:
 *
 * Create an array fruits with "Apple", "Banana", "Cherry".
 * Print only "Banana" using its index.
 * Replace "Cherry" with "Orange".
 * Print the updated array.
 * */

let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits);

console.log(fruits[1]);

fruits[2] = "Orange";
console.log(fruits);


/**
 * Object Creation & Modification
 * Task 6:
 *
 * Create an object car with properties:
 * brand (e.g., "Toyota")
 * model (e.g., "Corolla")
 * year (e.g., 2020)
 * Print the full object.
 * Add a new property: color (e.g., "Blue").
 * Print the updated object.
 * */

let car = {
	brand: "Toyota",
	model: "Corolla",
	year: 2020
}

console.log(car);
car.color = "Blue";

console.log(car);


/**
 *
 * Accessing Object Properties
 * Task 7:
 * Using the car object from Task 6:
 *
 * Print only the brand and model.
 * Change the year to 2024.
 * Print the full updated object.
 */

console.log(car.brand, car.model);

car.year = 2024

console.log(car);

/**
 * Using Arrays Inside Objects
 * Task 8:
 *
 * Create an object person with:
 * name: "John"
 * age: 25
 * hobbies: ["reading", "cycling", "coding"]
 * Print the second hobby.
 * Add a new hobby at the end.
 * Print the updated hobbies array.
 * */

let person = {
	name: "John",
	age: 25,
	hobbies: ["reading", "Cycling", "Coding"]
}

console.log(person);

console.log(person.hobbies[1]);

person.hobbies.push("Swimming");

console.log(person.hobbies);


/**
 * Combining Objects & Arrays
 * Task 9:
 *
 * Create an array students containing three student objects.
 * Each object should have name and grade properties.
 * Print the name of the second student.
 * Update the grade of the first student.
 * Print the updated students array.
 * */

let students = [
	{ name: "John", grade: 90 },
	{ name: "Mark", grade: 88 },
	{ name: "Jack", grade: 95 }
];


console.log(students[1].name);

students[0].grade = 92;

console.log(students);


/**
 * Challenge Task: Mini Shop System
 * Task 10:
 *
 * Create an object shop with:
 * shopName: "Tech Store"
 * products: ["Laptop", "Mouse", "Keyboard"]
 * isOpen: true
 * Add a new product to the products array.
 * Change isOpen to false.
 * Print the full shop object.
 * */


let shop = {
	name: "Tech Store",
	products: ["Laptop", "Mouse", "Keyboard"],
	isOpen: true
}

//console.log(shop);

shop.products.push("Printer");
shop.isOpen = false;

console.log(shop);