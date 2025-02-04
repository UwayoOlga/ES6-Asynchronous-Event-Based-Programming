//Implement a simple inheritance chain using prototypes and demonstrate how properties/methods are inherited.

// Base constructor function
function Animal(name) {
    this.name = name;
  }
  
  // Add a method to Animal's prototype
  Animal.prototype.speak = function() {
    console.log(this.name + " makes a noise.");
  };
  
  // Derived constructor function
  function Dog(name, breed) {
    // Call the Animal constructor to initialize the name property
    Animal.call(this, name);
    this.breed = breed;
  }
  
  // Set Dog's prototype to an object that inherits from Animal's prototype
  Dog.prototype = Object.create(Animal.prototype);
  
  // Correct the constructor pointer because it points to Animal
  Dog.prototype.constructor = Dog;
  
  // Add a method specific to Dog
  Dog.prototype.bark = function() {
    console.log(this.name + " barks.");
  };
  
   
  