function firstWord(s) {
  // your code here
 s = s.trim(); 
	let index = s.indexOf(" "); 
    
    return index === -1 ? s : s.substring(0, index);
	
}
console.log(firstWord("see and stop"));  
console.log(firstWord(" Hello World!")); 
console.log(firstWord("12345"));         
console.log(firstWord(""));              


Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
