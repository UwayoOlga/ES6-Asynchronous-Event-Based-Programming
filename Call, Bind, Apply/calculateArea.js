/*Write a function to calculate the area of a rectangle with a fixed width. 
Use the bind method to create a new function with a width of 10 and calculate the area when the height is 5. */


function calculateArea(height) {
    return this.width * height;
}
 
const calculateAreaWithFixedWidth = calculateArea.bind({ width: 10 });
 
const area = calculateAreaWithFixedWidth(5);

console.log(area);  