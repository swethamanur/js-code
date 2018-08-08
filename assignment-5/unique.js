function findUnique(nums){
 
	var result;
	if(nums.length > 0){
		var obj = {};
		var count = 1;
	
		nums.forEach(function(num){
            console.log(num)
            console.log('last',nums.lastIndexOf(num))
            console.log('first',nums.indexOf(num))
			if(nums.lastIndexOf(num) == nums.indexOf(num)){
				result = num;
			}
		})
	
	}else{
		return null
	}	
	return result
}

console.log(findUnique[1,1,2,2,3,3,4]);