function abbreviate(a){
    var result = [];
       if(a.length != 0){
           a.split(" ").forEach(initial =>{
               result.push(initial[0].toUpperCase());//split returns an array
           })
               return result.join(".");//converts array to string
       } else {
           return ``;}
   }

   console.log(abbreviate('Samuel Johnson'))//S.J