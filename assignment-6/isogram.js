/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram( "Dermatoglyphics" ) == true

isIsogram( "aba" ) == false

isIsogram( "moOse" ) == false // -- ignore letter case
*/

function isIsogram(word){
	if(word.length > 0){
         word = word.toLowerCase();
        arr = word.split('');
	    
        var result = arr.filter(function(letter){
            return (arr.indexOf(letter) == arr.lastIndexOf(letter))
        })
        if(result.length == word.length){
            return true
       
	}
	}else if(word.length == 0){
		return true
	}
	return false
}
console.log(isIsogram( "Dermatoglyphics" ));
console.log(isIsogram( "aba" ));
console.log(isIsogram(''));
