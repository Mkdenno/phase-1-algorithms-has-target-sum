function hasTargetSum(array, target) {
  // Write your algorithm here
  // declare an array numbers
const numbers=[];
// iterate over array
for(const item of array){
  // n step
 const complement=target-item;
//  n step
  if(numbers[complement])return true;
  numbers[item]=true

}
return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  declare an array numbers
  iterate over number using for---of 
  finding a number which will complement and add to target for instance number 4 and target 10, therefore our complement is 6
  returns true if they complement else false
*/

/*
  Add written explanation of your solution here
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
