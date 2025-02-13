const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];


const result = numbers.findIndex(function(currentValue, currentIndex, arr){
    return currentValue > 6;
})
console.log(result)