
/**
 * rest Operator works on function parameter
 * if we use rest operator in function, it will return an array of rest parameters.  
 */


function myFun(a, ...params){
    console.log(a)
    console.log(params) // Output: [1, 4, 5, 6]
}

myFun(4,  1, 4, 5, 6)