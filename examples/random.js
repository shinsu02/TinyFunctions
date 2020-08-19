// random 예제
const { random } = require('../tinyFunctions.js');
console.log(random(100)); // 0부터 99사이의 정수를 출력
console.log(random(100, 1)); // 1부터 100사이의 정수를 출력
process.exit(0);