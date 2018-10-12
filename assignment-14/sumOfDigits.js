/*
Create the function sumOfDigits that adds individual digits of a number, and returns the sum.

Examples:

INPUT: sumOfDigits(414);
OUTPUT: 9
INPUT: sumOfDigits(2913);
OUTPUT: 15

*/

function sumOfDigits(num){
	let number = String(num);
	let sum = 0;
	
	number.split('').forEach((n) => {
		sum += Number(n);
	})
	return sum
}