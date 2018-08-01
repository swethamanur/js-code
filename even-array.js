var nums = [10,12.30,45,40];

function findEven(nums){
    nums.filter(function(n){
        return n%2 == 0;
    })
}

console.log(findEven(nums))