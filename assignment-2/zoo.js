/*
Write a function zooInventory that takes a zoo's inventory of animals (represented using nested arrays) and returns an array of strings that describe each animal's name, species, and age.
Each input array will be nested 3 levels deep. Study the examples below to understand how the data is structured.

Examples:
var myZoo = [
  ["King Kong", ["gorilla", 42]],
  ["Nemo", ["fish", 5]],
  ["Phil", ["groundhog", 11]]
];
INPUT: zooInventory(myZoo);
OUTPUT: (array below)
[
  'King Kong the gorilla is 42', 
  'Nemo the fish is 5',
  'Phil the groundhog is 11'
]*/

function zooInventory(arr){
	var output = [];
	for(var i = 0; i< arr.length; i++){	
		output.push(`${arr[i][0]} the ${arr[i][1][0]} is ${arr[i][1][1]}`)
	}
	return output
}