/*
Given a string containing uppercase alphabets and integer digits (from 0 to 9), the task is to print the alphabets in the order followed by the sum of digits.

Example:
Input:
AC2BEW3
ACCBA10D2EW30

 

Output:
ABCEW5
AABCCDEW6
*/
function reArrange(word){
	let chars = word.split('');
	var letters = [];
	var nums = [];
    
    chars.forEach((char) => {
        console.log(typeof char)
		if(char == '0' ||char == '1'|| char == '2'|| char == '3'||char == '4'||char == '5'||char == '6'||char == '7'||char == '8'||char == '9'){
			nums.push(char);
		}else{
			letters.push(char);
		}
	})
	
    console.log(letters);
    console.log(nums);
    var sum = 0;
    nums.forEach((num) => {
        sum += Number(num);
    })
	
    letters = letters.sort().join('');
    console.log(letters);
	var result = letters + sum;
	
	return result
}

console.log(reArrange('AC2BEW3'));