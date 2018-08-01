/*
Given an array of one's and zero's convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
*/

function binaryToNumber(a){
    var result = 0;
       
       for(var i = 0; i < a.length; i++){
           result = result + (a[i] * Math.pow(2,(a.length-(i+1))));
       }
       
       return result;
   }


   console.log(binaryToNumber([0, 0, 1, 0]));//2