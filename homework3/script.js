
'use strict'

///// Task 1

console.log('Task 1');

 function getDay(n) {
        if (n%10 == 1 && n != 11) {
            console.log(n + ' день');
        } else if ( (n%10 > 1 && n%10 < 5) && (n < 11 || n > 14) ) {
            console.log(n + ' дня');
        } else {
             console.log(n + ' дней');
        }
    };

    getDay(3);
    getDay(21);
    getDay(6);



///// Task 2


function sumDigit (x) {
        if (x >= 10) {
            return x%10 + sumDigit(Math.floor(x/10));
        } else {
            return  x;    
        }         
    };
    console.log(sumDigit(953));


///// Task 3

console.log('Task 3');

function curry(a) {
  return function (b) {
     return a + b; 
  };
}
 
var x = curry(2);
console.log(x(-5)); 