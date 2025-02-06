function firstWord(s) {
  // your code here
let str = s.trim();
	str.split(" ");
	
}
console.log(firstWord("see and stop"));  
console.log(firstWord(" Hello World!")); 
console.log(firstWord("12345"));         
console.log(firstWord(""));              


Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
