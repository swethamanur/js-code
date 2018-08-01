/*
Write a JavaScript program which prints the elements of the following array. 
Note : Use nested for loops.
Sample array : var a = [[1, 2], [8, 11]];
Sample Output : 
row 0
1
2
row 1
8
11
 */

function printArray(arr){
    var result = '';
        if(arr.length != 0){
             for(var k =0; k<arr.length; k++){
                result = result + `row ${k}'\n'`;
                 //console.log('row' + k + '\n');
                 for(var i = 0; i< arr[k].length; i++){
                    result = result + arr[k][i] + '\n'
                    //console.log(arr[k][i] + '\n');
            
                }
             }
            
        return result;
        } else if(arr.length == 0){
     
    return `empty array` }
     }
    