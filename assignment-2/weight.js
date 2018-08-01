/*
You are given two strings S1 and S2. You need to find weights of both strings and compare them. The weight of a string can be obtained by adding individual weights of the characters that make the string. The weight of individual characters are the position on which they occur in the English alphabets table; for eg, a has weight 1, z has weight 26.

Output:

Print 1 if the weight of the first string is greater. Print 2 if the weight of the second string is greater. Print equal if the weights are equal. */

function strWeight(str1,str2){
    var alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
       var sum1 = 0;
       var sum2 = 0;
       var firstStr = str1.split('');
       var secStr = str2.split('');
       for(var i = 0; i < firstStr.length; i++){
               sum1 = sum1 + (alphabets.indexOf(firstStr[i]) + 1);
       }
       
        for(var k = 0; k <secStr.length; k++){
           sum2 = sum2 + (alphabets.indexOf(secStr[k]) + 1);
       }
       
       if(sum1 > sum2){
           return 1
       } else if(sum1< sum2){
           return 2
       }else{
           return 'equal'
       }
   }