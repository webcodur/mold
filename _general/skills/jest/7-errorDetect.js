const fn = require("./fn");

test("에러 발생 여부?", () => {
  expect(() => fn.throwErr()).toThrow();
}); // P

test("에러 발생 여부 (인자 확인)", () => {
  expect(() => fn.throwErr()).toThrow("XXX");
}); // P
