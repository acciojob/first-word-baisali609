function firstWord(s) {
  // your code here

	s = s.trim();
	return s.split("");
	 // return s.trim().split(" ")[0];
}
// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));