const spinWords = require("./stop-spinning-my-words");

test("Stop Spinning My Words -> Stop gninnipS My sdroW", () => {
  expect(spinWords("Stop Spinning My Words")).toBe("Stop gninnipS My sdroW");
});

test("This is a test -> This is a test", () => {
  expect(spinWords("This is a test")).toBe("This is a test");
});

test("This is another test -> This is rehtona test", () => {
  expect(spinWords("This is another test")).toBe("This is rehtona test");
});
