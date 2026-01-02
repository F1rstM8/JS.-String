console.log("--- ЗАВДАННЯ 5 ---");
const isPalindrome = (str) => {
  const lowerStr = str.toLowerCase(); // Перетворюємо рядок у нижній регістр, щоб уникнути проблем з регістром

  const reversedStr = lowerStr.split("").reverse().join("");

  return lowerStr === reversedStr;
};

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("Anna"));
