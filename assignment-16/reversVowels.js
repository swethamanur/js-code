function reverseVowels(str){
	const vowels = ['a','e','i','o','u'];
    let temp  = [];
    str = str.split('');

    function swap(x,y){
        let temp = x;
        x = y;
        y = temp;
        
    }

    for(var i =0;i<str.length; i++){
        if(vowels.includes(str[i])){
            temp.push(i);
        }
    }
    console.log(temp);
    tempRev = temp.reverse();

	console.log(temp);
    
	for(var i = 0; i< temp.length; i++){
        swap(str[tempRev[i]],str[temp[i]])
        // str[tempRev[i]] = str[temp[i]];
        // str[temp[i]] = str[tempRev[i]];
        console.log(str);
    }
    str = str.join('');
	return str
	
	
}

console.log(reverseVowels('tomatoes'));