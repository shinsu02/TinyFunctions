// calctime 예제
const { calcTime } = require('../tinyFunctions.js');
console.log(calcTime('1분')); // 60000 반환
console.log(calcTime('1일 1일')); // 172800000 반환
console.log(calcTime('72초53분99일2시간 1밀리초')); // 8564052001 반환