
//Write a JavaScript function to test whether a string starts with a specified string. 
function startsWith(a,b){
    for(var i = 0; i < b.length; i++){
       if(a[i] == b[i]){
           return true;
       } else{
            return false;
            }
    }
   }

   console.log(startsWith('js string excercises','js')); //true