/*Write a function that calculates the discounted price of a product with a fixed discount percentage. 
Use the bind method to create a new function with a discount of 10%. 
Calculate the discounted price for a product with an initial price of $50 and $100 */
  
 function calculateDiscountedPrice(price, discount) {
    return price - (price * discount / 100);
  }
   
  const discount10 = calculateDiscountedPrice.bind(null, undefined, 10);
   
  const price1 = 50;
  const price2 = 100;
  
  console.log(discount10(price1)); 
  console.log(discount10(price2)); 
  