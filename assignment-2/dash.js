/*Write a JavaScript function which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept putDash('025468') the output should be '0-254-6-8'. 
*/

function putDash(value){
    arr = value.split(''); // splitting it to convert to an array
       if(arr.length > 1){
       
       for(var i = 0; i < (arr.length-1); i++){
           if((arr[i] % 2 == 0) && (arr[i+1] % 2 == 0)){
               arr.splice((i+1),0,'-');
           }
       }
       } else {
       return value;
       }
       return arr.join('');
       
   }
   