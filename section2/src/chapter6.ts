// any
// 특정 변수의 타입을 우리가 확실히 모를때
// 어떤 타입이든 넣을수 있다.
// 타입 검사를 안한다는것과 같다. 런타임 에러 발생
// any타입 최대한 사용하지 않는게 좋다.

let anyVar: any = 10;
anyVar = "hello";

let num: number = 10;
num = anyVar;

// unknow
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// num =  unknownVar;
// 연산 불가 , 메서드 사용 불가
// typeof로 사용해야함 조건문

if (typeof unknownVar === "number") {
  num = unknownVar;
}
