/**
 * 인터페이스의 확정
 */

type Animal = {
  name: string;
  color: string;
};

interface Dog extends Animal {
  // name: "hello"; // 원본타입에 서브타입이어야함 예를들어 (string-number는 안됨)
  isBark: boolean;
}

const dog: Dog = {
  name: "",
  color: "",
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

interface DogCat extends Dog, Cat {}

const dogcat: DogCat = {
  name: "",
  color: "",
  isBark: true,
  isScratch: true,
};
