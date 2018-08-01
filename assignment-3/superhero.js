/*
Write a function to display the powers of the given super hero 

 

var superHeroes = [
  {
    "name": "Molecule Man",
    "age": 29,
    "secretIdentity": "Dan Jukes",
    "powers": [
      "Radiation resistance",
      "Turning tiny",
      "Radiation blast"
    ]
  },
  {
    "name": "Madame Uppercut",
    "age": 39,
    "secretIdentity": "Jane Wilson",
    "powers": [
      "Million tonne punch",
      "Damage resistance",
      "Superhuman reflexes"
    ]
  }
]
TEST CASE -

1. superPower(superHeroes, "Molecule Man");
returns 'Radiation resistance, Turning tiny, Radiation blast'

2. superPower(superHeroes, 'Iron Man'); 
returns 'Iron Man is not in the super heroes list'
*/

function superPower(superHeroes,hero){
	var result = [];
	var result1 = [];
	var output = '';
	
	if(hero != ''){
		 for(var i =0 ; i < superHeroes.length; i++){
		 	result1.push(superHeroes[i]['name']); //pushing all the names in to the result1 array.
		 }
		
		if(result1.includes(hero)){ //checks if hero is present in the given array
			superHeroes.forEach(function(value){//if present, then goes into the array and returns the value that has the hero name
				if(value['name'] == hero){
					result.push(value['powers']);
				}
			})
		} else { //if not in the list, it prints the following
			output = `${hero} is not in the super heroes list`;
			return output
		}
		
	}else{ //if invalid input
		return 'invalid input';
	}
	output = result[0].join(', ');
	return output
}