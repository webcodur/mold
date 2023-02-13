const fn = require("./fn");

test("Hello World 에 a라는 글자가 있나", () => {
  expect("Hello World").toMatch(/a/);
}); // fail

test("Hello World 에 o라는 글자가 있나", () => {
  expect("Hello World").toMatch(/o/);
}); // pass

// 정규표현식 검사
// 대소문자 구분을 없애려면 i 붙여줘야 (/o/i)
