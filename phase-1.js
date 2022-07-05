// Adds up positive integers from 1-n
function addNums(n) {
  // Fill this in
  let sum = 0;
  for (let i = 0; i < n + 1; i++) {
    sum += i;
  }
  return sum;
}


// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  // Fill this in
  /*if (n == 0) return 0;
  return addNums(n) + addManyNums(n - 1); */
  let sum = 0;
  for (let i = 0; i < n + 1; i++) {
    sum += addNums(i);
  }
  return sum;

}



module.exports = [addNums, addManyNums];
