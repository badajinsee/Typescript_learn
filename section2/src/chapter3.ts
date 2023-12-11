// object
let user: {
  id?: number; // 선택 가능하게 하려면 ? 씀
  name: string;
} = {
  id: 1,
  name: "선진",
};

let config: {
  readonly apikey: string; // 읽는것만 가능 , 값 못 바꿈
} = {
  apikey: "my key",
};
