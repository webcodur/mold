var _ = require("lodash");

// 형식: .every(collection, [predicate=.identity], [thisArg])
// 출력: boolean 값

var myFriend = [
  { name: "kys", active: false },
  { name: "kys", active: false },
];

// key/value 전부 같은 값이 있는지
const a = _.every(myFriend, { name: "kys", active: false }); // true
const b = _.every(myFriend, "active", false); // false

// 해당 key의 value가 모두 true 인지
const c = _.every(myFriend, "active"); // false

console.log(a);
console.log(b);
console.log(c);
