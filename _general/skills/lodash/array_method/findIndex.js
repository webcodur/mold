var _ = require("lodash");
// findIndex()

// 형식: _.findindex(array,[predicate=.indentity],[thisArg])
// 출력: index number
// 배열 내에서 원하는 index를 쉽게 구할 수 있습니다.

var myFriend = [
  { name: "kys", job: "developer", age: 27 },
  { name: "cys", job: "webtoons man", age: 27 },
  { name: "yhs", job: "florist", age: 26 },
  { name: "chj", job: "nonghyup man", age: 27 },
  { name: "ghh", job: "coffee man", age: 27 },
  { name: "ldh", job: "kangaroo father", age: 27 },
  { name: "hsy", job: "monk", age: 27 },
];

// 콜백함수를 통해 나이가 26인 객체가 처음으로 나오는 index 반환
const a = _.findIndex(myFriend, function (friend) {
  return friend.age === 26;
});
// -> 2

// 처음 일치하는 object의 index 값을 반환합니다.
const b = _.findIndex(myFriend, { name: "cys", job: "webtoons man", age: 27 });
// -> 1

// 나이가 26인 객체가 처음으로 나오는 index 반환
const c = _.findIndex(myFriend, (age = 26));

console.log(a);
console.log(b);
console.log(c);
