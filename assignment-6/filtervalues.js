/*
Write a JavaScript function to filter false, null, 0 and blank values from an array. 

Test Data :
filterValues([58, '', 'abcd', true, null, false, 0]);
[58, "abcd", true]
*/



function filterValues(arr){
    var result = [];
       arr.forEach(function(value){
           if(value){
               result.push(value);
           }
       })
       return result
}


console.log(filterValues([58, '', 'abcd', true, null, false, 0]));