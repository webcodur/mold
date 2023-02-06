var _ = require("lodash");
// filter()
// 형식: .filter(collection, [predicate=.identity], [thisArg])
// filter()는 특정 조건을 만족하는 모든 요소를 추출하는 메소드입니다.

var myFriend = [
  { name: "kys", job: "developer", age: 27 },
  { name: "cys", job: "webtoons man", age: 27 },
  { name: "yhs", job: "florist", age: 26 },
  { name: "chj", job: "nonghyup man", age: 27 },
  { name: "ghh", job: "coffee man", age: 27 },
  { name: "ldh", job: "kangaroo", age: 27 },
];

// 입력한 object의 key와 value들을 모두 포함하는 객체들을 배열로 반환합니다.
_.filter(myFriend, { age: 26, job: "florist" });
// → [{ name: 'yhs',job:'florist', age: 26}]

// 입력한 key값이 true인 객체들을 배열로 반환합니다.
_.filter(myFriend, (friend) => friend.age == 26);
// → [{ name: 'yhs',job:'florist', age: 26}]
