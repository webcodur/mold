const fn = require("./fn");

// toBeGreaterThan
// toBeGreaterThanOrEqual
// toBeLessThan
// toBeLessThanOrEqual

test("ID는 10자 이하입니다", () => {
  const id = "webcodur";
  expect(id.length).toBeLessThanOrEqual(10);
}); // pass
