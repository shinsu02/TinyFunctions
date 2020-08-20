// toTime 예제
const { toTime } = require('../tinyFunctions.js');
console.log(toTime('1000')); // 0:0:1.0 반환
console.log(toTime(60000, 'MM분 = ss초')); // 1분 = 60초 반환