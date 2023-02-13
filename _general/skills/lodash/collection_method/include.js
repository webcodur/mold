var _ = require("lodash");
// includes()
// 형식: _.includes(collection, target, [fromIndex=0])
// 출력: boolean
// 해당 collection에 target값이 있는지 판별해줍니다.

// 배열에 값이 있는지 찾습니다.
// index에 해당 값이 있는지 찾습니다.
// 일치하는 값이 있는지 찾습니다.
// 일치하는 값이 문자열 안에 있는지 찾습니다.

console.log(_.includes([1, 2, 3], 1));
console.log(_.includes([1, 2, 3], 1, 2));
console.log(_.includes({ name: "yhs", age: 26 }, "yhs"));
console.log(_.includes("dontknow", "ont"));

// const obj = { name: "yhs", age: 26 };
// console.log(obj.includes("yhs"));
// console.log("asdf".includes("as"));
