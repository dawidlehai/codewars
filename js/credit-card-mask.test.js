const maskify = require("./credit-card-mask");

describe("maskify function", () => {
  test("should return '############5616' when given '4556364607935616'", () =>
    expect(maskify("4556364607935616")).toBe("############5616"));

  test("should return '1' when given '1'", () =>
    expect(maskify("1")).toBe("1"));

  test("should return '#1111' when given '11111'", () =>
    expect(maskify("11111")).toBe("#1111"));
});
