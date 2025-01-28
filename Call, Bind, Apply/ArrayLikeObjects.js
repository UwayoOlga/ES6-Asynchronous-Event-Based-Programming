/*Has indexed access to the elements and a non-negative length property to know the number of elements in it. 
These are the only similarities it has with an array.
Doesn't have any of the Array methods like push, pop, join, map, etc.
Task; 
Given an array-like object arrayLikeObject, write a function that converts it into a regular array. 
Use the apply method to apply the function to the arrayLikeObject and obtain the converted array. */

function convertToArray(arrayLikeObject) {

  return Array.prototype.slice.apply([], [arrayLikeObject]);
  
}
 