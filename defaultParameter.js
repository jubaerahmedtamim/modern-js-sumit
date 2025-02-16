function myFun (x=10) {
    return x;
}

console.log(myFun(3))
console.log(myFun())
console.log(myFun(undefined)) // Output: 10
console.log(myFun(null)) // Output: null