// interval 예제
const { interval } = require('../tinyFunctions.js');
console.log(interval(Date.now() - 1000, Date.now())); // 0d - 0° 0' 1.0" 반환
console.log(interval(Date.now() - 60000, Date.now(), 'MM분 = ss초')); // 1분 = 60초 반환