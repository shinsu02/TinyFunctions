// compareArr 예제
const { compareArr } = require('../tinyFunctions.js');
const a1 = [ 'Hi!' ], a2 = [ 'Hi!' ], a3 = [ 'Hello!' ];
console.log(compareArr(a1, a2)); // 참 반환
console.log(compareArr(a1, a3)); // 거짓 반환