/*
Create a function that accepts a string argument and returns an array of strings, which are shifted versions of the argument string.

Sample Input: "Hello"
Sample Output

["elloH", "lloHe", "loHel", "oHell", "Hello"]  

As you can see from the example above, each element shifts the first character of the previous version to the end.

The original string should be included in the output array. The order matters; each element of the output array should be the shifted version of the previous element.

The output array should have the same length as the input string. 

The function should return an empty array when a zero-length String is provided as the argument
*/

function rotateStr(str){
    var output = [];
       if(str.length > 0){
           for(var i =0; i< str.length; i++){
               var arr1 = str.split('');
               var caps = '';
               
               arr1.push(arr1[0]);
               arr1.shift();
           
           output.push(arr1.join(''));
           str = arr1.join('');
           }
           
       } else {
           return output
       }	
       return output
   }

   