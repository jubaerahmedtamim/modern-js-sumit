/**
*   for loop, for in, for of 
    
 */
let i = 0;
for( ; ; i++){
    if(i < 10){
        console.log(i)
    }else{
        break;
    }
}


// for in loop works on objects
/*
    Dot notation requires a literal prototype name, while for in loop gives dynamic property names as strings. 
    If i use dot notaion it wil return undefined. 
    So, in a for...in loop, always use bracket notation (obj[key]) to dynamically access object properties.
*/

const myObj = {
    name: "Javascript",
    estd: '1995',
    founder: 'Brendan Eich'
}


for(property in myObj){
    console.log(myObj[property])
}


// for of loop
/**
 * If we use for...in loop to an array it will return array element index.
 * & if we use for...of loop with an array then it will retrun array element
 */

const myArr = ['Akash', "Batash", "Latas"];

for(element in myArr){
    console.log(`Element index: ${element} : value is ${myArr[element]}`)
}

for(element of myArr){
    console.log(element)
}





