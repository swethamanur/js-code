/*
You are given 3 strings: first,  second, and  third.  third String is said to be a shuffle of first and second if it can be formed by interleaving the characters of first and second String in a way that maintains the left to right ordering of the characters from each string. For example, given first = "abc" and second = "def",  third = "dabecf"  is a valid shuffle since it preserves the character ordering of the two strings. So, given these 3 strings write a function that detects whether third String is a valid shuffle of first and second String
*/

function validShuffle(str1,str2,word){
	function checkString(str){
		let isTrue = true;
		for(var i = 0; i < str.length; i++){
			
			if(word.includes(str[i])){
				if(i > 0){
				
				if(word.indexOf(str[i]) > word.indexOf(str[i-1])){
					isTrue = true;
				}else{
                     isTrue = false;
                     return isTrue;
				}
					
				}	
			}
        }
        return isTrue
    }

    if(checkString(str1) && checkString(str2)){
        return true;
    }else{
        return false
    }
    
}

console.log(validShuffle('abc', 'defg', 'dagbecf'));