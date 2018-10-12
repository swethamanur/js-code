function minMaxKeyInObject(obj){
	let keys = Object.keys(obj);
    keys.forEach((num) => {
        num = Number(num);
    })

    console.log(keys)
    console.log(keys)
	let output = [];
	
	output.push(Number(keys[0]),Number(keys[keys.length - 1]));
	
	return output
}

console.log(minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' }));
