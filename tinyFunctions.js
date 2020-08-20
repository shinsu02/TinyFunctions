// TinyFunctions
// Haswell 제작 (shinsu02@gmail.com, GitHub : shinsu02)

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

// 무작위 문자열
module.exports.ranchar = (lr, sh) => {
    const l = (lr && !Number.isNaN(parseInt(lr))) ? lr : 10,
        char = (sh && sh.constructor === String) ? sh.split('') : '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
        a = [];
    for (let i = 0; i < l; i++) a.push(this.ransel(char));
    return a.join('');
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

// 시간으로 변환
module.exports.totime = (t, fr) => {
    if (!t || Number.isNaN(parseInt(t))) return undefined;
    let fm = ( fr && fr.constructor === String ) ? fr : 'HH:MM:SS.II';
    const v = {};
    v.ii = Math.abs(parseInt(t));       v.ss = parseInt(v.ii / 1000);   v.mm = parseInt(v.ss / 60); v.hh = parseInt(v.mm / 60); v.dd = parseInt(v.hh / 24);
    v.II = v.ii - v.ss * 1000;  v.SS = v.ss - v.mm * 60;        v.MM = v.mm - v.hh * 60;    v.HH = v.hh - v.dd * 24;    v.DD = v.dd;
    for (let i in v) fm = fm.replace(new RegExp(i, 'g'), v[i]);
    return fm;
};

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