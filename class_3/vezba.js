/**
 * Test
 * Create variable 'content'
 * Value for 'content' is 'video'
 * Create conditional statement
 * 		if value is 'video' print yt link
 * 		if value is 'image' print link to image from google
 **/

let content = "image";

if(content == "video")
{
	console.log("https://www.youtube.com/watch?v=ypD2_baSHjM");
}

else if(content == "site")
{
	console.log("itmentorstva.com");
}

else
{
	console.log("https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
}

//Conditional statement for math. Ex. if price is <  (less than 500) print 'Not expensive', but if price is > (higher han 500) print 'It's 'expensive'

let priceOne = 499;

if(priceOne < 500)  {
	console.log("Not expensive");
}

else if(priceOne > 500) {
	console.log("It's expensive");
}

// Test  Conditional statement to see does it price 500 or less than 500
// we can use <= less or equal
if(priceOne <= 500)  {
	console.log("Price is in between 0 and 500!");
}

// Additional Comparison


let components = "keyboard";
let priceComponent = 50;

// Check does it component = keyboard and priceComponent = 50\
// Here we can compare two variable values and only if they are both true we can print result
// for that we use && to make conditional statement for two variables

if(components == "keyboard" && priceComponent == 50) {
	console.log("Test success");
}

else {
	console.log("Test error!");
}