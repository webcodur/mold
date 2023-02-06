var _ = require("lodash");
// forEach()
// 형식: .forEach(collection, [iteratee=.identity], [thisArg])
// 배열의 값마다 함수를 실행시킬 때 용이하게 사용됩니다.

_([1, 2])
  .forEach(function (n) {
    console.log(n);
  })
  .value();
// 1
// 2
