console.log("--- ЗАВДАННЯ 3 ---");
const str = 'abcde abcde abcde abcde';

const newStr = str
  .split(' ') 
  .map(word => '!' + word.slice(1)) 
  .join(' '); 

console.log(newStr); 