function firstWord(s) {
  // your code here
 str = str.trim(); 
	let index = str.indexOf(" "); 
    
    return index === -1 ? str : str.substring(0, index);
	
}

Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
