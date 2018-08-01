/*
Write a function that takes a string and returns an object containing the count for each character in the string.

Examples

INPUT: frequency('abca');
OUTPUT: {a: 2, b: 1, c: 1}
INPUT: frequency('');
OUTPUT: { }
*/

function frequency(str){
	var arr = str.split('');
	var output = {};
	var count = 1;
	
	if(arr.length > 0){
		for(var i = 0; i < arr.length; i++){
			if(output[arr[i]]){
				output[arr[i]] += count;
			}else{
				output[arr[i]] = count;
			}
	} 
	} else {
		return output
	}
 return output
}