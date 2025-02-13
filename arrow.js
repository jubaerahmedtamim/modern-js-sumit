// normal function
function number1(n){
    return n;
}
console.log(number1(10));
// simplest syntax of arrow function 
const number = n => n;
const numbers = (a, b) => a + b;
const numbers2 = (a, b) => {
    return a + b;
}
console.log(number(10))
console.log(numbers(10, 20))
console.log(numbers2(20, 30))

var javascript = {
    name: 'JavaScript',
    libraries : ["Angular","React", "Vue"],
    printLibraries: function(){
        this.libraries.forEach((a)=>{
            console.log(`${this.name} loves ${a}`);
        })
    }
}

javascript.printLibraries();