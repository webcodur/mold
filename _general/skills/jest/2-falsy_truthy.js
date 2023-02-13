const fn = require("./fn");

// toBeTruthy
// toBeFalsy

test("0은 false 입니다.", () => {
  expect(fn.add(1, -1)).toBeFalsy();
}); // pass

test("문자열 포함 여부", () => {
  expect(fn.add("hello", "World")).toBeTruthy();
}); // pass
