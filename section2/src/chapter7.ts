// void
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입

function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}

let a: void;
a = undefined;

// undefined이나 null로 반환을 해야해서 ? void 사용해야함

// never
// never -> 존재하지 않는
// 불가능한 타입
// 종료될수 없음

function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}

// let a : never;
// null 도 undefined도 안된다
// 그 어떤값도 저장할 수가 없음
