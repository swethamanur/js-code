/*
Create the function maxOfThree that evaluates three numbers and returns the largest number out of the three.

EXAMPLES:

10 is the largest number out of the 3 number arguments

INPUT: maxOfThree(5,4,10);
OUTPUT: 10
Two 7's are passed in as values, 7 is also the largest value

INPUT: maxOfThree(7,7,4);
OUTPUT: 7
*/

function maxOfThree(a,b,c){
    var max = a;
       
       if(b > a){
               if(b > c){
               max = b;
               }
               else if(b < c){
               max = c;
               }
       }
       
       else if (b < a){
           if(c > a){
           max = c;
           } else if(c < a){
           max = a;
           }
       }
       
       return max
   }