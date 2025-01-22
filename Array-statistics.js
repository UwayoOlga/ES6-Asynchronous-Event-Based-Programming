/* You are given an array of numbers. Your task is to implement a function called arrayStats that returns an object containing various statistics about the array.

The returned object should have the following properties:
sum: The sum of all numbers in the array.
average: The average of all numbers in the array (rounded to two decimal places).
min: The minimum value in the array.
max: The maximum value in the array.

Example:
arrayStats([1, 2, 3, 4, 5]); // should return { sum: 15, average: 3.00, min: 1, max: 5 }
*/
function arrayStats(numbers) {
    if (numbers.length === 0) {
        return { sum: 0, average: 0, min: null, max: null };
    }

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = parseFloat((sum / numbers.length).toFixed(2));
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);

    return { sum, average, min, max };
}

// Example usage:
console.log(arrayStats([1, 2, 3, 4, 5])); 