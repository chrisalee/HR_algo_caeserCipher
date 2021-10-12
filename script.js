/*
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

const caesarCipher = (s, k) => {
    s = s.split('');
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const upperLetters = letters.toUpperCase();
    const lowerCipher = letters.slice((k % letters.length), letters.length).concat(letters.slice(0, (k % letters.length)));
    const upperCipher = upperLetters.slice((k % upperLetters.length), upperLetters.length).concat(upperLetters.slice(0, (k % upperLetters.length)));
    const allLetters = letters + upperLetters;
    const cipherKey = lowerCipher + upperCipher;
    // console.log(cipherKey)

    let decoded = [];
    let indexString = [];
    for(let i = 0; i < s.length; i++) {
        if(parseInt(allLetters.indexOf(s[i])) < 0) {
            indexString.push(s[i])
        } else {
            indexString.push(parseInt(allLetters.indexOf(s[i])));    
        }
    }
    // console.log(indexString);
    for(let i = 0; i < indexString.length; i++) {
        if(Number.isInteger(indexString[i])) {
            decoded.push(cipherKey[indexString[i]])
        } else {
            decoded.push(indexString[i]);
        }
    }
    // console.log(decoded.join(''));
    return decoded.join('')
}
