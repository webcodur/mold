const fn = require("./fn");

let num = 30;

// beforeEach(() => {
//   num = 0;
// });

// afterEach(() => {
//   num = 0;
// });

test("0 + 1 : 1", () => {
  expect(fn.add(num, 1)).toBe(1);
});

test("0 + 3 : 3", () => {
  expect(fn.add(num, 3)).toBe(3);
});
