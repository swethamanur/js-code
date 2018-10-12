function unShift(arr,value){
	let newArr = [];
	for(var i = 0; i<= arr.length; i++){
		if(i == 0){
			newArr[i] = value;
		}else{
			newArr[i] = arr[i -1];
		}
	}
	return newArr.length;
}