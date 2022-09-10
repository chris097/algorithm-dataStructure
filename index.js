import { reverseString, reverseStringTwo } from "./Algo/reverseString.js"

// const t1 = performance.now();

// console.log(reverseString('Hello world'));
    
// const t2 = performance.now();

// console.log(`${(t2 - t1) / 1000}`)

// const str = "hello world"
// console.log(str.substring(1) + str.charAt(0))

const str = 'hello world';

// console.log(str.charAt(0).toUpperCase() + str.slice(1))

function cap(str) {
    const d = str.split(" ").shift();
    const g = str.split(" ").pop();

    return `${d.charAt(0).toUpperCase() + d.slice(1)} ${g.charAt(0).toUpperCase() + g.slice(1)}`
}
console.log(cap('hello world'))