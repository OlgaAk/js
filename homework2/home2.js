'use strict';

// task 1

var x1 = 2;
var x2 = 3;
var x3 = 5;
var y1 = 0;
var y2 = 1;
var y3 = 6;
var z1 = 3;
var z2 = 5;
var z3 = 1;
var a = Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2) + (z1-z2)*(z1-z2));
var b = Math.sqrt((x2-x3)*(x2-x3) + (y2-y3)*(y2-y3) + (z2-z3)*(z2-z3));
var c = Math.sqrt((x3-x1)*(x3-x1) + (y3-y1)*(y3-y1) + (z3-z1)*(z3-z1));
console.log(a, b, c);
if (a*a + b*b == c*c || a*a + c*c == b*b || b*b + c*c == a*a) {
    console.log('Этот триугольник прямоугольный');
} else {
console.log('Этот триугольник не прямоугольный');
}


// task 2

var arr = [2, 0, 20, 7, 6];
 for (var j = arr.length - 1; j >= 0; j--) {
     var i = arr.length - 1 ;
     while (i >= 0) {
         if (arr[i] <= arr[i-1]) {
             var container = arr [i-1];
             arr[i-1] = arr [i];
             arr [i] = container;
             i--;
         } else {
             i--;
         }        
     }
 }
  console.log(arr);


// task 3

var a = 11;
var arr = [];

while (a > 0) {
   var    x = a%2;
    a /= 2;
    a = a - (a%1);
    arr.push(x); 
    console.log(a);
console.log(arr);
}

console.log(a);
console.log(arr);

var arrRev = arr.reverse();
console.log(arrRev);
var arrJoin = arrRev.join("");
console.log(arrJoin);
var result = +arrJoin;
console.log(result);
console.log(typeof result);

////back to decimal

var resultStr = result.toString();  
console.log(resultStr);
var resultSplit = resultStr.split('');
console.log(resultSplit);
var resultSplitRev = resultSplit.reverse();
console.log(resultSplitRev);
   var arr2 = [];
    arr2 = new Array();
for (var i = 0; i < resultSplitRev.length; i++) {
    var z = resultSplitRev[i] * Math.pow(2,i);
    arr2.push(z);
    console.log(z);
}
console.log(arr2);

var s = 0;
for(var i = 0; i < arr2.length; i++) {
    s += arr2[i];
}
 console.log(s);