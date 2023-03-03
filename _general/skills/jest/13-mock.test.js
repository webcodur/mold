const mockFn = jest.fn();

// console.log(mockFn()); // I am a mock!

test("1", () => {
  mockFn.mockReturnValue("I am a mock!");
  expect(mockFn()).toBe("I am a mock!");
});

test("2", () => {
  mockFn.mockResolvedValue("I will be a mock!");
  let val;
  mockFn().then((res) => {
    val = res;
    console.log("res", res);
  });
  expect(val).toBe("I will be a mock!");
});
