const mockFn = jest.fn();

// 숫자가 들어있는 배열을 반복하면서 1증가시켜준 값을 콜백함수에 전달하는 함수
function forEachAdd1(arr) {
  arr.forEach((num) => {
    mockFn(num + 1);
  });
}
forEachAdd1([10, 20, 30]);
test("함수 호출은 3번 됩니다", () => {
  expect(mockFn.mock.calls.length).toBe(3);
});
test("전달된 값은 11, 21, 31 입니다.", () => {
  expect(mockFn.mock.calls[0][0]).toBe(11);
  expect(mockFn.mock.calls[1][0]).toBe(21);
  expect(mockFn.mock.calls[2][0]).toBe(31);
});

// test("1", () => {
//   mockFn.mockReturnValue("I am a mock!");
//   expect(mockFn()).toBe("I am a mock!");
// });

// test("2", () => {
//   mockFn.mockResolvedValue("I will be a mock!");
//   let val;
//   mockFn().then((res) => {
//     val = res;
//     console.log("res", res);
//   });
//   expect(val).toBe("I will be a mock!");
// });
