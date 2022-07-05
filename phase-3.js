const [addNums, addManyNums] = require("./phase-1");
const [addNums10, addManyNums10] = require("./phase-2");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  // Then, add timing code

  // Your code here

  let adder = increment;
  let counter = 0;
  let arr = [];
  while (counter < 10) {
    console.time("time1");
    arr.push(addNums(adder));
    console.timeEnd("time1");
    counter++;
    adder += increment;
  }
  return arr;
}


function addManyNums10Timing(increment) {
  // Copy your `addManyNums10` code here
  // Then, add timing code

  // Your code here
  let adder = increment;
  let counter = 0;
  let arr = [];
  while (counter < 10) {
    console.time("time2");
    arr.push(addManyNums(adder));
    console.timeLog("time2");
    console.timeEnd("time2");
    counter++;
    adder += increment;
  }
  return arr;
}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
