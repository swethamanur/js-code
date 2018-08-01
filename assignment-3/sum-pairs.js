/*
Write a JavaScript program to find a pair of elements (indices of the two numbers) from a given array whose sum equals a specific target number.

Input: numbers= [10,20,10,40,50,60,70], target=50
Test Case : 
pairElement(numbers, target);
Output: [3, 4]
*/
function pairElement(numbers,target){
	var result = [];
	if(numbers.length > 0){
		if(target > 0){
		for(var i = 0; i< numbers.length; i++){
			if(numbers[i] + numbers[i+1] == target){
				result.push(i+1,i+2);
			}
		}} else {
			return result;
		}
		
	}else {
		return'invalid input';
	}
	return result
}