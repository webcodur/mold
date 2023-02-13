var _ = require("lodash");
// reduce()
// 형식: .reduce(collection, [iteratee=.identity], [accumulator], [thisArg])

// 첫번째 인자에 대해 배열 내부의 값을 통해 콜백함수를 실행시킨 후 결과값 반환
const a = _.reduce([1, 2], function (acc, n) {
  return acc + n;
});

console.log(a); // 3
