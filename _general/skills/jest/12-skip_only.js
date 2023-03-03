test.skip("test 1", () => {
  expect(1).toBe(1);
});

test("test 2", () => {
  expect(1).toBe(1);
});

// √ test 2 (2 ms)
// ○ skipped test 1

test.only("test 1", () => {
  expect(1).toBe(1);
});

test("test 2", () => {
  expect(1).toBe(1);
});
// √ test 1 (1 ms)
// ○ skipped test 2
