// 3초 후에 이름 반환하는 함수
const fn = {
  getName: (cb) => {
    const name = "Mike";
    setTimeout(() => {
      cb(name);
      // throw new Error("서버 에러 발생");
    }, 2000);
  },
};

// (1) done 붙여야 비동기 적용
test("2초 후 실행", (done) => {
  function cb(name) {
    expect(name).toBe("Mike");
    done();
  }
  fn.getName(cb);
});

// (2) try catch 문
test("2초 후 실행", (done) => {
  function cb(name) {
    try {
      expect(name).toBe("Mike");
      done();
    } catch (err) {
      done();
    }
  }
  fn.getName(cb);
});
