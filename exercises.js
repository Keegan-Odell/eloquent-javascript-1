//Write a loop that makes seven calls to console.log to output a triangle
function looping_triangle() {
	let pound_tracker = '#';
	for (let i = 0; i < 7; i++) {
		console.log(pound_tracker);
		pound_tracker += '#';
	}
}
// looping_triangle()

//FizzBuzz - classic problem about fizzing the buzz.
//1. if divisible by 3 - fizz
//2. if divisible by 5 - buzz
//3. if divisible by both 3 and 5 -FizzBuzz
// note: question asking for numbers 1-100
function fizz_buzz() {
	for (let i = 1; i <= 100; i++) {
		if(i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else {
      console.log(i);
    }
	}
}

// fizz_buzz()

// Write a prgram that creates a string that represents an 4xNum grid, using newline characters to separate lines.
// At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
// Passing this string to console.log should show something like this:
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// Once you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
function chess_board(num) {
  counter_even = ' # # # #'
  counter_odd = '# # # #'
  
  for(let i = 0; i < num; i++) {
    if (i % 2 === 0) {
      console.log(counter_even);
    } else {
      console.log(counter_odd);
    }
  }
}

chess_board(16)