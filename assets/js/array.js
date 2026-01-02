console.log("--- ЗАВДАННЯ 1 ---");
const stringsHref = [
  "http://example.com",
  "https://openai.com",
  "ftp://website.com",
  "http://google.com",
  "https://stackoverflow.com",
  "http://github.com",
  "http://youtube.com",
  "https://wikipedia.org",
  "ftp://server.net",
  "http://facebook.com",
  "https://amazon.com",
  "http://twitter.com",
  "https://linkedin.com",
  "ftp://host.com",
  "http://reddit.com",
  "https://medium.com",
];

const httpOnly = stringsHref.filter((link) => link.startsWith("http://"));

console.log(httpOnly);

console.log("--- ЗАВДАННЯ 2 ---");
const fileNames = [
  "index.html",
  "styles.css",
  "script.js",
  "about.html",
  "contact.html",
  "home.html",
  "blog-post-1.html",
  "blog-post-2.html",
  "services.html",
  "portfolio.html",
  "projects.html",
  "gallery.html",
  "faq.html",
  "terms.html",
  "privacy-policy.html",
];

const htmlFiles = fileNames.filter((file) => file.endsWith(".html"));

console.log(htmlFiles);

console.log("--- ЗАВДАННЯ 3 ---");
const str = "abcde abcde abcde abcde";

const newStr = str
  .split(" ")
  .map((word) => "!" + word.slice(1))
  .join(" ");

console.log(newStr);

console.log("--- ЗАВДАННЯ 4 ---");
const countVowels = (str) =>
  [...str].filter((char) => "aeiouAEIOU".includes(char)).length;

console.log(countVowels("Hello"));
console.log(countVowels("Apple"));
console.log(countVowels("JavaScript"));
console.log(countVowels("Sky"));

console.log("--- ЗАВДАННЯ 5 ---");

const isPalindrome = (str) =>
  str.toLowerCase() === str.toLowerCase().split("").reverse().join("");

console.log(isPalindrome("Anna"));
console.log(isPalindrome("Madam"));
console.log(isPalindrome("Level"));
console.log(isPalindrome("Hello"));
console.log(isPalindrome("12321"));

console.log("--- ЗАВДАННЯ 6 ---");
const findLongestWord = (str) =>
  str.split(" ").sort((a, b) => b.length - a.length)[0];

console.log(findLongestWord("Google do a brain roll")); // Виведе: "Google"
console.log(findLongestWord("FreshCode Training Center")); // Виведе: "FreshCode" або "Training" бо однакова довжина
console.log(findLongestWord("JavaScript is amazing")); // Виведе: "JavaScript"
