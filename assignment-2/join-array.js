/*
Write a simple JavaScript Function to join all elements of the following array into a string. 
Sample array : myColor = ["Red", "Green", "White", "Black"];
joinArray(myColor,",");
joinArray(myColor,"+");


Expected Output : 
"Red,Green,White,Black"
"Red+Green+White+Black"
*/

function joinArray(arr,delimiter){
    if(arr.length > 0){
       var result = arr.join(delimiter); //converts an array back to string
       return result
    } else {
       return 'invalid input' 
    } 
}