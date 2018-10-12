/*
Create a function isAlt that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

Examples:

isAlt("amazon") // true

isAlt("apple") // false

isAlt("banana") // true
*/


function isAlt(word){
	const vowels = ['a','e','i','o','u'];
	let isTrue = true;
	for(var i = 0; i < word.length; i = i+2){
		if(vowels.includes(word[i])){
            //console.log(vowels.includes(word[i]));
			if(!vowels.includes(word[i+1])){
				isTrue = true;
			}else{
				isTrue = false;
				return isTrue
			}
		}else if(!vowels.includes(word[i])){
			if(vowels.includes(word[i + 1])){
				isTrue = true;
			}else{
				isTrue = false;
				return isTrue
			}
		}
	}
return isTrue
}

console.log(isAlt('apple'));
console.log(isAlt('amazon'));