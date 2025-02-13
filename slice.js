/*
    1. slice method works on array as well as strings. 
    2. It returns an array of array and single string for string value.
    3. It doesn't modify the original or main array.
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numbers.slice(0,3))
console.log(numbers.slice(-5, 6))
console.log(numbers)

// example of slice on strings.
const name = "Junaina"
console.log(name.slice(0, 5))
console.log(name)