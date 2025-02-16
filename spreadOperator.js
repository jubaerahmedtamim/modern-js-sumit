//  spread Operator

const obj1 = {
    name: 'audi',
}

const obj2 = {
    manufactureYear :'1999'
}

const obj = { ...obj1, ...obj2 }
console.log(obj)
console.log(obj1)
console.log(obj2)

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arrCopyOfArr1 = [...arr1] // exact copy of arr1

const array = [...arr1, ...arr2]

console.log(array)
console.log(arr1)
console.log(arr2)
console.log(arrCopyOfArr1)
