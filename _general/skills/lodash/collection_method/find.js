var _ = require("lodash");
// find()
// 형식: .find(collection, [predicate=.identity], [thisArg])
// find()는 조건을 만족하는 컬렉션에서의 첫번째 요소를 찾는 메소드입니다.

var myFriend = [
  { name: "kys", job: "developer", age: 27 },
  { name: "cys", job: "webtoons man", age: 27 },
  { name: "yhs", job: "florist", age: 26 },
  { name: "chj", job: "nonghyup man", age: 27 },
  { name: "ghh", job: "coffee man", age: 27 },
  { name: "ldh", job: "kangaroo", age: 27 },
];

// 콜백함수가 처음으로 참이되는 객체를 반환
_.find(myFriend, function (friend) {
  return friend.age < 28;
});
// → { name: 'kys',job:'developer' ,'age': 27}
