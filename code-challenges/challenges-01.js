"use strict";

// --------------------------------------------------------------------------------------------------------
//  Challenge 01:
//  Required:
//
//  Write a function that takes an array and returns the maximum value in the provided array.
//  Without using build-in methods.
//
//  Input: [12, 32, 22, 45, 78, 12, 50]
//  Output: 78

const findMax = (arr) => {
  let max;
  // write your code here
max = arr[0];
  for (let i=0 ; i<arr.length ;i++){
    
    if (max<=arr[i+1]){
    max = arr[i+1];
    }
  }
  return max;
};
// --------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------
//  Challenge 02:
//  Required:
//
//  Write a function that takes an array and returns the sum of the numeric values.
//  Inside the array (there could be strings), without using built-in methods (You can use `typeof`)
//
//  Input: [20, '234', 'car', 41, 20, 'chair']
//  Output: 81
const sumNums = (arr) => {
  let sum;
  // write your code here
  sum =0;
  for(let i=0; i<arr.length; i++){
    if (typeof(arr[i])==="number"){
      sum+=arr[i];
    }
  }


  return sum;
};
// -------------------------------------------------------------------------------------------------------

module.exports = { findMax, sumNums };