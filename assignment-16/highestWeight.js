/*
Body:

Given a string of words, your goal is to find the highest scoring word in the string. a is worth 1 point, b is worth 2 points, c is worth 3 points, and so on, all the way up until z, which is worth 26 points. You can assume that strings will consist only of lowercase letters and spaces.

In the event that two words have the same score, return the word that appears first in the string.

Examples:

highestScoringWord("a b c d e f"); // "f"

highestScoringWord("hello world"); // "world"

highestScoringWord("go ahead make my day"); // "my"

highestScoringWord("there is no place like home"); // "there"

highestScoringWord("aaaaaa bbb cc f"); // "aaaaaa"

highestScoringWord("bbb cc f aaaaaa"); // "bbb"

highestScoringWord("this sentence has two highest scoring words"); // "sentence"
*/

function highestScoringWord(sentence){
	let output = '';
	let alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	
	sentence = sentence.split(' ');
	let highest = 0;
	sentence[0].split('').forEach((letter) => {
		highest += (alphabets.indexOf(letter) + 1);
    })
    
	let weight = 0;
	let index = 0;
	for(var i=1; i < sentence.length; i++){
		sentence[i].split('').forEach((letter) => {
			weight += alphabets.indexOf(letter) + 1;
            
        })
        
        if(weight > highest){
            highest = weight;
            index = i;
        }
        weight = 0;
    }

    
    
	output = sentence[index];
 return output
}

console.log(highestScoringWord("aaaaaa bbb cc f"));
console.log(highestScoringWord("this sentence has two highest scoring words"));