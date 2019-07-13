const uniqueString = (str) => {
    const uniqueObj = {}
    const splitStr = str.split('');
    for (let i = 0; i < splitStr.length; i++) {
        const curr = splitStr[i]; 
        if (uniqueObj[curr] === undefined) {
            uniqueObj[curr] = 1;
        }else {
            return false;
        }
    }
    return true;
}
uniqueString('Vance');


// whitespace
// special char
const permutation = (str1, str2) => {
    if (str1.length !== str2.length) return false;
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}
permutation('good', 'dog');