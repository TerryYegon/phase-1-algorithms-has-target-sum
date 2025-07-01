function hasTargetSum(array, target) {
  // Write your algorithm here
}

/* 
  Write the Big O time complexity of your function here
*/
function hasTargetSum(array, target) {
  const seenNumbers = new Set();

  for (const number of array) {
    const complement = target - number;
    if (seenNumbers.has(complement)) {
      return true;
    }
    seenNumbers.add(number);
  }

  return false;
}


/* 
  Add your pseudocode here
*/

Create an empty set called seenNumbers
For each number in the array:
    Calculate the complement: target - number
    If the complement exists in seenNumbers:
        Return true
    Add the current number to seenNumbers
Return false (if no pair found)


/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  console.log("Expecting: true");
console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10)); // 3 + 7

console.log("Expecting: true");
console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25)); // 19 + 6

console.log("Expecting: false");
console.log("=>", hasTargetSum([1, 2, 5], 4)); // no valid pair

// Additional test cases
console.log("Expecting: true");
console.log("=>", hasTargetSum([-7, 10, 4, 8], 3)); // -7 + 10

console.log("Expecting: false");
console.log("=>", hasTargetSum([4], 4)); // only one element

console.log("Expecting: true");
console.log("=>", hasTargetSum([1, 2, 3, 4], 7)); // 3 + 4

console.log("Expecting: false");
console.log("=>", hasTargetSum([], 0)); // empty array

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
