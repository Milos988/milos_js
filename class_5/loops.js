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
for(let i = 0; i < 100; i++) {
	console.log(i);
}