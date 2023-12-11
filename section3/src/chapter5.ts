/**
 * 타입 추론
 */

let a: number = 10;

let b = 10; //타입 넓히기
let c = "hello";
let d = {
  id: 1,
  name: "한",
  profile: {
    nickname: "선진",
  },
};

let { id, name, profile } = d;

let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
  return "hello";
}

// any타입 진화 , 암묵적 any타입

let f;
f = 10;
f.toFixed();

f = "hello";
f.toUpperCase();

const num = 10;
const str = "hello";

let arr = [1, "string"];
