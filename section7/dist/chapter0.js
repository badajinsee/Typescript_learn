/**
 * 제너릭 :일반적인, 포괄적인
 */
// 제네릭 함수 : 모든 타입에 다 쓸수 있는 함수 , T: 타입변수
function func(value) {
    return value;
}
let num = func(10);
// num.toUpperCase();
if (typeof num === "number") {
    num.toFixed();
}
let bool = func(true);
let str = func("string");
let arr = func([1, 2, 3]);
export {};
