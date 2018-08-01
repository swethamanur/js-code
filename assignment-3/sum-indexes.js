/*
There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.

Sample array : 
array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];
Expected Output : 
[4, 5, 8, 10, 12, 13] 
*/

function sumTwoArrayIndexes(arr1,arr2){
	var len1 = arr1.length;
	var len2 = arr2.length;
	var output = [];
	
	if(len1 > 0 && len2 >0){
	if(len1 > len2){
		for(var i = 0; i < len1; i++){
			output.push(arr1[i] + arr2[i]);
		}
	}else if (len2 > len1 ){
		for(var k =0; k< len2; k++){
			output.push(arr1[k] +	arr2[k]);
		}
	} else{
		for(var l = 0; l <len1; l++){
			output.push(arr1[l] + arr2[l]);
		}
	}
		
	} else if(len1 == 0 || len2 == 0){
		if(len1 == 0){
			return arr2;
		}else{
			return arr1;
		}
		
	}
	return output;
}