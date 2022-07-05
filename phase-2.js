const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  // Fill this in
  let adder = increment;
  let counter = 0;
  let arr = [];
  while (counter < 10) {
    arr.push(addNums(adder));
    counter++;
    adder += increment;
  }
  return arr;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in
  let adder = increment;
  let counter = 0;
  let arr = [];
  while (counter < 10) {
    arr.push(addManyNums(adder));
    counter++;
    adder += increment;
  }
  return arr;

}

module.exports = [addNums10, addManyNums10];
