/*
Given two integers n and m. The problem is to find the number closest to n and divisible by m. If there are more than one such number, then output the one having maximum absolute value

Example:

Input:

2

13, 4

-15, 6

Output:

''

12

-18
*/


function closestNumber(a,b){
    if(typeof b != 'undefined'){
        let num = a / b;
        var result = Math.round(Math.abs(num)) * b;
        if(a < 0 || b < 0){
            result = result * (-1);
         }else{
        result = result * 1
        }
   
    }else{
        return ''
    }
    return result
}

console.log(closestNumber(13,4));
console.log(closestNumber(-15,6));