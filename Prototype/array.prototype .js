

// Array.prototype is an object that serves as the prototype for all arrays
// below are the codes for adding a method called doubleValues to all arrays, which doubles each element my array

Array.prototype.doubleValues = function() {

    for (let i = 0; i < myArray.length; i++) {  

    }
    return this; //  Return the modified array for chaining
  };
  
  let myArray = [1, 2, 3];
  myArray.doubleValues();
  console.log(myArray); 
  
  let anotherArray = [10, 20, 30];
  anotherArray.doubleValues();
  console.log(anotherArray); 