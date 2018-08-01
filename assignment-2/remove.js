/*
Write a JavaScript function to remove a specific element from an array. 

Test data :
console.log(removeArrayElements([2, 5, 9, 6], 5));
output - [2, 9, 6]
*/

function removeArrayElements(arr,part){
    var index = arr.indexOf(part); // checks which index to be deleted at
       if (index >= 0){
       arr.splice(index,1); // returns the array with deleted elements; splice returns the deleted items
       
       return arr; //returns the spliced array
       } else {
           return arr;
       }
}