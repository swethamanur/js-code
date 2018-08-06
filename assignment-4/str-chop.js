function stringChop(a,b){
    var obj = {
        str: a,
        num: b || 0,
        chop: function(){
           var result = [];
           if(this.num > 0){
            for(var i = 0; i < this.str.length; i += this.num){
               result.push(this.str.substr(i,this.num));
            } 
                return result
            } else{
                result.push(this.str);
                 return result
            }
    
        }
    }
    return obj.chop()
   }

   console.log(stringChop("resource",2));
   console.log(stringChop("resource"));