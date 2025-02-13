const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const result = numbers.find(function(currentValue, currentIndex, arr){
    if(currentValue > 4){
        console.log(currentIndex, arr)
        return currentValue
    }
})

// console.log(result)



class Student{
    constructor(name, age){
        this.studentName = name;
        this.studentAge = age;
    }
    test(){
        console.log('hello')
    }
    exampleFunction(){
        let array = [1, 2, 3];
        array.find(function(){
            this.test();
        }, this)
    }
}

/* 
if we use a normal callback function inside a find method we need to use "this" keyword after callback function otherwise if we use arrow funciton then no need to call this after arrow funttion.
*/

const student1 = new Student("Junu", 3);

student1.exampleFunction();