/*
Find the fcatorial of the given number
*/

function factorial(n){
	if(n == 0){
	return 1;
	}else{
	var result = 1;	
	while(n > 0){
			result *= n;
			n--;
	}
	}
	return result
}

console.log(factorial(3));