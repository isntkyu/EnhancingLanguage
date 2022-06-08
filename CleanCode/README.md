- 클린 코드

  - 타인이 정의한 답 의심하기.

- Node.js: 크롬v8 자바스크립트 엔진으로 빌드된 런타임

- var: 함수단위 스코프 vs let, const: 블록 단위

- const: 재할당 불가능 객체, 배열등 레퍼런스값 조작 가능

- 임시변수지양

  - 함수 한번더 추상화해서 사용해서 임시변수 조작의 유혹에서 벗어남
  - 명령형으로 가득한 로직에서 벗어남
  - 디버깅 힘듦
  - 추가적인 코드작성의 유혹
  - 해결책
    - 함수나누기
    - 바로 리턴
    - 고차 함수(map, filter, reduce)
    - 선연형

- 호이스팅: 선언과 할당 분리 (런타임 시기), 선언이 런타임시 끌어올려짐
  - 코드작성과 런타임에서 의도한 스코프가 다름
  - 함수도 호이스팅됨
  - const 함수 표현식 추천
  - var를 그냥 쓰지말자

---

### 타입

- primitive vs reference
- typeof: 레퍼런스 밸류 감별하기 어려움

  - ex) typeof null : object

- instanceof : 객체에 용이
- Object.prototype.toString.call()

- undefined vs null

  - null은 0으로 사용될 수 있음, undefined는 NaN
  - 둘 다 !연산자를 통해 boolean으로 변환됨

- parseInt 사용자 두번째 인자에 n진수 꼭 입력추천(10진수가 기본값은 아님)

- 암묵적인 형변환을 명시적으로 하자~!

- isNaN 문제 많음.
  - 은 숫자가 맞으면 false 반환이라 헷갈림.
  - Number.isNaN 을 활용하면 더욱 엄격한 검사가 가능함.

---

### 경계

- min, max

  - 최소, 최대값 상수 선언
  - 최소, 최대 포함여부 결정 후 네이밍에 포함시키기.

- begin, end

  - 예시: 달력

- first, last

  - 시작과 끝 사이의 요소들의 규칙등에 대한 보장이 없음.

- prefix, suffix

  - 접두, 접미사 (네이밍)
  - 프라이빗한 변수 과거 \_name 현재 #name 지원
  - 라이브러리 차원의 prefix도 있음

- 매개변수의 순서가 경계다.
  - 호출하는 함수의 네이밍과 인자의 순서를 고려한다.
  - 매개변수를 2개가 넘지 않도록 한다.
  - arguments, rest parameter rhfu
  - 매개변수를 객체에 담기.
  - 래핑하는 함수

---

### 분기

- 삼항연산자

  - 삼항연산자의 중복 -> switch case
  - nullable 한 상황

- Truthy & falsy

- 단축 평가: 논리연산자를 잘 사용하자

  - and: false 만나면 뒤의 조건 도달하지않음.
  - or: true 만나면 뒤의 조건 도달하지않음.

- else if & else 피하기

  - else if -> else { if() } (같은 동작)
  - 늘어지면 switch
  - if... if... if... 이게 나을 수 있음
  - 위의 if 에 걸리면 else 안써도됨

- early return

  - 함수를 미리 종료함으로써 사람이 사고하기 편함.

- 부정 조건문 지양.

  - ex) if(!isNaN(3)) "숫자입니다." -> isNumber 함수 만들기 / typeof 3 === 'number'
  - 생각을 여러번 해야할 수 있다.
  - 프로그래밍 언어 자체로 if 문이 처음부터 오고 true 부터 실행시키기 때문.
  - early return, 유효성 검증의 경우 사용하기도 함.

- Default Case

  - ex) safeParseInt(number, radix) {return parseInt(number, radix || 10);}
  - 프론트 엔드의 경우 사용자의 실수도 고려해야할 수 있음

- 명시적인 연산자 사용.

  - 연산사 우선순위를 외우기보다 괄호 등을 활용해 명시적으로 표시하는 것이 바람직.
  - number++; > number = number + 1;
  - 예측 가능하고 디버깅 쉬운코드

- null 병합 연산자 ??

  - null, undefined 평가 시에만 사용해야한다.
  - || 연산자와 사용시 에러 (괄호 처리해야함)

- 드모르간의 법칙
  - !(A && B) === !A || !B

---

### 배열

