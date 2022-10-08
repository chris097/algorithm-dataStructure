/**
 * @param
 * 
 * Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
 * Your solution MUST have the following complexities:
 * Time: O(N)
 * 
 * Sample Input:

    sameFrequency(182,281) // true
    sameFrequency(34,14) // false
    sameFrequency(3589578, 5879385) // true
    sameFrequency(22,222) // false
 */

function sameFrequency(first, second) {
    const num1 = first.toFixed().split("");
    const num2 = second.toFixed().split("");

    if (num1.length !== num2.length) {
        return false
    }
    const obj = {}
    const obj1 = {}

    for (let i = 0; i < num1.length; i++) {
        const element = num1[i];
        obj[element] = (obj[element] +1) || 1 
    }
    for (let i = 0; i < num2.length; i++) {
        const element = num2[i];
        obj1[element] = (obj1[element] +1) || 1 
    }
    for (const key in obj) {
        if (!(key in obj1)) {
            return false
        }
        
    }
    return true
}

console.log(sameFrequency(22,222))