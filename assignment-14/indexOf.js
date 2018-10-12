/*
Write a function called stringIndexOf, which accepts two strings: the first is a word and the second is a single character.

The function should return the first index in the word at which the character exists or -1 if the character is not found.

Do not use the built in String.indexOf() function!

Examples:

stringIndexOf('awesome', 'e') // 2
stringIndexOf('awesome', 'z') // -1
*/


function stringIndexOf(str,letter){
	str = str.split('');
	
	for(var i =0; i< str.length; i++){
		if(str[i] == letter){
			return i;
		}
	}
	return -1
}