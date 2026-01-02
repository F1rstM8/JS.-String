console.log("--- ЗАВДАННЯ 4 ---");
const countVowels = (str) => {
  const vowels = "aeiou";

  const foundVowels = str
    .toLowerCase()
    .split("")
    .filter((char) => vowels.includes(char));

  return foundVowels.length;
};

console.log(countVowels("Hello World"));
console.log(countVowels("JavaScript"));
console.log(countVowels("Education"));
console.log(countVowels("FreshCode"));
