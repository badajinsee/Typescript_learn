/**
 * 제너릭 인터페이스
 */
let keyPair = {
    key: "key",
    value: 0,
};
let keyPair2 = {
    key: true,
    value: ["1"],
};
let numberMap1 = {
    key: -1231,
    key2: 123123,
};
let StringMap = {
    key: "value",
};
let booleanMap = {
    key: true,
};
let stringMap2 = {
    key: "hello",
};
function goToSchool(user) {
    if (user.profile.type !== "student") {
        console.log("잘 못 오셨습니다.");
        return;
    }
    const school = user.profile.school;
    console.log(`${school}로 등교 완료`);
}
const developerUser = {
    name: "한",
    profile: {
        type: "developer",
        skill: "TypeScript",
    },
};
const studentUser = {
    name: "홍",
    profile: {
        type: "student",
        school: "대학교",
    },
};
export {};
