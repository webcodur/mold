var _ = require("lodash");
// map()
// 형식: .map(collection, [iteratee=.identity], [thisArg])
// 출력: 배열 순회하며 함수 실행값 혹은 key값 반환

const timesTwo = (n) => n * 3;
const a = _.map([1, 2], timesTwo); // [3,6]

var myFriend = [{ name: "Adele" }, { name: "Brian" }];
const b = _.map(myFriend, "name");

console.log(a);
console.log(b);
