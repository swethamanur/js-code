/*
A simple coding problem based upon String, but could also be asked with numbers. You need to write a program to check if two given strings are anagrams of Each other. Two strings are anagrams if they are written using the same exact letters, ignoring space, punctuation and capitalization. Each letter should have the same count in both strings. For example, Army and Mary are anagram of each other.
*/

function anagramCheck(str1,str2){
	if(str1.length == str2.length){
        str1 = str1.toLowerCase().split('');
       
		str2 = str2.toLowerCase().split('');
        let i = 0;
        let n = 0;
		while(n < str1.length){
			if(str2.includes(str1[i])){
				 	i++;
				 }
				 n++
		}
		if (n == str1.length){
			return true
		}else{
			return false
		}
	}



}

console.log(anagramCheck('boAt','btoa'));
console.log(anagramCheck('word','wrdo'));