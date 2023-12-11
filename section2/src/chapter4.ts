// 타입 별칭

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "선진",
  nickname: "sunjin",
  birth: "1998.11.11",
  bio: "안녕하세요",
  location: "경북",
};

// 인덱스 시그니처

type CountryCodes = {
  [key: string]: string;
};

let countyCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number; // 이렇게 지정할 경우 인덱스 시그니처랑 타입이 일치해야함
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};
