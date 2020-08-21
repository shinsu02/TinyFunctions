// compare 예제
const { compare } = require('../tinyFunctions.js');
const a1 = [ 'Hi!' ], a2 = [ 'Hi!' ], a3 = 'Hi!';
console.log(compare(a1, a2)); // 참 반환
console.log(compare(a1, a3)); // 거짓 반환