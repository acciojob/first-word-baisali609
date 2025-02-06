function firstWord(s) {
  // your code here
 str = str.trim(); 
	let index = str.indexOf(" "); 
    
    return index === -1 ? str : str.substring(0, index);
	
}
console.log(firstWord("see and stop"));  
console.log(firstWord(" Hello World!")); 
console.log(firstWord("12345"));         
console.log(firstWord(""));              


Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
