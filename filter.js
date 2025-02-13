/*
filter method returns an array of condition fullfilled elements.
This method does not change main array.
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const result = numbers.filter(function(currentValue, currentIndex, arr){
    return currentValue > 8;
})

console.log(result)