/**
 * @param
 * 
 * implement a function called countUniqueValues, which accepts a sorted array
 * and count the unique values in the array, this  can be negative value in the
 * array but it must be sorted.
 */

function countUniqueValue(arr) {
    let i = 0
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1
}

console.log(countUniqueValue([1,1,2,2,3,3,4,4,4]))