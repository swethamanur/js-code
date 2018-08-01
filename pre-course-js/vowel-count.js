/*
Create the function vowelCount(str) that takes a str parameter and returns the number of vowels the string contains (ie. "Dct Academy" would return 3).

Examples:

INPUT: vowelCount("Good Job");
OUTPUT: 3
*/
function vowelCount(a){
    var number = 0;
       
    for(var i =0 ; i < a.length; i++){
        if(a[i] == 'a' | a[i] == 'e' | a[i] == 'i' | a[i] == 'o' | a[i] == 'u'){
           number++;
        }	
    }
       
    if(a.length == 0){
        return `empty string`
   }
           
return number
}