/*
Write a function called findGreaterNumbers which accepts an array and returns the number of times a number is followed by a larger number.

Examples:

findGreaterNumbers([1,2,3]) // 3

findGreaterNumbers([6,1,2,7]) // 4

findGreaterNumbers([5,4,3,2,1]) // 0

findGreaterNumbers([]) // 0
*/


function findGreaterNumbers(arr){
	
	let count = 0;
	if(arr.length > 0){
	for(var i = 0; i< arr.length; i++){
		for(var j = i +1; j < arr.length; j++ ){
		
		if(arr[i] < arr[j]){
			count++;
		}
	}
	}
	}else{
	return count;
	}	
	return count
}