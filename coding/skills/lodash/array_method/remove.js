var _ = require("lodash");
// remove()
// 형식: .remove(array, [predicate=.identity], [thisArg])
// 출력: 제거된 array
// 배열 내의 조건에 맞는 요소들을 제거한 후 반환해줍니다.

var array = [1, 2, 3, 4];

var evens = remove(array, function (n) {
  return n % 2 == 0;
});

console.log(array);
//-> [1,3]

console.log(evens);
//-> [2,4]
