/**
 * 
 * @param
    write a function called same, which accepts two arrays.
    the function should return true if every value in the array has
    a corresponding value squared in the second array.
    the frequency of the value must be the same.
 */

    // 0(n) time complexity

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    } 
    let obj1 = {}
    let obj2 = {}

    for (const val of arr1) {
        obj1[val] = (obj1[val] || 0) +1
    }

    for (const val of arr2) {
        obj2[val] = (obj2[val] || 0) + 1;
    }
    // console.log('obj1',obj1)
    // console.log('obj2', obj2)
    for (const key in obj1) {
        if (!(key ** 2 in obj2)) {
            return false;
        } 
        if (obj2[key ** 2] !== obj1[key]) {
            return false;
        }
    }
    return true;
}

//example 2 -> 0(n) time complexity

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }
    const obj = {}
    const obj1 = {}

    // loop - through {arr1} the array count eash value
    for (let i = 0; i < arr1.length; i++) {
        const element = arr1[i];
        (obj[element] += 1) || (obj[element] = 1)
    }
     // loop - through {arr1} the array count eash value
    for (let i = 0; i < arr2.length; i++) {
        const elem = arr2[i];
        (obj1[elem] += 1) || (obj1[elem] = 1)
    }

    //loop through the object, check for the squared number in the next {arr2}
    for (const key in obj) {
        if (!(key ** 2 in obj1)) {
            return false
        }
        if (obj1[key ** 2] !== obj[key]) {
            return false
        }
    }
    return true
}
// console.log(same([1,2,3,4], [1,4,9,16]))