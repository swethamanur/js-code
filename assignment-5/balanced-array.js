/*
Given an array of even size, task is to find minimum value that can be added to an element so that array become balanced. An array is balanced if the sum of the left half of the array elements is equal to the sum of right half.

Input:
The first line of input contains an integer T denoting the number of test cases. Each test case contains the number of elements in the array a[] as n and next line contains space separated n elements in the array a[].

Output:
Print an integer which is the required answer.

Constraints:
1<=T<=20
2<=n<=10000
1<=a[i]<=100000
*/


function balancedArray(arr){
	var sum1 = 0, sum2 = 0;
 for(var i = 0; i < (arr.length)/2 ; i++){
 	sum1 += arr[i];
 }
	
for(var j = arr.length/2; j< arr.length; j++){
	sum2 += arr[j];
}
	var result = Math.abs(sum1 - sum2);
	return result
}