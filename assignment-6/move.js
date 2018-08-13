/*
Write a JavaScript function to move an array element from one position to another. 

Test Data :
1. move([10, 20, 30, 40, 50], 0, 2);
return [20, 30, 10, 40, 50]

2. move([10, 20, 30, 40, 50], 1, 2);
return [10, 30, 20, 40, 50] */

function move(arr,pos1,pos2){
	if(arr.length > 0){
		if(pos1 <= arr.length){
			var element = arr[pos1];
            arr.splice(pos1,1);
            arr.splice(pos2,0,element);
		}else{
			return 'element not present at the given index'
		}
	}else{
		return 'empty array'
	}
	return arr
}

console.log(move([10, 20, 30, 40, 50], 0, 2)); //[20, 30, 10, 40, 50]
console.log(move([10, 20, 30, 40, 50], 1, 2));
//return [10, 30, 20, 40, 50]