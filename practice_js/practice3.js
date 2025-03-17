/**
 * 1. Movie Ticket Price Calculator
 * Create a script that determines the ticket price based on age.
 *
 * If age is below 5, print "Free ticket!"
 * If age is between 5 and 17, print "Child ticket: $5"
 * If age is between 18 and 64, print "Adult ticket: $10"
 * If age is 65 or above, print "Senior ticket: $7"
 * */


let age = 10 ;

if(age < 5) {
	console.log("Free Ticket!");
}
else if(age >= 5 && age <= 17)  {
	console.log("Child Ticket: 5$");
}
else if(age >= 18 && age <= 64) {
	console.log("Adults Ticket: 10$");
}
else{
	console.log("Senior Tickets: 7$");
}


/**
 * 2. Online Store - Check Product Availability
 * Create an array products with the following items: ["Laptop", "Mouse", "Keyboard", "Monitor"].
 *
 * Create a variable searchProduct and assign it any product name (e.g., "Mouse").
 * Check if the product exists in the array using .includes().
 * If it exists, print "Product is available!"
 * If it doesn't exist, print "Product is out of stock!"
 * */

let products = ["Laptop", "Mouse", "Keyboard", "Monitor"];
let searchProduct = "Printer";

if(products.includes(searchProduct)) {
	console.log("Product Available");
}
else{
	console.log("Product Out of Stock");
}


/**
 * 3. Library System (Using Objects & Arrays)
 * Create an array called library containing 3 book objects. Each book object should have:
 *
 * title (e.g., "The Hobbit")
 * author (e.g., "J.R.R. Tolkien")
 * isAvailable (boolean: true or false)
 * Write a script that:
 *
 * Prints the title of the second book
 * Checks if the first book is available and prints "Available for borrowing" or "Not available"
 * */

let library = [
	{title: "The Hobbit", author: "J.R.R. Tolken", isAvailable: true},
	{title: "The Book2", author: "J.R.R. Author2", isAvailable: true},
	{title: "The Book3", author: "J.R.R. Author3", isAvailable: false},
	{title: "The Book4", author: "J.R.R. Author4", isAvailable: true},
];

console.log(library[1]);

if(library[0] && library[0].isAvailable) {
	console.log("Book Is Available");
}
else{
	console.log("Book is Not Available");
}

/**
 * 4. Switch Statement - Simple Calculator
 * Create three variables:
 *
 * num1 = 10
 * num2 = 5
 * operation = "add" (this can be "add", "subtract", "multiply", or "divide")
 * Using a switch statement, perform the correct operation and print the result:
 *
 * "add" → Print num1 + num2
 * "subtract" → Print num1 - num2
 * "multiply" → Print num1 * num2
 * "divide" → Print num1 / num2
 * If the operation is unknown, print "Invalid operation"
 * */

let num1 = 10;
let num2 = 5;
let operation ="divide";

switch(operation) {
	case "add":
		console.log(num1 + num2);
		break;
	case "subtract":
		console.log(num1 - num2)
		break;
	case "multiply":
		console.log(num1 * num2);
		break;
	case "divide":
		console.log(num1 / num2);
		break;
}



