// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role { //숫자형 이넘
  ADMIN,
  USER = 10,
  GUEST,
}

enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "잉",
  role: Role.ADMIN, //관리자
  Language: Language.korean,
};

const user2 = {
  name: "길",
  role: Role.USER, //일반유저
};
const user3 = {
  name: "아",
  role: Role.GUEST, //게스트
};

console.log(user1, user2, user3);
