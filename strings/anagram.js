/**
 * @param
 * write a function to determine if the second string is anagram
 * of the first.
 * 
 * what's anagram?
 *  a word spelled backwards
 * 
 * note: time complexity = 0(n)
*/

function anagram(first, second) {
    // if lengths are not equal return false
    if (first.length !== second.length) {
        return false
    }

    const lookup = {};

    // count each letter
    for (let index = 0; index < first.length; index++) {
        const element = first[index];
        lookup[element] = (lookup[element] + 1) || 1;
    }

    for (let index = 0; index < second.length; index++) {
        const element = second[index];
        if (!lookup[element]) {
            return false;
        } else {
            lookup[element] - 1;
        }
    }

    return true;
};

anagram('anagram', 'margana')