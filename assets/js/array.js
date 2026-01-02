console.log("--- ЗАВДАННЯ 6 ---");
const findLongestWord = (str) => {
  const words = str.split(" ");

  words.sort((a, b) => b.length - a.length);

  return words[0];
};

console.log(findLongestWord("Google do a brain roll")); // Виведе: "Google"
console.log(findLongestWord("FreshCode Training Center")); // Виведе: "FreshCode" або "Training" бо однакова довжина
console.log(findLongestWord("JavaScript is amazing")); // Виведе: "JavaScript"
