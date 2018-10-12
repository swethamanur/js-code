/*

Have the function palindrome(str) accept a string argument, and return the boolean true if the argument is a palindrome (meaning that the string is the same forward as it is backward). Otherwise, return the boolean false.

Examples:

INPUT: palindrome("racecar");
OUTPUT: true
INPUT: palindrome("animal");
OUTPUT: false
*/
function palindrome(str){
	
	if(str.length > 0){
	let strArr = str.split('');
	let revArr = strArr.reverse();
	console.log(revArr);
	var count = 0;
	var isTrue;

	for(var i = 0; i< str.length; i++){
		if(str[i] === revArr[i]){
			isTrue = true;
		}else{
			return false;
			
		}

	}
	return true;
	}else{
		return 'invalid input'
	}
}


console.log(palindrome('racecar'));
console.log(palindrome('swetha'));
console.log(palindrome('animal'));