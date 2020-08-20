// incobj 예제
const { incobj } = require('../tinyFunctions.js');
const o = { first: 'foo', second: [ 'bar' ], third: 42 };
console.log(incobj(o, 'foo')); // 'first' 반환
console.log(incobj(o, 'bar')); // 'second' 반환
console.log(incobj(o, 42)); // 'third 반환