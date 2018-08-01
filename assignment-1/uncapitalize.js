//Write a JavaScript function to Uncapitalize the first letter of each word of a string. 
function unCap(a){
	var result = [];
 a.split(' ').forEach(function(word){
 	result.push(word[0].toLowerCase() + word.slice(1));
 })
	
	return result.join(' ');
}

console.log(unCap('Js String Exercises')); //"js string exercises"