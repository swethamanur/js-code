// function highlightLandmarks(sentence,arr){
//     var result ;
//    arr.forEach(function(word){
//        var position = sentence.search(function(landmark){
//            console.log(landmark);
//            word == landmark;
//            console.log(position)
//        });
//     //    result.splice(position,0,'<b>')
//     //    result.splice((position + word.length + 1),0,'</b>');
//    })
//     //result = result.join(' ');
//     return result
   
   
// }

//console.log(highlightLandmarks('if one word could encapsulate the essence of this historic city it would be drama start your day at the show stopping pantheon followed by a gelato at the acclaimed trevi fountain then hop between buzzing bars in vivacious trastevere',['pantheon','trevi','trastevere']));

var sentence = 'if one word could encapsulate the essence of this historic city it would be drama start your day at the show stopping pantheon followed by a gelato at the acclaimed trevi fountain then hop between buzzing bars in vivacious trastevere'

var arr = ['pantheon','trevi','trastevere'];
function highlightLandmarks(sentence,arr){
	if(arr.length > 0){
 	
	arr.forEach(function(word){
		var position = sentence.search(word)
		sentence = sentence.replace(word,`<b>${word}</b>`)
	})
	
	}else{
	return sentence
	}	
	return sentence
}
console.log(highlightLandmarks(sentence,arr));
