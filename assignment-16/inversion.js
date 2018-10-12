/*
Given an array of numbers (not necessarily unique values), your goal is to measure how close the array is to being sorted by counting the number of inversions it has. An inversion occurs when two numbers in the array are out of order.

Implement a function called numInversions which counts the number of inversions in the array.

Examples:

numInversions([]); // 0

numInversions([5]); // 0

numInversions([1,2]); // 0

numInversions([2,1]); // 1

numInversions([1,2,3]); // 0

numInversions([1,3,2]); // 1

numInversions([3,1,2]); // 2

numInversions([3,2,1]); // 3

numInversions([5,3,4,1,2]); // 8

numInversions([1,1,1,1]); // 0

numInversions([2,2,1,1]); // 4

numInversions([3,3,3,2,2,1]); // 11

numInversions([8, 6, 6, 1, 1, 1, 3, 4, 2]); // 22
*/

// function numInversions(arr){
//     let count = 0;
//     for(var i = 0; i < arr.length; i++){
       
//         if(arr[i] > arr[i+1]){
//                 let temp = arr[i + 1];
//                 arr[i+1] = arr[i];
//                 arr[i] = temp;
//                 count++;
//                 console.log(arr[i],arr[i+1]);
//                if(i != 0){
//                 if(arr[i] < arr[i -1]){
//                     let temp = arr [ i -1];
//                     arr[i -1] = arr[i];
//                     arr[i] = temp;
//                     count++;
//                 }
//                } 
                
//             }

//             console.log(arr)    
//             }
           
            
//             return count
//     }
    

function numInversions(arr){
    let c = 0;
    for(var i =0; i <arr.length; i++){
        for(var k = i + 1; k < arr.length ; k++){
            if(arr[k] < arr[i] ){
                // let t = arr[i];
                // arr[i] = arr[k];
                // arr[k] = t;
                c++;
                //console.log(arr);
            }
        }
    }
    //console.log(arr);
    console.log(c)
    //return c;
}  


// console.log(numInversions([5,3,4,1,2]));//8
// console.log(numInversions([1,1,1,1])); // 0
// console.log(numInversions([8, 6, 6, 1, 1, 1, 3, 4, 2]))//22
numInversions([]); // 0

numInversions([5]); // 0

numInversions([1,2]); // 0

numInversions([2,1]); // 1

numInversions([1,2,3]); // 0

numInversions([1,3,2]); // 1

numInversions([3,1,2]); // 2

numInversions([3,2,1]); // 3

numInversions([5,3,4,1,2]); // 8

numInversions([1,1,1,1]); // 0

numInversions([2,2,1,1]); // 4

numInversions([3,3,3,2,2,1]); // 11

numInversions([8, 6, 6, 1, 1, 1, 3, 4, 2]); // 22
























