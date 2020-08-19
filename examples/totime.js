// totime 예제
const { totime } = require('../tinyFunctions.js');
console.log(totime('1000')); // 0:0:1.0 출력
console.log(totime(60000, 'MM분 = ss초')); // 1분 = 60초 출력
process.exit(0);