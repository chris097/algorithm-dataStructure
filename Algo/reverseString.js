/**
    @param 
    write a function to reverse a string.
    three ways to reverse a string in JS
 */

// -1
export function reverseString(string) {
    const splitString = string.split("").reverse().join('');
    return splitString;
};
// -2
export function reverseStringTwo(str) {
    let reverseStr = '';
    for (let i = str.length - 1; i >= 0; i--){
        reverseStr += str[i]
    }
    return reverseStr;
};
export function reverseStringThree(str) {
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}