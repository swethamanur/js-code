/*
In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
Rules
 	1.  The input string will always be lower case but maybe empty.

2.  If the character in the string is whitespace then pass over it as if it was an empty seat.
Example
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
*/

function wave(input){
	if(typeof input != 'undefined'){
	var obj ={
		str:input,
		wave: function (){
			var result = [];
			var megaResult = [];
			var splitarr = this.str.split('');
			var temp = 0;
			
			while(temp < this.str.length){
				for(var j = 0; j < temp; j++){
					result.push(splitarr[j]);
				}
				
				result.push(splitarr[temp].toUpperCase());
				result = result.join('') + this.str.slice(temp + 1);
				
				megaResult.push(result);
				
				result = [];
				temp ++
			}
			return megaResult
		}
	} 
	return obj.wave()
	}
	else {
	return 'Empty/invalid input'
	}
}

console.log(mexicanWave('hello'));



