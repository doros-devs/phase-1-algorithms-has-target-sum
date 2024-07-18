function hasTargetSum(array, target) {
  // Create a set to store the numbers we have seen
  const seenNumbers = new Set();

  // Iterate through the array
  for (const number of array) {
    // Calculate the complement
    const complement = target - number;

    // Check if the complement is in the set
    if (seenNumbers.has(complement)) {
      return true;
    }

    // Add the current number to the set
    seenNumbers.add(number);
  }

  // If no pairs are found, return false
  return false;
}

/* 
  Write the Big O time complexity of your function here
  Time Complexity: O(n)
*/

/* 
  Add your pseudocode here
  1. Initialize an empty set called `seenNumbers`.
  2. Iterate through each number in the array:
     a. Calculate the complement by subtracting the current number from the target.
     b. Check if the complement is in the `seenNumbers` set.
     c. If yes, return `true`.
     d. Otherwise, add the current number to the `seenNumbers` set.
  3. If no pairs are found, return `false`.
*/

/*
  Add written explanation of your solution here
  The function iterates through the array and for each number, it calculates the complement by subtracting the current number from the target. It then checks if the complement exists in a set of previously seen numbers. If the complement is found in the set, it means there exists a pair of numbers in the array that add up to the target, and the function returns true. If no such pair is found after iterating through the array, the function returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
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