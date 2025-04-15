function orderFood(dish) {
    return new Promise((resolve, reject) => {
      console.log(`Ordering ${dish}...`);

      setTimeout(() => {
        const isAvailable = Math.random() > 0.3;  
  
        if (isAvailable) {
          const food = `${dish} is ready!`;
          resolve(food);  
        } else {
          const error = `Sorry, ${dish} is not available.`;
          reject(error);  
        }
      }, 2000); 
    });
  }
  
  console.log("Placing the order...");
  orderFood("Pizza")
    .then((result) => {
      console.log("Success:", result);
      console.log("Enjoy your meal!");
    })
    .catch((error) => { 
      console.error("Error:", error);
      console.log("Maybe order something else?");
    });
  
  console.log("Waiting for the food...");  