/*
Write a function, changeKeys, which will take an array of musical keys and transpose those keys a specified number of steps.

In music the chromatic scale has the following notes [A, A#, B, C, C#, D, D#, E, F, F#, G, G#]. A '#' is "sharp" notation. A#, or A sharp, is in between A and B. Your function changeKeys() should take an array of notes and a number between 1-9 as the number of steps. The function should return an array with all the notes in the array transposed up that many steps.
*/

var keys = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];

function changeKeys(arr,steps){
    if((steps < 10 ) && (steps > 0)){
        var result = [];
        var position = keys.indexOf(arr[0]);
        for(var i = 0; i < arr.length; i++){
            if(position + steps > keys.length){
                result.push(keys[(position + steps) - keys.length]);
            }
            else{
                result.push(keys[position + steps]);
            }
            position++;
        }
    }else{
        return `index outofbound`
    }
    return result
}

console.log(changeKeys(['G'],5));//['C'];
console.log(changeKeys(['A','A#','B'], 3));//['C','C#','D']
console.log(changeKeys(['A','A#','B'], 0))//out of bound
console.log(changeKeys(['E', 'F'], 1));//['F', 'F#']
