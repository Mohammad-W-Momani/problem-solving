console.log("Problem Solving Q: 20");

/* largestProductOfThree */

/*  
Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.
*/

function largestProductOfThree(arr) {
  let num = 1;
  arr.forEach((n) => {
    num = n * num;
  });
  return num
}

/* 
largestProductOfThree([2, 1, 3, 7]); // => 42
Examples:
largestProductOfThree([0, 2, 3]) // => 0
largestProductOfThree([2, 3, 5]) // => 30
*/
