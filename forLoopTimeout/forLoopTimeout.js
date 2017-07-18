// Explain what is wrong with this code and how you would fix this.

	/* As I understand it, `var` and `let` use different scoping.
	I'm not sure why `var` returns 11 each time, but I am imagining
	that the execution of the internal code block - the console.log() -
	is executed AFTER the iteration, therefore, when the code is evaluated
	the var value is set to the final pass through the iteration, === 11.
	The `let` scoping, on the other hand, is constrained within the code block and
	established per each iteration evaluating the console.log() contents. */

// With ES6 there is a very, very simple way to solve this.
// See if you can solve this with just ES5 JS.
// The output should be 1, 2, 3, .... 10. Right now it just prints 11.
// I've been asked this three times in separate interviews.

// for (var i = 1; i <= 10; i++) {
for (let i = 1; i <= 10; i++) {
	setTimeout(function() {
		// From looking at the code you would assume it would print 1 - 10
		// It doesn't.  Why?  How can you make it print 1 - 10.
		console.log(i);
	}, 0);
}
