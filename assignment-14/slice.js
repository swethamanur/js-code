function slice(arr,start,end){
	let result = [];
	if(typeof start != 'undefined' && typeof end != 'undefined' && end <= arr.length){
		for(var i = start; i < end; i++){
			result.push(arr[i]);
		}
	}else{
		for(var i = start; i < arr.length; i++){
			result.push(arr[i]);
		}
	}
	return result
}

console.log(slice(([1, 2, 3, 4, 5], 0, 2)));