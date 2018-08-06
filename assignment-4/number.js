/*
Write a JavaScript function to generate an array between two integers of 1 step length. 

Test Data :
1. rangeBetween(4, 7); 
// returns [4, 5, 6, 7]

2. rangeBetween(-4, 7);
// returns [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
*/



function rangeBetween(a,b){
    var obj = {
        start : a,
        end: b,
        range: function(){
            var result = [];
            for(var i = this.start; i <= this.end; i++){
                result.push(i);
            }
            return result;
        }
    }
    return obj.range();
}

//console.log(rangeBetween(1,4));