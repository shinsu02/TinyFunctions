# DOCUMENT

## Class: ArrayPage

배열을 페이지로 나누어 관리합니다.

``` js
new ArrayPage(t, s);
```

| 매개변수 | 필수 여부 | 종류 | 기본값 | 설명 |
| -------- | --------- | ---- | ------ | ---- |
| t | 필수 | Array | *없음* | 대상 배열 |
| s | 필수 | Number, String | *없음* | 페이지당 아이템 수 |

``` js
const a = [ 'Hi!', 'I', 'am', 'a', 'array!', 'foo', 'bar', 'Hello, ', 'world!', 'hahaha' ];
const ap = new ArrayPage(a, 3); // 배열 a를 한 페이지당 3개의 아이템 기준으로 나눔
ap.page(0); // 0번째 페이지 반환 :: [ 'Hi!', 'I', 'am' ]
ap.page(1); // 1번째 페이지 반환 :: [ 'a', 'array!', 'foo' ]
```


## calcTime

주어진 문자열을 시간으로 변환합니다.

``` js
calcTime(t);
```

| 매개변수 | 필수 여부 | 종류 | 기본값 | 설명 |
| -------- | --------- | ---- | ------ | ---- |
| t | 필수 | String | *없음* | 대상 문자열 |

``` js
calcTime('1분'); // 60000 반환
calcTime('1일 1일'); // 172800000 반환
calcTime('72초53분99일2시간 1밀리초'); // 8564052001 반환
```


## compare

두 개의 개체를 비교합니다.

``` js
compare(t1, t2);
```

| 매개변수 | 필수 여부 | 종류 | 기본값 | 설명 |
| -------- | --------- | ---- | ------ | ---- |
| t1 | 필수 | Any | *없음* | 비교 대상 |
| t2 | 필수 | Any | *없음* | 비교 대상 |

``` js
const a1 = [ 'Hi!' ], a2 = [ 'Hi!' ], a3 = 'Hi!';
compare(a1, a2); // 참 반환
compare(a1, a3); // 거짓 반환
```


## findObj

객체에서 지정된 값과 일치하는 값을 가진 키의 이름을 반환합니다.

``` js
findObj(t, k);
```

| 매개변수 | 필수 여부 | 종류 | 기본값 | 설명 |
| -------- | --------- | ---- | ------ | ---- |
| t | 필수 | Object | *없음* | 대상 객체 |
| k | 필수 | Any | *없음* | 검색 기준 |

``` js
const o = { test: [ 'Hello, world!' ] };
findObj(o, [ 'Hello, world!' ]); // 'test' 반환
findObj(o, 'Hello, world!'); // 반환 안함
```


## incObj

객체에서 특정 값이 포함되어 있는 키의 이름을 반환합니다.

``` js
incObj(t, k);
```

| 매개변수 | 필수 여부 | 종류 | 기본값 | 설명 |
| -------- | --------- | ---- | ------ | ---- |
| t | 필수 | Object | *없음* | 대상 객체 |
| k | 필수 | Any | *없음* | 검색 기준 |

``` js
const o = { first: 'foo', second: [ 'bar' ], third: 42 };
incObj(o, 'foo'); // 'first' 반환
incObj(o, 'bar'); // 'second' 반환
incObj(o, 42); // 'third 반환
```


## interval

두 시간의 차이를 구해 반환합니다.

``` js
interval(t1, t2, fr);
```

| 매개변수 | 필수 여부 | 종류 | 기본값 | 설명 |
| -------- | --------- | ---- | ------ | ---- |
| t1 | 필수 | Number, String, Date | *없음* | 첫번째 시간 지점 |
| t2 | 필수 | Number, String, Date | *없음* | 두번째 시간 지점 |
| fr | 선택 | String | String `DDd - HH° MM\' SS.II"` | 형식 |

*형식에 대한 설명은 아래 `공통 사항`을 참고해 주세요.*

``` js
interval(Date.now() - 1000, Date.now()); // 0d - 0° 0' 1.0" 반환
interval(Date.now() - 60000, Date.now(), 'MM분 = ss초'); // 1분 = 60초 반환
```


## ranchar

무작위 문자열을 반환합니다.

``` js
ranchar(lr, sh);
```

| 매개변수 | 필수 여부 | 종류 | 기본값 | 설명 |
| -------- | --------- | ---- | ------ | ---- |
| lr | 선택 | Number | Number `10` | 문자열의 길이 |
| sh | 선택 | String | String `1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ` | 문자표 |

``` js
ranchar(); // 1, 2, 3, ~, a, b, c, ~, X, Y, Z로 이루어진 10자리의 무작위 문자열 반환
ranchar(2048); // 1, 2, 3, ~, a, b, c, ~, X, Y, Z로 이루어진 2048자리의 무작위 문자열 반환
ranchar(42, 'ㄱㄴㄷㄹ'); // ㄱ, ㄴ, ㄷ, ㄹ로 이루어진 42자리의 무작위 문자열 반환
```


## random

무작위의 정수를 반환합니다.

``` js
random(l, o);
```

| 매개변수 | 필수 여부 | 종류 | 기본값 | 설명 |
| -------- | --------- | ---- | ------ | ---- |
| l | 필수 | Number | *없음* | 무작위 수의 최댓값 - 1 |
| o | 선택 | Number | Number `0` | 오프셋 |

``` js
random(100); // 0부터 99사이의 정수를 반환
random(100, 1); // 1부터 100사이의 정수를 반환
```


## ransel

주어진 배열에서 무작위의 값을 선택해 반환합니다.

``` js
ransel(t);
```

| 매개변수 | 필수 여부 | 종류 | 기본값 | 설명 |
| -------- | --------- | ---- | ------ | ---- |
| t | 필수 | Array | *없음* | 대상 배열 |

``` js
const t = [ 'Hi', 'i', 'am', 'a', 'array!' ];
ransel(t); // 'Hi', 'i', 'am', 'a', 'array!' 중 하나를 반환
```


## toTime

정수를 시간으로 변환해 반환합니다.

``` js
toTime(t, fr);
```

| 매개변수 | 필수 여부 | 종류 | 기본값 | 설명 |
| -------- | --------- | ---- | ------ | ---- |
| t | 필수 | Number, String | *없음* | 변환할 대상 (정수) |
| fr | 선택 | String | String `HH:MM:SS.II` | 형식 |

*형식에 대한 설명은 아래 `공통 사항`을 참고해 주세요.*

``` js
toTime('1000'); // 0:0:1.0 반환
toTime(60000, 'MM분 = ss초'); // 1분 = 60초 반환
```


# 공통 사항

## 시간 형식
시간 형식은 아래 표와 같이 사용합니다.
| 값 | 이름 | RAW |
| -- | ---- | --- |
| ii | 절대 밀리초 | `Math.abs(...)` |
| ss | 절대 초 | `parseInt(ii / 1000)` |
| mm | 절대 분 | `parseInt(ss / 60)` |
| hh | 절대 시 | `parseInt(mm / 60)` |
| dd | 절대 일 | `parseInt(dd / 24)` |
| II | 순수 밀리초 | `ii - ss * 1000` |
| SS | 순수 초 | `ss - mm * 60` |
| MM | 순수 분 | `mm - hh * 60` |
| HH | 순수 시 | `hh - dd * 24` |
| DD | 순수 일 | `dd` |