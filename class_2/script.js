
// array has Index and values, idex always start with 0 (zero)
//               0>brad  1>milk   2>jogurt
let products = ["bread", "milk", "jogurt"]; // creat array, array is like variable but more like a list, can hold more values

console.log(products);

//pull only one value from array using index

console.log(products[1]); // in this case index 1 is milk
console.log(products,products[1]);  // all data from array plus only one value for specific index

// undefined, in case that we want to pull index number without values from array

console.log(products[5]); // index 5 doesnt exist, error wil be undefined

// Test 1,   Add another item to the array products in new line

products.push("newspaper");

console.log(products); // new item added without changing array in line 4./ nut it will show only in log after this line, if we try to log line 6. again wil show only 3 items


//Test 2.  Remove one item from array in line 4. ex. bread

products.splice(0, 1); // first number (0) start from, last number (1)delete count how many items (indexes) to delete from 0

console.log(products);

// Types of array. Array can be any data type like string, integer, decimal(float), but is not good to mix data types, for nnumbers is ok (decimal and int) but not numbers and strings

let cars = ["Bmw", "Audi", "Mercedes"];
console.log(cars);

//Replace index any index value with another one

cars[0] = "Ford"; // now we call array cars index [0] = and give a new values
console.log(cars);  // now in log we have  Ford, Audi, Mercedes, we can always change in code values for any index of array, like for any other variable

//   whenever we want to change the name of the array or variable, we first call the name and give a new value



// Test 3. Sort array car  from A to Z

cars.sort();  // simple sort from a to z
console.log(cars); // now log is Audi, Ford, Mercedes



// OBJECTS   ,
// Similar to array but with defined structure, create with let prefix and {}

let personalID = {
	name: "Milos",     // name is KEY, Milos is Value
	lastName: "Nikolic",
	dateOfBirth: "29/08/1988",
	hobbies: ["programming", "teaching", "fishing"],  // more than one value  for one key
}

console.log(personalID.name, personalID.dateOfBirth);  // if we want o log specific key, we use the name of object and keu 'personalID.dateOfBirth'
console.log(personalID);  // to slog all keys at the same time

// TEst 4. in object personalID add new key Height and values 196.5

personalID.height = 196.5; // just call existing object and add new key and values object.newKey = values;
console.log(personalID);

console.log(personalID['name'], personalID.name); // two exactly the same way to pull data

// Test 5.   from personalID pull and print in console.log  data programming  from hobbies

console.log(personalID.hobbies[0]); // from personalID.hobbies print index 0  [0]


// Test 6. make new variable "sentence" and use indexes from personalID object like name and hobbies to look like ""NAME has gone HOBBIES"

let sentence = personalID.name + " has gone " + personalID.hobbies[0]; // variable has value of personalID.name + our text of choice + personalID.hobbies[0] index 0

console.log(sentence);

//Homework
/**
 *  make object SHOP
 *  shop has name, products (list of products), openingHours, closingHours
 */

let shop = {
	name: "Online Shop",
	products: ["Notebook", "Desktop", "Speakers", "Mouse", "Keyboard"],
	openingHours: "09:00",
	closingHours: "19:00",
}

console.log(shop);



// Test 7. make empty array 'names' and find the way how to insert three values later

let names = [];

console.log(names);

names.push("Milos", "Marko", "Jovan");

console.log(names);

//test 8.  make array components and add three  values, find way how to delete them all from array

let components = ["monitor", "keyboard", "mouse"];
console.log(components);

components.splice(0,3);  // option 1. or option @. just make empty array with the same name "let components = [];"
console.log(components);


// Test 8. make array books with three books and find how to add one more book but on first place

let books = ["Book one", "Book two", "Book three"];
console.log(books);

books.unshift("Book four, now one"); //for this we can use Method call unshift array.unshift

console.log(books);