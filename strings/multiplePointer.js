/**
 * @param
 * Multiple Pointers
 * Creating pointers or values that could correspond to an index or position
 * and move toward the beginning, end or middle based on a certain condition\
 * 
 * Very efficient for solving problems with minimal space complexity as well
 * 
 * example: 
 * write a function calles sumZero which accepts a sorted array of integers.
 * the function should first find the first pair where the sum is 0. Return
 * array that includes both values that sum to zero or undefined if a pair 
 * does not exist
 */

// 0(n^2) approach

function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]]
            }
        }      
    }
}

// 0(n) approach

function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1
    
    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum === 0) {
          return [arr[left], arr[right]]
        } else if (sum > 0) {
            right--
        } else {
            left++
       }
    }
}


console.log(sumZero([-1,-3,2,3]))