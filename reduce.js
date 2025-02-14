

const  nubmers = [1, 2, 3, 4, 5, 6, 7];

const sum = nubmers.reduce((prevValue, currentValue, currentIndex, arr)=>{
    return prevValue + currentValue;
}, 0)

console.log(sum)
