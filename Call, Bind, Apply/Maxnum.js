/*Given an array of numbers [34, 12, 57, 28, 91], 
use the apply method to find the maximum number in the array. */

const numbers = [34, 12, 57, 28, 91];

const maxNumber = Math.max.apply(null, numbers); // passed null as math..max() is a standalone in this case 

console.log(maxNumber);  
