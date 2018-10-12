function stringLastIndexOf(str,letter){
	for(var i = str.length-1; i >=0; i--){
		if(str[i] == letter){
			return i;
		}
	}
	return -1
}