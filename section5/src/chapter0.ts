/**
 * 인터페이스
 */

interface Person {
  readonly name: string;
  age?: number;
  say(): void;
  say(a: number, b: number): void;
}

type Type1 = number | string | Person; //이런식으로 해야함 인터페이스는 유니온 안됨 ..

const person: Person = {
  name: "이정환",
  age: 27,
  say: function () {
    console.log("hi");
  },
};

// person.name = "한";

person.say();
person.say(1, 2);
