/**
 * 선언 합침
 */

interface Person {
  name: string;
}

interface Person {
  // name: number; //충돌 허용은 안됨 타입도 똑같이 정의해야함
  age: number;
}

interface Developer extends Person {
  name: "hello";
} // 확장은 됨

const person: Person = {
  name: "",
  age: 27,
};

/**
 * 모듈 보강
 */

interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello",
};
