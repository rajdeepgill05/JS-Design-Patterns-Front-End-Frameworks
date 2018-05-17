// This `countUp` function returns a function.
// The inner function creates it's own `closure` 
// around the `myCount` variable. It essentially
// receives it's own copy of `myCount` and it won't
// affect anyone elses copy.
function countUp() {
  let myCount = 0;
  return function() {
    myCount++;
    console.log(myCount)
  }
}

// `counter1` is the returned inner function of `countUp`
// It has it's own copy of myCount that it will be incrementing
// and displaying.
const counter1 = countUp();
counter1(); // output 1
counter1(); // output 2
counter1(); // output 3
counter1(); // output 4

// `counter2` is the returned inner function of `countUp`
// It has it's own copy of myCount that it will be incrementing
// and displaying.
const counter2 = countUp();
counter2(); // output 1
counter2(); // output 2
