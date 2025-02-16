

const nubmers = [1, 2, 3, 4, 5, 6, 7];

const sum = nubmers.reduce((prevValue, currentValue, currentIndex, arr) => {
    return prevValue + currentValue;
}, 0)

console.log(sum)

/**
 * Suppose you are building an expense tracker, and you need to calculate the total amount spent in a month.
 */

const expenses = [
    { category: "Rent", amount: 12000 },
    { category: "Groceries", amount: 3500 },
    { category: "Electricity", amount: 1500 },
    { category: "Internet", amount: 1000 },
];


const totalExpense = expenses.reduce((prevValue, currentValue) =>{
    return prevValue + currentValue.amount;
}, 0)

console.log(totalExpense) // Output: 180000
