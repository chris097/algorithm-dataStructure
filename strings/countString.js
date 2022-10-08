/** 
    @param
    write a function which take in a string
    and returns counts of each character in the string
*/

// steps:
/** 
 * 
 * @param
 * make an object and returns it at the end
 * loop through the string 
 * check if the character exist if not return  1 or -1
 */

//example one
function charCount(str) {
    let obj = {};

    for (let i = 0; i < str.length; i++){
        let arr = str[i].toLowerCase()
        if (/[a-z0-9]/.test(arr)) {
            if (obj[arr] > 0) {
            obj[arr]++
        } else {
            obj[arr] = 1
        }
        }
    }
    return obj
}

//example 2
function charCount(str) {
    let obj = {};

    for (let i = 0; i < str.length; i++) {
        let arr = str[i].toLowerCase()
        if (/[a-z0-9]/.test(arr)) {
            obj[arr] = ++obj[arr] || 1;
        }
    }
    return obj
    };

