// functions
const fn = {
  getAge: () => {
    const age = 30;
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(age);
      }, 2000);
    });
  },

  getName: () => {
    const name = "Mike";
    return new Promise((res, rej) => {
      setTimeout(() => {
        rej("error");
      }, 2000);
    });
  },
};

// done 필요 없음 (JEST는 프로미스 resolved를 기다림)
test("2초 후 실행", () => {
  return fn.getAge().then((age) => {
    expect(age).toBe(30);
  });
}); // pass

// resolves, rejects (matcher) 활용해 간결히 작성
test("2초 후 실행", () => {
  return expect(fn.getAge()).resolves.toBe(30);
}); // pass

test("2초 후 실행", () => {
  return expect(fn.getName()).resolves.toBe("Mike");
}); // fail

test("2초 후 실행", () => {
  return expect(fn.getName()).rejects.toMatch("error");
}); // pass

// async await : return 대신 await
test("2초 후 실행", async () => {
  const age = await fn.getAge();
  expect(age).toBe(30);
}); // pass
