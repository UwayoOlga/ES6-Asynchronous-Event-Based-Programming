/*Create a function to capitalize the first letter of a string.
 Use the call method to capitalize the first letter of the name "john." */
function capitalizeFirstLetter() {
    const firstLetter = this.charAt(0).toUpperCase();
    const restOfString = this.slice(1);
    return firstLetter + restOfString;
}
 
const name = "john.";
const capitalizedName = capitalizeFirstLetter.call(name);

console.log(capitalizedName);  