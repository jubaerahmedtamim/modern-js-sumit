const number1 = [1, 2, 3];
const number2 = [4, 5, 6];
const number3 = [7, 8, 9];
const number4 = [10, 11, 12];

const result = number1.concat(number2, number3)
console.log(number1)
console.log(number2)
console.log(number3)
console.log(number4)

console.log(result)

const result2 = [...number1, ...number2, ...number3];
console.log(number1)
console.log(number2)
console.log(number3)
console.log(number4)

console.log(result2)