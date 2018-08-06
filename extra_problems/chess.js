/* write a function which draws a chess borad of width w and length l*/

function chessBoard(w,l){
    var res1 = '';
    var res2 = '';

    for(var i = 1; i <= l; i++){
        if( i% 2 !=0){
            for(var k = 0 ; k < (w/2); k ++){
                res1 = res1 + ' #'
            }
            
            console.log(res1 + '\n');
        } else {
            for(var k = 0 ; k < (w/2); k ++){
                res2 = res2 + '# '
            }
        
            console.log(res2 + '\n');
        }
    }
    return ''
}
console.log(chessBoard(10,8))