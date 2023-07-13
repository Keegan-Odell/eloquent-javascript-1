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

fizz_buzz()