/**
 * 1. The map method returns a new array.
 * 2. The map method doesn't modifies the orignial array 
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const result = numbers.map(function(num){
    return num * 2;
})

console.log(numbers)
console.log(result)