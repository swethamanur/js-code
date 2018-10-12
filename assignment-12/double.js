function doubleTheValue(arr,input){
    if(arr.length > 0){
        while(arr.includes(input)){
            input = input*2;
        }
    }else{
        return [];
    }
    
    return input
}

let arr = [];
console.log(doubleTheValue(arr,2));