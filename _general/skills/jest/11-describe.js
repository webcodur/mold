const fn = {
  connectUserDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res({
          name: "Mike",
          age: 30,
          gender: "male",
        });
      }, 500);
    });
  },

  disconnectUserDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res();
      }, 500);
    });
  },
  connectCarDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res({
          brand: "bmw",
          name: "z4",
          color: "red",
        });
      }, 500);
    });
  },

  disconnectCarDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res();
      }, 500);
    });
  },
};

describe("<유저 정보 테스트>", () => {
  let user;
  beforeAll(async () => {
    user = await fn.connectUserDb();
  });
  test("이름은 Mike", () => {
    expect(user.name).toBe("Mike");
  });
  test("나이는 30", () => {
    expect(user.age).toBe(30);
  });
  test("성별은 남성", () => {
    expect(user.gender).toBe("male");
  });
  afterAll(async () => {
    return fn.disconnectUserDb();
  });
});

describe("<차량 정보 테스트>", () => {
  let car;
  beforeAll(async () => {
    car = await fn.connectCarDb();
  });
  test("이름은 z4", () => {
    expect(car.name).toBe("z4");
  });
  test("브랜드는 bmw", () => {
    expect(car.brand).toBe("bmw");
  });
  test("색상은 red", () => {
    expect(car.color).toBe("red");
  });
  afterAll(async () => {
    return fn.disconnectCarDb();
  });
});
