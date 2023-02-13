// toBeCloseTo
const fn = require("./fn");

test("0.1 + 0.2 : 0.3", () => {
  expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
}); // pass

test("0.1 + 0.2 : 0.3", () => {
  expect(fn.add(0.1, 0.2)).toBe(0.3);
}); // fail

// 소수점 덧셈으로 인해 근사치 판별이 필요할 수 있다.
