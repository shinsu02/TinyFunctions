// incobj 예제
const { incObj } = require('../tinyFunctions.js');
const o = { first: 'foo', second: [ 'bar' ], third: 42 };
console.log(incObj(o, 'foo')); // 'first' 반환
console.log(incObj(o, 'bar')); // 'second' 반환
console.log(incObj(o, 42)); // 'third 반환