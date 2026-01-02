

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
const str = 'abcde abcde abcde abcde';

const newStr = str
  .split(' ') 
  .map(word => '!' + word.slice(1)) 
  .join(' '); 

console.log(newStr); 

