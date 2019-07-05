const string = 'HELLO world!';

const reverseCase = (str) => {
    const reverseCaseArray = [];
    for (let i = 0; i < str.length; i++) {
        if (typeof str.charAt(i) !== 'string' || str.charAt(i) === ' ' || typeof str.charAt(i) === 12) {
          reverseCaseArray.push(str.charAt(i));
        }
        else if (str.charAt(i) == str.charAt(i).toUpperCase()){
            reverseCaseArray.push(str.charAt(i).toLowerCase());
        }else {
            reverseCaseArray.push(str.charAt(i).toUpperCase());
        }
    }
    const reverseCaseProduct = reverseCaseArray.join('');
    return reverseCaseProduct;
}
reverseCase(string); // <--- hello WORLD!



 