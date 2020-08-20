// ArrayPage 예제
const { ArrayPage } = require('../tinyFunctions.js');
const a = [ 'Hi!', 'I', 'am', 'a', 'array!', 'foo', 'bar', 'Hello, ', 'world!', 'hahaha' ];
const ap = new ArrayPage(a, 3);
let i = 0;
console.log(`RAW: [ '${a.join(`', '`)}' ]\nItems per Page: 3\nForward: type 'forw'\nBackward: type 'back'`);
console.log(ap.page(i));
const pm = () => {
    process.openStdin().once('data', r => {
        const tr = r.toString().split('');
        const t = tr.splice(0, tr.length - 2).join('');
        if (t === 'forw' && ap.page(i + 1)) i++;
        else if (t === 'back' && ap.page(i - 1)) i--;
        console.log(ap.page(i));
        pm();
    });
};
pm();