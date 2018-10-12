/*
You have given an unsorted array and you need to find the largest and smallest element in the array. don't use the method sort.
*/

function maxMinOfArray(arr){
    let min = arr[0];
    let result = [];	
    let output = [];	
    result.push(min);	
    for(var i =1 ; i <arr.length;i++){
        
       if(arr[i] < min){
        min = arr[i];			 
              result.unshift(min);
           
           }else if(arr[i] > result[result.length - 1]){
        result.push(arr[i]);
        
           }else{
               result.splice(result.length - 1,0,arr[i])
           }
           console.log(result);
      }	
      output.push(result[result.length-1]);
    output.push(result[0]);
  return output	
      
  }

  //console.log(maxMinOfArray([-20, 34, 21, -87, 92, 2147483647]));
  console.log(maxMinOfArray([10, -2147483648, -2]));