/*
Given a "square" array of subarrays, find the sum of values from the first value of the first array, the second value of the second array, the third value of the third array, and so on...
*/

function diagonalSum(arr){
    let sum = 0;
    let i = 0
    arr.forEach((element) => {
        sum += element[i];
        i++;
    })
    return sum
}

exampleArray = [[1, 0, 0, 0, 0],[0, 1, 0, 0, 0],[0, 0, 1, 0, 0],[0, 0, 0, 1, 0],[0, 0, 0, 0, 1]];
console.log(diagonalSum(exampleArray));