/**
 * @param
 * -- Sliding Window
 * this pattern involves creating a window which can either be array or number
 * from one position to another depending on a certain condition, the window 
 * either increases or closes (and a new window is created)
 * very useful for keeping track and subset of data in an array/string
 * 
 * an example 
 * 
 * write a function called maxSubArraySum which accepts an array of integers and a number
 * called n. the function should calculate the maximum sum of n consecutive element in the array
 */

// 0(n^2) time complexity 

function maxSubArraySum(arr, num) {
    if (num > arr.length) {
        return null;
    }

    let max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i++) {
        temp = 0
        for (let j = 0; j < arr.length; j++) {
            temp += arr[i + j]
        }
        if (temp > max) {
            max = temp
        }
    }
    return max
}

// 0(n)  time complexity

function maxSubArraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;

    for (let i = 0; i < num; i++) {  
        maxSum += arr[i]
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum;
}

console.log(maxSubArraySum([2,6,9,1,8,5,6,3], 2))