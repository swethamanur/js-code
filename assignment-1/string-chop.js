//Write a JavaScript function to chop a string into chunks of a given length. 

function stringChop(a,b){
	var result = [];
	
 for(var i =0; i<a.length; i = (i + b)){
 	result.push(a.substr(i,b));
 
 }
	
	return result;
}

console.log(stringChop('dcresource',3));
 //return ["dcr", "eso", "urc", "e"]
 