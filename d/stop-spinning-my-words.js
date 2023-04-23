function spinWords(string) {
  const words = string.split(" ");

  const reversedWords = words.map((word) => {
    if (word.length >= 5) return word.split("").reverse().join("");
    return word;
  });

  return reversedWords.join(" ");
}

console.log(spinWords("Stop Spinning My Words"));
module.exports = spinWords;
