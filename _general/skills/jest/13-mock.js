const mockFn = jest.fn();

mockFn();
mockFn(1);

test("mockFn 함수는 두 번 호출된다.", () => {
  expect(mockFn.mock.calls.length).toBe(2);
});

test("2번째로 호출된 함수에 전달된 첫번째 인수는 1입니다", () => {
  expect(mockFn.mock.calls[1][0]).toBe(1);
});
