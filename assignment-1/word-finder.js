//Write a JavaScript function to find a word within a string. 

function findWord(a,b){
	
	var count = 0;
	
 a.split(' ').forEach(function(word){
 	if(word == b){
		count++;
	}
 })
	return `${b} was found ${count} times.`;
}

console.log(findWord('The quick brown fox', 'fox')); //"'fox' was found 1 times."