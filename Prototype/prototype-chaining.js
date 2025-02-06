/*When you try to access a property on an object, and that object doesn't have the property directly, 
JavaScript looks for the property in the object's prototype. If the prototype doesn't have the property either, it looks in the prototype's prototype, and so on, up the chain.   
*/


let animal = {
    type: "Animal",
    eats: true,
    makeSound: function() {
      console.log("Generic animal sound");
    }
  };
  
  let dog = Object.create(animal); // dog's prototype is animal
  dog.breed = "Golden Retriever";
  dog.makeSound = function() {
    console.log("Woof!");
  };
  
  let puppy = Object.create(dog); // puppy's prototype is dog
  puppy.age = 1;
  
  console.log(puppy.age);  
  console.log(puppy.breed);  
  console.log(puppy.type);  
  puppy.makeSound();      
  console.log(dog.eats);     