/*
Complete the squareSum/square_sum/SquareSum method so that it squares each number passed into it and then sums the results together.

*/

function squareSum(a){
    var sum = 0;
       
       a.forEach(function(element){
           sum = sum + (element*element);
       })
       return sum;
   }
   
   console.log(squareSum([1,2,2]));//9