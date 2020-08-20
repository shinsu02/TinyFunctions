// ranchar 예제
const { ranchar } = require('../tinyFunctions.js');
console.log(ranchar()); // 1, 2, 3, ~, a, b, c, ~, X, Y, Z로 이루어진 10자리의 무작위 문자열 반환
console.log(ranchar(2048)); // 1, 2, 3, ~, a, b, c, ~, X, Y, Z로 이루어진 2048자리의 무작위 문자열 반환
console.log(ranchar(42, 'ㄱㄴㄷㄹ')); // ㄱ, ㄴ, ㄷ, ㄹ로 이루어진 42자리의 무작위 문자열 반환