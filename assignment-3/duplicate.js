/*
Write a program to find duplicate values in a JavaScript array.

findDuplicate([10,20,30,40,10,40]);

output - [10,40];
*/

function findDuplicate(arr){
	var element;
	var result = [];
	if(arr.length > 0){
	for(var i =0; i<arr.length; i++){
		element = arr[i]; //assigning element to each value in array
		for(var k = (i+1); k<arr.length; k++){ // going over the array and checking against each element
			if(element == arr[k]){
				
				result.push(arr[k])
			}
		}
	}
	} else{
		return 'empty array'
	}
	return result
}