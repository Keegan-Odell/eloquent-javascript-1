//Write a loop that makes seven calls to console.log to output a triangle
function looping_triangle() {
  let pound_tracker = '#'
  for(let i = 0; i < 7; i++) {
    console.log(pound_tracker);
    pound_tracker += '#'
  }
}

// looping_triangle()