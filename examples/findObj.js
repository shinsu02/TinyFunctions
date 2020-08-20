// findObj 예제
const { findObj } = require('../tinyFunctions.js');
const o = { test: [ 'Hello, world!' ] };
console.log(findObj(o, [ 'Hello, world!' ])); // 'test' 반환
console.log(findObj(o, 'Hello, world!')); // 반환 안함