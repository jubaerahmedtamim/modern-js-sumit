// desctrutring in js

const user = {
    id: 335,
    name: "Shakib",
    age: 21,
    education: {
        // degree: 'Masters'
    }
}

const { education:{degree: x="Not available"} } = user;

console.log(x)


const numbers = [1, 2, 3, 4, 5];

const [a, b, c, d, e] = numbers;
const [p, q, r, s, t] = numbers;

console.log(a,b,c,d)
console.log(p,q,r,s)