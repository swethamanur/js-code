/*
Write a JavaScript function to check whether an `input` is an array or not. 
Test Data :
1. isArray('dctacademy'); 
2. isArray([1, 2, 4, 0]);

Output :
1. false
2. true
*/
function isArray(a){
    if(Array.isArray(a) == true){
            return true;
    }else{
            return false
    }
   }