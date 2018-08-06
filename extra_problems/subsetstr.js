/*
Find subset of the given string
input: 'dog'
output: ['d','o','g','do','og','dog','']; */

function subsetString(str){
    var result = [];
    var temp = 1;
    var count = 0;
    while(temp <= str.length){
    for(var j = 0 ; j < (str.length - count); j++){
        result.push(str.substr(j,temp))
    }
    count++
    temp++
}
    result.push('');
    return result
}

console.log(subsetString('dog'));
console.log(subsetString('hello'));