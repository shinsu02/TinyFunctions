// TinyFunctions
// Haswell 제작 (shinsu02@gmail.com, GitHub : shinsu02)

// 배열 페이지
module.exports.ArrayPage = class {
    constructor(t, s) {
        if (!t || t.constructor !== Array || !s || Number.isNaN(parseInt(s))) return undefined;
        this.array = t;
        this.pageSize = parseInt(s);
        this.maxPage = Number.isInteger(this.array.length / this.pageSize) ? parseInt(this.array.length / this.pageSize) : parseInt(this.array.length / this.pageSize) + 1;
        return this;
    };
    page(n) {
        if (typeof n !== 'undefined' && Number.isNaN(parseInt(n))) return undefined;
        const p = this.array.slice(parseInt(this.pageSize * n), parseInt(this.pageSize * ( n + 1 )));
        p.pageNumber = n;
        return p.length ? p : undefined;
    };
};

// 시간 계산
module.exports.calcTime = (t) => {
    if (!t || t.constructor !== String) return undefined;
    const unitStd = {
        days: [ '일', 'd', 'days', 'day' ],
        hours: [ '시간', '시', 'h', 'hours', 'hour' ],
        minutes: [ '분', 'm', 'minutes', 'minute' ],
        seconds: [ '초', 's', 'seconds', 'second' ],
        milliseconds: [ '밀리초', '밀리', 'ms', 'milli', 'milliseconds', 'millisecond' ]
    };
    const calculateStd = {
        days: (x) => Math.floor(x * 1000 * 60 * 60 * 24),
        hours: (x) => Math.floor(x * 1000 * 60 * 60),
        minutes: (x) => Math.floor(x * 1000 * 60),
        seconds: (x) => Math.floor(x * 1000),
        milliseconds: (x) => Math.floor(x)
    };
    const timeRaw = t.split(/ +/g).join('').split(/\D/).filter(x => x.length).map(x => parseInt(x));
    const unitRaw = t.split(/ +/g).join('').split(/\d/).filter(x => x.length);
    let time = 0;
    for (const i in unitRaw) {
        const unit = unitRaw[i];
        if (!timeRaw[i]) break;
        if (!Object.values(unitStd).find(x => x.includes(unit))) continue;
        time = time + calculateStd[this.incObj(unitStd, unit)](timeRaw[i]);
    };
    return time;
};

// 개체 비교
module.exports.compare = (t1, t2) => {
    if (typeof t1 === 'undefined' || typeof t2 === 'undefined') return undefined;
    return JSON.stringify(t1) === JSON.stringify(t2);
};

// 객체 값으로 키 찾기
module.exports.findObj = (t, k) => {
    if (!t || t.constructor !== Object || !k) return undefined;
    let r;
    for (let i in t) {
        if (JSON.stringify(t[i]) === JSON.stringify(k)) {
            r = i;
            break;
        };
    };
    return r;
};

// 객체 값에 포함 여부
module.exports.incObj = (t, k) => {
    if (!t || t.constructor !== Object || !k) return undefined;
    let r;
    for (let i in t) {
        if (JSON.stringify(t[i]).includes(JSON.stringify(k))) {
            r = i;
            break;
        };
    };
    return r;
};

// 시간차 구하기
module.exports.interval = (t1, t2, fr) => {
    const pos1 = new Date(t1),
        pos2 = new Date(t2);
    let fm = ( fr && fr.constructor === String ) ? fr : 'DDd - HH° MM\' SS.II"';
    const gap = pos2 - pos1;
    const v = {};
    v.ii = Math.abs(gap);       v.ss = parseInt(v.ii / 1000);   v.mm = parseInt(v.ss / 60); v.hh = parseInt(v.mm / 60); v.dd = parseInt(v.hh / 24);
    v.II = v.ii - v.ss * 1000;  v.SS = v.ss - v.mm * 60;        v.MM = v.mm - v.hh * 60;    v.HH = v.hh - v.dd * 24;    v.DD = v.dd;
    for (let i in v) fm = fm.replace(new RegExp(i, 'g'), v[i]);
    return fm;
};

// 무작위 문자열
module.exports.ranchar = (lr, sh) => {
    const l = (lr && !Number.isNaN(parseInt(lr))) ? lr : 10,
        char = (sh && sh.constructor === String) ? sh.split('') : '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
        a = [];
    for (let i = 0; i < l; i++) a.push(this.ransel(char));
    return a.join('');
};

// 무작위 정수
module.exports.random = (l, o) => {
    if (!l || Number.isNaN(parseInt(l)) || ( typeof o !== 'undefined' && Number.isNaN(parseInt(o)) )) return undefined;
    return Math.floor(Math.random() * l) + ( o ? o : 0 );
};

// 배열 무작위 선택
module.exports.ransel = (t) => {
    if (!t || t.constructor !== Array|| ( typeof o !== 'undefined' && Number.isNaN(parseInt(o)) )) return undefined;
    return t[Math.floor(Math.random() * t.length)];
};

// 시간으로 변환
module.exports.toTime = (t, fr) => {
    if (!t || Number.isNaN(parseInt(t))) return undefined;
    let fm = ( fr && fr.constructor === String ) ? fr : 'HH:MM:SS.II';
    const v = {};
    v.ii = Math.abs(parseInt(t));       v.ss = parseInt(v.ii / 1000);   v.mm = parseInt(v.ss / 60); v.hh = parseInt(v.mm / 60); v.dd = parseInt(v.hh / 24);
    v.II = v.ii - v.ss * 1000;  v.SS = v.ss - v.mm * 60;        v.MM = v.mm - v.hh * 60;    v.HH = v.hh - v.dd * 24;    v.DD = v.dd;
    for (let i in v) fm = fm.replace(new RegExp(i, 'g'), v[i]);
    return fm;
};