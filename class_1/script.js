


// Variables in JS,  we can use them to store data, they can change values
// To create Variable we use let (prefix) name (name of variable) = "" (values for created variable, "" use only for array-text)


let name = "Milos";
let surname = "Nikolic";

// To execute js, we need to connect .js file with .html. Add script inside the body tag
// Always use CONSOLE in browser for js testing
// For script testing in console, use instruction  console.log(); if everything is fine it will show values for created variables if we use variable name, or plain text instead


console.log(name, surname);

// Data Types in JS, STRING > text, INTEGER > full number, FLOAT > decimal number, BOOLEAN > true/false,
// For string always use "" example: let name = "Milos";
// For integer no need for "" example: let age = 36;

// Numbers

let height = 187.5; // Float > decimal number

//Boolean
let isProgrammer = true; // BOOLEAN (BOOL) > true (1) / false (0)

console.log(name, surname, height, isProgrammer); // log for more than one variable




// Test 1. Make two variables name and surname, plus one variable name=surname

let Name = "Milos";
let Surname = "Nikolic";
let fullName = Name+" "+Surname ;// if we want to join two values from two variables in one we can use var1+var2, if we need space in between use var1+" "+var2, like this we can add empty string

console.log(fullName);



// Test 3. Make two variables ex. num1 and num2, plus one variable for sum num1 and num2

let num1 = 10;
let num2 = 15;
let sum = num1+num2;

console.log(sum);



// Homework, Make array with three items, Racunar, Tastatura, mis
// Array, kind of variable, but can hold more values

const computers = ["Racunar", "Tastatura", "Mis"];  // Array, create array with const or let  and values write inside []

console.log(computers);





//  Test 3.  Make two variables, myName and  age then use Console log to execute "Hi my name is "myName", and i am "age" old.

let myName = "Milos"; // string
let age = 36; // integer

console.log("Hi, my name is " + myName, "and i am " + age, "years old");  // Test successfully passed in Console
