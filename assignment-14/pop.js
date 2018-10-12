function pop(arr){
	let result = arr[arr.length-1];
	
	if(arr.length == 0){
	return undefined
	}else{
        arr.length = arr.length -1; 
        console.log(arr);   
	return result
	}

}

console.log(pop([1,2,3,4]));
console.log(pop([]));