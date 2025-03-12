
// IF - conditional statements
// we can use them ex. if "bread" is 10, print bread is expensive, and if is less then 10 print bread is not expensive

let item = "bread";
let price = 10;

console.log(item);

// how to write conditional statement for variables above

/**
 * if - prefix for comparison
 * () - inside write the condition - ex. " does it bread cost 10"
 * {} _ what is going to show - print "bread is expensive'
 * if(price == "10") =  == mean that we compare does variable 'item' is equal == to number 10
 * */

if(price == 10)  // condition if value for variable item is 10
{
	console.log("Bread is expensive");  // print this "Bread is expensive"
}

// Test 1. Check does it variable 'item' equal to bread, if it is print "We found bread!"

if(item == "bread") {
	console.log("We found bread!");
}




// Else - we use to execute something in case that comparison is not true
// If it's a BMW print M3, if it's not print "" It's not a BMW!

let car = "bmw";

if(car == "bmw")  // if this is a true car is equal to bmw
{
	console.log("M3!"); // print 'M3!'
}
else
{
	console.log("It's not a BMW!"); // in case that variable car is not equal to bmw (can be empty or something else) print 'It's not a BMW!'
}



//Test 2.

/**
 * Test
 * Create variable 'content'
 * Value for 'content' is 'video'
 * Create conditional statement
 * 		if value is 'video' print yt link
 * 		if value is 'image' print link to image from google
 **/

// Test is in file vezba.js

// Else If
	// els If is conditional statement same like if, always is after if, we can use if and alse, if else if and else or if and else if..we can have them more than one

//let content = "video";

// if(content == "video") //  if content is video
// {
// 	console.log("https://www.youtube.com/watch?v=ypD2_baSHjM"); // print link yt
// 	}

// else if(content == "site")  // if content is site
// {
// 	console.log("itmentorstva.com"); // print itmentorstva.com
// }

// else// or if content is something else print image link
// {
// 	console.log("https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
// }
