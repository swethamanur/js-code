/*
Create a function that takes a number as an argument and returns an array. The first element of the array should be 0, and then each element should increase by 1 until it reaches the input number. Then, each element should count back down to 0.

Examples:

INPUT: countUpThenDown(2)
OUTPUT: [0, 1, 2, 1, 0]
*/

function countUpThenDown(a){
    var result = [];
       var result1 = [];
       
       for (var i = 0; i <= a; i++){
           result.push(i);
       }
       
       for (var k = (a-1); k>=0; k--){
           result1.push(k);
       }
       
       return result.concat(result1);
   }