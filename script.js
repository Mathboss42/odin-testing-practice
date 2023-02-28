export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function reverseString(str) {
    return str.split('').reverse().join('');
}

export const calculator = {
    add(a, b) {
        return a + b; 
    },

    subtract(a, b) {
        return a - b; 
    },

    multiply(a, b) {
        return a * b; 
    },

    divide(a, b) {
        return a / b; 
    },
}

export function ceasarCipher(str, shift) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'; //pasted alphabet twice to cover cases where shift goes beyond z
    let alArr = alphabet.split('');
    let result = [];
    
    if (shift === 0) return str;
    if (shift < 0 || shift > 25) throw new Error('Invalid shift');

    for (let letter of str) {
        if (alArr.includes(letter)) {
            letter = alArr[alArr.indexOf(letter) + shift];
            result.push(letter);
        } else {
            result.push(letter);
        }
    }

    return result.join('');
}

export function analyzeArray(arr) {
    const result = {
        average: getAverage(arr),
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length
    }
    console.log(result);
    return result;
}

function getAverage(arr) {
    const sum = arr.reduce((a, b) => a + b);

    return sum / arr.length;
}