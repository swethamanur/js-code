/*
Write a JavaScript function to test whether the character at the provided (character) index is upper case. 
Test Data :
console.log(isUpperCaseAt('Js STRING EXERCISES', 1));
false
*/


function isUpperCaseAt(a,b){
 
	
	letters = a.split('');
	
	if(letters[b] == letters[b].toUpperCase()){
	return true;
	} else {
	return false;
	}
	
}
console.log('Javascript', 1); //false