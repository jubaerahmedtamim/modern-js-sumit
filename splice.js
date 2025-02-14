/*
    The splice method in javascript is used to add, remove & replace elements in an array. 
    It modifies the original array and returns the removed elements.
    syntax: 
            array.splice(startIndex, deleteCount, item1, item2, item3, ... )
            here,
                startIndex = The index where the changes will begin.
                deleteCount = The number of elements to remove.
                item1, item2 ... = items to insert at startIndex. 
*/

let todoList = ["Buy Groceries", "Clean Room", "Pay Bills", "Call Mom"];
const result = todoList.splice(2, 2);

console.log("TODO list after remove: ",todoList)
console.log("Removed TODO:",result)

// Adding a new task at the begining
todoList.splice(0, 0, 'Home Work')

console.log(todoList)