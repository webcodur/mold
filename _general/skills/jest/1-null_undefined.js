const fn = require("./fn");

// toBeNull
// toBeUndefined
// toBeDefined

test("null 확인.", () => {
  expect(null).toBeNull();
}); // P

test("Undefined 확인.", () => {
  expect(undefined).toBeUndefined();
}); // P

test("Defined 확인.", () => {
  expect("hello").toBeDefined();
}); // P
