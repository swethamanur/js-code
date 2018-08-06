/*
Title: Fill Array with index
Total Test Cases: 2

Body:

Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds.

Test Data : 
1. numStringrange('a', "z", 2);
    return ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]
    */

function numStringrange(a,b,num){
    var obj ={
        
        range: function(){
            var result = [];
            if(typeof a == 'string' ){
                var alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
                //var alphabets = 'abcdefghijklmnopqrstuvwxyz';
                var start = alphabets.indexOf(a);
                
                var end = alphabets.indexOf(b);
                console.log(start,end)
                for(var i = start; i<= end; i += num){
                    result.push(alphabets[i]);
                }
                 
            }else{
                for(var i = a; i <= b; i += num ){
                    result.push(i);   
            }
            }
            
            return result
        }
    }
    return obj.range();
}
console.log(numStringrange(1, 10, 2));
console.log(numStringrange('a','z',2))