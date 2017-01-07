(function () {
'use strict';

console.log('Обработка событий');
 var btnBrush = document.createElement('input'); 
 btnBrush.classList.add('btnBrush');
 btnBrush.setAttribute('value', 'Кисть');
 btnBrush.setAttribute('type', 'button');

 var btnColor = document.createElement('input');
  btnColor.classList.add('btnColor');
  btnColor.setAttribute('type','color');
    
   
 var brushSize = document.createElement('input'); 
 brushSize.setAttribute('type', 'range');
 brushSize.setAttribute('value', '3');
  brushSize.classList.add('brushSize');


 var btnErase = document.createElement('input'); 
  btnErase.classList.add('btnErase');
   btnErase.setAttribute('value','Стёрка');
   btnErase.setAttribute('type', 'button');

var elem = document.getElementById('menu'); 
											
		elem.appendChild(btnBrush); 
        elem.appendChild(btnColor); 
        elem.appendChild(brushSize);
        elem.appendChild(btnErase); 


 var canvas = document.createElement('canvas'); 
  canvas.classList.add('canv');

var wrap = document.getElementById('wrapper');
 wrap.appendChild(canvas); 

var ctx = canvas.getContext('2d');
 
var paint_style = getComputedStyle(canvas);
canvas.width = parseInt(paint_style.getPropertyValue('width'));
canvas.height = parseInt(paint_style.getPropertyValue('height'));

var mouse = {x: 0, y: 0};
 
ctx.lineWidth = 3;

btnColor.addEventListener("input", function() {
    ctx.strokeStyle = btnColor.value;
});

brushSize.addEventListener("input", function() {
    ctx.lineWidth = brushSize.value;
});

btnErase.addEventListener('click', function() {
    ctx.strokeStyle = "#FFFFFF";
    ctx.lineWidth = 8;
});

btnBrush.addEventListener('click', function() {
     ctx.lineWidth = brushSize.value;
      ctx.strokeStyle = btnColor.value;
});

canvas.addEventListener('mousemove', function(e) {
  mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;
}, false);


canvas.addEventListener('mousedown', function(e) {
    ctx.beginPath();
    ctx.moveTo(mouse.x, mouse.y);
 
    canvas.addEventListener('mousemove', onPaint, false);
}, false);
 
canvas.addEventListener('mouseup', function() {
    canvas.removeEventListener('mousemove', onPaint, false);
}, false);
 
var onPaint = function() {
    ctx.lineTo(mouse.x, mouse.y);
    ctx.stroke();
};



}()); 