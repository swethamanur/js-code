/*
Write a function, petNameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as that person's pet name! If the 3rd letter is a vowel, return the first 4 letters.

Examples:

INPUT: petNameGenerator('Sachin')
OUTPUT: 'Sac'
*/

function petNameGenerator(a){
    if(a.length != 0){
       if(a[2] == 'a' | a[2] == 'e' | a[2] == 'i' | a[2] == 'o' | a[2] == 'u'){
        var result = a.slice(0,4);
       
       }else{
       result = a.slice(0,3);
       }
   } else{
       return `invalid input`
   }
       return result
}