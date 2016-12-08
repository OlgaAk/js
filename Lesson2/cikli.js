'use strict';

console.log('циклы');

var pictures = 5;
while (pictures) {
    console.log(pictures);
    pictures --;
} console.log(pictures);



var plates = 10;
var detergent = 2;
while (detergent > 0 && plates > 0) {
     plates--;
     detergent -= 0.5;
     console.log('continue washing,', plates, 'plates are left')
}  console.log('detergent is finished', plates, 'plates are left');


for (var i = 0; i < 7; i++) {
    console.log(i);
}