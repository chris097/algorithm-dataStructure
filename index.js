import { reverseString, reverseStringTwo } from "./strings/reverseString.js"

// const t1 = performance.now();

// console.log(reverseString('Hello world'));
    
// const t2 = performance.now();

// console.log(`${(t2 - t1) / 1000}`)

// const str = "hello world"
// console.log(str.substring(1) + str.charAt(0))

const str = 'hello world';

// console.log(str.charAt(0).toUpperCase() + str.slice(1))

// function cap(str) {
//     const d = str.split(" ").shift();
//     const g = str.split(" ").pop();

//     return `${d.charAt(0).toUpperCase() + d.slice(1)} ${g.charAt(0).toUpperCase() + g.slice(1)}`
// }
// console.log(cap('hello world'))

// function logAtleast5(n) {
//     for (let i = 1; i <= Math.max(5, n); i++){
//         console.log(i)
//     }
// }

// logAtleast5(20)


// const arr = "a, b, c,a"
// let obj = {}
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     if(obj[element])
// }



// function same(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false
//     } 
//     const obj = {}
//     const obj1 = {}
//     for (let i = 0; i < arr1.length; i++) {
//         const element = arr1[i];
//         (obj[element] += 1) || ( obj[element] = 1)
//     }

//     for (let i = 0; i < arr2.length; i++) {
//         const elem = arr2[i];
//         (obj1[elem] += 1) || ( obj1[elem] = 1)
//     }


//     console.log(obj1)
//     console.log(obj)
//     // for (let i = 0; i < arr2.length; i++) {
//     //     const element = arr2[i];
//     //     if (!obj[element]) {
//     //         return false
//     //     } {
//     //         obj[element] -= 1
//     //     }
//     // }
//     // return true

//     for (const key in obj) {
//         // if (Object.hasOwnProperty.call(object, key)) {
//         //     const element = object[key];
            
//         // }
//         if (!(key ** 2 in obj1)) {
//             return false
//         }
//         if (obj1[key ** 2] !== obj[key]){
//             return false
//         }
//     }
//     return true
// }

// let arr = 523

// const d = arr.toFixed().split("");
// let obj = {}

// for (let i = 0; i < d.length; i++) {
//     const element = d[i];
//     obj[element] = (obj[element] +1 ) || 1
// }

// console.log(obj)

// 


