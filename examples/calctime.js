// calctime 예제
const { calctime } = require('../tinyFunctions.js');
console.log(calctime('1분')); // 60000 반환
console.log(calctime('1일 1일')); // 172800000 반환
console.log(calctime('72초53분99일2시간 1밀리초')); // 8564052001 반환