- 자바스크립트의 배열은 객체다.

- Array.isArray 로 체크

- Array.length

  - arr.length = 10; <= 이렇게 할당하면 배열 크기가 늘어남
  - length는 배열의 마지막 인덱스라는 의미에 가까움.
  - Array.prototype.clear = function () {this.length = 0;} // 배열 초기화

- Array.from(object)

  - length도 잘 들어가서 변환됨

- 유사배열객체
  - arguments
  - 인자 없는 함수 내부에서도 가지고 놀 수 있는 문서배열객체
  - Array.isArray(arguments) 하면 false 임.(유사배열)
  - Array.from 사용가능

```js
function generatePriceList() {
  for (let i = 0; i < arguments.length; i++) {
    const element = arguments[i];
    console.log(element);
  }
}

geneatePriceList(100, 200, 300, 400, 500, 600);
```

- 불변성

  - 배열을 복사해야함.
  - 새로운 배열을 반환하는 메서드를 사용.

- for 문 고차함수로 리팩터링하는게 임시변수도 사용하지않고

- map VS forEach

  - 반환이 다르다. (map이 새 배열 반환, forEach는 그저 실행)

- continue & break
  - try... catch 구문 사용해서 error 던지기 / for 문 계열 쓰기.
  - every(&), some(|), find등 사용

---

## 객체

- shorthand property

  - concise method (함수 키워드 구분 제거 등)

- Lookup table
  - 분기문 -> key-value
  - undefined 엔 || 나 ?? 연산자

```js
function getUserType(type) {
  return (
    {
      admin: "관리자",
      instructor: "강사",
      student: "수강생",
    }[type] ?? "해당없음"
  );

  // return OBJ[type] || '해당없음';
}
```

상수로 관리하면 좋음

- 구조분해할당

  - 함수 인자가 3개이상, 여러개면 객체로 구성
  - 필수인자가 있어야하는 등의 경우에 인자를 객체와 섞어서 사용후 구조분해할당
  - 객체에 배열할당도 가능

- Object.freeze

  - 오브젝트 원본유지
  - Object.isFrozen (true/false)
  - 깊은 뎁스는 유지 안됨 (중첩 프리징해야함)
    - 유틸 라이브러리사용
    - 유틸함수 생성
      - 객체순회하면서 값이 객체이면 재귀
    - typescript readonly 사용

- prototype 지양하기

  - 직접 만들어 모듈화 -> npm 배포

- hasOwnProperty

  - Object.prototype.hasOwnProperty.call(targetObj , targetProp)

- 직접 접근 지양하기
  - 객체를 직접 건드리는 영역의 레이어를 분리(함수)
  - 예측가능한 코드 작성, 예측가능한 앱

---

https://jsisweird.com/ 노트

- true + false
  - 1
- [,,,].length
  - 3
  - 마지막 콤마는 트레일링 콤마임
- [1,2,3] + [4,5,6]
  - "1,2,34,5,6"
  - [1, 2, 3] + [, 4, 5, 6]; -> "1,2,3,4,5,6"
  - [1, 2, 3, ""] + [4, 5, 6]; -> "1,2,3,4,5,6"
- 0.2 + 0.1 === 0.3
  - false
  - 0.2 + 0.1; -> 0.30000000000000004
- 10, 2
  - 2
  - 콤마연산자는 맨 뒤에꺼
- !!""
  - false
  - Boolean("") -> false
- +!![]
  - 1
  - Number(Boolean([])) -> 1
  - +true -> 1
- !!!true
  - false
- true == "true"
  - false
- 010 - 03
  - 5
  - 010 -> 8 (8진수)
- "" - - ""
  - 0
- null + 0
  - 0
- 0/0
  - NaN
- 1/0 > 10 \*\* 1000
  - false
  - 10 \*\* 1000; // -> Infinity
  - Math.pow(10, 1000); // -> Infinity
- true++
  - SyntaxError
- "" - 1
  - -1
- (null - 0) + "0"
  - "00"
- true + ("true" - 0)
  - NaN
  - Number("true") -> NaN
- !5 + !5
  - 0
- [] + []
  - ""
  - [] + [] === [,] + [,]; // -> true
- 1 + 2 + "3"
  - "33"
- typeof NaN
  - "number"
- undefined + false
  - NaN
- "" && -0
  - ""
- +!!NaN \* "" - - [,]
  - 0
