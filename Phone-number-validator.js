/*Create a function called validatePhoneNumber that takes a string as input and returns true if the string represents a valid phone number and false otherwise.

A valid phone number must satisfy the following conditions:
It must be exactly 10 digits long (no more, no less).
It can optionally include hyphens - or spaces at specific positions: after the 3rd digit and after the 6th digit.
 */
function validatePhoneNumber(phoneNumber) {
     
    const regex = /^(?:\d{3}-?\d{3}-?\d{4}|\d{3} ?\d{3} ?\d{4}|\d{10})$/;
 
    return regex.test(phoneNumber);
}
 
console.log(validatePhoneNumber("1234567890"));  
 